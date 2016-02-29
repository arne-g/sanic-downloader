chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /^.* - (.*) - .*$/g;
        var match = myRegexp.exec(document.title);

        title = match[1].replace(/ /g, '+');

        sendResponse(title + "+nubiles-porn");
    });
