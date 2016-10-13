//Send when clicking popup
chrome.runtime.sendMessage("", function(response) {
	response_div = document.createElement('div');
	response_div.innerHTML = response
	document.body.appendChild(response_div);
});
