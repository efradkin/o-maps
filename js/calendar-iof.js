// Чемпионаты IOF: мира WOC (бег, 1966–2026), SKI-WOC (лыжи, 1975–2026), Европы EOC (бег, 1962–2026)
//   и SKI-EOC (лыжи, 2001–2025). Собрано 30.09–02.10.2026.
// place — латиницей/на языке оригинала, в скобках — по-русски. coord — центр населённого пункта (en.wikipedia),
//   центров соревнований в источниках нет; где указан регион — помечено.
// link — рабочие официальные сайты + статьи Википедии (en, ru). res — страница чемпионата (IOF Eventor / архив IOF)
//   и рабочие протоколы отдельных гонок. maps — посты World of O News с картами финалов, карты на omaps.worldofo.com,
//   реестр карт ČSOS. photo — альбомы IOF (orienteering.sport → Press photos). video — плейлисты YouTube-канала IOF.
// gps — GPSSeuranta, Loggator (WOC 2024, EOC 2024–2025), TracTrac (WOC 2019, 2022; EOC 2021). Ключи: <день>-<M|W>[-<этап>|-Q<забег>|-QF|-SF|-F|-B|-C];
//   Q — квалификация, QF/SF/F — раунды нокаут-спринта; спринт-эстафета — <день>[-<M|W>]-<этап>; у лыж 135/246 — этапы;
//   B/C — финалы B и C; all — одна страница на все гонки (TracTrac). Ключ из одного дня — одна страница на все группы.
//   Страницы TracTrac автоматически не проверить (сайт отвечает на любой адрес); старый адрес TracTrac EOC 2014 не включён.
// Крупные записи (в какой-то день больше двух карт, фото, видео или GPS-трансляций) разбиты на дочерние по дням (parent):
//   у дочерних — результаты, GPS, фото, видео и карты своего дня; у крупной — только ссылки, не относящиеся к одному дню
//   (страница чемпионата, сводные протоколы, общие альбомы, плейлисты). Дни гонок — по программам cs/en.wikipedia и датам
//   трансляций (из двух дат GPSSeuranta — та, что внутри дат чемпионата). owner, major и logo заданы в js/starts.js.
// В maps активны только файлы карт (изображения, PDF); ссылки на страницы (посты, omaps, реестры) закомментированы.
// Требуют проверки:
//   2010-08-07 Спринт W: в списке GPSSeuranta дата 2010-08-07, в коде трансляции 20100808 — https://www.tulospalvelu.fi/gps/20100808_sprint_w/
//   2010-08-11 Лонг W: в списке GPSSeuranta дата 2010-08-11, в коде трансляции 20100812 — https://www.tulospalvelu.fi/gps/20100812_long_f_w/
//   2010-08-11 Лонг M: в списке GPSSeuranta дата 2010-08-11, в коде трансляции 20100812 — https://www.tulospalvelu.fi/gps/20100812_long_f_m/
//   2011-08-20 Эстафета M, 3 этап: в списке GPSSeuranta дата 2011-08-20, в коде трансляции 20110821 — https://www.tulospalvelu.fi/gps/20110821wocrelayM3/
//   2011-08-20 Эстафета M, 1+2 этапы: в списке GPSSeuranta дата 2011-08-20, в коде трансляции 20110821 — https://www.tulospalvelu.fi/gps/20110821wocrelayM12/
//   2011-08-20 Эстафета W, 3 этап: в списке GPSSeuranta дата 2011-08-20, в коде трансляции 20110821 — https://www.tulospalvelu.fi/gps/20110821wocrelayW3/
//   2011-08-20 Эстафета W, 1+2 этапы: в списке GPSSeuranta дата 2011-08-20, в коде трансляции 20110821 — https://www.tulospalvelu.fi/gps/20110821wocrelayW12/
//   2012-05-13 EOC 13-W-QB: в списке GPSSeuranta дата 2012-05-13, в коде трансляции 20120514 — https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-B/
//   2012-05-14 EOC 14-M-QA: в списке GPSSeuranta дата 2012-05-14, в коде трансляции 20120515 — https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-A/
//   2012-05-19 EOC 19-M-1: в списке GPSSeuranta дата 2012-05-19, в коде трансляции 20120520 — https://www.tulospalvelu.fi/gps/20120520EOCRelM1/
//   2012-05-19 EOC 19-M-2: в списке GPSSeuranta дата 2012-05-19, в коде трансляции 20120520 — https://www.tulospalvelu.fi/gps/20120520EOCRelM2/
//   2012-05-19 EOC 19-M-3: в списке GPSSeuranta дата 2012-05-19, в коде трансляции 20120520 — https://www.tulospalvelu.fi/gps/20120520EOCRelM3/
//   2012-05-19 EOC 19-W-3: в списке GPSSeuranta дата 2012-05-19, в коде трансляции 20120520 — https://www.tulospalvelu.fi/gps/20120520EOCRelW3/
//   2020 WOC и EOC, 2021 SKI-EOC отменены (COVID-19) — записей нет. SKI-EOC 2023: состав дисциплин в источниках не найден — fmt не заполнен.
let iofEvents = [
    {
        id: 'IOF_19620922_1',
        date: '1962-09-22',
        endDate: '1962-09-23',
        place: 'Løten, Norway (Лётен, Норвегия)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        coord: [60.81941, 11.34209],
        fmt: 'long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_19640926_1',
        date: '1964-09-26',
        endDate: '1964-09-27',
        place: 'Le Brassus, Switzerland (Ле-Брассю, Швейцария)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        coord: [46.583333, 6.216667],
        fmt: 'long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_19661001_1',
        date: '1966-10-01',
        endDate: '1966-10-02',
        place: 'Fiskars, Finland (Фискарс, Финляндия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1966_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706033745/https://old.orienteering.org/events/?event_id=6',
        maps: [
            // 'https://omaps.worldofo.com/?cid=293',
        ],
        coord: [60.129722, 23.542222],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19680928_1',
        date: '1968-09-28',
        endDate: '1968-09-29',
        place: 'Linköping, Sweden (Линчёпинг, Швеция)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://www.ifklinkos.se/vm68/vm68.htm',
            'https://en.wikipedia.org/wiki/1968_World_Orienteering_Championships'
        ],
        res: 'https://web.archive.org/web/20200706033933/https://old.orienteering.org/events/?event_id=10',
        gps: {
            'M': 'https://www.ifklinkos.se/vm68/herr.gif',
            'W': 'https://www.ifklinkos.se/vm68/dam.gif',
            'relay': 'https://www.ifklinkos.se/vm68/stafett.gif'
        },
        maps: [
            // 'https://omaps.worldofo.com/?cid=294',
        ],
        coord: [58.415833, 15.625278],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19700927_1',
        date: '1970-09-27',
        endDate: '1970-09-29',
        place: 'Eisenach, Friedrichroda, East Germany (Айзенах, Фридрихрода, ГДР)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1970_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034037/https://old.orienteering.org/events/?event_id=8',
        coord: [50.976111, 10.320556],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19720914_1',
        date: '1972-09-14',
        endDate: '1972-09-16',
        place: 'Staré Splavy, Czechoslovakia (Старе-Сплави, Чехословакия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1972_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034133/https://old.orienteering.org/events/?event_id=18',
        maps: [
            // 'https://omaps.worldofo.com/?cid=296',
        ],
        coord: [50.589444, 14.632222],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19740920_1',
        date: '1974-09-20',
        endDate: '1974-09-22',
        place: 'Viborg, Denmark (Виборг, Дания)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1974_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20210123210903/https://old.orienteering.sport/events/?event_id=20',
        coord: [56.433333, 9.4],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19750226_1',
        date: '1975-02-26',
        endDate: '1975-02-28',
        place: 'Hyvinkää, Finland (Хювинкяа, Финляндия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [60.633333, 24.85],
        type: 'SKI',
        fmt: 'long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19760924_1',
        date: '1976-09-24',
        endDate: '1976-09-26',
        place: 'Aviemore, Scotland, UK (Авимор, Шотландия, Великобритания)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1976_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034336/https://old.orienteering.org/events/?event_id=21',
        coord: [57.194, -3.823],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19770325_1',
        date: '1977-03-25',
        endDate: '1977-03-27',
        place: 'Velingrad, Bulgaria (Велинград, Болгария)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [42.016667, 24.0],
        type: 'SKI',
        fmt: 'long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19780915_1',
        date: '1978-09-15',
        endDate: '1978-09-17',
        place: 'Kongsberg, Norway (Конгсберг, Норвегия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1978_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034357/https://old.orienteering.org/events/?event_id=22',
        coord: [59.669444, 9.651667],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19790902_1',
        date: '1979-09-02',
        endDate: '1979-09-04',
        place: 'Tampere, Finland (Тампере, Финляндия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1979_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20210123204424/https://old.orienteering.sport/events/?event_id=23',
        coord: [61.498056, 23.76],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19800226_1',
        date: '1980-02-26',
        endDate: '1980-03-01',
        place: 'Avesta, Sweden (Авеста, Швеция)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [60.138889, 16.183611],
        type: 'SKI',
        fmt: 'long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19810903_1',
        date: '1981-09-03',
        endDate: '1981-09-05',
        place: 'Thun, Switzerland (Тун, Швейцария)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1981_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034434/https://old.orienteering.org/events/?event_id=24',
        coord: [46.766667, 7.633333],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19820208_1',
        date: '1982-02-08',
        endDate: '1982-02-12',
        place: 'Aigen im Ennstal, Austria (Айген-им-Энсталь, Австрия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [47.516667, 14.133333],
        type: 'SKI',
        fmt: 'long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19830901_1',
        date: '1983-09-01',
        endDate: '1983-09-04',
        place: 'Zalaegerszeg, Hungary (Залаэгерсег, Венгрия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1983_World_Orienteering_Championships',
        res: 'https://archive.today/20070617171330/http://orienteering.org/i3/index.php?/iof2006/results/foot_orienteering/world_orienteering_championships/woc_1983_hun',
        coord: [46.839167, 16.851111],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19840130_1',
        date: '1984-01-30',
        endDate: '1984-02-04',
        place: 'Lavarone, Italy (Лавароне, Италия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [45.933333, 11.266667],
        type: 'SKI',
        fmt: 'long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19850904_1',
        date: '1985-09-04',
        endDate: '1985-09-06',
        place: 'Bendigo, Australia (Бендиго, Австралия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1985_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034610/https://old.orienteering.org/events/?event_id=26',
        maps: [
            // 'http://street.orienteering.com.au/maps/map_register2/original/Wattle%20Gully%20Diggings%20b.html',
        ],
        coord: [-36.75, 144.266667],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19860219_1',
        date: '1986-02-19',
        endDate: '1986-02-24',
        place: 'Batak, Bulgaria (Батак, Болгария)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [41.95, 24.216667],
        type: 'SKI',
        fmt: 'long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19870903_1',
        date: '1987-09-03',
        endDate: '1987-09-05',
        place: 'Gérardmer, France (Жерармер, Франция)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1987_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034715/https://old.orienteering.org/events/?event_id=27',
        coord: [48.08, 6.88],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19880302_1',
        date: '1988-03-02',
        endDate: '1988-03-06',
        place: 'Kuopio, Finland (Куопио, Финляндия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [62.8925, 27.678333],
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19890817_1',
        date: '1989-08-17',
        endDate: '1989-08-20',
        place: 'Skövde, Sweden (Шёвде, Швеция)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1989_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034737/https://old.orienteering.org/events/?event_id=7',
        coord: [58.383333, 13.85],
        fmt: 'long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19900301_1',
        date: '1990-03-01',
        endDate: '1990-03-04',
        place: 'Skellefteå, Sweden (Шеллефтео, Швеция)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [64.75, 20.95],
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19910821_1',
        date: '1991-08-21',
        endDate: '1991-08-25',
        place: 'Mariánské Lázně, Czechoslovakia (Марианске-Лазне, Чехословакия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1991_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034809/https://old.orienteering.org/events/?event_id=28',
        maps: [
            // 'https://mapy.ceskyorientak.cz/mapa/linhart-1991',
            // 'https://mapy.ceskyorientak.cz/mapa/rabstejn-1991',
            // 'https://mapy.ceskyorientak.cz/mapa/rajec-1991',
            // 'https://omaps.worldofo.com/?cid=306',
        ],
        coord: [49.964722, 12.701111],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19920128_1',
        date: '1992-01-28',
        endDate: '1992-02-02',
        place: 'Pontarlier, France (Понтарлье, Франция)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [46.9067, 6.3556],
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19931009_1',
        date: '1993-10-09',
        endDate: '1993-10-14',
        place: 'West Point, USA (Уэст-Пойнт, США)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1993_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706034830/https://old.orienteering.org/events/?event_id=29',
        maps: [
            // 'https://omaps.worldofo.com/?cid=307',
            'https://www.orientering.dk/julekalender06/woc1993e.jpg'
        ],
        coord: [41.395, -73.955],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19940201_1',
        date: '1994-02-01',
        endDate: '1994-02-05',
        place: 'Val di Non, Italy (Валь-ди-Нон, Италия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [46.366667, 11.033333], // координаты региона, не населённого пункта — уточнить
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19950815_1',
        date: '1995-08-15',
        endDate: '1995-08-20',
        place: 'Detmold, Germany (Детмольд, Германия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1995_World_Orienteering_Championships',
        res: [
            'https://web.archive.org/web/20200706034850/https://old.orienteering.org/events/?event_id=30',
            'http://lazarus.elte.hu/tajfutas/history/1995.htm'
        ],
        coord: [51.937778, 8.883333],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19960219_1',
        date: '1996-02-19',
        endDate: '1996-02-24',
        place: 'Lillehammer, Norway (Лиллехаммер, Норвегия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [61.116667, 10.466667],
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19970811_1',
        date: '1997-08-11',
        endDate: '1997-08-16',
        place: 'Grimstad, Norway (Гримстад, Норвегия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1997_World_Orienteering_Championships',
        res: [
            'https://web.archive.org/web/20200706035145/https://old.orienteering.org/events/?event_id=31',
            'http://lazarus.elte.hu/tajfutas/history/1997.htm'
        ],
        coord: [58.3405, 8.5934],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_19980119_1',
        date: '1998-01-19',
        endDate: '1998-01-25',
        place: 'Windischgarsten, Austria (Виндишгарстен, Австрия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [47.721111, 14.330833],
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_19990801_1',
        date: '1999-08-01',
        endDate: '1999-08-08',
        place: 'Inverness, Scotland, UK (Инвернесс, Шотландия, Великобритания)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/1999_World_Orienteering_Championships',
        res: [
            'https://web.archive.org/web/20200706035219/https://old.orienteering.org/events/?event_id=32',
            'http://lazarus.elte.hu/tajfutas/history/1999.htm'
        ],
        maps: 'http://www.orientering.dk/julekalender06/AM2-2.jpg',
        coord: [57.4778, -4.2247],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20000228_1',
        date: '2000-02-28',
        endDate: '2000-03-05',
        place: 'Krasnoyarsk, Russia (Красноярск, Россия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [56.008889, 92.871944],
        type: 'SKI',
        fmt: 'middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20000630_1',
        date: '2000-06-30',
        endDate: '2000-07-04',
        place: 'Truskavets, Ukraine (Трускавец, Украина)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://do-f.dk/nyheder-2000/1444-skuffende-danske-stafetresultater',
        coord: [49.280556, 23.505],
        fmt: 'middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20010312_1',
        date: '2001-03-12',
        endDate: '2001-03-18', // cs.wikipedia: 12–17 марта
        place: 'Vologda, Russia (Вологда, Россия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [59.216667, 39.9],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20010726_1',
        date: '2001-07-26',
        endDate: '2001-08-04',
        place: 'Tampere, Finland (Тампере, Финляндия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/2001_World_Orienteering_Championships',
        res: [
            'https://web.archive.org/web/20200706035302/https://old.orienteering.org/events/?event_id=33',
            'http://lazarus.elte.hu/tajfutas/history/2001.htm'
        ],
        coord: [61.498056, 23.76],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20020223_1',
        date: '2002-02-23',
        endDate: '2002-03-02',
        place: 'Borovets, Bulgaria (Боровец, Болгария)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [42.264444, 23.606944],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20020925_1',
        date: '2002-09-25',
        endDate: '2002-09-30',
        place: 'Sümeg, Hungary (Шюмег, Венгрия)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        coord: [46.9787, 17.28206],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20030111_1',
        date: '2003-01-11',
        endDate: '2003-01-19', // cs.wikipedia: 12–18 января
        place: 'Kastelruth, Seiser Alm, Italy (Кастельрут, Зайзер-Альм, Италия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [46.566667, 11.566667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20030803_1',
        date: '2003-08-03',
        endDate: '2003-08-09',
        place: 'Rapperswil-Jona, Switzerland (Рапперсвиль-Йона, Швейцария)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'http://www.o-l.ch/olwm2003/static/index.php%3Flang=de.html',
            'https://en.wikipedia.org/wiki/2003_World_Orienteering_Championships'
        ],
        res: [
            'https://web.archive.org/web/20200706035406/https://old.orienteering.org/events/?event_id=34',
            'http://lazarus.elte.hu/tajfutas/history/2003.htm'
        ],
        coord: [47.226667, 8.816667],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20040211_1',
        date: '2004-02-11',
        endDate: '2004-02-15',
        place: 'Åsarna, Östersund, Sweden (Осарна, Эстерсунд, Швеция)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [62.65, 14.35],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20040710_1',
        date: '2004-07-10',
        endDate: '2004-07-17',
        place: 'Roskilde, Denmark (Роскилле, Дания)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        coord: [55.65, 12.083333],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20040911_1',
        date: '2004-09-11',
        endDate: '2004-09-19',
        place: 'Västerås, Sweden (Вестерос, Швеция)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://en.wikipedia.org/wiki/2004_World_Orienteering_Championships',
        res: [
            'https://web.archive.org/web/20211025103454/https://old.orienteering.sport/events/?event_id=35',
            'http://lazarus.elte.hu/tajfutas/history/2004.htm'
        ],
        coord: [59.616111, 16.552778],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20050305_1',
        date: '2005-03-05',
        endDate: '2005-03-12',
        place: 'Levi, Kittilä, Finland (Леви, Киттиля, Финляндия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [67.805, 24.802],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20050809_1',
        date: '2005-08-09',
        endDate: '2005-08-15',
        place: 'Aichi, Japan (Аити, Япония)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://www.woc2005.jp/',
            'https://en.wikipedia.org/wiki/2005_World_Orienteering_Championships'
        ],
        res: [
            'https://web.archive.org/web/20200706035619/https://old.orienteering.org/events/?event_id=36',
            'http://lazarus.elte.hu/tajfutas/history/2005.htm'
        ],
        coord: [35.178611, 136.913889], // координаты региона, не населённого пункта — уточнить
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20060220_1',
        date: '2006-02-20',
        endDate: '2006-02-27',
        place: 'Ivanovo, Russia (Иваново, Россия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2006',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [56.996667, 40.981944],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20060505_1',
        date: '2006-05-05',
        endDate: '2006-05-14', // en.wikipedia: 7–14 мая; de/cs: 5–14 мая
        place: 'Otepää, Estonia (Отепя, Эстония)',
        name: 'Чемпионат Европы (EOC)',
        // сайт не работает: eoc2006.ee
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        maps: [
            // 'https://news.worldofo.com/2006/05/08/mats-troeng-jonn-are-myhren-eoc-maps/',
        ],
        coord: [58.059444, 26.495833],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20060801_1',
        date: '2006-08-01',
        endDate: '2006-08-05',
        place: 'Aarhus, Denmark (Орхус, Дания)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'http://www.woc2006.dk/',
            'https://en.wikipedia.org/wiki/2006_World_Orienteering_Championships'
        ],
        res: 'https://web.archive.org/web/20200706035725/https://old.orienteering.org/events/?event_id=37',
        coord: [56.1572, 10.2107],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20070223_1',
        date: '2007-02-23',
        endDate: '2007-03-03',
        place: 'Moscow Oblast, Russia (Московская область, Россия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [55.7, 36.966667], // координаты региона, не населённого пункта — уточнить
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20070818_1',
        date: '2007-08-18',
        endDate: '2007-08-26',
        place: 'Kyiv, Ukraine (Киев, Украина)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://www.woc2007.org.ua/',
            'https://en.wikipedia.org/wiki/2007_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2007'
        ],
        res: [
            'https://web.archive.org/web/20200706035812/https://old.orienteering.org/events/?event_id=38',
            'http://woc2007.org.ua/files/relay-f-res-m.htm',
            'http://woc2007.org.ua/files/relay-f-res-w.htm'
        ],
        coord: [50.45, 30.523333],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20080114_1',
        date: '2008-01-14',
        endDate: '2008-01-20', // ru.wikipedia: 14–20 февраля; cs: 15–19 января
        place: 'S-chanf, Switzerland (Шчанф, Швейцария)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [46.616667, 9.983333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20080525_1',
        date: '2008-05-25',
        endDate: '2008-06-01',
        place: 'Ventspils, Latvia (Вентспилс, Латвия)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'http://eoc2008.lof.lv/',
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: [
            'http://eoc2008.lof.lv/results/longf/MA.HTM',
            'http://eoc2008.lof.lv/results/longf/WA.HTM',
            'http://eoc2008.lof.lv/results/middlef/MA.HTM',
            'http://eoc2008.lof.lv/results/middlef/WA.HTM',
            'http://eoc2008.lof.lv/results/relay/MEN.HTM',
            'http://eoc2008.lof.lv/results/relay/WOMEN.HTM',
            'http://eoc2008.lof.lv/results/sprint_final/MA.HTM',
            'http://eoc2008.lof.lv/results/sprint_final/WA.HTM'
        ],
        maps: [
            // 'https://news.worldofo.com/2008/05/26/eoc-sprint-final-maps-statements-and-results/',
            // 'https://news.worldofo.com/2008/05/29/map-eoc-long-final/',
        ],
        coord: [57.390556, 21.573333],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20080710_1',
        date: '2008-07-10',
        endDate: '2008-07-20',
        place: 'Olomouc, Czech Republic (Оломоуц, Чехия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2008.cz, woc2008.orientacnisporty.cz
        link: 'https://en.wikipedia.org/wiki/2008_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20190904201059/https://old.orienteering.org/events/?event_id=51',
        maps: [
            // 'https://mapy.ceskyorientak.cz/mapa/boudy-foot-15000-2008',
            // 'https://mapy.ceskyorientak.cz/mapa/mazance-2008',
            // 'https://mapy.ceskyorientak.cz/mapa/olomouc-botanicka-zahrada-2008',
            // 'https://mapy.ceskyorientak.cz/mapa/olsana-2008',
        ],
        coord: [49.593889, 17.250833],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20090303_1',
        date: '2009-03-03',
        endDate: '2009-03-08',
        place: 'Rusutsu, Japan (Русуцу, Япония)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20090816_1',
        date: '2009-08-16',
        endDate: '2009-08-23',
        place: 'Miskolc, Hungary (Мишкольц, Венгрия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: live.woc2009.hu
        link: 'https://en.wikipedia.org/wiki/2009_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706040112/https://old.orienteering.org/events/?event_id=52',
        maps: [
            // 'https://news.worldofo.com/2009/08/20/woc-sprint-2009-map-and-results/',
            // 'https://news.worldofo.com/2009/08/19/woc-middle-gueorgiou-and-brozkova-map/',
            // 'https://news.worldofo.com/2009/08/23/woc-2009-long-map-and-results/',
            // 'https://news.worldofo.com/2009/08/22/woc-2009-relay-map-and-results/',
            // 'http://omaps.worldofo.com/index.php?s=&st=&id=&cid=683&c=',
        ],
        coord: [48.104167, 20.791667],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20100208_1',
        date: '2010-02-08',
        endDate: '2010-02-15',
        place: 'Miercurea Ciuc, Romania (Меркуря-Чук, Румыния)',
        name: 'Чемпионат Европы (SKI-EOC)',
        // сайт не работает: skio.ro
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2010',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [46.359444, 25.801667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20100527_1',
        date: '2010-05-27',
        endDate: '2010-06-06', // cs.wikipedia: с 28 мая
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        name: 'Чемпионат Европы (EOC)',
        // сайт не работает: eoc2010.bgorienteering.com
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        maps: [
            // 'https://news.worldofo.com/2010/05/31/eoc-maps-from-all-races-webroute/',
            // 'http://omaps.worldofo.com/?cid=917',
        ],
        coord: [42.266667, 27.766667],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20100530_1',
        parent: 'IOF_20100527_1',
        date: '2010-05-30',
        name: 'EOC #1, спринт (квалификация и финал)',
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        maps: [
            // 'https://omaps.worldofo.com/index.php?id=24447',
            // 'https://omaps.worldofo.com/index.php?id=24511',
            // 'https://omaps.worldofo.com/index.php?id=24512',
            // 'https://omaps.worldofo.com/index.php?id=24514',
        ],
        coord: [42.266667, 27.766667],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20100531_1',
        parent: 'IOF_20100527_1',
        date: '2010-05-31',
        name: 'EOC #2, лонг (квалификация)',
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        maps: [
            // 'https://omaps.worldofo.com/index.php?id=24515',
            // 'https://omaps.worldofo.com/index.php?id=24541',
        ],
        coord: [42.266667, 27.766667],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20100601_1',
        parent: 'IOF_20100527_1',
        date: '2010-06-01',
        name: 'EOC #3, миддл (квалификация)',
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        coord: [42.266667, 27.766667],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20100602_1',
        parent: 'IOF_20100527_1',
        date: '2010-06-02',
        name: 'EOC #4, эстафета',
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        maps: [
            // 'https://news.worldofo.com/2010/06/02/eoc-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=24639',
        ],
        coord: [42.266667, 27.766667],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20100604_1',
        parent: 'IOF_20100527_1',
        date: '2010-06-04',
        name: 'EOC #5, миддл',
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        maps: [
            // 'https://news.worldofo.com/2010/06/04/eoc-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=24726',
            // 'https://omaps.worldofo.com/index.php?id=24727',
        ],
        coord: [42.266667, 27.766667],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20100605_1',
        parent: 'IOF_20100527_1',
        date: '2010-06-05',
        name: 'EOC #6, лонг',
        place: 'Primorsko, Bulgaria (Приморско, Болгария)',
        maps: [
            // 'https://news.worldofo.com/2010/06/05/eoc-long-gold-for-niggli-and-hubmann/',
            // 'https://omaps.worldofo.com/index.php?id=24742',
            // 'https://omaps.worldofo.com/index.php?id=24743',
        ],
        coord: [42.266667, 27.766667],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20100808_1',
        date: '2010-08-08',
        endDate: '2010-08-15',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2010.com
        link: 'https://en.wikipedia.org/wiki/2010_World_Orienteering_Championships',
        res: 'https://web.archive.org/web/20200706040226/https://old.orienteering.org/events/?event_id=4',
        coord: [63.429722, 10.393333],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20100808_2',
        parent: 'IOF_20100808_1',
        date: '2010-08-08',
        name: 'WOC #1, спринт (квалификация и финал)',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        gps: {
            'W': 'https://www.tulospalvelu.fi/gps/20100808_sprint_w/',
            'M': 'https://www.tulospalvelu.fi/gps/20100808_sprint_m/'
        },
        maps: [
            // 'https://news.worldofo.com/2010/08/08/woc-sprint-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=26800',
            // 'https://omaps.worldofo.com/index.php?id=26801',
        ],
        coord: [63.429722, 10.393333],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20100809_1',
        parent: 'IOF_20100808_1',
        date: '2010-08-09',
        name: 'WOC #2, миддл (квалификация)',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        gps: {
            'W-QA': 'https://www.tulospalvelu.fi/gps/20100809_mid_q_w1/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20100809_mid_q_w2/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20100809_mid_q_w3/'
        },
        coord: [63.429722, 10.393333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20100810_1',
        parent: 'IOF_20100808_1',
        date: '2010-08-10',
        name: 'WOC #3, лонг (квалификация)',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20100810_long_q_m1/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20100810_long_q_m2/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20100810_long_q_m3/'
        },
        coord: [63.429722, 10.393333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20100812_1',
        parent: 'IOF_20100808_1',
        date: '2010-08-12',
        name: 'WOC #4, лонг',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20100812_long_f_m/',
            'W': 'https://www.tulospalvelu.fi/gps/20100812_long_f_w/'
        },
        maps: [
            // 'https://news.worldofo.com/2010/08/12/woc-long-men-map-and-route-choices/',
            // 'https://omaps.worldofo.com/index.php?id=26942',
        ],
        coord: [63.429722, 10.393333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20100814_1',
        parent: 'IOF_20100808_1',
        date: '2010-08-14',
        name: 'WOC #5, миддл',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20100814_middle_f_m/',
            'W': 'https://www.tulospalvelu.fi/gps/20100814_middle_f_w/'
        },
        maps: [
            // 'https://news.worldofo.com/2010/08/14/woc-middle-map-routes-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=26981',
            // 'https://omaps.worldofo.com/index.php?id=26988',
        ],
        coord: [63.429722, 10.393333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20100815_1',
        parent: 'IOF_20100808_1',
        date: '2010-08-15',
        name: 'WOC #6, эстафета',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20100815_relay_m1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20100815_relay_m2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20100815_relay_m3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20100815_relay_w1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20100815_relay_w2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20100815_relay_w3/'
        },
        maps: [
            // 'https://news.worldofo.com/2010/08/15/woc-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=27013',
            // 'https://omaps.worldofo.com/index.php?id=27014',
        ],
        coord: [63.429722, 10.393333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20110131_1',
        date: '2011-01-31',
        endDate: '2011-02-06', // cs.wikipedia: 1–6 февраля
        place: 'Lillehammer, Norway (Лиллехаммер, Норвегия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften_2011',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [61.116667, 10.466667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20110202_1',
        parent: 'IOF_20110131_1',
        date: '2011-02-02',
        name: 'SKI-EOC #1, лонг',
        place: 'Lillehammer, Norway (Лиллехаммер, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110202EOCM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110202EOCW/'
        },
        coord: [61.116667, 10.466667],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20110204_1',
        parent: 'IOF_20110131_1',
        date: '2011-02-04',
        name: 'SKI-EOC #2, спринт',
        place: 'Lillehammer, Norway (Лиллехаммер, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110204EOCM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110204EOCW/'
        },
        coord: [61.116667, 10.466667],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20110205_1',
        parent: 'IOF_20110131_1',
        date: '2011-02-05',
        name: 'SKI-EOC #3, миддл',
        place: 'Lillehammer, Norway (Лиллехаммер, Норвегия)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20110205EOCM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20110205EOCM2/',
            'W': 'https://www.tulospalvelu.fi/gps/20110205EOCW/'
        },
        coord: [61.116667, 10.466667],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20110206_1',
        parent: 'IOF_20110131_1',
        date: '2011-02-06',
        name: 'SKI-EOC #4, эстафета',
        place: 'Lillehammer, Norway (Лиллехаммер, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110206EOCM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110206EOCW/'
        },
        coord: [61.116667, 10.466667],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20110320_1',
        date: '2011-03-20',
        endDate: '2011-03-28',
        place: 'Tänndalen, Sweden (Тэнндален, Швеция)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [62.5444, 12.3333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20110322_1',
        parent: 'IOF_20110320_1',
        date: '2011-03-22',
        name: 'SKI-WOC #1, спринт',
        place: 'Tänndalen, Sweden (Тэнндален, Швеция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110322sprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110322sprintW/'
        },
        coord: [62.5444, 12.3333],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20110323_1',
        parent: 'IOF_20110320_1',
        date: '2011-03-23',
        name: 'SKI-WOC #2, миддл',
        place: 'Tänndalen, Sweden (Тэнндален, Швеция)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20110323middleM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20110323m2/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20110323middleW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20110323w2/'
        },
        coord: [62.5444, 12.3333],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20110324_1',
        parent: 'IOF_20110320_1',
        date: '2011-03-24',
        name: 'SKI-WOC #3, спринт-эстафета',
        place: 'Tänndalen, Sweden (Тэнндален, Швеция)',
        gps: {
            'all': 'https://www.tulospalvelu.fi/gps/20110324sprintrelay/'
        },
        coord: [62.5444, 12.3333],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20110326_1',
        parent: 'IOF_20110320_1',
        date: '2011-03-26',
        name: 'SKI-WOC #4, лонг',
        place: 'Tänndalen, Sweden (Тэнндален, Швеция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110326longM/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20110326longM2/',
            'W': 'https://www.tulospalvelu.fi/gps/20110326longW/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20110326longW2/'
        },
        coord: [62.5444, 12.3333],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20110327_1',
        parent: 'IOF_20110320_1',
        date: '2011-03-27',
        name: 'SKI-WOC #5, эстафета',
        place: 'Tänndalen, Sweden (Тэнндален, Швеция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110327relayM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110327relayW/'
        },
        coord: [62.5444, 12.3333],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20110813_1',
        date: '2011-08-13',
        endDate: '2011-08-20',
        place: 'Savoie, France (Савойя, Франция)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'http://www.woc2011.fr/',
            'https://en.wikipedia.org/wiki/2011_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2011'
        ],
        res: 'https://web.archive.org/web/20200706040305/https://old.orienteering.org/events/?event_id=53',
        coord: [45.583333, 6.333333], // координаты региона, не населённого пункта — уточнить
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20110816_1',
        parent: 'IOF_20110813_1',
        date: '2011-08-16',
        name: 'WOC #1, спринт',
        place: 'Savoie, France (Савойя, Франция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110816wocsprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110816wocsprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2011/08/16/woc-sprint-map-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=44918',
            // 'https://omaps.worldofo.com/index.php?id=44924',
            // 'https://omaps.worldofo.com/index.php?id=44925',
            // 'https://omaps.worldofo.com/index.php?id=44926',
            // 'https://omaps.worldofo.com/index.php?id=44927',
            // 'https://omaps.worldofo.com/index.php?id=44928',
        ],
        coord: [45.583333, 6.333333],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20110817_1',
        parent: 'IOF_20110813_1',
        date: '2011-08-17',
        name: 'WOC #2, лонг',
        place: 'Savoie, France (Савойя, Франция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110817woclongM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110817woclongW/'
        },
        maps: [
            // 'https://news.worldofo.com/2011/08/17/woc-long-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=44954',
            // 'https://omaps.worldofo.com/index.php?id=44955',
            // 'https://omaps.worldofo.com/index.php?id=44978',
            // 'https://omaps.worldofo.com/index.php?id=44979',
        ],
        coord: [45.583333, 6.333333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20110819_1',
        parent: 'IOF_20110813_1',
        date: '2011-08-19',
        name: 'WOC #3, миддл',
        place: 'Savoie, France (Савойя, Франция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20110819wocmiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/20110819wocmiddleW/'
        },
        maps: [
            // 'https://news.worldofo.com/2011/08/19/woc-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=45055',
            // 'https://omaps.worldofo.com/index.php?id=45064',
        ],
        coord: [45.583333, 6.333333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20110820_1',
        parent: 'IOF_20110813_1',
        date: '2011-08-20',
        name: 'WOC #4, эстафета',
        place: 'Savoie, France (Савойя, Франция)',
        gps: {
            'M-1+2': 'https://www.tulospalvelu.fi/gps/20110821wocrelayM12/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20110821wocrelayM3/',
            'W-1+2': 'https://www.tulospalvelu.fi/gps/20110821wocrelayW12/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20110821wocrelayW3/'
        },
        coord: [45.583333, 6.333333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20120220_1',
        date: '2012-02-20',
        endDate: '2012-02-26', // cs.wikipedia: 21–26 февраля
        place: 'Sumy, Ukraine (Сумы, Украина)',
        name: 'Чемпионат Европы (SKI-EOC)',
        // сайт не работает: skio2012.sumy.org
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften_2012',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2012',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [50.911944, 34.802778],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20120514_1',
        date: '2012-05-14',
        endDate: '2012-05-20',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'http://www.eoc2012.se/',
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        coord: [60.607222, 15.631111],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20120514_2',
        parent: 'IOF_20120514_1',
        date: '2012-05-14',
        name: 'EOC #1, миддл (квалификация)',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        gps: {
            'W-QB': 'https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-B/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-A/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-C/'
        },
        coord: [60.607222, 15.631111],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20120515_1',
        parent: 'IOF_20120514_1',
        date: '2012-05-15',
        name: 'EOC #2, лонг (квалификация)',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-A/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-B/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-C/'
        },
        coord: [60.607222, 15.631111],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20120516_1',
        parent: 'IOF_20120514_1',
        date: '2012-05-16',
        name: 'EOC #3, спринт (квалификация)',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        coord: [60.607222, 15.631111],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20120517_1',
        parent: 'IOF_20120514_1',
        date: '2012-05-17',
        name: 'EOC #4, миддл',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=4222',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120517EOCMidMF/',
            'W': 'https://www.tulospalvelu.fi/gps/20120517EOCMidWF/'
        },
        maps: [
            // 'https://news.worldofo.com/2012/05/17/eoc-middle-maps-and-results-2/',
            // 'https://omaps.worldofo.com/index.php?id=61113',
            // 'https://omaps.worldofo.com/index.php?id=61114',
        ],
        coord: [60.607222, 15.631111],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20120518_1',
        parent: 'IOF_20120514_1',
        date: '2012-05-18',
        name: 'EOC #5, лонг',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=4225',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120518EOCLongMF/',
            'W': 'https://www.tulospalvelu.fi/gps/20120518EOCLongWF/'
        },
        maps: [
            // 'https://news.worldofo.com/2012/05/18/eoc-long-final-map-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=61158',
            // 'https://omaps.worldofo.com/index.php?id=61159',
        ],
        coord: [60.607222, 15.631111],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20120519_1',
        parent: 'IOF_20120514_1',
        date: '2012-05-19',
        name: 'EOC #6, спринт',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=4228',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120519EOCSprintMF/',
            'W': 'https://www.tulospalvelu.fi/gps/20120519EOCSprintWF/'
        },
        coord: [60.607222, 15.631111],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20120520_1',
        parent: 'IOF_20120514_1',
        date: '2012-05-20',
        name: 'EOC #7, эстафета',
        place: 'Falun, Mora, Sweden (Фалун, Мура, Швеция)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20120520EOCRelM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20120520EOCRelM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20120520EOCRelM3/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20120520EOCRelW3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20120520EOCRelW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20120520EOCRelW2/'
        },
        coord: [60.607222, 15.631111],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20120714_1',
        date: '2012-07-14',
        endDate: '2012-07-21',
        place: 'Lausanne, Switzerland (Лозанна, Швейцария)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2012.ch
        link: [
            'http://runners.worldofo.com/woc2012.html',
            'https://en.wikipedia.org/wiki/2012_World_Orienteering_Championships'
        ],
        res: 'https://web.archive.org/web/20160812223959/http://orienteering.org/events/?event_id=54',
        coord: [46.52, 6.633333],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20120714_2',
        parent: 'IOF_20120714_1',
        date: '2012-07-14',
        name: 'WOC #1, спринт',
        place: 'Lausanne, Switzerland (Лозанна, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120714WOCSprM-Web/',
            'W': 'https://www.tulospalvelu.fi/gps/20120714WOCSprW-Web/'
        },
        maps: [
            // 'https://news.worldofo.com/2012/07/14/woc-sprint-final-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=64912',
            // 'https://omaps.worldofo.com/index.php?id=64913',
            // 'https://omaps.worldofo.com/index.php?id=64921',
            // 'https://omaps.worldofo.com/index.php?id=64922',
        ],
        coord: [46.52, 6.633333],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20120717_1',
        parent: 'IOF_20120714_1',
        date: '2012-07-17',
        name: 'WOC #2, миддл',
        place: 'Lausanne, Switzerland (Лозанна, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120717WOCMidM-Web/',
            'W': 'https://www.tulospalvelu.fi/gps/20120717WOCMidW-Web/'
        },
        maps: [
            // 'https://news.worldofo.com/2012/07/17/woc-middle-surprise-surprise/',
            // 'https://omaps.worldofo.com/index.php?id=65082',
        ],
        coord: [46.52, 6.633333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20120719_1',
        parent: 'IOF_20120714_1',
        date: '2012-07-19',
        name: 'WOC #3, лонг',
        place: 'Lausanne, Switzerland (Лозанна, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120719WOCLongM-Web/',
            'W': 'https://www.tulospalvelu.fi/gps/20120719WOCLongW-Web/'
        },
        maps: [
            // 'https://news.worldofo.com/2012/07/19/woc-2012-long-maps-webroutes/',
            // 'https://omaps.worldofo.com/index.php?id=65177',
            // 'https://omaps.worldofo.com/index.php?id=65178',
        ],
        coord: [46.52, 6.633333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20120721_1',
        parent: 'IOF_20120714_1',
        date: '2012-07-21',
        name: 'WOC #4, эстафета',
        place: 'Lausanne, Switzerland (Лозанна, Швейцария)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20120721WOCRelM1-Web/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20120721WOCRelM2-Web/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20120721WOCRelM3-Web/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20120721WOCRelW1-Web/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20120721WOCRelW2-Web/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20120721WOCRelW3-Web/'
        },
        coord: [46.52, 6.633333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20130211_1',
        date: '2013-02-11',
        endDate: '2013-02-17', // de/sv: 11–17 февраля; ru/fi: 11–18; cs: 13–16 марта
        place: 'Madona, Latvia (Мадона, Латвия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        // esoc2013.lv теперь занят посторонним сайтом — ссылка не включена
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften_2013',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140315011538/http://old.orientering.no/resultater/emskiores.asp', // сводная таблица призёров ESOC (Норвежская федерация, архив)
        coord: [56.8542, 26.2206],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20130303_1',
        date: '2013-03-03',
        endDate: '2013-03-08',
        place: 'Ridder, Kazakhstan (Риддер, Казахстан)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [50.35, 83.516667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20130706_1',
        date: '2013-07-06',
        endDate: '2013-07-14',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2013.fi
        link: [
            'https://en.wikipedia.org/wiki/2013_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2013'
        ],
        res: 'https://web.archive.org/web/20161009212708/http://orienteering.org/events/?event_id=55',
        coord: [64.1458, 28.2717],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20130707_1',
        parent: 'IOF_20130706_1',
        date: '2013-07-07',
        name: 'WOC #1, лонг (квалификация)',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        gps: {
            'M-Q': 'https://www.tulospalvelu.fi/gps/2013wocLongQall/',
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2013wocLongQ1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2013wocLongQ2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2013wocLongQ3/'
        },
        coord: [64.1458, 28.2717],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20130708_1',
        parent: 'IOF_20130706_1',
        date: '2013-07-08',
        name: 'WOC #2, спринт (квалификация и финал)',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        res: 'http://www.woc2013.fi/wp-content/uploads/2014/08/Sprint-final-results.pdf',
        gps: {
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2013WOCsprintQM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2013WOCsprintQM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2013WOCsprintQM3/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2013WOCsprintQW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2013WOCsprintQW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2013WOCsprintQW3/',
            'M': 'https://www.tulospalvelu.fi/gps/2013wocSprintMen/',
            'W': 'https://www.tulospalvelu.fi/gps/2013wocSprintWomen/'
        },
        maps: [
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Sprint-F-Men.gif',
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Sprint-F-Women.gif'
        ],
        coord: [64.1458, 28.2717],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20130709_1',
        parent: 'IOF_20130706_1',
        date: '2013-07-09',
        name: 'WOC #3, лонг',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        res: 'http://www.woc2013.fi/wp-content/uploads/2014/08/ResultsLong.pdf',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2013WOCLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2013WOCLongW/'
        },
        maps: [
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Long-F-MEN-1.gif',
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Long-F-WOMEN-1.gif'
        ],
        coord: [64.1458, 28.2717],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20130711_1',
        parent: 'IOF_20130706_1',
        date: '2013-07-11',
        name: 'WOC #4, миддл (квалификация)',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        gps: {
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2013mqM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2013mqM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2013mqM3/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2013mqW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2013mqW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2013mqW3/'
        },
        coord: [64.1458, 28.2717],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20130712_1',
        parent: 'IOF_20130706_1',
        date: '2013-07-12',
        name: 'WOC #5, миддл',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        res: 'http://www.woc2013.fi/wp-content/uploads/2014/08/ResultsFinalmiddledistance.pdf',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2013wocMidM/',
            'W': 'https://www.tulospalvelu.fi/gps/2013wocMidW/'
        },
        maps: [
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Middle-F-MEN-1.gif',
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Middle-F-WOMEN-1.gif'
        ],
        coord: [64.1458, 28.2717],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20130713_1',
        parent: 'IOF_20130706_1',
        date: '2013-07-13',
        name: 'WOC #6, эстафета',
        place: 'Vuokatti, Finland (Вуокатти, Финляндия)',
        res: 'http://www.woc2013.fi/wp-content/uploads/2014/08/RelayResults.pdf',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2013wocRM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2013wocRM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2013wocRM3/',
            'M-all': 'https://www.tulospalvelu.fi/gps/2013wocRM123/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2013wocRW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2013wocRW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2013wocRW3/',
            'W-all': 'https://www.tulospalvelu.fi/gps/2013wocRW123/'
        },
        maps: [
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Relay-MEN.gif',
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Relay-WOMEN.gif'
        ],
        coord: [64.1458, 28.2717],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20140305_1',
        date: '2014-03-05',
        endDate: '2014-03-14', // de/fi: 5–14 марта; ru/sv: 5–15; cs: 7–14; гонки по GPS 7–12 марта
        place: 'Tyumen, Russia (Тюмень, Россия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'http://esoc2014.ru/',
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften_2014',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2014',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://web.archive.org/web/20140201185233/http://orienteering.org/events/?event_id=380',
        coord: [57.15, 65.533333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20140307_1',
        parent: 'IOF_20140305_1',
        date: '2014-03-07',
        name: 'SKI-EOC #1, спринт-эстафета',
        place: 'Tyumen, Russia (Тюмень, Россия)',
        gps: {
            'M-135': 'https://www.tulospalvelu.fi/gps/20140307esocM/',
            'W-246': 'https://www.tulospalvelu.fi/gps/20140307esocW/'
        },
        coord: [57.15, 65.533333],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20140308_1',
        parent: 'IOF_20140305_1',
        date: '2014-03-08',
        name: 'SKI-EOC #2, спринт',
        place: 'Tyumen, Russia (Тюмень, Россия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20140308esocM/',
            'W': 'https://www.tulospalvelu.fi/gps/20140308esocW/'
        },
        coord: [57.15, 65.533333],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20140309_1',
        parent: 'IOF_20140305_1',
        date: '2014-03-09',
        name: 'SKI-EOC #3, лонг',
        place: 'Tyumen, Russia (Тюмень, Россия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20140309esocM/',
            'W': 'https://www.tulospalvelu.fi/gps/20140309esocW/'
        },
        coord: [57.15, 65.533333],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20140311_1',
        parent: 'IOF_20140305_1',
        date: '2014-03-11',
        name: 'SKI-EOC #4, миддл',
        place: 'Tyumen, Russia (Тюмень, Россия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20140311esocM/',
            'W': 'https://www.tulospalvelu.fi/gps/20140311esocW/'
        },
        coord: [57.15, 65.533333],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20140312_1',
        parent: 'IOF_20140305_1',
        date: '2014-03-12',
        name: 'SKI-EOC #5, эстафета',
        place: 'Tyumen, Russia (Тюмень, Россия)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20140312esocM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20140312esocM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20140312esocM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20140312esocW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20140312esocW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20140312esocW3/'
        },
        coord: [57.15, 65.533333],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20140409_1',
        date: '2014-04-09',
        endDate: '2014-04-16', // cs.wikipedia: 10–16 апреля
        place: 'Palmela, Portugal (Палмела, Португалия)',
        name: 'Чемпионат Европы (EOC)',
        // сайт не работает: eoc2014.fpo.pt
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        coord: [38.566667, -8.9],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20140410_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-10',
        name: 'EOC #1, миддл (квалификация)',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        coord: [38.566667, -8.9],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20140411_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-11',
        name: 'EOC #2, лонг (квалификация)',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        coord: [38.566667, -8.9],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20140412_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-12',
        name: 'EOC #3, спринт (квалификация)',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        coord: [38.566667, -8.9],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20140413_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-13',
        name: 'EOC #4, спринт',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=4600',
        maps: [
            // 'https://news.worldofo.com/2014/04/13/eoc-sprint-2014-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=108548',
        ],
        coord: [38.566667, -8.9],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20140414_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-14',
        name: 'EOC #5, миддл',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=4601',
        maps: [
            // 'https://news.worldofo.com/2014/04/14/eoc-middle-maps-and-results-3/',
            // 'https://omaps.worldofo.com/index.php?id=108711',
            // 'https://omaps.worldofo.com/index.php?id=108712',
        ],
        coord: [38.566667, -8.9],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20140415_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-15',
        name: 'EOC #6, лонг',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=4602',
        maps: [
            // 'https://news.worldofo.com/2014/04/16/eoc-long-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=108913',
            // 'https://omaps.worldofo.com/index.php?id=108914',
        ],
        coord: [38.566667, -8.9],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20140416_1',
        parent: 'IOF_20140409_1',
        date: '2014-04-16',
        name: 'EOC #7, эстафета',
        place: 'Palmela, Portugal (Палмела, Португалия)',
        maps: [
            // 'https://news.worldofo.com/2014/04/16/eoc-relay-maps-and-results-2/',
            // 'https://omaps.worldofo.com/index.php?id=108911',
            // 'https://omaps.worldofo.com/index.php?id=108912',
        ],
        coord: [38.566667, -8.9],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20140705_1',
        date: '2014-07-05',
        endDate: '2014-07-12',
        place: 'Trentino, Veneto, Italy (Трентино, Венето, Италия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2014.info
        link: [
            'http://woc2014.fisoveneto.it/woc.php',
            'https://en.wikipedia.org/wiki/2014_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2014'
        ],
        coord: [46.445556, 11.173056], // координаты региона, не населённого пункта — уточнить
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20140705_2',
        parent: 'IOF_20140705_1',
        date: '2014-07-05',
        name: 'WOC #1, спринт',
        place: 'Trentino, Veneto, Italy (Трентино, Венето, Италия)',
        res: [
            'http://woc2014.fisoveneto.it/LIVE/results/sprintf/Resuls-IND-SF-MEN.pdf',
            'http://woc2014.fisoveneto.it/LIVE/results/sprintf/Resuls-IND-SF-WOMEN.pdf'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2014wocsprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2014wocsprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2014/07/05/woc-2014-sprint-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=116639',
            // 'https://omaps.worldofo.com/index.php?id=116640',
        ],
        coord: [46.445556, 11.173056],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20140707_1',
        parent: 'IOF_20140705_1',
        date: '2014-07-07',
        name: 'WOC #2, спринт-эстафета',
        place: 'Trentino, Veneto, Italy (Трентино, Венето, Италия)',
        res: 'http://woc2014.fisoveneto.it/LIVE/results/sprintrelay/Resuls-Sprint-RELAY.pdf',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2014wocsrelay1/',
            '2': 'https://www.tulospalvelu.fi/gps/2014wocsrelay2/',
            '3': 'https://www.tulospalvelu.fi/gps/2014wocsrelay3/',
            '4': 'https://www.tulospalvelu.fi/gps/2014wocsrelay4/'
        },
        coord: [46.445556, 11.173056],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20140709_1',
        parent: 'IOF_20140705_1',
        date: '2014-07-09',
        name: 'WOC #3, лонг',
        place: 'Trentino, Veneto, Italy (Трентино, Венето, Италия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2014woclongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2014woclongW/'
        },
        maps: [
            // 'https://news.worldofo.com/2014/07/09/woc-long-2014-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=116973',
        ],
        coord: [46.445556, 11.173056],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20140711_1',
        parent: 'IOF_20140705_1',
        date: '2014-07-11',
        name: 'WOC #4, миддл',
        place: 'Trentino, Veneto, Italy (Трентино, Венето, Италия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2014wocmiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2014wocmiddleW/'
        },
        maps: [
            // 'https://news.worldofo.com/2014/07/11/woc-2014-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=117068',
            // 'https://omaps.worldofo.com/index.php?id=117069',
        ],
        coord: [46.445556, 11.173056],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20140712_1',
        parent: 'IOF_20140705_1',
        date: '2014-07-12',
        name: 'WOC #5, эстафета',
        place: 'Trentino, Veneto, Italy (Трентино, Венето, Италия)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2014wocrelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2014wocrelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2014wocrelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2014wocrelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2014wocrelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2014wocrelayW3/'
        },
        coord: [46.445556, 11.173056],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20150119_1',
        date: '2015-01-19',
        endDate: '2015-01-25',
        place: 'Lenzerheide, Switzerland (Ленцерхайде, Швейцария)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [46.75, 9.55],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20150120_1',
        parent: 'IOF_20150119_1',
        date: '2015-01-20',
        name: 'SKI-EOC #1, спринт',
        place: 'Lenzerheide, Switzerland (Ленцерхайде, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150120_esoc_sd_m/',
            'W': 'https://www.tulospalvelu.fi/gps/20150120_esoc_sd_w/'
        },
        coord: [46.75, 9.55],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20150121_1',
        parent: 'IOF_20150119_1',
        date: '2015-01-21',
        name: 'SKI-EOC #2, лонг',
        place: 'Lenzerheide, Switzerland (Ленцерхайде, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150121_esoc_ld_m/',
            'W': 'https://www.tulospalvelu.fi/gps/20150121_esoc_ld_w/'
        },
        coord: [46.75, 9.55],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20150122_1',
        parent: 'IOF_20150119_1',
        date: '2015-01-22',
        name: 'SKI-EOC #3, спринт-эстафета',
        place: 'Lenzerheide, Switzerland (Ленцерхайде, Швейцария)',
        gps: {
            'M-246': 'https://www.tulospalvelu.fi/gps/20150122_esoc_srel_2/',
            'W-135': 'https://www.tulospalvelu.fi/gps/20150122_esoc_srel_1/'
        },
        coord: [46.75, 9.55],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20150124_1',
        parent: 'IOF_20150119_1',
        date: '2015-01-24',
        name: 'SKI-EOC #4, миддл',
        place: 'Lenzerheide, Switzerland (Ленцерхайде, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150124_esoc_md_m/',
            'W': 'https://www.tulospalvelu.fi/gps/20150124_esoc_md_w/'
        },
        coord: [46.75, 9.55],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20150125_1',
        parent: 'IOF_20150119_1',
        date: '2015-01-25',
        name: 'SKI-EOC #5, эстафета',
        place: 'Lenzerheide, Switzerland (Ленцерхайде, Швейцария)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w3/'
        },
        coord: [46.75, 9.55],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20150207_1',
        date: '2015-02-07',
        endDate: '2015-02-15',
        place: 'Hamar, Løten, Norway (Хамар, Лётен, Норвегия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        gps: {
            '10': 'https://www.tulospalvelu.fi/gps/20150210MIX/',
            '11-M': 'https://www.tulospalvelu.fi/gps/20150211M21/',
            '11-W': 'https://www.tulospalvelu.fi/gps/20150211W21/',
            '12-M': 'https://www.tulospalvelu.fi/gps/20150212M21/',
            '12-W': 'https://www.tulospalvelu.fi/gps/20150212W21/',
            '14-M': 'https://www.tulospalvelu.fi/gps/20150214M21/',
            '14-W': 'https://www.tulospalvelu.fi/gps/20150214W21/',
            '15-M-3': 'https://www.tulospalvelu.fi/gps/20150215M21/',
            '15-W-3': 'https://www.tulospalvelu.fi/gps/20150215W21/'
        },
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150731_1',
        date: '2015-07-31',
        endDate: '2015-08-07', // по cs.wikipedia; en: 1–7 августа — квалификация спринта 31 июля по GPS
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2015.scottish6days.com
        link: [
            'http://www.woc2015.org/',
            'https://en.wikipedia.org/wiki/2015_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2015'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/4856',
            'http://obasen.orientering.se/winsplits/online/en/default.asp?page=table&databaseId=37711&categoryId=1'
        ],
        coord: [57.4778, -4.2247],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20150731_2',
        parent: 'IOF_20150731_1',
        date: '2015-07-31',
        name: 'WOC #1, спринт (квалификация)',
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        gps: {
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2015wocSprintQM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2015wocSprintQM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2015wocSprintQM3/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2015wocSprintQW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2015wocSprintQW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2015wocSprintQW3/'
        },
        coord: [57.4778, -4.2247],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20150801_1',
        parent: 'IOF_20150731_1',
        date: '2015-08-01',
        name: 'WOC #2, спринт-эстафета',
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2015wocSRelay1/',
            '2': 'https://www.tulospalvelu.fi/gps/2015wocSRelay2/',
            '3': 'https://www.tulospalvelu.fi/gps/2015wocSRelay3/',
            '4': 'https://www.tulospalvelu.fi/gps/2015wocSRelay4/'
        },
        coord: [57.4778, -4.2247],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20150802_1',
        parent: 'IOF_20150731_1',
        date: '2015-08-02',
        name: 'WOC #3, спринт',
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        res: 'http://obasen.orientering.se/winsplits/online/en/default.asp?page=table&databaseId=37711&categoryId=0',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2015wocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2015wocSprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2015/08/03/woc-sprint-2015-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=149143',
            // 'https://omaps.worldofo.com/?id=149144',
        ],
        coord: [57.4778, -4.2247],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20150804_1',
        parent: 'IOF_20150731_1',
        date: '2015-08-04',
        name: 'WOC #4, миддл',
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        res: [
            'http://obasen.orientering.se/winsplits/online/en/default.asp?page=table&databaseId=37719&categoryId=0',
            'http://obasen.orientering.se/winsplits/online/en/default.asp?page=table&databaseId=37719&categoryId=1'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2015wocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2015wocMiddleW/'
        },
        maps: [
            // 'https://news.worldofo.com/2015/08/05/woc-middle-2015-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=149277',
            // 'https://omaps.worldofo.com/?id=149278',
        ],
        coord: [57.4778, -4.2247],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20150805_1',
        parent: 'IOF_20150731_1',
        date: '2015-08-05',
        name: 'WOC #5, эстафета',
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2015wocRelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2015wocRelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2015wocRelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2015wocRelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2015wocRelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2015wocRelayW3/'
        },
        coord: [57.4778, -4.2247],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20150807_1',
        parent: 'IOF_20150731_1',
        date: '2015-08-07',
        name: 'WOC #6, лонг',
        place: 'Inverness, Nairn, Scotland, UK (Инвернесс, Нэрн, Шотландия, Великобритания)',
        res: [
            'http://obasen.orientering.se/winsplits/online/en/default.asp?page=table&databaseId=37757&categoryId=0',
            'http://obasen.orientering.se/winsplits/online/en/default.asp?page=table&databaseId=37757&categoryId=1'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2015wocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2015wocLongW/'
        },
        coord: [57.4778, -4.2247],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20160229_1',
        date: '2016-02-29',
        endDate: '2016-03-05', // ru.wikipedia ошибочно: 19–25 января, Хохфильцен
        place: 'Obertilliach, Austria (Обертиллиах, Австрия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/5085',
        coord: [46.708611, 12.616111],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20160520_1',
        date: '2016-05-20',
        endDate: '2016-05-28', // по cs.wikipedia; en/de: 25–31 мая — не сходится с GPS-трансляциями 21–28 мая
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        name: 'Чемпионат Европы (EOC)',
        // сайт не работает: eoc2016.cz
        link: [
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/4852',
        coord: [50.229722, 17.204722],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20160521_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-21',
        name: 'EOC #1, спринт-эстафета',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5352',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/20160521_1/',
            '2': 'https://www.tulospalvelu.fi/gps/20160521_2/',
            '3': 'https://www.tulospalvelu.fi/gps/20160521_3/',
            '4': 'https://www.tulospalvelu.fi/gps/20160521_4/'
        },
        coord: [50.229722, 17.204722],
        fmt: 'sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20160522_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-22',
        name: 'EOC #2, спринт (квалификация и финал)',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5094',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20160522MFA/',
            'W': 'https://www.tulospalvelu.fi/gps/20160522WFA/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/05/22/eoc-sprint-2016-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=175572',
            // 'https://omaps.worldofo.com/?id=175584',
        ],
        coord: [50.229722, 17.204722],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20160523_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-23',
        name: 'EOC #3, лонг (квалификация)',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20160523MQA/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20160523MQB/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20160523MQC/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20160523WQA/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20160523WQB/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20160523WQC/'
        },
        coord: [50.229722, 17.204722],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20160524_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-24',
        name: 'EOC #4, лонг',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5096',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20160524MFA/',
            'W': 'https://www.tulospalvelu.fi/gps/20160524WFA/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/05/24/eoc-2016-long-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=175820',
            // 'https://omaps.worldofo.com/?id=175821',
        ],
        coord: [50.229722, 17.204722],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20160526_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-26',
        name: 'EOC #5, миддл (квалификация)',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20160526MQA/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20160526MQB/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20160526MQC/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20160526WQA/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20160526WQB/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20160526WQC/'
        },
        coord: [50.229722, 17.204722],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20160527_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-27',
        name: 'EOC #6, миддл',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5098',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20160527MFA/',
            'W': 'https://www.tulospalvelu.fi/gps/20160527WFA/',
            'W-B': 'https://www.tulospalvelu.fi/gps/20160527WFB/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/05/28/eoc-middle-2016-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=176081',
            // 'https://omaps.worldofo.com/?id=176110',
        ],
        coord: [50.229722, 17.204722],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20160528_1',
        parent: 'IOF_20160520_1',
        date: '2016-05-28',
        name: 'EOC #7, эстафета',
        place: 'Jeseník, Czech Republic (Есеник, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5099',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20160528M_1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20160528M_2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20160528M_3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20160528W_1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20160528W_2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20160528W_3/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/05/29/eoc-2016-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=176135',
            // 'https://omaps.worldofo.com/?id=176136',
            // 'https://omaps.worldofo.com/?id=176137',
            // 'https://omaps.worldofo.com/?id=176138',
            // 'https://omaps.worldofo.com/?id=176139',
            // 'https://omaps.worldofo.com/?id=176140',
        ],
        coord: [50.229722, 17.204722],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20160820_1',
        date: '2016-08-20',
        endDate: '2016-08-27',
        place: 'Strömstad, Tanum, Sweden (Стрёмстад, Танум, Швеция)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2016.info
        link: [
            'http://woc2016.se',
            'https://www.woc2016.se/',
            'https://en.wikipedia.org/wiki/2016_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2016'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/4865',
        maps: 'http://news.worldofo.com/wp-content/uploads/2016/08/map.png',
        photo: 'https://orienteering-my.sharepoint.com/:f:/g/personal/malin_fuhr_orienteering_sport/Ej6D6QUAGqtJkFCUAsJiuDsBoFIxYLMACh0keBpE_m3Ipg?e=7CXBd4',
        coord: [58.933333, 11.183333],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20160820_2',
        parent: 'IOF_20160820_1',
        date: '2016-08-20',
        name: 'WOC #1, спринт',
        place: 'Strömstad, Tanum, Sweden (Стрёмстад, Танум, Швеция)',
        res: [
            'https://eventor.orienteering.org/Documents/Event/935/1/Official-results-MEN',
            'https://eventor.orienteering.org/Documents/Event/936/1/Official-results-WOMEN'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20160820WOCSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/20160820WOCSprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/08/20/woc-2016-sprint-maps-results/',
            // 'https://omaps.worldofo.com/?id=184459',
            // 'https://omaps.worldofo.com/?id=184460',
        ],
        coord: [58.933333, 11.183333],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20160821_1',
        parent: 'IOF_20160820_1',
        date: '2016-08-21',
        name: 'WOC #2, спринт-эстафета',
        place: 'Strömstad, Tanum, Sweden (Стрёмстад, Танум, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5357',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/20160821WOCSrelay1/',
            '2': 'https://www.tulospalvelu.fi/gps/20160821WOCSrelay2/',
            '3': 'https://www.tulospalvelu.fi/gps/20160821WOCSrelay3/',
            '4': 'https://www.tulospalvelu.fi/gps/20160821WOCSrelay4/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/08/21/woc-sprint-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=184540',
            // 'https://omaps.worldofo.com/?id=184541',
        ],
        coord: [58.933333, 11.183333],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20160823_1',
        parent: 'IOF_20160820_1',
        date: '2016-08-23',
        name: 'WOC #3, миддл',
        place: 'Strömstad, Tanum, Sweden (Стрёмстад, Танум, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5355',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20160823WOCMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/20160823WOCMiddleW/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/08/23/woc-2016-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=184752',
            // 'https://omaps.worldofo.com/?id=184753',
            'http://news.worldofo.com/wp-content/uploads/2016/08/mapmiddlew.png'
        ],
        coord: [58.933333, 11.183333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20160825_1',
        parent: 'IOF_20160820_1',
        date: '2016-08-25',
        name: 'WOC #4, лонг',
        place: 'Strömstad, Tanum, Sweden (Стрёмстад, Танум, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5356',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20160825WOCLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/20160825WOCLongW/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/08/25/woc-2016-long-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=184935',
            // 'https://omaps.worldofo.com/?id=184947',
        ],
        coord: [58.933333, 11.183333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20160827_1',
        parent: 'IOF_20160820_1',
        date: '2016-08-27',
        name: 'WOC #5, эстафета',
        place: 'Strömstad, Tanum, Sweden (Стрёмстад, Танум, Швеция)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5358',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20160827WOCRelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20160827WOCRelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20160827WOCRelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20160827WOCRelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20160827WOCRelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20160827WOCRelayW3/'
        },
        maps: [
            // 'https://news.worldofo.com/2016/08/27/woc-relay-2016-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=185058',
            // 'https://omaps.worldofo.com/?id=185059',
        ],
        coord: [58.933333, 11.183333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20170207_1',
        date: '2017-02-07',
        endDate: '2017-02-12', // ru.wikipedia: 6–12 февраля
        place: 'Imatra, Finland (Иматра, Финляндия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/5415',
        gps: {
            '7-M': 'https://www.tulospalvelu.fi/gps/2017esocMsprint/',
            '7-W': 'https://www.tulospalvelu.fi/gps/2017esocWsprint/',
            '8-1': 'https://www.tulospalvelu.fi/gps/2017esocWsrelay/',
            '8-2': 'https://www.tulospalvelu.fi/gps/2017esocMsrelay/',
            '9-M': 'https://www.tulospalvelu.fi/gps/2017esocMlong/',
            '9-W': 'https://www.tulospalvelu.fi/gps/2017esocWlong/',
            '11-M': 'https://www.tulospalvelu.fi/gps/2017esocMmiddle/',
            '11-W': 'https://www.tulospalvelu.fi/gps/2017esocWmiddle/',
            '12-M': 'https://www.tulospalvelu.fi/gps/2017esocMrelay/',
            '12-W': 'https://www.tulospalvelu.fi/gps/2017esocWrelay/'
        },
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20170306_1',
        date: '2017-03-06',
        endDate: '2017-03-12',
        place: 'Krasnoyarsk, Russia (Красноярск, Россия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJe4MsWzZTnjCy0wCTgcVxA3',
        coord: [56.008889, 92.871944],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20170630_1',
        date: '2017-06-30',
        endDate: '2017-07-07',
        place: 'Tartu, Estonia (Тарту, Эстония)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://woc2017.ee/',
            'https://en.wikipedia.org/wiki/2017_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2017'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/4867',
            'https://eventor.orienteering.org/Events/ResultList?eventId=5738'
        ],
        photo: 'https://orienteering-my.sharepoint.com/:f:/g/personal/malin_fuhr_orienteering_sport/EnMAwcvnXk1Fi3Ftjr6sWnMBDRuUu_HEK0dHJLB9MhsOUA?e=Tdzejb',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJcxAXjF6EIXBsLan49TmZ40',
        coord: [58.38, 26.7225],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20170701_1',
        parent: 'IOF_20170630_1',
        date: '2017-07-01',
        name: 'WOC #1, спринт',
        place: 'Tartu, Estonia (Тарту, Эстония)',
        res: [
            'https://eventor.orienteering.org/Documents/Event/1507/1/Official-Results-Women',
            'https://eventor.orienteering.org/Documents/Event/1508/1/Official-Results-Men'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017wocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2017wocSprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2017/07/01/woc-2017-sprint-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=211667',
            // 'https://omaps.worldofo.com/?id=211683',
            // 'https://omaps.worldofo.com/index.php?id=211683',
        ],
        video: [
            'https://www.youtube.com/watch?v=Tifkj-Glfcg',
            'https://www.youtube.com/watch?v=IhD9wzvQIkQ',
            'https://www.youtube.com/watch?v=vfuZTi63zA0'
        ],
        coord: [58.38, 26.7225],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20170702_1',
        parent: 'IOF_20170630_1',
        date: '2017-07-02',
        name: 'WOC #2, спринт-эстафета',
        place: 'Tartu, Estonia (Тарту, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5739',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2017wocSRelay1/',
            '2': 'https://www.tulospalvelu.fi/gps/2017wocSRelay2/',
            '3': 'https://www.tulospalvelu.fi/gps/2017wocSRelay3/',
            '4': 'https://www.tulospalvelu.fi/gps/2017wocSRelay4/'
        },
        maps: [
            // 'https://news.worldofo.com/2017/07/02/woc-2017-sprint-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=211746',
            // 'https://omaps.worldofo.com/?id=211747',
            // 'https://omaps.worldofo.com/index.php?id=211747',
        ],
        video: 'https://www.youtube.com/watch?v=TJxFyFtZpEM',
        coord: [58.38, 26.7225],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20170704_1',
        parent: 'IOF_20170630_1',
        date: '2017-07-04',
        name: 'WOC #3, лонг',
        place: 'Tartu, Estonia (Тарту, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5740',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017wocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2017wocLongW/'
        },
        maps: [
            // 'https://news.worldofo.com/2017/07/04/woc-long-2017-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=211922',
            // 'https://omaps.worldofo.com/?id=211923',
        ],
        video: [
            'https://www.youtube.com/watch?v=CU17EAMR-50',
            'https://www.youtube.com/watch?v=tFs5qf_KcDI'
        ],
        coord: [58.38, 26.7225],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20170706_1',
        parent: 'IOF_20170630_1',
        date: '2017-07-06',
        name: 'WOC #4, миддл',
        place: 'Tartu, Estonia (Тарту, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5741',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017wocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2017wocMiddleW/'
        },
        maps: [
            // 'https://news.worldofo.com/2017/07/06/woc-2017-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=212032',
            // 'https://omaps.worldofo.com/?id=212034',
        ],
        video: [
            'https://www.youtube.com/watch?v=IZeKsIjGDho',
            'https://www.youtube.com/watch?v=bCQ1O2xOEQ0'
        ],
        coord: [58.38, 26.7225],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20170707_1',
        parent: 'IOF_20170630_1',
        date: '2017-07-07',
        name: 'WOC #5, эстафета',
        place: 'Tartu, Estonia (Тарту, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5742',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2017wocRelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2017wocRelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2017wocRelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2017wocRelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2017wocRelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2017wocRelayW3/'
        },
        maps: [
            // 'https://news.worldofo.com/2017/07/07/woc-2017-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=212117',
            // 'https://omaps.worldofo.com/?id=212118',
            // 'https://omaps.worldofo.com/?id=212119',
            // 'https://omaps.worldofo.com/?id=212120',
            // 'https://omaps.worldofo.com/?id=212121',
            // 'https://omaps.worldofo.com/?id=212122',
        ],
        video: [
            'https://www.youtube.com/watch?v=yKQ6eCXYRZA',
            'https://www.youtube.com/watch?v=MM4iDgtNEkg'
        ],
        coord: [58.38, 26.7225],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20180203_1',
        date: '2018-02-03',
        endDate: '2018-02-08',
        place: 'Velingrad, Bulgaria (Велинград, Болгария)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2018',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/5472',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeQBH3O4OUMysSJa8ClcLHQ',
        coord: [42.016667, 24.0],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20180505_1',
        date: '2018-05-05',
        endDate: '2018-05-13', // по cs.wikipedia; en: 5–12 мая — лонг 13 мая по GPS
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'http://www.eoc2018.ch/',
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/5147',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJdgoSKLWw5Zx0CZvk5e5IOM',
        coord: [46.033333, 8.933333],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20180506_1',
        parent: 'IOF_20180505_1',
        date: '2018-05-06',
        name: 'EOC #1, спринт (квалификация и финал)',
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5400',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20180506_SF_M/',
            'W': 'https://www.tulospalvelu.fi/gps/20180506_SF_W/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/05/06/eoc-2018-sprint-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=cjBs70n8S-M',
        coord: [46.033333, 8.933333],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20180508_1',
        parent: 'IOF_20180505_1',
        date: '2018-05-08',
        name: 'EOC #2, миддл (квалификация)',
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20180508_MQ_MA/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20180508_MQ_MB/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20180508_MQ_MC/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20180508_MQ_WA/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20180508_MQ_WB/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20180508_MQ_WC/'
        },
        video: 'https://www.youtube.com/watch?v=aE6lt0Q4YMU',
        coord: [46.033333, 8.933333],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20180509_1',
        parent: 'IOF_20180505_1',
        date: '2018-05-09',
        name: 'EOC #3, миддл',
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=5402',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20180509_MF_M/',
            'W': 'https://www.tulospalvelu.fi/gps/20180509_MF_W/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/05/09/eoc-2018-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=231500',
            // 'https://omaps.worldofo.com/?id=231501',
        ],
        video: 'https://www.youtube.com/watch?v=T6QcPAAWKKU',
        coord: [46.033333, 8.933333],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20180510_1',
        parent: 'IOF_20180505_1',
        date: '2018-05-10',
        name: 'EOC #4, спринт-эстафета',
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/20180510_SR_1/',
            '2': 'https://www.tulospalvelu.fi/gps/20180510_SR_2/',
            '3': 'https://www.tulospalvelu.fi/gps/20180510_SR_3/',
            '4': 'https://www.tulospalvelu.fi/gps/20180510_SR_4/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/05/10/eoc-2018-sprint-relay-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=LalVMH67jQY',
        coord: [46.033333, 8.933333],
        fmt: 'sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20180512_1',
        parent: 'IOF_20180505_1',
        date: '2018-05-12',
        name: 'EOC #5, эстафета',
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20180512_R_M1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20180512_R_M2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20180512_R_M3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20180512_R_W1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20180512_R_W2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20180512_R_W3/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/05/13/eoc-2018-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=231736',
            // 'https://omaps.worldofo.com/?id=231737',
            // 'https://omaps.worldofo.com/?id=231738',
            // 'https://omaps.worldofo.com/?id=231739',
            // 'https://omaps.worldofo.com/?id=231740',
        ],
        video: 'https://www.youtube.com/watch?v=RWdG82IXjZY',
        coord: [46.033333, 8.933333],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20180513_1',
        parent: 'IOF_20180505_1',
        date: '2018-05-13',
        name: 'EOC #6, лонг',
        place: 'Cadempino, Ticino, Switzerland (Кадемпино, Тичино, Швейцария)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20180513_L_M/',
            'W': 'https://www.tulospalvelu.fi/gps/20180513_L_W/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/05/14/eoc-2018-long-quick-gps-analysis-maps-results/',
            // 'https://omaps.worldofo.com/?id=231807',
            // 'https://omaps.worldofo.com/?id=231808',
        ],
        video: 'https://www.youtube.com/watch?v=wEXRkZt5EUU',
        coord: [46.033333, 8.933333],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20180804_1',
        date: '2018-08-04',
        endDate: '2018-08-11',
        place: 'Riga, Sigulda, Latvia (Рига, Сигулда, Латвия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2018.lv
        link: [
            'https://en.wikipedia.org/wiki/2018_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2018'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/5120',
            'https://eventor.orienteering.org/Events/ResultList?eventId=5457',
            'https://eventor.orienteering.org/Events/ResultList?eventId=5459'
        ],
        photo: 'https://orienteering-my.sharepoint.com/:f:/g/personal/malin_fuhr_orienteering_sport/EoybHP7lvxBHgd3SWIaPbWoBurI95T-PeFAqVajTmU1y8A?e=HFJwun',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJdRoYmwc7GgUOoNfQZc37pp',
        coord: [56.948889, 24.106389],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20180804_2',
        parent: 'IOF_20180804_1',
        date: '2018-08-04',
        name: 'WOC #1, спринт',
        place: 'Riga, Sigulda, Latvia (Рига, Сигулда, Латвия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2018wocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2018wocSprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/08/04/woc-2018-sprint-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=237369',
            // 'https://omaps.worldofo.com/?id=237370',
        ],
        photo: 'https://photos.google.com/share/AF1QipNN0Ll0MPv0kFABT8Q4HcmtuPHgDlPAt93pChk-AXia2K8J6uZNe8kcAHKWfBo40Q?key=ZEpRZGlGa2FNajJSQ3dLYUxSR0kxRnA4WG80UXpB',
        coord: [56.948889, 24.106389],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20180805_1',
        parent: 'IOF_20180804_1',
        date: '2018-08-05',
        name: 'WOC #2, спринт-эстафета',
        place: 'Riga, Sigulda, Latvia (Рига, Сигулда, Латвия)',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2018wocSprintR1/',
            '2': 'https://www.tulospalvelu.fi/gps/2018wocSprintR2/',
            '3': 'https://www.tulospalvelu.fi/gps/2018wocSprintR3/',
            '4': 'https://www.tulospalvelu.fi/gps/2018wocSprintR4/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/08/05/woc-2018-sprint-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=237441',
            // 'https://omaps.worldofo.com/?id=237442',
            // 'https://omaps.worldofo.com/?id=237443',
            // 'https://omaps.worldofo.com/?id=237444',
        ],
        photo: 'https://photos.google.com/share/AF1QipPOWeCdvVNN3J3fe0IG9Y7AI6EaUy5_yTQvb8PVTRQ_tYX52Cjv-ZB2srxbtoLLRQ?key=cW14cXlyd0JBMFBMZ1ctQUJ1bnZWT2FlOS1EZzN3',
        video: 'https://www.youtube.com/watch?v=knwfWX10AkM',
        coord: [56.948889, 24.106389],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20180807_1',
        parent: 'IOF_20180804_1',
        date: '2018-08-07',
        name: 'WOC #3, миддл',
        place: 'Riga, Sigulda, Latvia (Рига, Сигулда, Латвия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2018wocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2018wocMiddleW/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/08/07/woc-2018-middle-maps-results-analysis/',
            // 'https://omaps.worldofo.com/?id=237552',
            // 'https://omaps.worldofo.com/?id=237575',
        ],
        photo: 'https://photos.google.com/share/AF1QipPW-JF0TBuTpKy0F7zZhMI8VUKCpgViBaIFmGWRgj5xLByPcWqQCkC8q_T8N-dwCQ?key=RHdwbUZ5Qzlpd2dEMmtKOGQzd24xV213bHpJNDh3',
        video: 'https://www.youtube.com/watch?v=p4gGIPayCGU',
        coord: [56.948889, 24.106389],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20180809_1',
        parent: 'IOF_20180804_1',
        date: '2018-08-09',
        name: 'WOC #4, эстафета',
        place: 'Riga, Sigulda, Latvia (Рига, Сигулда, Латвия)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2018wocRelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2018wocRelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2018wocRelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2018wocRelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2018wocRelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2018wocRelayW3/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/08/09/woc-2018-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=237657',
            // 'https://omaps.worldofo.com/?id=237658',
            // 'https://omaps.worldofo.com/?id=237660',
            // 'https://omaps.worldofo.com/?id=237662',
            // 'https://omaps.worldofo.com/?id=237664',
            // 'https://omaps.worldofo.com/?id=237666',
        ],
        photo: 'https://photos.google.com/share/AF1QipMqImdaOse-akkeWP258izSREdyn0gJtSQtBocZ8oSQ8gUtitcI29lns-HLwqiLFQ?key=aTZiME9WMU53R2N4N0dmQnNIWDhzb1J6SkZpUmdR',
        video: 'https://www.youtube.com/watch?v=ZSH6WQtwTzU',
        coord: [56.948889, 24.106389],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20180811_1',
        parent: 'IOF_20180804_1',
        date: '2018-08-11',
        name: 'WOC #5, лонг',
        place: 'Riga, Sigulda, Latvia (Рига, Сигулда, Латвия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2018wocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2018wocLongW/'
        },
        maps: [
            // 'https://news.worldofo.com/2018/08/11/woc-2018-long-maps-results-analysis/',
            // 'https://omaps.worldofo.com/?id=237732',
            // 'https://omaps.worldofo.com/?id=237745',
        ],
        photo: 'https://photos.google.com/share/AF1QipOCPQdg-xS-dhUVyv0TKR2bbyE7HKxlN_7MupBSZU_yeJIe9yfEzpUHhyPUQPoHwA?key=c3hRbVMtbzN4YmM2N2EwS3lkUDVBSWRFY1VOWGhn',
        video: 'https://www.youtube.com/watch?v=En2zzzH-1nI',
        coord: [56.948889, 24.106389],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20190206_1',
        date: '2019-02-06',
        endDate: '2019-02-11', // de: 3–11 февраля; fi: 5–11
        place: 'Sarıkamış, Turkey (Сарыкамыш, Турция)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2019',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5830',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6258'
        ],
        coord: [40.338056, 42.573056],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20190319_1',
        date: '2019-03-19',
        endDate: '2019-03-24',
        place: 'Piteå, Sweden (Питео, Швеция)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        gps: {
            '20-M': 'https://www.tulospalvelu.fi/gps/2019wsoclongM/',
            '20-W': 'https://www.tulospalvelu.fi/gps/2019wsoclongW/',
            '21-M': 'https://www.tulospalvelu.fi/gps/2019wsocsprintM/',
            '21-W': 'https://www.tulospalvelu.fi/gps/2019wsocsprintW/',
            '23-M': 'https://www.tulospalvelu.fi/gps/2019wsocmiddleM/',
            '23-W': 'https://www.tulospalvelu.fi/gps/2019wsocmiddleW/',
            '24-M': 'https://www.tulospalvelu.fi/gps/2019wsocrelayM/',
            '24-W': 'https://www.tulospalvelu.fi/gps/2019wsocrelayW/'
        },
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJcsnEVLqJCsgZ1tgpD_x4nn',
        coord: [65.316667, 21.483333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20190813_1',
        date: '2019-08-13',
        endDate: '2019-08-17',
        place: 'Østfold, Norway (Эстфолл, Норвегия)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://woc2019.no/',
            'https://en.wikipedia.org/wiki/2019_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2019'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/5326',
            'https://eventor.orienteering.org/Documents/Event/3180/1/Official-Results-Men',
            'https://eventor.orienteering.org/Documents/Event/3183/1/Official-Results-Women',
            'https://eventor.orienteering.org/Documents/Event/3192/1/Official-Results-Women',
            'https://eventor.orienteering.org/Documents/Event/3194/1/Official-Results-Men-Middle-Final',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6316',
            'https://eventor.orienteering.org/Documents/Event/3174/1/Official-Results-Middle-Qualification'
        ],
        gps: {
            'all': 'https://www.tractrac.com/event-page/event_20190811_WOC/1639/'
        },
        maps: [
            // 'https://news.worldofo.com/2019/08/16/woc-middle-2019-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=258747',
            // 'https://omaps.worldofo.com/?id=258748',
            // 'https://news.worldofo.com/2019/08/14/woc-long-2019-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=258681',
            // 'https://omaps.worldofo.com/?id=258682',
            // 'https://news.worldofo.com/2019/08/17/woc-relay-2019-map-and-results/',
        ],
        photo: [
            'https://photos.app.goo.gl/N1VQ14H7VmaREqdZ8',
            'https://photos.app.goo.gl/YMTCPrKhwGNDYPvQ8',
            'https://photos.app.goo.gl/2CXUGtiQyRn7nkkY7',
            'https://photos.app.goo.gl/kisbrsDv1Kwp5LCZ9',
            'https://orienteering-my.sharepoint.com/:f:/g/personal/malin_fuhr_orienteering_sport/Etk367tG-yhCsosNHmXml7ABlnkElU8ywkMy0RJkbclAHQ?e=jggFoX'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJcdxRnZUiHgm9B6KrlNYRoQ',
        coord: [59.333333, 11.333333], // координаты региона, не населённого пункта — уточнить
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20200308_1',
        date: '2020-03-08',
        endDate: '2020-03-15', // fi.wikipedia: 10–15 марта
        place: 'Khanty-Mansiysk, Russia (Ханты-Мансийск, Россия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://fi.wikipedia.org/wiki/Hiihtosuunnistuksen_Euroopan-mestaruuskilpailut_2020',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/6119',
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJfbmhWKfRJaSmtm3iLnsKT_',
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJfnPGWStL0WAC5WPo2CZj1X'
        ],
        coord: [61.0, 69.0],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20200310_1',
        parent: 'IOF_20200308_1',
        date: '2020-03-10',
        name: 'SKI-EOC #1, спринт',
        place: 'Khanty-Mansiysk, Russia (Ханты-Мансийск, Россия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2020esocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2020esocSprintW/'
        },
        coord: [61.0, 69.0],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20200311_1',
        parent: 'IOF_20200308_1',
        date: '2020-03-11',
        name: 'SKI-EOC #2, миддл',
        place: 'Khanty-Mansiysk, Russia (Ханты-Мансийск, Россия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2020esocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2020esocMiddleW/'
        },
        coord: [61.0, 69.0],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20200312_1',
        parent: 'IOF_20200308_1',
        date: '2020-03-12',
        name: 'SKI-EOC #3, спринт-эстафета',
        place: 'Khanty-Mansiysk, Russia (Ханты-Мансийск, Россия)',
        gps: {
            '135': 'https://www.tulospalvelu.fi/gps/2020esocSRelay135/',
            '246': 'https://www.tulospalvelu.fi/gps/2020esocSRelay246/'
        },
        coord: [61.0, 69.0],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20200314_1',
        parent: 'IOF_20200308_1',
        date: '2020-03-14',
        name: 'SKI-EOC #4, лонг',
        place: 'Khanty-Mansiysk, Russia (Ханты-Мансийск, Россия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2020esocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2020esocLongW/'
        },
        coord: [61.0, 69.0],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20200315_1',
        parent: 'IOF_20200308_1',
        date: '2020-03-15',
        name: 'SKI-EOC #5, эстафета',
        place: 'Khanty-Mansiysk, Russia (Ханты-Мансийск, Россия)',
        gps: {
            'M-12': 'https://www.tulospalvelu.fi/gps/2020esocRelayM12/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2020esocRelayM3/',
            'W-12': 'https://www.tulospalvelu.fi/gps/2020esocRelayW12/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2020esocRelayW3/'
        },
        coord: [61.0, 69.0],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20210224_1',
        date: '2021-02-24', // в таблице en.wikipedia (World Ski Orienteering Championships): 22–28 февраля
        endDate: '2021-02-28',
        place: 'Kääriku, Estonia (Кяэрику, Эстония)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'http://wsoc2021.peko.ee/',
            'https://en.wikipedia.org/wiki/2021_World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6482',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJdiECUrMbJ5mCkbZ6GMj0IQ',
        coord: [58.006944, 26.395],
        type: 'SKI',
        fmt: 'sprint, middle, pursuit, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20210513_1',
        date: '2021-05-13',
        endDate: '2021-05-16',
        place: 'Neuchâtel, Switzerland (Невшатель, Швейцария)',
        name: 'Чемпионат Европы (EOC)',
        // сайт не работает: eoc2021.ch
        link: [
            'https://en.wikipedia.org/wiki/2021_European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6731',
        gps: {
            'all': 'https://tractrac.com/event-page/event_20210430_EGKEuropea1/2007'
        },
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJfZnr-nz0xJwcHyxrDz78i-',
        coord: [47.0, 6.933333],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20210513_2',
        parent: 'IOF_20210513_1',
        date: '2021-05-13',
        name: 'EOC #1, спринт-эстафета',
        place: 'Neuchâtel, Switzerland (Невшатель, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=6750',
        gps: {
            '1': 'https://3drerun.worldofo.com/2d/?server=em.club.tractrac.com&eventid=6ab2de10-54c3-0139-b02a-60a44ce903c3&liveid=ee6acc70-9241-0139-281a-60a44ce903c3',
            '2': 'https://3drerun.worldofo.com/2d/?server=em.club.tractrac.com&eventid=6ab2de10-54c3-0139-b02a-60a44ce903c3&liveid=ab3c2710-9241-0139-27e8-60a44ce903c3',
            '3': 'https://3drerun.worldofo.com/2d/?server=em.club.tractrac.com&eventid=6ab2de10-54c3-0139-b02a-60a44ce903c3&liveid=32a0d970-949f-0139-3081-60a44ce903c3',
            '4': 'https://3drerun.worldofo.com/2d/?server=em.club.tractrac.com&eventid=6ab2de10-54c3-0139-b02a-60a44ce903c3&liveid=2182f2a0-949f-0139-3069-60a44ce903c3'
        },
        maps: [
            // 'https://news.worldofo.com/2021/05/13/eoc-2021-sprint-relay-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=vrBRvPEcjZA',
        coord: [47.0, 6.933333],
        fmt: 'sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20210514_1',
        parent: 'IOF_20210513_1',
        date: '2021-05-14',
        name: 'EOC #2, нокаут-спринт (квалификация)',
        place: 'Neuchâtel, Switzerland (Невшатель, Швейцария)',
        coord: [47.0, 6.933333],
        fmt: 'knock-out',
        start: 'EOC'
    },
    {
        id: 'IOF_20210515_1',
        parent: 'IOF_20210513_1',
        date: '2021-05-15',
        name: 'EOC #3, нокаут-спринт (финалы)',
        place: 'Neuchâtel, Switzerland (Невшатель, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=6749',
        maps: [
            // 'https://news.worldofo.com/2021/05/15/eoc-2021-knock-out-sprint-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=04M7GnbOT1I',
        coord: [47.0, 6.933333],
        fmt: 'knock-out',
        start: 'EOC'
    },
    {
        id: 'IOF_20210516_1',
        parent: 'IOF_20210513_1',
        date: '2021-05-16',
        name: 'EOC #4, спринт',
        place: 'Neuchâtel, Switzerland (Невшатель, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=6748',
        maps: [
            // 'https://news.worldofo.com/2021/05/16/eoc-2021-individual-sprint-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=EYcDWTO8tKo',
        coord: [47.0, 6.933333],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20210703_1',
        date: '2021-07-03',
        endDate: '2021-07-09',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://woc2021.cz/wp-content/uploads/2021/07/Middle-Final-Men.pdf',
            'https://woc2021.cz/wp-content/uploads/2021/07/Sprint-Final-Men.pdf',
            'https://en.wikipedia.org/wiki/2021_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2021'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/5814',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJcProRnV7rbXnDjr8zuke4N',
        coord: [50.564722, 14.655556],
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20210703_2',
        parent: 'IOF_20210703_1',
        date: '2021-07-03',
        name: 'WOC #1, спринт (квалификация и финал)',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7059',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20210703MA/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20210703MB/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20210703MC/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20210703WA/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20210703WB/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20210703WC/',
            'M': 'https://www.tulospalvelu.fi/gps/20210703M/',
            'W': 'https://www.tulospalvelu.fi/gps/20210703W/'
        },
        maps: [
            // 'https://news.worldofo.com/2021/07/03/woc-sprint-2021-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=301149',
            // 'https://omaps.worldofo.com/?id=301150',
            // 'https://omaps.worldofo.com/?id=301151',
            // 'https://omaps.worldofo.com/?id=301152',
            // 'https://omaps.worldofo.com/?id=301153',
            // 'https://omaps.worldofo.com/?id=301154',
            // 'https://omaps.worldofo.com/?id=301168',
            // 'https://omaps.worldofo.com/?id=301169',
        ],
        photo: [
            'https://photos.google.com/share/AF1QipMD6bzZb_e6YKoeNCXcR7Ssy7FvDSOscjuK876ikjpCXNlDfMW5ZcQiF1TCs3L2eg?key=blljeVVHbnlSWG1NNHh0dnVqZGo2cnRESkFhenpB',
            'https://photos.app.goo.gl/k7cLmu5ZuDiPw1tt6'
        ],
        coord: [50.564722, 14.655556],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20210704_1',
        parent: 'IOF_20210703_1',
        date: '2021-07-04',
        name: 'WOC #2, спринт-эстафета',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7060',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/20210704SR1/',
            '2': 'https://www.tulospalvelu.fi/gps/20210704SR2/',
            '3': 'https://www.tulospalvelu.fi/gps/20210704SR3/',
            '4': 'https://www.tulospalvelu.fi/gps/20210704SR4/'
        },
        maps: [
            // 'https://news.worldofo.com/2021/07/04/woc-2021-sprint-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=301232',
            // 'https://omaps.worldofo.com/?id=301233',
            // 'https://omaps.worldofo.com/?id=301234',
            // 'https://omaps.worldofo.com/?id=301235',
        ],
        photo: 'https://photos.app.goo.gl/Az8fknv53CvZSmRZ9',
        coord: [50.564722, 14.655556],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20210706_1',
        parent: 'IOF_20210703_1',
        date: '2021-07-06',
        name: 'WOC #3, миддл (квалификация и финал)',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7062',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20210706MA/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20210706MB/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20210706MC/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20210706WA/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20210706WB/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20210706WC/',
            'M': 'https://www.tulospalvelu.fi/gps/20210706M/',
            'W': 'https://www.tulospalvelu.fi/gps/20210706W/'
        },
        maps: [
            // 'https://news.worldofo.com/2021/07/06/woc-2021-middle-maps-results-and-splits-analysis/',
            // 'https://omaps.worldofo.com/?id=301352',
            // 'https://omaps.worldofo.com/?id=301353',
        ],
        photo: [
            'https://photos.app.goo.gl/KyuitLxRv8ZfRHR38',
            'https://photos.app.goo.gl/en3fQJwSKJBp99gd9'
        ],
        coord: [50.564722, 14.655556],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20210708_1',
        parent: 'IOF_20210703_1',
        date: '2021-07-08',
        name: 'WOC #4, эстафета',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7063',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20210708M1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20210708M2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20210708M3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20210708W1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20210708W2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20210708W3/'
        },
        maps: [
            // 'https://news.worldofo.com/2021/07/08/woc-relay-maps-and-results-2/',
            // 'https://omaps.worldofo.com/?id=301418',
            // 'https://omaps.worldofo.com/?id=301419',
            // 'https://omaps.worldofo.com/?id=301420',
            // 'https://omaps.worldofo.com/?id=301421',
            // 'https://omaps.worldofo.com/?id=301422',
            // 'https://omaps.worldofo.com/?id=301423',
        ],
        photo: 'https://photos.app.goo.gl/aZjZog34FkzBFCiC6',
        coord: [50.564722, 14.655556],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20210709_1',
        parent: 'IOF_20210703_1',
        date: '2021-07-09',
        name: 'WOC #5, лонг',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7064',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20210709M/',
            'W': 'https://www.tulospalvelu.fi/gps/20210709W/'
        },
        maps: [
            // 'https://news.worldofo.com/2021/07/09/woc-2021-long-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=301488',
            // 'https://omaps.worldofo.com/?id=301489',
        ],
        photo: 'https://photos.app.goo.gl/At6zUM4KE2Ewa8oDA',
        coord: [50.564722, 14.655556],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20220122_1',
        date: '2022-01-22',
        endDate: '2022-01-27', // sv.wikipedia: 21–27 января
        place: 'Chepelare, Bulgaria (Чепеларе, Болгария)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/6981',
        coord: [41.725833, 24.684444],
        type: 'SKI',
        fmt: 'sprint, middle, long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20220315_1',
        date: '2022-03-15',
        endDate: '2022-03-19',
        place: 'Kemi, Keminmaa, Finland (Кеми, Кеминмаа, Финляндия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://wsoc2022.com/',
            'https://en.wikipedia.org/wiki/2022_World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6499',
        gps: {
            '15-M': 'https://www.tulospalvelu.fi/gps/2022wsocSprintM/',
            '15-W': 'https://www.tulospalvelu.fi/gps/2022wsocSprintW/',
            '16-M': 'https://www.tulospalvelu.fi/gps/2022wsocPursuitM/',
            '16-W': 'https://www.tulospalvelu.fi/gps/2022wsocPursuitW/',
            '18-M': 'https://www.tulospalvelu.fi/gps/2022wsocMiddleM/',
            '18-W': 'https://www.tulospalvelu.fi/gps/2022wsocMiddleW/',
            '19-M-246': 'https://www.tulospalvelu.fi/gps/2022wsocRelayM/',
            '19-W-135': 'https://www.tulospalvelu.fi/gps/2022wsocRelayW/'
        },
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeH_izGbbC_0VgM4qi3N0WM',
        coord: [65.736111, 24.563611],
        type: 'SKI',
        fmt: 'sprint, middle, pursuit, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20220626_1',
        date: '2022-06-26',
        endDate: '2022-06-30',
        place: 'Kolding, Fredericia, Vejle, Denmark (Кольдинг, Фредерисия, Вайле, Дания)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2022.dk
        link: 'https://en.wikipedia.org/wiki/2022_World_Orienteering_Championships',
        res: [
            'https://eventor.orienteering.org/Events/Show/6864',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7448',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450'
        ],
        gps: {
            'all': 'https://tractrac.com/event-page/event_20220626_WorldOrien/2381'
        },
        maps: [
            // 'https://news.worldofo.com/2022/07/01/woc-2022-individual-sprint-maps-results-and-analysis/',
            // 'https://news.worldofo.com/2022/06/29/woc-2022-knock-out-sprint-maps-results-and-analysis/',
            // 'https://news.worldofo.com/2022/06/27/woc-2022-sprint-relay-maps-results-and-analysis/',
        ],
        photo: [
            'https://photos.google.com/share/AF1QipOsBChMAsaLvZ7LVl5AJnLQ_9H6vRKW0iha4jzCb2cSTjRbMw2ZD4mrkMOUqp2Vqw?key=TU5vN24wdWpiMHp1ZTVSckMyZGJYbHBGVlYwaU9R',
            'https://photos.app.goo.gl/LoDy1itTNSBMQEhB7',
            'https://photos.app.goo.gl/MNNyjNP1n7RiGB1R9',
            'https://photos.app.goo.gl/CKN9fxocBgrS3onc9',
            'https://photos.app.goo.gl/4BjqPqVY9DFSVFJV6'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJdrWqAeeID6mbgFaRZc2I-J',
        coord: [55.491667, 9.5],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20220803_1',
        date: '2022-08-03',
        endDate: '2022-08-07', // по cs.wikipedia и GPS; en: 1–7 августа
        place: 'Rakvere, Estonia (Раквере, Эстония)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://eoc2022.ee/',
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6817',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJd3_RwC3wUqnw-u1M9HCluA',
        coord: [59.35, 26.35],
        fmt: 'middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20220803_2',
        parent: 'IOF_20220803_1',
        date: '2022-08-03',
        name: 'EOC #1, миддл (квалификация)',
        place: 'Rakvere, Estonia (Раквере, Эстония)',
        gps: {
            'M-Q': 'https://www.tulospalvelu.fi/gps/2022eocMQmen/',
            'M-QA': 'https://www.tulospalvelu.fi/gps/2022eocMQma/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/2022eocMQmb/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/2022eocMQmc/',
            'W-Q': 'https://www.tulospalvelu.fi/gps/2022eocMQwomen/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/2022eocMQwa/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/2022eocMQwb/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/2022eocMQwc/'
        },
        photo: 'https://photos.app.goo.gl/tXqxfcQa68q3abKQ8',
        coord: [59.35, 26.35],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20220804_1',
        parent: 'IOF_20220803_1',
        date: '2022-08-04',
        name: 'EOC #2, лонг',
        place: 'Rakvere, Estonia (Раквере, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7516',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022eocLm/',
            'W': 'https://www.tulospalvelu.fi/gps/2022eocLw/'
        },
        maps: [
            // 'https://news.worldofo.com/2022/08/05/eoc-2022-long-maps-results-analysis/',
            // 'https://omaps.worldofo.com/?id=323184',
            // 'https://omaps.worldofo.com/?id=323185',
        ],
        photo: 'https://photos.app.goo.gl/s1Q6H4jLAHMkMmMJA',
        video: 'https://www.youtube.com/watch?v=tYyePGNt6nc',
        coord: [59.35, 26.35],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20220806_1',
        parent: 'IOF_20220803_1',
        date: '2022-08-06',
        name: 'EOC #3, миддл',
        place: 'Rakvere, Estonia (Раквере, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7517',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022eocMFma/',
            'W': 'https://www.tulospalvelu.fi/gps/2022eocMFwa/',
            'M-B': 'https://www.tulospalvelu.fi/gps/2022eocMFmb/',
            'W-B': 'https://www.tulospalvelu.fi/gps/2022eocMFwb/'
        },
        maps: [
            // 'https://news.worldofo.com/2022/08/07/eoc-2022-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=323289',
            // 'https://omaps.worldofo.com/?id=323290',
        ],
        photo: 'https://photos.app.goo.gl/FFTyNCnoCzCncADh9',
        video: 'https://www.youtube.com/watch?v=boW9lJmoUCg',
        coord: [59.35, 26.35],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20220807_1',
        parent: 'IOF_20220803_1',
        date: '2022-08-07',
        name: 'EOC #4, эстафета',
        place: 'Rakvere, Estonia (Раквере, Эстония)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7518',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2022eocRm1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2022eocRm2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2022eocRm3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2022eocRw1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2022eocRw2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2022eocRw3/'
        },
        maps: [
            // 'https://news.worldofo.com/2022/08/08/eoc-2022-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=323301',
            // 'https://omaps.worldofo.com/?id=323339',
            // 'https://omaps.worldofo.com/?id=323340',
            // 'https://omaps.worldofo.com/?id=323341',
            // 'https://omaps.worldofo.com/?id=323342',
            // 'https://omaps.worldofo.com/?id=323343',
        ],
        photo: 'https://photos.app.goo.gl/tTbSx5WyGG3ry6A3A',
        video: 'https://www.youtube.com/watch?v=fJjwDKypz7g',
        coord: [59.35, 26.35],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20230130_1',
        date: '2023-01-30',
        endDate: '2023-02-05', // только sv.wikipedia
        place: 'Madona, Latvia (Мадона, Латвия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/7215',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJfk3KZQHunKT70maz3bEAKO',
        coord: [56.8542, 26.2206],
        type: 'SKI',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20230711_1',
        date: '2023-07-11',
        endDate: '2023-07-16',
        place: 'Flims, Laax, Switzerland (Флимс, Лакс, Швейцария)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://woc2023.app/',
            'https://en.wikipedia.org/wiki/2023_World_Orienteering_Championships'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/6496',
            'https://woc2023.app/live',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJdc3IKYS-1sbl81u19zyfgF',
        coord: [46.833333, 9.283333],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20230712_1',
        parent: 'IOF_20230711_1',
        date: '2023-07-12',
        name: 'WOC #1, миддл (квалификация)',
        place: 'Flims, Laax, Switzerland (Флимс, Лакс, Швейцария)',
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_A/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_B/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_C/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_A/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_B/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_C/'
        },
        coord: [46.833333, 9.283333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20230713_1',
        parent: 'IOF_20230711_1',
        date: '2023-07-13',
        name: 'WOC #2, лонг',
        place: 'Flims, Laax, Switzerland (Флимс, Лакс, Швейцария)',
        res: [
            'https://archive.o-worldcup.ch/wp-content/uploads/2023/woc2023/rl_woc2023_long_women.pdf',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7580'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230713_WOC23_LM/',
            'W': 'https://www.tulospalvelu.fi/gps/20230713_WOC23_LW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/07/13/woc-2023-long-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=340747',
            // 'https://omaps.worldofo.com/?id=340748',
        ],
        video: 'https://www.youtube.com/watch?v=ISX2Gs1eB3A',
        coord: [46.833333, 9.283333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20230715_1',
        parent: 'IOF_20230711_1',
        date: '2023-07-15',
        name: 'WOC #3, миддл',
        place: 'Flims, Laax, Switzerland (Флимс, Лакс, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7581',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230715_WOC23_MM/',
            'W': 'https://www.tulospalvelu.fi/gps/20230715_WOC23_MW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/07/15/woc-middle-2023-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=2WWcJQsqFPM',
        coord: [46.833333, 9.283333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20230716_1',
        parent: 'IOF_20230711_1',
        date: '2023-07-16',
        name: 'WOC #4, эстафета',
        place: 'Flims, Laax, Switzerland (Флимс, Лакс, Швейцария)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7582',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RW3/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/07/16/woc-2023-relay-maps-and-results/',
        ],
        video: 'https://www.youtube.com/watch?v=OxABg9sC58I',
        coord: [46.833333, 9.283333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20231004_1',
        date: '2023-10-04',
        endDate: '2023-10-08', // cs.wikipedia: с 3 октября
        place: 'Verona, Peschiera del Garda, Italy (Верона, Пескьера-дель-Гарда, Италия)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://eoc2023.it/en/',
            'https://en.wikipedia.org/wiki/2023_European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/7772',
        photo: 'https://photos.app.goo.gl/uY9zpqSsWkYNQkT5A',
        coord: [45.438611, 10.992778],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20231004_2',
        parent: 'IOF_20231004_1',
        date: '2023-10-04',
        name: 'EOC #1, спринт (квалификация и финал)',
        place: 'Verona, Peschiera del Garda, Italy (Верона, Пескьера-дель-Гарда, Италия)',
        res: 'https://app.liveresults.it/event/eoc2023/sf/M/start-list',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2023eocSprintMtv/',
            'W': 'https://www.tulospalvelu.fi/gps/2023eocSprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/10/05/eoc-sprint-2023-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=345355',
            // 'https://omaps.worldofo.com/?id=345376',
        ],
        photo: [
            'https://photos.app.goo.gl/kfJSbB3tQyGXFBjLA',
            'https://photos.app.goo.gl/28ZR1CU2vdveZBgZ8'
        ],
        coord: [45.438611, 10.992778],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20231006_1',
        parent: 'IOF_20231004_1',
        date: '2023-10-06',
        name: 'EOC #2, спринт-эстафета',
        place: 'Verona, Peschiera del Garda, Italy (Верона, Пескьера-дель-Гарда, Италия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7838',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2023eocSR1/',
            '2': 'https://www.tulospalvelu.fi/gps/2023eocSR2/',
            '3': 'https://www.tulospalvelu.fi/gps/2023eocSR3/',
            '4': 'https://www.tulospalvelu.fi/gps/2023eocSR4/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/10/07/eoc-sprint-relay-2023-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=345457',
            // 'https://omaps.worldofo.com/?id=345458',
            // 'https://omaps.worldofo.com/?id=345459',
            // 'https://omaps.worldofo.com/?id=345460',
        ],
        photo: 'https://photos.app.goo.gl/wvGd6c8oz1nH9iK96',
        coord: [45.438611, 10.992778],
        fmt: 'sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20231008_1',
        parent: 'IOF_20231004_1',
        date: '2023-10-08',
        name: 'EOC #3, нокаут-спринт (финалы)',
        place: 'Verona, Peschiera del Garda, Italy (Верона, Пескьера-дель-Гарда, Италия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7839',
        gps: {
            'M-QF': 'https://www.tulospalvelu.fi/gps/2023eocKOqfM/',
            'W-QF': 'https://www.tulospalvelu.fi/gps/2023eocKOqfW/',
            'M-SF': 'https://www.tulospalvelu.fi/gps/2023eocKOsfM/',
            'W-SF': 'https://www.tulospalvelu.fi/gps/2023eocKOsfW/',
            'M-F': 'https://www.tulospalvelu.fi/gps/2023eocKOfM/',
            'W-F': 'https://www.tulospalvelu.fi/gps/2023eocKOfW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/10/09/eoc-2023-ko-sprint-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=345512',
            // 'https://omaps.worldofo.com/?id=345513',
            // 'https://omaps.worldofo.com/?id=345514',
            // 'https://omaps.worldofo.com/?id=345515',
            // 'https://omaps.worldofo.com/?id=345529',
            // 'https://omaps.worldofo.com/?id=345530',
        ],
        photo: 'https://photos.app.goo.gl/Fktxg1X7UN3G516k9',
        coord: [45.438611, 10.992778],
        fmt: 'knock-out',
        start: 'EOC'
    },
    {
        id: 'IOF_20240123_1',
        date: '2024-01-23',
        endDate: '2024-01-27',
        place: 'Ramsau am Dachstein, Austria (Рамзау-ам-Дахштайн, Австрия)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        gps: {
            '23-M': 'https://www.tulospalvelu.fi/gps/2023wsocSprintM/',
            '23-W': 'https://www.tulospalvelu.fi/gps/2023wsocSprintW/',
            '24-M': 'https://www.tulospalvelu.fi/gps/2024wsocPursuitM/',
            '24-W': 'https://www.tulospalvelu.fi/gps/2024wsocPursuitW/',
            '26-M': 'https://www.tulospalvelu.fi/gps/2024wsocMiddleM/',
            '26-W': 'https://www.tulospalvelu.fi/gps/2024wsocMiddleW/',
            '27-135': 'https://www.tulospalvelu.fi/gps/2024wsocSR135/',
            '27-246': 'https://www.tulospalvelu.fi/gps/2024wsocSR246/'
        },
        photo: [
            'https://photos.app.goo.gl/z4ox2AEuHyGbLaEs6',
            'https://photos.app.goo.gl/hgAngPJnAJ8aCyqu5',
            'https://photos.app.goo.gl/scDujgFSuqEkVmgaA',
            'https://photos.app.goo.gl/8N6t2E2txtXreVnx9',
            'https://photos.google.com/share/AF1QipMnCOT_ai2S7UmYZuWekLbePiMZQrSLGqKEVGPSzRoNmU7GaLkeg4CXlYQbvYwpcw?key=WmxBa3RDQnI2VXRBNlVtNEs5R3gwMl9NSUk1bF9n'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJf6q-yNSAoQHyAF7P7xh8nd',
        coord: [47.416667, 13.65],
        type: 'SKI',
        fmt: 'sprint, pursuit, middle, sprint relay', // по трансляциям GPSSeuranta
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20240712_1',
        date: '2024-07-12',
        endDate: '2024-07-16',
        place: 'Edinburgh, Scotland, UK (Эдинбург, Шотландия, Великобритания)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://www.woc2024.org/',
            'https://en.wikipedia.org/wiki/2024_World_Orienteering_Championships'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/6106',
            'https://results.woc2024.org/woc/#Day3'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJdrdm281fBPCAK0O0EVO6wc',
        coord: [55.953333, -3.189167],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20240712_2',
        parent: 'IOF_20240712_1',
        date: '2024-07-12',
        name: 'WOC #1, спринт (квалификация и финал)',
        place: 'Edinburgh, Scotland, UK (Эдинбург, Шотландия, Великобритания)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=6710',
        gps: {
            'M-Q1': 'https://events.loggator.com/WOC2024SQM1',
            'M-Q2': 'https://events.loggator.com/WOC2024SQM2',
            'M-Q3': 'https://events.loggator.com/WOC2024SQM3',
            'W-Q1': 'https://events.loggator.com/WOC2024SQW1',
            'W-Q2': 'https://events.loggator.com/WOC2024SQW2',
            'W-Q3': 'https://events.loggator.com/WOC2024SQW3',
            'M': 'https://events.loggator.com/WOC2024SFM',
            'W': 'https://events.loggator.com/WOC2024SFW'
        },
        maps: [
            // 'https://news.worldofo.com/2024/07/13/woc-2024-sprint-analysis-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=356936',
            // 'https://omaps.worldofo.com/?id=356937',
            // 'https://omaps.worldofo.com/?id=356938',
            // 'https://omaps.worldofo.com/?id=356939',
            // 'https://omaps.worldofo.com/?id=356940',
            // 'https://omaps.worldofo.com/?id=356945',
            // 'https://omaps.worldofo.com/?id=356946',
        ],
        photo: [
            'https://photos.app.goo.gl/5wBiQfGQCqRZ1AtM8',
            'https://photos.app.goo.gl/C22dYDSaGDbu6jQ77'
        ],
        video: [
            'https://www.youtube.com/watch?v=hMSYe-0vy4o',
            'https://www.youtube.com/watch?v=jvZTi_rIUC8',
            'https://www.youtube.com/watch?v=DK0pE_Z9Gg4'
        ],
        coord: [55.953333, -3.189167],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20240714_1',
        parent: 'IOF_20240712_1',
        date: '2024-07-14',
        name: 'WOC #2, спринт-эстафета',
        place: 'Edinburgh, Scotland, UK (Эдинбург, Шотландия, Великобритания)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=6711',
        gps: {
            'W-1': 'https://events.loggator.com/WOC2024SR1',
            'M-2': 'https://events.loggator.com/WOC2024SR2',
            'M-3': 'https://events.loggator.com/WOC2024SR3',
            'W-4': 'https://events.loggator.com/WOC2024SR4'
        },
        maps: [
            // 'https://news.worldofo.com/2024/07/15/woc-2024-sprint-relay-maps-and-results/',
        ],
        photo: 'https://photos.app.goo.gl/K7ToGU8ikxyc5E4h9',
        video: [
            'https://www.youtube.com/watch?v=rM_SJPeR6l0',
            'https://www.youtube.com/watch?v=zXHKJvgNloE',
            'https://www.youtube.com/watch?v=Du8xnihbLMg'
        ],
        coord: [55.953333, -3.189167],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20240716_1',
        parent: 'IOF_20240712_1',
        date: '2024-07-16',
        name: 'WOC #3, нокаут-спринт (квалификация и финалы)',
        place: 'Edinburgh, Scotland, UK (Эдинбург, Шотландия, Великобритания)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=6712',
        gps: {
            'M-Q1': 'https://events.loggator.com/WOC2024KOQM1',
            'M-Q2': 'https://events.loggator.com/WOC2024KOQM2',
            'M-Q3': 'https://events.loggator.com/WOC2024KOQM3',
            'W-Q1': 'https://events.loggator.com/WOC2024KOQW1',
            'W-Q2': 'https://events.loggator.com/WOC2024KOQW2',
            'W-Q3': 'https://events.loggator.com/WOC2024KOQW3',
            'M-QF': 'https://events.loggator.com/WOC2024KOQFM',
            'W-QF': 'https://events.loggator.com/WOC2024KOQFW',
            'M-SF': 'https://events.loggator.com/WOC2024KOSFM',
            'W-SF': 'https://events.loggator.com/WOC2024KOSFW',
            'M-F': 'https://events.loggator.com/WOC2024KOFM',
            'W-F': 'https://events.loggator.com/WOC2024KOFW'
        },
        maps: [
            // 'https://news.worldofo.com/2024/07/17/woc-2024-knock-out-sprint-analysis-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=357050',
            // 'https://omaps.worldofo.com/index.php?id=357051',
            // 'https://omaps.worldofo.com/index.php?id=357052',
            // 'https://omaps.worldofo.com/index.php?id=357053',
            // 'https://omaps.worldofo.com/index.php?id=357054',
            // 'https://omaps.worldofo.com/index.php?id=357055',
            // 'https://omaps.worldofo.com/index.php?id=357060',
            // 'https://omaps.worldofo.com/index.php?id=357061',
            // 'https://omaps.worldofo.com/index.php?id=357062',
        ],
        photo: [
            'https://photos.app.goo.gl/2R84FyeMGwzi6GTp8',
            'https://photos.app.goo.gl/PzMKqEyMn4BmtHZZ6'
        ],
        video: [
            'https://www.youtube.com/watch?v=BUkJoxaTq90',
            'https://www.youtube.com/watch?v=PkD7EVxyYhE',
            'https://www.youtube.com/watch?v=S6z-m4mh568'
        ],
        coord: [55.953333, -3.189167],
        fmt: 'knock-out',
        start: 'WOC'
    },
    {
        id: 'IOF_20240816_1',
        date: '2024-08-16',
        endDate: '2024-08-20', // по cs.wikipedia и Loggator; en: 15–20 августа
        place: 'Mór, Hungary (Мор, Венгрия)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://eoc2024.hu/',
            'https://orienteering.sport/event/european-orienteering-championships-2/relay/',
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6731',
        coord: [47.371667, 18.208611],
        fmt: 'middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20240816_2',
        parent: 'IOF_20240816_1',
        date: '2024-08-16',
        name: 'EOC #1, миддл (квалификация)',
        place: 'Mór, Hungary (Мор, Венгрия)',
        gps: {
            'M-Q1': 'https://events.loggator.com/EOC2024MQM1',
            'M-Q2': 'https://events.loggator.com/EOC2024MQM2',
            'M-Q3': 'https://events.loggator.com/EOC2024MQM3',
            'W-Q1': 'https://events.loggator.com/EOC2024MQW1',
            'W-Q2': 'https://events.loggator.com/EOC2024MQW2',
            'W-Q3': 'https://events.loggator.com/EOC2024MQW3'
        },
        photo: 'https://photos.app.goo.gl/myzWWku15exPXTsC7',
        coord: [47.371667, 18.208611],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20240817_1',
        parent: 'IOF_20240816_1',
        date: '2024-08-17',
        name: 'EOC #2, миддл',
        place: 'Mór, Hungary (Мор, Венгрия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7772',
        gps: {
            'M': 'https://events.loggator.com/EOC2024MFM',
            'W': 'https://events.loggator.com/EOC2024MFW'
        },
        maps: [
            // 'https://news.worldofo.com/2024/08/18/eoc-2024-middle-analysis-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=358143',
            // 'https://omaps.worldofo.com/?id=358145',
        ],
        photo: 'https://photos.app.goo.gl/C46RznaTCEgh55ibA',
        coord: [47.371667, 18.208611],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20240818_1',
        parent: 'IOF_20240816_1',
        date: '2024-08-18',
        name: 'EOC #3, лонг',
        place: 'Mór, Hungary (Мор, Венгрия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7773',
        gps: {
            'M': 'https://events.loggator.com/EOC2024LFM',
            'W': 'https://events.loggator.com/EOC2024LFW'
        },
        maps: [
            // 'https://news.worldofo.com/2024/08/19/eoc-2024-long-analysis-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=358196',
            // 'https://omaps.worldofo.com/?id=358224',
        ],
        photo: 'https://photos.app.goo.gl/o8YoUix2o4c7Lmgs8',
        coord: [47.371667, 18.208611],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20240820_1',
        parent: 'IOF_20240816_1',
        date: '2024-08-20',
        name: 'EOC #4, эстафета',
        place: 'Mór, Hungary (Мор, Венгрия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=7774',
        gps: {
            'M-1': 'https://events.loggator.com/EOC2024RM1',
            'M-2': 'https://events.loggator.com/EOC2024RM2',
            'M-3': 'https://events.loggator.com/EOC2024RM3',
            'W-1': 'https://events.loggator.com/EOC2024RW1',
            'W-2': 'https://events.loggator.com/EOC2024RW2',
            'W-3': 'https://events.loggator.com/EOC2024RW3'
        },
        maps: [
            // 'https://news.worldofo.com/2024/08/21/eoc-2024-relay-analysis-maps-and-results/',
        ],
        photo: 'https://photos.google.com/share/AF1QipM22u80kGZBJ60OcQZYIcegO2rokJvl71hbIMFQRr_8OJgF9IQeoUZN7mXJo-CZIw?key=NC11SXh1X3FqMkZpNVFhcmQwTkg0RlRNS205cV9R',
        coord: [47.371667, 18.208611],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20250319_1',
        date: '2025-03-19',
        endDate: '2025-03-23', // только sv.wikipedia; гонки по GPS 20–23 марта
        place: 'Posio, Finland (Посио, Финляндия)',
        name: 'Чемпионат Европы (SKI-EOC)',
        link: [
            'https://de.wikipedia.org/wiki/Ski-Orientierungslauf-Europameisterschaften',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_лыжах'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/8420',
        gps: {
            '20-135': 'https://www.tulospalvelu.fi/gps/2025esocS135/',
            '20-246': 'https://www.tulospalvelu.fi/gps/2025esocS246/',
            '21-M': 'https://www.tulospalvelu.fi/gps/2025esocSprintM/',
            '21-W': 'https://www.tulospalvelu.fi/gps/2025esocSprintW/',
            '22-M': 'https://www.tulospalvelu.fi/gps/2025esocMiddleM/',
            '22-W': 'https://www.tulospalvelu.fi/gps/2025esocMiddleW/',
            '23-M': 'https://www.tulospalvelu.fi/gps/2025esocLongM/',
            '23-W': 'https://www.tulospalvelu.fi/gps/2025esocLongW/'
        },
        coord: [66.108333, 28.166667],
        type: 'SKI',
        fmt: 'sprint relay, sprint, middle, long', // по GPS-трансляциям
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20250707_1',
        date: '2025-07-07',
        endDate: '2025-07-12',
        place: 'Kuopio, Finland (Куопио, Финляндия)',
        name: 'Чемпионат мира (WOC)',
        link: [
            'https://www.woc2025.fi/',
            'https://en.wikipedia.org/wiki/2025_World_Orienteering_Championships'
        ],
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=8463',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeMFCpZO9yktNA37p78AgJn',
        coord: [62.8925, 27.678333],
        fmt: 'middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20250708_1',
        parent: 'IOF_20250707_1',
        date: '2025-07-08',
        name: 'WOC #1, миддл (квалификация)',
        place: 'Kuopio, Finland (Куопио, Финляндия)',
        gps: {
            'M-Q': 'https://www.tulospalvelu.fi/gps/2025wocmqM/',
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2025wocmqM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2025wocmqM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2025wocmqM3/',
            'W-Q': 'https://www.tulospalvelu.fi/gps/2025wocmqW/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2025wocmqW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2025wocmqW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2025wocmqW3/'
        },
        photo: 'https://www.woc2025.fi/media/',
        video: 'https://www.youtube.com/watch?v=0WAC4TENxxE',
        coord: [62.8925, 27.678333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20250709_1',
        parent: 'IOF_20250707_1',
        date: '2025-07-09',
        name: 'WOC #2, миддл',
        place: 'Kuopio, Finland (Куопио, Финляндия)',
        res: [
            'https://online-live.tulospalvelu.fi/tulokset-new/en/2025_wocmiddle/men/smart/1/',
            'https://online-live.tulospalvelu.fi/tulokset-new/en/2025_wocmiddle/women/smart/1/'
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025wocmfM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025wocmfW/'
        },
        maps: [
            // 'https://news.worldofo.com/2025/07/10/woc-2025-middle-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=371717',
            // 'https://omaps.worldofo.com/?id=371718',
        ],
        photo: 'https://photos.app.goo.gl/7QJJjG65UJMFBtvh6',
        video: 'https://www.youtube.com/watch?v=gy3COdirG3I',
        coord: [62.8925, 27.678333],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20250710_1',
        parent: 'IOF_20250707_1',
        date: '2025-07-10',
        name: 'WOC #3, лонг',
        place: 'Kuopio, Finland (Куопио, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025wocldM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025wocldW/'
        },
        maps: [
            // 'https://news.worldofo.com/2025/07/11/woc-2025-long-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=371749',
            // 'https://omaps.worldofo.com/?id=371750',
        ],
        photo: 'https://photos.app.goo.gl/Prxe7RnX3QHUib1z6',
        video: 'https://www.youtube.com/watch?v=DmwOcTK9SNg',
        coord: [62.8925, 27.678333],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20250712_1',
        parent: 'IOF_20250707_1',
        date: '2025-07-12',
        name: 'WOC #4, эстафета',
        place: 'Kuopio, Finland (Куопио, Финляндия)',
        res: [
            'https://online.tulospalvelu.fi/tulokset-new/en/2025_wocrelay/men/results/',
            'https://online.tulospalvelu.fi/tulokset-new/en/2025_wocrelay/women/results/'
        ],
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2025wocrelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2025wocrelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2025wocrelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2025wocrelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2025wocrelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2025wocrelayW3/'
        },
        maps: [
            // 'https://news.worldofo.com/2025/07/13/woc-2025-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=371817',
            // 'https://omaps.worldofo.com/?id=371818',
            // 'https://omaps.worldofo.com/?id=371819',
            // 'https://omaps.worldofo.com/?id=371820',
            // 'https://omaps.worldofo.com/?id=371821',
            // 'https://omaps.worldofo.com/?id=371846',
        ],
        photo: 'https://photos.app.goo.gl/KeBAGts7LvmVUQEq7',
        video: 'https://www.youtube.com/watch?v=kqk92O5okrw',
        coord: [62.8925, 27.678333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20250827_1',
        date: '2025-08-27',
        endDate: '2025-08-31', // по cs.wikipedia и Loggator; en: 20–24 августа — неверно
        place: 'Hasselt, Belgium (Хасселт, Бельгия)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://eoc2025.be/',
            'https://en.wikipedia.org/wiki/European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        photo: 'https://eoc2025.be/photos/',
        coord: [50.93, 5.3375],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20250827_2',
        parent: 'IOF_20250827_1',
        date: '2025-08-27',
        name: 'EOC #1, спринт-эстафета',
        place: 'Hasselt, Belgium (Хасселт, Бельгия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=8520',
        gps: {
            '1': 'https://events.loggator.com/EOC2025SR1',
            '2': 'https://events.loggator.com/EOC2025SR2',
            '3': 'https://events.loggator.com/EOC2025SR3',
            '4': 'https://events.loggator.com/EOC2025SR4'
        },
        maps: [
            // 'https://news.worldofo.com/2025/08/28/eoc-2025-sprint-relay-maps-results-and-analysis/',
        ],
        coord: [50.93, 5.3375],
        fmt: 'sprint relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20250828_1',
        parent: 'IOF_20250827_1',
        date: '2025-08-28',
        name: 'EOC #2, нокаут-спринт (квалификация)',
        place: 'Hasselt, Belgium (Хасселт, Бельгия)',
        gps: {
            'M-Q1': 'https://events.loggator.com/EOC2025KOQM1',
            'M-Q2': 'https://events.loggator.com/EOC2025KOQM2',
            'M-Q3': 'https://events.loggator.com/EOC2025KOQM3',
            'W-Q1': 'https://events.loggator.com/EOC2025KOQW1',
            'W-Q2': 'https://events.loggator.com/EOC2025KOQW2',
            'W-Q3': 'https://events.loggator.com/EOC2025KOQW3'
        },
        coord: [50.93, 5.3375],
        fmt: 'knock-out',
        start: 'EOC'
    },
    {
        id: 'IOF_20250829_1',
        parent: 'IOF_20250827_1',
        date: '2025-08-29',
        name: 'EOC #3, нокаут-спринт (финалы)',
        place: 'Hasselt, Belgium (Хасселт, Бельгия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=8522',
        gps: {
            'M-QF': 'https://events.loggator.com/EOC2025KOQFM',
            'W-QF': 'https://events.loggator.com/EOC2025KOQFW',
            'M-SF': 'https://events.loggator.com/EOC2025KOSFM',
            'W-SF': 'https://events.loggator.com/EOC2025KOSFW',
            'M-F': 'https://events.loggator.com/EOC2025KOFM',
            'W-F': 'https://events.loggator.com/EOC2025KOFW'
        },
        maps: [
            // 'https://news.worldofo.com/2025/08/30/eoc-2025-knock-out-sprint-maps-results-and-analysis/',
        ],
        coord: [50.93, 5.3375],
        fmt: 'knock-out',
        start: 'EOC'
    },
    {
        id: 'IOF_20250831_1',
        parent: 'IOF_20250827_1',
        date: '2025-08-31',
        name: 'EOC #4, спринт (квалификация и финал)',
        place: 'Hasselt, Belgium (Хасселт, Бельгия)',
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=8523',
        gps: {
            'M-Q1': 'https://events.loggator.com/EOC2025SQM1',
            'M-Q2': 'https://events.loggator.com/EOC2025SQM2',
            'M-Q3': 'https://events.loggator.com/EOC2025SQM3',
            'W-Q1': 'https://events.loggator.com/EOC2025SQW1',
            'W-Q2': 'https://events.loggator.com/EOC2025SQW2',
            'W-Q3': 'https://events.loggator.com/EOC2025SQW3',
            'M': 'https://events.loggator.com/EOC2025SFM',
            'W': 'https://events.loggator.com/EOC2025SFW'
        },
        maps: [
            // 'https://news.worldofo.com/2025/09/01/eoc-2025-sprint-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=374753',
            // 'https://omaps.worldofo.com/?id=374754',
            // 'https://omaps.worldofo.com/index.php?id=374753',
        ],
        coord: [50.93, 5.3375],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        // заменяет MAJOR_20260301_1 из calendar-common-2026.js
        id: 'IOF_20260301_1',
        date: '2026-03-01', // в en.wikipedia: 2–6 марта
        endDate: '2026-03-06',
        place: 'Rusutsu, Hokkaido, Japan (Русуцу, Хоккайдо, Япония)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://wsoc2026.jp/comp.html',
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'sprint, pursuit, middle, sprint relay',
        start: 'SKI_WOC'
    },
    {
        // заменяет MAJOR_20260706_1 из calendar-common-2026.js
        id: 'IOF_20260706_1',
        date: '2026-07-06',
        endDate: '2026-07-11',
        place: 'Genova, Italy (Генуя, Италия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://woc2026.com/',
        res: 'https://app.liveresults.it/woc2026',
        video: 'https://www.youtube.com/playlist?list=PLemA_lslotHE',
        coord: [44.407222, 8.933889],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20260707_1',
        parent: 'IOF_20260706_1',
        date: '2026-07-07',
        name: 'WOC #1, спринт (квалификация и финал)',
        place: 'Genova, Italy (Генуя, Италия)',
        gps: {
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2026wocSprintQM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2026wocSprintQM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2026wocSprintQM3/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2026wocSprintQW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2026wocSprintQW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2026wocSprintQW3/',
            'M': 'https://www.tulospalvelu.fi/gps/2026wocSprintFM/',
            'W': 'https://www.tulospalvelu.fi/gps/2026wocSprintFW/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/07/08/woc-2026-individual-sprint-maps-results-analysis/',
        ],
        photo: [
            'https://photos.app.goo.gl/tyFjRg5SrTjfvBmm6',
            'https://photos.app.goo.gl/HD6Wkwj5zcadULkdA'
        ],
        video: 'https://youtu.be/rC-N8eGiXpY',
        coord: [44.407222, 8.933889],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20260709_1',
        parent: 'IOF_20260706_1',
        date: '2026-07-09',
        name: 'WOC #2, нокаут-спринт (квалификация)',
        place: 'Genova, Italy (Генуя, Италия)',
        gps: {
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2026wocKOqualM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2026wocKOqualM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2026wocKOqualM3/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2026wocKOqualW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2026wocKOqualW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2026wocKOqualW3/'
        },
        photo: 'https://photos.app.goo.gl/CSgY1Fi3WRVvQU1Z9',
        coord: [44.407222, 8.933889],
        fmt: 'knock-out',
        start: 'WOC'
    },
    {
        id: 'IOF_20260710_1',
        parent: 'IOF_20260706_1',
        date: '2026-07-10',
        name: 'WOC #3, нокаут-спринт (финалы)',
        place: 'Genova, Italy (Генуя, Италия)',
        gps: {
            'M-QF': 'https://www.tulospalvelu.fi/gps/2026wocKOquarterM/',
            'W-QF': 'https://www.tulospalvelu.fi/gps/2026wocKOquarterW/',
            'M-SF': 'https://www.tulospalvelu.fi/gps/2026wocKOsemiM/',
            'W-SF': 'https://www.tulospalvelu.fi/gps/2026wocKOsemiW/',
            'M-F': 'https://www.tulospalvelu.fi/gps/2026wocKOfinalM/',
            'W-F': 'https://www.tulospalvelu.fi/gps/2026wocKOfinalW/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/07/11/woc-2026-knock-out-sprint-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=393188',
            // 'https://omaps.worldofo.com/index.php?id=393189',
            // 'https://omaps.worldofo.com/index.php?id=393190',
            // 'https://omaps.worldofo.com/index.php?id=393201',
            // 'https://omaps.worldofo.com/index.php?id=393202',
            // 'https://omaps.worldofo.com/index.php?id=393203',
        ],
        photo: 'https://photos.app.goo.gl/6kvnBaBXtaCoQbLv6',
        video: [
            'https://youtu.be/6X40Hv7DG8o',
            'https://youtu.be/NsjOxRdbeZ0'
        ],
        coord: [44.407222, 8.933889],
        fmt: 'knock-out',
        start: 'WOC'
    },
    {
        id: 'IOF_20260711_1',
        parent: 'IOF_20260706_1',
        date: '2026-07-11',
        name: 'WOC #4, спринт-эстафета',
        place: 'Genova, Italy (Генуя, Италия)',
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2026wocSR1/',
            '2': 'https://www.tulospalvelu.fi/gps/2026wocSR2/',
            '3': 'https://www.tulospalvelu.fi/gps/2026wocSR3/',
            '4': 'https://www.tulospalvelu.fi/gps/2026wocSR4/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/07/12/woc-2026-sprint-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=393243',
            // 'https://omaps.worldofo.com/?id=393244',
            // 'https://omaps.worldofo.com/?id=393245',
            // 'https://omaps.worldofo.com/?id=393246',
        ],
        photo: 'https://photos.app.goo.gl/F69HNeB2SKVf3eRp8',
        video: 'https://youtu.be/CvaCKaOLMOU',
        coord: [44.407222, 8.933889],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20260923_1',
        date: '2026-09-23',
        endDate: '2026-09-27', // по en-статье и GPS; в таблице en: 22–28 сентября
        place: 'Druskininkai, Lithuania (Друскининкай, Литва)',
        name: 'Чемпионат Европы (EOC)',
        link: [
            'https://eoc2026.lt/',
            'https://en.wikipedia.org/wiki/2026_European_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=170&eventClassId=19119',
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=170&eventClassId=19122',
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=170&eventClassId=19137'
        ],
        coord: [54.016667, 23.966667],
        fmt: 'middle, long, relay', // по GPS-трансляциям
        start: 'EOC'
    },
    {
        id: 'IOF_20260923_2',
        parent: 'IOF_20260923_1',
        date: '2026-09-23',
        name: 'EOC #1, квалификация',
        place: 'Druskininkai, Lithuania (Друскининкай, Литва)',
        gps: {
            'M-Q': 'https://www.tulospalvelu.fi/gps/2026eocQualMall/',
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2026eocQualM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2026eocQualM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2026eocQualM3/',
            'W-Q': 'https://www.tulospalvelu.fi/gps/2026eocQualWall/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2026eocQualW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2026eocQualW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2026eocQualW3/'
        },
        coord: [54.016667, 23.966667],
        fmt: 'qualification',
        start: 'EOC'
    },
    {
        id: 'IOF_20260924_1',
        parent: 'IOF_20260923_1',
        date: '2026-09-24',
        name: 'EOC #2, лонг',
        place: 'Druskininkai, Lithuania (Друскининкай, Литва)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2026eocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2026eocLongW/',
            'M-B': 'https://www.tulospalvelu.fi/gps/2026eocLongMB/',
            'W-B': 'https://www.tulospalvelu.fi/gps/2026eocLongWB/',
            'M-C': 'https://www.tulospalvelu.fi/gps/2026eocLongMC/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/09/25/eoc-2026-long-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=395897',
            // 'https://omaps.worldofo.com/?id=395899',
        ],
        coord: [54.016667, 23.966667],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20260926_1',
        parent: 'IOF_20260923_1',
        date: '2026-09-26',
        name: 'EOC #3, миддл',
        place: 'Druskininkai, Lithuania (Друскининкай, Литва)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2026eocMiddleMen/',
            'W': 'https://www.tulospalvelu.fi/gps/2026eocMiddleWomen/',
            'M-B': 'https://www.tulospalvelu.fi/gps/2026eocMiddleMenB/',
            'W-B': 'https://www.tulospalvelu.fi/gps/2026eocMiddleWomenB/',
            'M-C': 'https://www.tulospalvelu.fi/gps/2026eocMiddlemenc/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/09/27/eoc-2026-middle-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=395921',
            // 'https://omaps.worldofo.com/?id=395922',
        ],
        coord: [54.016667, 23.966667],
        fmt: 'middle',
        start: 'EOC'
    },
    {
        id: 'IOF_20260927_1',
        parent: 'IOF_20260923_1',
        date: '2026-09-27',
        name: 'EOC #4, эстафета',
        place: 'Druskininkai, Lithuania (Друскининкай, Литва)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/2026eocRelayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/2026eocRelayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/2026eocRelayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/2026eocRelayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/2026eocRelayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/2026eocRelayW3/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/09/28/eoc-2026-relay-maps-results-and-analysis/',
        ],
        coord: [54.016667, 23.966667],
        fmt: 'relay',
        start: 'EOC'
    }
];
