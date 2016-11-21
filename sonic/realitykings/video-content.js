chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {
        //var myRegexp = /(^.*) - (.*)$/g;
        //var result = myRegexp.exec(document.title)[1]
        sendResponse(
            document.getElementsByClassName('section_title')[0].innerHTML.trim()
        )
    });
