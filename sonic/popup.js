/*
chrome.tabs.create({url: "https://kickass.unblocked.li/"}, function(tab) {
    alert("The tab is created, but this alert is never shown");
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            alert(request);
    });
});
*/

//document.write("start");

chrome.runtime.sendMessage("");

/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    document.write("hello");
    if (tabs.length == 1) {
        chrome.tabs.sendMessage(tabs[0].id, {"hello"}, function(response) {
            document.write(response);
        });
    }
});
*/

//document.write("end");