chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /(^.*) in (.*) video: (.*)$/g;

        var myString = document.getElementsByClassName("trailercolumn")[0].getElementsByTagName("h1")[0].firstChild.nodeValue;
        var match = myRegexp.exec(myString);

        star  = match[1].replace(/ /g, '+');
        site  = match[2].replace(/ /g, '');
        title = match[3].replace(/ /g, '+');

        sendResponse(star + "+" + site + "+" + title);
    });
