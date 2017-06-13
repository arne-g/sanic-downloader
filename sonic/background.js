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

            console.log(searchTerm);
        	if (searchTerm === undefined) {
                //sendResponse("Failed to retrieve search string.")
                port.postMessage("Failed to retrieve search string / No content script match.")
        		return;
        	}

        	query_escaped = searchTerm.replace(/[:’'!,]/g, '').replace(/\+/g, '%20');
        	torrent_url = extratorrent_domain + extratorrent_search_prefix +
        		query_escaped + extratorrent_args;
            console.log(torrent_url);

            port.postMessage("Querying for torrents ...")
            var parsed_data1;

        	// Query for torrents
        	$.ajax({
                url: torrent_url,
                success: function(data1) {
                    
                    parsed_data1 = $(new DOMParser().parseFromString(data1, 'text/html'));
                    $('head', parsed_data1).append('<base href="' + extratorrent_domain + '">');
                    console.log(parsed_data1)
                    //console.log(parsed_data1.find('.tlr'))

                    //first_torrent = parsed_data1.find('.tlr')[0]
				    first_torrent = parsed_data1.find('[alt="Magnet link"]')[0];
                    if (!first_torrent) {
                        port.postMessage(
                            "No torrents found for string:<br>'" +
                                searchTerm + "'");
                    	return
                    }
                    
                    iframe = document.createElement('iframe');
                    iframe.name = 'magnet_iframe';
                    document.body.appendChild(iframe);

                    magnet_link = first_torrent.parentElement;
                    new_link = document.createElement('a');
                    new_link.href = magnet_link.href;
                    new_link.target = 'magnet_iframe';
                    document.body.appendChild(new_link);
                    new_link.click();
                    port.postMessage("Magnet link found!")

                    row = first_torrent.
                        parentElement.
                        parentElement.
                        parentElement
                    tds = row.getElementsByTagName("td")

                    popup_string = "<b>Title: </b>" + row.
                        getElementsByTagName("td")[1].
                        getElementsByClassName("detName")[0].
                        getElementsByTagName("a")[0].
                        innerHTML
                    seeders = tds[2].innerHTML
                    leechers = tds[3].innerHTML
                    popup_string += "<br><b>Seeds/leeches: </b>" +
                                seeders + "/" + leechers
                    
                    port.postMessage(popup_string)
                    return
                }
            });
        });
    });
  })
});
