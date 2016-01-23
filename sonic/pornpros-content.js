chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /^HD Porn, (.*), (.*) updated .*$/g;

        //var myString = document.getElementsByClassName("trailercolumn")[0].
        //    getElementsByTagName("h1")[0].firstChild.nodeValue;
        var match = myRegexp.exec(document.title);

        title = match[1].replace(/ /g, '+');
        star  = match[2].replace(/ /g, '+');

        sendResponse(star + "+" + title);
    });
