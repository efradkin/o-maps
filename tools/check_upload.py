#!/usr/bin/env python3
"""Проверяет, какие файлы из папки original_maps не загружены на сервер o-maps.spb.ru.

Папка original_maps не входит в репозиторий (.gitignore) и не попадает на хостинг
при автоматическом деплое, поэтому её файлы загружаются вручную. Скрипт обходит
локальную папку и для каждого файла отправляет на сервер запрос HEAD — файл
не скачивается, приходят только заголовки ответа. Если сервер не принимает HEAD,
запрашивается один первый байт (GET с Range: bytes=0-0).

Пока идёт проверка, в консоли одной строкой показывается прогресс:
  [██████████░░░░░░░░░░░░░░░░░░░░]  1200/3500  34%  не загружено: 12  прошло 40 с, осталось ~1 мин 17 с
(только если вывод идёт в консоль; при перенаправлении в файл строки прогресса нет).

Затем отчёт, сгруппированный по папкам: заголовок — папка и число файлов (цветом),
под ним — имена файлов без пути. Сначала папки с незагруженными файлами (красный;
имена — через запятую, с переносом по ширине окна), потом с файлами другого размера
(жёлтый; по файлу в строке, с обоими размерами), потом с файлами, которые не удалось проверить:
  нет на сервере        сервер ответил 404 (или 410);
  другой размер         файл есть, но его размер (Content-Length) не совпадает
                        с локальным — например, файл заменён локально и не перезалит
                        или загрузка оборвалась;
  не удалось проверить  другие ответы (403, 5xx…) и сетевые ошибки после всех повторов.
В конце — время выполнения и итог: сколько файлов не загружено и у скольких не совпадает размер.

Пропускаются служебные файлы: имена с точкой в начале, Thumbs.db, desktop.ini.

Запуск из корня проекта:
  python tools/check_upload.py [ПАПКА …] [--base URL] [--workers N] [--timeout S]
                               [--retries N] [--out ФАЙЛ] [--missing-list ФАЙЛ]
                               [--compare_files [ПАПКА]] [--upload [-y]] [--no-color]

  ПАПКА               папки для проверки относительно корня проекта (по умолчанию original_maps);
                      путь на сервере повторяет путь в проекте: original_maps/bash/ufa_1985_omaps.jpg
                      -> https://o-maps.spb.ru/original_maps/bash/ufa_1985_omaps.jpg
  --base URL          адрес сайта (по умолчанию https://o-maps.spb.ru/)
  --workers N         сколько запросов выполнять одновременно (по умолчанию 8)
  --timeout S         тайм-аут одного запроса в секундах (по умолчанию 30)
  --retries N         повторов при сетевой ошибке, 429 и 5xx (по умолчанию 3; паузы 1, 2, 4… с)
  --out ФАЙЛ          записать тот же отчёт в файл (UTF-8, без цвета)
  --missing-list ФАЙЛ записать полные пути отсутствующих файлов, по одному в строке (UTF-8) —
                      например, чтобы потом загрузить их по списку (с --upload — только тех,
                      что залить не удалось)
  --compare_files [ПАПКА]
                      для файлов другого размера положить рядом обе версии, чтобы их сравнить:
                      локальную (копия) и серверную (скачивается целиком) — в ПАПКУ (по умолчанию
                      compare_files в корне проекта) с той же структурой подпапок и суффиксами
                      _local и _remote: original_maps/bash/ufa_1985_omaps.jpg ->
                      compare_files/original_maps/bash/ufa_1985_omaps_local.jpg и …_remote.jpg;
                      файлы с теми же именами перезаписываются, остальное в папке не трогается
                      (папку стоит добавить в .gitignore, чтобы она не попала на сайт);
                      можно писать и --compare-files
  --upload            залить на хостинг по FTP файлы, которых нет на сервере (файлы другого
                      размера не трогаются; файл, который уже есть на FTP, не перезаписывается).
                      Перед заливкой скрипт убеждается, что попал куда надо: на FTP в папке root
                      (см. ниже) есть каждая проверяемая папка (original_maps), и у двух файлов
                      из неё, которые сайт уже отдаёт, размер на FTP совпадает с размером по HTTP —
                      значит, root/original_maps на FTP и есть https://o-maps.spb.ru/original_maps.
                      Если сверка не прошла, ничего не заливается. Файл заливается под временным
                      именем …part и переименовывается, когда загрузка завершилась и размер
                      на FTP совпал с локальным; после заливки файлы ещё раз проверяются по HTTP.
                      Перед началом спрашивается подтверждение
  -y, --yes           не спрашивать подтверждение перед заливкой (нужен, если запуск не из консоли)
  --no-color          не раскрашивать вывод (цвета отключаются и сами, если вывод
                      перенаправлен в файл или задана переменная окружения NO_COLOR)
  -h, --help          эта справка

Настройки FTP для --upload — в файле check_upload.ini рядом со скриптом (tools/check_upload.ini),
кодировка UTF-8 (с BOM или без):
  [ftp]
  host = ftp.example.ru       ; сервер
  user = login                ; имя
  password = secret           ; пароль
  root = /public_html         ; папка сайта на FTP (по умолчанию /public_html, как в deploy.yml)
  port = 21                   ; необязательно, по умолчанию 21
  tls = no                    ; yes — FTPS (явный TLS), по умолчанию no
Файл с паролем не должен попасть в репозиторий: добавьте в .gitignore строку /tools/check_upload.ini
(скрипт предупреждает, если git его не игнорирует).

Код завершения: 0 — всё на месте; 1 — есть отсутствующие файлы или файлы другого размера;
2 — часть файлов проверить не удалось.
"""
import argparse
import configparser
import ftplib
import os
import posixpath
import shutil
import subprocess
import sys
import textwrap
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

