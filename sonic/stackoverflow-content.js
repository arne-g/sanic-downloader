chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var raw_title = document.getElementsByClassName("question-hyperlink")[0].firstChild.nodeValue;
        document.getElementsByName("q")[0].value = raw_title;

        sendResponse(raw_title);
  });