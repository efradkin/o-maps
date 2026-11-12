#!/usr/bin/env python3
"""Преобразует JPEG в WebP (quality=75, method=6) в выбранной папке и подпапках.

Выходной файл кладётся рядом с JPEG, под тем же именем с расширением .webp.
Созданные WebP добавляются в индекс Git через «git add».
Исходный JPEG удаляется по умолчанию: если файл отслеживается Git, используется
«git rm» (удаление с диска + постановка удаления в индекс). Коммит НЕ делается.
Для неотслеживаемых файлов выполняется обычное удаление с диска.

Для работы требуется Pillow с поддержкой WebP:
  python -m pip install Pillow

Запуск из корня проекта:
  python tools/jpg2webp.py --dir news
  python tools/jpg2webp.py --dir news --files 'pic_*.jpg'
  python tools/jpg2webp.py --dir original_maps --delete n

Параметры:
  --dir ПАПКА      папка для рекурсивной обработки (обязательный параметр)
  --files МАСКА    маска имён файлов, без учёта регистра; по умолчанию все
                   *.jpg, *.jpeg, *.jpe и *.jfif (регистр расширения любой)
  --delete y|n     удалять исходные JPEG (по умолчанию y); n — оставить их
  -h, --help       эта справка

Прогресс-бар, как в check_upload.py, виден только в терминале.
Готовые WebP не перезаписываются. При ошибке преобразования или удаления JPEG
сохраняется. Если два JPEG дают одно имя WebP, оба пропускаются.
Новые WebP добавляются в Git автоматически, даже при --delete n.
Если папка вне Git-репозитория, WebP просто создаётся на диске.
Никаких настроек Git в отдельном файле не нужно: используется Git репозитория,
в котором лежит обрабатываемый файл.

Код завершения: 0 — всё обработано, 1 — были ошибки или конфликты.
"""
import argparse
import fnmatch
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time
import uuid

BAR_WIDTH = 30
JPEG_EXTENSIONS = {'.jpg', '.jpeg', '.jpe', '.jfif'}


def duration(seconds):
    """«14 с», «2 мин 05 с», «1 ч 03 мин»."""
    s = int(round(seconds))
    if s < 60:
        return f'{s} с'
    if s < 3600:
        return f'{s // 60} мин {s % 60:02d} с'
    return f'{s // 3600} ч {s % 3600 // 60:02d} мин'


class Progress:
    """Прогресс-бар в одной строке stderr; выключен, если stderr — не консоль."""

    def __init__(self, total, fmt=None):
        self.total, self.started, self.shown, self.width = total, time.time(), 0.0, 0
        self.fmt = fmt or (lambda done, total: f'{done:>{len(str(total))}}/{total}')
        self.on, self.finished = sys.stderr.isatty(), False

    def update(self, done, note=''):
        now = time.time()
        if not self.on or self.finished or (done < self.total and now - self.shown < 0.1):
            return
        self.shown = now
        frac = done / self.total if self.total else 1.0
        full = int(frac * BAR_WIDTH)
        elapsed = now - self.started
        line = (f'[{'█' * full}{'░' * (BAR_WIDTH - full)}] {self.fmt(done, self.total)}'
                f' {frac:4.0%}  {note}{"  " if note else ""}прошло {duration(elapsed)}')
        if 0 < done < self.total:
            line += f', осталось ~{duration(elapsed / done * (self.total - done))}'
        line = line[:shutil.get_terminal_size().columns - 1]
        pad = max(0, self.width - len(line))
        self.width = len(line)
        sys.stderr.write('\r' + line + ' ' * pad)
        if done == self.total:
            sys.stderr.write('\n')
            self.finished = True
        sys.stderr.flush()


def find_files(folder, mask):
    """Находит JPEG рекурсивно, сортирует пути, не ходит по симлинкам на папки."""
    result = []
    for root, dirs, files in os.walk(folder):
        dirs[:] = sorted(d for d in dirs if not d.startswith('.') and not (Path(root) / d).is_symlink())
        for name in sorted(files):
            path = Path(root) / name
            if (not name.startswith('.') and not path.is_symlink()
                    and path.suffix.lower() in JPEG_EXTENSIONS
                    and (mask is None or fnmatch.fnmatchcase(name.lower(), mask.lower()))):
                result.append(path)
    return result


def git_info(source):
    """(корень Git, относительный путь) или (None, None), если вне репозитория."""
    try:
        p = subprocess.run(['git', '-C', str(source.parent), 'rev-parse', '--show-toplevel'],
                           text=True, encoding='utf-8', errors='replace', capture_output=True)
    except FileNotFoundError:
        # Без Git допустима конвертация вне репозитория, но в репозитории удалять небезопасно.
        if any((p / '.git').exists() for p in (source.parent, *source.parent.parents)):
            raise RuntimeError('Git не найден; удаление из репозитория невозможно')
        return None, None
    if p.returncode != 0:
        return None, None
    root = Path(p.stdout.strip()).resolve()
    return root, source.resolve().relative_to(root).as_posix()


def stage_webp(target):
    """Добавляет новый WebP в индекс Git; вне репозитория ничего не делает."""
    root, rel = git_info(target)
    if root is None:
        return False
    result = subprocess.run(['git', '-C', str(root), 'add', '--', rel],
                            text=True, encoding='utf-8', errors='replace', capture_output=True)
    if result.returncode != 0:
        raise RuntimeError('git add: ' + (result.stderr.strip() or result.stdout.strip()))
    return True