SKIP_NAMES = {'thumbs.db', 'desktop.ini'}
USER_AGENT = 'o-maps check_upload.py'
BAR_WIDTH = 30
FTP_CONFIG = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'check_upload.ini')
VERIFY_SAMPLES = 2                                      # сколько загруженных файлов сверять на каждую папку
RED, YELLOW, GREEN, RESET = '\x1b[91m', '\x1b[93m', '\x1b[92m', '\x1b[0m'


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
        line = (f'[{"█" * full}{"░" * (BAR_WIDTH - full)}] {self.fmt(done, self.total)}'
                f' {frac:4.0%}  {note}{"  " if note else ""}прошло {duration(elapsed)}')
        if 0 < done < self.total:
            line += f', осталось ~{duration(elapsed / done * (self.total - done))}'
        line = line[:shutil.get_terminal_size().columns - 1]   # длиннее окна — строка перенесётся и \r не сработает
        pad = max(0, self.width - len(line))               # стереть хвост более длинной прежней строки
        self.width = len(line)
        sys.stderr.write('\r' + line + ' ' * pad)
        if done == self.total:
            sys.stderr.write('\n')
            self.finished = True
        sys.stderr.flush()


def color_enabled(no_color):
    if no_color or os.environ.get('NO_COLOR') or not sys.stdout.isatty():
        return False
    if os.name == 'nt':
        os.system('')                                       # включает ANSI-цвета в консоли Windows 10+
    return True


def by_folder(items):
    """{папка: [элементы]} по алфавиту папок; элемент — кортеж, начинающийся с пути."""
    groups = {}
    for item in items:
        groups.setdefault(item[0].rpartition('/')[0], []).append(item)
    return dict(sorted(groups.items()))


def local_files(dirs):
    """[(путь относительно корня через '/', размер)] по всем папкам, по алфавиту."""
    out = []
    for d in dirs:
        for root, subdirs, files in os.walk(d):
            subdirs[:] = sorted(s for s in subdirs if not s.startswith('.'))
            for name in sorted(files):
                if name.startswith('.') or name.lower() in SKIP_NAMES:
                    continue
                path = os.path.join(root, name)
                rel = os.path.relpath(path, '.').replace(os.sep, '/')
                out.append((rel, os.path.getsize(path)))
    return out


