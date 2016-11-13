chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        var myRegexp = /(^.*?)(, .*)? in (.*$)/g;

        var myString = document
            .getElementsByClassName("synopsis-title")[0]
            .firstChild
            .nodeValue
            .trim()
            .replace("\n", "")
            .replace(/[ ]{2,}/g, ' ');
        var match = myRegexp.exec(myString);

        star = match[1].replace(/ /g, '+');
        site = match[3].replace(/ /g, '');

        query = star + "+" + site
        console.log(query)
        sendResponse(query);
    });
