extratorrent_domain = "http://extratorrent.cc/search/?search="
extratorrent_args = "&s_cat=&pp=&srt=seeds&order=desc"


// Listen to message from popup
chrome.runtime.onMessage.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    	// Send message to get searchTerm back from content script
        chrome.tabs.sendMessage(tabs[0].id, "", function(searchTerm) {

        	if (searchTerm === undefined) {
        		return;
        	}

        	query_escaped = searchTerm.replace(/[:’'!,]/g, '').replace(/\+/g, '%20');
        	torrent_url = extratorrent_domain + query_escaped + extratorrent_args;

            //torrent_url = "https://kickass.unblocked.red/usearch/" +
            //     + "/?field=seeders&sorder=desc";
            chrome.tabs.create({url: torrent_url}, function () {

                chrome.runtime.onMessage.addListener(
                    function(undefined, undefined, sendResponse) {
                        sendResponse("hello");
                    });
                });
            });
        });
    });
