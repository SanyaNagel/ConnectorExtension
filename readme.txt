Указать в соавторстве иконки: 
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Иконку брал с сайта https://www.flaticon.com/search?word=organizer

Нажатие по xpath
 document.evaluate ("//*[@id='oframeplayer']/pjsdiv[1]/video", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.pause();
 document.evaluate ("//*[@id='oframeplayer']/pjsdiv[1]/video", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.play();
 document.evaluate ("//*[@id="oframeplayer"]/pjsdiv[1]/video", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.play();

 document.getElementsByTagName("video")[0].play();
 document.getElementsByTagName("video")[0].pause();

document.getElementsByTagName("video")[0].currentTime = 100

API video тег: https://professorweb.ru/my/html/html5/level3/3_3.php





Идеи на будущее:
Подгрузка пути до сервера в во внешнем источнике, так как сервер может меняться
Сделать всплывающие окно для отображения о том, что идут техработы или то что нужно перезагрузить браузер
Подгрузка html и css тоже с отдельного источника.
