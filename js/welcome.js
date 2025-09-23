const WELCOME_OPENED_TIME_KEY = 'welcomeOpenedTime';

const welcomeDialogContent = `
<h2>O-maps / Карты на карте ◪</h2>
<p>
Добро пожаловать на сайт-каталог спортивных карт (ориентирование, рогейн, охота на лис, туризм итп).
Тут представлены почти полторы тысячи карт разных авторов, мест, типов и годов издания. Со временем их будет ещё больше. Всё это позволяет решать три основные задачи:<br/>
<ol>
<li><b>Карты для соревнований и тренировок</b> - достаточно свежие, актуальные, с доступными полноразмерными изображениями для печати или с указанием правообладателя, у которого карту можно арендовать.</li>
<li><b>Карты различных годов и авторов</b> в одних и тех же местах - от 50-летней давности до самых свежих. Позволяет наблюдать развитие картографии.</li>
<li><b>Архив (музей)</b> - старые карты или уже не актуальные из-за сильного изменения местности</li>
</ol>
</p>
<p>
Часть карт выложены в виде изображений низкого качества, достаточного только для просмотра, но не для печати.
В тех случаях, когда правообладатели не возражают, карты сопровождаются ссылкой на скачивание полноразмерного файла (jpeg, pdf, ocad).
Все карты в каталоге доступны для некоммерческого использования, если в их описании не указано обратное. Для проведения соревнований и получения качественных карт-материалов обращайтесь к их владельцам, имена и координаты которых везде по возможности указаны.
</p>
<h4>Обращение к авторам и правообладателям:</h4> 
<p>
Если Ваших карт тут ещё нет, и Вы хотели бы это исправить, напишите <a href="https://t.me/efradkin">мне</a>.<br/>
Если Вы по каким-то причинам категорически не хотите, чтобы Ваши карты тут появились (что, конечно, очень печально), напишите <a href="https://t.me/efradkin">мне</a>.<br/>
Если показ Ваших карт надо сопроводить Вашей контактной информацией или логотипом, напишите <a href="https://t.me/efradkin">мне</a>.<br/>
Всё это для Вас бесплатно.
</p>
<p>
<b>PS:</b>
Исходный код сайта <a href="https://github.com/efradkin/o-maps">доступен свободно</a>, но при его использовании прошу указывать ссылку на <a href="https://github.com/efradkin/o-maps">мой проект на GitHub</a>. 
Для коммерческого использования кода проекта или любой его части прошу связываться со мной.<br/>
Буду рад предложениям, конструктивной критике и любой помощи. Если Вы видите какие-то недочёты, ошибки, или у Вас есть дополнительная информация о картах - сообщите мне, и я добавлю/исправлю.
Если Вам нравится то, что я делаю, Вы можете меня поддержать в любой форме морально или материально - например, переводом на карту <span class="tbank"><b>5536 9139 5660 9602 (Т-Банк)</b></span> или по номеру телефона <span class="tbank"><b>+7-921-748-0424</b></span>.
</p>
<p><em>Евгений Фрадкин</em> 
<h4>Благодарности:</h4>
<ul>
<li>Первое спасибо - всем, кто присылал карты, сообщал об ошибках, советовал улучшения.</li>
<li>И персонально - Александру Михайловичу Василевскому, передавшему мне огромный архив бумажных карт и документов для сканирования.</li>
<li>А также - Владимиру Борисову, доверившему мне свой домашний архив карт.</li>
<li>Базой для Московского раздела каталога стала страничка <a href="http://o-mephi.net/index.php?pid=145">о-МИФИ</a> Алексея Ермаченкова.</li>
<li>Неисчерпаемый источник карт практически любых регионов - <a href="https://disk.yandex.ru/d/Sb3qwOSMuEIpDg">онлайн архив</a> Виктора Быркина.</li>
<li>Множество карт в электронном виде переданы каталогу
<ul>
<li>В Петербурге: Александр Ширинян, Виктор Рылов, Константин Токмаков, Федерация ориентирования СПб в лице Дениса Куприенко, Михаила Чегаровского и Алексея Волкова, Александр Шеин, Иван Родионов, Антон Косоруков, Вениамин Тёмкин, Ирина Скворцова, Алексей Малов, Елена Ушакова, Константин Бекетов, Сергей Рыжов.</li>
<li>В Москве: Дмитрий Налётов, Николай Сытов, Владимир Люк, Александр Калюжный, Егор Костылев, Александр Медведев, Андрей Прозоров, Александр Романов, Татьяна Грибанова.</li>
<li>В Рязани: Валерий Вековищев, Борис Гусев.</li>
<li>В Белграде: Алексей Соболев.</li>
</ul> 
</li>
<li>Этот проект отчасти является продолжением <a href="http://www.northernwind.spb.ru/mapbase/online/">Базы данных спортивных карт</a> Дениса Ельцова.</li>
<li>Технической основой является JavaScript-библиотека <a href="https://leafletjs.com/">Leaflet</a> с дополнениями к ней.</li>
<li>The icons created by <a href="https://www.flaticon.com/">Good Ware - Flaticon</a>.</li>
</ul> 
<hr />
Найти меня можно по электронной почте eugene.fradkin⚽gmail.com, в <a href="https://vk.com/fradkin">ВК</a> или в <a href="https://t.me/o_maps">чате проекта в Telegram</a>.
</p>
`;