def request(url, method, timeout):
    """(код ответа, размер файла на сервере или None)."""
    headers = {'User-Agent': USER_AGENT, 'Accept-Encoding': 'identity'}
    if method == 'GET':
        headers['Range'] = 'bytes=0-0'
    req = urllib.request.Request(url, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            size = None
            if resp.status == 206:                         # Content-Range: bytes 0-0/12345
                total = (resp.headers.get('Content-Range') or '').rpartition('/')[2]
                size = int(total) if total.isdigit() else None
            else:
                length = resp.headers.get('Content-Length')
                size = int(length) if length and length.isdigit() else None
            return resp.status, size
    except urllib.error.HTTPError as e:
        e.close()
        return e.code, None


def check(rel, base, timeout, retries):
    """(rel, код ответа или None, размер на сервере, текст ошибки)."""
    url = base + urllib.parse.quote(rel)
    method, error = 'HEAD', ''
    for attempt in range(retries + 1):
        try:
            code, size = request(url, method, timeout)
            if code in (405, 501) and method == 'HEAD':
                method = 'GET'                              # сервер не принимает HEAD
                code, size = request(url, method, timeout)
            if code == 429 or code >= 500:
                error = f'HTTP {code}'
            else:
                return rel, code, size, ''
        except (urllib.error.URLError, OSError) as e:      # обрыв соединения, тайм-аут, DNS
            error = str(getattr(e, 'reason', e))
        if attempt < retries:
            time.sleep(2 ** attempt)
    return rel, None, None, error


def download(rel, base, dest, timeout, retries):
    """Скачивает файл целиком в dest; возвращает текст ошибки или ''."""
    url = base + urllib.parse.quote(rel)
    part = dest + '.part'
    error = ''
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT, 'Accept-Encoding': 'identity'})
            with urllib.request.urlopen(req, timeout=timeout) as resp, open(part, 'wb') as f:
                shutil.copyfileobj(resp, f, 1 << 20)
            os.replace(part, dest)
            return ''
        except urllib.error.HTTPError as e:
            e.close()
            error = f'HTTP {e.code}'
            if e.code != 429 and e.code < 500:
                break
        except (urllib.error.URLError, OSError) as e:
            error = str(getattr(e, 'reason', e))
        if attempt < retries:
            time.sleep(2 ** attempt)
    if os.path.exists(part):
        os.remove(part)
    return error


def compare_paths(rel, folder):
    """(путь для локальной копии, путь для серверной версии) в папке сравнения."""
    stem, ext = os.path.splitext(os.path.join(folder, *rel.split('/')))
    return stem + '_local' + ext, stem + '_remote' + ext


def megabytes(n):
    return f'{n / 1048576:.1f} МБ'


def read_ftp_config():
    """Настройки FTP из check_upload.ini; при ошибке — выход с сообщением."""
    if not os.path.isfile(FTP_CONFIG):
        sys.exit(f'для --upload нужен файл {FTP_CONFIG} с настройками FTP (формат — в справке: -h)')
    cp = configparser.ConfigParser(inline_comment_prefixes=(';', '#'), interpolation=None)
    try:
        cp.read(FTP_CONFIG, encoding='utf-8-sig')       # UTF-8 с BOM и без
    except UnicodeDecodeError:
        sys.exit(f'{FTP_CONFIG}: файл должен быть в кодировке UTF-8')
    except configparser.Error as e:
        sys.exit(f'{FTP_CONFIG}: {e}')
    if not cp.has_section('ftp'):
        sys.exit(f'{FTP_CONFIG}: нет раздела [ftp]')
    sec = cp['ftp']
    lost = [k for k in ('host', 'user', 'password') if not sec.get(k)]
    if lost:
        sys.exit(f'{FTP_CONFIG}: не заданы {", ".join(lost)}')
    try:
        return dict(host=sec['host'], user=sec['user'], password=sec['password'],
                    root='/' + sec.get('root', '/public_html').strip('/'),
                    port=sec.getint('port', 21), tls=sec.getboolean('tls', False))
    except ValueError as e:
        sys.exit(f'{FTP_CONFIG}: {e}')


def warn_if_not_ignored(path):
    """Предупреждение, если файл с паролем не игнорируется git (может уйти в репозиторий)."""
    try:
        r = subprocess.run(['git', 'check-ignore', '-q', path], capture_output=True)
    except OSError:
        return                                          # git не установлен
    if r.returncode == 1:
        print(f'ВНИМАНИЕ: {os.path.relpath(path)} не в .gitignore — пароль FTP может попасть в репозиторий',
              file=sys.stderr)


