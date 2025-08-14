// nekoweb stats
var xhr = new XMLHttpRequest();
xhr.open('GET', location.origin + '/.nekoweb-api/count-view');
xhr.send();

document.currentScript.remove();