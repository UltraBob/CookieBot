let s = document.createElement('script');
s.src = chrome.extension.getURL('cookieBot.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
}
