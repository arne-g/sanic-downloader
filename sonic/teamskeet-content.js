chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /(^.*) \| (.*) \| (.*) \| .*$/g;

        var match = myRegexp.exec(document.title);

        star  = match[1].replace(/ /g, '+');
        site  = match[2].replace(/ /g, '+');
        title = match[3];

        sendResponse(star + "+" + site + "+" + title);
    });
