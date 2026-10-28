#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sync_calendar.py — получение и обновление записей календаря O-Maps (js/calendar-*.js)
по сайтам o-site.spb.ru, orgeo.ru и o-gps-center.ru, а также по таблицам
календарей Москвы.

Шаги (по порядку; любой можно отключить ключом --skip или выбрать --only):
  msk       import_calendar_msk.py — сводный календарь Москвы (Google Sheets)
            -> calendar-msk-YYYY.js; внешний скрипт;
  malakhit  import_calendar_malakhit.py — календарь клуба «Малахит»
            (Google Doc) -> calendar-msk-YYYY.js; внешний скрипт;
  osite     o-site.spb.ru: списки стартов archive.php?year=YYYY и страницы
            race.php?id=…;
  orgeo     orgeo.ru, раздел «Ориентирование», подразделы СПб, ЛО, МСК и Самара
            (только местные), будущие и прошедшие события; собрания, лекции и
            семинары пропускаются; из подраздела Самары — только старты в
            Самарской области (там бывают и соседние регионы);
  reskeep   reskeep.ru: номера протоколов (главная страница, весь список) —
            в поле reskeep записей (см. ниже); сертификат reskeep.ru отдаётся
            без промежуточного — он лежит в tools/extra_ca.pem;
  endreg    срок окончания заявок (endReg) по страницам регистрации из reg —
            orgeo, o-reg.spb.ru, sportident.online, reg.o-time.ru (как в
            fill_end_reg.py);
  names     start и owner по названию записи (правила NAME_RULES в начале
            скрипта, см. ниже);
  ogps      fill_ogps.py --apply — ссылки на GPS-трансляции o-gps-center.ru;
            внешний скрипт, идёт последним, чтобы видеть новые записи.
Все шаги работают с временной копией calendar-*.js; в --src файлы
записываются в конце, только изменившиеся и только если node --check прошёл.
С -n не записывается ничего, но все шаги, включая внешние, отрабатывают на
копии, так что отчёт показывает итог всего прогона.

Какие старты обрабатываются (одно из трёх):
  без ключей     то же, что --fresh 14: старты, прошедшие за последние 14 дней,
                 и все будущие;
  --fresh N      то же за N дней;
  --year Y       старты года Y; можно повторять и задавать диапазон
                 (--year 2010-2019);
  --all          вся история (o-site с 2002 года, orgeo целиком — долго).
Сюда относятся и события источников (по их датам), и записи календаря (по date
и endDate). Внешним скриптам передаются те же --fresh/--year (при --all — без
них). fill_ogps.py принимает только один год, поэтому для нескольких лет он
запускается один раз без --year — полный проход по списку трансляций, и
уверенные соответствия впишутся в записи любых лет.

Как источник находит запись календаря:
  1. по ссылке: o-site — записи с тем же o_site (одна страница о-сайта может
     описывать серию: все записи с одинаковым o_site); orgeo — записи, в reg
     которых ссылка на это событие (orgeo.ru/event/<номер или псевдоним>);
  2. по перекрёстной ссылке: страница о-сайта ведёт на событие orgeo («Заявка»)
     или страница orgeo — на о-сайт («Сайт соревнований»), а у записи уже есть
     вторая из ссылок. Так же заменяется o_site записи, если её страницы на
     о-сайте больше нет, а событие orgeo из её reg ведёт на новую страницу;
  3. по дате и словам («уверенное совпадение», как в fill_ogps.py): даты
     события и записи пересекаются; общие значимые слова названия и места
     (основы из 6 букв без служебных слов fill_ogps.STOP), вес слова — его
     редкость в названиях и местах записей календаря; у лучшей записи совпало
     два слова или одно редкое (вес ≥ RARE_WEIGHT), а у следующей вес не больше
     половины. Места записи и события названы разными словами, а в названии
     совпало меньше двух слов — не совпадение. У многодневного события каждый
     день сопоставляется отдельно, записи берутся только внутри его дат и с
     общим словом названия события; у страницы-серии о-сайта (дат больше
     SERIES_DAYS) общих слов в названии записи должно быть два. Дочерняя запись
     (parent) уступает «зонтику», если подходит и он. Кандидаты — записи
     календаря СПб (как в fill_ogps.py: calendar-YYYY.js, calendar-early.js и
     записи с region: 'SPB') для o-site и orgeo СПб/ЛО, записи
     calendar-msk-*.js и с region: 'MSK' для orgeo МСК, calendar-samara.js
     и с region: 'SAMARA' для orgeo Самары; только записи в
     обрабатываемых датах. Записи calendar-fsor.js, calendar-iof.js,
     calendar-irf.js, беговые и лыжные забеги (type RUN, SK_RACE), записи без
     date и «зонтики» длиннее 60 дней так не сопоставляются — только по
     ссылкам. Если одну запись выбрали два события одного источника, связь не
     ставится — в «Проверить вручную», как и «возможные» совпадения.
     Проверка на записях 2025–2026 годов, у которых ссылки уже есть: из
     уверенных совпадений неверных не было, найдено ~80% связей.
  Найденной записи вписывается o_site (o-site) или reg (orgeo, см. ниже).

