/**
 * СКРИПТ ДЛЯ РАБОТЫ В ФОРМЕ РАСШИРЕНИЯ (ОБЛАСТЬ ВИДИМОСТИ HTML СТРАНИЦА РАСШИРЕНИЯ)
 */

// определение кнопок
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

//Консоль для отображения действий на форме расширения
//Область видимости только расширения, при выполнении скрипта на странице элементы расширения не видны
const console = document.getElementById("console1");
const timeInput = document.getElementById("timeInput");
// назначение действий на соответствующие кнопки/поля
if(playButton)
    playButton.addEventListener("click", play);
else
    alert("Кнопка play не получена");

if(pauseButton)
    pauseButton.addEventListener("click", pause);
else
    alert("Кнопка pause не получена");

function play(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {todo: "play"});

    });
    console.innerText = "Запуск видео";
}

function pause(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {todo: "pause"});
    });
    console.innerText = "Остановка видео";
}

function newCurrentTime(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {todo: "setCurrentTime", newCurrentTime: timeInput.value});
    });
    console.innerText = "Выставляем текущее время видео ";
}
