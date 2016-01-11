chrome.runtime.onMessage.addListener(function() {

    sites = ["http://www.realitykings.com/*/*/home.htm", "http://www.teamskeet.com/t1/trailer/view/*/*"];
    
    sites.forEach(function(site) {
        chrome.tabs.query({active: true, currentWindow: true, url: site}, function(tabs) {

            if (tabs.length == 0)
                return;

            chrome.tabs.sendMessage(tabs[0].id, "", function(searchTerm) {

                kickassQueryURL = "https://kickass.unblocked.li/usearch/?q=" + searchTerm;
                chrome.tabs.create({url: kickassQueryURL}, function () {

                    var backgroundTime = (new Date()).getTime();
                    
                    chrome.runtime.onMessage.addListener(
                        function(undefined, undefined, sendResponse) {

                            var currentTime = (new Date()).getTime();
                            sendResponse(currentTime - backgroundTime);
                        });     
                    });
                });
            });
        });
    });
