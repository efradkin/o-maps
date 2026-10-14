// Поиск по строкам таблицы .o-sheet (по умолчанию) или по произвольному списку.
// Необязательные атрибуты тега <script src="js/sheet-filter.js">:
//   data-items-root   - CSS-селектор контейнера, дочерние элементы которого фильтруются
//                       (например, "#news-list" на странице новостей); без него - строки .o-sheet
//   data-placeholder  - подсказка в поле ввода
//   data-label        - aria-label поля ввода
const SHEET_FILTER_OPTIONS = document.currentScript.dataset;

function sheetFilterAttr(value) {
    return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
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

    function norm(s){
        return (s || '').toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ').trim();
    }

    function apply(){
        let words = norm(input.value).split(' ').filter(Boolean);
        let list  = items(), shown = 0;

        list.forEach(function(el){
            if (el.dataset.hay === undefined) el.dataset.hay = norm(el.textContent);
            let ok = words.every(function(w){ return el.dataset.hay.indexOf(w) >= 0; });
            el.hidden = !ok;
            if (ok) shown++;
        });

        wrap.classList.toggle('is-active', words.length > 0);
        if (stat) stat.textContent = words.length ? ('найдено ' + shown + ' из ' + list.length) : '';
    }

    function open(){
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        input.focus();
    }
    function close(){
        wrap.classList.remove('is-open');
        btn.setAttribute('aria-expanded','false');
        input.value = '';
        apply();
    }

    btn.addEventListener('click', function(){
        wrap.classList.contains('is-open') ? close() : open();
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
        if (!input.value) close();
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

    // начальный запрос из адреса: ?q=токсово
    const initialQuery = (SEARCH_PARAM || '').trim();
    if (initialQuery) {
        input.value = initialQuery;
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        apply();   // если таблица ещё пуста — реальная фильтрация произойдёт по сигналу наблюдателя
    }
});
