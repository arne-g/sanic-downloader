chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var setData = document.getElementById('sets_data').getElementsByTagName("h2");
        
        sendResponse(setData[0].firstChild.nodeValue);
    });
