chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        var myString = document.getElementsByClassName("trailercolumn")[0].getElementsByTagName("h1")[0].firstChild.nodeValue;

        var myRegexp = /(^.*) in (.*) video: (.*)/g;
        var match = myRegexp.exec(myString);

        star  = match[1].replace(/ /g, '+');
        site  = match[2].replace(/ /g, '');
        title = match[3].replace(/ /g, '+');

        sendResponse(star + "+" + site + "+" + title);
    });