Что обновляется (приоритет: o-site, затем orgeo):
  * перезаписываются значением источника:
      reg       o-site: ссылки «Заявка…» страницы (одна — строка, несколько —
                массив); orgeo: ссылка на событие — только если reg пуст или
                ведёт на список (orgeo.ru/event/organizer/…, …/index/…); если
                reg ведёт на другую страницу — в отчёт. Ссылки на одно событие
                orgeo в разной форме (номер/псевдоним, /info/, /participants/)
                считаются одинаковыми;
      bulletin  «Информационный бюллетень» с наибольшим номером (как в
                fill_bulletins.py, с раскладкой по записям серии); если в
                записи массив бюллетеней — не заменяется, только в отчёт;
                бюллетень orgeo заменяет только бюллетень orgeo: бюллетень
                о-сайта (и любой другой) в записи остаётся;
      endReg    по странице регистрации (шаг endreg, как в fill_end_reg.py);
                срок позже последнего дня старта или разные сроки на разных
                страницах — в отчёт, не пишется;
      date, endDate  с o-site, иначе с orgeo (если событие orgeo короче
                SERIES_DAYS и сопоставлено с одной записью; у записи с o_site
                — только когда шаг osite тоже идёт); только в
                calendar-YYYY.js, calendar-early.js и calendar-samara.js; в других
                файлах (calendar-common.js, calendar-fsor.js, Москва…) даты
                ведутся по своим источникам, и несовпадения выводятся в раздел
                «Даты не совпадают»;
      coord     с о-сайта («Координаты центра соревнований»); с orgeo —
                только если coord нет;
  * ссылки http://orgeo.ru пишутся как https://orgeo.ru — и новые, и уже
    записанные (в записях обрабатываемых дат; «// !» соблюдается);
  * name, place, fmt, type — только заполняются, если их нет (type — если у
    записи нет type, а источник даёт не ORIENT; в calendar-msk-*.js type
    пишется всегда, как в остальных записях Москвы); расхождения — с -v.
    fmt приводится к виду календаря (norm_fmt): именительный падеж, строчная
    буква, «эстафета 2х», «эстафеты 2х» (из «2-х этапные эстафеты»), «выбор»
    (из «по выбору»), «заданное направление»; у рогейнов — только часы
    (rogaine_fmt): «рогейн 4 часа» -> «4», «бег 6/2 часа, вело 5» -> «6(5), 2»;
    старые значения — norm_fmt_all.py.
    type с о-сайта — прежде всего по словам (TYPE_WORDS в начале скрипта; слово
    считается с начала: «Цвелодубово» — не «вело»): рогейн, горный кросс ->
    ROGAINE; трейл-о -> TRAIL_O; в помещении, в зале, в здании, по зданию,
    indoor -> INDOOR; мульти…, multi… -> MULTI (эти четыре решают сразу); вело…,
    МТБО, MTB-O, bike -> VELO; лыж…, ski, ЛГ, зимний -> SKI; кросс…, бег…, летний, пешком -> ORIENT (не пишется).
    «Зимний» и «летний» учитываются только в названии и полях страницы (в
    описании «соревнования в зимний период» бывают и у пеших стартов), «зимний
    сезон», «лыжедром», «лыжная база/трасса/стадион» (места) и адреса сайтов
    (ski-o-spb.narod.ru) — не вид старта. Порядок: слова в названии и полях страницы «Формат»,
    «Дисциплина», «Вид», «Дистанция»; затем значок «Рогейн» (рогейн бегом —
    всё равно рогейн); затем слова описания в списке стартов; затем значок вида
    («Вело» -> VELO, «Лыжи» -> SKI; «Мультиспорт» не используется: им помечены и
    обычные старты). Если слова противоречат друг другу (лыжи и кросс) — они не
    решают, решает следующий шаг. type с orgeo — по тем же словам в названии и
    дисциплинах программы, иначе ORIENT. Виды, которых у организатора не бывает
    (NOT_TYPES: у Белых Ночей, owner WN или start с owner WN в starts.js, — SKI),
    не вписываются;
  * серия (у страницы о-сайта несколько записей, её дат больше SERIES_DAYS
    или дата не разобрана): date, endDate, name, place, fmt и reg с о-сайта не
    переносятся («Заявка» на странице серии часто ведёт на один из этапов),
    coord только заполняется, bulletin раскладывается по записям. Запись серии,
    в reg которой другое событие orgeo, чем «Заявка» на странице о-сайта, —
    в отчёт, данные о-сайта в неё не переносятся (o_site, вероятно, ошибочен);
  * записи Москвы: главные источники — сводная таблица и «Малахит»; orgeo
    дополняет их по общим правилам (reg-список заменяется ссылкой на событие,
    name и place не перезаписываются);
  * дата на о-сайте, не попадающая в год списка archive.php?year=YYYY, где
    стоит старт (например, «11 июля 2007» в списке 2010 года), считается
    опечаткой и не используется — в отчёт;
  * id записей не меняются никогда; поле без значения у источника не стирается.

Ненужные старты. Удалённую запись следующий запуск создал бы снова, поэтому
запись не удаляют, а закомментируют целиком (/* … */ или «//» в каждой строке).
Такие записи и ссылки в комментариях скрипты считают известными: событие
o-site с этим o_site (или ссылкой race.php?id=…), событие orgeo, ссылка на
которое есть в комментарии, и событие orgeo из «Заявки» такой страницы о-сайта
не сопоставляются по словам и не создаются заново
(строка в конце отчёта, список — с -v); id закомментированных записей не
занимаются новыми; import_calendar_msk.py и import_calendar_malakhit.py не
создают запись заново по строке таблицы/документа с той же датой и тем же
названием или местом (у «Малахита» — с той же датой или reg). Вместо записи
целиком хватает и одной строки, например  // o_site: '261128'  или
// reg: 'https://orgeo.ru/event/55996'.
Записи, которые остаются на сайте, это не касается: связь по действующим o_site и
reg работает как обычно. Отменённый старт по-прежнему помечается cancelled: true.

start и owner по названию (шаг names). Правила NAME_RULES (регулярные
выражения по name, в начале скрипта) составлены по записям календаря: у записей
с подходящим названием этот код уже стоит, другого нет. Проверяются по порядку,
срабатывает первое подошедшее. Правила SPB — для calendar-YYYY.js,
calendar-early.js и calendar-common.js, MSK — для calendar-msk-*.js.
  * start ставится, если его нет;
  * owner удаляется, если у start записи в js/starts.js задан тот же организатор
    (и у записей, где start уже был, во всех файлах календаря; другой owner
    остаётся);
  * owner — если его нет и у start записи организатор не задан в js/starts.js
    (если задан — дублировать его в записи не нужно; если не задан — owner
    ставится и записи со start), и только когда в календаре уже есть запись с
    подходящим названием и этим owner — без start или с тем же start, — не
    раньше года первой такой записи (организаторы меняются). Почему owner не
    поставлен — с -v в расхождениях;
  * записи — новые и в обрабатываемых датах; «// !» соблюдается.
Новый повторяющийся старт: добавьте правило в NAME_RULES.

reskeep (шаг reskeep). Главная страница reskeep.ru — весь список протоколов
(дата, название, место); номер протокола N (reskeep.ru/event/get?id=N) пишется
в поле reskeep записи: число, у многодневной записи без записей дней — массив
по дням. Запись ищется по дате (день протокола внутри её дат) и словам, как
выше; «зонтик» уступает своей записи этого дня (дочерней, с parent). Прежде
слов — ссылки со страницы протокола (она загружается только для ещё не
вписанных номеров): каталог о-сайта «…/_races/<каталог>/…» или race.php?id= —
запись с этим o_site или со ссылкой в этот каталог; событие orgeo (в т.ч.
orgeo.ru/live/#/N) — запись с ним в reg; та же ссылка — в любом поле записи
(res, split…); из нескольких таких записей — однодневная в день протокола. Номер,
уже стоящий в какой-либо записи, не трогается; номер в комментарии
(«// reskeep: 123» или ссылка …event/get?id=123) не вписывается. Неуверенные
совпадения — в «Проверить вручную», протоколы без записи — с -v в «Не созданы».

Фиксация полей — комментарий «// !». Чтобы ни один шаг (в том числе
import_calendar_msk.py, import_calendar_malakhit.py и fill_ogps.py) не менял
поле записи, поставьте после его значения, в той же строке, комментарий,
начинающийся с «!» (дальше можно писать что угодно):
    date: '2026-05-23',   // !
    place: 'Пески',       // ! так в протоколе
Поле, которого в записи нет (чтобы его не добавили), или всю запись фиксирует
отдельная строка-комментарий внутри записи:
    // ! bulletin, coord
    // ! *
Зафиксированное поле не перезаписывается, не удаляется и не добавляется.

Закомментированное поле записи («// endDate: '2026-05-24',») — отвергнутое
значение: ни один шаг не впишет в это поле именно это значение снова (другое —
впишет, как обычно; чтобы поле не трогали вовсе, используйте «// !»).
Сопоставление записи с источниками это не отменяет: остальные поля
обновляются как обычно. Что не изменено из-за «// !» — строка в конце отчёта
(список — с -v).

Новые записи:
  * старт o-site или orgeo (СПб/ЛО), не найденный в календаре, добавляется в
    calendar-YYYY.js (по году date) с полями id (SPB_YYYYMMDD_N), date,
    endDate, name, place, type, fmt, coord, o_site, reg, endReg, bulletin —
    запись встаёт по дате; старт orgeo в Самарской области — в последний
    calendar-samara.js (все годы в одном файле), id SMR_YYYYMMDD_N;
  * не создаются, а выводятся в «Не созданы»: серии; старты без разобранной
    даты (с -v); когда нет файла calendar-YYYY.js; когда в названии и месте
    нет значимых слов; когда в календаре в те же дни ±1 день есть запись с
    общими словами (возможный дубль — например, «ЧиП СПб» и «Чемпионат и
    Первенство Санкт-Петербурга»); события orgeo вне СПб, ЛО и Самарской
    области по месту
    проведения (с -v); уровень «Всероссийские ФСОР» и названия с
    «Чемпионат/Кубок/Первенство … России», «Всероссийские», «мира», «Европы»
    (такие записи ведутся в calendar-fsor.js/calendar-common.js); события
    orgeo Москвы (записи Москвы создаёт сводная таблица, иначе после её
    обновления появились бы дубли).

Общие правила: правка на месте в --src, повторный запуск с теми же ключами
ничего не меняет, файлы без изменений не перезаписываются, кодировка и
переводы строк сохраняются; перед запуском держите git чистым и смотрите -n.

Ключи:
  --src DIR        каталог с calendar-*.js или корень сайта (по умолчанию js).
  --fresh [N]      старты за последние N дней (по умолчанию 14) и будущие.
  --year Y         старты года Y (YYYY или YYYY-YYYY; можно повторять).
  --all            вся история.
  --only STEPS     выполнить только эти шаги (через запятую:
                   msk,malakhit,osite,orgeo,endreg,names,ogps).
  --skip STEPS     пропустить эти шаги.
  -n, --dry-run    ничего не записывать в --src, только показать.
  -v, --verbose    подробный отчёт: расхождения name/place/fmt/type, события
                   вне регионов, несопоставленные события с неразобранной
                   датой.
  --workers N      сколько страниц качать одновременно (по умолчанию 4).
  --zip FILE       упаковать изменённые файлы в архив (внутри — каталог js/);
                   при -n и без изменений архив не создаётся.
  --out [FILE]     дублировать отчёт в файл FILE (UTF-8), без имени —
                   sync_calendar_out.txt в текущем каталоге; вывод внешних
                   скриптов тоже попадает в файл.
  -h, --help       справка.

Примеры (из корня репозитория):
  python tools/sync_calendar.py -n                 # актуальные старты, что изменится
  python tools/sync_calendar.py                    # то же с записью
  python tools/sync_calendar.py --fresh 3 --skip msk,malakhit
  python tools/sync_calendar.py --year 2026 -n -v --out
  python tools/sync_calendar.py --year 2010-2019 --only osite -n
  python tools/sync_calendar.py --all -n --out
"""
import argparse
import concurrent.futures as cf
import datetime as dt
import html
import math
import os
import re
import shutil
import ssl
import subprocess
import sys
import tempfile
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import zipfile
from collections import Counter, defaultdict

TOOLS = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, TOOLS)
sys.dont_write_bytecode = True  # не оставлять tools/__pycache__ от импортируемых скриптов
import fill_ogps as OG          # noqa: E402  токены, прогресс, Tee
import fill_bulletins as FB     # noqa: E402  разбор calendar-*.js, бюллетени
import fill_end_reg as FE       # noqa: E402  сайты регистрации

STEPS = ['msk', 'malakhit', 'osite', 'orgeo', 'reskeep', 'endreg', 'names', 'ogps']
FRESH_DEFAULT = 14
SERIES_DAYS = 14        # страница о-сайта длиннее — серия/сезон, а не один старт
UMBRELLA_DAYS = 60      # записи длиннее — «зонтики», по словам не сопоставляются
RARE_WEIGHT = 5.0       # вес «редкого» слова для уверенного совпадения по одному слову
USER_AGENT = 'Mozilla/5.0 (o-maps.spb.ru sync_calendar)'
OSITE = 'https://o-site.spb.ru/'
ORGEO = 'https://orgeo.ru/'
RESKEEP = 'https://reskeep.ru/'
EXTRA_CA = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'extra_ca.pem')
ORGEO_REGIONS = ['spb', 'lenobl', 'moscow+mosobl', 'samara']
ORGEO_SKIP_LEVEL = {'Собрания, лекции, коференции'}
ORGEO_NATIONAL_LEVEL = {'Всероссийские ФСОР'}
SEMINAR = re.compile(r'семинар', re.I)
NATIONAL = re.compile(r'(?:Чемпионат|Кубок|Первенство)[^,.;]*\bРоссии\b|Всероссийск|\bмира\b|\bЕвропы\b', re.I)
# значок вида на о-сайте (images/format/*.gif) -> type; «multisport» на о-сайте ставят и обычным
# стартам и тренировкам (Кубок Белых Ночей, Царскосельский азимут…), поэтому type по нему не ставится
OSITE_TYPE = {'orientering': 'ORIENT', 'rogein': 'ROGAINE', 'skiing': 'SKI', 'velo': 'VELO'}

# вид старта по описанию (название, описание, формат/дисциплина…): оно важнее значка вида.
# Проверяются по порядку; если подошли и SKI, и ORIENT (или SKI и VELO) — по описанию не решить.
TYPE_WORDS = [            # (type, слова, «слабые» слова — только в названии и полях страницы)
    ('ROGAINE', r'рогейн|rogain|\bгорн\w* кросс', None),
    ('TRAIL_O', r'\bтрейл-?о\b|\bтрейл-ориент|\btrail-?o\b|\bпо тропам', None),
    ('INDOOR', r'\bв помещени|\bв зале\b|\bв здани|\bпо здани|\bindoor', None),
    ('MULTI', r'\bмульти|\bmulti', None),
    ('VELO', r'\bвело|\bмтб-?о\b|\bmtb-?o\b|\bмтбо\b|\bmtbo\b|\bbike\b|\bбайк', None),
    ('SKI', r'\bлыж|\bski\b|\bski-?o\b|\bлг\b', r'\bзимн(ий|яя|ее|ие|его|юю|их)\b'),
    ('ORIENT', r'\bкросс|\bбег(ом|овой|овая|овые)?\b|\bпешком\b', r'\bлетн(ий|яя|ее|ие|его|юю|их)\b'),
]
TYPE_RX = [(t, re.compile(rx, re.I), re.compile(weak, re.I) if weak else None) for t, rx, weak in TYPE_WORDS]
DECISIVE = 4            # первые четыре (рогейн, трейл-о, в помещении, мульти) решают сразу
# организатор -> виды, которых у его стартов не бывает (у Белых Ночей нет лыжных стартов: «Выбор50 —
# зимний Кубок Белых Ночей» — не лыжи); проверяется по owner записи и owner её start в starts.js
NOT_TYPES = {'WN': {'SKI'}}
# не вид старта: «по итогам зимнего сезона», места «лыжедром СКА», «от лыжной базы», «по лыжной трассе»
SEASON = re.compile(r'\b(зимн|летн)\w* (сезон|период)\w*|\bлыжедром\w*|\bлыжн\w* (баз|трасс|стадион)\w*', re.I)


def type_by_words(text, weak=True):
    """type по ключевым словам или None, если слов нет или они противоречат друг другу
    (например, «лыжи» и «кросс»). «Рогейн», «трейл-о», «в помещении», «мульти» решают сразу. weak — учитывать и
    «слабые» слова («зимний», «летний»): в названии да, в длинном описании нет."""
    t = SEASON.sub(' ', re.sub(r'https?://\S+|\b[\w.-]+\.(?:ru|com|org|net|info)\S*', ' ', text or ''))   # и без ссылок
    for typ, rx, _ in TYPE_RX[:DECISIVE]:
        if rx.search(t):
            return typ
    found = [typ for typ, rx, wk in TYPE_RX[DECISIVE:] if rx.search(t) or (weak and wk and wk.search(t))]
    return found[0] if len(found) == 1 else None
SPB_REGIONS = {'Санкт-Петербург', 'Ленинградская обл.'}
MSK_REGIONS = {'Москва', 'Московская обл.'}
SMR_REGIONS = {'Самара', 'Самарская обл.'}
DATA_FILE = re.compile(r'calendar-(?!mobile\.js$)[\w-]+\.js$')
SPB_YEAR_FILE = re.compile(r'calendar-(\d{4})\.js$')
MSK_FILE = re.compile(r'calendar-msk-[\w-]+\.js$')
SMR_FILE = re.compile(r'calendar-samara(?:-[\w-]+)?\.js$')   # записи Самары: calendar-samara.js (все годы)
DATE_FILE = re.compile(r'calendar-(?:\d{4}|early|samara(?:-[\w-]+)?)\.js$')     # даты стартов берутся из источников
NOAUTO_FILES = OG.NOAUTO_FILES
NOAUTO_TYPES = OG.NOAUTO_TYPES
NEW_ORDER = ['id', 'date', 'endDate', 'name', 'start', 'place', 'type', 'fmt', 'coord',
             'o_site', 'reg', 'endReg', 'bulletin', 'owner']
# после какого поля вставлять новое поле существующей записи (первое найденное)
ANCHORS = {
    'endDate': ['date'], 'name': ['endDate', 'date'], 'place': ['name'],
    'type': ['fmt', 'place', 'name'], 'fmt': ['place', 'name'],
    'coord': ['fmt', 'type', 'place', 'name'], 'o_site': ['place', 'name'],
    'reg': ['o_site', 'place', 'name'], 'endReg': ['reg'],
    'bulletin': ['endReg', 'reg', 'o_site'], 'start': ['name'],
}
TECH = {'reg', 'bulletin', 'date', 'endDate', 'coord', 'endReg'}

# start и owner по названию записи (шаг names): (поле, код, регулярное выражение по name).
# Правила составлены по записям календаря (октябрь 2026): у записей, чьё название подходит,
# этот код уже стоит, другого нет. Проверяются по порядку, срабатывает первое подошедшее.
# SPB — calendar-YYYY.js, calendar-early.js, calendar-common.js; MSK — calendar-msk-*.js.
NAME_RULES = {
    'SPB': [
        ('start', 'KBN', r'кубок белых ноч'),
        ('start', 'SPRINT_TOUR', r'sprint tour|спринт[- ]тур'),
        ('start', 'ORIENTIR', r'^ориентир-\d'),
        ('start', 'YM_CUP', r'кубок яркого мира|яркий кубок'),
        ('start', 'ROGAINE_110', r'(кубок|рогейн)[^,]*\b110\s*%|\b110\s*%.*(кубок|рогейн)'),
        ('start', 'GORNY_CROSS', r'горный кросс'),
        ('start', 'KUZMOLOVSKY_STARTS', r'кузьмоловские старты'),
        ('start', 'SNOW_WAY', r'снежная тропа'),
        ('start', 'KKP', r'^ккп\b|кубок карельского перешейка'),
        ('start', 'SCHOOL', r'ориентирование\s*-?\s*в школу'),
        ('start', 'VSEVOLOZHSK_WAY', r'всеволожская тропа'),
        ('start', 'BA', r'bike ?adventure'),
        ('start', 'PERSPEKTIVA', r'^перспектива'),
        ('start', 'MB', r'марш-бросок'),
        ('start', 'MMS', r'мемориал (михаила )?святкина'),
        ('start', 'NA', r'невский азимут'),
        ('start', 'WEDDING', r'золотые кольца|свадебные'),
        ('start', 'GS', r'зел[её]ный змей'),
        ('start', 'RFAR', r'red ?fox'),
        ('start', 'OKINCHITSA', r'окинчиц'),
        ('start', 'VSEV_VESTI', r'всеволожские вести'),
        ('start', 'SOSNOVOBORSKY_DUNY', r'сосновоборские дюны'),
        ('start', '100x24', r'100 за 24|100\s*[хx]\s*24'),
        ('start', 'LM', r'лужский меридиан|новгородский меридиан|новгородский исторический рогейн'),
        ('start', 'MATRESHKA', r'матр[её]шк'),
        ('start', 'WEEKLY_ORIENT', r'weekly orient'),
        ('start', 'KKR', r'кубок коротких рогейнов'),
        ('start', 'VYBORGSKY_TROIKA', r'выборгская тройка'),
        ('start', 'WHITE_NIGHTS', r'white nights (sprint|middle)'),
        ('start', 'HARD', r'hard[- ]rogaine'),
        ('start', 'KS', r'карельские скалы'),
        ('start', 'TRI_O_TLON', r'три-о-тлон'),
        ('start', 'VOLKOV_A', r'мемориал (андрея |а\. ?)волкова'),
        ('start', '2x2', r'эстафеты 2\s*[хx]\s*2'),
        ('start', 'STREKOZAIKI', r'стрекоза'),
        ('start', 'CONTROLNY_START', r'^контрольный старт'),
        ('start', 'SPB_CHAMP', r'^(чип|чемпионат( и первенство)?|первенство) (спб|санкт-петербурга)\b'),
        ('start', 'LO_CHAMP', r'^(чип|чемпионат( и первенство)?|чемпионат и пер-во) (ло|ленинградской области)\b'),
        ('start', 'WN', r'^(неделя ориентирования )?«?белые ночи»?$'),
        ('owner', 'VESTA_PRIOZERSK', r'кубок весты'),
        ('owner', 'AZIMUT', r'осенний марафон|петербургская осень$|памяти друзей|натал|посвящ[её]нные дню победы'),
        ('owner', 'WN', r'белых ночей'),
        ('owner', 'SFSO_SPB', r'российский азимут( -)? ?спб'),
        ('owner', 'SFSO_LO', r'российский азимут.*\bло\b'),
        ('owner', 'MULTSPORT', r'^(весенний |петербургский )?водный рогейн( \d{4})?$|ice trail|велоизоляц|matrasoff'),
        ('owner', 'DLITELNY', r'^[дd]лительн|dnrun|d2run'),
        ('owner', 'VYBORG', r'о-выборг|тренировочный старт выборг'),
        ('owner', 'NW', r'рождественские старты|nw sprint|в[её]рст|nord ?west'),
        ('owner', 'GOLFSTREAM', r'гольфстрим'),
        ('owner', 'FENIX', r'феникс'),
        ('owner', 'YUVENTA', r'кубок снятия блокады|соснового бора'),
        ('owner', 'SHBN', r'лужск\w* .*рогейн|рогейн на лужских'),
        ('owner', 'FRUNZ_SPORT', r'фрунзенск'),
        ('owner', 'EGRV_SRG', r'березюка'),
        ('owner', 'SUBBOTNIK', r'александрийские субботники'),
        ('owner', 'EGRV_EGR', r'царскосельский азимут'),
        ('owner', 'MLV_AL', r'кириш'),
        ('owner', 'MILYA_SPORT', r'миля[- ]спорт'),
    ],
    'MSK': [
        ('owner', 'SYTV_N', r'московский меридиан'),
        ('owner', 'CLEVER_MSK', r'московск(ая|ое) (осень|весна|лето|зима)|нано-?подкуст|нанорогейн'),
        ('owner', 'FSO_MSK', r'кубок федерации со г\.? ?москвы'),
        ('owner', 'O_KUNTSEVO', r'о-кунцево'),
    ],
}
SOFT = ['name', 'place', 'fmt', 'type']


def D(s):
    return dt.date.fromisoformat(s)


RELAY = re.compile(r'(эстафет[а-яё]*)\s*[-–—]?\s*(\d+)(?:\s*/\s*(\d+))?\s*[-–—]?\s*'
                   r'(?:х|x|чел(?:овека|овек)?\.?)(?![а-яёa-z])', re.I)
PERSONS = re.compile(r'(\d+)\s*[-–—]?\s*человека?(?![а-яё])', re.I)


NUM_WORDS = {'одно': 1, 'двух': 2, 'трех': 3, 'трёх': 3, 'четырех': 4, 'четырёх': 4, 'пяти': 5, 'шести': 6}
STAGES = re.compile(r'\b(\d+|одно|двух|тр[её]х|четыр[её]х|пяти|шести)\s*-?\s*(?:х|ти|ми)?\s*-?\s*этапн[а-яё]*'
                    r'\s+((?:[а-яё]+(?:ая|ые)\s+)?эстафет[а-яё]*)', re.I)
ONE_OF = re.compile(r'(^|,\s*)(?:ориентирование|дистанци[яи]|соревновани[яе])\s+по\s+выбору\b|'
                    r'(\S)\s+по\s+выбору\b|\bпо\s+выбору\b', re.I)
GIVEN_DIR = re.compile(r'(^|,\s*)(?:ориентирование|дистанци[яи]|соревновани[яе])\s+в\s+заданном\s+направлении\b|'
                       r'(\S)\s+в\s+заданном\s+направлении\b|\bв\s+заданном\s+направлении\b', re.I)


CAPS_KEEP = {'МТБО', 'МТБ-О', 'СЗФО', 'ВФСО', 'ФСОР', 'СФСО'}   # аббревиатуры: не в строчные


def norm_fmt(s):
    """Формат как принято в календаре — в именительном падеже, со строчной буквы:
    «эстафета 3 чел.», «эстафета - 3 человека» -> «эстафета 3х», «эстафета 2/3 человека» -> «эстафета 2х/3х»,
    «2-х этапные эстафеты», «двухэтапная (ночная) эстафета» -> «эстафеты 2х», «(ночная) эстафета 2х»;
    «по выбору», «ориентирование по выбору» -> «выбор» («Х по выбору» -> «Х, выбор», «эстафета по выбору» ->
    «эстафета-выбор»); «(ориентирование) в заданном направлении» -> «заданное направление»
    («Х в заданном направлении» -> «Х, заданное направление»); прочие «N человека» -> «N чел.» (как «маркированная трасса 3 чел.»).
    Используется и import_calendar_msk.py / _malakhit.py."""
    if not s:
        return s
    s = STAGES.sub(lambda m: m.group(0) if re.search(r'\bи\s*$', s[:m.start()]) else  # «4-х и 5-ти этапная»
                   '%s %sх' % (m.group(2), NUM_WORDS.get(m.group(1).lower(), m.group(1))), s)
    s = RELAY.sub(lambda m: '%s %sх%s' % (m.group(1), m.group(2), '/%sх' % m.group(3) if m.group(3) else ''), s)
    s = PERSONS.sub(r'\1 чел.', s)
    s = ONE_OF.sub(lambda m: (m.group(1) + 'выбор' if m.group(1) is not None else
                              m.group(2) + ('-выбор' if re.search(r'эстафет[а-яё]*$', s[:m.start(2) + 1], re.I)
                                            else ', выбор') if m.group(2) else 'выбор'), s)
    s = GIVEN_DIR.sub(lambda m: (m.group(1) + 'заданное направление' if m.group(1) is not None else
                                 m.group(2) + ', заданное направление' if m.group(2) else 'заданное направление'), s)
    s = re.sub(r',\s*,', ',', s)
    # первое слово каждой части (вне скобок) — со строчной: «Кросс-классика», «КРОСС-ВЫБОР»,
    # «„Кросс-Выбор“» -> «кросс-…»; аббревиатуры (ЛГ, SUP, MTBO) и «Би-О-Тлон» остаются
    def low(m):
        w = m.group(2)
        if re.fullmatch(r'[А-ЯЁ-]{4,}', w) and w not in CAPS_KEEP or re.fullmatch(r'[А-ЯЁ][а-яё]+(?:-[А-ЯЁа-яё][а-яё]+)*', w) and \
                not re.search(r'-[А-ЯЁ][а-яё]*-', w):
            return m.group(1) + w.lower()
        return m.group(0)
    out, depth, last = [], 0, 0
    for m in re.finditer(r'[()]|(^|,\s*)([«"\']?)', s):
        out.append(s[last:m.end()])
        last = m.end()
        if m.group(0) in ('(', ')'):
            depth += 1 if m.group(0) == '(' else -1
        elif depth == 0 and m.group(1) is not None:
            w = re.match(r'([А-ЯЁа-яё-]+)', s[last:])
            if w:
                new = low(re.match(r'()(.*)', w.group(1)))
                out.append(new)
                last += len(w.group(1))
    out.append(s[last:])
    return ''.join(out)


ROG_BIKE = re.compile(r'вело|велосипед|bike|mtb', re.I)
ROG_SKIP = re.compile(r'мульти|приключ|трейл|кросс-?трейл|марш-бросок|заданн|турполос', re.I)
ROG_NUM = re.compile(r'(?<![\d.№])(\d{1,2}(?:\.\d)?(?:-\d{1,2})?)(?![\d.]|\s*(?:км|km|кп|kp|мин|м\b|%|чел|лет|г\.|-?(?:й|го|ти|х)\b))',
                     re.I)


def rogaine_fmt(s):
    """fmt рогейна — продолжительности в часах, как принято в календаре: «рогейн 4 часа» -> «4»,
    «бег 6/2 часа, вело 5 часов» -> «6(5), 2» (вело — в скобках у ближайшей не меньшей беговой),
    «4 и 8 часов на велосипеде или бегом» -> «8, 4», «байдарки 6ч и 12ч, SUP 5ч» -> «12, 6, 5»;
    вело длиннее всех беговых — «24 вело». Мультигонки, трейлы и т.п. в той же строке не считаются.
    -> None, если часов в тексте нет («60, 70 или 80 минут», «городской рогейн»)."""
    if not s or not re.search(r'\d\s*(?:ч|час)|час|\d.*(?:бег|вело)', s, re.I):
        return None
    t = re.sub(r'\b([0-3]),5(?=\s*(?:ч|час))', r'\1.5', s)
    t = re.sub(r'(\d)-?х\s*(час)', r'\1 \2', t)                     # «3-х часовой»
    t = re.sub(r'\(([^()]*)\)', lambda m: '(' + m.group(1).replace(',', ' ').replace(';', ' ') + ')', t)
    mode_rx = r'бег|пешк|лыж|байдар|каяк|sup|сап|ролик|вело|велосипед|bike|mtb'
    foot, bike = [], []
    for part in re.split(r'[,;]|\.(?=\s*(?:[А-ЯЁA-Z]|$))', t):   # «5 ч. вело» — не конец части
        if ROG_SKIP.search(part):
            continue
        # [числа, вело?, без единиц]; вид не назван: у голого числа («3 и 6 часов вело») — как у
        # следующей части, иначе («велорогейн 4 и 6ч», «24 часа и 8 часов вело») — как у предыдущей
        sub = []
        for c in re.split(r'\s+и\s+(?=[^,;]*\d)', part):
            mode = None
            if re.search(mode_rx, c, re.I):
                mode = bool(ROG_BIKE.search(c)) and not re.search(r'бег|пешк|лыж|байдар|каяк|sup|сап|ролик', c, re.I)
            sub.append([[n for n in ROG_NUM.findall(re.sub(r'\d+:\d+', ' ', c)) if float(n.split('-')[0]) <= 48],
                        mode, not re.search(r'\d\s*(?:ч|час)', c, re.I)])
        nxt = None
        for x in reversed(sub):
            if x[1] is None and x[2]:
                x[1] = nxt
            nxt = x[1]
        prev = None
        for x in sub:
            if x[1] is None:
                x[1] = prev
            prev = x[1]
        for nums, mode, _ in sub:
            (bike if mode else foot).extend(nums)
    key = lambda n: float(n.split('-')[0])
    foot = sorted(set(foot), key=key, reverse=True)
    if not foot:
        return ', '.join(sorted(set(bike), key=key, reverse=True)) or None
    extra, attach = [], {}
    for b in sorted(set(bike) - set(foot), key=key, reverse=True):
        geq = [f for f in foot if key(f) >= key(b)]
        if geq and geq[-1] not in attach:
            attach[geq[-1]] = b
        else:
            extra.append(b + ' вело')
    return ', '.join(extra + [f + ('(%s)' % attach[f] if f in attach else '') for f in foot])


def overlap(a0, a1, b0, b1):
    return a0 <= b1 and b0 <= a1


def aslist(v):
    return [] if v is None else (list(v) if isinstance(v, list) else [v])


def short(v, n=90):
    s = v if isinstance(v, str) else repr(v)
    return s if len(s) <= n else s[:n - 1] + '…'


# ------------------------------------------------------------------- область

class Scope:
    """Какие старты обрабатываются: kind = fresh | years | all."""

    def __init__(self, kind, since=None, years=None):
        self.kind, self.since, self.years = kind, since, sorted(years or [])

    def hits(self, d0, d1):
        if self.kind == 'all':
            return True
        if self.kind == 'fresh':
            return d1 >= self.since
        return any(y in self.years for y in range(d0.year, d1.year + 1))

    def osite_years(self, available):
        today = dt.date.today()
        if self.kind == 'fresh':
            return list(range(today.year + 1, self.since.year - 1, -1))
        if self.kind == 'years':
            return sorted(self.years, reverse=True)
        # на archive.php нет ссылки на «свой» год (сейчас — 2025): берём все годы подряд
        first = min([y for y in available if y >= 2000] or [today.year])
        return list(range(today.year + 1, first - 1, -1))

    def args(self):
        """Ключи области для внешних скриптов (fill_ogps — отдельно)."""
        if self.kind == 'fresh':
            return ['--fresh', str((dt.date.today() - self.since).days)]
        if self.kind == 'years':
            return [a for y in self.years for a in ('--year', str(y))]
        return []

    def __str__(self):
        if self.kind == 'fresh':
            return 'старты с %s и будущие' % self.since
        if self.kind == 'years':
            return 'годы ' + ', '.join(map(str, self.years))
        return 'вся история'


def parse_years(values):
    out = set()
    for v in values:
        m = re.fullmatch(r'(\d{4})(?:-(\d{4}))?', v.strip())
        if not m:
            raise ValueError(v)
        a, b = int(m.group(1)), int(m.group(2) or m.group(1))
        out.update(range(min(a, b), max(a, b) + 1))
    return out


# ------------------------------------------------------------------- загрузка

META_CHARSET = re.compile(rb'<meta[^>]+charset\s*=\s*["\']?([\w-]+)', re.I)


class Fetcher:
    """Загрузка страниц с повторами и кэшем на время запуска (потокобезопасно)."""

    def __init__(self, retries=2, timeout=40):
        self.retries, self.timeout = retries, timeout
        self.mem, self.lock = {}, threading.Lock()
        self.insecure = ssl.create_default_context()
        self.insecure.check_hostname = False
        self.insecure.verify_mode = ssl.CERT_NONE
        self.extra = None        # системные корни + промежуточные сертификаты из extra_ca.pem
        if os.path.exists(EXTRA_CA):
            try:
                self.extra = ssl.create_default_context()
                self.extra.load_verify_locations(EXTRA_CA)
            except (OSError, ssl.SSLError):
                self.extra = None
        self.count = 0

    def get(self, url, charset=None):
        """-> (текст, итоговый url); исключение при ошибке (тоже кэшируется)."""
        with self.lock:
            if url in self.mem:
                r = self.mem[url]
                if isinstance(r, Exception):
                    raise r
                return r
        try:
            r = self._get(url, charset)
        except Exception as ex:
            with self.lock:
                self.mem[url] = ex
            raise
        with self.lock:
            self.mem[url] = r
            self.count += 1
        return r

    def _get(self, url, charset):
        last = None
        for attempt in range(self.retries + 1):
            try:
                body, final, cs = self._download(url)
                break
            except urllib.error.HTTPError as ex:
                if ex.code in (403, 404, 410):
                    raise
                last = ex
            except Exception as ex:
                last = ex
            time.sleep(1.5 * (attempt + 1))
        else:
            raise last
        if not cs:
            m = META_CHARSET.search(body[:4000])
            cs = m.group(1).decode('ascii') if m else (charset or 'utf-8')
        try:
            text = body.decode(cs, 'replace')
        except LookupError:
            text = body.decode(charset or 'utf-8', 'replace')
        return text, final

    def _download(self, url):
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT,
                                                   'Accept-Language': 'ru-RU,ru;q=0.9'})
        try:
            resp = urllib.request.urlopen(req, timeout=self.timeout)
        except urllib.error.URLError as ex:
            if isinstance(getattr(ex, 'reason', None), ssl.SSLError):
                # неполная цепочка сертификатов у хостинга: сначала с промежуточными из extra_ca.pem
                # (reskeep.ru), потом — как раньше — без проверки
                resp = None
                if self.extra is not None:
                    try:
                        resp = urllib.request.urlopen(req, timeout=self.timeout, context=self.extra)
                    except urllib.error.URLError as ex2:
                        if not isinstance(getattr(ex2, 'reason', None), ssl.SSLError):
                            raise
                if resp is None:
                    resp = urllib.request.urlopen(req, timeout=self.timeout, context=self.insecure)
            else:
                raise
        with resp:
            return resp.read(), resp.geturl(), resp.headers.get_content_charset()

    def many(self, urls, charset, workers, label):
        """Скачать список ссылок параллельно с прогрессом; -> {url: (текст, final) | Exception}."""
        urls = list(dict.fromkeys(urls))
        out = {}
        if not urls:
            return out
        prog = OG.Progress(len(urls))

        def one(u):
            try:
                return u, self.get(u, charset)
            except Exception as ex:
                return u, ex
        with cf.ThreadPoolExecutor(max(1, workers)) as ex:
            for k, (u, r) in enumerate(ex.map(one, urls), 1):
                out[u] = r
                prog.update(k, label)
        return out


# ------------------------------------------------------------------- calendar-*.js

class Raw(str):
    """Значение поля, которое скрипт не разбирает (объект, выражение)."""


def strip_comments(raw):
    out, i, n = [], 0, len(raw)
    while i < n:
        c = raw[i]
        if c in '\'"`':
            j = FB._skip_string(raw, i)
            out.append(raw[i:j])
            i = j
            continue
        j = FB._skip_comment(raw, i)
        if j != i:
            i = j
            continue
        out.append(c)
        i += 1
    return ''.join(out)


ITEM_RE = re.compile(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"|(-?\d+(?:\.\d+)?)")


def parse_value(raw):
    raw = strip_comments(raw).strip()
    s = FB.single_string(raw)
    if s is not None:
        return s
    if raw.startswith('[') and raw.endswith(']') and '{' not in raw:
        out = []
        for a, b, num in ITEM_RE.findall(raw[1:-1]):
            if num:
                out.append(float(num) if '.' in num else int(num))
            else:
                out.append(re.sub(r'\\(.)', r'\1', a if a or not b else b))
        return out
    if re.fullmatch(r'-?\d+(?:\.\d+)?', raw):
        return float(raw) if '.' in raw else int(raw)
    if raw in ('true', 'false'):
        return raw == 'true'
    return Raw(raw)


def fnum(x):
    s = ('%.6f' % float(x)).rstrip('0').rstrip('.')
    return s if s not in ('-0', '') else '0'


class CalFile:
    def __init__(self, path):
        self.path, self.name = path, os.path.basename(path)
        self.text, self.enc, self.eol = FB.read_js(path)
        self.q = '"' if self.text.count(': "') > self.text.count(": '") else "'"
        self.recs, self.new = [], []
        self.error = None
        self.ind1, self.ind2 = '    ', '        '

    def js(self, k, v, indent):
        if k == 'coord' and isinstance(v, list):
            return '[' + ', '.join(fnum(x) for x in v) + ']'      # в строку: [55.371487, 38.812763]
        if isinstance(v, list):
            return '[' + ', '.join(self.js(k, x, indent) for x in v) + ']'
        if isinstance(v, bool):
            return 'true' if v else 'false'
        if isinstance(v, (int, float)):
            return fnum(v) if isinstance(v, float) else str(v)
        q = "'" if k == 'id' else self.q
        return q + v.replace('\\', '\\\\').replace(q, '\\' + q) + q


class Rec:
    def __init__(self, cfile, span=None, flds=None):
        self.cf, self.span, self.flds = cfile, span, flds or []
        self.by, self.v = {}, {}
        for f in self.flds:
            if f['key'] not in self.by:
                self.by[f['key']] = f
                self.v[f['key']] = parse_value(cfile.text[f['vstart']:f['vend']])
        self.changes, self.log, self.blocked = {}, [], []
        self.https = []          # позиции «http» в ссылках http://orgeo.ru — заменить на https (https_orgeo)
        self.lock = locked_fields(cfile.text, span, self.flds) if span else set()
        self.rejected = commented_fields(cfile.text, span) if span else {}
        self.new = span is None
        self.seq = 0
        self.src = []            # откуда взяты данные: 'o-site 261104_OM', 'orgeo 56164'
        self.osite = None        # событие o-site (сопоставленное)
        self.orgeo = []          # события orgeo
        self.how = {}            # источник -> способ сопоставления
        self.d0 = self.d1 = None
        self.refresh_dates()
        self._tok = None

    def refresh_dates(self):
        try:
            self.d0 = D(self.get('date'))
            self.d1 = max(self.d0, D(self.get('endDate') or self.get('date')))
        except (TypeError, ValueError):
            self.d0 = self.d1 = None

    @property
    def id(self):
        return self.get('id')

    def get(self, k):
        return self.changes[k] if k in self.changes else self.v.get(k)

    def locked(self, k):
        """Поле зафиксировано комментарием «// !» (см. locked_fields)."""
        return '*' in self.lock or k in self.lock

    def set(self, k, val, why):
        """Записать новое значение поля; -> True, если оно изменилось."""
        val = fix_links(val)
        old = self.get(k)
        if same(k, old, val):
            return False
        if not self.new and self.locked(k):
            self.blocked.append((k, old, val, why))
            return False
        if not self.new and any(same(k, val, x) for x in self.rejected.get(k, [])):
            self.blocked.append((k, old, val, why + ', значение закомментировано'))
            return False
        self.changes[k] = val
        if not self.new:
            self.log.append((k, old, val, why))
        if k in ('date', 'endDate'):
            self.refresh_dates()
            self._tok = None
        if k in ('name', 'place'):
            self._tok = None
        return True

    @property
    def tok(self):
        if self._tok is None:
            self._tok = OG.toks((self.get('name') or '') + ' ' + (self.get('place') or ''))
            self._ntok = OG.toks(self.get('name') or '')
        return self._tok

    @property
    def ntok(self):
        self.tok
        return self._ntok

    def types(self):
        return set(aslist(self.get('type'))) or {'ORIENT'}

    def head(self):
        dd = self.get('date') or self.get('year') or '?'
        if self.get('endDate') and self.get('endDate') != self.get('date'):
            dd += '..' + self.get('endDate')
        return '%s %s — %s | %s [%s]' % (self.id, dd, self.get('name') or '', self.get('place') or '',
                                          self.cf.name)


ORGEO_ALIAS = {}       # псевдоним события orgeo -> номер (заполняется после загрузки orgeo)


def url_key(u):
    """Ключ для сравнения ссылок: событие orgeo — по номеру, остальное — norm_url."""
    ref = orgeo_ref(u)
    if ref:
        return 'orgeo:' + ORGEO_ALIAS.get(ref, ref)
    return norm_url(u)


def js_comments(t):
    """Тексты комментариев JS-файла (кавычки-строки пропускаются): подряд идущие
    строки «//» склеиваются в один текст, «/* … */» — целиком."""
    out, run, last, i, n = [], None, -1, 0, len(t)
    while i < n:
        c = t[i]
        if c in '\'"`':
            try:
                i = FB._skip_string(t, i)
            except ValueError:
                i += 1
            continue
        if t.startswith('//', i):
            j = t.find('\n', i)
            j = n if j < 0 else j
            if run is not None and not t[last:i].strip():
                run.append(t[i + 2:j])
            else:
                run = [t[i + 2:j]]
                out.append(run)
            last = i = j
            continue
        if t.startswith('/*', i):
            j = t.find('*/', i + 2)
            j = n if j < 0 else j
            out.append([t[i + 2:j]])
            run, i = None, j + 2
            continue
        i += 1
    return ['\n'.join(x) for x in out]


CMT_FIELD = re.compile(r"""\b(id|date|name|place|owner|reg|o_site)\s*:\s*(['"])((?:(?!\2).)*)\2""")


class Ignored:
    """Закомментированные записи и ссылки в calendar-*.js — «удалённые» старты, которые
    скрипты не создают заново: o_site и события orgeo (любая ссылка orgeo.ru/event/… или
    race.php?id=… в комментарии), id и записи {…} (date, name, place, owner, reg) — для импортёров."""

    def __init__(self):
        self.osite, self.orgeo, self.ids, self.recs = set(), set(), set(), []

    def add_text(self, t):
        for c in js_comments(t):
            self.osite.update(m.group(3) for m in CMT_FIELD.finditer(c) if m.group(1) == 'o_site')
            self.osite.update(re.findall(r'o-site\.spb\.ru/race\.php\?id=([^&"\'#\s<>,]+)', c))
            for u in re.findall(r'orgeo\.ru/event/[^\s\'"<>,]+', c):
                ref = orgeo_ref(u)
                if ref:
                    self.orgeo.add(ref)
            for blk in braces(c):
                rec = {}
                for m in CMT_FIELD.finditer(blk):
                    rec.setdefault(m.group(1), m.group(3))
                if rec.get('date'):
                    self.recs.append(rec)
                if rec.get('id'):
                    self.ids.add(rec['id'])
        return self


def braces(c):
    """Фрагменты {…} верхнего уровня в тексте (кавычки учитываются)."""
    out, depth, start, i, n = [], 0, None, 0, len(c)
    while i < n:
        ch = c[i]
        if ch in '\'"':
            j = c.find(ch, i + 1)
            i = n if j < 0 else j + 1
            continue
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}' and depth:
            depth -= 1
            if depth == 0:
                out.append(c[start:i + 1])
        i += 1
    return out


CMT_LINE = re.compile(r'^[ \t]*//[ \t]*([A-Za-z_$][\w$]*)[ \t]*:[ \t]*(.*?)[ \t]*,?[ \t]*$', re.M)


def commented_fields(t, span):
    """Закомментированные поля записи («// endDate: '2026-05-24',»): {поле: [значения]}.
    Такое значение отвергнуто вручную — скрипты не вписывают его снова (другое значение — можно)."""
    s, e = span
    out = {}
    for m in CMT_LINE.finditer(t, s, e):
        v = parse_value(m.group(2))
        if not isinstance(v, Raw):
            out.setdefault(m.group(1), []).append(v)
    return out


LOCK_LINE = re.compile(r'^[ \t]*//[ \t]*!(.*)$', re.M)
LOCK_AFTER = re.compile(r'//[ \t]*!')


def locked_fields(t, span, flds):
    """Зафиксированные поля записи t[span[0]..span[1]]:
      field: value, // !          — после значения поля, в той же строке (дальше — любой текст);
      // ! bulletin, coord         — отдельной строкой в записи: перечисленные поля, даже если их нет;
      // ! *                       — вся запись.
    -> множество имён полей ('*' — все)."""
    s, e = span
    out = set()
    starts = sorted(f['kpos'] for f in flds)
    for f in flds:
        le = t.find('\n', f['vend'])
        le = e if le < 0 or le > e else le
        if any(f['vend'] < k < le for k in starts):
            continue                      # дальше в строке ещё поле — комментарий относится к нему
        if LOCK_AFTER.search(t[f['vend']:le]):
            out.add(f['key'])
    for m in LOCK_LINE.finditer(t, s, e):
        out.update(x for x in re.split(r'[\s,;]+', m.group(1)) if x)
    return out


ORGEO_HTTP = re.compile(r'\bhttp://((?:www\.)?orgeo\.ru)\b', re.I)


def fix_links(v):
    """http://orgeo.ru… -> https://orgeo.ru… (строка или список строк); прочее — как есть.
    Используется и import_calendar_msk.py / _malakhit.py."""
    if isinstance(v, str):
        return ORGEO_HTTP.sub(r'https://\1', v)
    if isinstance(v, list):
        return [fix_links(x) for x in v]
    return v


def https_orgeo(cal, scope, rep):
    """В уже записанных ссылках http://orgeo.ru -> https://orgeo.ru (записи в обрабатываемых
    датах; поля с «// !» и закомментированные строки не трогаются)."""
    for r in cal.recs:
        if r.new or not r.d0 or not scope.hits(r.d0, r.d1) or r.locked('*'):
            continue
        t = r.cf.text
        for f in r.flds:
            if f['key'] in r.changes or r.locked(f['key']):
                continue
            for m in ORGEO_HTTP.finditer(t, f['vstart'], f['vend']):
                line = t[t.rfind('\n', 0, m.start()) + 1:m.start()]
                if not re.search(r'(?<!:)//', line):
                    r.https.append(m.start())
        if r.https:
            rep.https += len(r.https)
            rep.https_recs += 1


def patch_record(block, changes, order, nl='\n'):
    """Правка одной записи без её пересборки (комментарии и порядок полей сохраняются).
    block — текст записи от '{' до '}'; changes — {поле: значение в виде JS-текста | None — удалить};
    новое поле встаёт после ближайшего предыдущего по order поля записи, иначе последним.
    Используется и импортёрами import_calendar_msk.py / import_calendar_malakhit.py."""
    t = block.replace('\r\n', '\n')
    flds = FB.parse_fields(t, 0, len(t) - 1)
    by = {}
    for f in flds:
        by.setdefault(f['key'], f)
    removing = any(v is None and k in by for k, v in changes.items())
    edits, inserts, seq = [], defaultdict(list), 0
    for k, raw in changes.items():
        if k in by:
            f = by[k]
            if raw is None:
                for a, b, rep_ in FB.removal(t, flds, flds.index(f)):
                    edits.append((a, b, rep_, seq)); seq += 1
            else:
                edits.append((f['vstart'], f['vend'], raw, seq)); seq += 1
        elif raw is not None:
            anchor = None
            if not removing and k in order:
                for kk in reversed(order[:order.index(k)]):
                    if kk in by:
                        anchor = by[kk]
                        break
            if anchor is None:
                anchor = flds[0] if removing else flds[-1]
            inserts[anchor['kpos']].append((anchor, k, raw))
    for items in inserts.values():
        anchor = items[0][0]
        ind = indent_of(t, anchor['kpos'])
        items.sort(key=lambda x: order.index(x[1]) if x[1] in order else len(order))
        body = (',\n' + ind).join('%s: %s' % (k, raw) for _, k, raw in items)
        for pos, txt in insertion(t, anchor, body):
            edits.append((pos, pos, txt, seq)); seq += 1
    for a, b, rep_, _ in sorted(edits, key=lambda e: (e[0], e[3]), reverse=True):
        t = t[:a] + rep_ + t[b:]
    return t.replace('\n', nl) if nl != '\n' else t


def norm_url(u):
    u = (u or '').strip()
    try:
        p = urllib.parse.urlsplit(u)
    except ValueError:
        return u
    host = (p.hostname or '').lower()
    if host.startswith('www.'):
        host = host[4:]
    path = re.sub(r'^/event/(?:info|registration|participants)/', '/event/', p.path).rstrip('/')
    q = ('?' + p.query) if p.query else ''
    return host + urllib.parse.unquote(path) + q


def same(k, a, b):
    if a is None or b is None:
        return a is None and b is None
    if k == 'coord':
        try:
            return len(a) == len(b) == 2 and all(abs(float(x) - float(y)) < 1e-6 for x, y in zip(a, b))
        except (TypeError, ValueError):
            return False
    if k in ('reg', 'bulletin'):
        return {url_key(x) for x in aslist(a)} == {url_key(x) for x in aslist(b)} and \
            isinstance(a, list) == isinstance(b, list)
    if k == 'type':
        return set(aslist(a)) == set(aslist(b))
    return a == b


class Calendar:
    def __init__(self, src):
        self.src = src
        self.files = {}
        for fn in sorted(os.listdir(src)):
            if DATA_FILE.fullmatch(fn):
                cfile = CalFile(os.path.join(src, fn))
                try:
                    for s, e in FB.find_records(cfile.text):
                        cfile.recs.append(Rec(cfile, (s, e), FB.parse_fields(cfile.text, s, e)))
                except ValueError as ex:
                    cfile.error = str(ex)
                if cfile.recs:
                    first = cfile.recs[0]
                    t = cfile.text
                    ls = t.rfind('\n', 0, first.span[0]) + 1
                    if not t[ls:first.span[0]].strip():
                        cfile.ind1 = t[ls:first.span[0]]
                    if first.flds:
                        k = first.flds[0]['kpos']
                        ls = t.rfind('\n', 0, k) + 1
                        if not t[ls:k].strip():
                            cfile.ind2 = t[ls:k]
                self.files[fn] = cfile
        self.recs = [r for f in self.files.values() for r in f.recs]
        self.ignored = Ignored()
        for f in self.files.values():
            self.ignored.add_text(f.text)
        self.ids = {r.id for r in self.recs if r.id} | self.ignored.ids   # id удалённых записей не занимаются
        byid = {r.id: r for r in self.recs if r.id}
        for r in self.recs:            # запись календаря СПб — как в fill_ogps.load_records
            par = byid.get(r.get('parent')) if r.get('parent') else None
            reg = r.get('region') or (par.get('region') if par else None)
            r.spb = reg == 'SPB' if reg else bool(OG.SPB_FILES.fullmatch(r.cf.name))
            r.msk = reg == 'MSK' if reg else bool(MSK_FILE.fullmatch(r.cf.name))
            r.smr = reg == 'SAMARA' if reg else bool(SMR_FILE.fullmatch(r.cf.name))
        df = Counter()
        for r in self.recs:
            df.update(r.tok)
        n = max(len(self.recs), 1)
        self.W = lambda t: math.log(n / (1 + df[t])) if df[t] else math.log(n)

    def new_record(self, fn, fields, src):
        cfile = self.files[fn]
        prefix = 'MSK' if MSK_FILE.fullmatch(fn) else 'SMR' if SMR_FILE.fullmatch(fn) else 'SPB'
        ymd = fields['date'].replace('-', '')
        k = 1
        while '%s_%s_%d' % (prefix, ymd, k) in self.ids:
            k += 1
        rid = '%s_%s_%d' % (prefix, ymd, k)
        self.ids.add(rid)
        r = Rec(cfile)
        r.changes = {'id': rid}
        for key, val in fields.items():
            if val is not None:
                r.changes[key] = val
        r.refresh_dates()
        r.spb, r.msk, r.smr = prefix == 'SPB', prefix == 'MSK', prefix == 'SMR'
        r.src.append(src)
        r.seq = len(cfile.new)
        cfile.new.append(r)
        self.recs.append(r)
        return r

    # --- запись изменений в текст

    def render(self, cfile):
        t = cfile.text
        edits = []      # (start, end, текст, seq)
        seq = 0
        for r in cfile.recs:
            for pos in r.https:
                edits.append((pos, pos + 4, 'https', seq)); seq += 1
            if not r.changes:
                continue
            removals = [k for k, v in r.changes.items() if v is None and k in r.by]
            inserts = defaultdict(list)
            for k, val in r.changes.items():
                if k in r.by:
                    f = r.by[k]
                    if val is None:
                        i = r.flds.index(f)
                        for a, b, rep in FB.removal(t, r.flds, i):
                            edits.append((a, b, rep, seq)); seq += 1
                    else:
                        ind = indent_of(t, f['kpos'])
                        edits.append((f['vstart'], f['vend'], cfile.js(k, val, ind), seq)); seq += 1
                elif val is not None:
                    # якорь вставки — не удаляемое поле и не поле перед удаляемым последним
                    # (у него снимается запятая): иначе правки пересекутся
                    gone = {r.flds.index(r.by[x]) for x in removals}
                    bad = gone | {i - 1 for i in gone if i == len(r.flds) - 1}
                    names = [a for a in ANCHORS.get(k, []) if a in r.by and r.flds.index(r.by[a]) not in bad]
                    if names:
                        anchor = r.by[names[0]]
                    elif not removals:
                        anchor = r.flds[-1]
                    else:
                        anchor = r.flds[0]
                    inserts[anchor['kpos']].append((anchor, k, val))
            for items in inserts.values():
                anchor = items[0][0]
                ind = indent_of(t, anchor['kpos'])
                order = {k: i for i, k in enumerate(NEW_ORDER)}
                items.sort(key=lambda x: order.get(x[1], 99))
                body = (',\n' + ind).join('%s: %s' % (k, cfile.js(k, v, ind)) for _, k, v in items)
                for pos, txt in insertion(t, anchor, body):
                    edits.append((pos, pos, txt, seq)); seq += 1
        # новые записи — по дате
        dated = [r for r in cfile.recs if r.d0]
        for r in sorted(cfile.new, key=lambda x: (x.get('date'), x.seq)):
            block = self.render_new(cfile, r)
            after = None
            for x in dated:
                if x.get('date') <= r.get('date'):
                    after = x
            if after is not None:
                edits.append((after.span[1] + 1, after.span[1] + 1, ',\n' + cfile.ind1 + block, seq))
            elif cfile.recs:
                p = cfile.recs[0].span[0]
                edits.append((p, p, block + ',\n' + cfile.ind1, seq))
            seq += 1
        for a, b, rep, _ in sorted(edits, key=lambda e: (e[0], e[3]), reverse=True):
            t = t[:a] + rep + t[b:]
        return t

    def render_new(self, cfile, r):
        lines = []
        for k in NEW_ORDER:
            v = r.changes.get(k)
            if v is not None:
                lines.append('%s%s: %s' % (cfile.ind2, k, cfile.js(k, v, cfile.ind2)))
        return '{\n' + ',\n'.join(lines) + '\n' + cfile.ind1 + '}'


def indent_of(t, pos):
    ls = t.rfind('\n', 0, pos) + 1
    ind = t[ls:pos]
    return ind if not ind.strip() else re.match(r'\s*', ind).group(0)


def insertion(t, anchor, body):
    """Вставка текста body (одно или несколько полей) после поля anchor — как в fill_bulletins."""
    ind = indent_of(t, anchor['kpos'])
    if anchor['comma'] is not None:
        after = anchor['comma'] + 1
        pos = after
        rest_end = t.find('\n', after)
        rest_end = len(t) if rest_end < 0 else rest_end
        rest = t[after:rest_end]
        if not rest.strip() or rest.strip().startswith('//'):
            pos = rest_end
        return [(pos, '\n' + ind + body + ',')]
    pos = anchor['vend']
    rest_end = t.find('\n', pos)
    rest_end = len(t) if rest_end < 0 else rest_end
    if t[pos:rest_end].strip().startswith('//'):
        return [(pos, ','), (rest_end, '\n' + ind + body)]
    return [(pos, ',\n' + ind + body)]


# ------------------------------------------------------------------- o-site

RU_MON = {'янв': 1, 'фев': 2, 'мар': 3, 'апр': 4, 'май': 5, 'мая': 5, 'июн': 6, 'июл': 7,
          'авг': 8, 'сен': 9, 'окт': 10, 'ноя': 11, 'дек': 12}
EN_MON = {m: i + 1 for i, m in enumerate('jan feb mar apr may jun jul aug sep oct nov dec'.split())}


def month(w):
    w = w.lower()
    return RU_MON.get(w[:3]) or EN_MON.get(w[:3])


def parse_osite_date(text, year):
    """Даты старта по тексту о-сайта ('24-25 октября 2026', '7 ноября', 'October 24, 2026',
    '07-08.01.19' …) -> (d0, d1) или None, если текст не разобран целиком."""
    t = html.unescape(re.sub(r'<[^>]+>', ' ', text or '')).lower().replace('\xa0', ' ')
    t = re.sub(r'[–—]', '-', t)
    t = re.sub(r'(\d)-?(?:ое|ого|го|е|й|ый|ий)(?![а-яё])', r'\1', t)
    t = re.sub(r'\s+', ' ', t).strip(' .,')
    t = re.sub(r',?\s*(?:старт\s+)?(?:в\s+)?\d{1,2}[:.]\d{2}$', '', t).strip(' .,')
    t = re.sub(r'\s*(?:г\.?|гг\.?|года?)$', '', t).strip(' .,')
    w = r'([a-zа-яё]+)'
    y4 = r'(?:\s*,?\s+(\d{4}))?'

    def mk(d, m, y):
        y = int(y) if y else year
        if y < 100:
            y += 2000
        return dt.date(y, m, int(d))
    try:
        m = re.fullmatch(r'(\d{1,2})\s+' + w + y4, t)
        if m and month(m.group(2)):
            d = mk(m.group(1), month(m.group(2)), m.group(3))
            return d, d
        m = re.fullmatch(r'(\d{1,2})\s*-\s*(\d{1,2})\s+' + w + y4, t)
        if m and month(m.group(3)):
            mo = month(m.group(3))
            return mk(m.group(1), mo, m.group(4)), mk(m.group(2), mo, m.group(4))
        m = re.fullmatch(r'(\d{1,2})\s+' + w + r'\s*-\s*(\d{1,2})\s+' + w + y4, t)
        if m and month(m.group(2)) and month(m.group(4)):
            d0, d1 = mk(m.group(1), month(m.group(2)), m.group(5)), mk(m.group(3), month(m.group(4)), m.group(5))
            if d0 > d1:
                d0 = d0.replace(year=d0.year - 1)
            return d0, d1
        m = re.fullmatch(w + r'\s+(\d{1,2}),?\s+(\d{4})', t)
        if m and month(m.group(1)):
            d = mk(m.group(2), month(m.group(1)), m.group(3))
            return d, d
        m = re.fullmatch(r'(\d{1,2})\.(\d{1,2})\.(\d{2}|\d{4})', t)
        if m:
            d = mk(m.group(1), int(m.group(2)), m.group(3))
            return d, d
        m = re.fullmatch(r'(\d{1,2})\s*-\s*(\d{1,2})\.(\d{1,2})\.(\d{2}|\d{4})', t)
        if m:
            return mk(m.group(1), int(m.group(3)), m.group(4)), mk(m.group(2), int(m.group(3)), m.group(4))
        m = re.fullmatch(r'(\d{1,2})\.(\d{1,2})\s*-\s*(\d{1,2})\.(\d{1,2})\.(\d{2}|\d{4})', t)
        if m:
            d0, d1 = mk(m.group(1), int(m.group(2)), m.group(5)), mk(m.group(3), int(m.group(4)), m.group(5))
            if d0 > d1:
                d0 = d0.replace(year=d0.year - 1)
            return d0, d1
    except ValueError:
        return None
    return None


def clean(s):
    return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s or '')).split())


def bulletins(page, final):
    """Бюллетени страницы (как fill_bulletins), без ссылок на страницы о-сайта."""
    return [c for c in FB.bulletin_candidates(page, final) if 'race.php' not in c[2]]


OS_BLOCK = re.compile(r"<tr>\s*<td width=55px.*?</tr>", re.S)
OS_ITEM = re.compile(r"<b>(.*?)</b></p>\s*<a href='race\.php\?id=([^']*)'[^>]*>\s*<b><span>(.*?)</span>", re.S)
OS_PROP = re.compile(r"<td class=race-prop>([^<]*?):?(?:&nbsp;)?</td><td class=race-prop>(.*?)</td>", re.S)
OS_LINK = re.compile(r"<a class=race-desc-link href='([^']*)'>(.*?)</a>", re.S)
DOC_EXT = re.compile(r'\.(?:docx?|xlsx?|rtf|pdf|zip|rar|odt|ods)$', re.I)


class OSiteEvent:
    def __init__(self, oid):
        self.id, self.items = oid, []
        self.name = self.datetext = self.icon = None
        self.desc = self.props_text = None
        self.d0 = self.d1 = None
        self.page = self.final = None
        self.error = None
        self.place = self.coord = self.fmt = None
        self.regs, self.cands, self.orgeo_refs = [], [], []
        self.recs = []
        self.badyear = None
        self.yearless = False
        self.year_src = 'list'   # откуда год для дат без года: list | id | guess (year_hint)
        self.rec_years = []      # годы записей с этим o_site (для year_hint)

    @property
    def series(self):
        return (len(self.recs) > 1 or not self.d0 or (self.d1 - self.d0).days >= SERIES_DAYS)

    @property
    def typ(self):
        """Название и формат/дисциплина/вид/дистанция страницы -> значок «Рогейн» -> описание в
        списке стартов -> значок вида."""
        return (type_by_words(' '.join(x for x in (self.name, self.props_text) if x))
                or ('ROGAINE' if self.icon == 'rogein' else None)
                or type_by_words(self.desc, weak=False)
                or OSITE_TYPE.get(self.icon))

    def url(self):
        return OSITE + 'race.php?id=' + urllib.parse.quote(self.id, safe='')

    def year_hint(self):
        """Год для дат без года, если старта нет в списках по годам (страница загружена по o_site
        записи): по id «250330_Dlit_1» -> 2025, иначе по дате записи, иначе текущий."""
        m = re.match(r'(\d{2})(\d{2})(\d{2})(?!\d)', self.id)
        if m:
            try:
                y = dt.date(2000 + int(m.group(1)), int(m.group(2)), int(m.group(3))).year
                self.year_src = 'id'
                return y
            except ValueError:
                pass
        self.year_src = 'guess'
        years = [r.d0.year for r in self.recs if r.d0] + [y for y in self.rec_years]
        return years[0] if years else dt.date.today().year

    def parse(self, page, final, year):
        self.page, self.final = page, final
        title = re.search(r'font-size: 14pt; ">(.*?)</span>', page, re.S)
        when = re.search(r'font-size: 12pt; ">\((.*?)\)</span>', page, re.S)
        icon = re.search(r"images/format/([\w-]+)\.\w+' alt=", page)
        if title and clean(title.group(1)):
            self.name = self.name or clean(title.group(1))
        if icon:
            self.icon = self.icon or icon.group(1)
        props = {clean(k): clean(v) for k, v in OS_PROP.findall(page)}
        if not self.d0:
            for txt in [self.datetext, when and when.group(1), props.get('Время Проведения')]:
                dd = parse_osite_date(txt, year) if txt else None
                if dd:
                    self.d0, self.d1 = dd
                    self.datetext = self.datetext or txt
                    # год не указан («30 марта») — взят из списка или угадан (year_hint)
                    self.yearless = not re.search(r'\d{4}|\.\d{2}\s*$', txt.strip(' .,'))
                    break
        self.check_year()
        self.place = props.get('Место Проведения') or None
        m = re.fullmatch(r'(-?\d{1,2}\.\d+)\s*[,;]\s*(-?\d{1,3}\.\d+)', props.get('Координаты центра соревнований', ''))
        if m:
            self.coord = [float(m.group(1)), float(m.group(2))]
        self.props_text = ' '.join(props.get(k, '') for k in ('Формат', 'Дисциплина', 'Вид', 'Дистанция'))
        for k in ('Формат', 'Дисциплина', 'Дистанция'):
            if props.get(k):
                self.fmt = norm_fmt(props[k])
                break
        for href, text in OS_LINK.findall(page):
            text = clean(text)
            href = urllib.parse.urljoin(final, html.unescape(href).strip()).replace(' ', '%20')
            if re.match(r'заявка\b', text, re.I) and href.startswith('http') and not DOC_EXT.search(
                    urllib.parse.urlsplit(href).path):
                if href not in self.regs:
                    self.regs.append(href)
        self.orgeo_refs = [x for x in (orgeo_ref(u) for u in self.regs) if x]
        self.cands = bulletins(page, final)

    def check_year(self):
        """Дата не в году списка, где стоит старт, — скорее опечатка на о-сайте: дата не используется."""
        if self.d0 and self.items and not any(self.d0.year <= y <= self.d1.year for y in self.items):
            self.badyear = '%s..%s' % (self.d0, self.d1)
            self.d0 = self.d1 = None


def osite_list(fetcher, scope, workers, rep):
    """События o-site из списков archive.php?year=YYYY: {id: OSiteEvent}."""
    events = {}
    try:
        first, _ = fetcher.get(OSITE + 'archive.php', 'cp1251')
        available = [int(y) for y in re.findall(r'archive\.php\?year=(\d{4})', first) if int(y) > 1990]
    except Exception as ex:
        rep.error('o-site: список годов не загружен: %s' % ex)
        available = []
    years = scope.osite_years(available)
    prog = OG.Progress(len(years), fmt=lambda d, t: '%d/%d г.' % (d, t))
    for k, year in enumerate(years, 1):
        p, pages = 1, None
        while True:
            url = OSITE + 'archive.php?year=%d' % year + ('&page=%d' % p if p > 1 else '')
            try:
                s, _ = fetcher.get(url, 'cp1251')
            except Exception as ex:
                rep.error('o-site: %s: %s' % (url, ex))
                break
            if pages is None:
                pages = max([1] + [int(x) for x in re.findall(r'archive\.php\?year=%d&page=(\d+)' % year, s)])
            dates = []
            for blk in OS_BLOCK.findall(s):
                m = OS_ITEM.search(blk)
                if not m:
                    continue
                oid = html.unescape(m.group(2)).strip()
                ev = events.get(oid) or events.setdefault(oid, OSiteEvent(oid))
                icon = re.search(r"images/format/([\w-]+)\.", blk)
                if not ev.items:
                    ev.datetext, ev.name = clean(m.group(1)), clean(m.group(3))
                    ev.icon = icon and icon.group(1)
                    desc = re.search(r"<p class=race-desc>(.*?)</p>", blk, re.S)
                    ev.desc = clean(desc.group(1)) if desc else None
                    dd = parse_osite_date(ev.datetext, year)
                    if dd:
                        ev.d0, ev.d1 = dd
                        dates.append(dd[1])
                ev.items.append(year)
                ev.check_year()
            p += 1
            if p > pages or (scope.kind == 'fresh' and dates and max(dates) < scope.since):
                break
        prog.update(k, 'событий: %d' % len(events))
    return events


# ------------------------------------------------------------------- orgeo

ORGEO_ITEM = re.compile(
    r'<td\s+class="event_view_td hidden-xs event_id_(\d+)[^"]*"\s*>.*?title="([^"]*)".*?'
    r'<a href="/event/([^"]+)">(.*?)</a>(?:<div class="event-place">(.*?)</div>)?.*?'
    r'<b class="hidden-xs no_wrap" >([^<]*)</b>', re.S)
ORGEO_REF = re.compile(r'orgeo\.ru/event/(?:info/|registration/|participants/)?([\w-]+)/?(?:[#?].*)?$', re.I)
ORGEO_GENERIC = re.compile(r'orgeo\.ru/(?:event/(?:organizer|index|archive|create)\b|u\d+|\?|$)', re.I)
ORGEO_NOT_EVENT = {'organizer', 'index', 'archive', 'create', 'info', 'registration', 'participants'}


def orgeo_ref(url):
    """Номер или псевдоним события orgeo из ссылки на его страницу, иначе None."""
    m = ORGEO_REF.search(url or '')
    if m and m.group(1).lower() not in ORGEO_NOT_EVENT:
        return m.group(1)
    return None


def generic_reg(v):
    """reg пуст или ведёт на список событий orgeo (а не на страницу события)."""
    urls = aslist(v)
    return not urls or all(ORGEO_GENERIC.search(u) and not orgeo_ref(u) for u in urls)


def parse_orgeo_dates(s):
    s = s.strip()
    try:
        m = re.fullmatch(r'(\d\d)\.(\d\d)\.(\d{4})', s)
        if m:
            d = dt.date(int(m.group(3)), int(m.group(2)), int(m.group(1)))
            return d, d
        m = re.fullmatch(r'(\d\d)-(\d\d)\.(\d\d)\.(\d{4})', s)
        if m:
            y, mo = int(m.group(4)), int(m.group(3))
            return dt.date(y, mo, int(m.group(1))), dt.date(y, mo, int(m.group(2)))
        m = re.fullmatch(r'(\d\d)\.(\d\d)-(\d\d)\.(\d\d)\.(\d{4})', s)
        if m:
            y = int(m.group(5))
            return dt.date(y, int(m.group(2)), int(m.group(1))), dt.date(y, int(m.group(4)), int(m.group(3)))
        m = re.fullmatch(r'(\d\d)\.(\d\d)\.(\d{4})\s*-\s*(\d\d)\.(\d\d)\.(\d{4})', s)
        if m:
            return (dt.date(int(m.group(3)), int(m.group(2)), int(m.group(1))),
                    dt.date(int(m.group(6)), int(m.group(5)), int(m.group(4))))
    except ValueError:
        pass
    return None


DISCIPLINE = re.compile(r'кросс|лыжная гонка|велокросс|трейл|спринт|классик|лонг|выбор|маркир|эстафет|'
                        r'рогейн|многодн|общий старт|middle|средн', re.I)


class OrgeoEvent:
    def __init__(self, eid, alias):
        self.id, self.alias = str(eid), alias
        self.lists = set()
        self.level = self.name = self.place = None
        self.d0 = self.d1 = None
        self.region = self.addr = None
        self.coord = self.fmt = None
        self.typ = None
        self.cands, self.osite_refs, self.endreg = [], [], []
        self.page = self.error = None
        self.recs = []

    def url(self):
        return ORGEO + 'event/' + self.id

    @property
    def refs(self):
        return {self.id, self.alias}

    @property
    def area(self):
        if self.addr in SPB_REGIONS:
            return 'SPB'
        if self.addr in MSK_REGIONS:
            return 'MSK'
        if self.addr in SMR_REGIONS:
            return 'SAMARA'
        return None if self.addr else self.region

    def parse(self, page, final):
        self.page = page
        meta = {}
        for k, v in re.findall(r'itemprop="(startDate|endDate|latitude|longitude|addressRegion|'
                               r'addressLocality|streetAddress)" content="([^"]*)"', page):
            meta.setdefault(k, html.unescape(html.unescape(v)).strip())
        h1 = re.search(r'<div><h1>(.*?)</h1></div>', page, re.S)
        if h1:
            self.name = clean(h1.group(1)) or self.name
        try:
            self.d0 = D(meta['startDate'][:10])
            self.d1 = max(self.d0, D(meta.get('endDate', meta['startDate'])[:10]))
        except (KeyError, ValueError):
            pass
        self.addr = meta.get('addressRegion') or None
        if meta.get('streetAddress'):     # центр соревнований; без дат и служебных слов, иначе — город
            self.place = orgeo_place(' » '.join(x for x in (meta.get('addressRegion'), meta.get('addressLocality'),
                                                            meta.get('streetAddress')) if x)) or self.place
        try:
            self.coord = [float(meta['latitude']), float(meta['longitude'])]
            if self.coord == [0.0, 0.0]:
                self.coord = None
        except (KeyError, ValueError):
            pass
        disc = []
        for li in re.findall(r'<li style="list-style-type:none;">(.*?)</li>', page, re.S):
            parts = re.findall(r'<strong>(.*?)</strong>', li, re.S)
            if len(parts) >= 2:
                disc.append(clean(parts[1]).rstrip('.'))
        self.typ = type_by_words((self.name or '') + ' ' + ' '.join(disc)) or 'ORIENT'
        fm = []
        for d in disc:
            d = re.sub(r'\s*\([^)]*\)', '', d).replace('"', '').replace('«', '').replace('»', '')
            d = re.sub(r'\s*[-–—]\s*', ' - ', d).strip().lower()
            if not DISCIPLINE.search(d):
                continue
            d = re.sub(r'^(?:кросс|лыжная гонка|лг|велокросс|трейл-?о?)\s+-\s+', '', d).strip()
            d = norm_fmt(d)
            if d and d not in fm:
                fm.append(d)
        self.fmt = ', '.join(fm) or None
        self.osite_refs = list(dict.fromkeys(
            html.unescape(x) for x in re.findall(r'o-site\.spb\.ru/race\.php\?id=([^&"\'#\s<>]+)', page)))
        self.cands = bulletins(page, final)
        self.endreg = FE.SITES[0]['find'](page)


PLACE_DATE = re.compile(r'\b\d{1,2}(?:-\d{1,2})?[./]\d{1,2}(?:[./]\d{2,4})?\b|'
                        r'\b\d{1,2}(?:-\d{1,2})?\s+(?:январ|феврал|март|апрел|ма[йя]|июн|июл|август|сентябр|'
                        r'октябр|ноябр|декабр)\w*(?:\s+\d{4})?|\(?\b(?:19|20)\d{2}\b\)?', re.I)
PLACE_JUNK = re.compile(r'(?:регистрац|центр\w* соревнован|место старта|старт|финиш|сбор|парковк|'
                        r'индивидуальн\w* гонк|спринт|классика|лонг|кубок|чип\b|чемпионат|первенств)', re.I)


def orgeo_place(text):
    """Место из списка orgeo («Область » Город » Центр соревнований»): последняя часть без дат и
    годов («БАРСУК 06.10.24» -> «БАРСУК»); если в ней остались только служебные слова
    («Регистрация», «Старт 24.10.2026», «Центр соревнований 7-8.05.2023», «ЧиП г.о. Самара 27-28 июня
    2026») — предыдущая часть (город; область — нет)."""
    parts = [x.strip() for x in (text or '').split('»') if x.strip()]
    while parts:
        last = re.sub(r'\s{2,}', ' ', PLACE_DATE.sub(' ', parts[-1]))
        last = re.sub(r'\(\s*\)', '', last).strip(' ,.-–—')
        if last.count('(') > last.count(')'):        # «р. Курумка (Кемпинг» — скобку закрыть
            last = last.rstrip(' ,.-–—(') + ')' if not last.endswith('(') else last.rstrip(' (')
        last = last.lstrip(')').strip(' ,.-–—')
        if last and not re.match(PLACE_JUNK.pattern + r'|\d+$', last, re.I):
            return last
        parts.pop()
        if len(parts) == 1 and re.search(r'(?:ская|ский|ская обл\.?|край|республика)$', parts[0], re.I):
            return None                # осталась только область — места нет
    return None


def orgeo_list(fetcher, scope, rep):
    """События orgeo из списков подразделов: {id: OrgeoEvent}."""
    events, aliases = {}, {}
    today = dt.date.today()
    jobs = []
    for reg in ORGEO_REGIONS:
        base = 'type/orienteering%s/region/' + reg + '/no_national/true'
        if scope.kind == 'years':
            for y in scope.years:
                jobs.append((reg, ORGEO + 'event/archive/' + (base % '') + '/date/%d' % y, None))
                if y >= today.year:
                    jobs.append((reg, ORGEO + 'event/index/' + (base % ('/date/%d' % y)), None))
        else:
            jobs.append((reg, ORGEO + 'event/index/' + (base % ''), None))
            jobs.append((reg, ORGEO + 'event/archive/' + (base % ''),
                         scope.since if scope.kind == 'fresh' else None))
    prog = OG.Progress(len(jobs))
    for k, (reg, base, stop) in enumerate(jobs, 1):
        p = 1
        while True:
            url = base + ('/EventView_page/%d' % p if p > 1 else '')
            try:
                s, _ = fetcher.get(url, 'utf-8')
            except Exception as ex:
                rep.error('orgeo: %s: %s' % (url, ex))
                break
            dates = []
            for eid, level, alias, a, place, dtext in ORGEO_ITEM.findall(s):
                ev = events.get(eid) or events.setdefault(eid, OrgeoEvent(eid, html.unescape(alias)))
                aliases[ev.alias] = eid
                ev.lists.add(reg)
                ev.level = html.unescape(level)
                name = re.sub(r'<b class="visible-xs-inline".*?</span>', '', a, flags=re.S)
                ev.name = ev.name or clean(name)
                ev.place = ev.place or orgeo_place(clean(place))
                ev.region = 'MSK' if reg.startswith('moscow') else 'SAMARA' if reg == 'samara' else 'SPB'
                dd = parse_orgeo_dates(dtext)
                if dd:
                    ev.d0, ev.d1 = dd
                    dates.append(dd[1])
            summ = re.search(r'Элементы \d+—(\d+) из (\d+)', s)
            if not summ or int(summ.group(1)) >= int(summ.group(2)):
                break
            if stop and dates and max(dates) < stop:
                break
            p += 1
        prog.update(k, 'событий: %d' % len(events))
    return events, aliases


# ------------------------------------------------------------------- отчёт

class Report:
    def __init__(self, verbose):
        self.verbose = verbose
        self.errors, self.check, self.notnew, self.diffs, self.dates = [], [], [], [], []
        self.ignored = []
        self.https = self.https_recs = 0

    def error(self, s):
        self.errors.append(s)

    def manual(self, s):
        self.check.append(s)


# ------------------------------------------------------------------- сопоставление

def match_words(cal, pool, name, place, d0, d1, per_day=False, strict=False):
    """Записи из pool, уверенно совпавшие с событием по дате и словам.
    per_day — многодневное событие: уверенность проверяется для каждого дня отдельно;
    strict — общих слов в названии записи должно быть не меньше двух (страница-серия).
    -> (список записей, список «сомнительных» (запись, вес, слова))."""
    et = OG.toks((name or '') + ' ' + (place or ''))
    ent = OG.toks(name or '')
    ept = OG.toks(place or '') - ent
    if not et or not d0:
        return [], []
    byday = defaultdict(list)
    for r in pool:
        if r.d0 and overlap(r.d0, r.d1, d0, d1):
            if per_day and not (d0 <= r.d0 and r.d1 <= d1):
                continue            # многодневное событие: только записи внутри его дат
            common = et & r.tok
            if strict and len(common & r.ntok) < 2:
                continue
            rpt = OG.toks(r.get('place') or '') - r.ntok
            if ept and rpt and not (ept & r.tok) and not (rpt & et) and len(et & r.ntok) < 2:
                continue            # места разные, а название совпало слабо — скорее всего, другой старт
            if per_day and not (common & ent):
                continue            # многодневное событие: нужно общее слово названия события
            if common:
                key = r.d0 if per_day else None
                byday[key].append((sum(cal.W(t) for t in common), r, common))
    sure, maybe = [], []
    ids = {h[1].id for hits in byday.values() for h in hits}
    for key in list(byday):        # дочерние записи уступают «зонтику», если он тоже подходит
        byday[key] = [h for h in byday[key] if h[1].get('parent') not in ids]
        if not byday[key]:
            del byday[key]
    for hits in byday.values():
        hits.sort(key=lambda h: -h[0])
        score, r, common = hits[0]
        strong = len(common) >= 2 or max(cal.W(t) for t in common) >= RARE_WEIGHT
        unique = len(hits) == 1 or hits[1][0] <= score / 2
        if strong and unique:
            sure.append(r)
        else:
            maybe += [(h[1], h[0], sorted(h[2])) for h in hits[:3]]
    return sure, maybe


def near(cal, region, name, place, d0, d1):
    """Записи региона в даты события ±1 день с общими словами — возможные дубли новой записи."""
    et = OG.toks((name or '') + ' ' + (place or ''))
    a, b = d0 - dt.timedelta(days=1), d1 + dt.timedelta(days=1)
    out = []
    for r in cal.recs:
        if not r.d0 or (r.d1 - r.d0).days > UMBRELLA_DAYS:
            continue
        if not in_region(r, region):
            continue
        if overlap(r.d0, r.d1, a, b):
            c = et & r.tok
            if c:
                out.append((sum(cal.W(t) for t in c), r, sorted(c)))
    out.sort(key=lambda x: -x[0])
    return '; '.join('%s %s «%s» (%s)' % (r.id, r.get('date'), r.get('name'), ','.join(c)) for _, r, c in out[:3])


def no_words(name, place):
    return not OG.toks((name or '') + ' ' + (place or ''))


def in_region(r, region):
    return ((region == 'SPB' and r.spb) or (region == 'MSK' and r.msk)
            or (region == 'SAMARA' and getattr(r, 'smr', False)))


def word_pool(cal, region, scope):
    """Записи, которые можно сопоставлять по словам."""
    out = []
    for r in cal.recs:
        if not r.d0 or (r.d1 - r.d0).days > UMBRELLA_DAYS or r.cf.name in NOAUTO_FILES:
            continue
        if not scope.hits(r.d0, r.d1):
            continue
        if r.types() & NOAUTO_TYPES:
            continue
        if in_region(r, region):
            out.append(r)
    return out


def link_osite(cal, events, orgeo_events, rep, scope):
    """Сопоставить события o-site с записями; создать новые записи."""
    back = defaultdict(set)          # o_site -> события orgeo, ведущие на эту страницу
    for e in orgeo_events.values():
        if e.page:
            for x in e.osite_refs:
                back[x] |= e.refs
    by_osite = defaultdict(list)
    for r in cal.recs:
        if r.get('o_site'):
            by_osite[r.get('o_site')].append(r)
    by_orgeo = defaultdict(list)
    for r in cal.recs:
        for u in aslist(r.get('reg')):
            ref = orgeo_ref(u)
            if ref:
                by_orgeo[ref].append(r)
    missing = {x for x, e in events.items() if e.error == 'страницы нет'}
    pool = [r for r in word_pool(cal, 'SPB', scope) if not r.get('o_site') or r.get('o_site') in missing]
    claims = defaultdict(list)
    for ev in events.values():
        if ev.id in by_osite:
            for r in by_osite[ev.id]:
                r.osite, r.how['o-site'] = ev, 'o_site'
            ev.recs = list(by_osite[ev.id])
            continue
        if not ev.page or not (ev.d0 and scope.hits(ev.d0, ev.d1)):
            continue
        if ev.id in cal.ignored.osite:
            ev.recs.append(None)            # запись закомментирована — старт не нужен
            cal.ignored.orgeo.update(ev.orgeo_refs)     # и его событие orgeo («Заявка» на о-сайте)
            rep.ignored.append('o-site %s %s «%s»' % (ev.id, ev.d0, ev.name))
            continue
        refs = list(ev.orgeo_refs) + sorted(back.get(ev.id, ()))
        cross = [r for ref in refs for r in by_orgeo.get(ref, [])
                 if not r.get('o_site') or r.get('o_site') in missing]
        cross = list(dict.fromkeys(cross))
        if len(cross) == 1:
            claims[cross[0]].append((ev, 'по заявке orgeo'))
            continue
        long_ = (ev.d1 - ev.d0).days >= SERIES_DAYS
        sure, maybe = match_words(cal, pool, ev.name, ev.place, ev.d0, ev.d1, ev.d1 > ev.d0, long_)
        for r in sure:
            claims[r].append((ev, 'по дате и словам'))
        if not sure and maybe:
            rep.manual('o-site %s %s «%s»: возможно, %s' % (
                ev.id, ev.d0, ev.name, '; '.join('%s «%s» (%.1f: %s)' % (r.id, r.get('name'), sc, ','.join(c))
                                                 for r, sc, c in maybe)))
    for x in sorted(missing):
        for r in by_osite.get(x, []):
            if r not in claims and r.d0 and scope.hits(r.d0, r.d1):
                rep.manual('%s: страницы о-сайта %s нет' % (r.head(), x))
    for r, evs in claims.items():
        if len(evs) > 1:
            rep.manual('%s: подходят несколько страниц о-сайта: %s' % (
                r.head(), ', '.join('%s «%s»' % (e.id, e.name) for e, _ in evs)))
            continue
        ev, how = evs[0]
        r.osite, r.how['o-site'] = ev, how
        ev.recs.append(r)
        r.set('o_site', ev.id, 'o-site, ' + how)
    # новые записи
    for ev in events.values():
        if ev.recs or not ev.page or ev.error:
            continue
        if any(ref in cal.ignored.orgeo for ref in ev.orgeo_refs):
            rep.ignored.append('o-site %s %s «%s» (заявка orgeo — в закомментированной записи)' % (
                ev.id, ev.d0, ev.name))
            continue
        if not ev.d0:
            if ev.badyear:
                rep.notnew.append('o-site %s «%s»: дата «%s» (%s) не в году списка %s — опечатка?' % (
                    ev.id, ev.name, ev.datetext, ev.badyear, ', '.join(map(str, ev.items))))
            elif ev.name and rep.verbose:
                rep.notnew.append('o-site %s «%s»: дата «%s» не разобрана' % (ev.id, ev.name, ev.datetext))
            continue
        if not scope.hits(ev.d0, ev.d1):
            continue
        why = None
        if (ev.d1 - ev.d0).days >= SERIES_DAYS:
            why = 'серия/сезон (%s..%s) — записи этапов создайте вручную или впишите им o_site' % (ev.d0, ev.d1)
        elif NATIONAL.search(ev.name or ''):
            why = 'всероссийский/международный старт — запись ведётся в calendar-fsor.js/calendar-common.js'
        fn = 'calendar-%d.js' % ev.d0.year
        if not why and fn not in cal.files:
            why = 'нет файла %s' % fn
        if not why and no_words(ev.name, ev.place):
            why = 'в названии и месте нет значимых слов — проверьте, нет ли старта в календаре'
        if not why:
            dup = near(cal, 'SPB', ev.name, ev.place, ev.d0, ev.d1)
            if dup:
                why = 'возможно, это %s — впишите o_site или создайте запись вручную' % dup
        if why:
            rep.notnew.append('o-site %s %s «%s»: %s' % (ev.id, ev.d0, ev.name, why))
            continue
        r = cal.new_record(fn, dict(date=ev.d0.isoformat(),
                                    endDate=ev.d1.isoformat() if ev.d1 != ev.d0 else None,
                                    name=ev.name, o_site=ev.id), 'o-site ' + ev.id)
        r.osite, r.how['o-site'] = ev, 'новая запись'
        ev.recs.append(r)


def link_orgeo(cal, events, rep, scope):
    by_ref = defaultdict(list)
    for r in cal.recs:
        for u in aslist(r.get('reg')):
            ref = orgeo_ref(u)
            if ref:
                by_ref[ref].append(r)
    by_osite = defaultdict(list)
    for r in cal.recs:
        if r.get('o_site'):
            by_osite[r.get('o_site')].append(r)
    pools = {x: word_pool(cal, x, scope) for x in ('SPB', 'MSK', 'SAMARA')}
    claims = defaultdict(list)
    for ev in events.values():
        if not ev.page:
            continue
        direct = list(dict.fromkeys(r for ref in ev.refs for r in by_ref.get(ref, [])))
        if direct:
            for r in direct:
                r.orgeo.append(ev)
                r.how['orgeo ' + ev.id] = 'reg'
            ev.recs = direct
            continue
        if not (ev.d0 and scope.hits(ev.d0, ev.d1)):
            continue
        if ev.level in ORGEO_SKIP_LEVEL or SEMINAR.search(ev.name or ''):
            continue
        if ev.refs & cal.ignored.orgeo or set(ev.osite_refs) & cal.ignored.osite:
            ev.recs.append(None)            # запись закомментирована — старт не нужен
            rep.ignored.append('orgeo %s %s «%s»' % (ev.id, ev.d0, ev.name))
            continue
        cross = [r for x in ev.osite_refs for r in by_osite.get(x, [])]
        cross += [r for r in cal.recs if r.osite and r.osite.page and ev.refs & set(r.osite.orgeo_refs)]
        cross = list(dict.fromkeys(cross))
        if len(cross) > 1 and ev.d0:
            cross = [r for r in cross if r.d0 and overlap(r.d0, r.d1, ev.d0, ev.d1)]
        if len(cross) == 1:
            claims[cross[0]].append((ev, 'по ссылке на о-сайт'))
            continue
        if len(cross) > 1:
            rep.manual('orgeo %s «%s» ведёт на о-сайт %s, записей с этим o_site в даты события: %d (%s)' % (
                ev.id, ev.name, ', '.join(ev.osite_refs), len(cross), ', '.join(r.id for r in cross)))
            continue
        area = ev.area or ev.region
        if area not in pools:
            continue
        pool = [r for r in pools[area] if generic_reg(r.get('reg')) or not any(orgeo_ref(u) for u in aslist(r.get('reg')))]
        sure, maybe = match_words(cal, pool, ev.name, ev.place, ev.d0, ev.d1, ev.d1 > ev.d0,
                                  (ev.d1 - ev.d0).days >= SERIES_DAYS)
        for r in sure:
            claims[r].append((ev, 'по дате и словам'))
        if not sure and maybe:
            rep.manual('orgeo %s %s «%s»: возможно, %s' % (
                ev.id, ev.d0, ev.name, '; '.join('%s «%s» (%.1f: %s)' % (r.id, r.get('name'), sc, ','.join(c))
                                                 for r, sc, c in maybe)))
    for r, evs in claims.items():
        if len(evs) > 1:
            rep.manual('%s: подходят несколько событий orgeo: %s' % (
                r.head(), ', '.join('%s «%s»' % (e.id, e.name) for e, _ in evs)))
            for e, _ in evs:
                e.recs.append(None)     # чтобы не создать запись
            continue
        ev, how = evs[0]
        r.orgeo.append(ev)
        r.how['orgeo ' + ev.id] = how
        ev.recs.append(r)
    # новые записи
    for ev in events.values():
        if ev.recs or not ev.page or not ev.d0 or not scope.hits(ev.d0, ev.d1):
            continue
        if ev.level in ORGEO_SKIP_LEVEL or SEMINAR.search(ev.name or ''):
            continue
        tag = 'orgeo %s %s «%s»' % (ev.id, ev.d0, ev.name)
        if re.search(r'отмен', ev.name or '', re.I):
            rep.notnew.append(tag + ': отменён')
            continue
        if ev.area == 'MSK' or (ev.area is None and ev.region == 'MSK'):
            rep.notnew.append(tag + ': Москва — записи создаёт сводная таблица (import_calendar_msk.py)')
            continue
        if ev.area not in ('SPB', 'SAMARA'):
            if rep.verbose:
                rep.notnew.append(tag + ': место проведения — %s' % (ev.addr or '?'))
            continue
        if ev.level in ORGEO_NATIONAL_LEVEL or NATIONAL.search(ev.name or ''):
            rep.notnew.append(tag + ': всероссийский/международный старт — запись ведётся в '
                                    'calendar-fsor.js/calendar-common.js')
            continue
        if ev.area == 'SAMARA':          # все записи Самары — в calendar-samara.js
            smr = sorted(f for f in cal.files if SMR_FILE.fullmatch(f))
            fn = 'calendar-samara.js' if 'calendar-samara.js' in smr else (smr[-1] if smr else 'calendar-samara.js')
        else:
            fn = 'calendar-%d.js' % ev.d0.year
        if fn not in cal.files:
            rep.notnew.append(tag + ': нет файла %s' % fn)
            continue
        if no_words(ev.name, ev.place):
            rep.notnew.append(tag + ': в названии и месте нет значимых слов — проверьте, нет ли старта в календаре')
            continue
        dup = near(cal, ev.area, ev.name, ev.place, ev.d0, ev.d1)
        if dup:
            rep.notnew.append(tag + ': возможно, это %s — впишите reg или создайте запись вручную' % dup)
            continue
        r = cal.new_record(fn, dict(date=ev.d0.isoformat(),
                                    endDate=ev.d1.isoformat() if ev.d1 != ev.d0 else None,
                                    name=ev.name), 'orgeo ' + ev.id)
        r.orgeo.append(ev)
        r.how['orgeo ' + ev.id] = 'новая запись'
        ev.recs.append(r)


# ------------------------------------------------------------------- перенос полей

def group_bulletins(ev):
    """Бюллетени страницы о-сайта по записям: {id записи: url} и причина, если не разложить."""
    cands = ev.cands
    if not cands:
        return {}, None
    group = [dict(id=r.id, date=r.get('date'), endDate=r.get('endDate'), name=r.get('name'))
             for r in ev.recs]
    if len(group) > 1 and len(cands) > 1:
        mapping, why = FB.distribute(group, cands)
        if mapping is None:
            return {}, 'серия из %d записей: %s' % (len(group), why)
        return {rid: c[2] for rid, (c, _) in mapping.items()}, None
    r = FB.choose(cands, ev.url())
    if r['status'] != 'ok':
        return {}, 'несколько разных бюллетеней: ' + r['detail']
    return {x['id']: r['url'] for x in group}, None


def merge(cal, osite_events, rep, scope):
    done_series = set()
    for ev in osite_events.values():        # записи серии, у которых reg — другое событие orgeo
        if ev.page and len(ev.recs) > 1 and ev.orgeo_refs:
            for r in list(ev.recs):
                refs = {orgeo_ref(u) for u in aslist(r.get('reg'))} - {None}
                if refs and not refs & set(ev.orgeo_refs):
                    rep.manual('%s: o_site %s, но страница о-сайта ведёт на orgeo %s, а reg записи — %s; '
                               'данные о-сайта в запись не переносятся' % (
                                   r.head(), ev.id, ', '.join(ev.orgeo_refs), ', '.join(sorted(refs))))
                    ev.recs.remove(r)
                    r.osite = None
    for r in cal.recs:
        ev = r.osite if r.osite and r.osite.page else None
        ogs = [e for e in r.orgeo if e and e.page]
        if not ev and not ogs:
            continue
        if not r.new and not (r.d0 and scope.hits(r.d0, r.d1)):
            continue                    # запись вне обрабатываемых дат (например, другой этап серии)
        own = bool(DATE_FILE.fullmatch(r.cf.name))       # даты перезаписываются
        og = ogs[0] if len(ogs) == 1 else None
        series = bool(ev and ev.series)
        tag_os = 'o-site'
        tag_og = 'orgeo' + (' ' + og.id if og else '')
        # reg (у серии ссылка «Заявка» страницы о-сайта может относиться к одному этапу — не переносится)
        if ev and ev.regs and not series:
            r.set('reg', ev.regs[0] if len(ev.regs) == 1 else list(ev.regs), tag_os)
        elif ogs:
            known = {ref for u in aslist(r.get('reg')) for ref in [orgeo_ref(u)] if ref}
            if not any(e.refs & known for e in ogs):
                if generic_reg(r.get('reg')):
                    urls = [e.url() for e in ogs]
                    r.set('reg', urls[0] if len(urls) == 1 else urls, tag_og)
                else:
                    rep.manual('%s: reg %s, а событие orgeo — %s' % (
                        r.head(), short(r.get('reg')), ', '.join(e.url() for e in ogs)))
        # даты
        if not r.new and r.d0:
            src = None
            if ev and not series:
                src, tag = (ev.d0, ev.d1), tag_os
            elif (og and not (ev and series) and len(og.recs) == 1 and (og.d1 - og.d0).days < SERIES_DAYS
                  and not (r.get('o_site') and not osite_events)):
                # у записи с o_site даты — с о-сайта; без шага osite (--only orgeo) orgeo их не меняет
                src, tag = (og.d0, og.d1), tag_og
            if (src and src[0] and src != (r.d0, r.d1) and tag == tag_os and ev.yearless
                    and ev.year_src == 'guess' and src[0].year != r.d0.year):
                rep.dates.append('%s: o-site %s — год на странице не указан, дата не меняется' % (
                    r.head(), ev.datetext))
            elif src and src[0] and src != (r.d0, r.d1):
                if own:
                    r.set('date', src[0].isoformat(), tag)
                    r.set('endDate', src[1].isoformat() if src[1] != src[0] else None, tag)
                else:
                    rep.dates.append('%s: %s %s%s' % (r.head(), tag, src[0],
                                                       '..%s' % src[1] if src[1] != src[0] else ''))
        # координаты
        if ev and ev.coord and (r.get('coord') is None or not series):
            r.set('coord', ev.coord, tag_os)
        elif og and og.coord and r.get('coord') is None:
            r.set('coord', og.coord, tag_og)
        # бюллетень: o-site, если на нём есть бюллетени, иначе orgeo
        bull, tag_b = None, tag_os
        if ev and ev.cands:
            if id(ev) not in done_series:
                done_series.add(id(ev))
                ev.bmap, ev.bwhy = group_bulletins(ev)
                if ev.bwhy:
                    rep.manual('o-site %s «%s»: %s — %s' % (ev.id, ev.name, ', '.join(x.id for x in ev.recs), ev.bwhy))
            bull = ev.bmap.get(r.id)
        if not bull and ogs and not (ev and ev.cands):
            cands = []
            for e in ogs:
                for c in e.cands:
                    if c[2] not in [x[2] for x in cands]:
                        cands.append(c)
            if cands:
                ch = FB.choose(cands, ', '.join(e.url() for e in ogs))
                if ch['status'] == 'ok':
                    bull, tag_b = ch['url'], tag_og
                else:
                    rep.manual('%s: несколько разных бюллетеней на orgeo: %s' % (r.head(), ch['detail']))
        if bull and tag_b == tag_og and r.get('bulletin') and not all(
                isinstance(x, str) and 'orgeo.ru' in x for x in aslist(r.get('bulletin'))):
            # бюллетень orgeo заменяет только бюллетень orgeo: o-site и прочие (вписанные вручную) остаются
            if url_key(bull) not in {url_key(x) for x in aslist(r.get('bulletin')) if isinstance(x, str)}:
                rep.diffs.append('%s: bulletin %s, %s: %s' % (r.head(), short(r.get('bulletin')), tag_og, bull))
            bull = None
        if bull:
            cur = r.get('bulletin')
            if isinstance(cur, list):        # несколько бюллетеней в записи — не заменяем одним
                if url_key(bull) not in {url_key(x) for x in cur}:
                    rep.manual('%s: в bulletin массив, а на %s бюллетень %s' % (r.head(), tag_b, bull))
            elif url_key(bull) not in {url_key(x) for x in aslist(r.get('link')) if isinstance(x, str)}:
                r.set('bulletin', bull, tag_b)       # бюллетень уже в link (как у «Малахита») — не дублируем
        # o_site по ссылке со страницы orgeo
        if (not r.get('o_site') and og and len(og.osite_refs) == 1 and og.osite_refs[0] in osite_events
                and osite_events[og.osite_refs[0]].page):
            r.set('o_site', og.osite_refs[0], tag_og + ', ссылка на о-сайт')
        # мягкие поля
        vals = {
            'name': [(None if series else (ev.name if ev else None), tag_os), (og.name if og else None, tag_og)],
            'place': [(None if series else (ev.place if ev else None), tag_os), (og.place if og else None, tag_og)],
            'fmt': [(None if series else (ev.fmt if ev else None), tag_os), (og.fmt if og else None, tag_og)],
            'type': [(ev.typ if ev else None, tag_os), (og.typ if og else None, tag_og)],
        }
        typ_src = next((v for v, _ in vals['type'] if v), None)
        rogaine = 'ROGAINE' in (set(aslist(r.get('type'))) if r.get('type') else {typ_src})
        if rogaine:          # у рогейнов в fmt — только часы: «рогейн 4 часа» -> «4»
            vals['fmt'] = [(rogaine_fmt(v) or v, t) for v, t in vals['fmt']]
        for k in SOFT:
            cand = [(v, t) for v, t in vals[k] if v]
            if not cand:
                continue
            v, t = cand[0]
            cur = r.get(k)
            if k == 'type':
                if cur is None:
                    if v != 'ORIENT' or MSK_FILE.fullmatch(r.cf.name):
                        r.set('type', v, t)
                elif v not in r.types() and not (v == 'ORIENT'):
                    rep.diffs.append('%s: type %s, %s: %s' % (r.head(), short(cur), t, v))
                continue
            if cur is None or cur == '':
                r.set(k, v, t)
            elif cur != v:
                rep.diffs.append('%s: %s «%s», %s: «%s»' % (r.head(), k, short(cur), t, short(v)))
        if og and re.search(r'отмен', og.name or '', re.I) and not r.get('cancelled'):
            rep.manual('%s: на orgeo «%s» — отменён/перенесён?' % (r.head(), og.name))


def name_area(r):
    if DATE_FILE.fullmatch(r.cf.name) or r.cf.name == 'calendar-common.js':
        return 'SPB'
    if MSK_FILE.fullmatch(r.cf.name):
        return 'MSK'
    return None


def start_owners(path):
    """{код старта: owner} из js/starts.js — организатор, заданный у старта."""
    try:
        s = open(path, encoding='utf-8').read()
    except OSError:
        return None
    out = {}
    for m in re.finditer(r'\n    (\w+): \{(.*?)\n    \},', s, re.S):
        own = re.findall(r"\bowner:\s*(\[[^\]]*\]|'[^']*'|\"[^\"]*\")", m.group(2))
        if own:
            out[m.group(1)] = own[0]
    return out


def by_name(cal, scope, rep, owners_of_start):
    """start и owner по названию (NAME_RULES), каждое — если его нет. owner не ставится, если у
    start записи организатор задан в starts.js (дублировать его в записи не нужно); если не задан
    или start нет — ставится, но только если в календаре уже есть запись с подходящим названием и
    этим owner — без start или с тем же start, — и не раньше года первой такой записи:
    организаторы меняются. Если start вписан, а owner записи тот же, что у старта в starts.js, —
    owner удаляется (drop_owners — и у записей, где start уже был)."""
    rules = {area: [(f, code, re.compile(rx, re.I)) for f, code, rx in rs] for area, rs in NAME_RULES.items()}
    skey = lambda r: tuple(sorted(x for x in aslist(r.get('start')) if isinstance(x, str)))
    since = {}
    for r in cal.recs:
        area = name_area(r)
        if not area or not r.d0 or r.new:
            continue
        for f, code, rx in rules[area]:
            if f == 'owner' and code in aslist(r.get('owner')) and rx.search(r.get('name') or ''):
                since.setdefault((area, code, rx.pattern), []).append((r.d0.year, skey(r)))
    for r in cal.recs:
        area = name_area(r)
        if not area or not r.d0 or not (r.new or scope.hits(r.d0, r.d1)):
            continue
        name = r.get('name') or ''
        if not r.get('start'):
            for f, code, rx in rules[area]:
                if f == 'start' and rx.search(name):
                    r.set('start', code, 'по названию')
                    break
        own_by_start = any(x in owners_of_start for x in aslist(r.get('start')) if isinstance(x, str))
        if not r.get('owner') and not own_by_start:
            for f, code, rx in rules[area]:
                if f == 'owner' and rx.search(name):
                    k = skey(r)
                    years = [y for y, ks in since.get((area, code, rx.pattern), []) if not ks or ks == k]
                    first = min(years) if years else None
                    st = 'без start' + (' или со start ' + '/'.join(k) if k else '')
                    if first is not None and r.d0.year >= first:
                        r.set('owner', code, 'по названию')
                    elif rep.verbose:
                        rep.diffs.append('%s: owner %s по названию не ставится — %s' % (r.head(), code, (
                            'такое название с этим owner (%s) встречается с %s года' % (st, first)) if first else
                            'такого названия с этим owner (%s) в календаре нет' % st))
                    break


def drop_owners(cal, scope, rep, owners_of_start):
    """owner записи не нужен, если тот же организатор задан у её start в starts.js (у нескольких
    start — у любого из них): такой owner удаляется. Если в записи owner другой (или ещё и другой) —
    остаётся (с -v — в отчёте, если start вписан сейчас). Все файлы календаря; записи — новые и в
    обрабатываемых датах; «// !» соблюдается."""
    for r in cal.recs:
        if not r.d0 or not (r.new or scope.hits(r.d0, r.d1)):
            continue
        own = {x for x in aslist(r.get('owner')) if isinstance(x, str)}
        starts = [x for x in aslist(r.get('start')) if isinstance(x, str)]
        by_start = set()
        for st in starts:
            by_start.update(re.findall(r"[A-Z0-9_]+", owners_of_start.get(st) or ''))
        if not own or not by_start:
            continue
        if own <= by_start:
            r.set('owner', None, 'owner %s есть у старта %s в starts.js' % ('/'.join(sorted(own)), '/'.join(starts)))
        elif rep.verbose and 'start' in r.changes:
            rep.diffs.append('%s: start %s вписан, owner %s остаётся — у старта в starts.js %s' % (
                r.head(), '/'.join(starts), '/'.join(sorted(own)), '/'.join(sorted(by_start))))


def not_types(cal, rep, owners_of_start):
    """Отменить вписанный скриптом type, которого у стартов этого организатора не бывает (NOT_TYPES);
    организатор — owner записи и owner её start в starts.js."""
    for r in cal.recs:
        if 'type' not in r.changes:
            continue
        org = {x for x in aslist(r.get('owner')) if isinstance(x, str)}
        for st in aslist(r.get('start')):
            v = owners_of_start.get(st) if isinstance(st, str) else None
            if v:
                org.update(re.findall(r"[A-Z0-9_]+", v))
        bad = set().union(set(), *(NOT_TYPES.get(o, set()) for o in org)) & set(aslist(r.changes['type']))
        if bad:
            del r.changes['type']
            r.log = [x for x in r.log if x[0] != 'type']
            rep.diffs.append('%s: type %s не вписан — у стартов %s такого не бывает (NOT_TYPES)' % (
                r.head(), '/'.join(sorted(bad)), '/'.join(sorted(org))))


RK_ROW = re.compile(r'<a href="/event/get\?id=(\d+)">\s*<div class="row resultRow">(.*?)</a>', re.S)
RK_CELL = re.compile(r'<div class="col[^"]*">(.*?)</div>', re.S)


def reskeep_list(fetcher, rep):
    """События reskeep.ru с главной страницы (там весь список, по месяцам):
    [(id, дата, название, место)]."""
    try:
        page, _ = fetcher.get(RESKEEP, 'utf-8')
    except Exception as ex:
        rep.error('reskeep: список не загружен: %s' % ex)
        return []
    out = []
    for g in re.split(r'<div class="monthRow">', page)[1:]:
        y = re.search(r'(\d{4})', g[:80])
        if not y:
            continue
        for m in RK_ROW.finditer(g):
            c = [clean(x) for x in RK_CELL.findall(m.group(2))]
            d = re.fullmatch(r'(\d{1,2})\.(\d{1,2})', c[0] if c else '')
            if not d:
                continue
            try:
                day = dt.date(int(y.group(1)), int(d.group(2)), int(d.group(1)))
            except ValueError:
                continue
            out.append((int(m.group(1)), day, c[1] if len(c) > 1 else '', c[2] if len(c) > 2 else ''))
    if not out:
        rep.error('reskeep: на главной странице не найдено ни одного события — изменилась вёрстка?')
    return out


def day_records(hits, children, day):
    """[(вес, запись, слова)]: «зонтик» -> его запись этого дня (у «ККП #1» с «Камни Карельского
    перешейка. 1 день» общих слов может не быть): одна дочерняя в этот день — она; несколько — те
    из них, что тоже есть в hits; иначе «зонтик» отбрасывается (по нему не решить)."""
    by_id = {h[1].id: h for h in hits}
    out = {}
    for h in hits:
        kids = [c for c in children.get(h[1].id, []) if c.d0 <= day <= c.d1]
        if not kids:
            out.setdefault(h[1].id, h)
            continue
        own = [by_id[c.id] for c in kids if c.id in by_id]
        if len(kids) == 1:
            k = kids[0]
            kh = by_id.get(k.id, h)
            out[k.id] = (max(h[0], kh[0]), k, h[2] | kh[2])
        else:
            for x in own:
                out.setdefault(x[1].id, x)
    return list(out.values())


RK_SKIP_HOST = re.compile(r'(?:^|\.)(?:reskeep\.ru|yandex\.\w+|ya\.ru|google\.\w+|vk\.com|vk\.ru|t\.me|'
                          r'facebook\.com|instagram\.com|apple\.com)$', re.I)


def reskeep_links(page):
    """Внешние ссылки страницы протокола reskeep -> (каталоги/страницы о-сайта, события orgeo,
    прочие ссылки norm_url). «…/_races/261021_NWSprint/…» -> 261021_NWSprint, «race.php?id=X» -> X,
    «orgeo.ru/live/#/55808» и «orgeo.ru/event/55808» -> 55808."""
    osite, orgeo, urls = set(), set(), set()
    for u in re.findall(r'href="(https?://[^"]+)"', page or ''):
        u = html.unescape(u).strip()
        host = (urllib.parse.urlsplit(u).hostname or '').lower()
        if RK_SKIP_HOST.search(host):
            continue
        m = re.search(r'o-site\.spb\.ru/_races/([^/?#]+)/', u, re.I)
        if m:
            osite.add(urllib.parse.unquote(m.group(1)))
        m = re.search(r'o-site\.spb\.ru/race\.php\?id=([^&#]+)', u, re.I)
        if m:
            osite.add(urllib.parse.unquote(m.group(1)))
        m = re.search(r'orgeo\.ru/live/#/(\d+)', u, re.I)
        ref = m.group(1) if m else orgeo_ref(u)
        if ref:
            orgeo.add(ORGEO_ALIAS.get(ref, ref))
        urls.add(norm_url(u))
    return osite, orgeo, urls


def rec_urls(v, out=None):
    """Все строки-ссылки значения поля записи (вложенные массивы и объекты) -> norm_url."""
    out = set() if out is None else out
    if isinstance(v, str):
        if re.match(r'(?:https?:)?//|www\.', v.strip()):
            out.add(norm_url(v if '://' in v else 'http://' + v.lstrip('/')))
    elif isinstance(v, list):
        for x in v:
            rec_urls(x, out)
    elif isinstance(v, dict):
        for x in v.values():
            rec_urls(x, out)
    return out


def reskeep_by_links(pool, children, links, day):
    """Записи, на которые ведут ссылки страницы протокола: o_site = каталог/страница о-сайта или
    в полях записи ссылка «…/_races/<каталог>/…»; событие orgeo — в reg; та же ссылка (протокол,
    сплиты) — в любом поле записи. Только записи, в даты которых входит день протокола.
    -> (запись | None, кандидаты)."""
    osite, orgeo, urls = links
    if not (osite or orgeo or urls):
        return None, []
    hits = []
    for r in pool:
        if not (r.d0 <= day <= r.d1):
            continue
        ru = set()
        for k, v in r.v.items():
            if k not in ('id', 'date', 'endDate', 'name', 'place', 'info'):
                rec_urls(v, ru)
        why = set()
        if r.get('o_site') in osite or any(re.search(r'o-site\.spb\.ru/_races/%s/' % re.escape(d), u, re.I)
                                           for d in osite for u in ru):
            why.add('o-site')
        if orgeo & {ORGEO_ALIAS.get(x, x) for x in (orgeo_ref(u) for u in aslist(r.get('reg'))
                                                    if isinstance(u, str)) if x}:
            why.add('orgeo')
        if urls & ru:
            why.add('ссылка')
        if why:
            hits.append((len(why), r, why))
    hits = day_records(hits, children, day)
    if len(hits) == 1:
        return hits[0][1], hits
    single = [h for h in hits if h[1].d0 == h[1].d1 == day]
    if len(single) == 1:
        return single[0][1], hits
    return None, hits


def reskeep_match(cal, pool, children, name, place, day):
    """Запись для протокола reskeep (один день): даты записи включают день, общие значимые слова
    названия и места; «зонтик» уступает своей дочерней записи этого дня (протоколы пишутся в
    записи дней). -> (запись | None, сомнительные [(запись, вес, слова)])."""
    et = OG.toks((name or '') + ' ' + (place or ''))
    ept = OG.toks(place or '') - OG.toks(name or '')
    hits = []
    for r in pool:
        if not (r.d0 <= day <= r.d1):
            continue
        common = et & r.tok
        if not common:
            continue
        rpt = OG.toks(r.get('place') or '') - r.ntok
        if ept and rpt and not (ept & r.tok) and not (rpt & et) and len(et & r.ntok) < 2:
            continue                # места разные, а название совпало слабо
        hits.append((sum(cal.W(t) for t in common), r, common))
    hits = day_records(hits, children, day)
    if not hits:
        return None, []
    hits.sort(key=lambda h: (-h[0], (h[1].d1 - h[1].d0).days))
    score, r, common = hits[0]
    strong = len(common) >= 2 or max(cal.W(t) for t in common) >= RARE_WEIGHT
    unique = len(hits) == 1 or hits[1][0] <= score / 2
    if strong and unique:
        return r, []
    return None, [(h[1], h[0], sorted(h[2])) for h in hits[:3]]


def link_reskeep(cal, events, rep, scope, fetcher=None, workers=2):
    """reskeep: номер протокола (reskeep.ru/event/get?id=N) — в поле reskeep записи (число или
    массив: у многодневной записи без дочерних — по протоколу на день). Уже вписанные номера не
    трогаются; закомментированные (в любом комментарии «reskeep: …» или ссылке …event/get?id=N)
    не вписываются."""
    have = defaultdict(list)
    for r in cal.recs:
        for x in aslist(r.get('reskeep')):
            if isinstance(x, (int, float)):
                have[int(x)].append(r)
    ignored = set()
    for f in cal.files.values():
        for c in js_comments(f.text):
            for m in re.finditer(r'\breskeep:\s*(\[[^\]]*\]|\d+)', c):
                ignored.update(int(x) for x in re.findall(r'\d+', m.group(1)))
            ignored.update(int(x) for x in re.findall(r'reskeep\.ru/event/(?:get|download/results-file)\?id=(\d+)', c))
    pool = [r for r in cal.recs if r.d0 and (r.d1 - r.d0).days <= UMBRELLA_DAYS
            and r.cf.name not in NOAUTO_FILES and not r.new]
    children = defaultdict(list)
    for r in pool:
        if r.get('parent'):
            children[r.get('parent')].append(r)
    todo = []
    for rid, day, name, place in sorted(events, key=lambda e: (e[1], e[0])):
        if rid in have or not scope.hits(day, day):
            continue
        if rid in ignored:
            rep.ignored.append('reskeep %d %s «%s»' % (rid, day, name))
            continue
        todo.append((rid, day, name, place))
    # страницы протоколов — только для ещё не вписанных номеров: на них ссылки на о-сайт/orgeo
    pages = {}
    if fetcher is not None and todo:
        urls = {RESKEEP + 'event/get?id=%d' % rid: rid for rid, _, _, _ in todo}
        for u, x in fetcher.many(list(urls), 'utf-8', workers, 'страницы reskeep').items():
            if isinstance(x, Exception):
                rep.error('reskeep %d: %s' % (urls[u], x))
            else:
                pages[urls[u]] = x[0]
    added = defaultdict(list)
    for rid, day, name, place in todo:
        r, cands = reskeep_by_links(pool, children, reskeep_links(pages.get(rid)), day)
        if r is not None:
            w, _ = reskeep_match(cal, pool, children, name, place, day)
            if w is not None and w is not r:      # ссылка и название указывают на разные записи
                rep.manual('reskeep %d %s «%s»: по ссылке — %s «%s», по названию — %s «%s»' % (
                    rid, day, name, r.id, r.get('name'), w.id, w.get('name')))
                continue
            added[r].append((rid, name, 'по ссылке на ' + '/'.join(sorted(
                next(h[2] for h in cands if h[1] is r)))))
            continue
        if len(cands) > 1:
            rep.manual('reskeep %d %s «%s»: ссылки страницы ведут на несколько записей: %s' % (
                rid, day, name, ', '.join('%s «%s»' % (h[1].id, h[1].get('name')) for h in cands)))
            continue
        r, maybe = reskeep_match(cal, pool, children, name, place, day)
        if r is None:
            if maybe:
                rep.manual('reskeep %d %s «%s»: возможно, %s' % (rid, day, name, '; '.join(
                    '%s «%s» (%.1f: %s)' % (x.id, x.get('name'), sc, ','.join(c)) for x, sc, c in maybe)))
            elif rep.verbose:
                rep.notnew.append('reskeep %d %s «%s» (%s): записи в календаре не найдено' % (rid, day, name, place))
            continue
        added[r].append((rid, name, 'по дате и словам'))
    for r, items in added.items():
        cur = [int(x) for x in aslist(r.get('reskeep')) if isinstance(x, (int, float))]
        new = cur + [rid for rid, _, _ in items if rid not in cur]
        r.set('reskeep', new[0] if len(new) == 1 else new,
              'reskeep ' + ', '.join('%d «%s» %s' % (rid, n, how) for rid, n, how in items))


def end_reg(cal, scope, fetcher, orgeo_by_ref, workers, rep):
    """endReg по страницам регистрации из reg (как fill_end_reg.py)."""
    tasks = []
    for r in cal.recs:
        if not r.d0 or not r.get('reg') or not scope.hits(r.d0, r.d1):
            continue
        links = []
        for u in aslist(r.get('reg')):
            if not isinstance(u, str):
                continue
            site, _ = FE.classify(u)
            if site:
                links.append((site, u.strip()))
        if links:
            tasks.append((r, links))
    need = []
    for r, links in tasks:
        for site, u in links:
            ref = orgeo_ref(u) if site['name'] == 'Orgeo' else None
            if not (ref and orgeo_by_ref.get(ref) and orgeo_by_ref[ref].page):
                need.append(u)
    pages = fetcher.many(need, 'utf-8', workers, 'страницы регистрации')
    for r, links in tasks:
        values, errors = {}, []
        for site, u in links:
            ref = orgeo_ref(u) if site['name'] == 'Orgeo' else None
            if ref and orgeo_by_ref.get(ref) and orgeo_by_ref[ref].page:
                found = orgeo_by_ref[ref].endreg
            else:
                res = pages.get(u)
                if isinstance(res, Exception) or res is None:
                    errors.append('%s: %s' % (u, res))
                    continue
                found = site['find'](res[0])
            for f in found:
                try:
                    values.setdefault(FE.normalize(*f), []).append(u)
                except ValueError:
                    pass
        if len(values) > 1:
            rep.manual('%s: разные сроки заявок: %s' % (r.head(), ' | '.join(
                '%s ← %s' % (v, ', '.join(dict.fromkeys(us))) for v, us in sorted(values.items()))))
            continue
        if not values:
            continue
        v = next(iter(values))
        last = (r.get('endDate') or r.get('date'))
        if v[:10] > last:
            rep.manual('%s: окончание заявок %s позже последнего дня старта %s — не записано' % (r.head(), v, last))
            continue
        r.set('endReg', v, 'endreg ' + values[v][0])


# ------------------------------------------------------------------- шаги

def run_external(cmd, title):
    print('\n== %s ==' % title)
    print('$ ' + ' '.join(cmd[1:]), file=sys.stderr)
    env = dict(os.environ, PYTHONUNBUFFERED='1', PYTHONIOENCODING='utf-8')
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, env=env, text=True, encoding='utf-8', errors='replace')
    for line in p.stdout:
        sys.stdout.write(line)
    p.wait()
    if p.returncode:
        print('  ! %s завершился с кодом %d' % (os.path.basename(cmd[1]), p.returncode))
    return p.returncode


