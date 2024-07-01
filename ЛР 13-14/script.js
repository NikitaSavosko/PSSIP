setTimeout(function() {
    var bodyColor = document.body.style.backgroundColor;
    console.log('Цвет фона документа:', bodyColor);
}, 7000);

function applyStyles() {
    var personInfo = document.getElementById('personInfo');
    personInfo.classList.add('styled');
}

var historyLength = history.length;

var newWindow = window.open('', '_blank', 'width=100,height=150');
newWindow.document.write('<html><head><title>История посещений</title></head><body>');
newWindow.document.write('<h1>История посещений</h1>');
newWindow.document.write('<p>Количество посещённых страниц: ' + historyLength + '</p>');
newWindow.document.write('</body></html>');

newWindow.document.close();
newWindow.focus();