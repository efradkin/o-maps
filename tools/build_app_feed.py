#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_app_feed.py — собирает JSON-выгрузку календаря для Android-приложения.

Читает js/calendar-*.js, js/starts.js, js/owners.js, js/planners.js,
js/global-menu.js и раздел `regions` из js/utils.js, после чего кладёт
в каталог выгрузки два файла:

    app/calendar.json      — сами события и меню сайта
    app/manifest.json      — версия, размер, sha256 и дата сборки

Приложение сначала скачивает manifest.json (несколько сотен байт) и лезет
за calendar.json только если sha256 изменился. Поэтому manifest.json нужно
отдавать без кэширования, а calendar.json можно кэшировать надолго.

Разбором JS занимается Node (extract_feed.js), лежащий рядом: заводить
собственный парсер JavaScript смысла нет, а eval в Node — ровно тот же
приём, которым и так проверяется синтаксис файлов данных.

Исходные файлы сайта не изменяются: скрипт только читает их и пишет
в каталог выгрузки.

Использование:
    python build_app_feed.py                      # js/ -> app/
    python build_app_feed.py --js-dir js --out app
    python build_app_feed.py --check              # сборка во временный
                                                  # каталог, только проверка
"""

import argparse
import hashlib
import json
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_SITE = 'https://o-maps.spb.ru/'
EXTRACTOR = 'extract_feed.js'

# Где лежит проект Android-приложения относительно каталога сайта.
# Нужен, чтобы не переписывать версию руками в двух местах: скрипт читает
# её прямо из gradle.properties проекта. Путь можно переопределить ключом
# --android-project или отключить чтение ключом --no-android-project.
DEFAULT_ANDROID_PROJECT = '../o-maps-calendar-android'

# Каждое приложение живёт в своём подкаталоге выгрузки:
#
#   app/calendar/manifest.json   app/calendar/spb.json   app/calendar/*.apk
#   app/ski/manifest.json        app/ski/ski.json        app/ski/*.apk
#
# Имена файлов у всех одинаковые, различается только каталог. Так приложению
# не нужно ничего знать о соседях — в нём меняется одна константа FEED_BASE,
# а правила отдачи на сервере пишутся один раз на весь app/.
DEFAULT_APP_ID = 'calendar'

# Наборов данных у одного приложения может быть несколько: например, обычный
# календарь и лыжный, между которыми переключаются внутри приложения. Каждый
# лежит своим файлом, все перечислены в manifest.json в разделе datasets.
DEFAULT_DATASET = 'spb'
DEFAULT_DATASET_TITLE = 'Санкт-Петербург'

APK_NAME_TEMPLATE = 'o-maps-{app}-{version}.apk'


def run_extractor(js_dir: Path, site: str) -> dict:
    """Вызывает Node-экстрактор и возвращает разобранную выгрузку."""
    extractor = Path(__file__).resolve().parent / EXTRACTOR
    if not extractor.exists():
        sys.exit(f'не найден {extractor}')
    if shutil.which('node') is None:
        sys.exit('не найден node — установите Node.js')

    proc = subprocess.run(
        ['node', str(extractor), str(js_dir), site],
        capture_output=True,
    )
    if proc.returncode != 0:
        sys.stderr.write(proc.stderr.decode('utf-8', 'replace'))
        sys.exit(f'extract_feed.js завершился с кодом {proc.returncode}')

    return json.loads(proc.stdout.decode('utf-8'))


def sanity_check(feed: dict) -> list:
    """Грубые проверки: пустая или покалеченная выгрузка не должна уехать на сайт."""
    problems = []
    events = feed.get('events', [])

    if len(events) < 1000:
        problems.append(f'подозрительно мало событий: {len(events)}')
    if not feed.get('menu'):
        problems.append('меню не разобралось')

    no_date = [e for e in events if not e.get('date')]
    if no_date:
        problems.append(f'событий без даты: {len(no_date)}')

    no_name = [e for e in events if not e.get('name')]
    if no_name:
        problems.append(f'событий без названия: {len(no_name)}')

    ids = [e['id'] for e in events if e.get('id')]
    if len(ids) != len(set(ids)):
        problems.append('идентификаторы событий не уникальны')

    bad_links = sum(
        1
        for e in events
        for link in e.get('links', [])
        if not str(link.get('url', '')).startswith('http')
    )
    if bad_links:
        problems.append(f'ссылок с неабсолютным адресом: {bad_links}')

    return problems


def read_manifest(out_dir: Path) -> dict:
    """Прежний manifest.json или пустой словарь, если его ещё нет."""
    path = out_dir / 'manifest.json'
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except (ValueError, OSError):
        return {}


def read_gradle_properties(project: Path) -> dict:
    """Разбирает gradle.properties Android-проекта в словарь."""
    path = project / 'gradle.properties'
    if not path.exists():
        sys.exit(f'не найден {path}\n'
                 f'укажите путь ключом --android-project или отключите '
                 f'чтение ключом --no-android-project')

    values = {}
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith(('#', '!')) or '=' not in line:
            continue
        key, value = line.split('=', 1)
        values[key.strip()] = value.strip()
    return values


def read_android_version(project: Path) -> dict:
    """
    Достаёт версию приложения из gradle.properties Android-проекта.

    Раньше значения выискивались регулярным выражением в build.gradle.kts.
    Properties-файл для этого куда надёжнее: формат простой и не меняется
    от того, как переписали скрипт сборки.
    """
    values = read_gradle_properties(project)
    code = values.get('omaps.versionCode')
    name = values.get('omaps.versionName')

    if not code or not name:
        sys.exit(f'в {project / "gradle.properties"} не нашлись '
                 f'omaps.versionCode и omaps.versionName')

    return {'versionCode': int(code), 'versionName': name}


def resolve_app_block(args, out_dir: Path) -> tuple:
    """
    Собирает раздел `app` для manifest.json.

    Выгрузка пересобирается часто, а версия приложения меняется редко, поэтому
    при отсутствии аргументов сведения переносятся из предыдущего manifest.json.
    Иначе каждый пересбор календаря стирал бы информацию об обновлении.
    """
    previous = read_manifest(out_dir).get('app') or {}

    given = {
        'versionCode': args.app_version_code,
        'versionName': args.app_version_name,
        'url': args.app_url,
        'notes': args.app_notes,
    }

    # Версия читается из Android-проекта, если он доступен. Ключи командной
    # строки остаются и перекрывают прочитанное — на случай, когда проект
    # лежит на другой машине.
    from_gradle = {}
    if args.android_project is not None:
        project = Path(args.android_project)
        # Путь по умолчанию — догадка. Если её не подтвердили и каталога нет,
        # молча работаем как раньше: выгрузка календаря не должна ломаться
        # оттого, что рядом не оказалось проекта приложения.
        explicit = args.android_project != DEFAULT_ANDROID_PROJECT
        if explicit or project.is_dir():
            from_gradle = read_android_version(project)

    if not from_gradle and not any(v is not None for v in given.values()):
        return (previous or None), 'перенесена из прежнего manifest.json'

    block = dict(previous)
    block.update(from_gradle)
    block.update({k: v for k, v in given.items() if v is not None})

    # Имя apk предсказуемо, поэтому адрес достраивается сам.
    if from_gradle and args.app_url is None:
        apk = APK_NAME_TEMPLATE.format(app=args.app_id, version=block['versionName'])
        relative = f'{args.out.name}/{args.app_id}/{apk}'
        block['url'] = args.site.rstrip('/') + '/' + relative
        if not (out_dir / apk).exists():
            print(f'  ! файла {out_dir / apk} нет — не забудьте положить apk '
                  f'рядом с выгрузкой', file=sys.stderr)

    if 'versionCode' not in block or 'url' not in block:
        sys.exit('нужны как минимум --app-version-code и --app-url '
                 '(или доступный --android-project)')
    if previous.get('versionCode') and block['versionCode'] < previous['versionCode']:
        sys.exit(f'versionCode {block["versionCode"]} меньше прежнего '
                 f'{previous["versionCode"]} — приложение такое обновление не покажет')

    source = 'из gradle.properties' if from_gradle else 'задана вручную'
    return block, source


def write_output(
    feed: dict,
    out_dir: Path,
    dataset: str,
    dataset_title: str,
    app_block: dict | None = None,
) -> tuple:
    """
    Пишет файл набора данных и manifest.json. Возвращает (путь, размер, sha256).

    Сведения о прочих наборах переносятся из прежнего манифеста: сборка
    лыжного календаря не должна стирать из манифеста обычный.
    """
    out_dir.mkdir(parents=True, exist_ok=True)

    # separators без пробелов и ensure_ascii=False: кириллица занимает вдвое
    # меньше места, чем \uXXXX, а gzip дожимает остальное.
    payload = json.dumps(feed, ensure_ascii=False, separators=(',', ':'))
    data = payload.encode('utf-8')
    digest = hashlib.sha256(data).hexdigest()

    file_name = f'{dataset}.json'
    dataset_path = out_dir / file_name
    dataset_path.write_bytes(data)

    entry = {
        'id': dataset,
        'title': dataset_title,
        'url': file_name,
        'events': len(feed.get('events', [])),
        'size': len(data),
        'sha256': digest,
    }

    previous = read_manifest(out_dir)
    datasets = [d for d in previous.get('datasets', []) if d.get('id') != dataset]
    datasets.append(entry)
    datasets.sort(key=lambda d: d['id'] != DEFAULT_DATASET)

    primary = datasets[0]
    manifest = {
        'schema': feed.get('schema', 1),
        'generated': datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        # Поля основного набора продублированы наверху: приложение читает
        # именно их, а datasets появился позже и нужен для переключения
        # между календарями внутри одного приложения.
        'events': primary['events'],
        'size': primary['size'],
        'sha256': primary['sha256'],
        'url': primary['url'],
        'datasets': datasets,
    }
    if app_block:
        manifest['app'] = app_block
    (out_dir / 'manifest.json').write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + '\n',
        encoding='utf-8',
    )

    return dataset_path, len(data), digest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--js-dir', default='js', type=Path,
                        help='каталог с файлами данных сайта (по умолчанию js)')
    parser.add_argument('--out', default='app', type=Path,
                        help='корневой каталог выгрузки (по умолчанию app)')
    parser.add_argument('--app-id', default=DEFAULT_APP_ID,
                        help='подкаталог приложения внутри --out '
                             f'(по умолчанию {DEFAULT_APP_ID})')
    parser.add_argument('--dataset', default=DEFAULT_DATASET,
                        help=f'идентификатор набора данных (по умолчанию {DEFAULT_DATASET})')
    parser.add_argument('--dataset-title', default=None,
                        help='название набора для переключателя в приложении')
    parser.add_argument('--site', default=DEFAULT_SITE,
                        help=f'адрес сайта (по умолчанию {DEFAULT_SITE})')
    parser.add_argument('--check', action='store_true',
                        help='собрать во временный каталог и только проверить')

    app = parser.add_argument_group(
        'сведения о версии приложения',
        'Записываются в manifest.json, по ним приложение показывает, что вышло '
        'обновление. Если не указывать, прежние сведения переносятся из старого '
        'manifest.json — выгрузку можно пересобирать хоть каждый день, не трогая их.')
    app.add_argument('--android-project', default=DEFAULT_ANDROID_PROJECT,
                     help='каталог Android-проекта: версия читается из '
                          f'его gradle.properties (по умолчанию {DEFAULT_ANDROID_PROJECT})')
    app.add_argument('--no-android-project', dest='android_project',
                     action='store_const', const=None,
                     help='не читать версию из Android-проекта')
    app.add_argument('--app-version-code', type=int,
                     help='versionCode новой сборки (целое, строго возрастающее)')
    app.add_argument('--app-version-name', help='versionName, например 1.1')
    app.add_argument('--app-url', help='полный адрес apk-файла')
    app.add_argument('--app-notes', help='что нового, одной-двумя фразами')
    args = parser.parse_args()

    if not args.js_dir.is_dir():
        sys.exit(f'нет каталога {args.js_dir}')

    feed = run_extractor(args.js_dir, args.site)

    problems = sanity_check(feed)
    if problems:
        print('Проверка выгрузки:', file=sys.stderr)
        for p in problems:
            print(f'  ! {p}', file=sys.stderr)
        if not args.check:
            sys.exit('выгрузка не записана')

    target = args.out / args.app_id
    out_dir = Path(tempfile.mkdtemp(prefix='omaps-feed-')) if args.check else target
    app_block, app_source = resolve_app_block(args, target)
    path, size, digest = write_output(
        feed=feed,
        out_dir=out_dir,
        dataset=args.dataset,
        dataset_title=args.dataset_title or DEFAULT_DATASET_TITLE,
        app_block=app_block,
    )

    events = feed['events']
    years = sorted({e['date'][:4] for e in events if e.get('date')})
    with_links = sum(1 for e in events if e.get('links'))

    print(f'событий:   {len(events)}  ({years[0]}–{years[-1]})')
    print(f'с кнопками: {with_links}')
    print(f'пунктов меню верхнего уровня: {len(feed["menu"])}')
    print(f'размер:    {size / 1024:.0f} КБ  (около {size / 1024 / 8:.0f} КБ в gzip)')
    print(f'sha256:    {digest[:16]}…')
    print(f'приложение: {args.app_id}   набор: {args.dataset}')
    print(f'записано:  {path}')
    if app_block:
        print(f'версия приложения: {app_block.get("versionName", "?")} '
              f'(code {app_block["versionCode"]}, {app_source})')
        print(f'           apk: {app_block["url"]}')
    else:
        print('сведений о версии приложения нет')

    if args.check:
        shutil.rmtree(out_dir, ignore_errors=True)
        print('режим проверки: временный каталог удалён')


if __name__ == '__main__':
    main()
