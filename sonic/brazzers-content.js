chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /^Official (.*) Video With (.*) Brazzers.com$/g;
        var match = myRegexp.exec(document.title);

        title = match[1].replace(/ /g, '+');
        star  = match[2].replace(/ /g, '+');

        sendResponse(star + "+" + title);
    });
