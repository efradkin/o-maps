const SHEET_FILTER_CONTROL = `
        <span class="cal-search" id="calSearch">
          <input type="search" id="calSearchInput" class="cal-search__input" placeholder="Место, старт и пр…" autocomplete="off" spellcheck="false" aria-label="Поиск по календарю">
          <button type="button" id="calSearchBtn" class="cal-search__btn" title="Поиск (/)" aria-label="Поиск" aria-expanded="false"><img src="images/search_24.png" alt="Поиск"></button>
        </span>
`;

document.currentScript.insertAdjacentHTML('beforebegin', SHEET_FILTER_CONTROL);

document.addEventListener("DOMContentLoaded", () => {
    const wrap  = document.getElementById('calSearch');
    const btn   = document.getElementById('calSearchBtn');
    const input = document.getElementById('calSearchInput');
    const stat  = document.getElementById('calSearchStatus');
    const tbody = document.querySelector('.o-sheet'); // ← ваш селектор

    const DELAY = 350;   // мс
    let timer = null;

    function norm(s){
        return (s || '').toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ').trim();
    }

    function apply(){
        let words = norm(input.value).split(' ').filter(Boolean);
        let rows  = tbody.rows, shown = 0;

        for (let i = 1; i < rows.length; i++){
            let tr = rows[i];
            if (tr.dataset.hay === undefined) tr.dataset.hay = norm(tr.textContent);
            let ok = words.every(function(w){ return tr.dataset.hay.indexOf(w) >= 0; });
            tr.hidden = !ok;
            if (ok) shown++;
        }

        wrap.classList.toggle('is-active', words.length > 0);
        if (stat) stat.textContent = words.length ? ('найдено ' + shown + ' из ' + rows.length) : '';
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

    // таблицу перестроил ваш код → чистим кэш и переприменяем фильтр
    new MutationObserver(function(){
        for (let i = 0; i < tbody.rows.length; i++) delete tbody.rows[i].dataset.hay;
        if (input.value) apply();
    }).observe(tbody, { childList: true });
});