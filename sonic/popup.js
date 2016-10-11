//Send when clicking popup
chrome.runtime.sendMessage("");

chrome.extension.onMessage.addListener(function(message, messageSender) {
	console.log(message)
	console.log(messageSender)
});