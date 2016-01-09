chrome.runtime.onMessage.addListener(function() {

    chrome.tabs.query({active: true, currentWindow: true, url: "http://stackoverflow.com/questions/*/*"}, function(tabs) {
        
        if (tabs.length == 0)
            return;

        chrome.tabs.sendMessage(tabs[0].id, "", function(response) {
            //alert(response);

            chrome.tabs.create({url: "https://kickass.unblocked.li/"});
            
            chrome.runtime.onMessage.addListener(
                function(a, b, sendResponse) {
                    sendResponse(response);
                });
            

        });


    });

/*chrome.tabs.create({url: "https://kickass.unblocked.li/"}, function(tab) {
    alert("sending message");
    chrome.tabs.sendMessage(tab.id, "hej");

);*/

chrome.tabs.query({url: "https://kickass.unblocked.li/"}, function(tabs) {
    //alert(tabs.length);
    for (var i=0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, "hej");
    }
});

    /*
    chrome.tabs.query({url: "https://kickass.unblocked.li/"},
        function(result) {
            console.log("found tab");

            if (result.length === 1) {
                var tab = result[0];
                // details.message holds the original message
                chrome.tabs.sendMessage(tab.id, "hejhej");
                alert("one tab");
            }
        });
    */

    /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      alert("test");
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
    });
    */

  });
