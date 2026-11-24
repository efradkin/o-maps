import json
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent
tracks_dir = root / 'tracks'
data_files = [root / 'js' / name for name in ('tracks.js', 'tracks-run.js', 'tracks-ski.js')]
result = {}
errors = []

if not tracks_dir.is_dir():
    raise SystemExit(f'Не найдена папка с GPX: {tracks_dir}')

def find_gpx_references(source):
    """Возвращает GPX из строковых литералов, пропуская комментарии JS."""
    found = []
    i = 0
    length = len(source)

    while i < length:
        char = source[i]

        if char in ("'", '\"'):
            quote = char
            i += 1
            value = []
            while i < length:
                char = source[i]
                if char == "\\":
                    if i + 1 < length:
                        value.append(source[i + 1])
                        i += 2
                    else:
                        i += 1
                elif char == quote:
                    i += 1
                    text = ''.join(value)
                    if text.lower().endswith('.gpx'):
                        found.append(text)
                    break
                else:
                    value.append(char)
                    i += 1
            continue

        if char == '`':
            # В шаблонных строках ссылки на GPX не используются.
            i += 1
            while i < length:
                if source[i] == "\\":
                    i += 2
                elif source[i] == '`':
                    i += 1
                    break
                else:
                    i += 1
            continue

        if char == '/' and i + 1 < length:
            if source[i + 1] == '/':
                i += 2
                while i < length and source[i] not in '\r\n':
                    i += 1
                continue
            if source[i + 1] == '*':
                end = source.find('*/', i + 2)
                i = length if end < 0 else end + 2
                continue

        i += 1

    return found


references = []
for data_file in data_files:
    if not data_file.is_file():
        errors.append(f'Не найден файл данных: {data_file.relative_to(root)}')
        continue
    source = data_file.read_text(encoding='utf-8')
    references.extend(find_gpx_references(source))

reference_counts = Counter(references)
referenced = set(references)
files = {path.relative_to(root).as_posix(): path for path in tracks_dir.rglob('*.gpx')}

for relative, path in sorted(files.items()):
    south = west = float('inf')
    north = east = float('-inf')
    count = 0
    try:
        for _, element in ET.iterparse(path, events=('end',)):
            if element.tag.rsplit('}', 1)[-1] in ('trkpt', 'rtept'):
                lat = float(element.attrib['lat'])
                lon = float(element.attrib['lon'])
                south = min(south, lat)
                west = min(west, lon)
                north = max(north, lat)
                east = max(east, lon)
                count += 1
            element.clear()
        if count:
            result[relative] = [round(south, 6), round(west, 6), round(north, 6), round(east, 6)]
        else:
            errors.append(f'{relative}: нет trkpt/rtept')
    except (ET.ParseError, OSError, ValueError, KeyError) as error:
        errors.append(f'{relative}: ошибка чтения GPX: {error}')

missing = sorted(referenced - files.keys())
unreferenced = sorted(files.keys() - referenced)
duplicates = sorted((name, count) for name, count in reference_counts.items() if count > 1)

output = root / 'js' / 'tracks-index.js'
output.write_text('const TRACK_BOUNDS_INDEX = ' + json.dumps(result, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8')

print(f'Индекс: {len(result)} файлов, {output.stat().st_size} байт')
print(f'В JS: {len(references)} ссылок на GPX, {len(referenced)} уникальных файлов')
print(f'На диске: {len(files)} GPX-файлов')

if missing:
    print(f'\nОТСУТСТВУЮТ НА ДИСКЕ ({len(missing)}):')
    for name in missing:
        print(f'  {name}')

if unreferenced:
    print(f'\nНЕ ИСПОЛЬЗУЮТСЯ В JS ({len(unreferenced)}):')
    for name in unreferenced:
        print(f'  {name}')

if duplicates:
    print(f'\nПОВТОРНЫЕ ССЫЛКИ В JS ({len(duplicates)}):')
    for name, count in duplicates:
        print(f'  {name} — {count} раз')

if errors:
    print(f'\nОШИБКИ ({len(errors)}):')
    for error in errors:
        print(f'  {error}')

if not (missing or unreferenced or duplicates or errors):
    print('\nРасхождений не обнаружено.')

if errors:
    sys.exit(1)
