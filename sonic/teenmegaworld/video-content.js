chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /^.* - (.*) - (.*$)/g;
        var match = myRegexp.exec(document.title);

        var star  = match[1];
        var title = match[2];
        //var site = document.getElementsByClassName("title-set-txt")[0].getElementsByTagName("a")[0].firstChild.nodeValue.replace(/ /g, '');

        sendResponse(star + "+" + title);
    });
