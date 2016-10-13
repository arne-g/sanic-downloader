chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var title = document.getElementsByClassName("player-title")[0].
            firstElementChild.innerHTML;

        sendResponse(title + "+" + "DigitalPlayground");
    });