def ftp_connect(cfg, timeout):
    ftp = (ftplib.FTP_TLS if cfg['tls'] else ftplib.FTP)(timeout=timeout, encoding='utf-8')
    ftp.connect(cfg['host'], cfg['port'])
    ftp.login(cfg['user'], cfg['password'])
    if cfg['tls']:
        ftp.prot_p()
    ftp.set_pasv(True)
    ftp.voidcmd('TYPE I')                               # SIZE работает только в двоичном режиме
    return ftp


def ftp_size(ftp, path):
    """Размер файла на FTP или None, если файла нет."""
    try:
        return ftp.size(path)
    except ftplib.error_perm as e:
        if str(e).startswith('550'):
            return None
        raise


def ftp_is_dir(ftp, path):
    try:
        ftp.cwd(path)
        return True
    except ftplib.error_perm:
        return False


def verify_target(ftp, cfg, dirs, present, base, timeout):
    """Проверяет, что root/<папка> на FTP — та же папка, что base<папка> на сайте.
    present — [(путь, размер)] файлов, которые сайт отдаёт и размер которых совпал с локальным.
    Возвращает список строк-ошибок (пустой — можно заливать)."""
    errors = []
    if not ftp_is_dir(ftp, cfg['root']):
        return [f'на FTP нет папки {cfg["root"]} (root в {os.path.basename(FTP_CONFIG)})']
    for d in dirs:
        remote_dir = posixpath.join(cfg['root'], d)
        if not ftp_is_dir(ftp, remote_dir):
            errors.append(f'на FTP нет папки {remote_dir}')
            continue
        samples = [(rel, size) for rel, size in present if rel.startswith(d + '/')][:VERIFY_SAMPLES]
        if not samples:                                 # не с чем сверить внутри папки — сверяем корень сайта
            code, size, _ = check('index.html', base, timeout, 1)[1:]
            samples = [('index.html', size)] if code == 200 and size else []
        if not samples:
            errors.append(f'{d}: на сайте нет ни одного файла, по которому можно сверить FTP и HTTP')
        for rel, size in samples:
            ftp_sz = ftp_size(ftp, posixpath.join(cfg['root'], rel))
            if ftp_sz != size:
                errors.append(f'{rel}: на сайте {size} байт, на FTP {"нет файла" if ftp_sz is None else f"{ftp_sz} байт"}')
    ftp.cwd('/')
    return errors


def ftp_makedirs(ftp, path, known):
    """Создаёт на FTP недостающие папки пути path; known — уже проверенные папки."""
    parts = path.strip('/').split('/')
    for i in range(1, len(parts) + 1):
        d = '/' + '/'.join(parts[:i])
        if d in known:
            continue
        if not ftp_is_dir(ftp, d):
            ftp.mkd(d)
        known.add(d)


def ftp_delete_quietly(ftp, path):
    try:
        ftp.delete(path)
    except ftplib.all_errors:
        pass