def step_sites(work, scope, steps, workers, verbose, starts_js):
    rep = Report(verbose)
    fetcher = Fetcher()
    cal = Calendar(work)
    for f in cal.files.values():
        if f.error:
            rep.error('%s: файл не разобран: %s' % (f.name, f.error))
    print('\n== o-site / orgeo / reskeep / endReg (%s) ==' % scope)
    in_scope = [r for r in cal.recs if r.d0 and scope.hits(r.d0, r.d1)]
    print('Записей календаря: %d, в области: %d' % (len(cal.recs), len(in_scope)), file=sys.stderr)

    osite_events, orgeo_events, alias = {}, {}, {}
    if 'osite' in steps:
        osite_events = osite_list(fetcher, scope, workers, rep)
        for r in in_scope:
            if r.get('o_site') and r.get('o_site') not in osite_events:
                osite_events[r.get('o_site')] = OSiteEvent(r.get('o_site'))
            if r.get('o_site') in osite_events and not osite_events[r.get('o_site')].items:
                osite_events[r.get('o_site')].rec_years.append(r.d0.year)
    if 'orgeo' in steps:
        orgeo_events, alias = orgeo_list(fetcher, scope, rep)
        for r in in_scope:
            for u in aslist(r.get('reg')):
                ref = orgeo_ref(u) if isinstance(u, str) else None
                if ref and ref not in orgeo_events and ref not in alias:
                    orgeo_events[ref] = OrgeoEvent(ref, ref)

    def load_osite(evs):
        urls = {e.url(): e for e in evs if e.page is None and e.error is None}
        res = fetcher.many(list(urls), 'cp1251', workers, 'страницы o-site')
        for u, x in res.items():
            e = urls[u]
            if isinstance(x, Exception):
                e.error = str(x)
                rep.error('o-site %s: %s' % (e.id, x))
            else:
                e.parse(x[0], x[1], e.items[0] if e.items else e.year_hint())
                if not e.name:
                    e.error = 'страницы нет'
                    e.page = None

    def load_orgeo(evs):
        urls = {e.url(): e for e in evs if e.page is None and e.error is None}
        res = fetcher.many(list(urls), 'utf-8', workers, 'страницы orgeo')
        for u, x in res.items():
            e = urls[u]
            if isinstance(x, Exception):
                e.error = str(x)
                rep.error('orgeo %s: %s' % (e.id, x))
            else:
                e.parse(x[0], x[1])
                m = re.search(r'/claim/create/event_id/(\d+)|/event/participants/(\d+)|files/event/logo/(\d+)_', x[0])
                if m:
                    real = next(g for g in m.groups() if g)
                    if real != e.id:
                        e.alias, e.id = e.id, real

    def wanted_osite(e):
        return (e.d0 is None or scope.hits(e.d0, e.d1)) or any(
            r.get('o_site') == e.id for r in in_scope)

    load_osite([e for e in osite_events.values() if wanted_osite(e)])
    load_orgeo([e for e in orgeo_events.values()
                if e.lists == set() or (e.d0 is None or scope.hits(e.d0, e.d1))
                and e.level not in ORGEO_SKIP_LEVEL])
    # перекрёстные ссылки: страницы о-сайта со страниц orgeo и наоборот
    if 'osite' in steps:
        extra = []
        for e in orgeo_events.values():
            for x in e.osite_refs:
                if x not in osite_events:
                    osite_events[x] = OSiteEvent(x)
                    extra.append(osite_events[x])
        load_osite(extra)
    if 'orgeo' in steps:
        by_ref = {}
        for e in orgeo_events.values():
            by_ref.update({ref: e for ref in e.refs})
        extra = []
        for e in osite_events.values():
            if e.d0 and not scope.hits(e.d0, e.d1):
                continue
            for ref in e.orgeo_refs:
                if ref not in by_ref:
                    ne = OrgeoEvent(ref, ref)
                    orgeo_events[ref] = by_ref[ref] = ne
                    extra.append(ne)
        load_orgeo(extra)
    for e in orgeo_events.values():
        if e.page:
            ORGEO_ALIAS.update({ref: e.id for ref in e.refs})
    n_os = sum(1 for e in osite_events.values() if e.page)
    n_og = sum(1 for e in orgeo_events.values() if e.page)
    print('o-site: страниц стартов %d; orgeo: страниц событий %d; всего загружено страниц %d' % (
        n_os, n_og, fetcher.count))

    if 'osite' in steps:
        link_osite(cal, osite_events, orgeo_events, rep, scope)
    if 'orgeo' in steps:
        link_orgeo(cal, orgeo_events, rep, scope)
    merge(cal, osite_events, rep, scope)
    if 'reskeep' in steps:
        rk = reskeep_list(fetcher, rep)
        print('reskeep: протоколов %d' % len(rk))
        link_reskeep(cal, rk, rep, scope, fetcher, min(workers, 2))
    if 'names' in steps:
        owners = start_owners(starts_js)
        if owners is None:
            rep.error('нет %s — owner по названию не ставится' % starts_js)
        else:
            by_name(cal, scope, rep, owners)
            drop_owners(cal, scope, rep, owners)
    not_types(cal, rep, start_owners(starts_js) or {})
    if 'endreg' in steps:
        by_ref = {}
        for e in orgeo_events.values():
            by_ref.update({ref: e for ref in e.refs})
        end_reg(cal, scope, fetcher, by_ref, workers, rep)
    https_orgeo(cal, scope, rep)
    print_report(cal, rep)
    changed = []
    for cfile in cal.files.values():
        if not any(r.changes or r.https for r in cfile.recs) and not cfile.new:
            continue
        text = cal.render(cfile)
        if text == cfile.text:
            continue
        err = FB.node_check(text, cfile.eol, cfile.enc)
        if err:
            print('\n!! %s: node --check не прошёл, изменения шага не записаны:\n%s' % (cfile.name, err))
            continue
        FB.write_js(cfile.path, text, cfile.enc, cfile.eol)
        changed.append(cfile.name)
    return changed


