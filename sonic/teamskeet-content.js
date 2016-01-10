chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /(^.*) \| (.*) \| (.*) \| .*$/g;
        
        var match = myRegexp.exec(document.title);

        star  = match[1];
        site  = match[2];
        title = match[3];

        sendResponse(star + "+" + site + "+" + title);
    });
