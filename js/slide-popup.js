const slidePopupContent = `
    <div id="slidePopup" class="slide-popup" data-from="left" data-corner="top-left" data-offset="20" data-show-delay="2000" data-auto-hide="17000">
        <button class="slide-popup__close" type="button" aria-label="Закрыть">×</button>
        <div class="slide-popup__content">
            <h3>⚠️ Внимание! ⚠️</h3>
            <span></span>
        </div>
    </div>
`;

const slidePopupEl = document.createElement('div');
slidePopupEl.insertAdjacentHTML('beforeend', slidePopupContent);
document.body.appendChild(slidePopupEl);

(function () {
    const popupEl = document.getElementById("slidePopup");
    if (!popupEl) return;

    const from = (popupEl.dataset.from || "right").toLowerCase();                 // left|right|top|bottom
    const corner = (popupEl.dataset.corner || "bottom-right").toLowerCase();      // top-left|top-right|bottom-left|bottom-right
    const offset = parseInt(popupEl.dataset.offset || "16", 10);
    const showDelay = parseInt(popupEl.dataset.showDelay || "0", 10);
    const autoHideMs = parseInt(popupEl.dataset.autoHide || "0", 10);

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // Позиция в выбранном углу
    const isTop = corner.includes("top");
    const isLeft = corner.includes("left");
    popupEl.style.top = isTop ? `${offset}px` : "auto";
    popupEl.style.bottom = !isTop ? `${offset}px` : "auto";
    popupEl.style.left = isLeft ? `${offset}px` : "auto";
    popupEl.style.right = !isLeft ? `${offset}px` : "auto";

    // Как именно прятать/показывать (вылет за экран с выбранной стороны)
    const offscreen =
        from === "left"   ? "translateX(-120%)" :
            from === "right"  ? "translateX(120%)"  :
                from === "top"    ? "translateY(-120%)" :
                    "translateY(120%)"; // bottom

    popupEl.style.setProperty("--offscreen-transform", offscreen);

    let hideTimer = null;
    let removed = false;

    function show() {
        if (removed) return;
        // Даем браузеру применить начальные стили, затем включаем видимость
        requestAnimationFrame(() => {
            popupEl.classList.add("is-visible");
        });

        if (autoHideMs > 0) {
            hideTimer = setTimeout(hide, autoHideMs);
        }
    }

    function hide() {
        if (removed) return;
        clearTimeout(hideTimer);
        popupEl.classList.remove("is-visible");
        popupEl.classList.add("is-hiding");

        const done = () => {
            popupEl.removeEventListener("transitionend", done);
            popupEl.remove();
            removed = true;
        };

        if (prefersReduced) {
            done();
        } else {
            popupEl.addEventListener("transitionend", done);
        }
    }

    // Кнопка закрытия
    const btn = popupEl.querySelector(".slide-popup__close");
    btn?.addEventListener("click", hide);

    // Закрытие по Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hide();
    });

    const contentEl = popupEl.querySelector(".slide-popup__content span");
    contentEl.innerHTML = popupMessage;

    // Старт
    if (prefersReduced) {
        // без анимации: сразу показать и потом скрыть по таймеру
        popupEl.style.transform = "translate3d(0,0,0)";
        popupEl.style.opacity = "1";
        if (autoHideMs > 0) hideTimer = setTimeout(hide, autoHideMs);
    } else {
        window.addEventListener("load", () => setTimeout(show, Math.max(0, showDelay)), { once: true });
    }
})();

