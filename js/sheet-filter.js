// Поиск по строкам таблицы .o-sheet (по умолчанию) или по произвольному списку.
// Необязательные атрибуты тега <script src="js/sheet-filter.js">:
//   data-items-root   - CSS-селектор контейнера, дочерние элементы которого фильтруются
//                       (например, "#news-list" на странице новостей); без него - строки .o-sheet
//   data-placeholder  - подсказка в поле ввода
//   data-label        - aria-label поля ввода
//   data-always-open  - сразу показывать поле раскрытым и не сворачивать его
const SHEET_FILTER_OPTIONS = document.currentScript.dataset;
const SHEET_FILTER_ALWAYS_OPEN = SHEET_FILTER_OPTIONS.alwaysOpen === 'true';

function sheetFilterAttr(value) {
    return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Единая нормализация и разбор поискового запроса для настольного и мобильного поиска.
// Пробел между словами означает OR; AND (только заглавными) и && связывают условия через AND.
// Фразы в двойных кавычках считаются одним поисковым условием.
function sheetFilterNormalize(value) {
    return String(value || '')
        .toLocaleLowerCase('ru')
        .replace(/ё/g, 'е')
        .replace(/\s+/g, ' ')
        .trim();
}

function sheetFilterParseQuery(query) {
    const source = String(query || '');
    const tokens = [];
    let i = 0;

    while (i < source.length) {
        while (i < source.length && /\s/.test(source[i])) i++;
        if (i >= source.length) break;

        if (source[i] === '"') {
            const end = source.indexOf('"', i + 1);
            const phrase = end < 0 ? source.slice(i + 1) : source.slice(i + 1, end);
            const value = sheetFilterNormalize(phrase);
            if (value) tokens.push({ type: 'term', value });
            i = end < 0 ? source.length : end + 1;
            continue;
        }

        if (source.startsWith('&&', i)) {
            tokens.push({ type: 'and', value: '&&' });
            i += 2;
            continue;
        }
        if (source.startsWith('AND', i) &&
            (i + 3 === source.length || /\s/.test(source[i + 3]) || source.startsWith('&&', i + 3))) {
            tokens.push({ type: 'and', value: 'AND' });
            i += 3;
            continue;
        }

        const start = i;
        while (i < source.length && !/\s/.test(source[i]) && !source.startsWith('&&', i)) i++;
        const word = source.slice(start, i);
        const value = sheetFilterNormalize(word);
        if (value) tokens.push({ type: 'term', value });
    }

    // AND является оператором только между двумя поисковыми условиями.
    // В остальных позициях он воспринимается как обычное слово.
    for (let n = 0; n < tokens.length; n++) {
        if (tokens[n].type === 'and' &&
            (n === 0 || n === tokens.length - 1 ||
             tokens[n - 1].type !== 'term' || tokens[n + 1].type !== 'term')) {
            tokens[n] = { type: 'term', value: sheetFilterNormalize(tokens[n].value) };
        }
    }

    // Каждая группа — набор AND-условий; сами группы объединяются через OR.
    const groups = [];
    for (let n = 0; n < tokens.length; n++) {
        const token = tokens[n];
        if (token.type !== 'term') continue;
        if (n > 0 && tokens[n - 1].type === 'and' && groups.length) {
            groups[groups.length - 1].push(token.value);
        } else {
            groups.push([token.value]);
        }
    }
    return groups;
}

function sheetFilterMatchesParsed(groups, text) {
    if (!groups.length) return true;
    const hay = sheetFilterNormalize(text);
    return groups.some(group => group.every(term => hay.includes(term)));
}

const SHEET_FILTER_CONTROL = `
        <span class="cal-search" id="calSearch">
          <input type="search" id="calSearchInput" class="cal-search__input" placeholder="${sheetFilterAttr(SHEET_FILTER_OPTIONS.placeholder || 'Место, старт и пр…')}" autocomplete="off" spellcheck="false" aria-label="${sheetFilterAttr(SHEET_FILTER_OPTIONS.label || 'Поиск по календарю')}">
          <button type="button" id="calSearchBtn" class="cal-search__btn" title="Поиск (/)" aria-label="Поиск" aria-expanded="false"><img src="images/search_24.png" alt="Поиск"></button>
        </span>
`;

document.currentScript.insertAdjacentHTML('beforebegin', SHEET_FILTER_CONTROL);

document.addEventListener("DOMContentLoaded", () => {
    const wrap  = document.getElementById('calSearch');
    const btn   = document.getElementById('calSearchBtn');
    const input = document.getElementById('calSearchInput');
    const stat  = document.getElementById('calSearchStatus');
    const itemsRoot = SHEET_FILTER_OPTIONS.itemsRoot;
    // контейнер, за изменениями которого следим, и список фильтруемых элементов
    const root  = itemsRoot ? document.querySelector(itemsRoot) : document.querySelector('.o-sheet');
    // в таблице первая строка - заголовок, её не фильтруем
    const items = itemsRoot ? () => Array.from(root.children) : () => Array.from(root.rows).slice(1);

    const DELAY = 350; // мс, задержка перед фильтрацией

    let timer = null;
    let obsTimer = null;

    function apply(){
        const groups = sheetFilterParseQuery(input.value);
        const hasQuery = groups.length > 0;
        let list = items(), shown = 0;

        list.forEach(function(el){
            if (el.dataset.hay === undefined) el.dataset.hay = sheetFilterNormalize(el.textContent);
            const ok = sheetFilterMatchesParsed(groups, el.dataset.hay);
            el.hidden = !ok;
            if (ok) shown++;
        });

        wrap.classList.toggle('is-active', hasQuery);
        if (stat) stat.textContent = hasQuery ? ('найдено ' + shown + ' из ' + list.length) : '';
    }

    function open(){
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        input.focus();
    }
    function close(){
        input.value = '';
        apply();
        if (SHEET_FILTER_ALWAYS_OPEN) return;
        wrap.classList.remove('is-open');
        btn.setAttribute('aria-expanded','false');
    }

    btn.addEventListener('click', function(){
        if (SHEET_FILTER_ALWAYS_OPEN) {
            open();
        } else {
            wrap.classList.contains('is-open') ? close() : open();
        }
    });

    input.addEventListener('input', function(){
        clearTimeout(timer);
        timer = setTimeout(apply, DELAY);
    });

    input.addEventListener('keydown', function(e){
        if (e.key === 'Enter'){ clearTimeout(timer); apply(); }
        if (e.key === 'Escape'){ clearTimeout(timer); close(); }
    });

    // схлопывать при потере фокуса, если ничего не введено
    input.addEventListener('blur', function(){
        if (!SHEET_FILTER_ALWAYS_OPEN && !input.value) close();
    });

    // горячая клавиша «/» — как на GitHub
    document.addEventListener('keydown', function(e){
        if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)){
            e.preventDefault(); open();
        }
    });

    // таблицу (список) перестроили → чистим кэш и переприменяем фильтр
    new MutationObserver(function(){
        clearTimeout(obsTimer);
        obsTimer = setTimeout(function(){
            items().forEach(function(el){ delete el.dataset.hay; });
            if (input.value) apply();
        }, 50);
    }).observe(root, { childList: true, subtree: true });

    // В постоянно раскрытом режиме показываем поле сразу, не переводя на него фокус.
    if (SHEET_FILTER_ALWAYS_OPEN) {
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
    }

    // начальный запрос из адреса: ?q=токсово
    const initialQuery = (SEARCH_PARAM || '').trim();
    if (initialQuery) {
        input.value = initialQuery;
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        apply();   // если таблица ещё пуста — реальная фильтрация произойдёт по сигналу наблюдателя
    }
});