def print_report(cal, rep):
    upd = [r for r in cal.recs if r.log]
    new = [r for f in cal.files.values() for r in f.new]
    print('\n-- Обновлены записи (%d) --' % len(upd))
    for r in sorted(upd, key=lambda r: (r.get('date') or '', r.id)):
        print(r.head())
        for k, old, val, why in r.log:
            print('    %-9s %s → %s   [%s]' % (k + ':', short(old) if old is not None else '—',
                                             short(val) if val is not None else '—', why))
    if rep.https:
        print('\nhttp://orgeo.ru -> https://orgeo.ru: ссылок %d в %d записях' % (rep.https, rep.https_recs))
    print('\n-- Новые записи (%d) --' % len(new))
    for r in sorted(new, key=lambda r: (r.get('date'), r.id)):
        print('+ ' + r.head() + '   [' + ', '.join(r.src) + ']')
        for k in NEW_ORDER[4:]:
            if r.get(k) is not None:
                print('    %-9s %s' % (k + ':', short(r.get(k))))
        for e in r.orgeo:
            if e and e.area and e.area not in ('SPB', 'SAMARA'):
                print('    ! место проведения по orgeo: %s' % e.addr)
    blocked = [r for r in cal.recs if r.blocked]
    if blocked:
        n = sum(len(r.blocked) for r in blocked)
        if rep.verbose:
            print('\n-- Не изменены: поле зафиксировано «// !» или значение закомментировано (%d) --' % n)
            for r in sorted(blocked, key=lambda r: (r.get('date') or '', r.id)):
                print(r.head())
                for k, old, val, why in r.blocked:
                    print('    %-9s %s, источник: %s   [%s]' % (k + ':', short(old) if old is not None else '—',
                                                           short(val) if val is not None else '—', why))
        else:
            print('\nНе изменено полей, зафиксированных «// !» или с закомментированным значением: %d '
                  '(список — с ключом -v)' % n)
    if rep.ignored:
        if rep.verbose:
            print('\n-- Пропущены: запись закомментирована в календаре (%d) --' % len(rep.ignored))
            for s in rep.ignored:
                print('  ' + s)
        else:
            print('\nПропущено событий, чьи записи закомментированы: %d (список — с ключом -v)' % len(rep.ignored))
    if rep.notnew:
        print('\n-- Не созданы (%d) --' % len(rep.notnew))
        for s in rep.notnew:
            print('  ' + s)
    if rep.check:
        print('\n-- Проверить вручную (%d) --' % len(rep.check))
        for s in rep.check:
            print('  ' + s)
    if rep.dates:
        print('\n-- Даты не совпадают (в этих файлах даты из источников не переносятся) (%d) --' % len(rep.dates))
        for s in rep.dates:
            print('  ' + s)
    if rep.diffs:
        if rep.verbose:
            print('\n-- Расхождения (не меняются) (%d) --' % len(rep.diffs))
            for s in rep.diffs:
                print('  ' + s)
        else:
            print('\nРасхождений name/place/fmt/type: %d (список — с ключом -v)' % len(rep.diffs))
    if rep.errors:
        print('\n-- Ошибки загрузки (%d) --' % len(rep.errors))
        for s in rep.errors[:200]:
            print('  ' + s)


