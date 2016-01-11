chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /(^.*) in (.*$)/g;

        var myString = document.
            getElementsByClassName("synopsis-title")[0].firstChild.nodeValue;
        var match = myRegexp.exec(myString);

        star = match[1].replace(/ /g, '+');
        site = match[2].replace(/ /g, '');

        sendResponse(star + "+" + site);
    });
