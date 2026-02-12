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
