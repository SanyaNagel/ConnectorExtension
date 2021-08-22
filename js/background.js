//хз как работает конструкция ниже (старый способ управления сайтом через storage

// var storage = chrome.storage.sync;
// var tasks = new Array();
//
// setInterval(function() {
//     storage.get("tasks",function(items){
//
//     });
// }, 60000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


let videoElement;   //Тег видео

function pauseVideo() {
    if(videoElement){
        videoElement.pause();
    }
}
function playVideo() {
    if(videoElement){
        videoElement.play();
        alert("play сработал");
    }
}

function setCurrentTime(time){
    if(videoElement){
        videoElement.currentTime = time;
    }
}
/**
 * Осуществление взаимодействия pop-up формы с background скриптом при помощи отправки-получения сообщений
 * в активной вкладке с передачей в них необходимых для работы параметров.
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    /**
     * Нужно получить элемент используя querySelector() - он более продвинутый, чем getElementsByTagName()
     */
    videoElement = document.querySelector("video");
    if (videoElement){
        alert("Ура, видео получено!");
    }else{
        alert("Видео не получено");
    }


    switch (request.todo) {
        case "play":
            playVideo();
            break;
        case "pause":
            pauseVideo();
            break;
        case "setCurrentTime":
            setCurrentTime(request.newCurrentTime);
            break;
    }
    sendResponse({
        response: "Message received"
    });
});

window.onload = function () {
    /**
     * Здесь выполняется код после полной прогрузки страницы
     */
};