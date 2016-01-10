chrome.runtime.onMessage.addListener(function() {

    chrome.tabs.query({active: true, currentWindow: true, url: "http://www.realitykings.com/*/*/home.htm"}, function(tabs) {        
        if (tabs.length == 0)
            return;

        chrome.tabs.sendMessage(tabs[0].id, "", function(response) {

            kickassQueryURL = "https://kickass.unblocked.li/usearch/?q=" + response;

            chrome.tabs.create({url: kickassQueryURL}, function (kickassTab) {
                
                chrome.runtime.onMessage.addListener(
                    function(undefined, undefined, sendResponse) {
                        sendResponse(response);
                    });     
                });
            });
        });
    });