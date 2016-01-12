chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var title = document.getElementsByClassName("player-title")[0].
            firstElementChild.firstElementChild.firstChild.nodeValue;

        sendResponse(title + "+" + "DigitalPlayground");
    });
