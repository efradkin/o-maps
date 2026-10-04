// Чемпионаты IOF: мира WOC (бег, 1966–2026), SKI-WOC (лыжи, 1975–2026), Европы EOC (бег, 1962–2026)
//   и SKI-EOC (лыжи, 2001–2025); по велоориентированию — мира WMTBOC (2002–2026) и Европы EMTBOC (2006–2026). Собрано 30.09–02.10.2026.
// place — латиницей/на языке оригинала, в скобках — по-русски. coord — центр населённого пункта (en.wikipedia),
//   центров соревнований в источниках нет; где указан регион — помечено.
// link — рабочие официальные сайты + статьи Википедии (en, ru). res — страница чемпионата (IOF Eventor / архив IOF)
//   и рабочие протоколы отдельных гонок. maps — посты World of O News с картами финалов, карты на omaps.worldofo.com,
//   реестр карт ČSOS. photo — альбомы IOF (orienteering.sport → Press photos). video — плейлисты YouTube-канала IOF.
// gps — GPSSeuranta, Loggator (WOC 2024, EOC 2024–2025), TracTrac (WOC 2019, 2022; EOC 2021). Ключи: <день>-<M|W>[-<этап>|-Q<забег>|-QF|-SF|-F|-B|-C];
//   MTBO (type: VELO): даты и места — страницы чемпионатов IOF (2002–2016), программы Кубка мира IOF (2021–2026), Википедия;
//   GPS — GPSSeuranta (WMTBOC 2012, 2015, 2021–2023), без юниорских классов M20/W20 (это JWMTBOC); фото IOF по MTBO нет.
//   Q — квалификация, QF/SF/F — раунды нокаут-спринта; спринт-эстафета — <день>[-<M|W>]-<этап>; у лыж 135/246 — этапы;
//   B/C — финалы B и C; all — одна страница на все гонки (TracTrac). Ключ из одного дня — одна страница на все группы.
//   Страницы TracTrac автоматически не проверить (сайт отвечает на любой адрес); старый адрес TracTrac EOC 2014 не включён.
// Крупные записи (в какой-то день больше двух карт, фото, видео или GPS-трансляций) разбиты на дочерние по дням (parent):
//   у дочерних — результаты, GPS, фото, видео и карты своего дня; у крупной — только ссылки, не относящиеся к одному дню
//   (страница чемпионата, сводные протоколы, общие альбомы, плейлисты). Дни гонок — по программам cs/en.wikipedia и датам
//   трансляций (из двух дат GPSSeuranta — та, что внутри дат чемпионата). owner, major и logo заданы в js/starts.js.
// В maps активны только файлы карт (изображения, PDF); ссылки на страницы (посты, omaps, реестры) закомментированы.
//   Файлы карт с news.worldofo.com отобраны вручную по обзорным листам: только полные карты, без фрагментов перегонов.
//   Файлы карт из реестра ČSOS (mapy.ceskyorientak.cz) — только официальные гонки чемпионатов по полю «Závod».
//   Файлы картинок omaps.worldofo.com (адрес взят из постов World of O) открываются через капчу Cloudflare — превью сайт не строит.
//   Файлы с web.archive.org (…id_/…) — сохранённые архивом копии карт с неработающих сайтов чемпионатов.
//   Файлы IOF Eventor (eventor-iof-storage.orientering.se) — карты гонок EOC 2021 и WOC 2022 у дочерних записей;
//   старые карты района (изображения, PDF, OCAD) и карта модельных соревнований — у крупной записи, с комментарием.
// bulletin — официальные бюллетени 1–4 из IOF Eventor у крупной записи: активен последний по номеру (с дополнением к нему),
//   предыдущие закомментированы. Пре-бюллетени Кубка мира, COVID-, медиа-бюллетени, бюллетени отборочных
//   и тренировочных стартов не включены.
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
            // фрагмент карты 600×400 (других карт нет), найден через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48395',
            'https://omaps.worldofo.com/upload/woc1966.jpg'
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
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48884', // эстафета, женщины
            'https://omaps.worldofo.com/upload/VM_68_STAF_D.jpg'
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
        maps: [
            // фрагмент карты 600×400 (других карт нет), найден через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48393',
            'https://omaps.worldofo.com/upload/woc1970.jpg'
        ],
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
            'https://mapy.ceskyorientak.cz/data/jpg/2259b.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/2353a.jpg'
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
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48883', // классика, мужчины
            'https://omaps.worldofo.com/upload/VM_74_H.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48871', // классика, женщины
            'https://omaps.worldofo.com/upload/WOC1974_classic_women.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48870', // эстафета, женщины, этапы 1–2
            'https://omaps.worldofo.com/upload/WOC1974_relay_women_leg1_2.jpg'
        ],
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
        res: 'https://old.orienteering.sport/events/114/', // результаты на старом сайте IOF
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
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48881', // классика, мужчины
            'https://omaps.worldofo.com/upload/VM_76_H.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48882', // классика, женщины
            'https://omaps.worldofo.com/upload/VM_76_D.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48879', // эстафета, мужчины
            'https://omaps.worldofo.com/upload/VM_76_staf_H.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48880', // эстафета, женщины
            'https://omaps.worldofo.com/upload/VM_76_staf_D.jpg'
        ],
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
        res: 'https://old.orienteering.sport/events/115/', // результаты на старом сайте IOF
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
        maps: [
            // фрагмент карты 600×400 (других карт нет), найден через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48389',
            'https://omaps.worldofo.com/upload/woc1979.jpg'
        ],
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
        res: 'https://old.orienteering.sport/events/116/', // результаты на старом сайте IOF
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
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48872', // классика, женщины
            'https://omaps.worldofo.com/upload/WOC1981_classic-women.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48873', // эстафета, женщины, этапы 1–2
            'https://omaps.worldofo.com/upload/WOC1981_relay_women_leg1_2.jpg'
        ],
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
        res: 'https://old.orienteering.sport/events/117/', // результаты на старом сайте IOF
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
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48874', // классика, мужчины, часть 1
            'https://omaps.worldofo.com/upload/WM83%20Teil1.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48875', // классика, мужчины, часть 2
            'https://omaps.worldofo.com/upload/WM83%20Teil2.jpg'
        ],
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
        res: 'https://old.orienteering.sport/events/118/', // результаты на старом сайте IOF
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
        res: 'https://old.orienteering.sport/events/119/', // результаты на старом сайте IOF
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
        res: 'https://old.orienteering.sport/events/120/', // результаты на старом сайте IOF
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
        res: 'https://old.orienteering.sport/events/121/', // результаты на старом сайте IOF
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
            'https://mapy.ceskyorientak.cz/data/jpg/0777b.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/0801a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/0733a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/0798a.jpg'
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
        res: 'https://old.orienteering.sport/events/122/', // результаты на старом сайте IOF
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
        res: 'https://old.orienteering.sport/events/123/', // результаты на старом сайте IOF
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
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48876', // короткая дистанция, мужчины
            'https://omaps.worldofo.com/upload/VM95_kort_H.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48877', // короткая дистанция, женщины
            'https://omaps.worldofo.com/upload/VM95_kort_D.jpg',
            // 'https://omaps.worldofo.com/index.php?id=48878', // эстафета
            'https://omaps.worldofo.com/upload/VM_95_staf.jpg'
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
        res: 'https://old.orienteering.sport/events/124/', // результаты на старом сайте IOF
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
        maps: [
            // фрагмент карты 600×400 (других карт нет), найден через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=48387',
            'https://omaps.worldofo.com/upload/woc1997.jpg'
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
        res: 'https://old.orienteering.sport/events/125/', // результаты на старом сайте IOF
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
        res: 'https://old.orienteering.sport/events/126/', // результаты на старом сайте IOF
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
        maps: [
            // карты с сайта организаторов (Wayback Machine, woc2001.fi):
            'https://web.archive.org/web/20010622133854id_/http://www.woc2001.fi:80/a_news/kartta01.gif'
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
        res: 'https://old.orienteering.sport/events/127/', // результаты на старом сайте IOF
        coord: [42.264444, 23.606944],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20020702_1',
        date: '2002-07-02',
        endDate: '2002-07-07', // по IOF; en.wikipedia: 1–6 июля
        place: 'Fontainebleau, France (Фонтенбло, Франция)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2002',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        res: 'https://old.orienteering.sport/events/72/world-mtb-orienteering-championships-2002/',
        coord: [48.4097, 2.7025],
        type: 'VELO',
        fmt: 'sprint, long, relay',
        start: 'WMTBOC'
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
        res: 'https://old.orienteering.sport/events/128/', // результаты на старом сайте IOF
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
        bulletin: [
            // 'https://web.archive.org/web/20030318201150id_/http://eoc2004.dk:80/en/eoc2004_bulletin_1.pdf',
            // 'https://web.archive.org/web/20031212142507id_/http://www.eoc2004.dk:80/en/eoc2004_bulletin_2.pdf',
            // 'https://web.archive.org/web/20041015054557id_/http://www.eoc2004.dk:80/en/eoc2004_bulletin_3.pdf',
            'https://web.archive.org/web/20041108194314id_/http://eoc2004.dk:80/en/eoc2004_bulletin_4.pdf'
        ],
        res: 'https://web.archive.org/web/20040719232157id_/http://www.eoc2004.dk:80/eoc_results/eoc2004_results_middle_distance.pdf', // миддл (Wayback Machine)
        maps: [
            // официальные карты организаторов (Wayback Machine, eoc2004.dk):
            'https://web.archive.org/web/20060623101522id_/http://eoc2004.dk:80/images/eoc_final_sprint_mens_course.jpg', // финал спринта, мужчины
            'https://web.archive.org/web/20060623101650id_/http://eoc2004.dk:80/images/eoc_final_sprint_womens_course.jpg', // финал спринта, женщины
            'https://web.archive.org/web/20060623101510id_/http://eoc2004.dk:80/images/eoc_final_middle_mens_course.jpg', // финал миддла, мужчины
            'https://web.archive.org/web/20060623101614id_/http://eoc2004.dk:80/images/eoc_final_middle_womens_course.jpg', // финал миддла, женщины
            'https://web.archive.org/web/20060623101410id_/http://eoc2004.dk:80/images/eoc_final_long_mens_course.jpg', // финал лонга, мужчины
            'https://web.archive.org/web/20060623101458id_/http://eoc2004.dk:80/images/eoc_final_long_womens_course.jpg', // финал лонга, женщины
            // официальные карты организаторов (Wayback Machine, eoc2004.dk):
            'https://web.archive.org/web/20041021030414id_/http://eoc2004.dk:80/images/relay_course_men1.GIF', // эстафета, мужчины, этап 1
            'https://web.archive.org/web/20040815005401id_/http://www.eoc2004.dk:80/images/relay_course_men2.GIF', // эстафета, мужчины, этап 2
            'https://web.archive.org/web/20040814182621id_/http://www.eoc2004.dk:80/images/relay_course_men3.GIF', // эстафета, мужчины, этап 3
            'https://web.archive.org/web/20040814183720id_/http://www.eoc2004.dk:80/images/relay_course_women1.GIF', // эстафета, женщины, этап 1
            'https://web.archive.org/web/20040814184534id_/http://www.eoc2004.dk:80/images/relay_course_women2.GIF', // эстафета, женщины, этап 2
            'https://web.archive.org/web/20040814185701id_/http://www.eoc2004.dk:80/images/relay_course_women3.GIF' // эстафета, женщины, этап 3
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
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=15931', // лонг (фото карты, Panoramio)
            'https://web.archive.org/web/20161013213201id_/http://static.panoramio.com/photos/original/21415012.jpg',
            // 'https://omaps.worldofo.com/index.php?id=9749', // эстафета (карта Тьерри Жоржиу)
            'https://web.archive.org/web/20061104110919id_/http://tero1.free.fr/cartes/woc/woc2004-relais.jpg'
        ],
        coord: [59.616111, 16.552778],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20041018_1',
        date: '2004-10-18',
        endDate: '2004-10-23', // по IOF; en.wikipedia: 19–23 октября
        place: 'Ballarat, Australia (Балларат, Австралия)',
        name: 'Чемпионат мира (WMTBOC)',
        // сайт не работает: 2004worldmtbo.org
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2004',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://web.archive.org/web/20040609022811id_/http://www.2004worldmtbo.org:80/woc_bulletin2_05042004.pdf',
            // 'https://web.archive.org/web/20041107135559id_/http://www.2004worldmtbo.org:80/woc_bulletin_3.pdf',
            'https://web.archive.org/web/20041207133620id_/http://www.2004worldmtbo.org:80/Bulletin_4.pdf'
        ],
        res: 'https://old.orienteering.sport/events/61/world-mtb-orienteering-championships-2004/',
        maps: [
            // карты с сайта организаторов (Wayback Machine, 2004worldmtbo.org):
            'https://web.archive.org/web/20051023103523id_/http://www.2004worldmtbo.org:80/images/map_balt_camp.jpg',
            'https://web.archive.org/web/20060214103000id_/http://www.2004worldmtbo.org:80/images/map_canadian_north.jpg',
            'https://web.archive.org/web/20060214102835id_/http://www.2004worldmtbo.org:80/images/map_canadian_south.jpg',
            'https://web.archive.org/web/20060214102953id_/http://www.2004worldmtbo.org:80/images/map_creswick_east.jpg',
            'https://web.archive.org/web/20051023103102id_/http://www.2004worldmtbo.org:80/images/map_creswick_west.jpg',
            'https://web.archive.org/web/20051023102943id_/http://www.2004worldmtbo.org:80/images/map_lal_lal.jpg',
            'https://web.archive.org/web/20051023102240id_/http://www.2004worldmtbo.org:80/images/map_nerrina.jpg',
            'https://web.archive.org/web/20041220152140id_/http://www.2004worldmtbo.org:80/MFBMMenBase.pdf',
            'https://web.archive.org/web/20041220221244id_/http://www.2004worldmtbo.org:80/MFBMWomensBase.pdf'
        ],
        coord: [-37.560833, 143.8475],
        type: 'VELO',
        fmt: 'middle, long, relay',
        start: 'WMTBOC'
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
        res: 'https://old.orienteering.sport/events/129/', // результаты на старом сайте IOF
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
        bulletin: [
            // 'https://web.archive.org/web/20040805022423id_/http://www.woc2005.jp:80/Bulletin1.pdf',
            'https://web.archive.org/web/20041013170652id_/http://www.woc2005.jp:80/Bulletin2.pdf'
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
        id: 'IOF_20050905_1',
        date: '2005-09-05',
        endDate: '2005-09-11',
        place: 'Banská Bystrica, Slovakia (Банска-Бистрица, Словакия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2005',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://web.archive.org/web/20050408023911id_/http://www.orienteering.sk:80/mtbo2005/bulletins/bulletin1_web.pdf',
            // 'https://web.archive.org/web/20050406073749id_/http://www.orienteering.sk:80/mtbo2005/bulletins/bulletin2_web.pdf',
            'https://web.archive.org/web/20051028205253id_/http://www.orienteering.sk:80/mtbo2005/bulletins/bulletin3_web.pdf'
        ],
        res: 'https://old.orienteering.sport/events/60/world-mtb-orienteering-championships-2005/',
        maps: [
            // карты с сайта организаторов (Wayback Machine, orienteering.sk/mtbo2005):
            'https://web.archive.org/web/20060113171517id_/http://www.orienteering.sk:80/mtbo2005/maps/relay/donovaly.jpg' // эстафета
        ],
        coord: [48.735278, 19.145278],
        type: 'VELO',
        fmt: 'middle, long, relay',
        start: 'WMTBOC'
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
        bulletin: 'https://web.archive.org/web/20070628234004id_/http://www.eoc2006.ee/docs/bulletin4.pdf',
        res: [
            'https://old.orienteering.sport/events/247/', // результаты на старом сайте IOF
            'https://web.archive.org/web/20060524114803id_/http://www.eoc2006.ee:80/results/sprintq/men.pdf', // квалификация спринта, мужчины
            'https://web.archive.org/web/20060524114854id_/http://www.eoc2006.ee:80/results/sprintq/women.pdf', // квалификация спринта, женщины
            'https://web.archive.org/web/20060524115009id_/http://www.eoc2006.ee:80/results/sprintf/results.pdf', // финал спринта
            'https://web.archive.org/web/20060524114752id_/http://www.eoc2006.ee:80/results/middleq/men.pdf', // квалификация миддла, мужчины
            'https://web.archive.org/web/20060524114830id_/http://www.eoc2006.ee:80/results/middleq/women.pdf', // квалификация миддла, женщины
            'https://web.archive.org/web/20060524114727id_/http://www.eoc2006.ee:80/results/longq/men.pdf', // квалификация лонга, мужчины
            'https://web.archive.org/web/20060524114739id_/http://www.eoc2006.ee:80/results/longq/women.pdf' // квалификация лонга, женщины
        ],
        maps: [
            // 'https://news.worldofo.com/2006/05/08/mats-troeng-jonn-are-myhren-eoc-maps/',
            // карты с сайта организаторов (Wayback Machine, eoc2006.ee):
            'https://web.archive.org/web/20070419113745id_/http://www.eoc2006.ee:80/results/sprintf/men.gif', // финал спринта, мужчины
            'https://web.archive.org/web/20070419201754id_/http://www.eoc2006.ee:80/results/sprintf/women.gif', // финал спринта, женщины
            'https://web.archive.org/web/20070419201811id_/http://www.eoc2006.ee:80/results/sprintf/andrey.gif', // финал спринта, Andrey
            'https://web.archive.org/web/20070419113533id_/http://www.eoc2006.ee:80/results/sprintf/emil.gif', // финал спринта, Emil
            'https://web.archive.org/web/20070419031601id_/http://www.eoc2006.ee:80/results/sprintf/jamie.gif', // финал спринта, Jamie
            'https://web.archive.org/web/20070419030447id_/http://www.eoc2006.ee:80/results/sprintf/marianne.gif', // финал спринта, Marianne
            'https://web.archive.org/web/20070419025034id_/http://www.eoc2006.ee:80/results/sprintf/simone.gif', // финал спринта, Simone
            'https://web.archive.org/web/20070808172242id_/http://www.eoc2006.ee/results/sprintf/anu.gif', // финал спринта, Anu
            'https://web.archive.org/web/20070808172330id_/http://www.eoc2006.ee/results/sprintf/minna.gif', // финал спринта, Minna
            'https://web.archive.org/web/20060510121830id_/http://www.eoc2006.ee:80/results/sprintf/toome.jpg', // финал спринта, toome
            'https://web.archive.org/web/20070808171019id_/http://www.eoc2006.ee/results/middlef/mfm.gif', // финал миддла, mfm
            'https://web.archive.org/web/20070419031657id_/http://www.eoc2006.ee:80/results/middlef/mfm1.gif', // финал миддла, mfm1
            'https://web.archive.org/web/20070419045556id_/http://www.eoc2006.ee:80/results/middlef/mfm2.gif', // финал миддла, mfm2
            'https://web.archive.org/web/20061020111036id_/http://www.eoc2006.ee:80/results/middlef/mfm3.gif', // финал миддла, mfm3
            'https://web.archive.org/web/20070419040945id_/http://www.eoc2006.ee:80/results/middlef/mfm13.gif', // финал миддла, mfm13
            'https://web.archive.org/web/20070419112839id_/http://www.eoc2006.ee:80/results/middlef/mfw.gif', // финал миддла, mfw
            'https://web.archive.org/web/20070419200915id_/http://www.eoc2006.ee:80/results/middlef/mfw1.gif', // финал миддла, mfw1
            'https://web.archive.org/web/20061019153904id_/http://www.eoc2006.ee:80/results/middlef/mfw2.gif', // финал миддла, mfw2
            'https://web.archive.org/web/20070808170700id_/http://www.eoc2006.ee/results/middlef/mfw3.gif', // финал миддла, mfw3
            'https://web.archive.org/web/20070419110657id_/http://www.eoc2006.ee:80/results/middlef/mfw5.gif', // финал миддла, mfw5
            'https://web.archive.org/web/20070419113446id_/http://www.eoc2006.ee:80/results/middlef/mfw13.gif', // финал миддла, mfw13
            'https://web.archive.org/web/20070419031640id_/http://www.eoc2006.ee:80/results/longf/longMen.gif', // финал лонга, longMen
            'https://web.archive.org/web/20070419022212id_/http://www.eoc2006.ee:80/results/longf/longWomen.gif', // финал лонга, longWomen
            'https://web.archive.org/web/20070419035426id_/http://www.eoc2006.ee:80/results/longf/LFM1.gif', // финал лонга, LFM1
            'https://web.archive.org/web/20070419111619id_/http://www.eoc2006.ee:80/results/longf/LFM2.gif', // финал лонга, LFM2
            'https://web.archive.org/web/20070419111538id_/http://www.eoc2006.ee:80/results/longf/LFM3.gif', // финал лонга, LFM3
            'https://web.archive.org/web/20070808172705id_/http://www.eoc2006.ee/results/longf/LWF1.gif', // финал лонга, LWF1
            'https://web.archive.org/web/20070808172627id_/http://www.eoc2006.ee/results/longf/LWF2.gif', // финал лонга, LWF2
            'https://web.archive.org/web/20070419023827id_/http://www.eoc2006.ee:80/results/longf/LWF3.gif', // финал лонга, LWF3
            'https://web.archive.org/web/20060911053947id_/http://www.eoc2006.ee:80/results/relay/relay.jpg', // эстафета
            'https://web.archive.org/web/20060901210626id_/http://www.eoc2006.ee:80/results/relay/relay_m_1_1.gif', // эстафета, мужчины, 1
            'https://web.archive.org/web/20060902022715id_/http://www.eoc2006.ee:80/results/relay/relay_m_1_2.gif', // эстафета, мужчины, 2
            'https://web.archive.org/web/20060905001210id_/http://www.eoc2006.ee:80/results/relay/relay_m_1_3.gif', // эстафета, мужчины, 3
            'https://web.archive.org/web/20060908040052id_/http://www.eoc2006.ee:80/results/relay/relay_w_1_1.gif', // эстафета, женщины, 1
            'https://web.archive.org/web/20060901210639id_/http://www.eoc2006.ee:80/results/relay/relay_w_1_2.gif', // эстафета, женщины, 2
            'https://web.archive.org/web/20060902022729id_/http://www.eoc2006.ee:80/results/relay/relay_w_1_3.gif' // эстафета, женщины, 3
        ],
        coord: [58.059444, 26.495833],
        fmt: 'sprint, middle, long, relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20060709_1',
        date: '2006-07-09',
        endDate: '2006-07-14', // по IOF; en.wikipedia: 9–13 июля
        place: 'Joensuu, Finland (Йоэнсуу, Финляндия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2006',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        res: 'https://old.orienteering.sport/events/58/world-mtb-orienteering-championships-2006/',
        coord: [62.6, 29.75],
        type: 'VELO',
        fmt: 'middle, long, relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://web.archive.org/web/20041108193703id_/http://www.woc2006.dk:80/Bulletin_1_july04_scr.pdf',
            // 'https://web.archive.org/web/20051109002353id_/http://www.woc2006.dk:80/BulletinWOC2006nr2.pdf',
            'https://web.archive.org/web/20070103212042id_/http://www.woc2006.dk:80/Bulletin4.pdf'
        ],
        res: 'https://web.archive.org/web/20200706035725/https://old.orienteering.org/events/?event_id=37',
        maps: [
            // карты с сайта организаторов (Wayback Machine, woc2006.dk):
            'https://web.archive.org/web/20071221065158id_/http://www.woc2006.dk/dk/img/lang_kval1.jpg', // квалификация лонга, 1
            'https://web.archive.org/web/20071221065231id_/http://www.woc2006.dk/dk/img/lang_kval2.jpg', // квалификация лонга, 2
            'https://web.archive.org/web/20071221065321id_/http://www.woc2006.dk/dk/img/lang_finale1.jpg', // финал лонга, 1
            'https://web.archive.org/web/20071221065346id_/http://www.woc2006.dk/dk/img/lang_finale2.jpg', // финал лонга, 2
            'https://web.archive.org/web/20061129144537id_/http://www.woc2006.dk:80/dk/img/mellem_kval1.jpg', // квалификация миддла, 1
            'https://web.archive.org/web/20061129144820id_/http://www.woc2006.dk:80/dk/img/mellem_kval2.jpg', // квалификация миддла, 2
            'https://web.archive.org/web/20071219130241id_/http://www.woc2006.dk/dk/img/mellem_finale2.jpg', // финал миддла, 2
            'https://web.archive.org/web/20071219130329id_/http://www.woc2006.dk/dk/img/stafet1.jpg', // эстафета, 1
            'https://web.archive.org/web/20071219130345id_/http://www.woc2006.dk/dk/img/stafet2.jpg' // эстафета, 2
        ],
        coord: [56.1572, 10.2107],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20060830_1',
        date: '2006-08-30',
        endDate: '2006-09-03',
        place: 'Warszawa, Poland (Варшава, Польша)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://web.archive.org/web/20060517005656id_/http://www.mtbo.pl:80/eumtboc/files/bulletins1-2.pdf',
            'https://web.archive.org/web/20061211022229id_/http://www.mtbo.pl:80/eumtboc/files/bulletin4.pdf'
        ],
        res: 'https://old.orienteering.sport/events/100/european-mtb-orienteering-championships-2006/',
        maps: [
            // официальные карты организаторов (Wayback Machine, mtbo.pl/eumtboc):
            'https://web.archive.org/web/20070823012409id_/http://www.mtbo.pl/eumtboc/maps/EOC%20Sprint%20M21.jpg', // спринт, M21
            'https://web.archive.org/web/20070823012343id_/http://www.mtbo.pl/eumtboc/maps/EOC%20Sprint%20W21.jpg' // спринт, W21
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'EMTBOC'
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
        res: 'https://old.orienteering.sport/events/130/', // результаты на старом сайте IOF
        coord: [55.7, 36.966667], // координаты региона, не населённого пункта — уточнить
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20070404_1',
        date: '2007-04-04',
        endDate: '2007-04-10', // по IOF и sv.wikipedia; fi.wikipedia: 4–10 июня
        place: 'Castelfiorentino, Tuscany, Italy (Кастельфьорентино, Тоскана, Италия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        res: 'https://old.orienteering.sport/events/98/european-mtb-orienteering-championships-2007/',
        coord: [43.610833, 10.97],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20070805_1',
        date: '2007-08-05',
        endDate: '2007-08-12',
        place: 'Nové Město na Moravě, Czech Republic (Нове-Место-на-Мораве, Чехия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'http://www.mtbo.cz/woc2007',
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2007',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-24.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-45.pdf'
        ],
        res: 'https://old.orienteering.sport/events/57/world-mtb-orienteering-championships-2007/',
        maps: [
            'https://mapy.ceskyorientak.cz/data/jpg/5032a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/4743a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/5036a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/5035a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/5034a.jpg'
        ],
        coord: [49.561389, 16.074167],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
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
        bulletin: 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-42.pdf',
        res: [
            'https://web.archive.org/web/20200706035812/https://old.orienteering.org/events/?event_id=38',
            'http://woc2007.org.ua/files/relay-f-res-m.htm',
            'http://woc2007.org.ua/files/relay-f-res-w.htm'
        ],
        maps: [
            // старые карты районов (Wayback Machine, woc2007.org.ua):
            'https://web.archive.org/web/20071211175225id_/http://www.woc2007.org.ua/oldmapswoc2007/golosievo.gif',
            'https://web.archive.org/web/20071211175025id_/http://www.woc2007.org.ua/oldmapswoc2007/golosievo_park.gif',
            'https://web.archive.org/web/20071211175320id_/http://www.woc2007.org.ua/oldmapswoc2007/kozin_nord.gif',
            'https://web.archive.org/web/20071211174955id_/http://www.woc2007.org.ua/oldmapswoc2007/kozyn_south.gif',
            'https://web.archive.org/web/20071211175153id_/http://www.woc2007.org.ua/oldmapswoc2007/lesnichestvo.gif',
            'https://web.archive.org/web/20071211175257id_/http://www.woc2007.org.ua/oldmapswoc2007/museum_wow.gif',
            'https://web.archive.org/web/20071211175127id_/http://www.woc2007.org.ua/oldmapswoc2007/salut.gif',
            'https://web.archive.org/web/20071211175100id_/http://www.woc2007.org.ua/oldmapswoc2007/stugna.gif'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-111.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-215.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-314.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/bulletin-4.pdf'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin1-EOC2008.pdf',
            // 'http://eoc2008.lof.lv/index.php?id=/bulletins/eoc_bulletin_2.php',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/EOC2008_Bulletin-3.pdf'
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
            // карты с сайта организаторов (Wayback Machine, eoc2008.lof.lv):
            'https://web.archive.org/web/20160422070006id_/http://eoc2008.lof.lv/bildes/kartes/609_staldzene.jpg',
            'https://web.archive.org/web/20160422063512id_/http://eoc2008.lof.lv/bildes/kartes/685_Vcentr.jpg',
            'https://web.archive.org/web/20160422034407id_/http://eoc2008.lof.lv/bildes/kartes/686_Jaunupe.jpg',
            'https://web.archive.org/web/20160422080520id_/http://eoc2008.lof.lv/bildes/kartes/687_Kempings.jpg',
            'https://web.archive.org/web/20160422063524id_/http://eoc2008.lof.lv/bildes/kartes/709_piejurasPark.jpg',
            'https://web.archive.org/web/20160422063626id_/http://eoc2008.lof.lv/bildes/treninu_karte.jpg' // тренировочная карта
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
            // 'https://mapy.ceskyorientak.cz/mapa/olomouc-botanicka-zahrada-2008',
            'https://mapy.ceskyorientak.cz/data/jpg/5046a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/5045a.jpg'
        ],
        coord: [49.593889, 17.250833],
        fmt: 'sprint, middle, long, relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20080715_1',
        parent: 'IOF_20080710_1',
        date: '2008-07-15',
        name: 'WOC #1, лонг (квалификация)',
        place: 'Olomouc, Czech Republic (Оломоуц, Чехия)',
        maps: 'https://mapy.ceskyorientak.cz/data/jpg/5061a.jpg',
        coord: [49.593889, 17.250833],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20080717_1',
        parent: 'IOF_20080710_1',
        date: '2008-07-17',
        name: 'WOC #2, миддл (квалификация и финал)',
        place: 'Olomouc, Czech Republic (Оломоуц, Чехия)',
        maps: [
            // 'https://mapy.ceskyorientak.cz/mapa/mazance-2008',
            'https://mapy.ceskyorientak.cz/data/jpg/5048a.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/5047a.jpg'
        ],
        coord: [49.593889, 17.250833],
        fmt: 'middle',
        start: 'WOC'
    },
    {
        id: 'IOF_20080719_1',
        parent: 'IOF_20080710_1',
        date: '2008-07-19',
        name: 'WOC #3, лонг',
        place: 'Olomouc, Czech Republic (Оломоуц, Чехия)',
        maps: [
            // 'https://mapy.ceskyorientak.cz/mapa/boudy-foot-15000-2008',
            'https://mapy.ceskyorientak.cz/data/jpg/5055a.jpg'
        ],
        coord: [49.593889, 17.250833],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20080720_1',
        parent: 'IOF_20080710_1',
        date: '2008-07-20',
        name: 'WOC #4, эстафета',
        place: 'Olomouc, Czech Republic (Оломоуц, Чехия)',
        maps: [
            // 'https://mapy.ceskyorientak.cz/mapa/olsana-2008',
            'https://mapy.ceskyorientak.cz/data/jpg/5056a.jpg'
        ],
        coord: [49.593889, 17.250833],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20080824_1',
        date: '2008-08-24',
        endDate: '2008-08-31',
        place: 'Ostróda, Poland (Оструда, Польша)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2008',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/bulletin-nr1.doc',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-23.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-33.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-44.pdf'
        ],
        res: 'https://old.orienteering.sport/events/50/world-mtb-orienteering-championships-2008/',
        coord: [53.7, 19.966667],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20080922_1',
        date: '2008-09-22',
        endDate: '2008-09-27',
        place: 'Nida, Lithuania (Нида, Литва)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        res: 'https://old.orienteering.sport/events/97/european-mtb-orienteering-championships-2008/',
        coord: [55.303333, 21.005556],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/bulletin1.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/bulletin2.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-39.pdf'
        ],
        res: 'https://old.orienteering.sport/events/131/', // результаты на старом сайте IOF
        maps: [
            // старая карта района (Wayback Machine, orienteering.or.jp/swoc2009):
            'https://web.archive.org/web/20140602075315id_/http://www.orienteering.or.jp/swoc2009/archives/oldmap_rusutsu.jpg'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20090622_1',
        date: '2009-06-22',
        endDate: '2009-06-28',
        place: 'Hillerød, North Zealand, Denmark (Хиллерёд, Северная Зеландия, Дания)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-25.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-34.pdf'
        ],
        res: 'https://old.orienteering.sport/events/96/european-mtb-orienteering-championships-2009/',
        coord: [55.933333, 12.316667],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20090809_1',
        date: '2009-08-09',
        endDate: '2009-08-16',
        place: 'Ben Shemen, Israel (Бен-Шемен, Израиль)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://www.nivut.org.il/mtbo/default.aspx',
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2009',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-13.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-2_more-information.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-22.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-32.pdf'
        ],
        res: 'https://old.orienteering.sport/events/49/world-mtb-orienteering-championships-2009/',
        maps: [
            // карты с сайта организаторов (Wayback Machine, nivut.org.il/mtbo):
            'https://web.archive.org/web/20120226142051id_/http://www.nivut.org.il/mtbo/Maps/Eshtaol.jpg',
            'https://web.archive.org/web/20120226142110id_/http://www.nivut.org.il/mtbo/Maps/Haruvit.jpg',
            'https://web.archive.org/web/20120226142032id_/http://www.nivut.org.il/mtbo/Maps/beshemen.jpg',
            'https://web.archive.org/web/20120226142010id_/http://www.nivut.org.il/mtbo/Maps/neotk.jpg',
            'https://web.archive.org/web/20111008113120id_/http://www.nivut.org.il/mtbo/Images/events%20map%20ocad.jpg'
        ],
        coord: [31.953889, 34.925],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
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
            'https://news.worldofo.com/wp-content/uploads/2009/08/mapwomensmall.jpg',
            'https://news.worldofo.com/wp-content/uploads/2009/08/mapwomen1_s.jpg'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-19.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-213.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-312.pdf'
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
        bulletin: [
            // 'http://eoc2010.orienteering.bg/images/util/EOC_2010.pdf',
            // 'http://eoc2010.orienteering.bg/images/util/bulletin2.pdf',
            // 'http://eoc2010.orienteering.bg/images/util/bulletin3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-4_EOC2010.pdf'
        ],
        res: 'https://old.orienteering.sport/events/262/', // результаты на старом сайте IOF
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
        res: [
            'http://eoc2010.orienteering.bg/files/results_sprint_q_men.pdf', // квалификация, мужчины
            'http://eoc2010.orienteering.bg/files/results_sprint_q_women.pdf', // квалификация, женщины
            'http://eoc2010.orienteering.bg/files/results_sprint_f_men.pdf', // финал, мужчины
            'http://eoc2010.orienteering.bg/files/results_sprint_f_women.pdf' // финал, женщины
        ],
        maps: [
            // 'https://omaps.worldofo.com/index.php?id=24447',
            // 'https://omaps.worldofo.com/index.php?id=24511',
            // 'https://omaps.worldofo.com/index.php?id=24512',
            // 'https://omaps.worldofo.com/index.php?id=24514',
            'https://web.archive.org/web/20121101194256id_/http://www.eoc2010.bgorienteering.com/maps/sprint_f_men_a.png',
            'https://web.archive.org/web/20140911070633id_/http://www.eoc2010.bgorienteering.com/maps/sprint_f_women_a.png',
            // официальные карты организаторов (Wayback Machine, eoc2010.bgorienteering.com):
            'https://web.archive.org/web/20160316003539id_/http://eoc2010.bgorienteering.com/maps/sprint_q_men_a.png', // квалификация, мужчины, забег A
            'https://web.archive.org/web/20160315235649id_/http://eoc2010.bgorienteering.com/maps/sprint_q_men_b.png', // квалификация, мужчины, забег B
            'https://web.archive.org/web/20160316000652id_/http://eoc2010.bgorienteering.com/maps/sprint_q_men_c.png', // квалификация, мужчины, забег C
            'https://web.archive.org/web/20160315235445id_/http://eoc2010.bgorienteering.com/maps/sprint_q_women_a.png', // квалификация, женщины, забег A
            'https://web.archive.org/web/20160316003336id_/http://eoc2010.bgorienteering.com/maps/sprint_q_women_b.png', // квалификация, женщины, забег B
            'https://web.archive.org/web/20160316001715id_/http://eoc2010.bgorienteering.com/maps/sprint_q_women_c.png', // квалификация, женщины, забег C
            'https://web.archive.org/web/20160321101554id_/http://eoc2010.bgorienteering.com/maps/sprint_f_men_b.png', // финал, мужчины, вариант B
            'https://web.archive.org/web/20160321084851id_/http://eoc2010.bgorienteering.com/maps/sprint_f_women_b.png' // финал, женщины, вариант B
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
        res: [
            'http://eoc2010.orienteering.bg/files/results_long_q_men.pdf', // мужчины
            'http://eoc2010.orienteering.bg/files/results_long_q_women.pdf' // женщины
        ],
        maps: [
            // 'https://omaps.worldofo.com/index.php?id=24515',
            // 'https://omaps.worldofo.com/index.php?id=24541',
            // официальные карты организаторов из Wayback Machine (найдены через omaps.worldofo.com):
            // 'https://omaps.worldofo.com/index.php?id=24551',
            'https://web.archive.org/web/20160322143759id_/http://eoc2010.bgorienteering.com/maps/long_q_men_a.png',
            // 'https://omaps.worldofo.com/index.php?id=24552',
            'https://web.archive.org/web/20160322135627id_/http://eoc2010.bgorienteering.com/maps/long_q_men_b.png',
            // 'https://omaps.worldofo.com/index.php?id=24553',
            'https://web.archive.org/web/20160322141237id_/http://eoc2010.bgorienteering.com/maps/long_q_men_c.png',
            // 'https://omaps.worldofo.com/index.php?id=24548',
            'https://web.archive.org/web/20160322140138id_/http://eoc2010.bgorienteering.com/maps/long_q_women_a.png',
            // 'https://omaps.worldofo.com/index.php?id=24549',
            'https://web.archive.org/web/20160322143139id_/http://eoc2010.bgorienteering.com/maps/long_q_women_b.png',
            // 'https://omaps.worldofo.com/index.php?id=24550',
            'https://web.archive.org/web/20160322142431id_/http://eoc2010.bgorienteering.com/maps/long_q_women_c.png'
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
        res: [
            'http://eoc2010.orienteering.bg/files/results_middle_q_men.pdf', // мужчины
            'http://eoc2010.orienteering.bg/files/results_middle_q_women.pdf' // женщины
        ],
        maps: [
            // официальные карты организаторов из Wayback Machine (найдены через omaps.worldofo.com):
            // 'https://omaps.worldofo.com/index.php?id=24582',
            'https://web.archive.org/web/20140903183656id_/http://www.eoc2010.bgorienteering.com/maps/middle_q_men_a.jpg',
            // 'https://omaps.worldofo.com/index.php?id=24583',
            'https://web.archive.org/web/20140903185007id_/http://www.eoc2010.bgorienteering.com/maps/middle_q_men_b.jpg',
            // 'https://omaps.worldofo.com/index.php?id=24584',
            'https://web.archive.org/web/20160320132657id_/http://eoc2010.bgorienteering.com/maps/middle_q_men_c.jpg',
            // 'https://omaps.worldofo.com/index.php?id=24579',
            'https://web.archive.org/web/20140903173011id_/http://www.eoc2010.bgorienteering.com/maps/middle_q_women_a.jpg',
            // 'https://omaps.worldofo.com/index.php?id=24580',
            'https://web.archive.org/web/20140903234517id_/http://www.eoc2010.bgorienteering.com/maps/middle_q_women_b.jpg',
            // 'https://omaps.worldofo.com/index.php?id=24581',
            'https://web.archive.org/web/20140903123341id_/http://www.eoc2010.bgorienteering.com/maps/middle_q_women_c.jpg'
        ],
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
        res: [
            'http://eoc2010.orienteering.bg/files/results_relay_men.pdf', // мужчины
            'http://eoc2010.orienteering.bg/files/results_relay_women.pdf' // женщины
        ],
        maps: [
            // 'https://news.worldofo.com/2010/06/02/eoc-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=24639',
            'https://web.archive.org/web/20160405113452id_/http://www.eoc2010.bgorienteering.com/maps/relay_men.jpg',
            'https://web.archive.org/web/20160405102140id_/http://www.eoc2010.bgorienteering.com/maps/relay_women.jpg'
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
        res: [
            'http://eoc2010.orienteering.bg/files/results_middle_f_men.pdf', // мужчины
            'http://eoc2010.orienteering.bg/files/results_middle_f_women.pdf' // женщины
        ],
        maps: [
            // 'https://news.worldofo.com/2010/06/04/eoc-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/index.php?id=24726',
            // 'https://omaps.worldofo.com/index.php?id=24727',
            'https://web.archive.org/web/20121101194212id_/http://www.eoc2010.bgorienteering.com/maps/middle_f_men_a.jpg',
            'https://web.archive.org/web/20140807051515id_/http://www.eoc2010.bgorienteering.com/maps/middle_f_women_a.jpg',
            // официальные карты организаторов (Wayback Machine, eoc2010.bgorienteering.com):
            'https://web.archive.org/web/20160314174915id_/http://eoc2010.bgorienteering.com/maps/middle_f_men_b.jpg', // мужчины, вариант B
            'https://web.archive.org/web/20160315012505id_/http://eoc2010.bgorienteering.com/maps/middle_f_women_b.jpg' // женщины, вариант B
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
        res: [
            'http://eoc2010.orienteering.bg/files/results_long_f_men.pdf', // мужчины
            'http://eoc2010.orienteering.bg/files/results_long_f_women.pdf' // женщины
        ],
        maps: [
            // 'https://news.worldofo.com/2010/06/05/eoc-long-gold-for-niggli-and-hubmann/',
            // 'https://omaps.worldofo.com/index.php?id=24742',
            // 'https://omaps.worldofo.com/index.php?id=24743',
            // официальные карты организаторов (Wayback Machine, eoc2010.bgorienteering.com):
            'https://web.archive.org/web/20160404225817id_/http://eoc2010.bgorienteering.com/maps/long_f_men_A.jpg', // мужчины
            'https://web.archive.org/web/20160404234457id_/http://eoc2010.bgorienteering.com/maps/long_f_women_A.jpg' // женщины
        ],
        coord: [42.266667, 27.766667],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20100711_1',
        date: '2010-07-11',
        endDate: '2010-07-17',
        place: 'Montalegre, Portugal (Монталегре, Португалия)',
        name: 'Чемпионат мира (WMTBOC)',
        // сайт не работает: mtbwoc2010.fpo.pt
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2010',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-12.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-21.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-31.pdf'
        ],
        res: 'https://old.orienteering.sport/events/48/world-mtb-orienteering-championships-2010/',
        maps: [
            // найдены через omaps.worldofo.com (Suggested maps):
            // 'https://omaps.worldofo.com/index.php?id=30829', // спринт, M21
            'https://web.archive.org/web/20140822051644id_/http://mtbwoc2010.fpo.pt/images/stories/maps/SprintFinal/WOCMen.png'
        ],
        coord: [41.823056, -7.791667],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20100808_1',
        date: '2010-08-08',
        endDate: '2010-08-15',
        place: 'Trondheim, Norway (Тронхейм, Норвегия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2010.com
        link: 'https://en.wikipedia.org/wiki/2010_World_Orienteering_Championships',
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-1-WOC-2010.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-2-WOC-2010.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-3-WOC-2010.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-4-WOC-20101.pdf'
        ],
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
            'https://web.archive.org/web/20140829052946id_/http://woc2010.com/images/stories/woc/maps/sprint-final/woc2010sprintfinalmen.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20100808_sprint_w/map',
            'https://www.tulospalvelu.fi/gps/20100808_sprint_m/map'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20100809_mid_q_w1/map',
            'https://www.tulospalvelu.fi/gps/20100809_mid_q_w2/map',
            'https://www.tulospalvelu.fi/gps/20100809_mid_q_w3/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20100810_long_q_m1/map',
            'https://www.tulospalvelu.fi/gps/20100810_long_q_m2/map',
            'https://www.tulospalvelu.fi/gps/20100810_long_q_m3/map'
        ],
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
            'https://web.archive.org/web/20140829062416id_/http://woc2010.com/images/stories/woc/maps/long-final/woc2010longfinalwomen.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20100812_long_f_m/map',
            'https://www.tulospalvelu.fi/gps/20100812_long_f_w/map'
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
            'https://web.archive.org/web/20140829060930id_/http://woc2010.com/images/stories/woc/maps/middle-final/woc2010middlefinalmen.jpg',
            'https://web.archive.org/web/20170314121232id_/http://woc2010.com/images/stories/woc/maps/middle-final/woc2010middlefinalwomen.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20100814_middle_f_m/map',
            'https://www.tulospalvelu.fi/gps/20100814_middle_f_w/map'
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20100815_relay_m1/map',
            'https://www.tulospalvelu.fi/gps/20100815_relay_m2/map',
            // 'https://www.tulospalvelu.fi/gps/20100815_relay_m3/map', // duplicate of https://www.tulospalvelu.fi/gps/20100815_relay_m2/map
            'https://www.tulospalvelu.fi/gps/20100815_relay_w1/map',
            'https://www.tulospalvelu.fi/gps/20100815_relay_w2/map',
            'https://www.tulospalvelu.fi/gps/20100815_relay_w3/map'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-110.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-214.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-313.pdf'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110202EOCM/map',
            'https://www.tulospalvelu.fi/gps/20110202EOCW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110204EOCM/map',
            'https://www.tulospalvelu.fi/gps/20110204EOCW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110205EOCM1/map',
            'https://www.tulospalvelu.fi/gps/20110205EOCM2/map',
            'https://www.tulospalvelu.fi/gps/20110205EOCW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110206EOCM/map',
            'https://www.tulospalvelu.fi/gps/20110206EOCW/map'
        ],
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-17.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-211.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/03/Bulletin-4.pdf'
        ],
        res: 'https://old.orienteering.sport/events/132/', // результаты на старом сайте IOF
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
        maps: [
            // 'https://omaps.worldofo.com/index.php?id=34500',
            'https://www.tulospalvelu.fi/gps/20110322sprintM/map',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110322sprintW/map'
        ],
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
        maps: [
            // 'https://omaps.worldofo.com/index.php?id=34540',
            // 'https://omaps.worldofo.com/index.php?id=34537',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110323middleM1/map',
            'https://www.tulospalvelu.fi/gps/20110323m2/map',
            'https://www.tulospalvelu.fi/gps/20110323middleW1/map',
            'https://www.tulospalvelu.fi/gps/20110323w2/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110324sprintrelay/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110326longM/map',
            'https://www.tulospalvelu.fi/gps/20110326longM2/map',
            'https://www.tulospalvelu.fi/gps/20110326longW/map',
            'https://www.tulospalvelu.fi/gps/20110326longW2/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110327relayM/map',
            'https://www.tulospalvelu.fi/gps/20110327relayW/map'
        ],
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-1-WOC-2011.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-2-WOC-2011.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/06/Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/08/Bulletin-41.pdf'
        ],
        res: 'https://web.archive.org/web/20200706040305/https://old.orienteering.org/events/?event_id=53',
        maps: 'https://web.archive.org/web/20140602110930id_/http://live.woc2011.fr/data/uploads/maps/19082011/FinaleMD.Women.gif',
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110816wocsprintM/map',
            'https://www.tulospalvelu.fi/gps/20110816wocsprintW/map'
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110817woclongM/map',
            'https://www.tulospalvelu.fi/gps/20110817woclongW/map'
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110819wocmiddleM/map',
            'https://www.tulospalvelu.fi/gps/20110819wocmiddleW/map'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20110821wocrelayM12/map',
            'https://www.tulospalvelu.fi/gps/20110821wocrelayM3/map',
            'https://www.tulospalvelu.fi/gps/20110821wocrelayW12/map',
            'https://www.tulospalvelu.fi/gps/20110821wocrelayW3/map'
        ],
        coord: [45.583333, 6.333333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20110820_2',
        date: '2011-08-20',
        endDate: '2011-08-28',
        place: 'Vicenza, Italy (Виченца, Италия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'http://www.mtbo2011.org/',
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2011',
            'https://de.wikipedia.org/wiki/Mountainbike-Orienteering-Weltmeisterschaften_2011',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-11.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-2.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/08/Bulletin-31.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/08/Bulletin-42.pdf'
        ],
        res: 'https://old.orienteering.sport/events/14/world-mtb-orienteering-championships-2011/',
        maps: [
            // карты с сайта организаторов (Wayback Machine, mtbo2011.org):
            'https://web.archive.org/web/20120518234106id_/http://www.mtbo2011.org/public/mappe/m240811_174805.jpg',
            'https://web.archive.org/web/20120518233814id_/http://www.mtbo2011.org/public/mappe/m240811_175010.jpg',
            'https://web.archive.org/web/20120518234021id_/http://www.mtbo2011.org/public/mappe/m240811_175459.jpg',
            'https://web.archive.org/web/20120518234327id_/http://www.mtbo2011.org/public/mappe/m240811_180133.jpg'
        ],
        coord: [45.55, 11.55],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20110917_1',
        date: '2011-09-17',
        endDate: '2011-09-25',
        place: 'Leningrad Oblast, Russia (Ленинградская область, Россия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/07/Bulletin-1-2.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/09/Bulletin-3.11.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2011/09/Bulletin-42.pdf'
        ],
        res: 'https://old.orienteering.sport/events/95/european-mtb-orienteering-championships-2011/',
        coord: [60.05, 31.75], // координаты региона, не населённого пункта — уточнить
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/11/Bulletin-2.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/02/Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2012/02/Bulletin-4.pdf'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/01/Bulletin-1-EOC2012.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/06/Bulletin-2.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2012/06/Bulletin-41.pdf'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-B/map',
            'https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-A/map',
            'https://www.tulospalvelu.fi/gps/20120514EOCMidWQ-C/map',
            // официальные карты организаторов (Wayback Machine, eoc2012.se):
            'https://web.archive.org/web/20121107171523id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEQUAL_Men-A_200dpi.gif', // мужчины, забег A
            'https://web.archive.org/web/20121107164239id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEQUAL_Men-B_200dpi.gif', // мужчины, забег B
            'https://web.archive.org/web/20121107164118id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEQUAL_Men-C_200dpi.gif', // мужчины, забег C
            'https://web.archive.org/web/20121107171341id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEQUAL_Women-A_200dpi.gif', // женщины, забег A
            'https://web.archive.org/web/20121107164156id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEQUAL_Women-B_200dpi.gif', // женщины, забег B
            'https://web.archive.org/web/20121107164218id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEQUAL_Women-C_200dpi.gif' // женщины, забег C
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-A/map',
            'https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-B/map',
            'https://www.tulospalvelu.fi/gps/20120515EOCLongMQ-C/map',
            // официальные карты организаторов (Wayback Machine, eoc2012.se):
            'https://web.archive.org/web/20121004183924id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGQUAL_Men-A_200dpi.gif', // мужчины, забег A
            'https://web.archive.org/web/20121107185706id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGQUAL_Men-B_200dpi.gif', // мужчины, забег B
            'https://web.archive.org/web/20121107180913id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGQUAL_Men-C_200dpi.gif', // мужчины, забег C
            'https://web.archive.org/web/20121107180651id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGQUAL_Women-A_200dpi.gif', // женщины, забег A
            'https://web.archive.org/web/20121107180111id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGQUAL_Women-B_200dpi.gif', // женщины, забег B
            'https://web.archive.org/web/20121107180558id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGQUAL_Women-C_200dpi.gif' // женщины, забег C
        ],
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
        maps: [
            // официальные карты организаторов (Wayback Machine, eoc2012.se):
            'https://web.archive.org/web/20121107173406id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_SPRINTQUAL_Men-A_200dpi.gif', // мужчины, забег A
            'https://web.archive.org/web/20121107173724id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_SPRINTQUAL_Men-B_200dpi.gif', // мужчины, забег B
            'https://web.archive.org/web/20121107173909id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_SPRINTQUAL_Men-C_200dpi.gif', // мужчины, забег C
            'https://web.archive.org/web/20121107173803id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_SPRINTQUAL_Women-A_200dpi.gif', // женщины, забег A
            'https://web.archive.org/web/20121107173449id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_SPRINTQUAL_Women-B_200dpi.gif', // женщины, забег B
            'https://web.archive.org/web/20121107173631id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_SPRINTQUAL_Women-C_200dpi.gif' // женщины, забег C
        ],
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
            'https://web.archive.org/web/20121004183820id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_MIDDLE_M_low-quality2.jpg',
            'https://web.archive.org/web/20121107160813id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_MIDDLE_W_low-quality1.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120517EOCMidMF/map', // duplicate of https://web.archive.org/web/20121004183820id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_MIDDLE_M_low-quality2.jpg
            'https://www.tulospalvelu.fi/gps/20120517EOCMidWF/map', // duplicate of https://web.archive.org/web/20121107160813id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_MIDDLE_W_low-quality1.jpg
            // официальные карты организаторов (Wayback Machine, eoc2012.se):
            'https://web.archive.org/web/20130811212423id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEFINAL_B_final_Men_200dpi.gif', // финал B, мужчины
            'https://web.archive.org/web/20121107160645id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_MIDDLEFINAL_B_final_Women_200dpi.gif' // финал B, женщины
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
            'https://web.archive.org/web/20121004155153id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_LONG_M_low-quality.jpg',
            'https://web.archive.org/web/20121004155240id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_LONG_W_low-quality.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120518EOCLongMF/map', // duplicate of https://web.archive.org/web/20121004155153id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Skattungbyn_LONG_M_low-quality.jpg
            'https://www.tulospalvelu.fi/gps/20120518EOCLongWF/map',
            // официальные карты организаторов (Wayback Machine, eoc2012.se):
            'https://web.archive.org/web/20121107173228id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGFINAL_B_final_Men_200dpi.gif', // финал B, мужчины
            'https://web.archive.org/web/20121107171614id_/http://www.eoc2012.se/wp-content/uploads/2012/05/EOC_LONGFINAL_B_final_Women_200dpi.gif' // финал B, женщины
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
        maps: [
            'https://web.archive.org/web/20121107134804id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_SPRINT_M_low-quality.jpg',
            'https://web.archive.org/web/20121107134631id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_SPRINT_W_low-quality.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120519EOCSprintMF/map', // duplicate of https://web.archive.org/web/20121107134804id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_SPRINT_M_low-quality.jpg
            'https://www.tulospalvelu.fi/gps/20120519EOCSprintWF/map' // duplicate of https://web.archive.org/web/20121107134631id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_SPRINT_W_low-quality.jpg
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120520EOCRelM1/map',
            'https://www.tulospalvelu.fi/gps/20120520EOCRelM2/map',
            'https://www.tulospalvelu.fi/gps/20120520EOCRelM3/map',
            'https://www.tulospalvelu.fi/gps/20120520EOCRelW3/map',
            'https://www.tulospalvelu.fi/gps/20120520EOCRelW1/map',
            'https://www.tulospalvelu.fi/gps/20120520EOCRelW2/map',
            // официальные карты организаторов (Wayback Machine, eoc2012.se):
            'https://web.archive.org/web/20121004181727id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_RELAY_M_leg1.jpg', // мужчины, этап 1
            'https://web.archive.org/web/20121004171245id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_RELAY_M_leg2.jpg', // мужчины, этап 2
            'https://web.archive.org/web/20121004183616id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_RELAY_W_leg1.jpg', // женщины, этап 1
            'https://web.archive.org/web/20121004171131id_/http://www.eoc2012.se/wp-content/uploads/2012/05/Hillshaded-Falun_RELAY_W_leg2.jpg' // женщины, этап 2
        ],
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-1-WOC-2012.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2011/10/Bulletin-2.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/05/Bulletin-32.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2012/07/Bulletin-41.pdf'
        ],
        res: 'https://web.archive.org/web/20160812223959/http://orienteering.org/events/?event_id=54',
        maps: [
            'https://news.worldofo.com/wp-content/uploads/2012/07/mapsprint.png',
            'https://news.worldofo.com/wp-content/uploads/2012/07/mapmenq.png',
            'https://web.archive.org/web/20130812043743id_/http://www.woc2012.ch/files/maps/maps_ldf.pdf',
            'https://web.archive.org/web/20130812034719id_/http://www.woc2012.ch/files/maps/maps_mdf.pdf',
            'https://web.archive.org/web/20120803021100id_/http://www.woc2012.ch/files/maps/maps_spf.pdf'
        ],
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120714WOCSprM-Web/map',
            'https://www.tulospalvelu.fi/gps/20120714WOCSprW-Web/map'
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
            'https://www.tulospalvelu.fi/gps/20120717WOCMidM-Web/map',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120717WOCMidW-Web/map'
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
            'https://www.tulospalvelu.fi/gps/20120719WOCLongW-Web/map',
            // 'https://omaps.worldofo.com/index.php?id=65178',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120719WOCLongM-Web/map'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120721WOCRelM1-Web/map',
            'https://www.tulospalvelu.fi/gps/20120721WOCRelM2-Web/map',
            'https://www.tulospalvelu.fi/gps/20120721WOCRelM3-Web/map',
            'https://www.tulospalvelu.fi/gps/20120721WOCRelW1-Web/map',
            'https://www.tulospalvelu.fi/gps/20120721WOCRelW2-Web/map',
            'https://www.tulospalvelu.fi/gps/20120721WOCRelW3-Web/map'
        ],
        coord: [46.52, 6.633333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20120820_1',
        date: '2012-08-20',
        endDate: '2012-08-25',
        place: 'Veszprém, Hungary (Веспрем, Венгрия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'http://www.mtbo.hu/mtbwoc2012.php',
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2012',
            'https://de.wikipedia.org/wiki/Mountainbike-Orienteering-Weltmeisterschaften_2012',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/02/Bulletin-1.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/01/Bulletin-23.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2012/06/Bulletin-31.pdf'
        ],
        res: 'https://old.orienteering.sport/events/46/world-mtb-orienteering-championships-2012/',
        coord: [47.09296, 17.91377],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20120821_1',
        parent: 'IOF_20120820_1',
        date: '2012-08-21',
        name: 'WMTBOC #1, спринт',
        place: 'Veszprém, Hungary (Веспрем, Венгрия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120821mtbsprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/20120821mtbsprintW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120821mtbsprintM/map',
            'https://www.tulospalvelu.fi/gps/20120821mtbsprintW/map'
        ],
        coord: [47.09296, 17.91377],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20120822_1',
        parent: 'IOF_20120820_1',
        date: '2012-08-22',
        name: 'WMTBOC #2, миддл',
        place: 'Veszprém, Hungary (Веспрем, Венгрия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120822mtbmiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/20120822mtbmiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120822mtbmiddleM/map',
            'https://www.tulospalvelu.fi/gps/20120822mtbmiddleW/map'
        ],
        coord: [47.09296, 17.91377],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20120824_1',
        parent: 'IOF_20120820_1',
        date: '2012-08-24',
        name: 'WMTBOC #3, эстафета',
        place: 'Veszprém, Hungary (Веспрем, Венгрия)',
        gps: {
            'M-1+2': 'https://www.tulospalvelu.fi/gps/20120824mtbrelayM12/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20120824mtbrelayM3/',
            'W-1+2': 'https://www.tulospalvelu.fi/gps/20120824mtbrelayW12/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20120824mtbrelayW3/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120824mtbrelayM12/map',
            'https://www.tulospalvelu.fi/gps/20120824mtbrelayM3/map',
            'https://www.tulospalvelu.fi/gps/20120824mtbrelayW12/map',
            'https://www.tulospalvelu.fi/gps/20120824mtbrelayW3/map'
        ],
        coord: [47.09296, 17.91377],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20120825_1',
        parent: 'IOF_20120820_1',
        date: '2012-08-25',
        name: 'WMTBOC #4, лонг',
        place: 'Veszprém, Hungary (Веспрем, Венгрия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20120825mtblongM/',
            'W': 'https://www.tulospalvelu.fi/gps/20120825mtblongW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20120825mtblongM/map',
            'https://www.tulospalvelu.fi/gps/20120825mtblongW/map'
        ],
        coord: [47.09296, 17.91377],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2012/02/Bulletin-11.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/07/Bulletin-2-ESOC1.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/12/Bulletin-3-ESOC.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2013/02/Bulletin-4-_ESOC.pdf'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2012/12/Bulletin-1.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/12/Bulletin-2.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/02/Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2013/03/Bulletin-4.pdf'
        ],
        res: 'https://old.orienteering.sport/events/327/', // результаты на старом сайте IOF
        coord: [50.35, 83.516667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20130615_1',
        date: '2013-06-15',
        endDate: '2013-06-23',
        place: 'Zamość, Poland (Замосць, Польша)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2012/10/Bulletin-14.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/05/Bulletin-2.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/05/EMTBOC-2013-Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2013/06/Bulletin-4.pdf'
        ],
        res: 'https://old.orienteering.sport/events/332/european-mtb-orienteering-championships-2013/',
        maps: [
            // карты с сайта организаторов (Wayback Machine, emtboc2013.pl):
            'https://web.archive.org/web/20130601065120id_/http://www.emtboc2013.pl/adamowfull.jpg',
            'https://web.archive.org/web/20130601061927id_/http://www.emtboc2013.pl/bialkafull.jpg',
            'https://web.archive.org/web/20130601063525id_/http://www.emtboc2013.pl/bondyrzfull.jpg',
            'https://web.archive.org/web/20130601063711id_/http://www.emtboc2013.pl/krasnobrodfull.jpg',
            'https://web.archive.org/web/20130601061938id_/http://www.emtboc2013.pl/panskafull.jpg'
        ],
        coord: [50.716667, 23.252778],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2011/09/Bulletin-12.pdf',
            // 'http://julkaisut.sslmedia.info/woc2013/bulletin2/',
            // 'https://old.orienteering.sport/wp-content/uploads/2012/10/Bulletin-21.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/11/Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2013/07/Bulletin-4.pdf'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2013wocLongQall/map',
            'https://www.tulospalvelu.fi/gps/2013wocLongQ1/map',
            'https://www.tulospalvelu.fi/gps/2013wocLongQ2/map',
            'https://www.tulospalvelu.fi/gps/2013wocLongQ3/map'
        ],
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
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Sprint-F-Women.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2013WOCsprintQM1/map',
            'https://www.tulospalvelu.fi/gps/2013WOCsprintQM2/map',
            'https://www.tulospalvelu.fi/gps/2013WOCsprintQM3/map',
            'https://www.tulospalvelu.fi/gps/2013WOCsprintQW1/map',
            'https://www.tulospalvelu.fi/gps/2013WOCsprintQW2/map',
            'https://www.tulospalvelu.fi/gps/2013WOCsprintQW3/map',
            'https://www.tulospalvelu.fi/gps/2013wocSprintMen/map',
            'https://www.tulospalvelu.fi/gps/2013wocSprintWomen/map'
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
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Long-F-WOMEN-1.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2013WOCLongM/map',
            'https://www.tulospalvelu.fi/gps/2013WOCLongW/map'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2013mqM1/map',
            'https://www.tulospalvelu.fi/gps/2013mqM2/map',
            'https://www.tulospalvelu.fi/gps/2013mqM3/map',
            'https://www.tulospalvelu.fi/gps/2013mqW1/map',
            'https://www.tulospalvelu.fi/gps/2013mqW2/map',
            'https://www.tulospalvelu.fi/gps/2013mqW3/map'
        ],
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
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Middle-F-WOMEN-1.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2013wocMidM/map',
            'https://www.tulospalvelu.fi/gps/2013wocMidW/map'
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
            'https://www.woc2013.fi/wp-content/uploads/2014/08/Relay-WOMEN.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2013wocRM1/map',
            // 'https://www.tulospalvelu.fi/gps/2013wocRM2/map', // duplicate of https://www.tulospalvelu.fi/gps/2013wocRM1/map
            'https://www.tulospalvelu.fi/gps/2013wocRM3/map',
            'https://www.tulospalvelu.fi/gps/2013wocRM123/map',
            'https://www.tulospalvelu.fi/gps/2013wocRW1/map',
            // 'https://www.tulospalvelu.fi/gps/2013wocRW2/map', // duplicate of https://www.tulospalvelu.fi/gps/2013wocRW1/map
            'https://www.tulospalvelu.fi/gps/2013wocRW3/map',
            'https://www.tulospalvelu.fi/gps/2013wocRW123/map'
        ],
        coord: [64.1458, 28.2717],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20130826_1',
        date: '2013-08-26',
        endDate: '2013-08-31',
        place: 'Rakvere, Estonia (Раквере, Эстония)',
        name: 'Чемпионат мира (WMTBOC)',
        // сайт не работает: orienteerumine.ee/mtbo2013
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2013',
            'https://de.wikipedia.org/wiki/Mountainbike-Orienteering-Weltmeisterschaften_2013',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2012/12/Bulletin-12.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/01/Bulletin-22.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/07/Bulletin-3.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2013/08/Bulletin-41.pdf'
        ],
        res: 'https://old.orienteering.sport/events/47/world-mtb-orienteering-championships-2013/',
        maps: [
            // официальные карты организаторов (Wayback Machine, orienteerumine.ee/mtbo2013):
            'https://web.archive.org/web/20140821005004id_/http://www.orienteerumine.ee/mtbo2013/sprint/M21.gif', // спринт, M21
            'https://web.archive.org/web/20140820121922id_/http://www.orienteerumine.ee/mtbo2013/sprint/W21.gif', // спринт, W21
            'https://web.archive.org/web/20140821055629id_/http://www.orienteerumine.ee/mtbo2013/middle/M21.gif', // миддл, M21
            'https://web.archive.org/web/20140822000013id_/http://www.orienteerumine.ee/mtbo2013/middle/W21.gif', // миддл, W21
            'https://web.archive.org/web/20140820053053id_/http://www.orienteerumine.ee/mtbo2013/long/M21.gif', // лонг, M21
            'https://web.archive.org/web/20140820034303id_/http://www.orienteerumine.ee/mtbo2013/long/w21.gif' // лонг, W21
        ],
        coord: [59.35, 26.35],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2013/08/Bulletin-11.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/11/Bulletin-2.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2014/02/Bulletin-3.pdf'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20140307esocM/map',
            'https://www.tulospalvelu.fi/gps/20140307esocW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20140308esocM/map',
            'https://www.tulospalvelu.fi/gps/20140308esocW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20140309esocM/map',
            'https://www.tulospalvelu.fi/gps/20140309esocW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20140311esocM/map',
            'https://www.tulospalvelu.fi/gps/20140311esocW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20140312esocM1/map',
            // 'https://www.tulospalvelu.fi/gps/20140312esocM2/map', // duplicate of https://www.tulospalvelu.fi/gps/20140312esocM1/map
            // 'https://www.tulospalvelu.fi/gps/20140312esocM3/map', // duplicate of https://www.tulospalvelu.fi/gps/20140312esocM1/map
            'https://www.tulospalvelu.fi/gps/20140312esocW1/map'
            // 'https://www.tulospalvelu.fi/gps/20140312esocW2/map', // duplicate of https://www.tulospalvelu.fi/gps/20140312esocW1/map
            // 'https://www.tulospalvelu.fi/gps/20140312esocW3/map', // duplicate of https://www.tulospalvelu.fi/gps/20140312esocW1/map
        ],
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2013/04/Bulletin-1.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/09/Bulletin-21.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2014/03/Bulletin-3.pdf'
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
        maps: [
            // официальные карты организаторов из Wayback Machine (найдены через omaps.worldofo.com):
            // 'https://omaps.worldofo.com/index.php?id=108354',
            'https://web.archive.org/web/20140925233614id_/http://eoc2014.fpo.pt/files/maps/middle-distance/qualifying/Men1.jpg',
            // 'https://omaps.worldofo.com/index.php?id=108353',
            'https://web.archive.org/web/20140925232904id_/http://eoc2014.fpo.pt/files/maps/middle-distance/qualifying/Men2.jpg',
            // 'https://omaps.worldofo.com/index.php?id=108352',
            'https://web.archive.org/web/20140925233050id_/http://eoc2014.fpo.pt/files/maps/middle-distance/qualifying/Men3.jpg',
            // 'https://omaps.worldofo.com/index.php?id=108351',
            'https://web.archive.org/web/20140925232841id_/http://eoc2014.fpo.pt/files/maps/middle-distance/qualifying/Women1.jpg',
            // 'https://omaps.worldofo.com/index.php?id=108350',
            'https://web.archive.org/web/20140925233351id_/http://eoc2014.fpo.pt/files/maps/middle-distance/qualifying/Women2.jpg',
            // 'https://omaps.worldofo.com/index.php?id=108349',
            'https://web.archive.org/web/20140925233131id_/http://eoc2014.fpo.pt/files/maps/middle-distance/qualifying/Women3.jpg'
        ],
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
        maps: [
            'https://news.worldofo.com/wp-content/uploads/2014/04/maplongq.png',
            // официальные карты организаторов (Wayback Machine, eoc2014.fpo.pt):
            'https://web.archive.org/web/20140816142938id_/http://eoc2014.fpo.pt/files/maps/long-distance/qualifying/1-Men1.jpg', // мужчины, забег 1
            'https://web.archive.org/web/20140816145543id_/http://eoc2014.fpo.pt/files/maps/long-distance/qualifying/1-Men2.jpg', // мужчины, забег 2
            'https://web.archive.org/web/20140816160144id_/http://eoc2014.fpo.pt/files/maps/long-distance/qualifying/1-Men3.jpg', // мужчины, забег 3
            'https://web.archive.org/web/20140816131904id_/http://eoc2014.fpo.pt/files/maps/long-distance/qualifying/1-Women1.jpg', // женщины, забег 1
            'https://web.archive.org/web/20140816161932id_/http://eoc2014.fpo.pt/files/maps/long-distance/qualifying/1-Women2.jpg', // женщины, забег 2
            'https://web.archive.org/web/20140816153051id_/http://eoc2014.fpo.pt/files/maps/long-distance/qualifying/1-Women3.jpg' // женщины, забег 3
        ],
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
        maps: [
            'https://news.worldofo.com/wp-content/uploads/2014/04/mensprintmap.jpg',
            // официальные карты организаторов (Wayback Machine, eoc2014.fpo.pt):
            'https://web.archive.org/web/20140816142307id_/http://eoc2014.fpo.pt/files/maps/sprint/qualifying/Men_1.jpg', // мужчины, забег 1
            'https://web.archive.org/web/20140816153406id_/http://eoc2014.fpo.pt/files/maps/sprint/qualifying/Men_2.jpg', // мужчины, забег 2
            'https://web.archive.org/web/20140816153428id_/http://eoc2014.fpo.pt/files/maps/sprint/qualifying/Men-3.jpg', // мужчины, забег 3
            'https://web.archive.org/web/20140816150719id_/http://eoc2014.fpo.pt/files/maps/sprint/qualifying/Women-1.jpg', // женщины, забег 1
            'https://web.archive.org/web/20140816144405id_/http://eoc2014.fpo.pt/files/maps/sprint/qualifying/Women-2.jpg', // женщины, забег 2
            'https://web.archive.org/web/20140816134447id_/http://eoc2014.fpo.pt/files/maps/sprint/qualifying/Women-3.jpg' // женщины, забег 3
        ],
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
            'https://omaps.worldofo.com/images/a59833096368f1ea611940cfb6910b7d_l.jpg',
            // официальные карты организаторов (Wayback Machine, eoc2014.fpo.pt):
            'https://web.archive.org/web/20140926003459id_/http://eoc2014.fpo.pt/files/maps/sprint/final/Men%20-%20Final%20A.jpg', // мужчины, финал A
            'https://web.archive.org/web/20140926003422id_/http://eoc2014.fpo.pt/files/maps/sprint/final/Men%20-%20Final%20B.jpg', // мужчины, финал B
            'https://web.archive.org/web/20140926003435id_/http://eoc2014.fpo.pt/files/maps/sprint/final/Women%20-%20Final%20A.jpg', // женщины, финал A
            'https://web.archive.org/web/20140926003446id_/http://eoc2014.fpo.pt/files/maps/sprint/final/Women%20-%20Final%20B.jpg' // женщины, финал B
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
            'https://web.archive.org/web/20141021131854id_/http://traclive.dk/events/event_20140409_Eocetoc/automaps_new/81657700-a401-0131-fa3b-10bf48d758ce/original_middlewomenfinala.png',
            // официальные карты организаторов (Wayback Machine, eoc2014.fpo.pt):
            'https://web.archive.org/web/20140816152307id_/http://eoc2014.fpo.pt/files/maps/middle-final/middlemenfinala.png', // мужчины, финал A
            'https://web.archive.org/web/20140816141558id_/http://eoc2014.fpo.pt/files/maps/middle-final/middlewomenfinala.png' // женщины, финал A
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
            'https://web.archive.org/web/20140925234157id_/http://eoc2014.fpo.pt/files/maps/long-distance/final_15april/menaFinal_15Abril.jpg',
            'https://web.archive.org/web/20140926001007id_/http://eoc2014.fpo.pt/files/maps/long-distance/final_15april/womenaFinal_15Abril.jpg'
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
            // официальные карты организаторов (Wayback Machine, eoc2014.fpo.pt):
            'https://web.archive.org/web/20140816140642id_/http://eoc2014.fpo.pt/files/maps/relay/RelayMenAllvariations.jpg', // мужчины, все рассеивания
            'https://web.archive.org/web/20140816151034id_/http://eoc2014.fpo.pt/files/maps/relay/RelayWomenAllvariations.jpg' // женщины, все рассеивания
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2012/12/Bulletin-11.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2013/09/Bulletin-23.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2014/05/Bulletin-3_updated.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2014/07/bulletin_4_WOC.pdf'
        ],
        maps: 'https://news.worldofo.com/wp-content/uploads/2014/07/mapm.jpg',
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2014wocsprintM/map',
            'https://www.tulospalvelu.fi/gps/2014wocsprintW/map'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2014wocsrelay1/map',
            'https://www.tulospalvelu.fi/gps/2014wocsrelay2/map'
            // 'https://www.tulospalvelu.fi/gps/2014wocsrelay3/map', // duplicate of https://www.tulospalvelu.fi/gps/2014wocsrelay2/map
            // 'https://www.tulospalvelu.fi/gps/2014wocsrelay4/map', // duplicate of https://www.tulospalvelu.fi/gps/2014wocsrelay1/map
        ],
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2014woclongM/map',
            'https://www.tulospalvelu.fi/gps/2014woclongW/map'
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2014wocmiddleM/map',
            'https://www.tulospalvelu.fi/gps/2014wocmiddleW/map'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2014wocrelayM1/map',
            // 'https://www.tulospalvelu.fi/gps/2014wocrelayM2/map', // duplicate of https://www.tulospalvelu.fi/gps/2014wocrelayM1/map
            'https://www.tulospalvelu.fi/gps/2014wocrelayM3/map',
            'https://www.tulospalvelu.fi/gps/2014wocrelayW1/map',
            // 'https://www.tulospalvelu.fi/gps/2014wocrelayW2/map', // duplicate of https://www.tulospalvelu.fi/gps/2014wocrelayW1/map
            'https://www.tulospalvelu.fi/gps/2014wocrelayW3/map'
        ],
        coord: [46.445556, 11.173056],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20140824_1',
        date: '2014-08-24',
        endDate: '2014-08-31',
        place: 'Białystok, Poland (Белосток, Польша)',
        name: 'Чемпионат мира (WMTBOC)',
        // wmtboc2014.pl теперь занят посторонним сайтом — ссылка не включена
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2014',
            'https://de.wikipedia.org/wiki/Mountainbike-Orienteering-Weltmeisterschaften_2014',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2013/02/Bulletin-1.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2014/04/Bulletin-2-updated.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2014/08/Bulletin-3_WMTBOC-2014.pdf'
        ],
        res: 'https://old.orienteering.sport/events/354/world-mtb-orienteering-championships-2014/',
        coord: [53.135278, 23.145556],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150120_esoc_sd_m/map',
            'https://www.tulospalvelu.fi/gps/20150120_esoc_sd_w/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150121_esoc_ld_m/map',
            'https://www.tulospalvelu.fi/gps/20150121_esoc_ld_w/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150122_esoc_srel_2/map',
            'https://www.tulospalvelu.fi/gps/20150122_esoc_srel_1/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150124_esoc_md_m/map',
            'https://www.tulospalvelu.fi/gps/20150124_esoc_md_w/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m1/map',
            // 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m2/map', // duplicate of https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m1/map
            'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_m3/map',
            'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w1/map',
            // 'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w2/map', // duplicate of https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w1/map
            'https://www.tulospalvelu.fi/gps/20150125_esoc_rel_w3/map'
        ],
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
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2013/08/Bulletin-13.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2014/08/Bulletin-2_WSOC-2015-NOR.pdf',
            // 'https://old.orienteering.sport/wp-content/uploads/2014/10/Bulletin-2.1_WSOC-2015-NOR.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2014/12/Bulletin-3_WSOC-JWSOC-2015-NOR.pdf'
        ],
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150210_1',
        parent: 'IOF_20150207_1',
        date: '2015-02-10',
        name: 'SKI-WOC #1, спринт-эстафета',
        place: 'Hamar, Løten, Norway (Хамар, Лётен, Норвегия)',
        gps: {
            'MIX': 'https://www.tulospalvelu.fi/gps/20150210MIX/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150210MIX/map'
        ],
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150211_1',
        parent: 'IOF_20150207_1',
        date: '2015-02-11',
        name: 'SKI-WOC #2, спринт',
        place: 'Hamar, Løten, Norway (Хамар, Лётен, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150211M21/',
            'W': 'https://www.tulospalvelu.fi/gps/20150211W21/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150211M21/map',
            'https://www.tulospalvelu.fi/gps/20150211W21/map'
        ],
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150212_1',
        parent: 'IOF_20150207_1',
        date: '2015-02-12',
        name: 'SKI-WOC #3, лонг',
        place: 'Hamar, Løten, Norway (Хамар, Лётен, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150212M21/',
            'W': 'https://www.tulospalvelu.fi/gps/20150212W21/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150212M21/map',
            'https://www.tulospalvelu.fi/gps/20150212W21/map'
        ],
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150214_1',
        parent: 'IOF_20150207_1',
        date: '2015-02-14',
        name: 'SKI-WOC #4, миддл',
        place: 'Hamar, Løten, Norway (Хамар, Лётен, Норвегия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150214M21/',
            'W': 'https://www.tulospalvelu.fi/gps/20150214W21/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150214M21/map',
            'https://www.tulospalvelu.fi/gps/20150214W21/map'
        ],
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150215_1',
        parent: 'IOF_20150207_1',
        date: '2015-02-15',
        name: 'SKI-WOC #5, эстафета',
        place: 'Hamar, Løten, Norway (Хамар, Лётен, Норвегия)',
        gps: {
            'M-3': 'https://www.tulospalvelu.fi/gps/20150215M21/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20150215W21/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150215M21/map',
            'https://www.tulospalvelu.fi/gps/20150215W21/map'
        ],
        coord: [60.79451, 11.06795],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20150608_1',
        date: '2015-06-08',
        endDate: '2015-06-14',
        place: 'Idanha-a-Nova, Portugal (Иданья-а-Нова, Португалия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://old.orienteering.sport/wp-content/uploads/2014/03/Bulletin-1-22.pdf',
            'https://old.orienteering.sport/wp-content/uploads/2015/06/Bulletin-4-Final.pdf'
        ],
        res: 'https://old.orienteering.sport/events/401/european-mtb-orienteering-championships-2015/',
        coord: [39.916667, -7.233333],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4856/ff83df74-d8b8-4090-8fa5-f0dfaba588c3/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4856/796d9fa6-397c-4523-84d3-5610ed7da7d2/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4856/f629e542-8f04-427c-963e-f6c28da33433/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4856/bc1c7b82-be63-4245-9728-8cf1238c2548/Bulletin-4.pdf'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2015wocSprintQM1/map',
            'https://www.tulospalvelu.fi/gps/2015wocSprintQM2/map',
            'https://www.tulospalvelu.fi/gps/2015wocSprintQM3/map',
            'https://www.tulospalvelu.fi/gps/2015wocSprintQW1/map',
            'https://www.tulospalvelu.fi/gps/2015wocSprintQW2/map',
            'https://www.tulospalvelu.fi/gps/2015wocSprintQW3/map'
        ],
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
        maps: [
            'https://web.archive.org/web/20160120003713id_/http://www.woc2015.org/images/Sprint_Relay_All_Courses_map.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2015wocSRelay1/map',
            'https://www.tulospalvelu.fi/gps/2015wocSRelay2/map',
            // 'https://www.tulospalvelu.fi/gps/2015wocSRelay3/map', // duplicate of https://www.tulospalvelu.fi/gps/2015wocSRelay2/map
            'https://www.tulospalvelu.fi/gps/2015wocSRelay4/map'
        ],
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
            'https://www.tulospalvelu.fi/gps/2015wocSprintM/map',
            // 'https://omaps.worldofo.com/?id=149144',
            'https://www.tulospalvelu.fi/gps/2015wocSprintW/map',
            'https://web.archive.org/web/20160207025511id_/http://www.woc2015.org/images/Sprint_Final_Map_Men.png',
            'https://web.archive.org/web/20160207025410id_/http://www.woc2015.org/images/Sprint_Final_Map_Women.png'
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
            'https://www.tulospalvelu.fi/gps/2015wocMiddleM/map',
            // 'https://omaps.worldofo.com/?id=149278',
            'https://www.tulospalvelu.fi/gps/2015wocMiddleW/map',
            'https://web.archive.org/web/20160120012247id_/http://www.woc2015.org/images/Women_Middle_map.png'
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
        maps: [
            'https://web.archive.org/web/20160119190443id_/http://www.woc2015.org/images/Relay_All_Courses_map.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2015wocRelayM1/map',
            // 'https://www.tulospalvelu.fi/gps/2015wocRelayM2/map', // duplicate of https://www.tulospalvelu.fi/gps/2015wocRelayM1/map
            'https://www.tulospalvelu.fi/gps/2015wocRelayM3/map',
            'https://www.tulospalvelu.fi/gps/2015wocRelayW1/map',
            // 'https://www.tulospalvelu.fi/gps/2015wocRelayW2/map', // duplicate of https://www.tulospalvelu.fi/gps/2015wocRelayW1/map
            'https://www.tulospalvelu.fi/gps/2015wocRelayW3/map'
        ],
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
        maps: [
            'https://web.archive.org/web/20160111155254id_/http://www.woc2015.org/images/Long_Men_map.png',
            'https://web.archive.org/web/20160207053912id_/http://www.woc2015.org/images/Long_Women_map.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2015wocLongM/map',
            'https://www.tulospalvelu.fi/gps/2015wocLongW/map'
        ],
        coord: [57.4778, -4.2247],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20150814_1',
        date: '2015-08-14',
        endDate: '2015-08-23',
        place: 'Liberec, Czech Republic (Либерец, Чехия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2015',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4858/81e59a8c-01e5-4384-8e2c-9c05febdd638/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4858/3bd2edfa-60cc-46bd-92ae-8dc90e1f6ad3/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4858/569c50a2-e923-4832-bd33-0674e7cdde04/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4858/36daf75a-f635-4acf-9244-3d24dae9c72e/Bulletin-4.pdf'
        ],
        res: [
            'https://old.orienteering.sport/events/366/world-mtb-orienteering-championships-2015/',
            'https://eventor.orienteering.sport/Events/Show/4858'
        ],
        coord: [50.766667, 15.066667],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20150818_1',
        parent: 'IOF_20150814_1',
        date: '2015-08-18',
        name: 'WMTBOC #1, миддл',
        place: 'Liberec, Czech Republic (Либерец, Чехия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150818h/',
            'W': 'https://www.tulospalvelu.fi/gps/20150818d/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150818h/map',
            'https://www.tulospalvelu.fi/gps/20150818d/map'
        ],
        coord: [50.766667, 15.066667],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20150819_1',
        parent: 'IOF_20150814_1',
        date: '2015-08-19',
        name: 'WMTBOC #2, спринт',
        place: 'Liberec, Czech Republic (Либерец, Чехия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150819h/',
            'W': 'https://www.tulospalvelu.fi/gps/20150819d/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150819h/map',
            'https://www.tulospalvelu.fi/gps/20150819d/map'
        ],
        coord: [50.766667, 15.066667],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20150821_1',
        parent: 'IOF_20150814_1',
        date: '2015-08-21',
        name: 'WMTBOC #3, лонг',
        place: 'Liberec, Czech Republic (Либерец, Чехия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20150821h/',
            'W': 'https://www.tulospalvelu.fi/gps/20150821d/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150821h/map',
            'https://www.tulospalvelu.fi/gps/20150821d/map'
        ],
        coord: [50.766667, 15.066667],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20150822_1',
        parent: 'IOF_20150814_1',
        date: '2015-08-22',
        name: 'WMTBOC #4, эстафета',
        place: 'Liberec, Czech Republic (Либерец, Чехия)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20150822h1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20150822h2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20150822h3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20150822d1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20150822d2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20150822d3/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20150822h1/map',
            // 'https://www.tulospalvelu.fi/gps/20150822h2/map', // duplicate of https://www.tulospalvelu.fi/gps/20150822h1/map
            // 'https://www.tulospalvelu.fi/gps/20150822h3/map', // duplicate of https://www.tulospalvelu.fi/gps/20150822h1/map
            'https://www.tulospalvelu.fi/gps/20150822d1/map'
            // 'https://www.tulospalvelu.fi/gps/20150822d2/map', // duplicate of https://www.tulospalvelu.fi/gps/20150822d1/map
            // 'https://www.tulospalvelu.fi/gps/20150822d3/map', // duplicate of https://www.tulospalvelu.fi/gps/20150822d1/map
        ],
        coord: [50.766667, 15.066667],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
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
        bulletin: 'https://eventor-iof-storage.orientering.se/eventdocuments/5085/c22e9a27-642d-46e9-921b-fe245d82dd71/Bulletin-4.pdf',
        res: 'https://eventor.orienteering.sport/Events/Show/5085',
        video: [
            'https://www.youtube.com/watch?v=vNbqHrpR9W0', // Sprint
            'https://www.youtube.com/watch?v=MZCtUxWl8wc', // Middle distance
            'https://www.youtube.com/watch?v=vhC2dv-firU', // Long distance Men
            'https://www.youtube.com/watch?v=lMm6-FZSg1Y', // Long distance Women
            'https://www.youtube.com/watch?v=TtL8Yu3dWh8', // Sprint relay summary
            'https://www.youtube.com/watch?v=U4o4Tiv9VCg', // Relay Men
            'https://www.youtube.com/watch?v=ZqB1JCnlRxU' // Relay Women
        ],
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4852/3517982b-1eb6-4cd8-b784-9e118b419e9d/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4852/0efbea1e-82c2-4d15-b951-f07276fcc4b8/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4852/6d820bb7-a31b-4b12-9d3d-839f27267720/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4852/0132a309-bf08-4a29-82ec-6615ed8dbc3e/Bulletin-4.pdf'
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
        maps: [
            'https://mapy.ceskyorientak.cz/data/jpg/8462X.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160521_1/map',
            'https://www.tulospalvelu.fi/gps/20160521_2/map'
            // 'https://www.tulospalvelu.fi/gps/20160521_3/map', // duplicate of https://www.tulospalvelu.fi/gps/20160521_2/map
            // 'https://www.tulospalvelu.fi/gps/20160521_4/map', // duplicate of https://www.tulospalvelu.fi/gps/20160521_1/map
        ],
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
            'https://www.tulospalvelu.fi/gps/20160522MFA/map',
            // 'https://omaps.worldofo.com/?id=175584',
            'https://www.tulospalvelu.fi/gps/20160522WFA/map',
            'https://mapy.ceskyorientak.cz/data/jpg/8466X.jpg'
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
        maps: [
            'https://news.worldofo.com/wp-content/uploads/2016/05/map_2600.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/8469X.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160523MQA/map',
            'https://www.tulospalvelu.fi/gps/20160523MQB/map',
            'https://www.tulospalvelu.fi/gps/20160523MQC/map',
            'https://www.tulospalvelu.fi/gps/20160523WQA/map',
            'https://www.tulospalvelu.fi/gps/20160523WQB/map',
            'https://www.tulospalvelu.fi/gps/20160523WQC/map'
        ],
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
            'https://www.tulospalvelu.fi/gps/20160524MFA/map',
            // 'https://omaps.worldofo.com/?id=175821',
            'https://www.tulospalvelu.fi/gps/20160524WFA/map',
            'https://news.worldofo.com/wp-content/uploads/2016/05/map_2000.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/8471X.jpg'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160526MQA/map',
            'https://www.tulospalvelu.fi/gps/20160526MQB/map',
            'https://www.tulospalvelu.fi/gps/20160526MQC/map',
            'https://www.tulospalvelu.fi/gps/20160526WQA/map',
            'https://www.tulospalvelu.fi/gps/20160526WQB/map',
            'https://www.tulospalvelu.fi/gps/20160526WQC/map'
        ],
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
            'https://www.tulospalvelu.fi/gps/20160527MFA/map',
            // 'https://omaps.worldofo.com/?id=176110',
            'https://www.tulospalvelu.fi/gps/20160527WFA/map',
            'https://mapy.ceskyorientak.cz/data/jpg/8476X.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160527WFB/map'
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
            'https://www.tulospalvelu.fi/gps/20160528M_3/map',
            // 'https://omaps.worldofo.com/?id=176136',
            // 'https://omaps.worldofo.com/?id=176137',
            // 'https://omaps.worldofo.com/?id=176138',
            'https://www.tulospalvelu.fi/gps/20160528W_3/map',
            // 'https://omaps.worldofo.com/?id=176139',
            // 'https://omaps.worldofo.com/?id=176140',
            'https://mapy.ceskyorientak.cz/data/jpg/8477X.jpg'
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/20160528M_1/map', // duplicate of https://www.tulospalvelu.fi/gps/20160528M_3/map
            // 'https://www.tulospalvelu.fi/gps/20160528M_2/map', // duplicate of https://www.tulospalvelu.fi/gps/20160528M_3/map
            // 'https://www.tulospalvelu.fi/gps/20160528W_1/map', // duplicate of https://www.tulospalvelu.fi/gps/20160528W_3/map
            // 'https://www.tulospalvelu.fi/gps/20160528W_2/map', // duplicate of https://www.tulospalvelu.fi/gps/20160528W_3/map
        ],
        coord: [50.229722, 17.204722],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20160724_1',
        date: '2016-07-24',
        endDate: '2016-07-30', // место по IOF; en.wikipedia: Águeda
        place: 'Aveiro, Coimbra, Portugal (Авейру, Коимбра, Португалия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Världsmästerskapen_i_mountainbikeorientering_2016',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4861/ba1205b2-e2b1-4004-9bd1-43fad4f964f9/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4861/34dc9601-c782-4c81-9c94-18dbbe663978/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4861/6fc34471-7738-4159-948d-a0b485a064a5/Bulletin-4.pdf'
        ],
        res: [
            'https://old.orienteering.sport/events/409/world-mtb-orienteering-championships-2016/',
            'https://eventor.orienteering.sport/Events/Show/4861'
        ],
        maps: [
            // официальные карты организаторов (Wayback Machine, mtbo16.fpo.pt):
            'https://web.archive.org/web/20161103234146id_/http://mtbo16.fpo.pt/mtbo/files/mapas/sprint/ME.png', // спринт, ME
            'https://web.archive.org/web/20161103234158id_/http://mtbo16.fpo.pt/mtbo/files/mapas/sprint/WE.png', // спринт, WE
            'https://web.archive.org/web/20161103231628id_/http://mtbo16.fpo.pt/mtbo/files/mapas/middle/ME.png', // миддл, ME
            'https://web.archive.org/web/20161103231641id_/http://mtbo16.fpo.pt/mtbo/files/mapas/middle/WE.png', // миддл, WE
            // старые карты районов и образцы дистанций (Wayback Machine, mtbo16.fpo.pt):
            'https://web.archive.org/web/20161103225629id_/http://mtbo16.fpo.pt/mtbo/files/imagens/oldmaps/Cantanhede(SE).jpg',
            'https://web.archive.org/web/20161103225651id_/http://mtbo16.fpo.pt/mtbo/files/imagens/oldmaps/Luso.png',
            'https://web.archive.org/web/20161103225709id_/http://mtbo16.fpo.pt/mtbo/files/imagens/oldmaps/Elite%20Course%20Sample%201.jpeg', // образец дистанции
            'https://web.archive.org/web/20161103225719id_/http://mtbo16.fpo.pt/mtbo/files/imagens/oldmaps/Elite%20Course%20Sample%202.jpeg', // образец дистанции
            'https://web.archive.org/web/20161103225730id_/http://mtbo16.fpo.pt/mtbo/files/imagens/oldmaps/Elite%20Course%20Sample%203.png', // образец дистанции
            'https://web.archive.org/web/20161103225741id_/http://mtbo16.fpo.pt/mtbo/files/imagens/oldmaps/Elite%20Course%20Sample%204.png', // образец дистанции
            // официальные карты организаторов (Wayback Machine, mtbo16.fpo.pt):
            'https://web.archive.org/web/20161103234459id_/http://mtbo16.fpo.pt/mtbo/files/mapas/long/ME%20(A)_01.png', // лонг, ME, вариант A, часть 1
            'https://web.archive.org/web/20161103234511id_/http://mtbo16.fpo.pt/mtbo/files/mapas/long/ME%20(A)_02.png', // лонг, ME, вариант A, часть 2
            'https://web.archive.org/web/20161103234546id_/http://mtbo16.fpo.pt/mtbo/files/mapas/long/ME%20(B)_01.png', // лонг, ME, вариант B, часть 1
            'https://web.archive.org/web/20161103234557id_/http://mtbo16.fpo.pt/mtbo/files/mapas/long/ME%20(B)_02.png', // лонг, ME, вариант B, часть 2
            'https://web.archive.org/web/20161103234523id_/http://mtbo16.fpo.pt/mtbo/files/mapas/long/WE_01.png', // лонг, WE, часть 1
            'https://web.archive.org/web/20161103234534id_/http://mtbo16.fpo.pt/mtbo/files/mapas/long/WE_02.png', // лонг, WE, часть 2
            'https://web.archive.org/web/20161103234259id_/http://mtbo16.fpo.pt/mtbo/files/mapas/mass_start/ME%20(A).png', // масс-старт, ME
            'https://web.archive.org/web/20161103234312id_/http://mtbo16.fpo.pt/mtbo/files/mapas/mass_start/WE%20(A).png' // масс-старт, WE
        ],
        coord: [40.633333, -8.65],
        type: 'VELO',
        fmt: 'sprint, middle, long, relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4865/076f8023-5831-4643-b099-e121611b60ba/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4865/7778d65f-f831-4485-8cd6-d4a2fd2ec79f/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4865/70980cee-12b5-4b27-b9c6-1da82c01eb19/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4865/e494e3ac-9f90-4f75-8896-efa4dddb8d86/Bulletin-4.pdf'
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
            'https://www.tulospalvelu.fi/gps/20160820WOCSprintM/map',
            // 'https://omaps.worldofo.com/?id=184460',
            'https://www.tulospalvelu.fi/gps/20160820WOCSprintW/map',
            'https://web.archive.org/web/20161023053319id_/http://live.woc2016.se/wp-content/uploads/2016/08/Sprint_ind_final_Men_2.gif'
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
            'https://news.worldofo.com/wp-content/uploads/2016/08/Sprint_relay_part_1.gif',
            // 'https://omaps.worldofo.com/?id=184541',
            'https://news.worldofo.com/wp-content/uploads/2016/08/Sprint_relay_part_2.gif',
            'https://web.archive.org/web/20161120011430id_/http://live.woc2016.se/wp-content/uploads/2016/08/Sprint_relay_part_1.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160821WOCSrelay1/map',
            'https://www.tulospalvelu.fi/gps/20160821WOCSrelay2/map'
            // 'https://www.tulospalvelu.fi/gps/20160821WOCSrelay3/map', // duplicate of https://www.tulospalvelu.fi/gps/20160821WOCSrelay2/map
            // 'https://www.tulospalvelu.fi/gps/20160821WOCSrelay4/map', // duplicate of https://www.tulospalvelu.fi/gps/20160821WOCSrelay1/map
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
            'https://news.worldofo.com/wp-content/uploads/2016/08/map.png',
            // 'https://omaps.worldofo.com/?id=184753',
            'https://news.worldofo.com/wp-content/uploads/2016/08/mapmiddlew.png',
            'http://news.worldofo.com/wp-content/uploads/2016/08/mapmiddlew.png', // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/mapmiddlew.png
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160823WOCMiddleM/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/map.png
            'https://www.tulospalvelu.fi/gps/20160823WOCMiddleW/map' // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/mapmiddlew.png
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
            'https://news.worldofo.com/wp-content/uploads/2016/08/map1.png',
            // 'https://omaps.worldofo.com/?id=184947',
            'https://news.worldofo.com/wp-content/uploads/2016/08/map2.png',
            'https://web.archive.org/web/20161121043411id_/http://live.woc2016.se/wp-content/uploads/2016/08/L%C3%A5ngdistansbanor-20160803.Woman_.gif',
            'https://web.archive.org/web/20161121044917id_/http://live.woc2016.se/wp-content/uploads/2016/08/Long_Distance_Men.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160825WOCLongM/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/map2.png
            'https://www.tulospalvelu.fi/gps/20160825WOCLongW/map' // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/map1.png
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
            'https://news.worldofo.com/wp-content/uploads/2016/08/mapm1.png',
            // 'https://omaps.worldofo.com/?id=185059',
            'https://news.worldofo.com/wp-content/uploads/2016/08/mapw3.png',
            'https://web.archive.org/web/20161127024935id_/http://live.woc2016.se/wp-content/uploads/2016/08/Relay_gafflingar_Men.gif',
            'https://web.archive.org/web/20161127022656id_/http://live.woc2016.se/wp-content/uploads/2016/08/Relay_gafflingar_Women.gif',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20160827WOCRelayM1/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/mapm1.png
            // 'https://www.tulospalvelu.fi/gps/20160827WOCRelayM2/map', // duplicate of https://www.tulospalvelu.fi/gps/20160827WOCRelayM1/map
            'https://www.tulospalvelu.fi/gps/20160827WOCRelayM3/map',
            'https://www.tulospalvelu.fi/gps/20160827WOCRelayW1/map',
            // 'https://www.tulospalvelu.fi/gps/20160827WOCRelayW2/map', // duplicate of https://www.tulospalvelu.fi/gps/20160827WOCRelayW1/map
            'https://www.tulospalvelu.fi/gps/20160827WOCRelayW3/map' // duplicate of https://news.worldofo.com/wp-content/uploads/2016/08/mapw3.png
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5415/b6efad15-92c2-4d42-b1f4-801293ed483a/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5415/a04ccfc5-45e5-414b-8b3e-9092eb02d368/Bulletin-2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5415/c875d5f2-8f0b-4f4d-ae7d-b55069fa650e/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/5415',
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay, sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20170207_2',
        parent: 'IOF_20170207_1',
        date: '2017-02-07',
        name: 'SKI-EOC #1, спринт',
        place: 'Imatra, Finland (Иматра, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017esocMsprint/',
            'W': 'https://www.tulospalvelu.fi/gps/2017esocWsprint/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2017esocMsprint/map',
            'https://www.tulospalvelu.fi/gps/2017esocWsprint/map'
        ],
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20170208_1',
        parent: 'IOF_20170207_1',
        date: '2017-02-08',
        name: 'SKI-EOC #2, спринт-эстафета',
        place: 'Imatra, Finland (Иматра, Финляндия)',
        gps: {
            '135': 'https://www.tulospalvelu.fi/gps/2017esocWsrelay/',
            '246': 'https://www.tulospalvelu.fi/gps/2017esocMsrelay/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2017esocWsrelay/map',
            'https://www.tulospalvelu.fi/gps/2017esocMsrelay/map'
        ],
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20170209_1',
        parent: 'IOF_20170207_1',
        date: '2017-02-09',
        name: 'SKI-EOC #3, лонг',
        place: 'Imatra, Finland (Иматра, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017esocMlong/',
            'W': 'https://www.tulospalvelu.fi/gps/2017esocWlong/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2017esocMlong/map',
            'https://www.tulospalvelu.fi/gps/2017esocWlong/map'
        ],
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20170211_1',
        parent: 'IOF_20170207_1',
        date: '2017-02-11',
        name: 'SKI-EOC #4, миддл',
        place: 'Imatra, Finland (Иматра, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017esocMmiddle/',
            'W': 'https://www.tulospalvelu.fi/gps/2017esocWmiddle/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2017esocMmiddle/map',
            'https://www.tulospalvelu.fi/gps/2017esocWmiddle/map'
        ],
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20170212_1',
        parent: 'IOF_20170207_1',
        date: '2017-02-12',
        name: 'SKI-EOC #5, эстафета',
        place: 'Imatra, Finland (Иматра, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2017esocMrelay/',
            'W': 'https://www.tulospalvelu.fi/gps/2017esocWrelay/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2017esocMrelay/map',
            'https://www.tulospalvelu.fi/gps/2017esocWrelay/map'
        ],
        coord: [61.183333, 28.766667],
        type: 'SKI',
        fmt: 'relay',
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
        bulletin: 'https://web.archive.org/web/20161019181805id_/http://www.wsoc2017.ru:80/UserFiles/documents_for_downloads/bulletin_2_%201.06.16.pdf',
        res: [
            'https://web.archive.org/web/20170309070350id_/http://www.wsoc2017.ru/UserFiles/protocols/wsoc_sprint20170308.pdf', // спринт
            'https://web.archive.org/web/20170312080451id_/http://www.wsoc2017.ru/UserFiles/09032017middle.pdf', // миддл
            'https://web.archive.org/web/20170312081419id_/http://www.wsoc2017.ru/UserFiles/20170310_men_middle.pdf', // миддл, мужчины
            'https://web.archive.org/web/20170312202230id_/http://www.wsoc2017.ru/UserFiles/protocols/wsoc_long.pdf', // лонг
            'https://web.archive.org/web/20170312083438id_/http://www.wsoc2017.ru/UserFiles/20170311_long.pdf', // лонг
            'https://web.archive.org/web/20170308051114id_/http://www.wsoc2017.ru/UserFiles/protocols/wsoc_sprint_relay.pdf', // спринт-эстафета
            'https://web.archive.org/web/20170313045630id_/http://www.wsoc2017.ru/UserFiles/protocols/20170312_relay.pdf' // эстафета
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4867/41c4e41f-4c90-48f9-bd03-e6d9bac63f54/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4867/2a64dadc-f247-4e78-89a5-4c36f5984166/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/4867/fda3c13e-c238-45e5-8c53-2e657d697363/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4867/773318e7-580b-449a-8cd7-030f2273b181/Bulletin-4.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/4867/c36be742-5144-45da-acbd-3df787c53450/Important-changes-in-Bulletin-4.pdf'
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
            'https://www.tulospalvelu.fi/gps/2017wocSprintW/map',
            // 'https://omaps.worldofo.com/?id=211683',
            'https://www.tulospalvelu.fi/gps/2017wocSprintM/map',
            // 'https://omaps.worldofo.com/index.php?id=211683',
            'https://news.worldofo.com/wp-content/uploads/2017/07/mapsprint.png' // duplicate of https://www.tulospalvelu.fi/gps/2017wocSprintM/map
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
            'https://www.tulospalvelu.fi/gps/2017wocSRelay2/map',
            // 'https://omaps.worldofo.com/?id=211747',
            'https://www.tulospalvelu.fi/gps/2017wocSRelay1/map',
            // 'https://omaps.worldofo.com/index.php?id=211747',
            'https://news.worldofo.com/wp-content/uploads/2017/07/map.png' // duplicate of https://www.tulospalvelu.fi/gps/2017wocSRelay1/map
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2017wocSRelay3/map', // duplicate of https://www.tulospalvelu.fi/gps/2017wocSRelay2/map
            // 'https://www.tulospalvelu.fi/gps/2017wocSRelay4/map', // duplicate of https://www.tulospalvelu.fi/gps/2017wocSRelay1/map
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
            'https://www.tulospalvelu.fi/gps/2017wocLongM/map',
            // 'https://omaps.worldofo.com/?id=211923',
            'https://www.tulospalvelu.fi/gps/2017wocLongW/map',
            'https://news.worldofo.com/wp-content/uploads/2017/07/mapmen_30001.jpg_1606901_21.jpg'
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
            'https://www.tulospalvelu.fi/gps/2017wocMiddleM/map',
            // 'https://omaps.worldofo.com/?id=212034',
            'https://www.tulospalvelu.fi/gps/2017wocMiddleW/map'
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
            'https://www.tulospalvelu.fi/gps/2017wocRelayW3/map',
            // 'https://omaps.worldofo.com/?id=212118',
            'https://www.tulospalvelu.fi/gps/2017wocRelayW2/map',
            // 'https://omaps.worldofo.com/?id=212119',
            // 'https://omaps.worldofo.com/?id=212120',
            'https://www.tulospalvelu.fi/gps/2017wocRelayM3/map',
            // 'https://omaps.worldofo.com/?id=212121',
            'https://www.tulospalvelu.fi/gps/2017wocRelayM2/map'
            // 'https://omaps.worldofo.com/?id=212122',
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2017wocRelayM1/map', // duplicate of https://www.tulospalvelu.fi/gps/2017wocRelayM2/map
            // 'https://www.tulospalvelu.fi/gps/2017wocRelayW1/map', // duplicate of https://www.tulospalvelu.fi/gps/2017wocRelayW2/map
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
        id: 'IOF_20170729_1',
        date: '2017-07-29',
        endDate: '2017-08-05', // только sv.wikipedia; состав дисциплин не найден
        place: 'Orléans, France (Орлеан, Франция)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5189/e5d54b5b-a6e2-406d-aa14-92dd992668c3/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5189/84d72d97-7b13-40d6-8e93-aa4699fb6688/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5189/7985c471-dfe3-4259-a012-14caa0872143/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5189/01db0184-5796-439e-8c96-8b5c83e27293/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5189', // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/5481/5f8a411a-b2de-4970-b060-f362e62120ad/Sprint-Relay-Results.pdf', // спринт-эстафета
            'https://eventor-iof-storage.orientering.se/eventdocuments/5484/9cd304c4-f93e-4a5b-861c-b2b0aae69ae4/Relay_Results.pdf' // эстафета
        ],
        coord: [47.9025, 1.909],
        type: 'VELO',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20170819_1',
        date: '2017-08-19',
        endDate: '2017-08-27',
        place: 'Vilnius, Lithuania (Вильнюс, Литва)',
        name: 'Чемпионат мира (WMTBOC)',
        // mtbo.lt/wmtboc-2017 теперь ведёт на сайт EMTBOC 2025 — ссылка не включена
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5118/59a2564d-ef85-442d-87fb-6e82b6739d0b/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5118/22ac1d9f-ec7e-4892-adb2-6805ccdd2208/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5118/9c8a914c-544e-421b-81a5-74d69f54f040/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5118/5c33c0ba-6909-4b03-ac42-c7e9bf32e301/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/5118',
        coord: [54.687222, 25.28],
        type: 'VELO',
        fmt: 'sprint, middle, long, mass start, relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5472/310903da-35d8-4819-9fd5-19e6eddec03e/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5472/282a4a9a-3b87-40f3-8916-229c29a296fb/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5472/9a25606e-e188-4843-b4d4-bcdbeaf1dbb7/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5472/809e56cc-8967-40b2-adab-592ebd67cac0/Bulletin-4.pdf'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5147/333412eb-8c08-43e0-ac65-6dfacbe01e1b/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5147/52205a7b-b1e0-4fa6-bbab-00a5d4f2949f/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5147/5e3de746-f305-45a9-ba46-4575122bb7c4/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5147/0e0cf676-f019-45ff-b283-02e168a3e770/Bulletin-4.pdf'
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
            'https://news.worldofo.com/wp-content/uploads/2018/05/mapm.png',
            'https://news.worldofo.com/wp-content/uploads/2018/05/map.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20180506_SF_M/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2018/05/mapm.png
            'https://www.tulospalvelu.fi/gps/20180506_SF_W/map' // duplicate of https://news.worldofo.com/wp-content/uploads/2018/05/map.png
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20180508_MQ_MA/map',
            'https://www.tulospalvelu.fi/gps/20180508_MQ_MB/map',
            'https://www.tulospalvelu.fi/gps/20180508_MQ_MC/map',
            'https://www.tulospalvelu.fi/gps/20180508_MQ_WA/map',
            'https://www.tulospalvelu.fi/gps/20180508_MQ_WB/map',
            'https://www.tulospalvelu.fi/gps/20180508_MQ_WC/map'
        ],
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
            'https://www.tulospalvelu.fi/gps/20180509_MF_M/map',
            // 'https://omaps.worldofo.com/?id=231501',
            'https://www.tulospalvelu.fi/gps/20180509_MF_W/map'
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
            'https://news.worldofo.com/wp-content/uploads/2018/05/map-women.png',
            'https://news.worldofo.com/wp-content/uploads/2018/05/map-men.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20180510_SR_1/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2018/05/map-women.png
            'https://www.tulospalvelu.fi/gps/20180510_SR_2/map' // duplicate of https://news.worldofo.com/wp-content/uploads/2018/05/map-men.png
            // 'https://www.tulospalvelu.fi/gps/20180510_SR_3/map', // duplicate of https://www.tulospalvelu.fi/gps/20180510_SR_2/map
            // 'https://www.tulospalvelu.fi/gps/20180510_SR_4/map', // duplicate of https://www.tulospalvelu.fi/gps/20180510_SR_1/map
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
            'https://www.tulospalvelu.fi/gps/20180512_R_M2/map',
            // 'https://omaps.worldofo.com/?id=231737',
            // 'https://omaps.worldofo.com/?id=231738',
            'https://www.tulospalvelu.fi/gps/20180512_R_W3/map',
            // 'https://omaps.worldofo.com/?id=231739',
            'https://www.tulospalvelu.fi/gps/20180512_R_W2/map',
            // 'https://omaps.worldofo.com/?id=231740',
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/20180512_R_M1/map', // duplicate of https://www.tulospalvelu.fi/gps/20180512_R_M2/map
            'https://www.tulospalvelu.fi/gps/20180512_R_M3/map'
            // 'https://www.tulospalvelu.fi/gps/20180512_R_W1/map', // duplicate of https://www.tulospalvelu.fi/gps/20180512_R_W2/map
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
            'https://www.tulospalvelu.fi/gps/20180513_L_M/map',
            // 'https://omaps.worldofo.com/?id=231808',
            'https://www.tulospalvelu.fi/gps/20180513_L_W/map',
            'https://news.worldofo.com/wp-content/uploads/2018/05/map-Long_Men.png',
            'https://news.worldofo.com/wp-content/uploads/2018/05/map-Long_Women.png'
        ],
        video: 'https://www.youtube.com/watch?v=wEXRkZt5EUU',
        coord: [46.033333, 8.933333],
        fmt: 'long',
        start: 'EOC'
    },
    {
        id: 'IOF_20180627_1',
        date: '2018-06-27',
        endDate: '2018-07-01', // гонки 28 июня – 1 июля (27-го - масс-старт ветеранов)
        place: 'Budapest, Hungary (Будапешт, Венгрия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'http://www.mtbo.hu/emtboc2018/docs/emtboc2018-b1.pdf',
            // 'http://www.mtbo.hu/emtboc2018/docs/emtboc2018-b2.pdf',
            'http://www.mtbo.hu/emtboc2018/docs/emtboc2018-b3.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5528', // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/5941/9243d6b0-9e61-4046-bc63-550d1eba3951/Results.pdf', // результаты гонки (Eventor 5941)
            'https://eventor-iof-storage.orientering.se/eventdocuments/5942/dda01d81-cf8e-42d8-9aa9-6df052aaacde/Results.pdf', // результаты гонки (Eventor 5942)
            'https://eventor-iof-storage.orientering.se/eventdocuments/5943/7bf12789-55bb-49c3-86f1-b962ac886dd6/Results.pdf' // результаты гонки (Eventor 5943)
        ],
        coord: [47.4925, 19.051389],
        type: 'VELO',
        fmt: 'sprint, long, middle, relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5120/19835fc2-b7ee-457c-9661-5083a4ffcf25/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5120/1c41fa69-ee53-450d-8c0f-b600c88bc461/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5120/e24882a3-9455-4c79-a668-18694fa313c8/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/3aacb7a6-60ea-433f-9650-692c89a2e226/Bulletin-4.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/91b51958-f4e4-42ae-b6df-60d09d2c9cef/WOC2018-Bulletin-4--Technical-for-Teams--Update-for-Relay.pdf'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/5120',
            'https://eventor.orienteering.org/Events/ResultList?eventId=5457',
            'https://eventor.orienteering.org/Events/ResultList?eventId=5459'
        ],
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/2cc4ef1e-3a72-4e33-a34c-b3816948110b/Old-map---sprint-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/b6f3ea24-395b-47c5-a31d-4181e3f334be/Old-map---sprint-2.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/2259f936-fd5a-4042-a3f5-0a79fdcde6d8/Old-map---sprint-3.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/bf3dec12-2f0c-4823-8b27-d050487cb7c2/Old-map---sprint-4.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/c2c04dfe-ba31-4903-b699-c556a6c642dd/Old-map---sprint-5.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/f445064c-2b5e-4498-a19b-fd779d2185cf/Old-map---Sigulda-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/0d11f2d1-d3cd-493c-ac73-124369f79502/Old-map---Sigulda-2.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/40baab94-e855-4ab1-b1b3-063c75f20ccb/Old-map---Sigulda-3.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/e77241b8-0391-4767-a797-0428457697fc/Old-map---Sigulda-4.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5120/bfed3753-8563-4a49-a0bc-ea71639ba591/Old-map---Sigulda-5.jpg'
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
            'https://www.tulospalvelu.fi/gps/2018wocSprintM/map',
            // 'https://omaps.worldofo.com/?id=237370',
            'https://www.tulospalvelu.fi/gps/2018wocSprintW/map',
            'https://news.worldofo.com/wp-content/uploads/2018/08/mapw.png', // duplicate of https://www.tulospalvelu.fi/gps/2018wocSprintW/map
            'https://news.worldofo.com/wp-content/uploads/2018/08/mapm.png' // duplicate of https://www.tulospalvelu.fi/gps/2018wocSprintM/map
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
            'https://www.tulospalvelu.fi/gps/2018wocSprintR2/map',
            // 'https://omaps.worldofo.com/?id=237442',
            'https://www.tulospalvelu.fi/gps/2018wocSprintR1/map',
            // 'https://omaps.worldofo.com/?id=237443',
            // 'https://omaps.worldofo.com/?id=237444',
            'https://news.worldofo.com/wp-content/uploads/2018/08/mapsr.png' // duplicate of https://www.tulospalvelu.fi/gps/2018wocSprintR1/map
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2018wocSprintR3/map', // duplicate of https://www.tulospalvelu.fi/gps/2018wocSprintR2/map
            // 'https://www.tulospalvelu.fi/gps/2018wocSprintR4/map', // duplicate of https://www.tulospalvelu.fi/gps/2018wocSprintR1/map
        ],
        photo: 'https://photos.google.com/share/AF1QipPOWeCdvVNN3J3fe0IG9Y7AI6EaUy5_yTQvb8PVTRQ_tYX52Cjv-ZB2srxbtoLLRQ?key=cW14cXlyd0JBMFBMZ1ctQUJ1bnZWT2FlOS1EZzN3',
        video: 'https://www.youtube.com/watch?v=knwfWX10AkM',
        coord: [56.948889, 24.106389],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20180805_2',
        date: '2018-08-05',
        endDate: '2018-08-12',
        place: 'Zwettl, Austria (Цветль, Австрия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5192/40f9116d-1224-4939-8a5e-ce916c36479a/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5192/97e419c2-3cfa-44c3-9986-b1e2dee50b66/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5192/46de0226-99bd-4c56-b2e5-1f7bac8872cb/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5192/cfdde671-6d9d-4808-8ff1-a2ab6f8578e5/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5192' // IOF Eventor
        ],
        coord: [48.603333, 15.168889],
        type: 'VELO',
        fmt: 'sprint, middle, long, mass start, relay',
        start: 'WMTBOC'
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
            'https://www.tulospalvelu.fi/gps/2018wocMiddleW/map',
            // 'https://omaps.worldofo.com/?id=237575',
            'https://www.tulospalvelu.fi/gps/2018wocMiddleM/map',
            'https://news.worldofo.com/wp-content/uploads/2018/08/mapwomenwoc2018middle.png', // duplicate of https://www.tulospalvelu.fi/gps/2018wocMiddleW/map
            'https://news.worldofo.com/wp-content/uploads/2018/08/mapmenwoc2018middle.png' // duplicate of https://www.tulospalvelu.fi/gps/2018wocMiddleM/map
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
            'https://www.tulospalvelu.fi/gps/2018wocRelayM3/map',
            // 'https://omaps.worldofo.com/?id=237658',
            'https://www.tulospalvelu.fi/gps/2018wocRelayM2/map',
            // 'https://omaps.worldofo.com/?id=237660',
            // 'https://omaps.worldofo.com/?id=237662',
            'https://www.tulospalvelu.fi/gps/2018wocRelayW3/map',
            // 'https://omaps.worldofo.com/?id=237664',
            'https://www.tulospalvelu.fi/gps/2018wocRelayW2/map',
            // 'https://omaps.worldofo.com/?id=237666',
            'https://news.worldofo.com/wp-content/uploads/2018/08/maprel.png' // duplicate of https://www.tulospalvelu.fi/gps/2018wocRelayM3/map
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2018wocRelayM1/map', // duplicate of https://www.tulospalvelu.fi/gps/2018wocRelayM2/map
            // 'https://www.tulospalvelu.fi/gps/2018wocRelayW1/map', // duplicate of https://www.tulospalvelu.fi/gps/2018wocRelayW2/map
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
            'https://www.tulospalvelu.fi/gps/2018wocLongW/map',
            // 'https://omaps.worldofo.com/?id=237745',
            'https://www.tulospalvelu.fi/gps/2018wocLongM/map'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5830/cca25d69-3a6f-462e-ad20-6102797317d1/Bulletin-2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5830/108daa02-de1a-4476-b5c2-7d53290de739/Bulletin-3.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5830',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6258'
        ],
        maps: [
            // старые карты районов (Wayback Machine, esoc2019.net):
            'https://web.archive.org/web/20190304035846id_/http://esoc2019.net:80/uploads/maps/oldmap1.pdf',
            'https://web.archive.org/web/20190304040309id_/http://esoc2019.net:80/uploads/maps/oldmap2.pdf'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5829/7d97fda4-fbc2-4f0a-a6c1-0cb6d5f273b3/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5829/384e6fff-762b-45ae-9947-ae91fcd645c2/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5829/ab13362c-c57e-4c14-acc2-c865dd9148b7/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5829/658fcf54-ba01-4e5e-bac4-ebfc6ddcaa32/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5829' // IOF Eventor
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJcsnEVLqJCsgZ1tgpD_x4nn',
        coord: [65.316667, 21.483333],
        type: 'SKI',
        fmt: 'sprint, middle, long, relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20190320_1',
        parent: 'IOF_20190319_1',
        date: '2019-03-20',
        name: 'SKI-WOC #1, лонг',
        place: 'Piteå, Sweden (Питео, Швеция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2019wsoclongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2019wsoclongW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2019wsoclongM/map',
            'https://www.tulospalvelu.fi/gps/2019wsoclongW/map'
        ],
        coord: [65.316667, 21.483333],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20190321_1',
        parent: 'IOF_20190319_1',
        date: '2019-03-21',
        name: 'SKI-WOC #2, спринт',
        place: 'Piteå, Sweden (Питео, Швеция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2019wsocsprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2019wsocsprintW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2019wsocsprintM/map',
            'https://www.tulospalvelu.fi/gps/2019wsocsprintW/map'
        ],
        coord: [65.316667, 21.483333],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20190323_1',
        parent: 'IOF_20190319_1',
        date: '2019-03-23',
        name: 'SKI-WOC #3, миддл',
        place: 'Piteå, Sweden (Питео, Швеция)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2019wsocmiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2019wsocmiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2019wsocmiddleM/map',
            'https://www.tulospalvelu.fi/gps/2019wsocmiddleW/map'
        ],
        coord: [65.316667, 21.483333],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20190324_1',
        parent: 'IOF_20190319_1',
        date: '2019-03-24',
        name: 'SKI-WOC #4, эстафета',
        place: 'Piteå, Sweden (Питео, Швеция)',
        res: [
            'https://eventor-iof-storage.orientering.se/eventdocuments/6263/8d102990-788c-4310-a849-607b088524ed/Resultat-Relay-Men.pdf', // мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/6263/5dfed0bd-8c17-4d54-806a-2753edb582e3/Resultat-Relay-Women.pdf' // женщины
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2019wsocrelayM/',
            'W': 'https://www.tulospalvelu.fi/gps/2019wsocrelayW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2019wsocrelayM/map',
            'https://www.tulospalvelu.fi/gps/2019wsocrelayW/map'
        ],
        coord: [65.316667, 21.483333],
        type: 'SKI',
        fmt: 'relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20190608_1',
        date: '2019-06-08',
        endDate: '2019-06-10',
        place: 'Wrocław, Strzelin, Poland (Вроцлав, Стшелин, Польша)',
        name: 'Чемпионат Европы (EMTBOC)',
        // домен emtboc2019.pl выставлен на продажу — ссылка не включена
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5832/972d4b61-b290-465d-95b2-3ed8f22e29da/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5832/af85f352-7d45-4d4c-be00-65a7e61e8ec1/Bulletin-2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5832/fc5e2592-879e-4b7d-b159-52aa827bb83e/Bulletin-3.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/5832' // IOF Eventor
        ],
        coord: [51.11, 17.0325],
        type: 'VELO',
        fmt: 'mixed relay, sprint, mass start',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20190728_1',
        date: '2019-07-28',
        endDate: '2019-08-03',
        place: 'Viborg, Denmark (Виборг, Дания)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'http://wmtboc2019.dk',
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5690/2c18a79e-53e0-4061-b0e5-3eb5fdc7a3ee/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5690/b180b838-886a-4d35-8e54-395cd76c2903/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5690/9302232f-8757-4d88-b409-59b48051e001/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/f7dca4fa-fbd3-4c98-9856-6943d322314f/Bulletin-4.pdf'
        ],
        res: [
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/Men-results.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/W21-results.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/WMTBOC-Middle-result-M21.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/WMTBOC-Middle-result-W21.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/WMTBOC-Long-result-M21.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/08/WMTBOC-Long-result-W21.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/08/WMTBOC-Relay-official-results-Men.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/08/WMTBOC-Relay-official-results-Women.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/08/WMTBOC-JWMTBOC-Mass-start-results.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/e87a172e-3932-498a-9a8e-7bbcca34a729/WMTBOC-Sprint-results-Men.pdf', // спринт, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/693cc5bd-ecd2-4f22-8729-929171d70171/WMTBOC-Sprint-results-Women.pdf', // спринт, женщины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/9e03519b-7c48-4658-acbd-c4bc26a763e6/WMTBOC-Middle-results-Men.pdf', // миддл, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/b9454725-00b3-45b7-b560-0f6ccee9295d/WMTBOC-Middle-results-Women.pdf', // миддл, женщины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/6b0f28a6-b0a0-4daf-a5e3-1e944d22cdd1/WMTBOC-Long-results-Men.pdf', // лонг, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/d7193afa-7b3b-44d0-8198-99a2a2cc8707/WMTBOC-Long-results-Women.pdf', // лонг, женщины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/a33a1772-5659-4d8b-9ed9-1663dc553249/WMTBOC-Mass-start-results-Men.pdf', // масс-старт, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/ffa65830-c96e-441c-86d5-bd1475895469/WMTBOC-Mass-start-results-Women.pdf', // масс-старт, женщины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/04405bc6-7098-412a-ba54-03186a895772/WMTBOC-Relay-official-results-Men.pdf', // эстафета, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/5690/ff479849-4001-4193-83ff-418747a95f32/WMTBOC-Relay-official-results-Women.pdf' // эстафета, женщины
        ],
        maps: [
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/Map-Men.pdf',
            'http://wmtboc2019.dk/wp-content/uploads/2019/07/Map-Women.pdf'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeml03N18Xj-mq98O1AJVgW',
        coord: [56.433333, 9.4],
        type: 'VELO',
        fmt: 'sprint, middle, long, mass start, relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5326/2968cea1-159b-4655-bd8e-65bcab4d43a8/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5326/0e02aed2-c212-439e-a5b6-d1dc8cfc1cba/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5326/5ae16459-ce95-4303-b497-ad6c95b9fb2a/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5326/f81b1f93-0759-4bfb-9dc4-bd758436ecc6/Bulletin-4.pdf'
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
            'https://news.worldofo.com/wp-content/uploads/2019/08/WOC2019_Middle_Final_Men.png',
            // 'https://omaps.worldofo.com/?id=258748',
            'https://news.worldofo.com/wp-content/uploads/2019/08/WOC2019_Middle_Final_Women.png',
            // 'https://news.worldofo.com/2019/08/14/woc-long-2019-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=258681',
            'https://news.worldofo.com/wp-content/uploads/2019/08/WOC2019_Long_Men.png',
            // 'https://omaps.worldofo.com/?id=258682',
            'https://news.worldofo.com/wp-content/uploads/2019/08/WOC2019_Long_Women.png'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6119/8f3be33f-32a8-4a63-b0de-bc7ca4b24b44/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6119/e3362730-61a0-4fa6-ae3e-d5001cb49ba6/Bulletin-2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6119/62fc71ab-6e28-436c-b9f8-c77ddbf32bb1/Bulletin-4.pdf'
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2020esocSprintM/map',
            'https://www.tulospalvelu.fi/gps/2020esocSprintW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2020esocMiddleM/map',
            'https://www.tulospalvelu.fi/gps/2020esocMiddleW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2020esocSRelay135/map',
            'https://www.tulospalvelu.fi/gps/2020esocSRelay246/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2020esocLongM/map',
            'https://www.tulospalvelu.fi/gps/2020esocLongW/map'
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2020esocRelayM12/map',
            'https://www.tulospalvelu.fi/gps/2020esocRelayM3/map',
            'https://www.tulospalvelu.fi/gps/2020esocRelayW12/map',
            'https://www.tulospalvelu.fi/gps/2020esocRelayW3/map'
        ],
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6482/c0dd8fb7-1481-4a39-b5b6-97be6622b73c/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6482/1ce97333-6847-4c7c-b99b-178b76d9e529/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6482/4152d7a3-b230-4ed4-9252-756648e0a8bb/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6482/6c8d6d37-46a4-4124-8f1a-f918db8557cc/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/6482',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6847&eventClassId=10495%20target=', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=6847&eventClassId=10494', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=6848&eventClassId=10496&eventRaceId=6921&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=6848&eventClassId=10497&eventRaceId=6921&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=6854&eventClassId=10503&eventRaceId=6927&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=6854&eventClassId=10504&eventRaceId=6927&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7177&groupBy=EventClass' // Relay
        ],
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/6482/d3af3e1c-ae3e-41ac-803d-9ffd393cb030/Old-maps-1-ski-o-.gif',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6482/3a618469-5f14-4c76-ab72-855ce7d07f90/Old-maps-2-Tartu-Kevad-.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6482/a682430d-6ccb-4832-9a27-1bce1965cf46/Old-maps-3-.jpg',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-sprint-women.png', // Women
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-sprint-men.png', // Men
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-pursuit-men.png', // Men
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-pursuit-women.png', // Women
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-middle-women.png', // Women
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-middle-men.png', // Men
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-sprintrelay-women.png', // Women
            'https://orienteering.sport/wp-content/uploads/2021/02/wsoc-2021-map-sprintrelay-men.png' // Men
        ],
        photo: [
            'http://wsoc2021.peko.ee/sprint/', // Photos
            'mailto:live@orienteering.sport', // live@orienteering.sport
            'http://wsoc2021.peko.ee/pursuit-pictures/', // Race
            'http://wsoc2021.peko.ee/prize-giving-ceremony-pictures/', // Prize giving
            'http://wsoc2021.peko.ee/middle-pictures/', // Race
            'http://wsoc2021.peko.ee/sprint-relay-pictures-2/' // Race
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJdiECUrMbJ5mCkbZ6GMj0IQ',
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCSPRINT&l=en', // Live results All classes
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCLONG&l=en&c=MEN', // Live results Men
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCLONG&l=en&c=WOMEN', // Live results Women
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCMIDDLE&l=en&c=MEN', // Live results Men
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCMIDDLE&l=en&c=WOMEN', // Live results Women
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCRELAY&l=en&c=SR@1', // Live results Leg 1
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCRELAY&l=en&c=SR@2', // Live results Leg 2
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCRELAY&l=en&c=SR@3', // Live results Leg 3
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCRELAY&l=en&c=SR@4', // Live results Leg 4
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCRELAY&l=en&c=SR@5', // Live results Leg 5
            'http://otse.osport.ee/failid/otse/index.htm?srv=ospc&e=WSOCRELAY&l=en&c=SR@6' // Live results Leg 6
        ],
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6747/24c83000-eeab-4c08-a99f-fcf426118fdd/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6747/10084d6b-ba55-4fe9-b481-5a3c844e13c7/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6747/9d1d6b19-607c-4cf0-8ddb-cee8c41cbf74/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6747',
        gps: {
            'all': 'https://tractrac.com/event-page/event_20210430_EGKEuropea1/2007'
        },
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/6747/939e7316-1470-49f1-860c-a7b2e50c59d6/Neuch-tel%2C-old-map-from-2010.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6747/ccdb439b-77ab-4ebe-867e-d9b9ceb7a39b/St-Blaise-old-map_1.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6747/24b7f588-a57e-4106-be55-8e851abd2ee0/St-Blaise-old-map_2.pdf'
        ],
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
            'https://news.worldofo.com/wp-content/uploads/2021/05/map_original_gabelungen-sprintrelay-neuchatel-men-with-forking-names.jpg',
            'https://news.worldofo.com/wp-content/uploads/2021/05/map_original_gabelungen-sprintrelay-neuchatel-women-with-forking-names.jpg',
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/6750/96140dbf-c4cf-49d0-b0ad-acf465eed996/Map-women.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6750/c2ef5ba9-494f-4bb7-a8d7-d6d584969247/Map-men.jpg'
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
        maps: [
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/5b18b3f3-7516-4c8e-a48c-14cc899b5ae9/Maps-Women-Qualification-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/16a5a43c-d77e-487a-ade1-aead5ad114f6/Maps-Women-Qualification-2.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/77abfc97-b3a0-4143-a78e-7574353c1061/Maps-Women-Qualification-3.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/72bca03f-e8aa-45f2-8d5f-0b71fde5dc74/Maps-Men-Qualification-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/fb8f6f58-0aba-44d6-98ce-6f71dbe3b2c6/Maps-Men-Qualification-2.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/ed944803-9914-4c29-8bcb-5dd0b40b0ec0/Maps-Men-Qualification-3.jpg'
        ],
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
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/7fb7c9f4-0d5e-4a0b-a615-9169adbe7c36/Maps-Quarterfinal.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/745976f5-11d8-4598-9b02-13c730e19f8c/Maps-Semifinal-1A.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/8665ea47-7cd1-4826-89bb-38f505e087a3/Maps-Semifinal-1B.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/d4041ba4-41ea-434b-bb45-36f5110ebe16/Maps-Semifinal-1C.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/25e33a22-b9d8-4eed-9d68-b854abbad22a/Maps-Semifinal-2.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/4bf9f85d-ec09-4174-bd3f-205d830f2d4a/Maps-Final-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6749/83e31bc3-98c8-497e-a258-449d94a32e74/Maps-Final-2.jpg'
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
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/6748/76da9e10-121d-48f5-a34e-1a7b99b8ec8b/Map-women-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6748/ced28a77-35d9-4a0b-9516-ed02a8ff10fe/Map-women-2.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6748/711b01a2-a622-4d2d-91df-20085199779f/Map-men-1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6748/c0a9dfb9-2e0d-4d84-9c25-04e069b48a14/Map-men-2.jpg'
        ],
        video: 'https://www.youtube.com/watch?v=EYcDWTO8tKo',
        coord: [47.0, 6.933333],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'IOF_20210610_1',
        date: '2021-06-10',
        endDate: '2021-06-18', // гонки по IOF и GPS: 12–17 июня
        place: 'Kuortane, Finland (Куортане, Финляндия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6113/112a8c88-83ea-47a0-b1a6-ed2fc06c1194/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6113/ae851539-e348-475c-9c4a-34ecb2c070ed/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6113/08dd06ea-4b62-42bc-b843-4b32f53c7794/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6113/8785dd21-8f9d-4b2b-bdca-4b137fd2778f/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6113',
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeMYX9M7emDYCENBmDJlslc',
        coord: [62.808333, 23.508333],
        type: 'VELO',
        fmt: 'sprint, middle, long, mass start, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20210612_1',
        parent: 'IOF_20210610_1',
        date: '2021-06-12',
        name: 'WMTBOC #1, масс-старт',
        place: 'Kuortane, Finland (Куортане, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=6936&eventClassId=10684&eventRaceId=7014&overallResults=False', // results W21
            'https://eventor.orienteering.org/Events/ResultList?eventId=6936&eventClassId=10683&eventRaceId=7014&overallResults=False' // results M21
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2021wmtbocmassM/',
            'W': 'https://www.tulospalvelu.fi/gps/2021wmtbocmassW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2021wmtbocmassM/map',
            'https://www.tulospalvelu.fi/gps/2021wmtbocmassW/map'
        ],
        coord: [62.808333, 23.508333],
        type: 'VELO',
        fmt: 'mass start',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20210613_1',
        parent: 'IOF_20210610_1',
        date: '2021-06-13',
        name: 'WMTBOC #2, спринт',
        place: 'Kuortane, Finland (Куортане, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2021wmtbocsprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2021wmtbocsprintw/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2021wmtbocsprintM/map',
            'https://www.tulospalvelu.fi/gps/2021wmtbocsprintw/map'
        ],
        coord: [62.808333, 23.508333],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20210614_1',
        parent: 'IOF_20210610_1',
        date: '2021-06-14',
        name: 'WMTBOC #3, миддл',
        place: 'Kuortane, Finland (Куортане, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=6966&eventClassId=10698&eventRaceId=7044&overallResults=False', // W21
            'https://eventor.orienteering.org/Events/ResultList?eventId=6966&eventClassId=10697&eventRaceId=7044&overallResults=False' // M21
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2021wmtbocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2021wmtbocMiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2021wmtbocMiddleM/map',
            'https://www.tulospalvelu.fi/gps/2021wmtbocMiddleW/map'
        ],
        coord: [62.808333, 23.508333],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20210616_1',
        parent: 'IOF_20210610_1',
        date: '2021-06-16',
        name: 'WMTBOC #4, лонг',
        place: 'Kuortane, Finland (Куортане, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=6967&eventClassId=10700&eventRaceId=7045&overallResults=False', // W21
            'https://eventor.orienteering.org/Events/ResultList?eventId=6967&eventClassId=10699&eventRaceId=7045&overallResults=False' // M21
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2021wmtbocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2021wmtbocLongW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2021wmtbocLongM/map',
            'https://www.tulospalvelu.fi/gps/2021wmtbocLongW/map',
        ],
        coord: [62.808333, 23.508333],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20210617_1',
        parent: 'IOF_20210610_1',
        date: '2021-06-17',
        name: 'WMTBOC #5, эстафета',
        place: 'Kuortane, Finland (Куортане, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2021wmtbocRelayM/',
            'W': 'https://www.tulospalvelu.fi/gps/2021wmtbocRelayW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2021wmtbocRelayM/map',
            'https://www.tulospalvelu.fi/gps/2021wmtbocRelayW/map'
        ],
        coord: [62.808333, 23.508333],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20210703_1',
        date: '2021-07-03',
        endDate: '2021-07-09',
        place: 'Doksy, Czech Republic (Докси, Чехия)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2021.cz
        link: [
            'https://en.wikipedia.org/wiki/2021_World_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_2021'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5814/69167082-d192-44ad-819f-da2d5c79472f/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5814/ed6b9e6d-c397-4774-be5e-aa89895ed3c4/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/5814/3f72c0a4-fb33-4bdb-b9a0-840045c1a626/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/5814/093f5407-4bae-4597-9947-02d533df0964/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/5814',
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJcProRnV7rbXnDjr8zuke4N',
            'https://www.youtube.com/watch?v=GXiA30vRt8Y', // Český rozhlas Sport - pozvánka na Czech O Tour 2022 Jizerky
            'https://www.youtube.com/watch?v=NDWdjShBsqc', // Czech Orienteering Tour 2022 - teaser
            'https://www.youtube.com/watch?v=j8EGq8NNCas', // Radiožurnál Sport - Czech Orienteering Tour 2022
            'https://www.youtube.com/watch?v=CmiAX9Q9ICE', // Velké závody v Česku 2021- Sport roku 2021 - Česká televize
            'https://www.youtube.com/watch?v=omaZOD476w4', // Czech Turism - partner MS v orientačním běhu 2021
            'https://www.youtube.com/watch?v=2wxTtDHLfiI', // →→ WOC2021 ←←
            'https://www.youtube.com/watch?v=6zY_6sMhqC0', // Heřmánky LONG | WOC Aftermovie
            'https://www.youtube.com/watch?v=wktJdsXJdJQ', // Heřmánky RELAY | WOC Aftermovie
            'https://www.youtube.com/watch?v=SkR4AV2iXbU', // Smržovka MIDDLE | WOC Aftermovie
            'https://www.youtube.com/watch?v=9swlZFtUhC8', // Middle | WOC Minutes
            'https://www.youtube.com/watch?v=aMObfHnt8a0', // Doksy SPRINT RELAY | WOC Aftermovie
            'https://www.youtube.com/watch?v=v5RSWgr7Vb8', // Sprint relay | WOC Minutes
            'https://www.youtube.com/watch?v=kaaHv1yDetA', // Terezín SPRINT | WOC After Movie
            'https://www.youtube.com/watch?v=uM9lU2F9R0U', // Sprint | WOC Minutes
            'https://www.youtube.com/watch?v=3qYZOHPywFk', // Konrad brewery | WOC Insight
            'https://www.youtube.com/watch?v=pckiU053cl8', // Teaser WOC2021
            'https://www.youtube.com/watch?v=hVlQ_aDw-Ww', // Event center Doksy | WOC Insight
            'https://www.youtube.com/watch?v=7jYGfnzEoFA', // WOC Training Camps | WOC Insight
            'https://www.youtube.com/watch?v=Nm0b0vxLG3U', // Do not enter embargoed areas! | WOC Insight
            'https://www.youtube.com/watch?v=vUZOXKWR3uE', // Beauties of Czech sandstones! | WOC Insight
            'https://www.youtube.com/watch?v=lgjLjXCrEoM', // Start training for WOC 2021! | WOC Insight
            'https://www.youtube.com/watch?v=0wdYepxPjaA&list=PLRTNOodILN0eBpudzBOKAoAiVnKlXtdPj', // Warm up with Pre-WOC Interviews with Athletes!
            'https://www.srf.ch/play/tv/-/video/orientierungslauf-wm-in-doksy-sprint-frauenmaenner?urn=urn:swisstxt:video:srf:1714630',
            'https://tv.nrk.no/serie/orientering/2021',
            'https://tv.orf.at/suche104~_category-Laufsport_-0bbd399b9070e687426b3a10360fc20191fd1cf9.html?categories=Laufsport'
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7059',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventClassId=10832&eventRaceId=7136&overallResults=False', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventClassId=11675&eventRaceId=7136&overallResults=False', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventClassId=11677&eventRaceId=7136&overallResults=False', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventClassId=10831&eventRaceId=7136&overallResults=False', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventClassId=11674&eventRaceId=7136&overallResults=False', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventClassId=11676&eventRaceId=7136&overallResults=False', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7058&eventRaceId=7136&overallResults=False', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7059&eventClassId=10834&eventRaceId=7137&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7059&eventClassId=10833&eventRaceId=7137&overallResults=False' // Men
        ],
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
            'https://www.tulospalvelu.fi/gps/20210703WC/map',
            // 'https://omaps.worldofo.com/?id=301150',
            'https://www.tulospalvelu.fi/gps/20210703WB/map',
            // 'https://omaps.worldofo.com/?id=301151',
            'https://www.tulospalvelu.fi/gps/20210703WA/map',
            // 'https://omaps.worldofo.com/?id=301152',
            'https://www.tulospalvelu.fi/gps/20210703MC/map',
            // 'https://omaps.worldofo.com/?id=301153',
            'https://www.tulospalvelu.fi/gps/20210703MB/map',
            // 'https://omaps.worldofo.com/?id=301154',
            'https://www.tulospalvelu.fi/gps/20210703MA/map',
            // 'https://omaps.worldofo.com/?id=301168',
            'https://www.tulospalvelu.fi/gps/20210703W/map',
            // 'https://omaps.worldofo.com/?id=301169',
            'https://www.tulospalvelu.fi/gps/20210703M/map',
            'https://woc2021.cz/wp-content/uploads/2021/07/Sprint-Final-Men.pdf',
            'https://woc2021.cz/wp-content/uploads/2021/07/Sprint-Final-Women.pdf',
            'https://news.worldofo.com/wp-content/uploads/2021/07/map_sprint_men.jpg', // duplicate of https://www.tulospalvelu.fi/gps/20210703M/map
            'https://mapy.ceskyorientak.cz/data/jpg/11615X.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/11616X.jpg',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-qual-women-a.pdf', // Heat A
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-qual-women-b.pdf', // Heat B
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-qual-women-c.pdf', // Heat C
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-qual-men-a.pdf', // Heat A
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-qual-men-b.pdf', // Heat B
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-qual-men-c.pdf', // Heat C
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-final-women.pdf', // Women
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-sprint-final-men.pdf' // Men
        ],
        photo: [
            'https://photos.google.com/share/AF1QipMD6bzZb_e6YKoeNCXcR7Ssy7FvDSOscjuK876ikjpCXNlDfMW5ZcQiF1TCs3L2eg?key=blljeVVHbnlSWG1NNHh0dnVqZGo2cnRESkFhenpB',
            'https://photos.app.goo.gl/k7cLmu5ZuDiPw1tt6',
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FQualification%2FStart%20%28by%20Petr%20Kade%C5%99%C3%A1vek%29', // Start
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E_cnRpbWU9SElTbUpRVV8yVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FQualification%2FFortress%20-%20Ji%C5%99%C3%AD%20%C4%8Cech', // Fortress
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E_cnRpbWU9SElTbUpRVV8yVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FQualification%2FTom%C3%A1%C5%A1%20Bubela%20-%20FB%20bubos%20-%20IG%20bubos12', // Wall
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E_cnRpbWU9SElTbUpRVV8yVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FQualification%2FLast%20controls%20and%20finish', // Last control & finish
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FStart%20and%20Finish%20by%20Tom%C3%A1%C5%A1%20Bubela%20%2D%20FB%20bubos%20%2D%20IG%20bubos12', // Start & Finish
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FFortress%20by%20Lukas%20Budinsky', // Fortress
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FFortress%20%28by%20Ji%C5%99%C3%AD%20%C4%8Cech%29', // Fortress
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FFortress%20tunnel%20and%20prizegiving%20%28by%20Petr%20Kade%C5%99%C3%A1vek%29', // Tunnels & prizegiving
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FStart%2Efinish%20arena%20and%20fortress%20by%20Petr%20H%C3%A1p', // Arena & fortress
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FFlower%20ceremony%20and%20press%20conference%20by%20Ji%C5%99%C3%AD%20%C4%8Cech', // Flower ceremony & press conference
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VxUE9fXzBvWEdwR3RhNG81bVdoMTRzQkpFZWNzYmhrMTJEX1NMdHFfdDRwS1E%5FcnRpbWU9RktmMkNNUV8yVWc&viewid=86854d22%2Dbf18%2D4cf6%2D8bb1%2Df357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Sprint%2FFinal%2FMedal%20ceremony%20%28by%20Petr%20Kade%C5%99%C3%A1vek%29' // Medal ceremony
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
            'https://www.tulospalvelu.fi/gps/20210704SR4/map',
            // 'https://omaps.worldofo.com/?id=301233',
            'https://www.tulospalvelu.fi/gps/20210704SR3/map',
            // 'https://omaps.worldofo.com/?id=301234',
            // 'https://omaps.worldofo.com/?id=301235',
            'https://woc2021.cz/wp-content/uploads/2021/06/WEB_Sprint-Relay.pdf',
            'https://news.worldofo.com/wp-content/uploads/2021/07/map_men.jpg', // duplicate of https://www.tulospalvelu.fi/gps/20210704SR3/map
            'https://mapy.ceskyorientak.cz/data/jpg/11617X.jpg'
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/20210704SR1/map', // duplicate of https://www.tulospalvelu.fi/gps/20210704SR4/map
            // 'https://www.tulospalvelu.fi/gps/20210704SR2/map', // duplicate of https://www.tulospalvelu.fi/gps/20210704SR3/map
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7062',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7061&eventClassId=10837&eventRaceId=7139&overallResults=False', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7061&eventClassId=11687&eventRaceId=7139&overallResults=False', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7061&eventClassId=11689&eventRaceId=7139&overallResults=False', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7061&eventClassId=10836&eventRaceId=7139&overallResults=False', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7061&eventClassId=11686&eventRaceId=7139&overallResults=False', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7061&eventClassId=11688&eventRaceId=7139&overallResults=False', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7062&eventClassId=10906&eventRaceId=7140&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7062&eventClassId=10905&eventRaceId=7140&overallResults=False' // Men
        ],
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
            'https://www.tulospalvelu.fi/gps/20210706W/map',
            // 'https://omaps.worldofo.com/?id=301353',
            'https://www.tulospalvelu.fi/gps/20210706M/map',
            'https://woc2021.cz/wp-content/uploads/2021/07/Middle-Final-Men.pdf',
            'https://woc2021.cz/wp-content/uploads/2021/07/Middle-Final-Women.pdf',
            'https://news.worldofo.com/wp-content/uploads/2021/07/men_map.jpg', // duplicate of https://www.tulospalvelu.fi/gps/20210706M/map
            'https://mapy.ceskyorientak.cz/data/jpg/11619X.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/11620X.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20210706MA/map',
            'https://www.tulospalvelu.fi/gps/20210706MB/map',
            'https://www.tulospalvelu.fi/gps/20210706MC/map',
            'https://www.tulospalvelu.fi/gps/20210706WA/map',
            'https://www.tulospalvelu.fi/gps/20210706WB/map',
            'https://www.tulospalvelu.fi/gps/20210706WC/map',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-qual-women-a.pdf', // Heat A
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-qual-women-b.pdf', // Heat B
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-qual-women-c.pdf', // Heat C
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-qual-men-a.pdf', // Heat A
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-qual-men-b.pdf', // Heat B
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-qual-men-c.pdf', // Heat C
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-final-women.pdf', // Women
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-middle-final-men.pdf' // Men
        ],
        photo: [
            'https://photos.app.goo.gl/KyuitLxRv8ZfRHR38',
            'https://photos.app.goo.gl/en3fQJwSKJBp99gd9',
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FQualification%2FForest%20by%20Tom%C3%A1%C5%A1%20Bubela%20-%20FB%20bubos%20-%20IG%20bubos12', // Forest (1)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FQualification%2FForest%20by%20Luk%C3%A1%C5%A1%20Bud%C3%ADnsk%C3%BD', // Forest (2)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FQualification%2FForest%20by%20Petr%20H%C3%A1p', // Forest (3)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FQualification%2FMeadow%20-%20men%20by%20Ji%C5%99%C3%AD%20%C4%8Cech', // Meadow (1)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FQualification%2FMeadow%20-%20women%20by%20Ji%C5%99%C3%AD%20%C4%8Cech', // Meadow (2)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FFinal%2FForest%20by%20Tom%C3%A1%C5%A1%20Bubela%20-%20FB%20bubos%20-%20IG%20bubos12', // Forest (1)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FFinal%2FForest%20by%20Petr%20H%C3%A1p', // Forest (2)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FFinal%2FForest%20by%20Luk%C3%A1%C5%A1%20Bud%C3%ADnsk%C3%BD', // Forest (3)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FFinal%2FMeadow%20and%20finish%20-%20women%20by%20Ji%C5%99%C3%AD%20%C4%8Cech', // Meadow & finish, women
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FFinal%2FMeadow%20and%20finish%20-%20men%20by%20Ji%C5%99%C3%AD%20%C4%8Cech', // Meadow & finish, men
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0VyRmRtN0p3UFpWSXRqaXI2TkYtbDcwQjdiSl9EZ0lKbngxQ1FDUklsR19OcEE_cnRpbWU9VVR4bUpLWkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Middle%2FFinal%2FCeremonies%20by%20Ji%C5%99%C3%AD%20%C4%8Cech' // Ceremonies
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7063',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7063&eventClassId=10839', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7063&eventClassId=10838' // Men
        ],
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
            'https://www.tulospalvelu.fi/gps/20210708W1/map',
            // 'https://omaps.worldofo.com/?id=301419',
            'https://www.tulospalvelu.fi/gps/20210708W3/map',
            // 'https://omaps.worldofo.com/?id=301420',
            // 'https://omaps.worldofo.com/?id=301421',
            'https://www.tulospalvelu.fi/gps/20210708M3/map',
            // 'https://omaps.worldofo.com/?id=301422',
            'https://www.tulospalvelu.fi/gps/20210708M2/map',
            // 'https://omaps.worldofo.com/?id=301423',
            'https://news.worldofo.com/wp-content/uploads/2021/07/map_relay.jpg',
            'https://mapy.ceskyorientak.cz/data/jpg/11622X.jpg',
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/20210708M1/map', // duplicate of https://www.tulospalvelu.fi/gps/20210708M2/map
            // 'https://www.tulospalvelu.fi/gps/20210708W2/map', // duplicate of https://www.tulospalvelu.fi/gps/20210708W1/map
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-relay-women.pdf', // Women
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-relay-men.pdf' // Men
        ],
        photo: [
            'https://photos.app.goo.gl/aZjZog34FkzBFCiC6',
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0V0STNBOEhka0M1T2tOTzc1bUhBaHZvQkxEUUVYV1ByNFlDR2VmNFI0R1lKTEE_cnRpbWU9S3B1aXdxVkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Relays%2FForest%20-%20Women%20by%20Luk%C3%A1%C5%A1%20Bud%C3%ADnsk%C3%BD', // Forest (1)
            'https://firmadat365.sharepoint.com/sites/woc2021/Gallery/Forms/Thumbnails.aspx?originalPath=aHR0cHM6Ly9maXJtYWRhdDM2NS5zaGFyZXBvaW50LmNvbS86Zjovcy93b2MyMDIxL0V0STNBOEhka0M1T2tOTzc1bUhBaHZvQkxEUUVYV1ByNFlDR2VmNFI0R1lKTEE_cnRpbWU9S3B1aXdxVkMyVWc&viewid=86854d22-bf18-4cf6-8bb1-f357f66d57e9&id=%2Fsites%2Fwoc2021%2FGallery%2FPublic%2FWOC%202021%20Relays%2FForest%20by%20Tom%C3%A1%C5%A1%20Bubela%20-%20FB%20bubos%20-%20IG%20bubos12' // Forest (2)
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7064',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7064&eventClassId=10841&eventRaceId=7142&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7064&eventClassId=10840&eventRaceId=7142&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20210709M/',
            'W': 'https://www.tulospalvelu.fi/gps/20210709W/'
        },
        maps: [
            // 'https://news.worldofo.com/2021/07/09/woc-2021-long-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=301488',
            'https://www.tulospalvelu.fi/gps/20210709W/map',
            // 'https://omaps.worldofo.com/?id=301489',
            'https://www.tulospalvelu.fi/gps/20210709M/map',
            'https://news.worldofo.com/wp-content/uploads/2021/07/map_men2.jpg', // duplicate of https://www.tulospalvelu.fi/gps/20210709M/map
            'https://mapy.ceskyorientak.cz/data/jpg/11623X.jpg',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-long-women.pdf', // Women
            'https://orienteering.sport/wp-content/uploads/2021/07/woc-2021-map-long-men.pdf' // Men
        ],
        photo: 'https://photos.app.goo.gl/At6zUM4KE2Ewa8oDA',
        coord: [50.564722, 14.655556],
        fmt: 'long',
        start: 'WOC'
    },
    {
        id: 'IOF_20211008_1',
        date: '2021-10-08',
        endDate: '2021-10-10',
        place: 'Abrantes, Portugal (Абрантеш, Португалия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://mtbo2021.fpo.pt/',
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7019/b57ef36a-28b5-4184-9603-39e413830a64/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7019/c62864f7-4dfb-4661-ad15-033a323929f9/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7019/0af9518a-5fbe-4b52-bd31-1ba8ed50e6d3/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/7019' // IOF Eventor
        ],
        maps: [
            // старые карты районов (сайт организаторов):
            'https://mtbo2021.fpo.pt/files/Abrantes.jpg',
            'https://mtbo2021.fpo.pt/files/Alcaravela.jpg',
            'https://mtbo2021.fpo.pt/files/SantaMargarida.jpg',
            'https://mtbo2021.fpo.pt/files/VilaNovaDaBarquinha.jpg'
        ],
        coord: [39.463333, -8.1975],
        type: 'VELO',
        fmt: 'middle, long, mixed relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20211008_2',
        parent: 'IOF_20211008_1',
        date: '2021-10-08',
        name: 'EMTBOC #1, миддл',
        place: 'Abrantes, Portugal (Абрантеш, Португалия)',
        gps: {
            'M': 'https://events.loggator.com/ouwVSw',
            'W': 'https://events.loggator.com/FDi7MA'
        },
        maps: [
            // официальные карты организаторов (mtbo2021.fpo.pt/files/maps):
            'https://mtbo2021.fpo.pt/files/maps/Day2-Middle/M21.png',
            'https://mtbo2021.fpo.pt/files/maps/Day2-Middle/W21.png',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/c50005a7f82b842ef7801334/optimized_MapM21.png',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/4cc259e8e66a92d1ce7e8e67/optimized_MapW21.png'
        ],
        coord: [39.463333, -8.1975],
        type: 'VELO',
        fmt: 'middle',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20211009_1',
        parent: 'IOF_20211008_1',
        date: '2021-10-09',
        name: 'EMTBOC #2, лонг',
        place: 'Abrantes, Portugal (Абрантеш, Португалия)',
        gps: {
            'M': 'https://events.loggator.com/lp-9PQ',
            'W': 'https://events.loggator.com/BYC8hw'
        },
        maps: [
            // официальные карты организаторов (mtbo2021.fpo.pt/files/maps):
            'https://mtbo2021.fpo.pt/files/maps/Day3-Long/M21%20(A).png',
            'https://mtbo2021.fpo.pt/files/maps/Day3-Long/M21%20(B).png',
            'https://mtbo2021.fpo.pt/files/maps/Day3-Long/W21%20(A).png',
            'https://mtbo2021.fpo.pt/files/maps/Day3-Long/W21%20(B).png',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/00760e3fc855154669812533/optimized_Canvas_1_M21__A_.png', // duplicate of https://mtbo2021.fpo.pt/files/maps/Day3-Long/M21%20(A).png
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2a1418c89d79c19548816219/optimized_PontosW21.jpg'
        ],
        coord: [39.463333, -8.1975],
        type: 'VELO',
        fmt: 'long',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20211010_1',
        parent: 'IOF_20211008_1',
        date: '2021-10-10',
        name: 'EMTBOC #3, смешанная эстафета',
        place: 'Abrantes, Portugal (Абрантеш, Португалия)',
        gps: {
            '1': 'https://events.loggator.com/gsKu2g',
            '2': 'https://events.loggator.com/BiXXVQ',
            '3': 'https://events.loggator.com/64bRvQ'
        },
        maps: [
            // официальные карты организаторов (mtbo2021.fpo.pt/files/maps):
            'https://mtbo2021.fpo.pt/files/maps/Day4-Relay/MIXED%20AAA%20(0).png',
            'https://mtbo2021.fpo.pt/files/maps/Day4-Relay/MIXED%20BBB%20(13).png',
            'https://mtbo2021.fpo.pt/files/maps/Day4-Relay/MIXED%20CCC%20(26).png',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/6d17a4e87b3f88d7a7a07ea7/optimized_MapRelay.jpg'
        ],
        coord: [39.463333, -8.1975],
        type: 'VELO',
        fmt: 'mixed relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6981/57316392-2997-4726-ad66-20f8c83eca9e/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6981/d2d8234e-95ad-460a-b55a-949e18193e6c/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6981/f27ec23e-71ae-47ff-bff9-c78ceee9e5f9/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6981/a3da1f3b-550c-4aeb-bcfe-2066f73c1492/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/6981',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7339&eventRaceId=7430&overallResults=False', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7339&eventClassId=12266&eventRaceId=7430&overallResults=False', // ESOC Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7339&eventClassId=12265&eventRaceId=7430&overallResults=False', // ESOC Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7339&eventClassId=12013&eventRaceId=7430&overallResults=False', // World Cup Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7339&eventClassId=12012&eventRaceId=7430&overallResults=False', // World Cup Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7341&eventRaceId=7432&overallResults=False', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7341&eventClassId=12276', // ESOC Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7341&eventClassId=12275', // ESOC Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7341&eventClassId=12016', // World Cup Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7341&eventClassId=12015', // World Cup Men
            'https://eventor.orienteering.org/Documents/Event/4962/1/Official-results---Sprint-relay', // Mixed
            'https://eventor.orienteering.org/Events/ResultList?eventId=7342&groupBy=EventClass', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7342&eventClassId=12287&eventRaceId=7433&overallResults=False', // ESOC Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7342&eventClassId=12018&eventRaceId=7433&overallResults=False', // World Cup Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7342&eventClassId=12017&eventRaceId=7433&overallResults=False' // World Cup Men
        ],
        gps: {
            'Men-re-live-published': 'https://gps.tracksport.eu/map/esoc-2022-sprint-men',
            'Start-times-are-delayed-1-hour-due-to-lot-of-snow-in-the-are': 'https://gps.tracksport.eu/map/esoc-2022-middle-men',
            'All-legs': 'https://gps.tracksport.eu/map/esoc-2022-sprint-relay',
            'Men': 'https://gps.tracksport.eu/map/esoc-2022-long-men',
            'Leg-1': 'https://gps.tracksport.eu/map/esoc-2022-realy-men',
            'Leg-2': 'https://gps.tracksport.eu/map/esoc-2022-realy-men-leg2',
            'Leg-3': 'https://gps.tracksport.eu/map/esoc-2022-realy-men-leg3'
        },
        maps: [
            // TrackSport
            'https://gps.tracksport.eu/storage/events/esoc-2022-sprint-men/layers/kmz/368059889c53b1a980719ff07ded2c09/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/esoc-2022-middle-men/layers/kmz/4aec876e3b70569614cbbe29079fc542/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/esoc-2022-sprint-relay/layers/kmz/ac8719c1f7121ecf0274ea93c208b3f3/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/esoc-2022-long-men/layers/kmz/68fc60404fa3be45311305ce21c0d34c/files/tile_0_0.jpg'
        ],
        video: [
            'https://www.youtube.com/watch?v=F4nwIuzSxJc', // Link to youtube
            'https://www.youtube.com/watch?v=adLFW0TIsLc' // Link to youtube
        ],
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6499/11c6ec5f-5c45-47d1-980b-66b65c0b24a0/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6499/1c1e2432-31f1-44e2-be7e-09884054ed84/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6499/546d5f85-dcf2-4c88-a9f7-0aba12dcd83c/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6499/93d9823e-03a7-44a8-b237-c00051c089fb/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6499',
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/6499/cd885ccd-2bde-4a4c-a19b-2ed2bc3709cc/Kallinkangas-ski-o-map.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6499/acc734d7-b9d8-4f57-85ef-98c6080c2d04/Kallinkangas-map.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6499/2bc81a4e-55ae-473f-b758-c4099f36947c/Kallinkangas-Kallinh-nt--map.pdf'
        ],
        photo: [
            'https://wsoc2022.com/photos/' // Official webpage
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeH_izGbbC_0VgM4qi3N0WM',
        coord: [65.736111, 24.563611],
        type: 'SKI',
        fmt: 'sprint, middle, pursuit, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20220315_2',
        parent: 'IOF_20220315_1',
        date: '2022-03-15',
        name: 'SKI-WOC #1, спринт',
        place: 'Kemi, Keminmaa, Finland (Кеми, Кеминмаа, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7404&eventRaceId=7497&overallResults=False', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7404&eventClassId=12162&eventRaceId=7497&overallResults=False', // WSOC Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7404&eventClassId=12161&eventRaceId=7497&overallResults=False' // WSOC Men
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022wsocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2022wsocSprintW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2022wsocSprintM/map',
            'https://www.tulospalvelu.fi/gps/2022wsocSprintW/map'
        ],
        coord: [65.736111, 24.563611],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20220316_1',
        parent: 'IOF_20220315_1',
        date: '2022-03-16',
        name: 'SKI-WOC #2, гонка преследования',
        place: 'Kemi, Keminmaa, Finland (Кеми, Кеминмаа, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7405&groupBy=EventClass', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7405&eventClassId=12164&eventRaceId=7498&overallResults=False', // WSOC Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7405&eventClassId=12163&eventRaceId=7498&overallResults=False' // WSOC Men
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022wsocPursuitM/',
            'W': 'https://www.tulospalvelu.fi/gps/2022wsocPursuitW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2022wsocPursuitM/map',
            'https://www.tulospalvelu.fi/gps/2022wsocPursuitW/map'
        ],
        coord: [65.736111, 24.563611],
        type: 'SKI',
        fmt: 'pursuit',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20220318_1',
        parent: 'IOF_20220315_1',
        date: '2022-03-18',
        name: 'SKI-WOC #3, миддл',
        place: 'Kemi, Keminmaa, Finland (Кеми, Кеминмаа, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7406&eventRaceId=7499&overallResults=False', // All
            'https://eventor.orienteering.org/Events/ResultList?eventId=7406&eventClassId=12166&eventRaceId=7499&overallResults=False', // WSOC Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7406&eventClassId=12165&eventRaceId=7499&overallResults=False' // WSOC Men
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022wsocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2022wsocMiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2022wsocMiddleM/map',
            'https://www.tulospalvelu.fi/gps/2022wsocMiddleW/map'
        ],
        coord: [65.736111, 24.563611],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20220319_1',
        parent: 'IOF_20220315_1',
        date: '2022-03-19',
        name: 'SKI-WOC #4, спринт-эстафета',
        place: 'Kemi, Keminmaa, Finland (Кеми, Кеминмаа, Финляндия)',
        res: [
            'https://eventor.orienteering.org/Documents/Event/5122/2/Resluts-WSOC-and-World-Cup' // WSOC
        ],
        gps: {
            'M-246': 'https://www.tulospalvelu.fi/gps/2022wsocRelayM/',
            'W-135': 'https://www.tulospalvelu.fi/gps/2022wsocRelayW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2022wsocRelayM/map',
            'https://www.tulospalvelu.fi/gps/2022wsocRelayW/map'
        ],
        coord: [65.736111, 24.563611],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20220518_1',
        date: '2022-05-18',
        endDate: '2022-05-22',
        place: 'Ignalina, Lithuania (Игналина, Литва)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/2022_European_MTB_Orienteering_Championships',
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6738/4e31585b-fbde-4949-9b80-3b3ba24c4978/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6738/f697bae5-1b53-4355-b990-a018a1b78233/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6738/85bb9e8d-e299-42e2-8539-25c21480f994/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6738/7b30d798-9cce-403d-8451-2f438f69d3c4/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/6738', // IOF Eventor
            'https://eventor.orienteering.org/Events/ResultList?eventId=7462&eventClassId=12334&eventRaceId=7555&overallResults=False', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7462&eventClassId=12333&eventRaceId=7555&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7462&eventClassId=12336&eventRaceId=7555&overallResults=False', // Women 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7462&eventClassId=12335&eventRaceId=7555&overallResults=False' // Men 17
        ],
        photo: [
            'https://www.facebook.com/pg/EMTBOC/photos/?tab=album&album_id=1785680628430329' // Official facebook
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJejin65EHVBItRn6BoE1Sa2',
        coord: [55.35, 26.166667],
        type: 'VELO',
        fmt: 'sprint, long, relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20220520_1',
        parent: 'IOF_20220518_1',
        date: '2022-05-20',
        name: 'EMTBOC #1, спринт',
        place: 'Ignalina, Lithuania (Игналина, Литва)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7438&eventClassId=12226&eventRaceId=7531&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7438&eventClassId=12225&eventRaceId=7531&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://sportrec.eu/gps/emtboc-sprint-men',
            'W': 'https://sportrec.eu/gps/emtboc-sprint-women'
        },
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1h845ri/4092_220519202224.png',
            'https://sportrec.eu/gps/map/1h845s9/4093_220519202924.png'
        ],
        coord: [55.35, 26.166667],
        type: 'VELO',
        fmt: 'sprint',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20220521_1',
        parent: 'IOF_20220518_1',
        date: '2022-05-21',
        name: 'EMTBOC #2, лонг',
        place: 'Ignalina, Lithuania (Игналина, Литва)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7439&eventClassId=12228&eventRaceId=7532&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7439&eventClassId=12227&eventRaceId=7532&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://sportrec.eu/gps/emtboc-long-men',
            'W': 'https://sportrec.eu/gps/emtboc-long-women'
        },
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1h8462q/4094_Bz052107210852Lui4.png',
            'https://sportrec.eu/gps/map/1h8463u/4095_rC05210735287iodLM.png'
        ],
        coord: [55.35, 26.166667],
        type: 'VELO',
        fmt: 'long',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20220522_1',
        parent: 'IOF_20220518_1',
        date: '2022-05-22',
        name: 'EMTBOC #3, смешанная эстафета',
        place: 'Ignalina, Lithuania (Игналина, Литва)',
        gps: 'https://sportrec.eu/gps/emtboc-mixed-relay',
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1h846ba/4100_Zi0521172918PV7JCd.png'
        ],
        coord: [55.35, 26.166667],
        type: 'VELO',
        fmt: 'mixed relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20220626_1',
        date: '2022-06-26',
        endDate: '2022-06-30',
        place: 'Kolding, Fredericia, Vejle, Denmark (Кольдинг, Фредерисия, Вайле, Дания)',
        name: 'Чемпионат мира (WOC)',
        // сайт не работает: woc2022.dk
        link: 'https://en.wikipedia.org/wiki/2022_World_Orienteering_Championships',
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6864/13a5fea2-0e53-4375-9f6f-7cf792ec5cbe/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6864/47be11a0-af33-4546-a0d1-23d09b125511/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6864/1578a1cc-f2ab-44cf-9b9f-fb625b4af0bd/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6864/8464c3fa-f5e4-4ed2-b404-7336c4b32ddb/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6864',
        photo: 'https://photos.app.goo.gl/CKN9fxocBgrS3onc9',
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJdrWqAeeID6mbgFaRZc2I-J',
            'https://tv.nrk.no/serie/orientering/2022/MSPO31250522', // 17:20-18:45
            'https://tv.nrk.no/serie/orientering/2022/MSPO31250622', // 17:45-19:40
            'https://tv.nrk.no/serie/orientering/2022/MSPO31250822', // 17:50-20:00
            'https://arenan.yle.fi/1-62877105', // 18:15
            'https://arenan.yle.fi/1-62075371', // 18:25-20:40
            'https://arenan.yle.fi/1-62075373', // 18:35-21:00
            'https://www.ceskatelevize.cz/porady/15081356708-ms-v-orientacnim-behu-2022-dansko/322297371280001/', // 17:15-18:45
            'https://www.ceskatelevize.cz/porady/15081356708-ms-v-orientacnim-behu-2022-dansko/322297371280002/', // 17:30-19:40
            'https://www.ceskatelevize.cz/porady/15081356708-ms-v-orientacnim-behu-2022-dansko/222471291280001/', // 19:25-20:00
            'https://tv.orf.at/program/orfs/liveorient106.html', // 18:00-18:50
            'https://tv.orf.at/program/orfs/liveorient108.html', // 17:30-19:45
            'https://tv.orf.at/program/orfs/liveorient110.html' // 17:40-20:00
        ],
        coord: [55.491667, 9.5],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20220626_2',
        parent: 'IOF_20220626_1',
        date: '2022-06-26',
        name: 'WOC #1, спринт-эстафета',
        place: 'Kolding, Fredericia, Vejle, Denmark (Кольдинг, Фредерисия, Вайле, Дания)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7448',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7448&groupBy=EventClass' // Mixed class
        ],
        gps: {
            'Leg-1': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/813c9cf0-d44f-013a-b936-021250fcae8c.json',
            'Leg-2': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/a6e0fe30-d44f-013a-b938-021250fcae8c.json',
            'Leg-3': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/a6e39a50-d44f-013a-b93a-021250fcae8c.json',
            'Leg-4': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/a6e5ff70-d44f-013a-b93c-021250fcae8c.json'
        },
        maps: [
            // 'https://news.worldofo.com/2022/06/27/woc-2022-sprint-relay-maps-results-and-analysis/',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map_original_women-full.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map_original_men-full.jpg',
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/7448/75787d74-d38d-40d0-9173-c13653ecefe1/Map_Kolding_Men.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7448/1c9badcf-bf06-419e-891c-3901880abb57/Map_Kolding_Women.pdf',
            // карты (IOF LIVE)
            'https://eventor.orienteering.org/Documents/Event/5412/1/Map_Kolding_Women', // Women
            'https://eventor.orienteering.org/Documents/Event/5411/1/Map_Kolding_Men' // Men
        ],
        photo: [
            'https://photos.google.com/share/AF1QipOsBChMAsaLvZ7LVl5AJnLQ_9H6vRKW0iha4jzCb2cSTjRbMw2ZD4mrkMOUqp2Vqw?key=TU5vN24wdWpiMHp1ZTVSckMyZGJYbHBGVlYwaU9R',
            'https://photos.app.goo.gl/8wWZNin4GwzP6xqKA' // IOF Official
        ],
        video: 'https://www.youtube.com/watch?v=2VZZA8WkAmQ',
        coord: [55.491667, 9.5],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20220628_1',
        parent: 'IOF_20220626_1',
        date: '2022-06-28',
        name: 'WOC #2, нокаут-спринт (квалификация и финалы)',
        place: 'Kolding, Fredericia, Vejle, Denmark (Кольдинг, Фредерисия, Вайле, Дания)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventRaceId=7542&overallResults=False', // All races
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventClassId=12972&eventRaceId=7542&overallResults=False', // Women A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventClassId=12973&eventRaceId=7542&overallResults=False', // Women B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventClassId=12974&eventRaceId=7542&overallResults=False', // Women C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventClassId=12949&eventRaceId=7542&overallResults=False', // Men A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventClassId=12950&eventRaceId=7542&overallResults=False', // Men B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7449&eventClassId=12951&eventRaceId=7542&overallResults=False' // Men C
        ],
        gps: {
            'Qualification-Men-A': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/14b89490-d42b-013a-b2dd-021250fcae8c.json',
            'Qualification-Men-B': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/39029f30-d42b-013a-b315-021250fcae8c.json',
            'Qualification-Men-C': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/65bd9830-d42b-013a-b350-021250fcae8c.json',
            'Quarter-finals-Women-1': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/242cb400-d42d-013a-b444-021250fcae8c.json',
            'Quarter-finals-Women-2': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/46593110-d877-013a-5ecf-021250fcae8c.json',
            'Quarter-finals-Women-3': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/4661c6a0-d877-013a-5edb-021250fcae8c.json',
            'Quarter-finals-Women-4': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/4669d6b0-d877-013a-5ee7-021250fcae8c.json',
            'Quarter-finals-Women-5': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/4671ec80-d877-013a-5ef3-021250fcae8c.json',
            'Quarter-finals-Men-1': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/0a3bae00-d42d-013a-b421-021250fcae8c.json',
            'Quarter-finals-Men-2': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/196c7d60-d877-013a-5e93-021250fcae8c.json',
            'Quarter-finals-Men-3': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/1974a5b0-d877-013a-5e9f-021250fcae8c.json',
            'Quarter-finals-Men-4': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/197c9eb0-d877-013a-5eab-021250fcae8c.json',
            'Quarter-finals-Men-5': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/19844ee0-d877-013a-5eb7-021250fcae8c.json',
            'Quarter-finals-Men-6': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/198c1410-d877-013a-5ec3-021250fcae8c.json',
            'Semi-Finals-Women-2': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/c28f8250-d876-013a-5e59-021250fcae8c.json',
            'Semi-Finals-Women-3': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/c2988bc0-d876-013a-5e67-021250fcae8c.json',
            'Semi-Finals-Men-1': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/bafb49c0-d42d-013a-b467-021250fcae8c.json',
            'Semi-Finals-Men-2': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/d93c5d80-d876-013a-5e75-021250fcae8c.json',
            'Semi-Finals-Men-3': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/d945edd0-d876-013a-5e84-021250fcae8c.json',
            'Finals-Women': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/76cc00a0-d42e-013a-b4eb-021250fcae8c.json',
            'Finals-Men': 'https://live.tractrac.com/viewer/index.html?target=https://live.tractrac.com/events/event_20220626_WorldOrien/races/64db8880-d42e-013a-b4bc-021250fcae8c.json'
        },
        maps: [
            // 'https://news.worldofo.com/2022/06/29/woc-2022-knock-out-sprint-maps-results-and-analysis/',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map-men-q-A_3000.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map-women-q-A_3000.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map_men_final.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/06/women_final_map.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map_men_sf.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/06/map_women_sf.jpg',
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/7449/ef748682-1d5e-4fdb-9826-6ea10f38326d/Map_Fredericia_Qual_Part1of2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7449/391b1309-4d89-4903-8e7f-4bedce263c34/Map_Fredericia_Qual_Part2of2.PDF',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7449/757aa089-89b5-496b-812f-5ce47abca22d/Map_Fredericia_Quarter_Finals.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7449/fe1c5365-f52e-4deb-b57d-c0e7bed370dd/Map_Fredericia_SemiFinals_Men.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7449/c874a7f2-fc8d-401e-b986-414ba9e9743f/Map_Fredericia_SemiFinals_Women.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7449/dfdbb125-9f5b-41c8-afb8-6ff682f2681c/Map_Fredericia_Finals.pdf',
            // карты (IOF LIVE)
            'https://eventor.orienteering.org/Documents/Event/5416/1/Map_Fredericia_Qual_Part1of2', // Qualification map with all controls
            'https://eventor.orienteering.org/Documents/Event/5417/1/Mao_Fredericia_Qual_Part_2of2', // Control descriptions for the classes
            'https://eventor.orienteering.org/Documents/Event/5427/1/Map_Fredericia_Quarter_Finals', // Quarter final
            'https://eventor.orienteering.org/Documents/Event/5432/1/Map_Fredericia_SemiFinals_Women', // Women
            'https://eventor.orienteering.org/Documents/Event/5431/1/Map_Fredericia_SemiFinals_Men', // Men
            'https://eventor.orienteering.org/Documents/Event/5435/1/Map_Fredericia_Finals' // Final
        ],
        photo: [
            'https://photos.app.goo.gl/LoDy1itTNSBMQEhB7',
            'https://photos.app.goo.gl/MNNyjNP1n7RiGB1R9',
            'https://photos.google.com/share/AF1QipP0t2jKKV6bue9Bl_gtw3qQpzl8ueN2yDbVo-8ho2Z9Y_Dxn7OPuy9-1dfeEhoF1A?key=RHp0ci15ZVh2VnFDQzRHM0hZLWJjZ05waHY3TXN3' // Final
        ],
        video: [
            'https://www.youtube.com/watch?v=j3MxXDjS5ro',
            'https://www.youtube.com/watch?v=kEGa_kW3oE4'
        ],
        coord: [55.491667, 9.5],
        fmt: 'knock-out',
        start: 'WOC'
    },
    {
        id: 'IOF_20220630_1',
        parent: 'IOF_20220626_1',
        date: '2022-06-30',
        name: 'WOC #3, спринт',
        place: 'Kolding, Fredericia, Vejle, Denmark (Кольдинг, Фредерисия, Вайле, Дания)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12986&eventRaceId=7543&overallResults=False', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12987&eventRaceId=7543&overallResults=False', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12988&eventRaceId=7543&overallResults=False', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12983&eventRaceId=7543&overallResults=False', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12984&eventRaceId=7543&overallResults=False', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12985&eventRaceId=7543&overallResults=False', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12982&eventRaceId=7543&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7450&eventClassId=12981&eventRaceId=7543&overallResults=False' // Men
        ],
        gps: {
            'all': 'https://tractrac.com/event-page/event_20220626_WorldOrien/2381'
        },
        maps: [
            // 'https://news.worldofo.com/2022/07/01/woc-2022-individual-sprint-maps-results-and-analysis/',
            'https://news.worldofo.com/wp-content/uploads/2022/07/map_sprint_men_2022.jpg',
            'https://news.worldofo.com/wp-content/uploads/2022/07/map_sprint_women_2022.jpg',
            // IOF Eventor
            'https://eventor-iof-storage.orientering.se/eventdocuments/7450/38fa1720-2010-427b-a4dc-1f7ec19d9230/Map_Vejle_Qualification_Part_1of2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7450/783478d3-adf7-41d5-ac8d-faaeda6a8d36/Map_Vejle_Qualification_Part_2of2.PDF',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7450/96d70d0f-3141-4c40-a3fa-bd456d4907d0/Map_Vejle_Final_Men.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7450/b72acb4e-9efc-4d01-955b-4c77e5830426/Map_Vejle_Final_Women.pdf',
            // карты (IOF LIVE)
            'https://eventor.orienteering.org/Documents/Event/5442/1/Map_Vejle_Qualification_Part_1of2', // Qualification map with all controls
            'https://eventor.orienteering.org/Documents/Event/5443/1/Map_Vejle_Qualification_Part_2of2', // Control descriptions for the classes
            'https://eventor.orienteering.org/Documents/Event/5453/1/Map_Vejle_Final_Women', // Women
            'https://eventor.orienteering.org/Documents/Event/5452/1/Map_Vejle_Final_Men' // Men
        ],
        photo: [
            'https://photos.app.goo.gl/4BjqPqVY9DFSVFJV6',
            'https://photos.app.goo.gl/CKN9fxocBgrS3onc9' // Qualifications
        ],
        video: 'https://www.youtube.com/watch?v=C8cegvBxfwY',
        coord: [55.491667, 9.5],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20220715_1',
        date: '2022-07-15',
        endDate: '2022-07-20',
        place: 'Falun, Säter, Sweden (Фалун, Сетер, Швеция)',
        name: 'Чемпионат мира (WMTBOC)',
        // wmtboc2022.se теперь занят посторонним сайтом — ссылка не включена
        link: [
            'https://en.wikipedia.org/wiki/2022_World_MTB_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6736/306358ba-31e6-403c-ab42-e5ba2b945f3e/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6736/2243cfeb-3c88-4b1a-8129-b9017a23320d/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6736/ace2614e-aed0-4a29-95ab-0d9466469a2a/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6736/12cbee40-e34d-402d-a532-6cdd74e08d75/Bulletin-4.pdf'
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJd3Oeyxwh15690GzFeuf1x0',
        coord: [60.607222, 15.631111],
        type: 'VELO',
        fmt: 'middle, relay, long, sprint, mass start',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20220715_2',
        parent: 'IOF_20220715_1',
        date: '2022-07-15',
        name: 'WMTBOC #1, миддл',
        place: 'Falun, Säter, Sweden (Фалун, Сетер, Швеция)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7457',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7457&eventClassId=12322', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7457&eventClassId=12321', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7479&eventClassId=12426', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7479&eventClassId=12425' // Men 20
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20220715MiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/20220715MiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20220715MiddleM/map',
            'https://www.tulospalvelu.fi/gps/20220715MiddleW/map',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_w21_1.pdf', // Part 1
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_w21_2.pdf', // Part 2
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_m21_1.pdf', // Part 1
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_m21_2.pdf', // Part 2
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_w20_1.pdf', // Part 1
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_w20_2.pdf', // Part 2
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_m20_1.pdf', // Part 1
            'https://orienteering.sport/wp-content/uploads/2022/07/wmtboc_2022_map_middle_m20_2.pdf' // Part 2
        ],
        photo: [
            'https://photos.google.com/share/AF1QipNewXQSu25ttvxXdcpF7w7JMbO4ZPUaVln6EbVLyC20_R7GByyVU2rUBwEQCDa4DQ?key=ZkxocWp0elM0ZFhrenRLTzdYSkh1OUJIZTZEbFh3' // Official photos
        ],
        video: 'https://www.youtube.com/watch?v=hTkpsW35-eo',
        coord: [60.607222, 15.631111],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20220716_1',
        parent: 'IOF_20220715_1',
        date: '2022-07-16',
        name: 'WMTBOC #2, эстафета',
        place: 'Falun, Säter, Sweden (Фалун, Сетер, Швеция)',
        gps: {
            'M-1': 'https://www.tulospalvelu.fi/gps/20220716relayM1/',
            'M-2': 'https://www.tulospalvelu.fi/gps/20220716relayM2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20220716relayM3/',
            'W-1': 'https://www.tulospalvelu.fi/gps/20220716relayW1/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20220716relayW2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20220716relayW3/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20220716relayM1/map',
            // 'https://www.tulospalvelu.fi/gps/20220716relayM2/map', // duplicate of https://www.tulospalvelu.fi/gps/20220716relayM1/map
            // 'https://www.tulospalvelu.fi/gps/20220716relayM3/map', // duplicate of https://www.tulospalvelu.fi/gps/20220716relayM1/map
            'https://www.tulospalvelu.fi/gps/20220716relayW1/map',
            // 'https://www.tulospalvelu.fi/gps/20220716relayW2/map', // duplicate of https://www.tulospalvelu.fi/gps/20220716relayW1/map
            // 'https://www.tulospalvelu.fi/gps/20220716relayW3/map', // duplicate of https://www.tulospalvelu.fi/gps/20220716relayW1/map
            // карты (IOF LIVE)
            'https://drive.google.com/drive/folders/1JXfUjwpbmz5lFufKk4nyBe91vpLb5pnR' // All classes
        ],
        photo: [
            'https://photos.app.goo.gl/Boqbg3P6YwG9X7FTA' // Official
        ],
        video: 'https://www.youtube.com/watch?v=6EGsxJc4uYg',
        coord: [60.607222, 15.631111],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20220717_1',
        parent: 'IOF_20220715_1',
        date: '2022-07-17',
        name: 'WMTBOC #3, лонг',
        place: 'Falun, Säter, Sweden (Фалун, Сетер, Швеция)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7459',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7459&eventClassId=12324', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7459&eventClassId=12323', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7481&eventClassId=12430', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7481&eventClassId=12429' // Men 20
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20220717lomgM/',
            'W': 'https://www.tulospalvelu.fi/gps/20220717lomgW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20220717lomgM/map',
            'https://www.tulospalvelu.fi/gps/20220717lomgW/map',
            // карты (IOF LIVE)
            'https://drive.google.com/drive/folders/19LygNAx9O5N9jVL0jwizKr1uOqUJciC3?usp=sharing' // All
        ],
        photo: [
            'https://photos.app.goo.gl/kEuiVcLtT5KrurdU8', // Official album 1
            'https://photos.app.goo.gl/eCZawcDWAr8BGPmz9' // Official album 2
        ],
        video: 'https://www.youtube.com/watch?v=Mk6dU3GjeuU',
        coord: [60.607222, 15.631111],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20220719_1',
        parent: 'IOF_20220715_1',
        date: '2022-07-19',
        name: 'WMTBOC #4, спринт',
        place: 'Falun, Säter, Sweden (Фалун, Сетер, Швеция)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7460',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7460&eventClassId=12326', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7460&eventClassId=12325', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7482&eventClassId=12432', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7482&eventClassId=12431' // Men 20
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20220719sprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/20220719sprintW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20220719sprintM/map',
            'https://www.tulospalvelu.fi/gps/20220719sprintW/map',
            // карты (IOF LIVE)
            'https://drive.google.com/drive/folders/1mS_A2XA0DSo36pXD9RYwH_WtULLu4x3Y?usp=sharing' // All
        ],
        photo: [
            'https://photos.google.com/share/AF1QipNyZN8Ke9dirrpJxHkPATZv-wjypK39J2t63kB2P5qXY4frEYPa-o5KU_0FVuTtNQ?key=eFZ4RnYzMDNBZHh1ZThxZlhnUnJrTkdEb3loeGln' // Official album
        ],
        video: 'https://www.youtube.com/watch?v=eZC3XdF_LlU',
        coord: [60.607222, 15.631111],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20220720_1',
        parent: 'IOF_20220715_1',
        date: '2022-07-20',
        name: 'WMTBOC #5, масс-старт',
        place: 'Falun, Säter, Sweden (Фалун, Сетер, Швеция)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7461',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7461&eventClassId=12328', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7461&eventClassId=12327', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7483&eventClassId=12436', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7483&eventClassId=12435' // Men 20
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20220720massM/',
            'W': 'https://www.tulospalvelu.fi/gps/20220720massW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20220720massM/map',
            'https://www.tulospalvelu.fi/gps/20220720massW/map',
            // карты (IOF LIVE)
            'https://drive.google.com/drive/folders/1xfmH8izfY2OzjU1To8EP8LHvVsa9zw4R?sort=14&direction=d' // All
        ],
        photo: [
            'https://photos.app.goo.gl/eDEVx11npW2MqVP96' // Official album
        ],
        video: 'https://www.youtube.com/watch?v=wNHUT-TTmhI',
        coord: [60.607222, 15.631111],
        type: 'VELO',
        fmt: 'mass start',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6817/a87639a0-d92a-44d9-91f8-2dd8d5ed7c57/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6817/ab799953-9436-4dec-a6b7-d32941a9c778/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6817/fc2713f6-27ac-4879-89c8-3e0052e904e8/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/6817',
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/6817/24610089-7b62-422c-9333-6d16c1b4e2af/Previous-map-of-Pukametsa.pdf'
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7515&eventClassId=13077', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7515&eventClassId=13078', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7515&eventClassId=13079', // Heat C
            'https://eventor.orienteering.org/Events/ResultList?eventId=7515&eventClassId=13080', // Heat A
            'https://eventor.orienteering.org/Events/ResultList?eventId=7515&eventClassId=13081', // Heat B
            'https://eventor.orienteering.org/Events/ResultList?eventId=7515&eventClassId=13082' // Heat C
        ],
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
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2022eocMQmen/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQma/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQmb/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQmc/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQwomen/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQwa/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQwb/map',
            'https://www.tulospalvelu.fi/gps/2022eocMQwc/map'
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7516',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7516&eventClassId=12777', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7516&eventClassId=12778' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022eocLm/',
            'W': 'https://www.tulospalvelu.fi/gps/2022eocLw/'
        },
        maps: [
            // 'https://news.worldofo.com/2022/08/05/eoc-2022-long-maps-results-analysis/',
            // 'https://omaps.worldofo.com/?id=323184',
            'https://www.tulospalvelu.fi/gps/2022eocLw/map',
            // 'https://omaps.worldofo.com/?id=323185',
            'https://www.tulospalvelu.fi/gps/2022eocLm/map',
            'https://news.worldofo.com/wp-content/uploads/2022/08/map_eoc2022_long_men.png', // duplicate of https://www.tulospalvelu.fi/gps/2022eocLm/map
        ],
        photo: [
            'https://photos.app.goo.gl/s1Q6H4jLAHMkMmMJA',
            'https://www.facebook.com/media/set/?vanity=IOForienteering&set=a.5607152165981800' // Facebook album
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7517',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7517&eventClassId=13086', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7517&eventClassId=13087', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7517&eventClassId=13088', // B-Final men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7517&eventClassId=13089' // B-Final women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2022eocMFma/',
            'W': 'https://www.tulospalvelu.fi/gps/2022eocMFwa/',
            'M-B': 'https://www.tulospalvelu.fi/gps/2022eocMFmb/',
            'W-B': 'https://www.tulospalvelu.fi/gps/2022eocMFwb/'
        },
        maps: [
            // 'https://news.worldofo.com/2022/08/07/eoc-2022-middle-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=323289',
            'https://www.tulospalvelu.fi/gps/2022eocMFwa/map',
            // 'https://omaps.worldofo.com/?id=323290',
            'https://www.tulospalvelu.fi/gps/2022eocMFma/map',
            'https://news.worldofo.com/wp-content/uploads/2022/08/map_eoc2022_middle_men.png', // duplicate of https://www.tulospalvelu.fi/gps/2022eocMFma/map
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2022eocMFmb/map',
            'https://www.tulospalvelu.fi/gps/2022eocMFwb/map',
        ],
        photo: [
            'https://photos.app.goo.gl/FFTyNCnoCzCncADh9',
            'https://www.facebook.com/media/set?vanity=IOForienteering&set=a.5607118875985129' // Facebook album
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7518',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7518&eventClassId=12781', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7518&eventClassId=12782' // Women
        ],
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
            'https://www.tulospalvelu.fi/gps/2022eocRw1/map',
            // 'https://omaps.worldofo.com/?id=323339',
            'https://www.tulospalvelu.fi/gps/2022eocRm3/map',
            // 'https://omaps.worldofo.com/?id=323340',
            'https://www.tulospalvelu.fi/gps/2022eocRm2/map',
            // 'https://omaps.worldofo.com/?id=323341',
            // 'https://omaps.worldofo.com/?id=323342',
            'https://www.tulospalvelu.fi/gps/2022eocRw3/map',
            // 'https://omaps.worldofo.com/?id=323343',
            'https://news.worldofo.com/wp-content/uploads/2022/08/map_eoc2022_relay_men_leg1.png', // duplicate of https://www.tulospalvelu.fi/gps/2022eocRm2/map
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2022eocRm1/map', // duplicate of https://www.tulospalvelu.fi/gps/2022eocRm2/map
            // 'https://www.tulospalvelu.fi/gps/2022eocRw2/map', // duplicate of https://www.tulospalvelu.fi/gps/2022eocRw1/map
            // карты (IOF LIVE)
            'https://gps.tulospalvelu.fi/gps/2022eocRm1/map', // Men
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7215/470b3cee-4735-456f-81cb-4b4e61ef17d6/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7215/6a428fd9-ccc0-41cb-bba1-d2cfeaf08520/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7215/0f702d30-ff08-4674-bdbe-716eeefb4651/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/7215',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7634&eventClassId=13288&eventRaceId=7745&overallResults=False', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7634&eventClassId=13287&eventRaceId=7745&overallResults=False', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7644&eventClassId=13269&eventRaceId=7755&overallResults=False', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7644&eventClassId=13268&eventRaceId=7755&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7640&eventClassId=13263&eventRaceId=7751&overallResults=False', // Women 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7640&eventClassId=13262&eventRaceId=7751&overallResults=False', // Men 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7635&eventClassId=13290&eventRaceId=7746&overallResults=False', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7635&eventClassId=13289&eventRaceId=7746&overallResults=False', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7645&eventClassId=13286&eventRaceId=7756&overallResults=False', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7645&eventClassId=13285&eventRaceId=7756&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7641&eventClassId=13265&eventRaceId=7752&overallResults=False', // Women 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7641&eventClassId=13264&eventRaceId=7752&overallResults=False', // Men 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7636&eventClassId=13292&eventRaceId=7747&overallResults=False', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7636&eventClassId=13291&eventRaceId=7747&overallResults=False', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7646&eventClassId=13271&eventRaceId=7757&overallResults=False', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7646&eventClassId=13270&eventRaceId=7757&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7642&eventClassId=13280&eventRaceId=7753&overallResults=False', // Women 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7642&eventClassId=13279&eventRaceId=7753&overallResults=False', // Men 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7637&eventClassId=13294', // Women 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7637&eventClassId=13293', // Men 21
            'https://eventor.orienteering.org/Events/ResultList?eventId=7647&eventClassId=13273', // Women 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7647&eventClassId=13272', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=7648&eventClassId=13284', // Women 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7648&eventClassId=13283', // Men 17
            'https://eventor.orienteering.org/Events/ResultList?eventId=7638&groupBy=EventClass' // Mixed
        ],
        gps: {
            'Cource-information-Women-21': 'https://sportrec.eu/gps/esoc-sprint-w',
            'Cource-information-Men-21': 'https://sportrec.eu/gps/esoc-sprint-m',
            'Course-information-Women-21': 'https://sportrec.eu/gps/esoc-middle-w',
            'Course-information-Men-21': 'https://sportrec.eu/gps/esoc-middle-m',
            'Cource-information-Women-21-2': 'https://sportrec.eu/gps/esoc-long-w',
            'Cource-information-Men-21-2': 'https://sportrec.eu/gps/esoc-long-m',
            'Cource-information-Women-21-3': 'https://sportrec.eu/gps/esoc-relay-w',
            'Cource-information-Men-21-3': 'https://sportrec.eu/gps/esoc-relay-m',
            'Cource-information-All-legs': 'https://sportrec.eu/gps/esoc-sprint-relay'
        },
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1htce4v/4624_dK0130221921zFEPHd.png',
            'https://sportrec.eu/gps/map/1htcbrn/4623_k70130220807Bos17N.png',
            'https://sportrec.eu/gps/map/1htcf6p/4634_750131202433bKTY8c.png',
            'https://sportrec.eu/gps/map/1htcf1d/4633_Jf0131202044fVqnkU.png',
            'https://sportrec.eu/gps/map/1htcfv8/4636_JY02022248066vHCy1.png',
            'https://sportrec.eu/gps/map/1htcf96/4635_pF0202223557yHfdMc.png',
            'https://sportrec.eu/gps/map/1htcge6/4645_4e0203204748MD1WP7.png',
            'https://sportrec.eu/gps/map/1htcgg2/4646_wY02032042343IUXlB.png',
            'https://sportrec.eu/gps/map/1htknah/4652_CW0204231814rT0OoR.png'
        ],
        photo: [
            'https://failiem.lv/u/sctsz69u5', // Album 1
            'https://flickr.com/photos/140305775@N02/sets/72177720305674189', // Album 2
            'https://www.facebook.com/smeceressils/posts/pfbid0379LNjsy6fza6dN2TygwzhL2MuKnCdeUcKFUdrYup9vrdd6YTricABEtBTf5KYm5Ql', // Album 3
            'https://www.flickr.com/photos/140305775@N02/albums/72177720305707507', // Gallery 1
            'https://www.flickr.com/photos/140305775@N02/albums/72177720305701445', // Gallery 2
            'https://www.flickr.com/photos/140305775@N02/albums/72177720305703999' // Gallery 3
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJfk3KZQHunKT70maz3bEAKO',
        coord: [56.8542, 26.2206],
        type: 'SKI',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20230425_1',
        date: '2023-04-25',
        endDate: '2023-04-29', // гонки по IOF: 26–29 апреля
        place: 'Loulé, Portugal (Лоле, Португалия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6980/a4a52168-1888-42a1-9aa2-c8a74b5a7071/Bulletin-1---2_-Update-22-12-2022.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6980/000dcdc8-ae12-4849-b269-a7671bf8d8e2/Bulletin-3.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6980/b0e4a44c-34ff-41c7-ab24-994dcaedb3f3/Bulletin-3-_-Updated-28-03-2023.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6980/010233f1-a93e-401d-b124-c57aa42d9684/Bulletin-4.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6980/b6810a84-fbd7-47c8-ae04-c8e05fb4540c/Bulletin-4----Updated-25.04.2023.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/6980' // IOF Eventor
        ],
        coord: [37.15, -8.0],
        type: 'VELO',
        fmt: 'middle, mass start, mixed relay, sprint',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20230426_1',
        parent: 'IOF_20230425_1',
        date: '2023-04-26',
        name: 'EMTBOC #1, миддл',
        place: 'Loulé, Portugal (Лоле, Португалия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7799&eventClassId=13622&eventRaceId=7913&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7799&eventClassId=13623&eventRaceId=7913&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://events.loggator.com/xTGWWg',
            'W': 'https://events.loggator.com/WH5xug',
            'Livelox': 'https://www.livelox.com/Events/Show/94616/European-MTBO-Championship-Middle-Distance'
        },
        maps: [
            // 'https://photos.app.goo.gl/3DnDQefHss4Taf7J6', // карты организаторов (альбом Google Photos)
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/16e9b54c6b99c3214b8ebac2/optimized_M21.png',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/69a27548ca1cd5c53292dcfb/optimized_W21.png',
            // карты (IOF LIVE)
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/16e9b54c6b99c3214b8ebac2/M21.png', // Men
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/69a27548ca1cd5c53292dcfb/W21.png' // Women
        ],
        photo: [
            'https://photos.google.com/share/AF1QipMcAZHX8N6iitfoPFY5JA5v9q9fH71pPykc_eV14uWm5OqzLkxh_HaAP39LlSY-cg?key=ZGNZdFZXNXN6NFNjQWZxZ0dxdHZEZHUzUE8zZ0V3' // Official
        ],
        coord: [37.15, -8.0],
        type: 'VELO',
        fmt: 'middle',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20230427_1',
        parent: 'IOF_20230425_1',
        date: '2023-04-27',
        name: 'EMTBOC #2, масс-старт',
        place: 'Loulé, Portugal (Лоле, Португалия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7800&eventClassId=13624', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7800&eventClassId=13625' // Women
        ],
        gps: {
            'M': 'https://events.loggator.com/DqHp8Q',
            'W': 'https://events.loggator.com/h9Pp5g',
            'Livelox': 'https://www.livelox.com/Events/Show/94618/European-MTBO-Championship-Mass-Start-and-Long-Distance'
        },
        maps: [
            // 'https://photos.app.goo.gl/rExy7oinhZMzWrUS9', // карты организаторов (альбом Google Photos)
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/cdb9c92682a7d56241a6dfe4/optimized_M21.JPG',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/735d11c58e7e7e2af306638f/optimized_W21.JPG',
            // карты (IOF LIVE)
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/cdb9c92682a7d56241a6dfe4/M21.JPG', // Men
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/735d11c58e7e7e2af306638f/W21.JPG' // Women
        ],
        photo: [
            'https://photos.google.com/share/AF1QipP6ulIpJfQJDlTxOcX_ITtA8XAVR1LdynGxIy4sVjQXWvrljJsxkNqrPCmzGcDnAA?key=ZWlGSENCUXlUaWVMUzE2dVc5NTBYa2psNkFPVVRn' // Official
        ],
        coord: [37.15, -8.0],
        type: 'VELO',
        fmt: 'mass start',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20230428_1',
        parent: 'IOF_20230425_1',
        date: '2023-04-28',
        name: 'EMTBOC #3, спринт',
        place: 'Loulé, Portugal (Лоле, Португалия)',
        res: [
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=7802&championshipId=12&eventClassId=13627', // Men
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=7802&championshipId=12&eventClassId=13628' // Women
        ],
        gps: {
            'M': 'https://events.loggator.com/1YhOAA',
            'W': 'https://events.loggator.com/VRtOfg',
            'Livelox': 'https://www.livelox.com/Events/Show/94694/European-MTBO-Championship-Sprint'
        },
        maps: [
            // 'https://photos.app.goo.gl/MmuZzzANEtdrM5Pe9', // карты организаторов (альбом Google Photos)
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/dc83c147602cdc33e46003b5/optimized_Mtbo_sprint_23_Canvas_1_M21.JPG',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/af829d455a26aa72cdd4626d/optimized_Mtbo_sprint_23_Canvas_1_W21.JPG',
            // карты (IOF LIVE)
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/dc83c147602cdc33e46003b5/Mtbo_sprint_23_Canvas_1_M21.JPG', // Men
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/af829d455a26aa72cdd4626d/Mtbo_sprint_23_Canvas_1_W21.JPG' // Women
        ],
        photo: [
            'https://photos.google.com/share/AF1QipOs78o9Pc-1s3U1ArD0utIRp9der8Me72JE2zsWACbC8-VvG-ShUCzP_BVEz9KurQ?key=ci1NSjVtcHl3LXdTakhnckJxcEVXd3hENFFuV2ZB' // Official
        ],
        coord: [37.15, -8.0],
        type: 'VELO',
        fmt: 'sprint',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20230429_1',
        parent: 'IOF_20230425_1',
        date: '2023-04-29',
        name: 'EMTBOC #4, смешанная эстафета',
        place: 'Loulé, Portugal (Лоле, Португалия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7801&groupBy=EventClass' // Mixed
        ],
        gps: {
            '1': 'https://events.loggator.com/EhP4GQ',
            '2': 'https://events.loggator.com/jwBo2Q',
            '3': 'https://events.loggator.com/4VSZag'
        },
        maps: [
            // 'https://photos.app.goo.gl/bCqM3ruHpnruMFbA7', // карты организаторов (альбом Google Photos)
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/003eee6560e3002a3e8b08bb/optimized_Mixed_and_relay_2023_Canvas_1_Mixed_relay_All_variations.JPG',
            // карты (IOF LIVE)
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/003eee6560e3002a3e8b08bb/Mixed_and_relay_2023_Canvas_1_Mixed_relay_All_variations.JPG' // All legs
        ],
        coord: [37.15, -8.0],
        type: 'VELO',
        fmt: 'mixed relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6496/551e1797-8cbf-4ac1-ac2f-9bb14b5e8329/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6496/54f053e4-09d8-439e-884d-37a072776428/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6496/0740a0f2-8227-4936-9364-f529d565cf15/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/32a46270-ac67-4bac-b17a-50712ea83b99/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/6496',
            'https://woc2023.app/live',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579'
        ],
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/64562385-8d0a-48ce-ae27-d99536fcf93c/Previous-Map-1-CrapSognGion-Curnius-Plaun.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/3d8633e7-9f84-41f4-b265-1ef1112eefee/Previous-Map-2-Foppa-Runca-PrauPulte.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/3c319332-577d-40db-9ed7-cb2bba15720a/Previous-Map-3-LaaxMurschetg.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/585f0664-30e8-45d2-844a-8aefd5884358/Previous-Map-4-FlimsWaldhaus.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/62f07996-82c7-49ea-9ef3-6a810dc04680/Previous-Map-5-LaMutta-UaulGrond.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/68cdd4e2-8715-451d-a086-65b9679d7407/Previous-Map-6-GotGrond-Parsonz.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/7f00b0b7-972c-46c7-8254-da8fee7c61cc/Previous-Map-7-Nagens-Vorab.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/7825c927-1040-41fd-a318-17c57ec27ab4/OCAD-file-of-old-maps-west-part-of-the-embargoed-area-around-Flims.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/c8ad37be-4022-4c26-8dc7-5f967dbd19ec/OCAD-file-of-old-maps-east-part-of-the-embargoed-area-around-Flims.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/fdbf40ea-fe07-45bd-b6db-bddf814b3fdf/OCAD-Fille-La-Mutta-Uaul-Grond-2018.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/ffddff51-8254-42f1-ab3e-12859cc15d04/OCAD-File-Crap-Sogn-Gion-Curnius-2017.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/584db770-0f93-48b0-a539-8fd13f478379/OCAD-File-Foppa-Uaul-Runcs-2017.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6496/cdc255dc-4068-4746-b73e-5c12ebfed95b/OCAD-File-Laax-Murschetg-2018.ocd'
        ],
        photo: [
            'https://woc2023.app/images' // WOC 2023 photos
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJdc3IKYS-1sbl81u19zyfgF',
            'https://tv.orienteering.sport/world-orienteering-championships', // 12:00-16:30
            'https://tv.nrk.no/serie/orientering/2023/MSPO31250423/avspiller', // 12:00-16:30
            'https://tv.nrk.no/serie/orientering/2023/MSPO31250523/avspiller', // 11:35-15:00
            'https://tv.nrk.no/serie/orientering/2023/MSPO31250623/avspiller', // 12:10-16:30
            'https://arenan.yle.fi/1-65988948', // 13:00-17:35
            'https://arenan.yle.fi/1-66253761', // 13:00-17:35
            'https://arenan.yle.fi/1-65988945', // 13:55-16:00
            'https://arenan.yle.fi/1-66253769', // 13:55-16:00
            'https://arenan.yle.fi/1-65988947', // 13:55-17:30
            'https://arenan.yle.fi/1-66253785', // 13:55-17:30
            'https://www.srf.ch/play/tv/-/video/orientierungslauf-wm-in-flims-laax-langdistanz-frauen--maenner?urn=urn:swisstxt:video:srf:1774527', // 12:00-16:30
            'https://www.srf.ch/play/tv/-/video/orientierungslauf-wm-in-flims-laax-mitteldistanz-frauen--maenner?urn=urn:swisstxt:video:srf:1774528', // 11:35-15:00
            'https://www.srf.ch/play/tv/-/video/orientierungslauf-wm-in-flims-laax-staffel-frauen--maenner?urn=urn:swisstxt:video:srf:1774530', // 12:10-16:30
            'https://tv.orf.at/program/orfs/liveorient114.html', // 12:00-14:00
            'https://tv.orf.at/program/orfs/liveorient112.html', // 14:00-16:30
            'https://tv.orf.at/program/orfs/orientieru670.html', // 20:15-21:30
            'https://tv.orf.at/program/orfs/orientieru672.html', // 21:30-23:00
            'https://tv.orf.at/program/orfs/orientieru674.html', // 20:15-21:45
            'https://tv.orf.at/program/orfs/orientieru676.html' // 21:45-23:00
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579&eventClassId=14148&eventRaceId=7688&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579&eventClassId=14149&eventRaceId=7688&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579&eventClassId=14150&eventRaceId=7688&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579&eventClassId=13106&eventRaceId=7688&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579&eventClassId=13107&eventRaceId=7688&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7579&eventClassId=14147&eventRaceId=7688&overallResults=False' // Heat 3
        ],
        gps: {
            'M-QA': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_A/',
            'M-QB': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_B/',
            'M-QC': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_C/',
            'W-QA': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_A/',
            'W-QB': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_B/',
            'W-QC': 'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_C/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_A/map',
            'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_B/map',
            'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQM_C/map',
            'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_A/map',
            'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_B/map',
            'https://www.tulospalvelu.fi/gps/20230712_WOC23_MQW_C/map',
            // карты (IOF LIVE)
            'https://archive.o-worldcup.ch/wp-content/uploads/2023/woc2023/map_woc2023_middle_qual_women.pdf', // Women
            'https://archive.o-worldcup.ch/wp-content/uploads/2023/woc2023/map_woc2023_middle_qual_men.pdf' // Men
        ],
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
            'https://eventor.orienteering.org/Events/ResultList?eventId=7580',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7580&eventClassId=13109&eventRaceId=7689&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=7580&championshipId=20&eventClassId=13108' // Men
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230713_WOC23_LM/',
            'W': 'https://www.tulospalvelu.fi/gps/20230713_WOC23_LW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/07/13/woc-2023-long-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=340747',
            'https://www.tulospalvelu.fi/gps/20230713_WOC23_LW/map',
            // 'https://omaps.worldofo.com/?id=340748',
            'https://www.tulospalvelu.fi/gps/20230713_WOC23_LM/map',
            // карты (IOF LIVE)
            'https://archive.o-worldcup.ch/wp-content/uploads/2023/woc2023/map_woc2023_long_women.pdf', // Women
            'https://archive.o-worldcup.ch/wp-content/uploads/2023/woc2023/map_woc2023_long_men.pdf' // Men
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7581',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7581&eventClassId=13111&eventRaceId=7690&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=7581&eventClassId=13110&eventRaceId=7690&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230715_WOC23_MM/',
            'W': 'https://www.tulospalvelu.fi/gps/20230715_WOC23_MW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/07/15/woc-middle-2023-maps-and-results/',
            'https://news.worldofo.com/wp-content/uploads/2023/07/map-71.png',
            'https://news.worldofo.com/wp-content/uploads/2023/07/map-61.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230715_WOC23_MM/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2023/07/map-71.png
            'https://www.tulospalvelu.fi/gps/20230715_WOC23_MW/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2023/07/map-61.png
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7582',
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=7582&championshipId=20&eventClassId=13113', // Women
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=7582&championshipId=20&eventClassId=13112' // Men
        ],
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
            'https://news.worldofo.com/wp-content/uploads/2023/07/map-9.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230716_WOC23_RM1/map',
            // 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RM2/map', // duplicate of https://www.tulospalvelu.fi/gps/20230716_WOC23_RM1/map
            'https://www.tulospalvelu.fi/gps/20230716_WOC23_RM3/map',
            'https://www.tulospalvelu.fi/gps/20230716_WOC23_RW1/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2023/07/map-9.png
            // 'https://www.tulospalvelu.fi/gps/20230716_WOC23_RW2/map', // duplicate of https://www.tulospalvelu.fi/gps/20230716_WOC23_RW1/map
            'https://www.tulospalvelu.fi/gps/20230716_WOC23_RW3/map',
        ],
        video: 'https://www.youtube.com/watch?v=OxABg9sC58I',
        coord: [46.833333, 9.283333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20230820_1',
        date: '2023-08-20',
        endDate: '2023-08-26', // по программе Кубка мира IOF и GPS
        place: 'Jičín, Czech Republic (Йичин, Чехия)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6872/e286ec7f-fcff-49c8-9e53-491f1b9a2f8a/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6872/e122ae1c-deec-441f-ad7d-5332aaf93e6c/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6872/746e38ed-8034-40da-a7ac-a409135c90eb/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6872/1fb301d0-22fb-4588-bd35-f9688badba7c/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/6872' // IOF Eventor
        ],
        photo: [
            'https://wmtboc2023.piwigo.com/index?/category/4-22_08_2023_long', // WMTBOC Albums
            'https://wmtboc2023.piwigo.com/' // WMTBOC Album
        ],
        coord: [50.436667, 15.351667],
        type: 'VELO',
        fmt: 'sprint, long, middle, mass start, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20230820_2',
        parent: 'IOF_20230820_1',
        date: '2023-08-20',
        name: 'WMTBOC #1, спринт',
        place: 'Jičín, Czech Republic (Йичин, Чехия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7855&eventClassId=13943&eventRaceId=7969&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7855&eventClassId=13944&eventRaceId=7969&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230820M/',
            'W': 'https://www.tulospalvelu.fi/gps/20230820W/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230820M/map',
            'https://www.tulospalvelu.fi/gps/20230820W/map'
        ],
        photo: [
            'https://wmtboc2023.piwigo.com/index?/category/3-20_08_2023_sprint' // WMTBOC Albums
        ],
        coord: [50.436667, 15.351667],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20230822_1',
        parent: 'IOF_20230820_1',
        date: '2023-08-22',
        name: 'WMTBOC #2, лонг',
        place: 'Jičín, Czech Republic (Йичин, Чехия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7856&eventClassId=13937&eventRaceId=7970&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7856&eventClassId=13938&eventRaceId=7970&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230822M/',
            'W': 'https://www.tulospalvelu.fi/gps/20230822W/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230822M/map',
            'https://www.tulospalvelu.fi/gps/20230822W/map'
        ],
        coord: [50.436667, 15.351667],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20230823_1',
        parent: 'IOF_20230820_1',
        date: '2023-08-23',
        name: 'WMTBOC #3, миддл',
        place: 'Jičín, Czech Republic (Йичин, Чехия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7857&eventClassId=13939&eventRaceId=7971&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7857&eventClassId=13940&eventRaceId=7971&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230823M/',
            'W': 'https://www.tulospalvelu.fi/gps/20230823W/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230823M/map',
            'https://www.tulospalvelu.fi/gps/20230823W/map'
        ],
        coord: [50.436667, 15.351667],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20230825_1',
        parent: 'IOF_20230820_1',
        date: '2023-08-25',
        name: 'WMTBOC #4, масс-старт',
        place: 'Jičín, Czech Republic (Йичин, Чехия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7858&eventClassId=13941', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7858&eventClassId=13942&eventRaceId=7972&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/20230825M/',
            'W': 'https://www.tulospalvelu.fi/gps/20230825W/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230825M/map',
            'https://www.tulospalvelu.fi/gps/20230825W/map'
        ],
        coord: [50.436667, 15.351667],
        type: 'VELO',
        fmt: 'mass start',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20230826_1',
        parent: 'IOF_20230820_1',
        date: '2023-08-26',
        name: 'WMTBOC #5, эстафета',
        place: 'Jičín, Czech Republic (Йичин, Чехия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7859&eventClassId=13945', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7859&eventClassId=13946' // Women
        ],
        gps: {
            'M-2': 'https://www.tulospalvelu.fi/gps/20230826M2/',
            'M-3': 'https://www.tulospalvelu.fi/gps/20230826M3/',
            'W-2': 'https://www.tulospalvelu.fi/gps/20230826W2/',
            'W-3': 'https://www.tulospalvelu.fi/gps/20230826W3/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/20230826M2/map',
            'https://www.tulospalvelu.fi/gps/20230826M3/map',
            'https://www.tulospalvelu.fi/gps/20230826W2/map',
            'https://www.tulospalvelu.fi/gps/20230826W3/map'
        ],
        coord: [50.436667, 15.351667],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7246/6638a14b-6ba8-469f-a162-9306fe74b9dd/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7246/6f21ea0d-8576-4acf-aa00-431ed7262567/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7246/b342b745-251b-4eb4-91dc-4c546523b4fa/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7246/639d4ba2-8f67-445b-9d7f-f0351f2aea0a/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/Show/7246',
        maps: [
            // старые карты района (IOF Eventor)
            'https://www.eoc2023.it/wp-content/uploads/2023/08/Existing-maps.pdf'
        ],
        photo: 'https://photos.app.goo.gl/uY9zpqSsWkYNQkT5A',
        video: [
            'https://tv.orienteering.sport/eoc-2023'
        ],
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
        res: [
            'https://app.liveresults.it/event/eoc2023/sf/M/start-list',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7836&eventClassId=14598&eventRaceId=7950&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7836&eventClassId=14599&eventRaceId=7950&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7836&eventClassId=14600&eventRaceId=7950&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7836&eventClassId=14601&eventRaceId=7950&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7836&eventClassId=14602&eventRaceId=7950&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7836&eventClassId=14603&eventRaceId=7950&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7837&eventClassId=13849&eventRaceId=7951&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7837&eventClassId=13850&eventRaceId=7951&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2023eocSprintMtv/',
            'W': 'https://www.tulospalvelu.fi/gps/2023eocSprintW/'
        },
        maps: [
            // 'https://news.worldofo.com/2023/10/05/eoc-sprint-2023-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=345355',
            'https://omaps.worldofo.com/images/047cb10dfe2f1e0a73c860ad4cc8464f_l.jpg',
            // 'https://omaps.worldofo.com/?id=345376',
            'https://www.tulospalvelu.fi/gps/2023eocSprintW/map',
            'https://news.worldofo.com/wp-content/uploads/2023/10/map_sprint_eoc_verona_men.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2023eocSprintMtv/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2023/10/map_sprint_eoc_verona_men.png
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2023/10/esoc_2023_sprint_quali_w1.pdf', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2023/10/esoc_2023_sprint_quali_w2.pdf', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2023/10/esoc_2023_sprint_quali_w3.pdf', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2023/10/esoc_2023_sprint_quali_m1.pdf', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2023/10/esoc_2023_sprint_quali_m2.pdf', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2023/10/esoc_2023_sprint_quali_m3.pdf', // Heat 3
            'https://gps.tulospalvelu.fi/gps/2023eocSprintM/map', // Men
        ],
        photo: [
            'https://photos.app.goo.gl/kfJSbB3tQyGXFBjLA',
            'https://photos.app.goo.gl/28ZR1CU2vdveZBgZ8'
        ],
        video: [
            'https://www.youtube.com/watch?v=yYj4H_OswVg' // Sprint, Verona
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
            'https://www.tulospalvelu.fi/gps/2023eocSR4/map',
            // 'https://omaps.worldofo.com/?id=345458',
            'https://www.tulospalvelu.fi/gps/2023eocSR3/map',
            // 'https://omaps.worldofo.com/?id=345459',
            // 'https://omaps.worldofo.com/?id=345460',
            'https://news.worldofo.com/wp-content/uploads/2023/10/map_sprintrelayeoc2023.png', // duplicate of https://www.tulospalvelu.fi/gps/2023eocSR3/map
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2023eocSR1/map', // duplicate of https://www.tulospalvelu.fi/gps/2023eocSR4/map
            // 'https://www.tulospalvelu.fi/gps/2023eocSR2/map', // duplicate of https://www.tulospalvelu.fi/gps/2023eocSR3/map
            // карты (IOF LIVE)
            'https://gps.tulospalvelu.fi/gps/2023eocSR1/map', // Leg 1 & 4
            'https://gps.tulospalvelu.fi/gps/2023eocSR2/map' // Leg 2 & 3
        ],
        photo: 'https://photos.app.goo.gl/wvGd6c8oz1nH9iK96',
        video: [
            'https://www.youtube.com/watch?v=8Af_tBQAyeI' // Sprint Relay, Soave
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14604&eventRaceId=7953&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14605&eventRaceId=7953&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14606&eventRaceId=7953&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14607&eventRaceId=7953&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14608&eventRaceId=7953&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14609&eventRaceId=7953&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14610&eventRaceId=7953', // QF-1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14611&eventRaceId=7953', // QF-2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14612&eventRaceId=7953', // QF-3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14613&eventRaceId=7953', // QF-4
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14614&eventRaceId=7953', // QF-5
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14615&eventRaceId=7953', // QF-6
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14616&eventRaceId=7953', // QF-1 |
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14617&eventRaceId=7953', // QF-2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14618&eventRaceId=7953', // QF-3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14619&eventRaceId=7953', // QF-4
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14620&eventRaceId=7953', // QF-5
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14621&eventRaceId=7953', // QF-6
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14622&eventRaceId=7953', // SF-1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14623&eventRaceId=7953', // SF-2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14624&eventRaceId=7953', // SF-3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14625&eventRaceId=7953', // SF-1
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14626&eventRaceId=7953', // SF-2
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14627&eventRaceId=7953', // SF-3
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14628&eventRaceId=7953', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7839&eventClassId=14629&eventRaceId=7953' // Women
        ],
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
            'https://www.tulospalvelu.fi/gps/2023eocKOsfM/map',
            // 'https://omaps.worldofo.com/?id=345513',
            // 'https://omaps.worldofo.com/?id=345514',
            'https://www.tulospalvelu.fi/gps/2023eocKOqfW/map',
            // 'https://omaps.worldofo.com/?id=345515',
            // 'https://omaps.worldofo.com/?id=345529',
            'https://www.tulospalvelu.fi/gps/2023eocKOfW/map',
            // 'https://omaps.worldofo.com/?id=345530',
            'https://news.worldofo.com/wp-content/uploads/2023/10/map_eoc_2023_KO-sprint-final-men1.png' // duplicate of https://www.tulospalvelu.fi/gps/2023eocKOfW/map
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2023eocKOqfM/map', // duplicate of https://www.tulospalvelu.fi/gps/2023eocKOqfW/map
            // 'https://www.tulospalvelu.fi/gps/2023eocKOsfW/map', // duplicate of https://www.tulospalvelu.fi/gps/2023eocKOsfM/map
            // 'https://www.tulospalvelu.fi/gps/2023eocKOfM/map', // duplicate of https://www.tulospalvelu.fi/gps/2023eocKOfW/map
        ],
        photo: [
            'https://photos.app.goo.gl/Fktxg1X7UN3G516k9',
            'https://photos.app.goo.gl/uY9zpqSsWkYNQkT5A' // Qualification IOF Album
        ],
        video: [
            'https://www.youtube.com/watch?v=D2dUvvKTVk4' // Knock Out Sprint, Vicenza
        ],
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7218/c6925d8c-b276-431f-bd1e-2df07741ed4f/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7218/d957c405-9a74-48fc-86a3-69cb6b3c8d72/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7218/6723f3f7-c4ee-49d0-8b09-86bbe7f008b6/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7218/ffb9cd69-4b6e-4095-8006-24124c1563d4/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/7218' // IOF Eventor
        ],
        maps: [
            // старые карты районов (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/7218/b5df2944-abc3-4290-84cf-b8170546931e/Ski-O-Map-Ramsau-2020.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7218/dd4aa4d2-261a-41f3-857a-eef458cab6b8/Ski-O-Map-Tauplitzalm-2023-%28Reserve-Area%29.jpg' // резервный район
        ],
        photo: [
            'https://photos.app.goo.gl/z4ox2AEuHyGbLaEs6',
            'https://photos.app.goo.gl/hgAngPJnAJ8aCyqu5',
            'https://photos.app.goo.gl/scDujgFSuqEkVmgaA',
            'https://photos.app.goo.gl/8N6t2E2txtXreVnx9',
            'https://photos.google.com/share/AF1QipMnCOT_ai2S7UmYZuWekLbePiMZQrSLGqKEVGPSzRoNmU7GaLkeg4CXlYQbvYwpcw?key=WmxBa3RDQnI2VXRBNlVtNEs5R3gwMl9NSUk1bF9n'
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJf6q-yNSAoQHyAF7P7xh8nd',
            'https://tv.orienteering.sport/world-ski-o-championships-all-races', // Scoring 11:30-14:10
            'https://www.svtplay.se/video/jmLgkA6/skidorientering-vm/sprint', // Scoring 11:30-14:10
            'https://tv.orf.at/program/orfs/liveski-or100.html', // Scoring 11:35-14:10
            'https://tv.orf.at/program/orfs/liveski-or102.html', // Scoring 11:50-14:20
            'https://scplay.skiclassics.com/videos/world-ski-orienteering-championships-2024-sprint', // Scoring 11:30-14:10
            'https://scplay.skiclassics.com/world-ski-orienteering-championships-2024/videos/world-ski-orienteering-championships-2024-pursuit', // Scoring 11:50-14:20
            'https://scplay.skiclassics.com/world-ski-orienteering-championships-2024/videos/world-ski-orienteering-championships-2024-middle', // Scoring 11:35-14:45
            'https://scplay.skiclassics.com/world-ski-orienteering-championships-2024/videos/world-ski-orienteering-championships-2024-sprint-relay' // Scoring 12:50-14:10
        ],
        coord: [47.416667, 13.65],
        type: 'SKI',
        fmt: 'sprint, pursuit, middle, sprint relay', // по трансляциям GPSSeuranta
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20240123_2',
        parent: 'IOF_20240123_1',
        date: '2024-01-23',
        name: 'SKI-WOC #1, спринт',
        place: 'Ramsau am Dachstein, Austria (Рамзау-ам-Дахштайн, Австрия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8098&eventClassId=14782', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8098&eventClassId=14783&eventRaceId=8217&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2023wsocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2023wsocSprintW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2023wsocSprintM/map',
            'https://www.tulospalvelu.fi/gps/2023wsocSprintW/map'
        ],
        photo: [
            'https://photos.google.com/share/AF1QipMJbHbjCaGY2gu1jk6Lp6l3alBIEp1dnBgVqWHx6WsiANM2bPrQjRsDIL7eWCdKvw?key=Y3JEb1ZKeWtrLUZQQjd0d1ZyUk11ajlJWV9mWTR3' // Official album
        ],
        coord: [47.416667, 13.65],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20240124_1',
        parent: 'IOF_20240123_1',
        date: '2024-01-24',
        name: 'SKI-WOC #2, гонка преследования',
        place: 'Ramsau am Dachstein, Austria (Рамзау-ам-Дахштайн, Австрия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8099&eventClassId=14784&eventRaceId=8218&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8099&eventClassId=14785&eventRaceId=8218&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2024wsocPursuitM/',
            'W': 'https://www.tulospalvelu.fi/gps/2024wsocPursuitW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2024wsocPursuitM/map',
            'https://www.tulospalvelu.fi/gps/2024wsocPursuitW/map'
        ],
        photo: [
            'https://photos.google.com/share/AF1QipPTF3GRFTf3LEDrpEPFQkelxodxxBG6qsd-i8QSgRUtxWx7D3z_3zKHbbZ_TLa9Fg?key=UHhIVjRNY0FfYjEzRl81Y2RQa1c5NGRndXFUN0N3' // Official album
        ],
        coord: [47.416667, 13.65],
        type: 'SKI',
        fmt: 'pursuit',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20240126_1',
        parent: 'IOF_20240123_1',
        date: '2024-01-26',
        name: 'SKI-WOC #3, миддл',
        place: 'Ramsau am Dachstein, Austria (Рамзау-ам-Дахштайн, Австрия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8100&eventClassId=14786&eventRaceId=8219&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8100&eventClassId=14787&eventRaceId=8219&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2024wsocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2024wsocMiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2024wsocMiddleM/map',
            'https://www.tulospalvelu.fi/gps/2024wsocMiddleW/map'
        ],
        photo: [
            'https://photos.app.goo.gl/scDujgFSuqEkVmgaA' // Albums
        ],
        coord: [47.416667, 13.65],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20240127_1',
        parent: 'IOF_20240123_1',
        date: '2024-01-27',
        name: 'SKI-WOC #4, спринт-эстафета',
        place: 'Ramsau am Dachstein, Austria (Рамзау-ам-Дахштайн, Австрия)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8101&groupBy=EventClass' // Mixed
        ],
        gps: {
            '135': 'https://www.tulospalvelu.fi/gps/2024wsocSR135/',
            '246': 'https://www.tulospalvelu.fi/gps/2024wsocSR246/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2024wsocSR135/map',
            'https://www.tulospalvelu.fi/gps/2024wsocSR246/map'
        ],
        photo: [
            'https://photos.google.com/share/AF1QipPtOpBl_9Kpdk7AK4ioAyNr5o2ynWmZIz6-PirUWGYko5gOqNpDbrIK5FwtaPSlqw?key=Z29VT3FxNHJWT3RSRHk0dUJ3WVJqUG5qX3BiT1B3' // Albums
        ],
        coord: [47.416667, 13.65],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20240529_1',
        date: '2024-05-29',
        endDate: '2024-06-02', // место по IOF; sv.wikipedia: Варшава
        place: 'Ostróda, Poland (Оструда, Польша)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7489/c290ba58-b35a-42df-b4d4-a6e4e2a5203a/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7489/fb4df051-4d84-4378-9962-c6128ad29674/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7489/fafe3d2a-8728-48f8-bfa1-f82fc21ae44a/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/7489' // IOF Eventor
        ],
        video: 'https://www.youtube.com/playlist?list=PLJxCa_0RthJeZR9PkVJmUPtls3_MZkkRW',
        coord: [53.7, 19.966667],
        type: 'VELO',
        fmt: 'sprint, long, middle, mixed relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6106/50aace4b-09ba-4393-93c3-ca100d156705/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6106/e52a8279-15d3-426a-a2d7-e2a8d48ccd06/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6106/289e4081-5efc-4612-883a-98737bdf5899/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6106/4a17c220-7814-4e68-bd4b-44641adeb324/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/6106',
            'https://results.woc2024.org/woc/#Day3'
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJdrdm281fBPCAK0O0EVO6wc',
            'https://tv.orienteering.sport/woc-2024-all-races', // 15:30-18:00
            'https://tv.nrk.no/serie/orientering/2023/MSPO31250423/avspiller', // 16:30-19:00
            'https://tv.nrk.no/serie/orientering/2023/MSPO31250523/avspiller', // 13:30-15:00
            'https://tv.nrk.no/serie/orientering/2023/MSPO31250623/avspiller', // 17:30-19:10
            'https://arenan.yle.fi/1-66253761', // 17:30-20:30
            'https://arenan.yle.fi/1-66253769', // 14:30-16:00
            'https://arenan.yle.fi/1-66253785', // 18:00-20:00
            'https://tv.orf.at/program/orfs/liveorient122.html', // 16:55-18:55
            'https://eurovisionsport.com/explore/competition?id=Generic-Schedule-Landing-Page&cId=20240712IOFEdinburgh' // 15:30-18:00
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=15712&eventRaceId=6779&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=15713&eventRaceId=6779&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=15714&eventRaceId=6779&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=15709&eventRaceId=6779&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=15710&eventRaceId=6779&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=15711&eventRaceId=6779&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=9892&eventRaceId=6779&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=6710&eventClassId=9891&eventRaceId=6779&overallResults=False' // Men
        ],
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
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/8a36dc99404bcbeb29d76846/optimized_Sprint_Qualification_Men-1.gif',
            // 'https://omaps.worldofo.com/?id=356937',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/9f0346fb3aec00fe737cfb88/optimized_Sprint_Qualification_Men-3Gif.gif',
            // 'https://omaps.worldofo.com/?id=356938',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/cfeda9f5478c7d2d18524803/optimized_Sprint_Qualification_Women-2.gif',
            // 'https://omaps.worldofo.com/?id=356939',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/c896169b26808e53c676c73c/optimized_Sprint_Qualification_Women-1.gif',
            // 'https://omaps.worldofo.com/?id=356940',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/776b3ff69e0567a091880d82/optimized_Sprint_Qualification_Men-2.gif',
            // 'https://omaps.worldofo.com/?id=356945',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/959f346c2f767cb615ab53db/optimized_tile_0_0.jpg',
            // 'https://omaps.worldofo.com/?id=356946',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/43173e41d2ba48f7f1044deb/optimized_tile_0_0.jpg',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/0bf45aab2ebae22e5e0a2d73/optimized_Sprint_Qualification_Women-3.gif',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_qualification_women-1.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_qualification_women-2.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_qualification_women-3.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_qualification_men-1.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_qualification_men-2.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_qualification_men-3.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_women.jpg', // Women
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_men.jpg' // Men
        ],
        photo: [
            'https://photos.app.goo.gl/5wBiQfGQCqRZ1AtM8',
            'https://photos.app.goo.gl/C22dYDSaGDbu6jQ77',
            'https://www.flickr.com/photos/148096286@N05/albums/72177720318651969/', // Robert Lines Sprint Q album
            'https://www.flickr.com/photos/148096286@N05/albums/72177720318735551/' // Robert Lines Sprint Final album
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=6711',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6711&groupBy=EventClass' // Mixed
        ],
        gps: {
            'W-1': 'https://events.loggator.com/WOC2024SR1',
            'M-2': 'https://events.loggator.com/WOC2024SR2',
            'M-3': 'https://events.loggator.com/WOC2024SR3',
            'W-4': 'https://events.loggator.com/WOC2024SR4'
        },
        maps: [
            // 'https://news.worldofo.com/2024/07/15/woc-2024-sprint-relay-maps-and-results/',
            'https://news.worldofo.com/wp-content/uploads/2024/07/map_sprintrelay_mens.jpg',
            'https://news.worldofo.com/wp-content/uploads/2024/07/map_sprintrelay_womens.jpg',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2180b67eb04807e58c84f275/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/3dd9f134e3d698a1fa42e3f3/optimized_tile_0_0.jpg',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_relay_1_4.jpg', // Leg 1 & 4
            'https://orienteering.sport/wp-content/uploads/2024/07/woc2024_sprint_relay_2_3.jpg' // Leg 2 & 3
        ],
        photo: [
            'https://photos.app.goo.gl/K7ToGU8ikxyc5E4h9',
            'https://www.flickr.com/photos/148096286@N05/albums/72177720318785334/' // Robert Lines Sprint Relay album
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=6712',
            'https://eventor.orienteering.org/Events/ResultList?eventId=6712&groupBy=EventClass' // All races
        ],
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
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/ca2d1429d730fa2d9d7b977c/optimized_Knock-out_Sprint_Qualification_Men-1.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/5723f765a72723af1ac91273/optimized_Knock-out_Sprint_Qualification_Men-2.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/1b4958ec1c5337dd86d74f90/optimized_Knock-out_Sprint_Qualification_Men-3.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/0128e6b2f63c4104fbf2313d/optimized_Knock-out_Sprint_Qualification_Women-1.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/47c29ef3a80a3c87c1383f5f/optimized_Knock-out_Sprint_Qualification_Women-2.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/067e3c4d764ae42f8def32dc/optimized_Knock-out_Sprint_Qualification_Women-3.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/d33b6ddaebee2bebb31bde4d/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/8dbd31995203673a963d9d16/optimized_Knock-out_Sprint_Semi-final-Gif.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/a5fc8546ea9f5c46204da65e/optimized_tile_0_0.jpg',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qualification_women-1.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qualification_women-2.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qualification_women-3.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qualification_men-1.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qualification_men-2.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qualification_men-3.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_qf.jpg', // Quarter finals
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_sf.gif', // Semi finals
            'https://orienteering.sport/wp-content/uploads/2024/07/woc_2024_ko_sprint_f.jpg' // Finals
        ],
        photo: [
            'https://photos.app.goo.gl/2R84FyeMGwzi6GTp8',
            'https://photos.app.goo.gl/PzMKqEyMn4BmtHZZ6',
            'https://www.flickr.com/photos/148096286@N05/albums/72177720318847194/', // Robert Lines Qualification Album
            'https://www.flickr.com/photos/148096286@N05/albums/72177720318839305/' // Robert Lines Finals Album
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6731/0ce0567d-bb36-4acb-8539-51595ba6ef85/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6731/9871fcc4-1f00-4b20-ba8d-5f30fb6badcb/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6731/037c6d66-7710-48e9-8510-6591b7514423/Bulletin-4.pdf'
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8136&eventClassId=16044&eventRaceId=8259&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8136&eventClassId=16045&eventRaceId=8259&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8136&eventClassId=16046&eventRaceId=8259&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=8136&eventClassId=16047&eventRaceId=8259&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8136&eventClassId=16048&eventRaceId=8259&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8136&eventClassId=16049&eventRaceId=8259&overallResults=False' // Heat 3
        ],
        gps: {
            'M-Q1': 'https://events.loggator.com/EOC2024MQM1',
            'M-Q2': 'https://events.loggator.com/EOC2024MQM2',
            'M-Q3': 'https://events.loggator.com/EOC2024MQM3',
            'W-Q1': 'https://events.loggator.com/EOC2024MQW1',
            'W-Q2': 'https://events.loggator.com/EOC2024MQW2',
            'W-Q3': 'https://events.loggator.com/EOC2024MQW3'
        },
        maps: [
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/6819b947a73d798c37152f4b/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2587f13fb80e6dda18818b62/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/013cce1e4643fafee6382e00/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/9a14209e5c1b7bce49018bb2/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/c3e7b79ea0a09986519ed531/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/b482b600cafc8a60103178ab/optimized_tile_0_0.jpg'
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7772',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7772&eventClassId=13475&eventRaceId=7886&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7772&eventClassId=13476&eventRaceId=7886&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://events.loggator.com/EOC2024MFM',
            'W': 'https://events.loggator.com/EOC2024MFW'
        },
        maps: [
            // 'https://news.worldofo.com/2024/08/18/eoc-2024-middle-analysis-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=358143',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/d4406d936d6916bf384a74d1/optimized_tile_0_0.jpg',
            // 'https://omaps.worldofo.com/?id=358145',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/12163a1d25c5d8fb14f3c591/optimized_tile_0_0.jpg',
            'https://news.worldofo.com/wp-content/uploads/2024/08/map_men_EOC_MiddleFinal_3000.jpg',
            'https://news.worldofo.com/wp-content/uploads/2024/08/map_women_EOCMiddleFinal_3000.jpg'
        ],
        photo: 'https://photos.app.goo.gl/C46RznaTCEgh55ibA',
        video: [
            'https://www.youtube.com/watch?v=PGfiYLWU0sQ', // ENG
            'https://www.youtube.com/watch?v=Xdt46tlM-PI' // GER
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7773',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7773&eventClassId=13477&eventRaceId=7887&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7773&eventClassId=13478&eventRaceId=7887&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://events.loggator.com/EOC2024LFM',
            'W': 'https://events.loggator.com/EOC2024LFW'
        },
        maps: [
            // 'https://news.worldofo.com/2024/08/19/eoc-2024-long-analysis-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=358196',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/0e4272f26ba3956f37e95560/optimized_Women300.gif',
            // 'https://omaps.worldofo.com/?id=358224',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/b970646113aa5ce92b8af4f0/optimized_EOC2024_LongF_Men_all_spectators.gif',
            'https://news.worldofo.com/wp-content/uploads/2024/08/map_men_long_EOC_4000.jpg'
        ],
        photo: 'https://photos.app.goo.gl/o8YoUix2o4c7Lmgs8',
        video: [
            'https://www.youtube.com/watch?v=ADEXxE7WLHI', // ENG
            'https://www.youtube.com/watch?v=VhxCTWsvxsg' // GER
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=7774',
            'https://eventor.orienteering.org/Events/ResultList?eventId=7774&eventClassId=13479', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=7774&eventClassId=13480' // Women
        ],
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
            'https://news.worldofo.com/wp-content/uploads/2024/08/map_eoc_relay2024.jpg',
            'https://news.worldofo.com/wp-content/uploads/2024/08/map_eoc_relay20242.jpg',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/7d4309b2c0160870da7f9587/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2c10373ab48636c7d266a894/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/89a0a82c489176645445717f/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/ac06e26d6302d1558b6c569a/optimized_tile_0_0.jpg',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2024/08/eoc_2024_relay_men_map.jpg', // Leg 1 & 2
            'https://orienteering.sport/wp-content/uploads/2024/08/eoc_2024_relay_men_map_3.jpg', // Leg 3
            'https://orienteering.sport/wp-content/uploads/2024/08/eoc_2024_relay_women_map.jpg', // Leg 1 & 2
            'https://orienteering.sport/wp-content/uploads/2024/08/eoc_2024_relay_women_map_3.jpg' // Leg 3
        ],
        photo: 'https://photos.google.com/share/AF1QipM22u80kGZBJ60OcQZYIcegO2rokJvl71hbIMFQRr_8OJgF9IQeoUZN7mXJo-CZIw?key=NC11SXh1X3FqMkZpNVFhcmQwTkg0RlRNS205cV9R',
        video: [
            'https://www.youtube.com/watch?v=84Q2n5Olqtg', // ENG
            'https://www.youtube.com/watch?v=sZv4i694XIE' // GER
        ],
        coord: [47.371667, 18.208611],
        fmt: 'relay',
        start: 'EOC'
    },
    {
        id: 'IOF_20240910_1',
        date: '2024-09-10',
        endDate: '2024-09-15', // по программе Кубка мира IOF; 9 сентября - тренировка
        place: 'Shumen, Bulgaria (Шумен, Болгария)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6983/e7326369-74f7-43e4-8959-f08de1b22461/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6983/0be36c89-7589-4fd1-9f19-7f5a4bb682d2/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6983/31750a53-d8d4-4c83-8e54-9607e2177a40/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6983/99bfa130-4369-4a3d-a2af-9d50052ac098/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/6983' // IOF Eventor
        ],
        coord: [43.283333, 26.933333],
        type: 'VELO',
        fmt: 'sprint, mass start, middle, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20240910_2',
        parent: 'IOF_20240910_1',
        date: '2024-09-10',
        name: 'WMTBOC #1, спринт',
        place: 'Shumen, Bulgaria (Шумен, Болгария)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8068&eventClassId=14681&eventRaceId=8187&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8068&eventClassId=14682&eventRaceId=8187&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-sprint-men',
            'W': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-sprint-women'
        },
        maps: [
            // TrackSport
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-sprint-men/layers/kmz/6349cdd53a0501184dcd74c41b3b3af8/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-sprint-women/layers/kmz/e0feaec79529b2b062df0e76d1f08ec6/files/tile_0_0.jpg'
        ],
        coord: [43.283333, 26.933333],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20240911_1',
        parent: 'IOF_20240910_1',
        date: '2024-09-11',
        name: 'WMTBOC #2, масс-старт',
        place: 'Shumen, Bulgaria (Шумен, Болгария)',
        res: [
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=8069&championshipId=72&eventClassId=14683', // Men
            'https://eventor.orienteering.org/Events/ChampionshipResultlist?eventId=8069&championshipId=72&eventClassId=14684' // Women
        ],
        gps: {
            'M': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-mass-start-men',
            'W': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-mass-start-women'
        },
        maps: [
            // TrackSport
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-mass-start-men/layers/kmz/763f00f14338a0f76148a998f1ebf388/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-mass-start-women/layers/kmz/8dfecefab2af89c89e12567b4f84c6a1/files/tile_0_0.jpg'
        ],
        coord: [43.283333, 26.933333],
        type: 'VELO',
        fmt: 'mass start',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20240912_1',
        parent: 'IOF_20240910_1',
        date: '2024-09-12',
        name: 'WMTBOC #3, миддл',
        place: 'Shumen, Bulgaria (Шумен, Болгария)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8070&eventClassId=14685&eventRaceId=8189&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8070&eventClassId=14686&eventRaceId=8189&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-middle-men',
            'W': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-middle-women'
        },
        maps: [
            // TrackSport
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-middle-men/layers/kmz/047357ef5afbaaadba9d45213b711dd8/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-middle-women/layers/kmz/30f87ab63a17c2ced87a5a1d84dae657/files/tile_0_0.jpg'
        ],
        coord: [43.283333, 26.933333],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20240914_1',
        parent: 'IOF_20240910_1',
        date: '2024-09-14',
        name: 'WMTBOC #4, лонг',
        place: 'Shumen, Bulgaria (Шумен, Болгария)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8071&eventClassId=14687&eventRaceId=8190&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8071&eventClassId=14688&eventRaceId=8190&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-long-men',
            'W': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-long-women'
        },
        maps: [
            // TrackSport
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-long-men/layers/kmz/0a4e27116f728dbceccf928aeb88b4a5/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-long-women/layers/kmz/d46ce2f95ad191884249fe85f3943f9e/files/tile_0_0.jpg'
        ],
        coord: [43.283333, 26.933333],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20240915_1',
        parent: 'IOF_20240910_1',
        date: '2024-09-15',
        name: 'WMTBOC #5, эстафета',
        place: 'Shumen, Bulgaria (Шумен, Болгария)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8072&eventClassId=14689', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8072&eventClassId=14690' // Women
        ],
        gps: {
            'M-3': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-relay-men-leg-3',
            'W-3': 'https://gps.tracksport.eu/map/world-mtb-orienteering-championships-relay-women-leg-3'
        },
        maps: [
            // TrackSport
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-relay-men-leg-3/layers/kmz/8822d8f68973838ee44e0c514bc05071/files/tile_0_0.jpg',
            'https://gps.tracksport.eu/storage/events/world-mtb-orienteering-championships-relay-women-leg-3/layers/kmz/3458349aef74462870e16c5ba42e9f0b/files/tile_0_0.jpg'
        ],
        coord: [43.283333, 26.933333],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8420/f5d9d2a5-7d13-4b62-9c55-eec0706eee20/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8420/f510b59b-9889-4dfc-8d78-f9b5433e6182/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8420/7d6b2b77-379a-447d-b701-e0b8a6490ff6/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.sport/Events/Show/8420',
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8420/d76a6532-5dcc-4922-aa9f-c8fa297c3a0c/Old-map_Kotivaara.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8420/92aebde9-4bdd-4a8a-a55a-f2cd6a34bad3/Old-map_Ahola-Kirint-vaara-Kuoppavaara.png'
        ],
        video: [
            'https://www.youtube.com/live/7D6HSsdlZ6o', // Live streaming
            'https://www.youtube.com/live/cG2SMT_B7I8', // Live streaming
            'https://www.youtube.com/live/luBeEu6MW34', // Live streaming
            'https://www.youtube.com/live/TZwgHmjRsFc' // Live streaming
        ],
        coord: [66.108333, 28.166667],
        type: 'SKI',
        fmt: 'sprint relay, sprint, middle, long', // по GPS-трансляциям
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20250320_1',
        parent: 'IOF_20250319_1',
        date: '2025-03-20',
        name: 'SKI-EOC #1, спринт-эстафета',
        place: 'Posio, Finland (Посио, Финляндия)',
        gps: {
            '135': 'https://www.tulospalvelu.fi/gps/2025esocS135/',
            '246': 'https://www.tulospalvelu.fi/gps/2025esocS246/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2025esocS135/map',
            'https://www.tulospalvelu.fi/gps/2025esocS246/map'
        ],
        coord: [66.108333, 28.166667],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20250321_1',
        parent: 'IOF_20250319_1',
        date: '2025-03-21',
        name: 'SKI-EOC #2, спринт',
        place: 'Posio, Finland (Посио, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025esocSprintM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025esocSprintW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2025esocSprintM/map',
            'https://www.tulospalvelu.fi/gps/2025esocSprintW/map'
        ],
        coord: [66.108333, 28.166667],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20250322_1',
        parent: 'IOF_20250319_1',
        date: '2025-03-22',
        name: 'SKI-EOC #3, миддл',
        place: 'Posio, Finland (Посио, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025esocMiddleM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025esocMiddleW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2025esocMiddleM/map',
            'https://www.tulospalvelu.fi/gps/2025esocMiddleW/map'
        ],
        coord: [66.108333, 28.166667],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20250323_1',
        parent: 'IOF_20250319_1',
        date: '2025-03-23',
        name: 'SKI-EOC #4, лонг',
        place: 'Posio, Finland (Посио, Финляндия)',
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025esocLongM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025esocLongW/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2025esocLongM/map',
            'https://www.tulospalvelu.fi/gps/2025esocLongW/map'
        ],
        coord: [66.108333, 28.166667],
        type: 'SKI',
        fmt: 'long',
        start: 'SKI_EOC'
    },
    {
        id: 'IOF_20250515_1',
        date: '2025-05-15',
        endDate: '2025-05-18', // по IOF и en.wikipedia; sv.wikipedia: 14–18 мая
        place: 'Vilnius, Lithuania (Вильнюс, Литва)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://2025.mtbo.lt/',
            'https://en.wikipedia.org/wiki/2025_European_MTB_Orienteering_Championships',
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7896/2c8e02e5-fdf5-4843-bdc8-999fe7eb1bd4/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7896/7c7ea421-004b-46a9-a47f-1c6910269217/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7896/a8450490-a2db-4dbf-b791-b6eb84513608/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.org/Events/Show/7896',
            'https://eventor.orienteering.org/Events/ResultList?eventId=8205',
            'https://eventor.orienteering.org/Events/ResultList?eventId=8207'
        ],
        coord: [54.687222, 25.28],
        type: 'VELO',
        fmt: 'mass start, middle, sprint, mixed relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20250515_2',
        parent: 'IOF_20250515_1',
        date: '2025-05-15',
        name: 'EMTBOC #1, масс-старт',
        place: 'Vilnius, Lithuania (Вильнюс, Литва)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8204&eventClassId=15294&eventRaceId=8333&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8204&eventClassId=15293&eventRaceId=8333&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://sportrec.eu/gps/emtboc-2025-mass-m',
            'W': 'https://sportrec.eu/gps/emtboc-2025-mass-w'
        },
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1k1mb6s/7450_Hu0515082545oiFULs.png',
            'https://sportrec.eu/gps/map/1k1oqnm/7456_0a0515084520FS513a.png'
        ],
        coord: [54.687222, 25.28],
        type: 'VELO',
        fmt: 'mass start',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20250516_1',
        parent: 'IOF_20250515_1',
        date: '2025-05-16',
        name: 'EMTBOC #2, миддл',
        place: 'Vilnius, Lithuania (Вильнюс, Литва)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8205&eventClassId=15291&eventRaceId=8334&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8205&eventClassId=15290&eventRaceId=8334&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://sportrec.eu/gps/emtboc-2025-middle-m',
            'W': 'https://sportrec.eu/gps/emtboc-2025-middle-w'
        },
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1k1or7u/7457_0U0515220736N4lpLi.png',
            'https://sportrec.eu/gps/map/1k1ora8/7458_bg0515222054hBr1oK.png'
        ],
        coord: [54.687222, 25.28],
        type: 'VELO',
        fmt: 'middle',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20250517_1',
        parent: 'IOF_20250515_1',
        date: '2025-05-17',
        name: 'EMTBOC #3, спринт',
        place: 'Vilnius, Lithuania (Вильнюс, Литва)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8206&eventClassId=15289&eventRaceId=8335&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8206&eventClassId=15288&eventRaceId=8335&overallResults=False' // Men
        ],
        gps: {
            'M': 'https://sportrec.eu/gps/emtboc-2025-sprint-m',
            'W': 'https://sportrec.eu/gps/emtboc-2025-sprint-w'
        },
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1k1orcf/7459_Ms0516161408J1y9ul.png',
            'https://sportrec.eu/gps/map/1k1orei/7460_9R0516160710YuDOVH.png'
        ],
        coord: [54.687222, 25.28],
        type: 'VELO',
        fmt: 'sprint',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20250518_1',
        parent: 'IOF_20250515_1',
        date: '2025-05-18',
        name: 'EMTBOC #4, смешанная эстафета',
        place: 'Vilnius, Lithuania (Вильнюс, Литва)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8207&groupBy=EventClass' // Mixed
        ],
        gps: 'https://sportrec.eu/gps/emtboc-2025-mixed-relay',
        maps: [
            // Sportrec
            'https://sportrec.eu/gps/map/1k1orm2/7461_lH0517073300lAWF5Y.png'
        ],
        coord: [54.687222, 25.28],
        type: 'VELO',
        fmt: 'mixed relay',
        start: 'EMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6497/be8a8038-1719-4cdd-99b2-e137a20d502a/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6497/2cc1fac9-987d-4a77-864b-a7ef6cb703be/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/6497/53fb4528-a556-4633-b58c-62daabfe6da9/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/2b4bdbc0-61d1-4751-90fd-564f4ba78803/Bulletin-4.pdf'
        ],
        res: 'https://eventor.orienteering.org/Events/ResultList?eventId=8463',
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/c556bb66-f3fa-4fea-b8ed-3b9f9bcab6e8/Old-map-Middle-Q-Tahkom-Kalliolahti.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/1a9236df-1d0b-47cb-bcd4-4db94d87eae7/Old-map-Middle-Q-Tahkom-ki.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/88429fd0-ca94-4091-9ff6-353be312afe5/Old-map-Middle-Q-Fin5-2019-Kuopio-Tahko-10-000.A3.pdf.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/25e2cc72-72f4-4fae-8046-82e3dd0817a0/Old-map-%28Middle-and-Long-Distance-Finals%29-Neulaniemi%2C-Viinaniemi-2018.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/b0a8be2c-b1e6-4ce6-8792-f518c7617725/Old-map-%28Middle-and-Long-Distance-Finals%29-Vuorilampi-19.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/27d0ad5e-e565-4b2d-a00f-e24f4485cddf/Old-map-%28Middle-and-Long-Distance-Finals%29-Salonsaari-2021.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/a09e4a69-b84a-4d1c-8ebf-0df34ec5eba6/Old-map-%28Middle-and-Long-Distance-Finals%29-Salonsaari-Kolmisoppi-19.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/1a01b5ef-ecd8-4893-b636-2704faf9e974/Old-map-%28Middle-and-Long-Distance-Finals%29-Pieni-Neulama-ki-2021.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/06666614-ae2a-45e8-b306-e9416f781aa7/Old-map-%28Middle-and-Long-Distance-Finals%29-Neulama-ki-10-000--19.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/7200e394-e6b2-443f-b910-0b9f0d661248/Old-map-%28Middle-and-Long-Distance-Finals%29-Neulama-ki-15000--19.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/aeead5f1-bf0d-4541-93ef-4e1568f2d17c/Old-map-%28Relay%29-Puijo-2018.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/46fc8ee3-3a7c-49ca-ae92-8b6f3513b6fa/Old-map-test-race-07062025-Puijonsarvi.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/f79dfd29-5a53-44b1-a460-dca1baf5f44e/Neulam-ki-ocad.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/843f1b64-aab1-4ebb-8e6f-14dcf61c07f2/Neulaniemi-ocad.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/3cb87e68-3714-45ea-b841-e45788d93cdb/Puijo-ocad.ocd',
            'https://eventor-iof-storage.orientering.se/eventdocuments/6497/8ab73ee8-3ec6-4a67-82de-76d8edbff619/Tahkom-ki-ocad.ocd'
        ],
        photo: [
            'https://woc2025.kuvat.fi/i/vu3RHqKP2Xwbp9yTzJWcjteAEN6xDs7r/kuvat/WOC2025/Medal+ceremonies+11.7/' // Medal ceremony 11.7
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJeMFCpZO9yktNA37p78AgJn',
            'https://www.svtplay.se/video/KrJXbBJ/orientering-vm/medeldistans', // 13:30-17:20
            'https://www.svtplay.se/video/KXvMP26/orientering-vm/langdistans', // 13:10-17:20
            'https://www.svtplay.se/video/KrQdW7v/orientering-vm/stafett', // 12:20-16:30
            'https://tv.nrk.no/serie/orientering/sesong/2025/episode/ISPO10203125', // 13:20-17:20
            'https://tv.nrk.no/serie/orientering/sesong/2025/episode/ISPO10203225', // 13:00-17:20
            'https://tv.nrk.no/serie/orientering/sesong/2025/episode/ISPO10203425', // 12:20-16:30
            'https://arenan.yle.fi/1-74476323', // 14:15-18:20
            'https://arenan.yle.fi/1-74476324', // 13:55-18:30
            'https://arenan.yle.fi/1-74476325', // 13:10-17:40
            'https://www.srf.ch/play/tv/-/video/orientierungslauf-wm-in-kuopio-mitteldistanz-frauen--maenner', // 13:30-17:30
            'https://www.srf.ch/play/tv/-/video/orientierungslauf-wm-in-kuopio-langdistanz-frauen--maenner', // 13:15-17:15
            'https://www.srf.ch/play/tv/live/srf-zwei', // 12:20-16:30
            'https://tv.orf.at/program/orfs/liveorient130.html', // 15:20-17:25
            'https://tv.orf.at/program/orfs/liveorient132.html', // 16:00-17:25
            'https://tv.orf.at/program/orfs/liveorient134.html' // 14:45-16:30
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8460&eventClassId=17103&eventRaceId=8598&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8460&eventClassId=17104&eventRaceId=8598&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8460&eventClassId=17105&eventRaceId=8598&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=8460&eventClassId=17106&eventRaceId=8598&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8460&eventClassId=17107&eventRaceId=8598&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8460&eventClassId=17108&eventRaceId=8598&overallResults=False' // Heat 3
        ],
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
        maps: [
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapmenq1.png',
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapmenq2.png',
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapmenq3.png',
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapwomenq1.png',
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapwomenq2.png',
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapwomenq3.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2025wocmqM/map',
            'https://www.tulospalvelu.fi/gps/2025wocmqM1/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2025/07/mapmenq1.png
            'https://www.tulospalvelu.fi/gps/2025wocmqM2/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2025/07/mapmenq2.png
            'https://www.tulospalvelu.fi/gps/2025wocmqM3/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2025/07/mapmenq3.png
            'https://www.tulospalvelu.fi/gps/2025wocmqW/map',
            'https://www.tulospalvelu.fi/gps/2025wocmqW1/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2025/07/mapwomenq1.png
            'https://www.tulospalvelu.fi/gps/2025wocmqW2/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2025/07/mapwomenq2.png
            'https://www.tulospalvelu.fi/gps/2025wocmqW3/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2025/07/mapwomenq3.png
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_q_m1.png', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_q_m2.png', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_q_m3.png', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_q_w1.png', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_q_w2.png', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_q_w3.png' // Heat 3
        ],
        photo: [
            'https://www.woc2025.fi/media/',
            'https://photos.app.goo.gl/27deRttDTh1DGnfH7', // IOF Album
            'https://woc2025.kuvat.fi/i/VbQrRaDjxKef3Yz9T5gdcCJWHvE6sMUu/kuvat/WOC2025/Middle+distance+qualification,+8.7.2025/' // WOC 2025 Album
        ],
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
            'https://online-live.tulospalvelu.fi/tulokset-new/en/2025_wocmiddle/women/smart/1/',
            'https://eventor.orienteering.org/Events/ResultList?eventId=8461&eventClassId=16336&eventRaceId=8599&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8461&eventClassId=16337&eventRaceId=8599&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025wocmfM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025wocmfW/'
        },
        maps: [
            // 'https://news.worldofo.com/2025/07/10/woc-2025-middle-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=371717',
            'https://www.tulospalvelu.fi/gps/2025wocmfW/map',
            // 'https://omaps.worldofo.com/?id=371718',
            'https://www.tulospalvelu.fi/gps/2025wocmfM/map',
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapwoc2025middlemen.png', // duplicate of https://www.tulospalvelu.fi/gps/2025wocmfM/map
            'https://news.worldofo.com/wp-content/uploads/2025/07/mapwoc2025middlewomen.png', // duplicate of https://www.tulospalvelu.fi/gps/2025wocmfW/map
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_middle_men.png', // Men
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_middle_women.png' // Women
        ],
        photo: [
            'https://photos.app.goo.gl/7QJJjG65UJMFBtvh6',
            'https://woc2025.kuvat.fi/i/rNDKRVmBWxjgbnapfvzCE7huGqMStywP', // WOC 2025 album
            'https://kuva.sslmedia.info/Suunnistus2025/MM-kilpailut-2025/MM-keskimatka' // Finnish Orienteering Federation’s album
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8462&eventClassId=16338&eventRaceId=8600&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8462&eventClassId=16339&eventRaceId=8600&overallResults=False' // Women
        ],
        gps: {
            'M': 'https://www.tulospalvelu.fi/gps/2025wocldM/',
            'W': 'https://www.tulospalvelu.fi/gps/2025wocldW/'
        },
        maps: [
            // 'https://news.worldofo.com/2025/07/11/woc-2025-long-maps-results-and-analysis/',
            // 'https://omaps.worldofo.com/?id=371749',
            'https://www.tulospalvelu.fi/gps/2025wocldW/map',
            // 'https://omaps.worldofo.com/?id=371750',
            'https://www.tulospalvelu.fi/gps/2025wocldM/map',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_long_men.png', // Men
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_long_women.png' // Women
        ],
        photo: [
            'https://photos.app.goo.gl/Prxe7RnX3QHUib1z6',
            'https://woc2025.kuvat.fi/i/bsfY5mTqkc4pjtuExBa8gFHMUDXWrAwz/kuvat/WOC2025/Long+distance+final,+10.7.2025/', // WOC 2025 Album
            'https://kuva.sslmedia.info/Suunnistus2025/MM-kilpailut-2025/MM-pitk%C3%A4-matka' // Finnish Orienteering Federation
        ],
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
            'https://online.tulospalvelu.fi/tulokset-new/en/2025_wocrelay/women/results/',
            'https://eventor.orienteering.org/Events/ResultList?eventId=8463&eventClassId=16340', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8463&eventClassId=16341' // Women
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
            'https://www.tulospalvelu.fi/gps/2025wocrelayM2/map',
            // 'https://omaps.worldofo.com/?id=371818',
            // 'https://omaps.worldofo.com/?id=371819',
            'https://www.tulospalvelu.fi/gps/2025wocrelayW3/map',
            // 'https://omaps.worldofo.com/?id=371820',
            'https://www.tulospalvelu.fi/gps/2025wocrelayW2/map',
            // 'https://omaps.worldofo.com/?id=371821',
            // 'https://omaps.worldofo.com/?id=371846',
            'https://www.tulospalvelu.fi/gps/2025wocrelayM3/map',
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2025wocrelayM1/map', // duplicate of https://www.tulospalvelu.fi/gps/2025wocrelayM2/map
            // 'https://www.tulospalvelu.fi/gps/2025wocrelayW1/map', // duplicate of https://www.tulospalvelu.fi/gps/2025wocrelayW2/map
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_relay_men.png', // Leg 1 & 2
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_relay_men3.png', // Leg 3
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_relay_women.png', // Leg 1 & 2
            'https://orienteering.sport/wp-content/uploads/2025/07/woc_2025_map_relay_women3.png' // Leg 3
        ],
        photo: [
            'https://photos.app.goo.gl/KeBAGts7LvmVUQEq7',
            'https://woc2025.kuvat.fi/i/KH6wJmgR2AEaZkUBVrv4XubT8WnFdf5e', // WOC 2025 Album
            'https://kuva.sslmedia.info/Suunnistus2025/MM-kilpailut-2025/MM-viesti' // Finnish Orienteering Federation
        ],
        video: 'https://www.youtube.com/watch?v=kqk92O5okrw',
        coord: [62.8925, 27.678333],
        fmt: 'relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20250812_1',
        date: '2025-08-12',
        endDate: '2025-08-17', // по программе Кубка мира IOF
        place: 'Warszawa, Poland (Варшава, Польша)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7490/030def7f-fa1a-4184-8855-879302ed9ec7/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7490/527a1ff9-36e6-4b64-915a-bf177b0de65c/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7490/f79c767b-8fdb-4970-8ef6-9d1d2e760c0b/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7490/6742e7b5-22b7-428c-8757-276246f7e28f/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/7490' // IOF Eventor
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLJxCa_0RthJcr3gt-CUp0Ez3KzcNGen_L',
            'https://tv.orienteering.sport/2025-world-mtbo-championships' // IOF Web-TV IOF Web-TV
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'sprint, middle, mass start, long, relay',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20250812_2',
        parent: 'IOF_20250812_1',
        date: '2025-08-12',
        name: 'WMTBOC #1, спринт',
        place: 'Warszawa, Poland (Варшава, Польша)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8446&eventClassId=16299&eventRaceId=8584&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8446&eventClassId=16300&eventRaceId=8584&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8503&eventClassId=16406&eventRaceId=8641&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=8503&eventClassId=16407&eventRaceId=8641&overallResults=False' // Women 20
        ],
        gps: {
            'M': 'https://event.trackcourse.com/view/wmtboc-2025-sprint-men/en',
            'W': 'https://event.trackcourse.com/view/wmtboc-2025-sprint-women/en'
        },
        maps: [
            // TrackCourse
            'https://event.trackcourse.com/contests_maps/20250812/03abc35c8384ebbb8d7d0de00ceb003d9f6c2cfe/kml_image_Sprint-M21.jpg',
            'https://event.trackcourse.com/contests_maps/20250812/a14b242527a615ba30661bc6c5522359f7411258/kml_image_Sprint-K21.jpg'
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'sprint',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20250813_1',
        parent: 'IOF_20250812_1',
        date: '2025-08-13',
        name: 'WMTBOC #2, миддл',
        place: 'Warszawa, Poland (Варшава, Польша)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8447&eventClassId=16301&eventRaceId=8585&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8447&eventClassId=16302&eventRaceId=8585&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8504&eventClassId=16408&eventRaceId=8642&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=8504&eventClassId=16409&eventRaceId=8642&overallResults=False' // Women 20
        ],
        gps: {
            'M': 'https://event.trackcourse.com/view/wmtboc-2025-middle-men/en',
            'W': 'https://event.trackcourse.com/view/wmtboc-2025-middle-women/en'
        },
        maps: [
            // TrackCourse
            'https://event.trackcourse.com/contests_maps/20250813/07b74ee701fd2361d570b5e8e43632a526fd1d6b/kml_image_Middle-M21.jpg',
            'https://event.trackcourse.com/contests_maps/20250813/f2e7879ae6caa6a9b43290f3cb7aef9169d87031/kml_image_Middle-K21.jpg'
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'middle',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20250814_1',
        parent: 'IOF_20250812_1',
        date: '2025-08-14',
        name: 'WMTBOC #3, масс-старт',
        place: 'Warszawa, Poland (Варшава, Польша)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8448&eventClassId=16303&eventRaceId=8586&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8448&eventClassId=16304&eventRaceId=8586&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8505&eventClassId=16410&eventRaceId=8643&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=8505&eventClassId=16411&eventRaceId=8643&overallResults=False' // Women 20
        ],
        gps: {
            'M': 'https://event.trackcourse.com/view/wmtboc-2025-mass-start-men/en',
            'W': 'https://event.trackcourse.com/view/wmtboc-2025-mass-start-women/en'
        },
        maps: [
            // TrackCourse
            'https://event.trackcourse.com/contests_maps/20250814/f9f7c4e77027ed548a21c22dec972bed5648fa36/kml_image_Mass-M21.jpg',
            'https://event.trackcourse.com/contests_maps/20250814/5bda667732350e47133f39a9262fb26bd85eea49/kml_image_Mass-W21.jpg'
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'mass start',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20250816_1',
        parent: 'IOF_20250812_1',
        date: '2025-08-16',
        name: 'WMTBOC #4, лонг',
        place: 'Warszawa, Poland (Варшава, Польша)',
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8449&eventClassId=16305&eventRaceId=8587&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8449&eventClassId=16306&eventRaceId=8587&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8506&eventClassId=16414&eventRaceId=8644&overallResults=False', // Men 20
            'https://eventor.orienteering.org/Events/ResultList?eventId=8506&eventClassId=16415&eventRaceId=8644&overallResults=False' // Women 20
        ],
        gps: {
            'M': 'https://event.trackcourse.com/view/wmtboc-2025-long-men/en',
            'W': 'https://event.trackcourse.com/view/wmtboc-2025-long-women/en'
        },
        maps: [
            // TrackCourse
            'https://event.trackcourse.com/contests_maps/20250816/5db85df510e1017002197d4a9dd16363f4bd0a21/kml_image_Long-M21.jpg',
            'https://event.trackcourse.com/contests_maps/20250816/7940c8019b48d2a5f7ac798f2e4bd1c5a509774a/kml_image_Long-W21.jpg'
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'long',
        start: 'WMTBOC'
    },
    {
        id: 'IOF_20250817_1',
        parent: 'IOF_20250812_1',
        date: '2025-08-17',
        name: 'WMTBOC #5, эстафета',
        place: 'Warszawa, Poland (Варшава, Польша)',
        res: [
            'https://eventor-iof-storage.orientering.se/eventdocuments/8451/078d58bc-835d-4570-910c-a6aad1a59775/Relay-Results.pdf'
        ],
        gps: {
            'M-1': 'https://event.trackcourse.com/view/wmtboc-2025-relay-men-leg-1/en',
            'M-2': 'https://event.trackcourse.com/view/wmtboc-2025-relay-men-leg-2/en',
            'M-3': 'https://event.trackcourse.com/view/wmtboc-2025-relay-men-leg-3/en',
            'W-1': 'https://event.trackcourse.com/view/wmtboc-2025-relay-women-leg-1/en',
            'W-2': 'https://event.trackcourse.com/view/wmtboc-2025-relay-women-leg-2/en',
            'W-3': 'https://event.trackcourse.com/view/wmtboc-2025-relay-women-leg-3/en'
        },
        maps: [
            // TrackCourse
            'https://event.trackcourse.com/contests_maps/20250817/96f0a78489972fcd70aafacf19718ca2bd483936/kml_image_Relay-M21.jpg',
            'https://event.trackcourse.com/contests_maps/20250817/da1f9b772b119e617f630e96fe57775d9ee8f291/kml_image_Relay-W21.jpg'
        ],
        coord: [52.23, 21.011111],
        type: 'VELO',
        fmt: 'relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7552/b9fb0205-1ce3-453e-8595-384c4d55357a/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7552/03b68a16-63f6-4804-920c-6bc9e02aa78d/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7552/652083ad-701e-4fac-a7d0-db87f2d397b5/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7552/467b0cb1-d51d-4f77-a90c-a408eb421b7d/Bulletin-4.pdf'
        ],
        maps: [
            // карта модельных соревнований (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/7552/e91b0362-d784-4f75-b15f-fe5807d5a49b/Model-Event-map.pdf'
        ],
        photo: 'https://eoc2025.be/photos/',
        video: [
            'https://tv.orienteering.sport/eoc-2025', // 18:50
            'https://www.svtplay.se/video/jqWgpAn/orientering-em/sprintstafett', // 18:50
            'https://www.svtplay.se/video/KLJWk2n/orientering-em/knockout-sprint', // 15:30
            'https://www.svtplay.se/video/86dyM42/orientering-em/sprint', // 15:30
            'https://tv.nrk.no/serie/orientering/sesong/2025/episode/ISPO10204125', // 18:50
            'https://tv.nrk.no/serie/orientering/sesong/2025/episode/ISPO10204225', // 15:30
            'https://tv.nrk.no/serie/orientering/sesong/2025/episode/ISPO10204325', // 15:30
            'https://scplay.skiclassics.com/events/european-orienteering-championships-2025-sprint-relay-hasselt-belgium', // 18:50
            'https://scplay.skiclassics.com/events/european-orienteering-championships-2025-ko-sprint-hasselt-belgium', // 15:30
            'https://scplay.skiclassics.com/events/european-orienteering-championships-2025-sprint-hasselt-belgium', // 15:30
            'https://arenan.yle.fi/1-74532215', // 19:50
            'https://arenan.yle.fi/1-75614822', // 16:25
            'https://arenan.yle.fi/1-75614827', // 16:25
            'https://eurovisionsport.com/en/explore/sports/orienteering' // 18:50
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8520',
            'https://eventor.orienteering.org/Events/ResultList?eventId=8520&groupBy=EventClass' // Mixed
        ],
        gps: {
            '1': 'https://events.loggator.com/EOC2025SR1',
            '2': 'https://events.loggator.com/EOC2025SR2',
            '3': 'https://events.loggator.com/EOC2025SR3',
            '4': 'https://events.loggator.com/EOC2025SR4'
        },
        maps: [
            // 'https://news.worldofo.com/2025/08/28/eoc-2025-sprint-relay-maps-results-and-analysis/',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2b696757532bb0e1963b7e13/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/4079329a8848548c36bc34ac/optimized_tile_0_0.gif',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_relay.pdf' // All legs
        ],
        video: [
            'https://www.youtube.com/watch?v=4iudVhZm1R4', // ENG
            'https://www.youtube.com/watch?v=W7es9GBVatQ' // GER
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8521&eventClassId=17391&eventRaceId=8659&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8521&eventClassId=17392&eventRaceId=8659&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8521&eventClassId=17393&eventRaceId=8659&overallResults=False', // Heat 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=8521&eventClassId=17394&eventRaceId=8659&overallResults=False', // Heat 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8521&eventClassId=17395&eventRaceId=8659&overallResults=False', // Heat 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8521&eventClassId=17396&eventRaceId=8659&overallResults=False' // Heat 3
        ],
        gps: {
            'M-Q1': 'https://events.loggator.com/EOC2025KOQM1',
            'M-Q2': 'https://events.loggator.com/EOC2025KOQM2',
            'M-Q3': 'https://events.loggator.com/EOC2025KOQM3',
            'W-Q1': 'https://events.loggator.com/EOC2025KOQW1',
            'W-Q2': 'https://events.loggator.com/EOC2025KOQW2',
            'W-Q3': 'https://events.loggator.com/EOC2025KOQW3'
        },
        maps: [
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/24c73a0041bbdc3c24a0080b/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2b0ee949cfd0b3769eee4a73/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2badf6f96c86d3d119c42658/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/8fc1b863550f667d0fc02174/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/ec880244741c608fede24a49/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/8a5cda4885cc571a3e99b0a0/optimized_tile_0_0.gif',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_q_m1-scaled.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_q_m2-scaled.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_q_m3-scaled.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_q_w1-scaled.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_q_w2-scaled.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_q_w3-scaled.gif' // Heat 3
        ],
        video: [
            'https://www.youtube.com/watch?v=KZ2fnWAq6W8' // Knockout Qualification
        ],
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
        res: [
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522',
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&groupBy=EventClass', // Quarter finals
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17409&eventRaceId=8660&overallResults=False', // Men 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17410&eventRaceId=8660&overallResults=False', // Men 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17411&eventRaceId=8660&overallResults=False', // Men 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17412&eventRaceId=8660&overallResults=False', // Women 1
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17413&eventRaceId=8660&overallResults=False', // Women 2
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17414&eventRaceId=8660&overallResults=False', // Women 3
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17415&eventRaceId=8660&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17416&eventRaceId=8660&overallResults=False', // Women
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17417&eventRaceId=8660&overallResults=False', // Men
            'https://eventor.orienteering.org/Events/ResultList?eventId=8522&eventClassId=17418&eventRaceId=8660&overallResults=False' // Women
        ],
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
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/8052958cb38458882af80b23/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/7e8044c4bc591d7310fade90/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/0fcba755d1fb246dcbe4a95e/optimized_tile_0_0.gif',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_qf.pdf', // Quarter final
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_sf.pdf', // Semi final
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_ko_f.pdf' // Final
        ],
        video: [
            'https://www.youtube.com/watch?v=12mXg_5Uv-Q', // ENG
            'https://www.youtube.com/watch?v=ZDTGg83Vv5I', // ENG
            'https://www.youtube.com/watch?v=0BEDh2Ol_I0', // GER
            'https://www.youtube.com/watch?v=JZpWoRoAUY0' // GER
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
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/afa4426f8dcb62bc4e227534/optimized_tile_0_0.gif',
            // 'https://omaps.worldofo.com/?id=374754',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2af8e0f034fdb807c97600c0/optimized_tile_0_0.gif',
            // 'https://omaps.worldofo.com/index.php?id=374753',
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/8a89d00c085253383e2872eb/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/de4168a0fe9623e724ace00f/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/decb3d1d1d9970e112227155/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/2621f25bedb0e918749b1e0a/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/55bdfcc2038b0ded27c61b30/optimized_tile_0_0.gif',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/53f66557d0463d4c2a72320c/optimized_tile_0_0.gif',
            // карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_q_m1-scaled.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_q_m2-scaled.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_q_m3-scaled.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_q_w1-scaled.gif', // Heat 1
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_q_w2-scaled.gif', // Heat 2
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_q_w3-scaled.gif', // Heat 3
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_f_men-scaled.gif', // Men
            'https://orienteering.sport/wp-content/uploads/2025/08/eoc_2025_map_sprint_f_women-scaled.gif' // Women
        ],
        video: [
            'https://www.youtube.com/watch?v=DsrhXa8poog', // Sprint Qualification
            'https://www.youtube.com/watch?v=zmiMt0OMcbA', // ENG
            'https://www.youtube.com/watch?v=7OHDPN1yFH0' // GER
        ],
        coord: [50.93, 5.3375],
        fmt: 'sprint',
        start: 'EOC'
    },
    {
        id: 'MAJOR_20260301_1',
        date: '2026-03-01', // в en.wikipedia: 2–6 марта
        endDate: '2026-03-06',
        place: 'Rusutsu, Hokkaido, Japan (Русуцу, Хоккайдо, Япония)',
        name: 'Чемпионат мира (SKI-WOC)',
        link: [
            'https://wsoc2026.jp/comp.html',
            'https://en.wikipedia.org/wiki/World_Ski_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_лыжах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8173/840574dc-0849-463f-a202-18d3c204cbfb/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8173/585ed5b3-7903-44fa-9c78-43bbd1d2c13a/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8173/738c91cb-6ecb-478a-9abc-2ab559834f2b/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/6f27f606-af8f-4474-9c75-544277b8c199/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/8173' // IOF Eventor
        ],
        maps: [
            // старые карты районов (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/f567eccf-7e42-4d2b-98d9-2c108a4a0b7e/old_map1.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/8e15de1e-84c4-41be-b78a-904c8159a299/old_map2.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/6c1ec3f7-e0f9-47d3-9529-269d1574a7d9/old_map3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/4135aed4-d10a-4a31-860a-a99417d4d4fa/old_map4.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/2d20b5a1-8116-40d8-a4f1-bc3683cd8544/old_map5.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/c4207e3e-35e6-43c9-8003-cd3c8a02faae/old_map6.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/d3632c17-7da2-433f-accf-350db6a9bae9/old_map7.pdf'
        ],
        photo: [
            'https://wsoc2026.jp/new/photos.html', // WSOC 2026 Albums
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=169', // Bulgaria
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=192', // Chinese Taipei
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=177', // Czechia
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=181', // Estonia
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=182', // Finland
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=222', // Germany
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=231', // Italy
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=233', // Japan
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=234', // Kazakhstan
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=238', // Latvia
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=199', // Lithuania
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=208', // Norway
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=190', // Sweden
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=188', // Switzerland
            'https://eventor.orienteering.sport/Events/DetailedGroupEntryOverview/8173?organisationId=196' // United States
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'sprint, pursuit, middle, sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20260302_1',
        parent: 'MAJOR_20260301_1',
        date: '2026-03-02',
        name: 'SKI-WOC #1, спринт',
        place: 'Rusutsu, Hokkaido, Japan (Русуцу, Хоккайдо, Япония)',
        gps: 'https://app.o-gps-tracker.com/event/wsoc2026/20260302_sprint/index.html',
        maps: [
            // O-GPS Tracker
            'https://app.o-gps-tracker.com/event/wsoc2026/20260302_sprint/src/map/wsoc2026_sprint_w_rstnonsnhmjdiiyn.png',
            'https://app.o-gps-tracker.com/event/wsoc2026/20260302_sprint/src/map/wsoc2026_sprint_m_rsthiitkrdn.png'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'sprint',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20260303_1',
        parent: 'MAJOR_20260301_1',
        date: '2026-03-03',
        name: 'SKI-WOC #2, гонка преследования',
        place: 'Rusutsu, Hokkaido, Japan (Русуцу, Хоккайдо, Япония)',
        gps: 'https://app.o-gps-tracker.com/event/wsoc2026/20260303_pursuit/index.html',
        maps: [
            // O-GPS Tracker
            'https://app.o-gps-tracker.com/event/wsoc2026/20260303_pursuit/src/map/wsoc2026_pursuit_m_rstnsunhttmkmr.png',
            'https://app.o-gps-tracker.com/event/wsoc2026/20260303_pursuit/src/map/wsoc2026_pursuit_w_gtnkizngnbrz.png'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'pursuit',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20260305_1',
        parent: 'MAJOR_20260301_1',
        date: '2026-03-05',
        name: 'SKI-WOC #3, миддл',
        place: 'Rusutsu, Hokkaido, Japan (Русуцу, Хоккайдо, Япония)',
        gps: 'https://app.o-gps-tracker.com/event/wsoc2026/20260305_middle/index.html',
        maps: [
            // O-GPS Tracker
            'https://app.o-gps-tracker.com/event/wsoc2026/20260305_middle/src/map/wsoc2026_middle_m_bggnknrni2.png',
            'https://app.o-gps-tracker.com/event/wsoc2026/20260305_middle/src/map/wsoc2026_middle_w_sgtmowrni2.png'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'middle',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20260306_1',
        parent: 'MAJOR_20260301_1',
        date: '2026-03-06',
        name: 'SKI-WOC #4, спринт-эстафета',
        place: 'Rusutsu, Hokkaido, Japan (Русуцу, Хоккайдо, Япония)',
        res: [
            'https://eventor-iof-storage.orientering.se/eventdocuments/8173/ac4e57aa-aa92-4a76-84a3-f6e159923851/WSOC2026_RelayResultList.pdf'
        ],
        gps: 'https://app.o-gps-tracker.com/event/wsoc2026/20260306_sprint_relay/index.html',
        maps: [
            // O-GPS Tracker
            'https://app.o-gps-tracker.com/event/wsoc2026/20260306_sprint_relay/src/map/wsoc2026_sprint-relay_sunttnimsn.png'
        ],
        coord: [42.733333, 140.883333],
        type: 'SKI',
        fmt: 'sprint relay',
        start: 'SKI_WOC'
    },
    {
        id: 'IOF_20260525_1',
        date: '2026-05-25',
        endDate: '2026-05-28', // по IOF; оргкомитет: 24–28 мая; перенесён из Оурена
        place: 'Almeida, Portugal (Алмейда, Португалия)',
        name: 'Чемпионат Европы (EMTBOC)',
        link: [
            'https://emtboc2026.fpo.pt/',
            'https://sv.wikipedia.org/wiki/Europamästerskapen_i_mountainbikeorientering',
            'https://ru.wikipedia.org/wiki/Чемпионат_Европы_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8557/3beca67d-1650-43fc-b0fe-892ef0f2d046/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8557/92e98cbb-256b-4ac0-8d41-ca1f5dc5bbf2/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8557/277649c1-9189-4dfd-8304-8dcc0e283661/Bulletin-4.pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/Show/8557' // IOF Eventor
        ],
        coord: [40.716667, -6.9],
        type: 'VELO',
        fmt: 'sprint, middle, mass start, mixed relay',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20260525_2',
        parent: 'IOF_20260525_1',
        date: '2026-05-25',
        name: 'EMTBOC #1, спринт',
        place: 'Almeida, Portugal (Алмейда, Португалия)',
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8931&championshipId=151&championshipRaceSubTypeId=2&groupBy=EventClass' // чемпионат Европы
        ],
        gps: {
            'M': 'https://events.loggator.com/2026EMTBOC_Sprint_ME',
            'W': 'https://events.loggator.com/2026EMTBOC_Sprint_WE',
            'Livelox': 'https://www.livelox.com/Events/Show/190834/SPRINT-MTBO-EOC26-ALMEIDA-PORTUGAL'
        },
        maps: [
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/76345f35ad8d02c30ca8f3ec/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/3786c8b7e8ae831e336ac158/optimized_tile_0_0.jpg'
        ],
        coord: [40.716667, -6.9],
        type: 'VELO',
        fmt: 'sprint',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20260526_1',
        parent: 'IOF_20260525_1',
        date: '2026-05-26',
        name: 'EMTBOC #2, миддл',
        place: 'Almeida, Portugal (Алмейда, Португалия)',
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8932&championshipId=151&championshipRaceSubTypeId=2&groupBy=EventClass' // чемпионат Европы
        ],
        gps: {
            'M': 'https://events.loggator.com/2026EMTBOC_Middle_ME',
            'W': 'https://events.loggator.com/2026EMTBOC_Middle_WE',
            'Livelox': 'https://www.livelox.com/Events/Show/191001/MTBO26-Middle'
        },
        maps: [
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/17ea947cbf0d0589fae6392f/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/ac6e267c69e5620cb5f2be60/optimized_tile_0_0.jpg'
        ],
        coord: [40.716667, -6.9],
        type: 'VELO',
        fmt: 'middle',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20260527_1',
        parent: 'IOF_20260525_1',
        date: '2026-05-27',
        name: 'EMTBOC #3, масс-старт',
        place: 'Almeida, Portugal (Алмейда, Португалия)',
        gps: {
            'M': 'https://events.loggator.com/2026EMTBOC_MassStart_ME',
            'W': 'https://events.loggator.com/2026EMTBOC_MassStart_WE',
            'Livelox': 'https://www.livelox.com/Events/Show/191263/MTBO26-Mass-Start-Long-Distance'
        },
        maps: [
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/7ab580acee84b190c27d61f7/optimized_tile_0_0.jpg',
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/774d2c2d7eb8ab1802dfdcb8/optimized_tile_0_0.jpg'
        ],
        coord: [40.716667, -6.9],
        type: 'VELO',
        fmt: 'mass start',
        start: 'EMTBOC'
    },
    {
        id: 'IOF_20260528_1',
        parent: 'IOF_20260525_1',
        date: '2026-05-28',
        name: 'EMTBOC #4, смешанная эстафета',
        place: 'Almeida, Portugal (Алмейда, Португалия)',
        res: [
            'https://eventor-iof-storage.orientering.se/eventdocuments/8934/e84b40ea-ecea-4467-ae8f-ba01d6fd7f30/Results-Mixed-Relay.html'
        ],
        gps: {
            'W': 'https://events.loggator.com/2026EMTBOC_Relay_WE',
            'Livelox': 'https://www.livelox.com/Events/Show/191339/Relay-MTBO-26-Almeida'
        },
        maps: [
            // Loggator
            'https://d1die33kgxnq4e.cloudfront.net/uploads/map/overlay/7d0137e2d1e362ffad362114/optimized_tile_0_0.jpg'
        ],
        coord: [40.716667, -6.9],
        type: 'VELO',
        fmt: 'mixed relay',
        start: 'EMTBOC'
    },
    {
        id: 'MAJOR_20260706_1',
        date: '2026-07-06',
        endDate: '2026-07-11',
        place: 'Genova, Italy (Генуя, Италия)',
        name: 'Чемпионат мира (WOC)',
        link: 'https://woc2026.com/',
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7383/47dd2524-3979-4361-8a0e-724958188ae4/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7383/01979461-ed2f-4118-9c24-f6e8026ecd42/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/7383/28268b67-67e7-44ce-990e-cbd6156353c0/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/7383/40dc8004-e343-45ed-b606-602d0974d55a/Bulletin-4.pdf'
        ],
        res: 'https://app.liveresults.it/woc2026',
        maps: [
            // карты модельных соревнований (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/7383/71a33d03-385b-4d24-974f-3adbc8372a27/Sestri-Ponente-model-event-map-%28JPG%29.jpg', // Сестри-Поненте
            'https://eventor-iof-storage.orientering.se/eventdocuments/7383/c0f1901b-e4c3-42d7-86a0-169fba3bbf6a/Genova-model-event-map-%28JPG%29.jpg' // Генуя
        ],
        video: [
            'https://www.youtube.com/playlist?list=PLemA_lslotHE',
            'https://tv.orienteering.sport/woc-2026-all-races', // IOF TV, все гонки
            'https://tv.orienteering.sport/woc-2026-single-races', // IOF TV Tickets IOF TV all races ticket IOF TV single race ti
            'https://www.svtplay.se/video/KVk47L7/orientering-vm/sprint-mixad', // 14:10-17:00
            'https://www.svtplay.se/video/eZxgmRp/orientering-vm/knockout-sprint-mixad', // 14:50-17:00
            'https://www.svtplay.se/video/8qPkWwB/orientering-vm/sprintstafett-mixad' // 15:30-17:00
        ],
        coord: [44.407222, 8.933889],
        fmt: 'sprint, knock-out, sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20260707_1',
        parent: 'MAJOR_20260706_1',
        date: '2026-07-07',
        name: 'WOC #1, спринт (квалификация и финал)',
        place: 'Genova, Italy (Генуя, Италия)',
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8980&championshipId=157&eventClassId=18310', // мужчины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8980&championshipId=157&eventClassId=18311', // женщины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8980&championshipId=157&groupBy=EventClass' // Men and Women
        ],
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
            'https://news.worldofo.com/wp-content/uploads/2026/07/map_woc2026_sprint_w_1600.jpg',
            'https://news.worldofo.com/wp-content/uploads/2026/07/map_woc2026_sprint_m_1600.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026wocSprintQM1/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintQM2/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintQM3/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintQW1/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintQW2/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintQW3/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintFM/map',
            'https://www.tulospalvelu.fi/gps/2026wocSprintFW/map',
            // официальные карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-q-men-1.pdf', // квалификация, мужчины, забег 1
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-q-men-2.pdf', // квалификация, мужчины, забег 2
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-q-men-3.pdf', // квалификация, мужчины, забег 3
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-q-women-1.pdf', // квалификация, женщины, забег 1
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-q-women-2.pdf', // квалификация, женщины, забег 2
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-q-women-3.pdf', // квалификация, женщины, забег 3
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-f-men.pdf', // финал, мужчины
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-f-women.pdf', // финал, женщины
            // карты организаторов (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/78a61ea9-eb1a-41ca-b033-cc89aed46b6d/SQ-map-Men-1.jpg', // квалификация, мужчины, забег 1
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/9691338a-77ce-4dcb-bcbb-d933a1aa74b4/SQ-map-Men-2.jpg', // квалификация, мужчины, забег 2
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/0fd6b3ae-e206-4071-bca2-62a133cf40a9/SQ-map-Men-3.jpg', // квалификация, мужчины, забег 3
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/d7a42f20-d7e3-45e7-896b-a20031831772/SQ-map-Women-1.jpg', // квалификация, женщины, забег 1
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/1a6b2c1e-fb24-424a-bb59-bc879d3fe80d/SQ-map-Women-2.jpg', // квалификация, женщины, забег 2
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/541bcb8c-a637-485f-8a34-df9e47c97550/SQ-map-Women-3.jpg', // квалификация, женщины, забег 3
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/c90d5be7-f013-400d-8f3e-a9735d6323a2/SF-map-MEN.jpg', // финал, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/1341cb88-6f86-4139-a544-119f62bfec7b/SF-map-WOMEN.jpg', // финал, женщины
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/e0eaeae8-9eb5-4016-b307-7295e14c3e58/SQ-routechoices-MEN.pdf', // квалификация, варианты пути, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/3cfa81f6-bb2b-4b15-8c0a-0699f71920bc/SQ-routechoices-WOMEN.pdf', // квалификация, варианты пути, женщины
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/eadbc02b-c24c-4286-a6b0-172ae53aba18/SF-routechoices-MEN.pdf', // финал, варианты пути, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/8980/e9a49177-58a5-4b7c-9305-f538d0f518ca/SF-routechoices-WOMEN.pdf' // финал, варианты пути, женщины
        ],
        photo: [
            'https://photos.app.goo.gl/tyFjRg5SrTjfvBmm6',
            'https://photos.app.goo.gl/HD6Wkwj5zcadULkdA',
            'https://photos.app.goo.gl/VmrVpZjV5BeRdoEdA', // организаторы, квалификация
            'https://photos.app.goo.gl/kLFp6KQzJJggdK6i8' // организаторы, финал
        ],
        video: [
            'https://youtu.be/rC-N8eGiXpY',
            'https://www.svtplay.se/video/KVk47L7/orientering-vm/sprint-mixad' // SVT Play
        ],
        coord: [44.407222, 8.933889],
        fmt: 'sprint',
        start: 'WOC'
    },
    {
        id: 'IOF_20260709_1',
        parent: 'MAJOR_20260706_1',
        date: '2026-07-09',
        name: 'WOC #2, нокаут-спринт (квалификация)',
        place: 'Genova, Italy (Генуя, Италия)',
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8989&championshipId=157&groupBy=EventClass' // забеги 1–3
        ],
        gps: {
            'M-Q1': 'https://www.tulospalvelu.fi/gps/2026wocKOqualM1/',
            'M-Q2': 'https://www.tulospalvelu.fi/gps/2026wocKOqualM2/',
            'M-Q3': 'https://www.tulospalvelu.fi/gps/2026wocKOqualM3/',
            'W-Q1': 'https://www.tulospalvelu.fi/gps/2026wocKOqualW1/',
            'W-Q2': 'https://www.tulospalvelu.fi/gps/2026wocKOqualW2/',
            'W-Q3': 'https://www.tulospalvelu.fi/gps/2026wocKOqualW3/'
        },
        maps: [
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026wocKOqualM1/map',
            'https://www.tulospalvelu.fi/gps/2026wocKOqualM2/map',
            'https://www.tulospalvelu.fi/gps/2026wocKOqualM3/map',
            'https://www.tulospalvelu.fi/gps/2026wocKOqualW1/map',
            'https://www.tulospalvelu.fi/gps/2026wocKOqualW2/map',
            'https://www.tulospalvelu.fi/gps/2026wocKOqualW3/map',
            // карты организаторов (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/d6acb339-7174-451a-b5c7-59a3d31806f9/KOQ-map-Men-1.jpg', // мужчины, забег 1
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/8ae0c4d0-9723-4680-a4d9-c696da076868/KOQ-map-Men-2.jpg', // мужчины, забег 2
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/8736eaf0-3046-493a-8a4e-64a0b8ccbf39/KOQ-map-Men-3.jpg', // мужчины, забег 3
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/ac23aef8-7c42-4115-87ba-b438bcdeffac/KOQ-map-Women-1.jpg', // женщины, забег 1
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/312e12a1-5e70-4486-880d-7a3fecafd3f3/KOQ-map-Women-2.jpg', // женщины, забег 2
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/cb4db74e-71fb-4537-903a-16fdf32f2910/KOQ-map-Women-3.jpg', // женщины, забег 3
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/b7143953-3990-4fe8-aa0a-66fb0278476a/KOQ-routechoices-MEN.pdf', // варианты пути, мужчины
            'https://eventor-iof-storage.orientering.se/eventdocuments/8989/0b2eb9b7-cb30-4c2f-b0ce-9a1dac6347f9/KOQ-routechoices-WOMEN.pdf' // варианты пути, женщины
        ],
        photo: [
            'https://photos.app.goo.gl/CSgY1Fi3WRVvQU1Z9',
            'https://photos.app.goo.gl/HnW2UfDoEag5kSbAA' // организаторы
        ],
        coord: [44.407222, 8.933889],
        fmt: 'knock-out',
        start: 'WOC'
    },
    {
        id: 'IOF_20260710_1',
        parent: 'MAJOR_20260706_1',
        date: '2026-07-10',
        name: 'WOC #3, нокаут-спринт (финалы)',
        place: 'Genova, Italy (Генуя, Италия)',
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8990&championshipId=157&eventClassId=18764', // мужчины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8990&championshipId=157&eventClassId=18763', // женщины
            'https://eventor.orienteering.sport/Events/Show/8990' // All races
        ],
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
            'https://news.worldofo.com/wp-content/uploads/2026/07/map_final.png',
            'https://news.worldofo.com/wp-content/uploads/2026/07/map_semifinal.png',
            'https://news.worldofo.com/wp-content/uploads/2026/07/map_quarterfinal.png',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026wocKOquarterM/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2026/07/map_quarterfinal.png
            // 'https://www.tulospalvelu.fi/gps/2026wocKOquarterW/map', // duplicate of https://www.tulospalvelu.fi/gps/2026wocKOquarterM/map
            'https://www.tulospalvelu.fi/gps/2026wocKOsemiM/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2026/07/map_semifinal.png
            // 'https://www.tulospalvelu.fi/gps/2026wocKOsemiW/map', // duplicate of https://www.tulospalvelu.fi/gps/2026wocKOsemiM/map
            'https://www.tulospalvelu.fi/gps/2026wocKOfinalM/map', // duplicate of https://news.worldofo.com/wp-content/uploads/2026/07/map_final.png
            // 'https://www.tulospalvelu.fi/gps/2026wocKOfinalW/map', // duplicate of https://www.tulospalvelu.fi/gps/2026wocKOfinalM/map
            // официальные карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/07/genova-sf-.pdf', // мужчины, полуфиналы
            'https://orienteering.sport/wp-content/uploads/2026/07/ko-final-1.pdf', // мужчины, финал, часть 1
            'https://orienteering.sport/wp-content/uploads/2026/07/ko-final-2.pdf', // мужчины, финал, часть 2
            // карты организаторов (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/75135884-68cc-4a55-8a6f-92b5d78425d8/KOF-map-QF-ABC.jpg', // четвертьфиналы
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/b08ec1f8-8f2d-4dc8-ba78-0e926e54e07d/KOF-map-SF-1.jpg', // полуфиналы, часть 1
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/5fb9de06-45d6-4b1f-9d1e-8f1b296de615/KOF-map-SF-2.jpg', // полуфиналы, часть 2
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/f6228321-cca9-4db1-9c7e-a525af9fd9e5/KOF-map-Final-1.jpg', // финал, часть 1
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/de6df9f4-d042-4257-8446-f043a75092ea/KOF-map-Final-2.jpg', // финал, часть 2
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/276e59ee-c373-4bef-ae6b-4a474c291e50/KOF-routechoices-QF.pdf', // четвертьфиналы, варианты пути
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/fe5f7756-ddeb-4bbb-8d79-a0ee5e6417f2/KOF-routechoices-SF.pdf', // полуфиналы, варианты пути
            'https://eventor-iof-storage.orientering.se/eventdocuments/8990/651c2ea0-3078-43af-bb66-fc9aa541d08c/KOF-routechoices-Final.pdf' // финал, варианты пути
        ],
        photo: [
            'https://photos.app.goo.gl/6kvnBaBXtaCoQbLv6',
            'https://photos.google.com/share/AF1QipPapDHBgddgVNe5hXYX_wy7eEM1aRzv6Nq7Sg8lkIMmZ3DyXJNRv--bG3mG7VH61w?key=S0FSUUdGQzJTbWpiREJzUXRRb0wzMFZtbEcxT1B3' // организаторы
        ],
        video: [
            'https://youtu.be/6X40Hv7DG8o',
            'https://youtu.be/NsjOxRdbeZ0',
            'https://www.svtplay.se/video/eZxgmRp/orientering-vm/knockout-sprint-mixad' // SVT Play
        ],
        coord: [44.407222, 8.933889],
        fmt: 'knock-out',
        start: 'WOC'
    },
    {
        id: 'IOF_20260711_1',
        parent: 'MAJOR_20260706_1',
        date: '2026-07-11',
        name: 'WOC #4, спринт-эстафета',
        place: 'Genova, Italy (Генуя, Италия)',
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8991&championshipId=157&eventClassId=18346'
        ],
        gps: {
            '1': 'https://www.tulospalvelu.fi/gps/2026wocSR1/',
            '2': 'https://www.tulospalvelu.fi/gps/2026wocSR2/',
            '3': 'https://www.tulospalvelu.fi/gps/2026wocSR3/',
            '4': 'https://www.tulospalvelu.fi/gps/2026wocSR4/'
        },
        maps: [
            // 'https://news.worldofo.com/2026/07/12/woc-2026-sprint-relay-maps-and-results/',
            // 'https://omaps.worldofo.com/?id=393243',
            'https://www.tulospalvelu.fi/gps/2026wocSR4/map',
            // 'https://omaps.worldofo.com/?id=393244',
            'https://www.tulospalvelu.fi/gps/2026wocSR3/map',
            // 'https://omaps.worldofo.com/?id=393245',
            // 'https://omaps.worldofo.com/?id=393246',
            // GPSSeuranta
            // 'https://www.tulospalvelu.fi/gps/2026wocSR1/map', // duplicate of https://www.tulospalvelu.fi/gps/2026wocSR4/map
            // 'https://www.tulospalvelu.fi/gps/2026wocSR2/map', // duplicate of https://www.tulospalvelu.fi/gps/2026wocSR3/map
            // официальная карта (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/07/sprint-relay-tot.pdf', // все этапы
            // карты организаторов (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8991/16f53a1c-d22e-4541-b7bb-7617bcfc532d/SR-map-total.pdf', // все этапы
            'https://eventor-iof-storage.orientering.se/eventdocuments/8991/acf0a0d9-9163-47e4-9a73-551a791ff2c9/SR-routechoices.pdf' // варианты пути
        ],
        photo: [
            'https://photos.app.goo.gl/F69HNeB2SKVf3eRp8',
            'https://photos.app.goo.gl/1deVtX3hXb2S7ACe9' // организаторы
        ],
        video: [
            'https://youtu.be/CvaCKaOLMOU',
            'https://www.svtplay.se/video/8qPkWwB/orientering-vm/sprintstafett-mixad' // SVT Play
        ],
        coord: [44.407222, 8.933889],
        fmt: 'sprint relay',
        start: 'WOC'
    },
    {
        id: 'IOF_20260826_1',
        date: '2026-08-26',
        endDate: '2026-08-30', // по бюллетеню 1: 24-е - приезд, 25-е - модельная
        place: 'Mora, Sweden (Мура, Швеция)',
        name: 'Чемпионат мира (WMTBOC)',
        link: [
            'https://en.wikipedia.org/wiki/World_Mountain_Bike_Orienteering_Championships',
            'https://ru.wikipedia.org/wiki/Чемпионат_мира_по_спортивному_ориентированию_на_велосипедах'
        ],
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8277/bbcaa0e7-f01b-4cc3-a5f9-74e5dbb8ba89/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8277/f425d10b-c7d5-413f-8d36-68c8ad60966d/Bulletin-2.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8277/1804ce0c-765f-4ae2-90e1-5809cecf3834/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8277/8ebb120e-9ebf-4999-85aa-8c643da20356/Bulletin%204.Pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8775&championshipId=167&championshipRaceSubTypeId=2&groupBy=EventClass', // миддл
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8776&championshipId=167&championshipRaceSubTypeId=2&groupBy=EventClass', // лонг
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8777&championshipId=167&championshipRaceSubTypeId=2&groupBy=EventClass', // спринт
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8778&championshipId=167&championshipRaceSubTypeId=2&groupBy=EventClass', // эстафета
            'https://eventor.orienteering.sport/Events/Show/8277' // IOF Eventor
        ],
        gps: {
            'Middle': 'https://www.livelox.com/Events/Show/199289/World-MTB-Orienteering-Championships-middle',
            'Long': 'https://www.livelox.com/Events/Show/199293/World-MTB-Orienteering-Championships-long',
            'Sprint': 'https://www.livelox.com/Events/Show/199430/World-MTB-Orienteering-Championships-sprint',
            'Relay': 'https://www.livelox.com/Events/Show/199442/World-MTB-Orienteering-Championships-relay'
        },
        photo: [
            'https://mediebank.tt.se/p/svenskorientering/album/120920', // миддл
            'https://mediebank.tt.se/p/svenskorientering/album/120921', // лонг
            'https://mediebank.tt.se/p/svenskorientering/album/120922', // спринт
            'https://mediebank.tt.se/p/svenskorientering/album/120923' // эстафета
        ],
        coord: [61.016667, 14.533333],
        type: 'VELO',
        fmt: 'middle, long, sprint, relay',
        start: 'WMTBOC'
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
        bulletin: [
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8247/907e0525-942f-4250-ab1f-894a8f8e2833/Bulletin-1.pdf',
            // 'https://eventor-iof-storage.orientering.se/eventdocuments/8247/3586eb81-7367-4b21-9054-1f3fb7e8db51/Bulletin-3.pdf',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/1dd9b595-fee5-4b2e-be46-3dcfdb6bcc5a/Bulletin%204.Pdf'
        ],
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=170&eventClassId=19119',
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=170&eventClassId=19122',
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=170&eventClassId=19137'
        ],
        maps: [
            // старые карты района (IOF Eventor)
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/074f330e-a14c-4f74-8c9f-ded017c99356/Previous-map_1.jpg',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/85f80e94-4604-4dd2-8055-27412fb9a15b/Previous-map_2.gif',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/1f84047b-158d-4736-86da-449182c973b0/Previous-map_3.gif',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/a2d8f4d3-3120-44f3-a598-3ff064a8b972/Previous-map_4.gif',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/cd7aca69-35a8-4dde-8c9b-8082d0cc6db2/Previous-map_5.gif',
            'https://eventor-iof-storage.orientering.se/eventdocuments/8247/fadd2c71-6c18-4028-b718-989f2570cfe6/Previous-map_6.gif'
        ],
        photo: [
            'https://photo.orienteering.lt/' // галерея организаторов
        ],
        video: [
            'https://tv.orienteering.sport/eoc-owc-4-all-races' // IOF TV, все гонки
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
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8771&championshipId=170&eventClassId=19111', // мужчины, забег 1
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8771&championshipId=170&eventClassId=19112', // мужчины, забег 2
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8771&championshipId=170&eventClassId=19113', // мужчины, забег 3
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8771&championshipId=170&eventClassId=19114', // женщины, забег 1
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8771&championshipId=170&eventClassId=19115', // женщины, забег 2
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8771&championshipId=170&eventClassId=19116' // женщины, забег 3
        ],
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
        maps: [
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26q_map_women_heat1_s.jpg',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26q_map_women_heat2_s.jpg',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26q_map_women_heat3_s.jpg',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26q_map_men_heat1_s.jpg',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26q_map_men_heat2_s.jpg',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26q_map_men_heat3_s.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026eocQualMall/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualM1/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualM2/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualM3/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualWall/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualW1/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualW2/map',
            'https://www.tulospalvelu.fi/gps/2026eocQualW3/map',
            // официальные карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_q-m1_map-scaled.png', // мужчины, забег 1
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_q-m2_map-scaled.png', // мужчины, забег 2
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_q-m3_map-scaled.png', // мужчины, забег 3
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_q-w1_map-scaled.png', // женщины, забег 1
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_q-w2_map-scaled.png', // женщины, забег 2
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_q-w3_map-scaled.png' // женщины, забег 3
        ],
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
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=170&eventClassId=19119', // мужчины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=172&eventClassId=19120', // мужчины, финал B
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=173&eventClassId=19121', // мужчины, финал C
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=170&eventClassId=19122', // женщины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8772&championshipId=172&eventClassId=19123' // женщины, финал B
        ],
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
            'https://www.tulospalvelu.fi/gps/2026eocLongW/map',
            // 'https://omaps.worldofo.com/?id=395899',
            'https://www.tulospalvelu.fi/gps/2026eocLongM/map',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26l_map_men_s.jpg',
            'https://news.worldofo.com/wp-content/uploads/eoc26/eoc26l_map_women_s.jpg',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026eocLongMB/map',
            'https://www.tulospalvelu.fi/gps/2026eocLongWB/map',
            'https://www.tulospalvelu.fi/gps/2026eocLongMC/map',
            // официальные карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_long-m_map-scaled.png', // мужчины
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_long-mb_map-scaled.png', // мужчины, финал B
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_long-mc_map-scaled.png', // мужчины, финал C
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_long-w_map-scaled.png', // женщины
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_long-wb_map-scaled.png' // женщины, финал B
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
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=170&eventClassId=19134', // мужчины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=172&eventClassId=19135', // мужчины, финал B
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=173&eventClassId=19136', // мужчины, финал C
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=170&eventClassId=19137', // женщины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8773&championshipId=172&eventClassId=19138' // женщины, финал B
        ],
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
            'https://www.tulospalvelu.fi/gps/2026eocMiddleMen/map',
            // 'https://omaps.worldofo.com/?id=395922',
            'https://www.tulospalvelu.fi/gps/2026eocMiddleWomen/map',
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026eocMiddleMenB/map',
            'https://www.tulospalvelu.fi/gps/2026eocMiddleWomenB/map',
            'https://www.tulospalvelu.fi/gps/2026eocMiddlemenc/map',
            // официальные карты (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_middle-m_map-scaled.png', // мужчины
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_middle-mb_map-scaled.png', // мужчины, финал B
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_middle-mc_map-scaled.png', // мужчины, финал C
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_middle-w_map-scaled.png', // женщины
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_middle-wb_map-scaled.png' // женщины, финал B
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
        res: [
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8774&championshipId=170&eventClassId=17545', // мужчины
            'https://eventor.orienteering.sport/Events/ChampionshipResultlist?eventId=8774&championshipId=170&eventClassId=17546' // женщины
        ],
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
            // GPSSeuranta
            'https://www.tulospalvelu.fi/gps/2026eocRelayM1/map',
            // 'https://www.tulospalvelu.fi/gps/2026eocRelayM2/map', // duplicate of https://www.tulospalvelu.fi/gps/2026eocRelayM1/map
            'https://www.tulospalvelu.fi/gps/2026eocRelayM3/map',
            'https://www.tulospalvelu.fi/gps/2026eocRelayW1/map',
            // 'https://www.tulospalvelu.fi/gps/2026eocRelayW2/map', // duplicate of https://www.tulospalvelu.fi/gps/2026eocRelayW1/map
            'https://www.tulospalvelu.fi/gps/2026eocRelayW3/map',
            // официальная карта (IOF LIVE)
            'https://orienteering.sport/wp-content/uploads/2026/09/eoc_2026_relay_men_map-scaled.png' // мужчины
        ],
        coord: [54.016667, 23.966667],
        fmt: 'relay',
        start: 'EOC'
    }
];
