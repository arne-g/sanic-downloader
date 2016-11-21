//Send when clicking popup

var port = chrome.runtime.connect({name: "popup"});
port.postMessage("");

port.onMessage.addListener(function(response) {
//chrome.runtime.sendMessage("", function(response) {
	document.body.innerHTML = '';

	response_div = document.createElement('div');
	response_div.innerHTML = response
	document.body.appendChild(response_div);
});
