
chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {
    	text = document.getElementsByClassName("scene-title")[0].innerHTML
    	end = text.indexOf("<span class")
    	sendResponse(text.substring(0, end))
    });
