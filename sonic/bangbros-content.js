chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /(^.*) \| (.*) \| .*$/g;

        var match = myRegexp.exec(document.title);

        title = match[1].replace(/ /g, '+');
        site  = match[2].replace(/ /g, '');

        sendResponse(site + "+" + title);
    });
