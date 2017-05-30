/*extratorrent_domain = "http://extratorrent.cc";
extratorrent_search_prefix = "/search/?search=";
extratorrent_args = "&s_cat=&pp=&srt=seeds&order=desc";*/

extratorrent_domain = "https://thepiratebay.org";
extratorrent_search_prefix = "/search/";
extratorrent_args = "/0/99/0";

// Listen to message from popup
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        //sendResponse("Looking for search string ...");
        port.postMessage("Looking for search string ...");

    	// Send message to get searchTerm back from content script
        chrome.tabs.sendMessage(tabs[0].id, "", function(searchTerm) {

        	if (searchTerm === undefined) {
                //sendResponse("Failed to retrieve search string.")
                port.postMessage("Failed to retrieve search string.")
        		return;
        	}

        	query_escaped = searchTerm.replace(/[:’'!,]/g, '').replace(/\+/g, '%20');
        	torrent_url = extratorrent_domain + extratorrent_search_prefix +
        		query_escaped + extratorrent_args;
            console.log(torrent_url);

            //sendResponse("Querying for torrents ...")
            port.postMessage("Querying for torrents ...")
            var parsed_data1;

        	// Query for torrents
        	$.ajax({
                url: torrent_url,
                success: function(data1) {
                    
                    //console.log(data1)
                    parsed_data1 = $(new DOMParser().parseFromString(data1, 'text/html'));
                    $('head', parsed_data1).append('<base href="' + extratorrent_domain + '">');
                    console.log(parsed_data1)
                    //console.log(parsed_data1.find('.tlr'))

                    //first_torrent = parsed_data1.find('.tlr')[0]
				    first_torrent = parsed_data1.find('[alt="Magnet link"]')[0];
                    if (!first_torrent) {
                        port.postMessage("No torrents found!");
                    	//sendResponse("No torrents found!")
                    	return
                    }
				                    iframe = document.createElement('iframe');
				                    iframe.name = 'magnet_iframe';
				                    document.body.appendChild(iframe);

                    magnet_link = first_torrent.parentElement;
                    //console.log(link);
                    //link.click();

                    //magnet_link = magnet_links[0];

                    new_link = document.createElement('a');
                    new_link.href = magnet_link.href;
                    new_link.target = 'magnet_iframe';
                    document.body.appendChild(new_link);
                    new_link.click();

                    //sendResponse("Torrents found. Looking for Magnet link ...")
                    port.postMessage("Magnet link found!")
                    return

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
				                	
				                	magnet_link = data2.find('[alt="Magnet link"]')[0];
				                	//magnet_links = $("a[href^='magnet:']");
                                    //console.log(magnet_links);
                                    magnet_link = magnet_links[0];

				                	new_link = document.createElement('a');
				                	new_link.href = magnet_link.href;
				                	new_link.target = 'magnet_iframe';
				                	document.body.appendChild(new_link);
				                	new_link.click();

				                	//sendResponse(popup_string)
                                    port.postMessage(popup_string)
				                }
				            });
				        }
				    })
                }
            });
        });
    });

  })
    // Keep connection open for 'sendResponse'
    //return true;
});
