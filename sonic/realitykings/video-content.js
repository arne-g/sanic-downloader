chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {
        var myRegexp = /(^.*) - (.*)$/g;
        var result = myRegexp.exec(document.title)[1]
        sendResponse(result)
    });
