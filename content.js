jsPath = 'inject.js';
var temp = document.createElement('script');
temp.setAttribute('type', 'text/javascript');
temp.src = chrome.extension.getURL(jsPath);
document.head.appendChild(temp);