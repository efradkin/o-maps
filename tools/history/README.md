# Скрипты для статей раздела «История»

Написаны при работе над `history/spb-history.html` (октябрь 2026). Правила оформления, которые они
поддерживают, — в документе «Оформление статей раздела „История“» (§ 7 «Карта мест», § 8 «Указатель имён»,
§ 9 «Текст», § 13 «Проверка»).

Настройки статьи вынесены в JSON-файлы (`spb-history.json`, `russia-history.json`) — см. «Настройки статьи» ниже.

Нужны: Python 3.8+, Node.js; для проверки — Playwright (`pip install playwright`).

## Состав

| Файл | Что делает |
|---|---|
| `strip_pins.py` | снимает значки 📍 (`a.hist-place-pin`) из статьи — перед правкой текста и пересборкой карты мест |
| `names.py` | ссылки на людей: перенумеровывает id упоминаний `nmN-k`, в указанных разделах расставляет тихие ссылки `hist-quiet`, пересобирает цифры в указателе имён |
| `nbsp_typograph.py` | неразрывные пробелы: инициалы, число + слово, разряды, «№», перед тире; слова с дефисом и числом — в `text-nowrap` |
| `inventory.js` | собирает все ссылки статьи на события, карты и POI с данными O-Maps → `links.json` и `links-maps.json` (все карты архива) |
| `build_points.py` | по `links.json` строит точки карты мест → `js/history-<код>-poi.js`, отчёт и `link-points.json` (какая ссылка — к какой точке) |
| `apply_places_html.py` | вставляет в статью раздел «Места на карте», пункт оглавления, ссылку из блока фактов, значки 📍 и подключение скриптов |
| `check_article.py` | проверка в Playwright: JS-ошибки, битые якоря, якоря без `target="_self"`, вложенные ссылки, дубли id, диаграммы, значки, указатель; сравнение текста по разделам с предыдущей версией |

Все правящие скрипты меняют файл на месте и идемпотентны (повторный запуск ничего не меняет);
у `names.py`, `nbsp_typograph.py`, `apply_places_html.py` есть пробный запуск `-n`. У каждого — справка в начале файла.

## Порядок после правки текста статьи

Из корня репозитория (`A` — статья, `W` — рабочая папка вне репозитория):

```bash
A=history/spb-history.html; W=/tmp/hist; mkdir -p $W

python3 tools/history/strip_pins.py $A                        # 1. снять значки 📍
python3 tools/history/names.py $A --sections matches,2010s     # 2. упоминания людей (разделы — где расставлять hist-quiet)
python3 tools/history/nbsp_typograph.py $A                     # 3. неразрывные пробелы (сначала можно -n)

node tools/history/inventory.js . $A $W/links.json             # 4. ссылки статьи
python3 tools/history/build_points.py --config tools/history/spb-history.json --links $W/links.json \
    --out js/history-spb-poi.js --report $W/points.txt \
    --poi js/poi.js --link-points $W/link-points.json          # 5. точки карты мест; прочитать points.txt
python3 tools/history/apply_places_html.py $A --config tools/history/spb-history.json \
    --link-points $W/link-points.json --poi-js js/history-spb-poi.js   # 6. раздел, значки 📍

python3 -m http.server 8765 &                                  # 7. проверка
git show HEAD:$A > history/__orig_check.html
python3 tools/history/check_article.py spb-history.html --orig __orig_check.html [--changed id,id]
rm history/__orig_check.html
```

- `names.py` без `--sections` только перенумеровывает id и пересобирает указатель, классы `hist-quiet` не трогает.
- В `points.txt` — присоединения событий к точкам по названию места, события без точки, карты для наложения.
  Решения по спорным случаям вносятся вручную в таблицы `OVERRIDE` (пропустить событие или задать
  координаты) и `OVERLAY_FOR` (какую карту наложить) в `build_points.py`.
- Новые разделы и добавленный в них текст — в `CHANGED` в начале `check_article.py`, чтобы проверка
  не считала их изменения непредвиденными. Ожидаемый результат: нет ошибок, битых якорей, вложенных
  ссылок и дублей id; «изменились вне задуманных: нет».

## Настройки статьи

`build_points.py` и `apply_places_html.py` берут настройки статьи из JSON (`--config`):

| Ключ | Что это |
|---|---|
| `title`, `article` | название и путь статьи — для шапки файла данных |
| `var` | имя переменной данных (`historySpbPoi`, `historyRussiaPoi`) |
| `home_page` | раздел карты календаря для текста раздела «Места на карте» (`spb`, `all`) |
| `eras` | эпохи цвета точек `[[последний год, подпись], …]`, у последней `null` |
| `places_options` | второй аргумент `initHistoryPlacesMap` (JS-литерал): `eras`, `homePages` (`null` — начальный вид по всем точкам) |
| `override`, `poi_for`, `overlay_for` | исключения и выбор карт для наложения (прежние таблицы `OVERRIDE`, `POI_FOR`, `OVERLAY_FOR`) |

`check_article.py` без `--orig` проверяет только новую статью (без сравнения разделов); диаграммы находит сам по `canvas[id]`,
дополнительно сообщает о горизонтальной прокрутке и элементах за правым краем.
`inventory.js`: список региональных страниц сайта (`REGION_PAGES`, `REGION_FIELD`) — общий, новые разделы сайта надо дописать.