def remove_source(source):
    """Удаляет JPEG; tracked -> git rm, иначе обычный unlink."""
    root, rel = git_info(source)
    if root is not None:
        tracked = subprocess.run(['git', '-C', str(root), 'ls-files', '--error-unmatch', '--', rel],
                                 capture_output=True)
        if tracked.returncode == 0:
            removed = subprocess.run(['git', '-C', str(root), 'rm', '--', rel],
                                     text=True, encoding='utf-8', errors='replace', capture_output=True)
            if removed.returncode != 0:
                raise RuntimeError('git rm: ' + (removed.stderr.strip() or removed.stdout.strip()))
            return 'git'
    source.unlink()
    return 'disk'


def convert(source, target):
    """Создаёт и проверяет WebP; неполный файл никогда не занимает имя результата."""
    from PIL import Image

    temp = target.with_name(f'.{target.name}.{uuid.uuid4().hex}.tmp')
    try:
        with Image.open(source) as image:
            image.load()
            if image.format != 'JPEG':
                raise ValueError('не JPEG, несмотря на расширение')
            size = image.size
            # Сохраняем EXIF и ICC профиль (включая EXIF Orientation).
            kwargs = {'format': 'WEBP', 'quality': 75, 'method': 6}
            for attr in ('exif', 'icc_profile'):
                if image.info.get(attr):
                    kwargs[attr] = image.info[attr]
            if image.mode not in ('RGB', 'RGBA'):
                image = image.convert('RGB')
            image.save(temp, **kwargs)
        with Image.open(temp) as check:
            if check.format != 'WEBP' or check.size != size:
                raise ValueError('ошибка проверки выходного WebP')
            check.verify()
        # Не перезаписываем даже при появлении результата во время конвертации.
        if target.exists():
            raise FileExistsError(f'уже существует {target}')
        # os.link гарантирует отсутствие перезаписи при гонке; файл на том же диске.
        os.link(temp, target)
    finally:
        temp.unlink(missing_ok=True)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0],
                                 formatter_class=argparse.RawDescriptionHelpFormatter,
                                 epilog=__doc__)
    ap.add_argument('--dir', required=True, metavar='ПАПКА', help='целевая папка (включая подпапки)')
    ap.add_argument('--files', metavar='МАСКА', help='маска имён JPEG, например pic_*.jpg')
    ap.add_argument('--delete', choices=('y', 'n'), default='y', help='удалять исходные JPEG (по умолчанию y)')
    args = ap.parse_args()
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(errors='replace')
    folder = Path(args.dir)
    if not folder.is_dir():
        ap.error(f'нет папки {folder}')
    try:
        from PIL import features
    except ImportError:
        ap.error('не установлен Pillow: python -m pip install Pillow')
    if not features.check('webp'):
        ap.error('библиотека Pillow собрана без поддержки WebP')

    sources = find_files(folder, args.files)
    # Выявить конфликты внутри набора: PIC.JPG и PIC.jpeg -> PIC.webp.
    destinations = {}
    for source in sources:
        dest = source.with_suffix('.webp')
        destinations.setdefault(str(dest).casefold(), []).append(source)
    conflicting = {str(p) for paths in destinations.values() if len(paths) > 1 for p in paths}

    print(f'Папка: {folder}; JPEG: {len(sources)}; качество: 75; method: 6; '
          f'удаление: {args.delete}', file=sys.stderr)
    progress = Progress(len(sources))
    progress.update(0)
    converted = staged_git = deleted_git = deleted_disk = saved_before = saved_after = 0
    errors = []
    start = time.time()
    for index, source in enumerate(sources, 1):
        try:
            if str(source) in conflicting:
                raise FileExistsError('несколько JPEG претендуют на один WebP')
            target = source.with_suffix('.webp')
            if target.exists():
                raise FileExistsError(f'WebP уже существует: {target}')
            size_before = source.stat().st_size
            convert(source, target)
            converted += 1
            saved_before += size_before
            saved_after += target.stat().st_size
            try:
                if stage_webp(target):
                    staged_git += 1
            except (OSError, RuntimeError) as exc:
                # JPEG оставляем: новый формат ещё не добавлен в Git.
                errors.append((source, f'WebP создан, но не добавлен в Git; JPEG оставлен: {exc}'))
                continue
            if args.delete == 'y':
                try:
                    how = remove_source(source)
                    if how == 'git':
                        deleted_git += 1
                    else:
                        deleted_disk += 1
                except (OSError, RuntimeError) as exc:
                    errors.append((source, f'WebP готов, JPEG не удалён: {exc}'))
        except (OSError, ValueError, RuntimeError) as exc:
            errors.append((source, str(exc)))
        progress.update(index, f'готово: {converted}, ошибок: {len(errors)}')

    print(f'\nВремя выполнения: {duration(time.time() - start)}')
    print(f'Найдено JPEG: {len(sources)}. Создано WebP: {converted}. '
          f'Удалено JPEG: {deleted_git + deleted_disk} '
          f'(через Git: {deleted_git}, с диска: {deleted_disk}).')
    if converted:
        print(f'Размер обработанных изображений: {saved_before / 1048576:.1f} МБ JPEG '
              f'→ {saved_after / 1048576:.1f} МБ WebP.')
    if errors:
        print(f'Ошибки/пропуски: {len(errors)}')
        for source, reason in errors:
            print(f'  {source}: {reason}')
    if deleted_git:
        print('Удаления отслеживаемых JPEG поставлены в индекс Git; коммит не создан.')
    if staged_git:
        print(f'Добавлено WebP в индекс Git: {staged_git}; коммит не создан.')
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
