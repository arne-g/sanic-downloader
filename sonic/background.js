extratorrent_domain = "http://extratorrent.cc";
extratorrent_search_prefix = "/search/?search=";
extratorrent_args = "&s_cat=&pp=&srt=seeds&order=desc";

// Listen to message from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    	// Send message to get searchTerm back from content script
        chrome.tabs.sendMessage(tabs[0].id, "", function(searchTerm) {

        	if (searchTerm === undefined) {
        		return;
        	}

        	query_escaped = searchTerm.replace(/[:’'!,]/g, '').replace(/\+/g, '%20');
        	torrent_url = extratorrent_domain + extratorrent_search_prefix +
        		query_escaped + extratorrent_args;

        	// Query for torrents
        	$.ajax({
                url: torrent_url,
                success: function(data1) {

                    var parsed_data1 = $(new DOMParser().parseFromString(data1, 'text/html'));
                    $('head', parsed_data1).append('<base href="' + extratorrent_domain + '">');

                    first_torrent = parsed_data1.find('.tlr')[0]
                    if (!first_torrent) {
                    	sendResponse("No torrents found!")
                    	return
                    }

                    $first_torrent = $(first_torrent)
                    
                    first_torrent_name = $first_torrent.find('.tli')[0]

                    // TODO: Only load first link
                    Array.from(first_torrent_name.children).forEach(el => {
				        if(el.tagName === "A") {
				            
				            age = first_torrent.children[3].innerHTML
				            size = first_torrent.children[4].innerHTML
				        	seeders = $first_torrent.find('.sy')[0].innerHTML
				        	leechers = $first_torrent.find('.ly')[0].innerHTML

		                	popup_string = "<b>Title: </b>" + el.innerHTML
		                	popup_string += "<br><b>Seeds/leeches: </b>" +
		                		seeders + "/" + leechers
		                	popup_string += "<br><b>Size: </b>" + size
		                	popup_string += "<br><b>Age: </b>" + age

				            $.ajax({
				                url: el.href,
				                success: function(data2) {

				                    iframe = document.createElement('iframe');
				                    iframe.name = 'magnet_iframe';
				                    document.body.appendChild(iframe);
				                	
				                	magnet_link = $(data2).find('[title="Magnet link"]')[0];
				                	new_link = document.createElement('a');
				                	new_link.href = magnet_link.href;
				                	new_link.target = 'magnet_iframe';
				                	document.body.appendChild(new_link);
				                	new_link.click();

				                	sendResponse(popup_string)
				                }
				            });
				        }
				    })
                }
            });
        });
    });

    // Keep connection open for 'sendResponse'
    return true;
});