def upload_missing(todo, cfg, dirs, present, base, args):
    """Заливает todo ([(путь, размер)]) по FTP.
    Возвращает (залитые пути, [(путь, ошибка)], причина остановки или '')."""
    host = f'{cfg["host"]}:{cfg["root"]}'
    try:
        ftp = ftp_connect(cfg, args.timeout)
        errors = verify_target(ftp, cfg, dirs, present, base, args.timeout)
    except ftplib.all_errors as e:
        return [], [], f'FTP {cfg["host"]}: {e}'
    if errors:
        ftp.close()
        return [], [], (f'папка на FTP {host} не совпала с сайтом {base}, ничего не залито:\n'
                        + '\n'.join('  ' + e for e in errors))
    total = sum(size for _, size in todo)
    print(f'FTP {host} соответствует {base} — сверено по файлам на сайте', file=sys.stderr)
    if not args.yes:
        if not sys.stdin.isatty():
            ftp.close()
            return [], [], 'запуск не из консоли: для заливки без подтверждения нужен ключ -y'
        answer = input(f'Залить {len(todo)} файл(ов), {megabytes(total)}, в {host}? [y/N] ')
        if answer.strip().lower() not in ('y', 'yes', 'д', 'да'):
            ftp.close()
            return [], [], 'заливка отменена'

    uploaded, failed, known = [], [], {cfg['root']}
    progress = Progress(total, fmt=lambda done, all_: f'{megabytes(done)} / {megabytes(all_)}')
    done_bytes = 0
    for n, (rel, size) in enumerate(todo, 1):
        remote = posixpath.join(cfg['root'], rel)
        part = remote + '.part'
        error, sent = '', 0

        def sent_block(block):
            nonlocal sent
            sent += len(block)
            progress.update(done_bytes + sent, f'файл {n}/{len(todo)}')

        for attempt in range(args.retries + 1):
            sent = 0
            try:
                if ftp is None:
                    ftp = ftp_connect(cfg, args.timeout)
                if ftp_size(ftp, remote) is not None:
                    error = 'уже есть на FTP, хотя сайт его не отдаёт — не перезаписан'
                    break
                ftp_makedirs(ftp, posixpath.dirname(remote), known)
                with open(rel, 'rb') as f:
                    ftp.storbinary(f'STOR {part}', f, 65536, sent_block)
                got = ftp_size(ftp, part)
                if got == size:
                    ftp.rename(part, remote)
                    error = ''
                    break
                error = f'после заливки на FTP {got} байт вместо {size}'
                ftp_delete_quietly(ftp, part)
            except ftplib.error_perm as e:                  # отказ сервера (права, имя) — повтор не поможет
                error = f'FTP: {e}'
                ftp_delete_quietly(ftp, part)
                break
            except ftplib.all_errors as e:                  # обрыв соединения — переподключиться
                error = f'FTP: {e}'
                try:
                    ftp.close()
                except Exception:
                    pass
                ftp = None
            if attempt < args.retries:
                time.sleep(2 ** attempt)
        if error:
            failed.append((rel, error))
        else:
            uploaded.append(rel)
        done_bytes += size
        progress.update(done_bytes, f'файл {n}/{len(todo)}')
    if ftp is not None:
        try:
            ftp.quit()
        except ftplib.all_errors:
            pass

    # контроль: сайт отдаёт залитые файлы
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        for rel, code, _, err in pool.map(lambda r: check(r, base, args.timeout, args.retries), list(uploaded)):
            if code != 200:
                uploaded.remove(rel)
                failed.append((rel, f'залит, но сайт не отдаёт: {f"HTTP {code}" if code else err}'))
    return uploaded, sorted(failed), ''


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('dirs', nargs='*', default=['original_maps'])
    ap.add_argument('--base', default='https://o-maps.spb.ru/')
    ap.add_argument('--workers', type=int, default=8)
    ap.add_argument('--timeout', type=float, default=30)
    ap.add_argument('--retries', type=int, default=3)
    ap.add_argument('--out')
    ap.add_argument('--missing-list')
    ap.add_argument('--compare_files', '--compare-files', nargs='?', const='compare_files', metavar='ПАПКА')
    ap.add_argument('--upload', action='store_true')
    ap.add_argument('-y', '--yes', action='store_true')
    ap.add_argument('--no-color', action='store_true')
    args = ap.parse_args()
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(errors='replace')            # кириллица и псевдографика в консоли Windows
    colored = color_enabled(args.no_color)

    for d in args.dirs:
        if not os.path.isdir(d):
            sys.exit(f'нет папки {d} — скрипт запускается из корня проекта')
    base = args.base if args.base.endswith('/') else args.base + '/'
    ftp_cfg = None
    if args.upload:                                     # настройки FTP — до долгой проверки
        ftp_cfg = read_ftp_config()
        warn_if_not_ignored(FTP_CONFIG)

    files = local_files(args.dirs)
    sizes = dict(files)
    print(f'файлов: {len(files)}, проверяю на {base} …', file=sys.stderr)

    missing, differ, failed, present = [], [], [], []
    started = time.time()
    progress = Progress(len(files))
    progress.update(0, 'не загружено: 0')
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        jobs = [pool.submit(check, rel, base, args.timeout, args.retries) for rel, _ in files]
        for n, job in enumerate(as_completed(jobs), 1):
            rel, code, size, error = job.result()
            if code in (404, 410):
                missing.append((rel,))
            elif code in (200, 206):
                if size is not None and size != sizes[rel]:
                    differ.append((rel, sizes[rel], size))
                elif size is not None:
                    present.append((rel, size))
            else:
                failed.append((rel, f'HTTP {code}' if code else error))
            progress.update(n, f'не загружено: {len(missing)}')

    compare_failed = []
    if args.compare_files and differ:
        print(f'скачиваю для сравнения: {len(differ)} в {args.compare_files} …', file=sys.stderr)
        progress = Progress(len(differ))
        progress.update(0)
        for n, (rel, _, _) in enumerate(sorted(differ), 1):
            local_copy, remote_copy = compare_paths(rel, args.compare_files)
            os.makedirs(os.path.dirname(local_copy), exist_ok=True)
            shutil.copy2(rel, local_copy)
            error = download(rel, base, remote_copy, args.timeout, args.retries)
            if error:
                compare_failed.append((rel, error))
            progress.update(n)

    uploaded, upload_failed, upload_stop = [], [], ''
    if args.upload and missing:
        present.sort()
        todo = [(rel, sizes[rel]) for rel, in sorted(missing)]
        print(f'заливаю по FTP: {len(todo)}, {megabytes(sum(sz for _, sz in todo))} …', file=sys.stderr)
        uploaded, upload_failed, upload_stop = upload_missing(todo, ftp_cfg, args.dirs, present, base, args)
    elapsed = time.time() - started

    width = shutil.get_terminal_size().columns - 1 if sys.stdout.isatty() else 100
    report = []                                         # (текст, цвет или None)
    for folder, items in by_folder(missing).items():
        report += [('', None), (f'{folder} — не загружено: {len(items)}', RED)]
        names = ', '.join(rel.rpartition('/')[2] for rel, in sorted(items))
        report += [(line, None) for line in textwrap.wrap(names, width, initial_indent='  ', subsequent_indent='  ',
                                                          break_long_words=False, break_on_hyphens=False)]
    for folder, items in by_folder(differ).items():
        report += [('', None), (f'{folder} — размер не совпадает: {len(items)}  (байт: локально / на сервере)', YELLOW)]
        report += [(f'  {rel.rpartition("/")[2]}  {loc} / {srv}', None) for rel, loc, srv in sorted(items)]
    for folder, items in by_folder(failed).items():
        report += [('', None), (f'{folder} — не удалось проверить: {len(items)}', YELLOW)]
        report += [(f'  {rel.rpartition("/")[2]}  — {why}', None) for rel, why in sorted(items)]

    if args.compare_files and differ:
        got = len(differ) - len(compare_failed)
        report += [('', None), (f'Файлы для сравнения ({got} из {len(differ)}): {args.compare_files}', None)]
        report += [(f'  {rel} — не скачан: {why}', YELLOW) for rel, why in compare_failed]

    if args.upload and missing:
        report.append(('', None))
        if upload_stop:
            report += [(line, RED) for line in ('Заливка по FTP: ' + upload_stop).split('\n')]
        else:
            mb = megabytes(sum(sizes[rel] for rel in uploaded))
            report.append((f'Залито по FTP: {len(uploaded)} из {len(missing)} ({mb})',
                           YELLOW if upload_failed else GREEN))
            report += [(f'  {rel} — {why}', YELLOW) for rel, why in upload_failed]

    report += [('', None), (f'Время выполнения: {duration(elapsed)}', None)]
    left = len(missing) - len(uploaded)
    if left or differ or failed:
        summary = f'Проверено файлов: {len(files)}. Не загружено: {left}'
        if uploaded:
            summary += f' (было {len(missing)}, залито {len(uploaded)})'
        summary += f', размер не совпадает: {len(differ)}'
        if failed:
            summary += f', не удалось проверить: {len(failed)}'
        report.append((summary + '.', RED if left else YELLOW))
    else:
        done = f' (залито сейчас: {len(uploaded)})' if uploaded else ''
        report.append((f'Проверено файлов: {len(files)}. Все загружены{done}.', GREEN))

    paint = lambda text, color: f'{color}{text}{RESET}' if colored and color and text else text
    print('\n'.join(paint(t, c) for t, c in report[1:]))   # без пустой строки в начале
    if args.out:
        with open(args.out, 'w', encoding='utf-8') as f:
            f.write(f'Проверка {", ".join(args.dirs)} на {base} — {time.strftime("%Y-%m-%d %H:%M")}\n')
            f.write('\n'.join(t for t, _ in report) + '\n')
    if args.missing_list:
        with open(args.missing_list, 'w', encoding='utf-8') as f:
            f.write(''.join(rel + '\n' for rel, in sorted(missing) if rel not in uploaded))
    return 2 if failed else 1 if left or differ else 0


if __name__ == '__main__':
    sys.exit(main())
