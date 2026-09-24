/*
 * start-view.js — выбор представления страницы старта:
 * компактное (start.html) или подробное (start-details.html).
 *
 * По умолчанию на широком экране (десктоп, планшет в альбомной ориентации)
 * открывается подробное представление, на узком (телефон) — компактное.
 * Явный выбор пользователя (клик по переключателю «Подробно» / «Компактно»)
 * запоминается в localStorage и дальше важнее ширины экрана.
 *
 * Подключается первым скриптом в <head> обеих страниц: если нужна другая
 * страница, переходим сразу, через location.replace() (кнопка «Назад» не
 * зацикливается), не дожидаясь загрузки тяжёлых скриптов с картами и
 * календарями. Параметры адреса (start, tab и прочие) и #якорь сохраняются.
 *
 * На страницу переключателя: onclick="rememberStartView('details')" (или 'compact').
 */

const START_VIEW_KEY = 'startView';
const START_VIEW_PAGES = {compact: 'start.html', details: 'start-details.html'};
// У этих стартов свои страницы (start.html переадресует на них сама).
const START_VIEW_EXCLUDED = ['KKM', 'VOLKOV_A'];
const START_VIEW_WIDE_SCREEN = '(min-width: 1000px)';

function rememberStartView(view) {
    try {
        localStorage.setItem(START_VIEW_KEY, view);
    } catch (e) {
        // localStorage недоступен (приватный режим и т.п.) - просто не запоминаем
    }
}

function preferredStartView() {
    let view = null;
    try {
        view = localStorage.getItem(START_VIEW_KEY);
    } catch (e) {
        // нет доступа - выбираем по ширине экрана
    }
    if (view === 'compact' || view === 'details') {
        return view;
    }
    return window.matchMedia && window.matchMedia(START_VIEW_WIDE_SCREEN).matches ? 'details' : 'compact';
}

(function redirectToPreferredStartView() {
    const path = window.location.pathname;
    const page = path.slice(path.lastIndexOf('/') + 1);
    const current = Object.keys(START_VIEW_PAGES).find(v => START_VIEW_PAGES[v] === page);
    if (!current) {
        return;
    }
    const start = new URLSearchParams(window.location.search).get('start');
    if (!start || START_VIEW_EXCLUDED.includes(start)) {
        return; // без старта обе страницы показывают подсказку - переходить незачем
    }
    const preferred = preferredStartView();
    if (preferred !== current) {
        window.location.replace(START_VIEW_PAGES[preferred] + window.location.search + window.location.hash);
    }
})();
