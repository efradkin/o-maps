/* Мобильное дополнение к штатному календарю O-Maps.
   Десктопную версию не изменяет. */
(() => {
  'use strict';

  // --- Настройки компактных карточек -------------------------------------
  // Свёрнутая карточка показывает только две строки: «дата + название» и
  // «место + вид спорта». Остальное раскрывается тапом.
  const OM_CARDS = {
    collapse: true,           // сворачивать карточки при загрузке
    autoExpandCurrent: false, // ближайшие старты (tr.current) сразу раскрыты
    tapWholeCard: true,       // раскрывать тапом по всей карточке, не только по дате
    expandAllButton: true,    // кнопка «развернуть все» в панели фильтров
    expandOnSearch: true      // при поиске раскрывать найденные карточки
  };

  const EXPAND_ALL_KEY = 'om-calendar-expand-all';

  // --- Настройки верхней панели ------------------------------------------
  // Панель (заголовок + фильтры) по умолчанию скрыта и выезжает при прокрутке
  // вверх; кнопка-булавка в заголовке закрепляет её насовсем.
  const OM_PANEL = {
    autoHide: true,        // прятать панель при загрузке и при прокрутке вниз
    pinButton: true,       // кнопка «закрепить / открепить» в заголовке
    scrollThreshold: 8,    // порог реакции на прокрутку, px
    touchThreshold: 28     // порог протяжки пальцем в самом верху списка, px
  };

  const PIN_PANEL_KEY = 'om-calendar-pin-panel';

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
  // Селектор года есть только в общем календаре. В лыжном (calendar-ski.html)
  // его нет, поэтому обязательным он не является: обязателен лишь селектор
  // вида соревнований, который присутствует на обеих страницах.
  const yearSelector = $('#year_selector');
  const typeSelector = $('#event_type_selector');
  const oldChecks = $('.header_checkbox_container');

  if (!filters || !table || !tbody || !typeSelector) return;

  document.body.classList.add('om-mobile-enhanced');

  // Число штатных колонок таблицы. В общем календаре их восемь, в
  // одновидовом (лыжном) — пять: «Результаты», «Трансляции» и «Прочее»
  // там не выводятся вовсе (см. onlyOneSport в utils.js/calendar.js).
  // От этого зависит раскладка свёрнутой карточки, поэтому признак
  // выносим в класс на <html> и дальше всё решает CSS.
  const columnCount = table.querySelectorAll('thead th').length;
  const compactLayout = columnCount > 0 && columnCount <= 5;
  document.documentElement.classList.toggle('om-mobile-compact', compactLayout);

  const controls = document.createElement('div');
  controls.className = 'om-mobile-controls';

  const search = document.createElement('input');
  search.type = 'search';
  search.className = 'om-mobile-search';
  search.placeholder = 'Поиск по названию, месту, описанию…';
  search.autocomplete = 'off';
  search.spellcheck = false;
  search.setAttribute('aria-label', 'Поиск по календарю');

  // Целевая страница карты у каждого календаря своя (spb.html, tracks.html…).
  // Берём её из штатной ссылки в заголовке, а не задаём жёстко.
  const headerMapLink = document.getElementById('tracks_map_link');
  const mapPage = headerMapLink?.getAttribute('href')?.split('?')[0] || 'spb.html';

  const mapButton = document.createElement('a');
  mapButton.className = 'om-mobile-map-button';
  mapButton.href = `${mapPage}?calendar`;
  mapButton.target = '_self';
  // gotoMap() переносит текущие параметры адреса на карту. Если его нет,
  // остаётся обычный переход по href.
  mapButton.addEventListener('click', event => {
    if (typeof gotoMap !== 'function') return;
    event.preventDefault();
    gotoMap(mapPage, 'calendar');
  });
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
  // Используем штатные выпадающие списки вместо мобильных chips.
  // Селекторов может быть один или два — от их числа зависит сетка колонок,
  // поэтому проставляем класс om-mobile-controls-1 / om-mobile-controls-2.
  const selectors = [yearSelector, typeSelector].filter(Boolean);
  controls.classList.add(`om-mobile-controls-${selectors.length}`);
  controls.append(...selectors, mapButton, homeButton, search);

  const localChecks = document.createElement('div');
  localChecks.className = 'om-mobile-checks';

  // Поиск и чекбоксы занимают разные строки: на узких экранах это
  // сохраняет место для заголовков карточек.
  filters.prepend(controls);
  controls.after(search);
  search.after(localChecks);
  if (oldChecks) localChecks.appendChild(oldChecks);

  let expandAll = false;
  try {
    expandAll = localStorage.getItem(EXPAND_ALL_KEY) === '1';
  } catch (e) { /* приватный режим — просто работаем без запоминания */ }

  let expandAllButton = null;
  if (OM_CARDS.collapse && OM_CARDS.expandAllButton) {
    expandAllButton = document.createElement('button');
    expandAllButton.type = 'button';
    expandAllButton.className = 'om-mobile-expand-all';
    // Пиктограмма — два шеврона один под другим. Направление меняется
    // вместе с состоянием: ▾▾ развернуть все, ▴▴ свернуть все.
    expandAllButton.innerHTML = '<span></span><span></span>';
    expandAllButton.addEventListener('click', () => {
      expandAll = !expandAll;
      try {
        localStorage.setItem(EXPAND_ALL_KEY, expandAll ? '1' : '0');
      } catch (e) { /* игнорируем */ }
      updateExpandAllButton();
      applyExpandAll();
    });
    // Кнопка встаёт в один ряд с чекбоксами, сразу за карандашом правки «моих».
    (oldChecks ?? localChecks).appendChild(expandAllButton);
    updateExpandAllButton();
  }

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

    if (OM_CARDS.collapse) setupCollapse(row, cells);
  }

  // --- Свёртывание карточек ----------------------------------------------

  // Ячейка считается содержательной, если в ней есть текст или картинка/ссылка.
  function hasContent(cell) {
    if (!cell) return false;
    if (cell.textContent.trim()) return true;
    return Boolean(cell.querySelector('img, a, input, svg'));
  }

  // Есть ли в карточке что-то, кроме двух первых строк:
  // формат старта (<small> внутри ячейки вида спорта), результаты,
  // трансляции/отчёты, прочее.
  function isCollapsible(cells) {
    if (cells[4]?.querySelector('small')) return true;
    return hasContent(cells[5]) || hasContent(cells[6]) || hasContent(cells[7]);
  }

  function setRowExpanded(row, expanded) {
    // Карточки, в которых нечего раскрывать, тоже остаются в компактной
    // двухстрочной раскладке: иначе они выглядят как «залипшие раскрытыми».
    // Скрывать в них нечего — соответствующие ячейки пусты.
    const open = row.classList.contains('om-collapsible') && expanded;
    row.classList.toggle('om-collapsed', !open);
    row.classList.toggle('om-expanded', open);
    // Атрибуты не отслеживаются MutationObserver'ом, поэтому безопасны.
    row.children[1]?.setAttribute('aria-expanded', String(open));
  }

  function defaultExpanded(row) {
    if (expandAll) return true;
    return OM_CARDS.autoExpandCurrent && row.classList.contains('current');
  }

  // Первичная настройка карточки. Вызывается один раз на строку: содержимое
  // строки после отрисовки не меняется, а classifyRows() бегает по всем
  // строкам на каждый символ поиска.
  function setupCollapse(row, cells) {
    if (row.classList.contains('om-collapse-ready')) return;
    row.classList.add('om-collapse-ready');
    const collapsible = isCollapsible(cells);
    row.classList.toggle('om-collapsible', collapsible);

    const dateCell = cells[1];
    if (dateCell && collapsible) {
      dateCell.setAttribute('role', 'button');
      dateCell.setAttribute('tabindex', '0');
      dateCell.setAttribute('title', 'Развернуть / свернуть карточку');
    }
    setRowExpanded(row, defaultExpanded(row));
  }

  function toggleRow(row) {
    row.classList.remove('om-search-open');
    setRowExpanded(row, row.classList.contains('om-collapsed'));
  }

  // Один делегированный обработчик: строки таблицы регулярно перерисовываются.
  function bindCollapseHandlers() {
    tbody.addEventListener('click', event => {
      if (!OM_CARDS.collapse) return;
      const row = event.target.closest?.('tr.om-collapsible');
      if (!row || !tbody.contains(row)) return;

      const onDate = row.children[1]?.contains(event.target);
      if (!onDate) {
        if (!OM_CARDS.tapWholeCard) return;
        // Ссылки, чекбоксы и штатные раскрывалки внутри карточки работают как обычно.
        if (event.target.closest('a, button, input, label, select, textarea, .toggle-button')) return;
        // Не мешаем выделению текста.
        if (String(window.getSelection?.() ?? '').length > 2) return;
      }
      toggleRow(row);
    });

    tbody.addEventListener('keydown', event => {
      if (!OM_CARDS.collapse) return;
      if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
      const cell = event.target.closest?.('td[role="button"]');
      const row = cell?.closest('tr.om-collapsible');
      if (!row) return;
      event.preventDefault();
      toggleRow(row);
    });
  }

  // Поиск ищет и по скрытому тексту, поэтому найденные карточки раскрываем,
  // а при очистке поля возвращаем в исходное состояние.
  function applySearchExpansion(query) {
    if (!OM_CARDS.collapse || !OM_CARDS.expandOnSearch) return;
    if (query) {
      for (const row of eventRows()) {
        if (!row.hidden && row.classList.contains('om-collapsible') && row.classList.contains('om-collapsed')) {
          row.classList.add('om-search-open');
          setRowExpanded(row, true);
        }
      }
    } else {
      for (const row of $$(':scope > tr.om-search-open', tbody)) {
        row.classList.remove('om-search-open');
        setRowExpanded(row, defaultExpanded(row));
      }
    }
  }

  function applyExpandAll() {
    for (const row of eventRows()) {
      row.classList.remove('om-search-open');
      setRowExpanded(row, defaultExpanded(row));
    }
  }

  function updateExpandAllButton() {
    if (!expandAllButton) return;
    const glyph = expandAll ? '▴' : '▾';
    for (const span of expandAllButton.children) {
      span.textContent = glyph;
    }
    const label = expandAll ? 'Свернуть все карточки' : 'Развернуть все карточки';
    expandAllButton.title = label;
    expandAllButton.setAttribute('aria-label', label);
    expandAllButton.setAttribute('aria-pressed', String(expandAll));
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
    applySearchExpansion(query);
  }

  function syncFilterHeight() {
    const h = Math.ceil(filters.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--om-filter-height', `${h}px`);

    // Высота заголовка нужна, чтобы вычислить, на сколько поднимать панель.
    const header = document.querySelector('header.page-header');
    if (header) {
      const hh = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--om-header-h', `${hh}px`);
    }
  }

  // --- Автоскрытие верхней панели ----------------------------------------

  const scroller = $('.o-sheet-wrapper');
  let panelPinned = false;
  try {
    panelPinned = localStorage.getItem(PIN_PANEL_KEY) === '1';
  } catch (e) { /* приватный режим */ }

  let panelHidden = false;
  let pinButton = null;

  function setPanelHidden(hidden) {
    const next = OM_PANEL.autoHide && !panelPinned && hidden;
    if (next === panelHidden) return;
    panelHidden = next;
    document.documentElement.classList.toggle('om-chrome-hidden', next);
  }

  function updatePinButton() {
    if (!pinButton) return;
    const label = panelPinned ? 'Открепить панель' : 'Закрепить панель';
    pinButton.title = label;
    pinButton.setAttribute('aria-label', label);
    pinButton.setAttribute('aria-pressed', String(panelPinned));
  }

  function setupPanelAutoHide() {
    if (!OM_PANEL.autoHide || !scroller) return;

    // Кнопка-булавка живёт в правой части заголовка, рядом с меню.
    if (OM_PANEL.pinButton) {
      const actions = document.querySelector('.page-header-actions');
      if (actions) {
        pinButton = document.createElement('button');
        pinButton.type = 'button';
        pinButton.className = 'om-mobile-pin';
        pinButton.textContent = '📌';
        pinButton.addEventListener('click', () => {
          panelPinned = !panelPinned;
          try {
            localStorage.setItem(PIN_PANEL_KEY, panelPinned ? '1' : '0');
          } catch (e) { /* игнорируем */ }
          updatePinButton();
          if (panelPinned) setPanelHidden(false);
        });
        actions.prepend(pinButton);
        updatePinButton();
      }
    }

    // Стартовое состояние применяем без анимации, иначе панель «уезжает»
    // на глазах у пользователя при каждой загрузке страницы.
    if (!panelPinned) {
      panelHidden = true;
      document.documentElement.classList.add('om-chrome-hidden');
    }
    requestAnimationFrame(() => {
      document.documentElement.classList.add('om-chrome-animated');
    });

    let lastScroll = scroller.scrollTop;
    scroller.addEventListener('scroll', () => {
      const y = scroller.scrollTop;
      const dy = y - lastScroll;
      if (Math.abs(dy) < OM_PANEL.scrollThreshold) return;
      lastScroll = y;
      // Прокрутка вниз убирает панель, вверх — возвращает.
      setPanelHidden(dy > 0 && y > 12);
    }, { passive: true });

    // В самом верху списка события scroll уже не приходят, поэтому там
    // ловим протяжку пальцем вниз (и колесо мыши — для узких окон на ПК).
    let touchStartY = null;
    scroller.addEventListener('touchstart', event => {
      touchStartY = event.touches[0]?.clientY ?? null;
    }, { passive: true });

    scroller.addEventListener('touchmove', event => {
      if (touchStartY === null || !panelHidden) return;
      const delta = (event.touches[0]?.clientY ?? touchStartY) - touchStartY;
      if (delta > OM_PANEL.touchThreshold && scroller.scrollTop <= 0) {
        setPanelHidden(false);
      }
    }, { passive: true });

    scroller.addEventListener('touchend', () => { touchStartY = null; }, { passive: true });

    scroller.addEventListener('wheel', event => {
      if (event.deltaY < 0 && scroller.scrollTop <= 0) setPanelHidden(false);
    }, { passive: true });
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

  if (OM_CARDS.collapse) bindCollapseHandlers();
  setupPanelAutoHide();

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