def main():
    ap = argparse.ArgumentParser(description='Получение и обновление записей calendar-*.js '
                                             '(подробности — в шапке файла).')
    ap.add_argument('--src', default='js', help='каталог с calendar-*.js или корень сайта (по умолч. js)')
    ap.add_argument('--fresh', nargs='?', type=int, const=FRESH_DEFAULT, metavar='N',
                    help='старты за последние N дней и будущие (по умолч. %d)' % FRESH_DEFAULT)
    ap.add_argument('--year', action='append', default=[], metavar='Y',
                    help='старты года Y (YYYY или YYYY-YYYY; можно несколько раз)')
    ap.add_argument('--all', action='store_true', help='вся история')
    ap.add_argument('--only', help='только эти шаги: ' + ','.join(STEPS))
    ap.add_argument('--skip', help='пропустить эти шаги')
    ap.add_argument('-n', '--dry-run', action='store_true', help='ничего не записывать в --src')
    ap.add_argument('-v', '--verbose', action='store_true', help='подробный отчёт')
    ap.add_argument('--workers', type=int, default=4, help='параллельных загрузок (по умолч. 4)')
    ap.add_argument('--zip', help='упаковать изменённые файлы в архив')
    ap.add_argument('--out', nargs='?', const='sync_calendar_out.txt', metavar='FILE',
                    help='дублировать отчёт в файл (по умолч. sync_calendar_out.txt)')
    a = ap.parse_args()
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(errors='replace')
    if a.out:
        sys.stdout = OG.Tee(sys.stdout, a.out)
    if sum(bool(x) for x in (a.fresh is not None, a.year, a.all)) > 1:
        ap.error('--fresh, --year и --all взаимоисключающие')
    try:
        years = parse_years(a.year)
    except ValueError as ex:
        ap.error('--year: ожидается YYYY или YYYY-YYYY, получено %s' % ex)
    if a.all:
        scope = Scope('all')
    elif years:
        scope = Scope('years', years=years)
    else:
        n = FRESH_DEFAULT if a.fresh is None else a.fresh
        if n < 0:
            ap.error('--fresh: число дней не может быть отрицательным')
        scope = Scope('fresh', since=dt.date.today() - dt.timedelta(days=n))
    steps = list(STEPS)
    if a.only:
        steps = [s.strip() for s in a.only.split(',') if s.strip()]
    if a.skip:
        steps = [s for s in steps if s not in {x.strip() for x in a.skip.split(',')}]
    bad = [s for s in steps if s not in STEPS]
    if bad:
        ap.error('неизвестные шаги: %s (есть: %s)' % (', '.join(bad), ','.join(STEPS)))
    src = FB.resolve_src(a.src)
    t0 = time.time()
    print('Область: %s; шаги: %s%s' % (scope, ', '.join(steps), ' (dry-run)' if a.dry_run else ''))

    work = tempfile.mkdtemp(prefix='sync_calendar_')
    try:
        names = [f for f in sorted(os.listdir(src)) if DATA_FILE.fullmatch(f)]
        for f in names:
            shutil.copy2(os.path.join(src, f), os.path.join(work, f))
        py = sys.executable
        if 'msk' in steps:
            run_external([py, os.path.join(TOOLS, 'import_calendar_msk.py'), '--src', work] + scope.args(),
                         'Сводный календарь Москвы (import_calendar_msk.py)')
        if 'malakhit' in steps:
            run_external([py, os.path.join(TOOLS, 'import_calendar_malakhit.py'), '--src', work] + scope.args(),
                         'Календарь «Малахита» (import_calendar_malakhit.py)')
        if {'osite', 'orgeo', 'reskeep', 'endreg', 'names'} & set(steps):
            step_sites(work, scope, steps, a.workers, a.verbose, os.path.join(src, 'starts.js'))
        if 'ogps' in steps:
            cmd = [py, os.path.join(TOOLS, 'fill_ogps.py'), '--src', work, '--apply']
            if scope.kind == 'fresh':
                cmd += ['--fresh', str((dt.date.today() - scope.since).days)]
            elif scope.kind == 'years' and len(scope.years) == 1:
                cmd += ['--year', str(scope.years[0])]
            run_external(cmd, 'GPS-трансляции (fill_ogps.py)')

        changed = []
        for f in names:
            a_, b_ = os.path.join(src, f), os.path.join(work, f)
            if open(a_, 'rb').read() != open(b_, 'rb').read():
                if shutil.which('node'):
                    r = subprocess.run(['node', '--check', b_], capture_output=True, text=True)
                    if r.returncode:
                        print('\n!! %s: node --check не прошёл, файл не записан:\n%s' % (f, r.stderr.strip()))
                        continue
                changed.append(f)
        verb = 'Будут изменены' if a.dry_run else 'Изменены'
        print('\n%s файлы (%d): %s' % (verb, len(changed), ', '.join(changed) or '—'))
        if not a.dry_run:
            for f in changed:
                shutil.copyfile(os.path.join(work, f), os.path.join(src, f))
            if a.zip and changed:
                with zipfile.ZipFile(a.zip, 'w', zipfile.ZIP_DEFLATED) as z:
                    for f in changed:
                        z.write(os.path.join(src, f), os.path.join('js', f))
                print('Архив:', a.zip)
        if not shutil.which('node'):
            print('(node не найден — проверка синтаксиса пропущена)')
    finally:
        shutil.rmtree(work, ignore_errors=True)
    print('Время: %s' % OG.duration(time.time() - t0), file=sys.stderr)


if __name__ == '__main__':
    main()
