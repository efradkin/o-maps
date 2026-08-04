/* =========================================================================
   O-Maps · theme-toggle.js
   Переключатель светлой / тёмной темы.

   Два состояния: светлая ⇄ тёмная. По умолчанию светлая.
   Выбор запоминается в localStorage под ключом 'omapsTheme'.
   Системная настройка (prefers-color-scheme) намеренно не учитывается.

   Подключается ко всем страницам, но кнопку создаёт только на главной —
   там есть строка «Новости / Контакты», куда она встаёт. На остальных
   страницах скрипт лишь применяет выбранную тему. Разметку править не нужно.

   Работает в паре с блоками [15] и [16] в css/theme.css.

   ВАЖНО: подключать синхронно, БЕЗ defer и async, в <head>
   (это делает install-theme.py):
       <script src="js/theme-toggle.js?v=1"></script>
   Класс темы должен встать на <html> до первой отрисовки. С defer скрипт
   выполнится после разбора документа, и тёмная тема мигнёт белым.
   ========================================================================= */
(function () {
    'use strict';

    var KEY = 'omapsTheme';
    var DEFAULT = 'light';

    var VIEW = {
        light: { icon: '🌙', label: 'Включить тёмную тему' },
        dark:  { icon: '☀️', label: 'Включить светлую тему' }
    };

    function read() {
        try {
            return localStorage.getItem(KEY) === 'dark' ? 'dark' : DEFAULT;
        } catch (e) {
            return DEFAULT;
        }
    }

    function write(mode) {
        try {
            localStorage.setItem(KEY, mode);
        } catch (e) { /* приватный режим — просто не запоминаем */ }
    }

    /* Единственное место, где меняется класс на <html>.
       То же самое делает inline-сниппет в <head> — до первой отрисовки. */
    function paint(mode) {
        var root = document.documentElement;
        root.classList.toggle('o-dark', mode === 'dark');
        root.classList.toggle('o-light', mode !== 'dark');
    }

    function refreshButton(button, mode) {
        if (!button) return;
        var view = VIEW[mode];
        button.querySelector('.o-theme-toggle__icon').textContent = view.icon;
        button.setAttribute('title', view.label);
        button.setAttribute('aria-label', view.label);
        button.setAttribute('data-theme-mode', mode);
    }

    function makeButton(extraClass) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'o-theme-toggle' + (extraClass ? ' ' + extraClass : '');
        button.innerHTML = '<span class="o-theme-toggle__icon" aria-hidden="true"></span>';
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var next = read() === 'dark' ? 'light' : 'dark';
            write(next);
            paint(next);
            refreshButton(button, next);
        });
        return button;
    }

    /* --- поиск места для кнопки ------------------------------------- */

    /* Кнопка ставится только на главной, в строку «Новости / Контакты».
       На остальных страницах шапка узкая, и на телефоне кнопка отъедала бы
       место у заголовка. Выбор темы хранится в localStorage, поэтому
       переключённая на главной тема действует на всём сайте.

       Если понадобится добавить кнопку куда-то ещё — поставьте в разметке
       атрибут data-theme-toggle на любой элемент, кнопка встанет внутрь него. */
    function mount() {
        var custom = document.querySelector('[data-theme-toggle]');
        if (custom) {
            var b0 = makeButton();
            custom.appendChild(b0);
            return b0;
        }

        var contacts = document.querySelector('.contacts-links .text-end');
        if (contacts) {
            var b1 = makeButton('o-theme-toggle--inline');
            contacts.insertBefore(b1, contacts.firstChild);
            return b1;
        }

        return null;   // не главная — кнопки нет, только применение темы
    }

    function mountButton() {
        var button = mount();
        if (button) refreshButton(button, read());
    }

    /* --- запуск ------------------------------------------------------ */

    paint(read());

    /* тема в других вкладках должна меняться синхронно */
    window.addEventListener('storage', function (event) {
        if (event.key !== KEY) return;
        var mode = read();
        paint(mode);
        refreshButton(document.querySelector('.o-theme-toggle'), mode);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountButton);
    } else {
        mountButton();
    }
})();