// ---- Popup pinning: держит #slidePopup всегда в видимой области ----
(function setupPinnedPopup() {
    function cssEnvPx(name) {
        // Читаем env(safe-area-...) в px (если не поддерживается — 0)
        const root = document.documentElement;
        const tmp = "--__env_tmp";
        root.style.setProperty(tmp, `env(${name}, 0px)`);
        const v = getComputedStyle(root).getPropertyValue(tmp).trim();
        root.style.removeProperty(tmp);
        const n = parseFloat(v);
        return Number.isFinite(n) ? n : 0;
    }

    function getViewport() {
        const vv = window.visualViewport;
        if (vv) {
            return { left: vv.pageLeft, top: vv.pageTop, width: vv.width, height: vv.height };
        }
        return { left: window.scrollX, top: window.scrollY, width: window.innerWidth, height: window.innerHeight };
    }

    function findScrollParent(node) {
        const rootScroller = document.scrollingElement || document.documentElement;
        let el = node instanceof Element ? node : null;

        while (el && el !== document.body && el !== document.documentElement) {
            const cs = getComputedStyle(el);
            const oy = cs.overflowY;
            const ox = cs.overflowX;

            const canY = (oy === "auto" || oy === "scroll" || oy === "overlay") && el.scrollHeight > el.clientHeight + 1;
            const canX = (ox === "auto" || ox === "scroll" || ox === "overlay") && el.scrollWidth > el.clientWidth + 1;

            if (canY || canX) return el;
            el = el.parentElement;
        }
        return rootScroller;
    }

    function pinPopupToViewport(popupEl, anchorEl) {
        // убираем влияние “странных” контейнеров
        document.body.appendChild(popupEl);

        // важное: absolute + координаты от visualViewport
        popupEl.style.position = "absolute";
        popupEl.style.margin = "0";
        popupEl.style.inset = "auto";
        popupEl.style.zIndex = "999999";

        const corner = (popupEl.dataset.corner || "bottom-right").toLowerCase();
        const offset = parseInt(popupEl.dataset.offset || "16", 10);

        const safeTop = cssEnvPx("safe-area-inset-top");
        const safeRight = cssEnvPx("safe-area-inset-right");
        const safeBottom = cssEnvPx("safe-area-inset-bottom");
        const safeLeft = cssEnvPx("safe-area-inset-left");

        const isTop = corner.includes("top");
        const isLeft = corner.includes("left");

        function updatePosition() {
            if (!popupEl.isConnected) return;

            const vp = getViewport();

            // размеры попапа (даже если opacity=0, размеры обычно есть)
            const rect = popupEl.getBoundingClientRect();
            const w = rect.width || popupEl.offsetWidth;
            const h = rect.height || popupEl.offsetHeight;

            const padX = offset + (isLeft ? safeLeft : safeRight);
            const padY = offset + (isTop ? safeTop : safeBottom);

            let x = isLeft
                ? (vp.left + padX)
                : (vp.left + vp.width - w - padX);

            let y = isTop
                ? (vp.top + padY)
                : (vp.top + vp.height - h - padY);

            // clamp (если попап шире/выше)
            const minX = vp.left + padX;
            const minY = vp.top + padY;
            const maxX = vp.left + Math.max(padX, vp.width - w - padX);
            const maxY = vp.top + Math.max(padY, vp.height - h - padY);

            x = Math.min(Math.max(x, minX), maxX);
            y = Math.min(Math.max(y, minY), maxY);

            popupEl.style.left = x + "px";
            popupEl.style.top = y + "px";
        }

        // выбираем правильный скролл-таргет (контейнер или окно)
        const scrollParent = findScrollParent(anchorEl);
        const rootScroller = document.scrollingElement || document.documentElement;
        const scrollTarget = (scrollParent === rootScroller) ? window : scrollParent;

        let raf = 0;
        const requestUpdate = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                updatePosition();
            });
        };

        // наши слушатели (не трогаем bootstrap)
        scrollTarget.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        window.visualViewport?.addEventListener("scroll", requestUpdate);
        window.visualViewport?.addEventListener("resize", requestUpdate);

        // если попап удалится сам (авто-hide) — подчистим слушатели
        const mo = new MutationObserver(() => {
            if (!popupEl.isConnected) {
                scrollTarget.removeEventListener("scroll", requestUpdate);
                window.removeEventListener("resize", requestUpdate);
                window.visualViewport?.removeEventListener("scroll", requestUpdate);
                window.visualViewport?.removeEventListener("resize", requestUpdate);
                mo.disconnect();
            }
        });
        mo.observe(document.body, { childList: true, subtree: true });

        // стартовое позиционирование
        updatePosition();
        // и ещё раз после первого кадра (на случай, если размеры меняются при шрифтах/рендере)
        requestAnimationFrame(updatePosition);

        // дадим наружу "ручной" апдейт (будем дергать после scrollIntoView)
        window.__updateSlidePopupPosition = updatePosition;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const popup = document.getElementById("slidePopup");
        if (!popup) return;

        // якорь — тот элемент, к которому ты скроллишь
        const currentRow = document.querySelector(".current");
        const anchorEl = currentRow?.previousElementSibling || currentRow || document.body;

        pinPopupToViewport(popup, anchorEl);
    });
})();

