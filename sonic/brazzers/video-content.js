
chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {
    	text = document.getElementsByClassName("scene-title")[0].innerHTML
    	end = text.indexOf("<span class")

        searchString = text.substring(0, end)
        console.log(searchString)
    	sendResponse(searchString)
    });
