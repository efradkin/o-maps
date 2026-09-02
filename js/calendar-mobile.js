/* Мобильное дополнение к штатному календарю O-Maps.
   Десктопную версию не изменяет. */
(() => {
  'use strict';

  // Режим интерфейса выбирается ОДИН РАЗ при первоначальной загрузке.
  // Последующие изменения ширины окна не переключают мобильный/десктопный вид.
  const initialMobileMode = window.matchMedia('(max-width: 768px)').matches;
  window.omMobileUI = initialMobileMode;
  if (useMobileUI !== true) {
    if ((useMobileUI === false) || !initialMobileMode) return;
  }

  // CSS мобильного слоя теперь активируется этим классом, а не динамическим
  // @media. Класс намеренно не снимается при resize/orientationchange.
  document.documentElement.classList.add('om-mobile-enhanced');

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const filters = $('.sheet-filters');
  const table = $('.o-main-table');
  const tbody = table?.querySelector('tbody');
  const yearSelector = $('#year_selector');
  const typeSelector = $('#event_type_selector');
  const oldChecks = $('.header_checkbox_container');

  if (!filters || !table || !tbody || !yearSelector || !typeSelector) return;

  document.body.classList.add('om-mobile-enhanced');

  const controls = document.createElement('div');
  controls.className = 'om-mobile-controls';

  const search = document.createElement('input');
  search.type = 'search';
  search.className = 'om-mobile-search';
  search.placeholder = 'Поиск по названию, месту, описанию…';
  search.autocomplete = 'off';
  search.spellcheck = false;
  search.setAttribute('aria-label', 'Поиск по календарю');

  const mapButton = document.createElement('a');
  mapButton.className = 'om-mobile-map-button';
  mapButton.href = 'spb.html?calendar';
  mapButton.target = '_self';
  mapButton.title = 'На карте';
  mapButton.setAttribute('aria-label', 'На карте');
  mapButton.innerHTML = '<img src="images/map_24.png" alt="">';

  const homeButton = document.createElement('a');
  homeButton.className = 'om-mobile-home-button';
  homeButton.href = 'index.html';
  homeButton.target = '_self';
  homeButton.title = 'Главная страница';
  homeButton.setAttribute('aria-label', 'Главная страница');
  homeButton.innerHTML = '<img src="images/home.png" alt="">';

  // Первая строка: год + вид соревнований + кнопки. Вторая строка: поиск.
  // Используем штатный выпадающий список вида соревнований вместо мобильных chips.
  controls.append(yearSelector, typeSelector, mapButton, homeButton, search);

  const localChecks = document.createElement('div');
  localChecks.className = 'om-mobile-checks';

  // Поиск и чекбоксы занимают разные строки: на узких экранах это
  // сохраняет место для заголовков карточек.
  filters.prepend(controls);
  controls.after(search);
  search.after(localChecks);
  if (oldChecks) localChecks.appendChild(oldChecks);

  function organizeMobileHeader() {
    const header = document.querySelector('header.page-header');
    const aboutButton = document.querySelector('.about-button');
    if (!header || !aboutButton) return;

    // writeWelcomeButton() штатно добавляет жёлтую кнопку прямым потомком body.
    // На мобильном виде переносим её внутрь header, чтобы вся верхняя панель была
    // одной строкой: информация | заголовок | меню.
    if (aboutButton.parentElement !== header) {
      header.prepend(aboutButton);
    }
  }

  function normalizeText(value) {
    return String(value || '')
      .toLocaleLowerCase('ru')
      .replace(/ё/g, 'е')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function enhanceEventRow(row) {
    const cells = Array.from(row.children).filter(el => el.tagName === 'TD');
    if (cells.length < 2) return;

    // В исходной табличной разметке диапазон дат может быть разбит <br>.
    // На мобильной зелёной плашке дата должна оставаться одной строкой.
    if (cells[1] && !cells[1].classList.contains('om-mobile-date-ready')) {
      cells[1].querySelectorAll('br').forEach(br => br.replaceWith(document.createTextNode(' ')));
      cells[1].classList.add('om-mobile-date-ready');
    }

    // Только семантические классы. Содержимое ячеек не переносим: перемещение
    // узлов из TD в DIV внутри TR оказалось излишне хрупким. Их взаимное
    // расположение теперь целиком задаёт CSS Grid.
    const classes = [
      [4, 'om-mobile-type-cell'],
      [5, 'om-mobile-results-cell'],
      [6, 'om-mobile-reports-cell'],
      [7, 'om-mobile-info-cell']
    ];
    for (const [index, className] of classes) {
      cells[index]?.classList.add(className);
    }
  }

  function classifyRows() {
    for (const row of $$(':scope > tr', tbody)) {
      const month = row.querySelector('td.month-row');
      row.classList.toggle('om-month-row', Boolean(month));
      row.classList.toggle('om-event-row', !month);
      if (!month) enhanceEventRow(row);
    }
  }

  function eventRows() {
    return $$(':scope > tr.om-event-row', tbody);
  }

  function monthRows() {
    return $$(':scope > tr.om-month-row', tbody);
  }

  function setRowVisible(row, visible) {
    row.hidden = !visible;
    if (visible) {
      row.style.removeProperty('display');
    } else {
      // В карточном CSS строки имеют display:grid !important.
      // Поэтому для фильтрации задаём display:none тоже напрямую с !important,
      // чтобы CSS карточки не мог оставить строку видимой.
      row.style.setProperty('display', 'none', 'important');
    }
  }

  function updateMonthVisibility() {
    for (const monthRow of monthRows()) {
      let cursor = monthRow.nextElementSibling;
      let hasVisibleEvent = false;
      while (cursor && !cursor.classList.contains('om-month-row')) {
        if (cursor.classList.contains('om-event-row') && !cursor.hidden) {
          hasVisibleEvent = true;
          break;
        }
        cursor = cursor.nextElementSibling;
      }
      setRowVisible(monthRow, hasVisibleEvent);
    }
  }

  function updateEmptyState(visibleCount) {
    let empty = $('.om-mobile-empty');
    if (visibleCount === 0) {
      if (!empty) {
        empty = document.createElement('div');
        empty.className = 'om-mobile-empty';
        empty.textContent = 'Ничего не найдено.';
        table.parentElement?.appendChild(empty);
      }
    } else {
      empty?.remove();
    }
  }

  function applyMobileFilters() {
    classifyRows();
    const query = normalizeText(search.value);
    let visible = 0;
    const rows = eventRows();

    for (const row of rows) {
      const matchesSearch = !query || normalizeText(row.textContent).includes(query);
      setRowVisible(row, matchesSearch);
      if (matchesSearch) visible++;
    }

    updateMonthVisibility();
    updateEmptyState(visible);
  }

  function syncFilterHeight() {
    const h = Math.ceil(filters.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--om-filter-height', `${h}px`);
  }

  let scheduled = false;
  function scheduleRefresh() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      organizeMobileHeader();
      applyMobileFilters();
      syncFilterHeight();
    });
  }

  // Фильтруем сразу при каждом изменении текста.
  // 'input' — стандартное событие для живого поиска; 'search' дополнительно
  // обрабатывает очистку поля штатной кнопкой у input[type="search"].
  search.addEventListener('input', applyMobileFilters);
  search.addEventListener('search', applyMobileFilters);

  // Штатные переключатели "важные" и "мои" перерисовывают tbody. После
  // перерисовки автоматически возвращаем поиск и карточный вид.
  const observer = new MutationObserver(scheduleRefresh);
  observer.observe(tbody, { childList: true, subtree: true });

  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(syncFilterHeight);
    resizeObserver.observe(filters);
  } else {
    window.addEventListener('resize', syncFilterHeight, { passive: true });
  }

  // calendar.js наполняет таблицу в window.onload. Наш файл следует подключать
  // после calendar.js, но на случай иной последовательности делаем несколько
  // безопасных проходов.
  document.addEventListener('DOMContentLoaded', scheduleRefresh, { once: true });
  window.addEventListener('load', () => {
    organizeMobileHeader();
    scheduleRefresh();
    setTimeout(scheduleRefresh, 50);
    setTimeout(scheduleRefresh, 350);
  }, { once: true });

  scheduleRefresh();
})();
