#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
publish_release.py — раскладывает собранный APK по местам и обновляет выгрузку.

Запускается из каталога сайта, после `gradlew assembleRelease`:

    python tools/publish_release.py --app-notes "Что нового"

Что делает:
  1. Читает версию и идентификатор приложения из gradle.properties проекта.
  2. Находит собранный APK, проверяет, что он подписан и что версия внутри
     совпадает с той, что в gradle.properties.
  3. Копирует его в каталог выгрузки под правильным именем.
  4. Запускает build_app_feed.py, чтобы манифест указал на новую версию.

Третий шаг — единственный, ради которого стоило бы писать скрипт; остальные
нужны, потому что именно на них легко ошибиться молча. Забыть пересобрать
после смены версии, выложить неподписанный файл, промахнуться с именем —
всё это не даёт никакой ошибки, а просто тихо не работает у людей.
"""

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

DEFAULT_ANDROID_PROJECT = '../o-maps-calendar-android'
APK_NAME_TEMPLATE = 'o-maps-{app}-{version}.apk'

# Постоянное имя для ссылки на странице сайта. Идентификатор приложения в нём
# нужен по двум причинам: файл попадает в «Загрузки» на телефоне, где просто
# latest.apk ни о чём не говорит, и второе приложение не должно столкнуться
# с первым по имени.
LATEST_NAME_TEMPLATE = 'o-maps-{app}-latest.apk'

# Куда Gradle кладёт результат assembleRelease.
RELEASE_DIR = Path('app') / 'build' / 'outputs' / 'apk' / 'release'
SIGNED_NAME = 'app-release.apk'
UNSIGNED_NAME = 'app-release-unsigned.apk'


def read_gradle_properties(project: Path) -> dict:
    """Разбирает gradle.properties Android-проекта в словарь."""
    path = project / 'gradle.properties'
    if not path.exists():
        sys.exit(f'не найден {path}\nукажите каталог проекта ключом --android-project')

    values = {}
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith(('#', '!')) or '=' not in line:
            continue
        key, value = line.split('=', 1)
        values[key.strip()] = value.strip()
    return values


def published_version(target_dir: Path) -> dict:
    """Сведения о версии из manifest.json, уже лежащего в каталоге выгрузки."""
    path = target_dir / 'manifest.json'
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8')).get('app') or {}
    except (ValueError, OSError):
        return {}


def find_aapt2() -> Path | None:
    """
    Ищет aapt2 в Android SDK. Нужен, чтобы заглянуть внутрь APK.

    Инструмент необязательный: без него проверка версии пропускается,
    а всё остальное работает. Поэтому ищем молча и не падаем.
    """
    if shutil.which('aapt2'):
        return Path(shutil.which('aapt2'))

    roots = [os.environ.get('ANDROID_HOME'), os.environ.get('ANDROID_SDK_ROOT')]
    local = os.environ.get('LOCALAPPDATA')
    if local:
        roots.append(str(Path(local) / 'Android' / 'Sdk'))
    roots.append(str(Path.home() / 'Android' / 'Sdk'))

    for root in filter(None, roots):
        build_tools = Path(root) / 'build-tools'
        if not build_tools.is_dir():
            continue
        # Самая свежая версия инструментов: имена вида 35.0.0, 36.0.0.
        for version in sorted(build_tools.iterdir(), reverse=True):
            for name in ('aapt2', 'aapt2.exe'):
                candidate = version / name
                if candidate.exists():
                    return candidate
    return None


def read_apk_version(apk: Path) -> dict | None:
    """versionCode и versionName из самого APK или None, если aapt2 не нашёлся."""
    aapt2 = find_aapt2()
    if aapt2 is None:
        return None

    proc = subprocess.run(
        [str(aapt2), 'dump', 'badging', str(apk)],
        capture_output=True,
    )
    if proc.returncode != 0:
        return None

    head = proc.stdout.decode('utf-8', 'replace').splitlines()[0]
    values = {}
    for key, field in (("versionCode='", 'versionCode'), ("versionName='", 'versionName')):
        if key in head:
            values[field] = head.split(key, 1)[1].split("'", 1)[0]
    return values or None


def locate_apk(project: Path) -> Path:
    """Находит подписанный APK и внятно объясняет, если его нет."""
    release = project / RELEASE_DIR
    signed = release / SIGNED_NAME
    unsigned = release / UNSIGNED_NAME

    if signed.exists():
        return signed

    if unsigned.exists():
        sys.exit(f'найден только неподписанный {unsigned}\n'
                 f'значит, при сборке не было keystore.properties — '
                 f'без подписи приложение не установится')

    sys.exit(f'не найден {signed}\nсначала выполните: gradlew assembleRelease')


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--android-project', default=DEFAULT_ANDROID_PROJECT, type=Path,
                        help=f'каталог Android-проекта (по умолчанию {DEFAULT_ANDROID_PROJECT})')
    parser.add_argument('--out', default='app', type=Path,
                        help='корневой каталог выгрузки (по умолчанию app)')
    parser.add_argument('--app-notes', default=None,
                        help='что нового — показывается людям в приложении')
    parser.add_argument('--latest', action='store_true',
                        help='положить рядом копию с постоянным именем '
                             'o-maps-<appId>-latest.apk')
    parser.add_argument('--no-feed', action='store_true',
                        help='только скопировать apk, выгрузку не пересобирать')
    parser.add_argument('--force', action='store_true',
                        help='перевыложить ту же версию: перезаписать apk '
                             'и не требовать роста versionCode')
    args = parser.parse_args()

    project = args.android_project
    settings = read_gradle_properties(project)

    app_id = settings.get('omaps.appId')
    version_name = settings.get('omaps.versionName')
    version_code = settings.get('omaps.versionCode')
    if not app_id or not version_name or not version_code:
        sys.exit(f'в {project / "gradle.properties"} не хватает omaps.appId, '
                 f'omaps.versionName или omaps.versionCode')

    apk = locate_apk(project)

    # Сверка версии внутри APK с той, что в gradle.properties. Ловит самую
    # обидную ошибку: цифры подняли, а пересобрать забыли — тогда выложится
    # старый файл, а манифест объявит новую версию, и люди будут скачивать
    # то, что у них уже стоит.
    inside = read_apk_version(apk)
    if inside is None:
        print('  ! aapt2 не найден, версия внутри apk не проверена', file=sys.stderr)
    elif (inside.get('versionName'), inside.get('versionCode')) != (version_name, version_code):
        sys.exit(f'версия в apk ({inside.get("versionName")}, code '
                 f'{inside.get("versionCode")}) не совпадает с gradle.properties '
                 f'({version_name}, code {version_code})\n'
                 f'похоже, после изменения версии сборка не повторялась')

    target_dir = args.out / app_id
    target_dir.mkdir(parents=True, exist_ok=True)

    # versionCode обязан вырасти. Сообщение об обновлении приложение
    # показывает по нему, а не по названию: подняв только versionName,
    # легко выложить версию, которую никто не увидит. Ошибка тихая —
    # выкладывается всё как надо, просто ничего не происходит.
    published = published_version(target_dir)
    previous_code = published.get('versionCode')
    if previous_code is not None and int(version_code) <= int(previous_code) and not args.force:
        sys.exit(f'versionCode не изменился: на сайте уже {previous_code}, '
                 f'в gradle.properties {version_code}\n'
                 f'поднимите omaps.versionCode — по нему приложение узнаёт '
                 f'об обновлении. Перевыложить ту же версию можно ключом --force')
    target = target_dir / APK_NAME_TEMPLATE.format(app=app_id, version=version_name)

    if target.exists() and not args.force:
        sys.exit(f'{target} уже существует\n'
                 f'поднимите версию или перезапишите ключом --force')

    shutil.copy2(apk, target)
    size_mb = target.stat().st_size / 1024 / 1024
    print(f'apk:       {target}  ({size_mb:.1f} МБ)')

    if args.latest:
        # Постоянный адрес для ссылки на странице сайта: её не придётся
        # править при каждом выпуске.
        latest = target_dir / LATEST_NAME_TEMPLATE.format(app=app_id)
        shutil.copy2(apk, latest)
        print(f'копия:     {latest}')

    if args.no_feed:
        print('выгрузка не пересобиралась (--no-feed)')
        return

    feed_script = Path(__file__).resolve().parent / 'build_app_feed.py'
    command = [sys.executable, str(feed_script),
               '--out', str(args.out),
               '--app-id', app_id,
               '--android-project', str(project)]
    if args.app_notes:
        command += ['--app-notes', args.app_notes]

    print()
    result = subprocess.run(command)
    if result.returncode != 0:
        sys.exit('выгрузка не пересобралась — apk скопирован, но манифест '
                 'на новую версию не указывает')


if __name__ == '__main__':
    main()
