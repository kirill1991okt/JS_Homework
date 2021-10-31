const btnMain = document.querySelector("#main-button"),
    elMinutes = document.querySelector(".minutes"),
    elSeconds = document.querySelector(".seconds"),
    elMilliseconds = document.querySelector(".milliseconds"),
    buttons = document.querySelector(".buttons"),
    marks = document.querySelector(".marks"),
    container = document.querySelector(".container"),
    results = [];

//локал сторадж

let localState = {};

if (localStorage.length) {
    localState = JSON.parse(localStorage.getItem('timer'));
    window.addEventListener('load', setState);
} else {
    elMinutes.innerText = '00';
    elSeconds.innerText = '00';
    elMilliseconds.innerText = '00';
}

let minutes = localState.minutes || 0,
    seconds = localState.seconds || 0,
    milliseconds = localState.milliseconds || 0,
    timer,
    btnSave,
    btnReset;

const start = () => {
    clearInterval(timer);
    container.dataset.state = "start";
    btnMain.innerText = "Start";
    localStorage.clear();
};


const run = () => {
    timer = setInterval(startTimer, 10);
    container.dataset.state = "run";
    btnMain.innerText = "Stop";

    // localStorage.setItem('state', 'run');
};

const stop = () => {
    clearInterval(timer);
    container.dataset.state = "stop";
    btnMain.innerText = "Run";

    // localStorage.setItem('state', 'stop');
};

function setState() {
    // создание элементов по клику

    const btnReset = document.getElementById("reset-button");
    const btnSave = document.getElementById("save-button");

    if (!btnSave && !btnReset) {
        createButtons();
    }
    // Изменение состояние data-

    btnMain.innerText = "Stop";
    const state = container.dataset.state;

    switch (state) {
        case "start":
            run();
            break;
        case "run":
            stop();
            break;
        case "stop":
            run();
    }
}

btnMain.addEventListener("click", setState);



function startTimer() {
    // миллисекунды
    milliseconds++;
    elMilliseconds.innerText = `0${milliseconds}`;
    if (milliseconds > 9) {
        elMilliseconds.innerText = milliseconds;
    }
    if (milliseconds > 15) {
        seconds++;
        milliseconds = 0;
        elMilliseconds.innerText = "00";
    }

    // секунды
    elSeconds.innerText = `0${seconds}`;
    if (seconds > 9) {
        elSeconds.innerText = seconds;
    }
    if (seconds > 15) {
        minutes++;
        seconds = 0;
        elSeconds.innerText = "00";
    }

    // минуты
    elMinutes.innerText = `0${minutes}`;
    if (minutes > 9) {
        elMinutes.innerText = minutes;
    }
    if (minutes > 3) {
        start();
        btnMain.style = "display: none";
        btnSave.remove();
    }



    localStorage.setItem('timer', JSON.stringify({
        minutes,
        seconds,
        milliseconds
    }));

    if (container.dataset.state === "start") {
        localStorage.clear();
    }
}

function createButtons() {
    btnReset = document.createElement("button");
    btnSave = document.createElement("button");

    btnReset.setAttribute("id", "reset-button");
    btnSave.setAttribute("id", "save-button");

    btnReset.innerText = "Reset";
    btnSave.innerText = "Save";

    buttons.appendChild(btnReset);
    buttons.appendChild(btnSave);

    btnSave.addEventListener("click", () => {
        results.push(
            `Result ${
        results.length + 1
      } - ${minutes}: ${seconds}: ${milliseconds} <br/>`
        );
        marks.innerHTML = results.join("");
    });

    btnReset.addEventListener("click", () => {
        clearInterval(timer);
        elMinutes.innerText = "00";
        elSeconds.innerText = "00";
        elMilliseconds.innerText = "00";
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        btnSave.remove();
        btnReset.remove();
        btnMain.innerText = "Start";
        container.dataset.state = "start";
        results.length = 0;
        marks.innerHTML = "";
        btnMain.style = "display: block";
        localStorage.clear();
    });
}




/*
Задание 1:
    Написать свой секундомер в формате mm:ss:msms (по 2 цифры в каждом параметре).
    Изначально на странице должна быть кнопка "Start". При запуске секундомера текст кнопки меняется на "Stop".
    Если пользователь нажимает на кнопку "Stop" - ее текст должен измениться на "Run".
    Использовать data-атрибут, хранящий состояние секундомера. Работа кнопки и секундомера должна опираться на него.
    Также после старта работы секундомера должны появиться кнопки "Save" и "Reset".
    Кнопки должны работать соответственным образом (по клику на кнопку "Reset" секундомер должен полностью вернуться
    в изначальное состояние).
    Максимальное количество минут - 60. После этого секундомер останавливается (тестировать на значениях поменьше).
    Из остальной логики должны остаться только кнопка "Reset" и метки.
    * Секундомер должен работать после перезагрузки страницы и полностью сохранять свое состояние и метки.
    Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1
    на каждой итерации и считать их до 100.
    При реализации класс Date использовать запрещено.
*/