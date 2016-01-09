chrome.runtime.onMessage.addListener(function() {

    chrome.tabs.query({active: true, currentWindow: true, url: "http://stackoverflow.com/questions/*/*"}, function(tabs) {
        
        if (tabs.length == 0)
            return;

        chrome.tabs.sendMessage(tabs[0].id, "", function(response) {

            chrome.tabs.create({url: "https://kickass.unblocked.li/"});
            
            chrome.runtime.onMessage.addListener(
                function(a, b, sendResponse) {
                    sendResponse(response);
                });
            
            });
        
        });
    });
