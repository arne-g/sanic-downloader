chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        /*
        var raw_title = document.getElementsByClassName("question-hyperlink")[0].firstChild.nodeValue;
        document.getElementsByName("q")[0].value = raw_title;

        sendResponse(raw_title.replace(/ /g, '+'));
        */

        //var myString = "Remy La Croix in Monster Curves video: Serious Curves";
        var myString = document.getElementsByClassName("trailercolumn")[0].getElementsByTagName("h1")[0].firstChild.nodeValue;
        alert(myString);

        var myRegexp = /(^.*) in (.*) video: (.*)/g;
        var match = myRegexp.exec(myString);

        star  = match[1].replace(/ /g, '+');
        site  = match[2].replace(/ /g, '');
        title = match[3].replace(/ /g, '+');

        sendResponse(star + "+" + site + "+" + title);
    });