const styleSheetEl = document.createElement('style');
styleSheetEl.innerHTML = `
    dialog#welcome-modal[open] {
        animation: show 1s;
    }

    dialog#welcome-modal.hide {
        animation: hide 1s;
    }
    @keyframes show {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }
    @keyframes hide {
        to {
            opacity: 0;
            transform: translateY(-100%);
        }
    }
    dialog#welcome-modal {
        div {
            padding: 0 20px;
        }
        #close-btn {
            float: right;
        }
    }
`;
document.head.appendChild(styleSheetEl);

const dialogEl = document.createElement('dialog');
dialogEl.setAttribute('id', 'welcome-modal');
const closeBtnEl = document.createElement('button');
closeBtnEl.setAttribute('id', 'close-btn');
closeBtnEl.innerHTML = '╳';
dialogEl.appendChild(closeBtnEl);
const divEl = document.createElement('div');
divEl.innerHTML = welcomeDialogContent;
dialogEl.appendChild(divEl);
document.body.appendChild(dialogEl);
const onAnimationEnd = () => {
    dialogEl.classList.remove("hide");
    dialogEl.close();
    dialogEl.removeEventListener("animationend", onAnimationEnd);
};
closeBtnEl.addEventListener("click", () => {
    dialogEl.classList.add("hide");
    dialogEl.addEventListener("animationend", onAnimationEnd);
});

// --- welcome dialog (https://github.com/NBTSolutions/Leaflet.Dialog) ---
function openWelcome() {
    const sw = screen.availWidth;
    const sh = screen.availHeight;

    let dw = sw - 444;
    if (sw < 800) {
        dw = sw - 50;
    }
    if (dw > 842) dw = 842;
    let dh = sh - 300;
    if (sh < 800) {
        dh = sh - 100;
    }

    dialogEl.style.width = dw + 'px';
    dialogEl.style.height = dh + 'px';
    dialogEl.style.top = '50px';

    dialogEl.showModal();

    localStorage.setItem(WELCOME_OPENED_TIME_KEY, new Date().getTime());
}

function openWelcomeIfRequired() {
    let time = new Date().getTime();
    let welcomeOpenedTime = localStorage.getItem(WELCOME_OPENED_TIME_KEY);
    if (welcomeOpenedTime == null || dateDiff(Number(welcomeOpenedTime), time) > 6) {
        setTimeout(() => {
            openWelcome();
        }, 3000);
    }
}

function writeWelcomeButton() {
    const BUTTON = '<a href="#" onclick="openWelcome(); return false" class="about-button" title="О проекте"><img src="images/information_24.png" ></a>';
    const template = document.createElement('template');
    template.innerHTML = BUTTON;
    document.body.prepend(template.content.firstChild);
    openWelcomeIfRequired();
}