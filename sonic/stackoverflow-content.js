

//chrome.extension.sendMessage(raw_title);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var raw_title = document.getElementsByClassName("question-hyperlink")[0].firstChild.nodeValue;
        document.getElementsByName("q")[0].value = raw_title;

        sendResponse(raw_title);
  });



/*
var uniqueName = new Date();
var windowName = 'Test' + uniqueName.getTime();
var kickass = window.open("http://stackoverflow.com/questions/359424/detach-subdirectory-into-separate-git-repository/", windowName);
//var kickass = window.open("https://kickass.unblocked.pe/", windowName);

kickass.focus();

$(kickass.document).ready( function() {
    //alert(kickass.innerWidth);
    //$("#contentSearch")
    //kickass.alert("hej");
    //var s = kickass.document.getElementById("wrapper");
    var s = kickass.document.getElementsByClassName("question-hyperlink");
    kickass.alert(s[0]);
    //kickass.document.getElementById("contentSearch")[0].value = raw_title;
});
*/
