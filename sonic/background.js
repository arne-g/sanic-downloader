extratorrent_domain = "http://extratorrent.cc"
extratorrent_search_prefix = "/search/?search="
extratorrent_args = "&s_cat=&pp=&srt=seeds&order=desc"


/*function replace_url(url) {
	return extratorrent_domain + url.match(/(chrome-extension:\/\/[a-z]+)\/(.*)/)[2]
}*/


// Listen to message from popup
chrome.runtime.onMessage.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    	// Send message to get searchTerm back from content script
        chrome.tabs.sendMessage(tabs[0].id, "", function(searchTerm) {

        	if (searchTerm === undefined) {
        		return;
        	}

        	query_escaped = searchTerm.replace(/[:’'!,]/g, '').replace(/\+/g, '%20');
        	torrent_url = extratorrent_domain + extratorrent_search_prefix +
        		query_escaped + extratorrent_args;

        	$.ajax({
                url: torrent_url,
                success: function(data1) {
                    //var jel = $('<div></div>');
					//jel.html(data1)
					//console.log(jel)
					//TLIs = jel.find('.tli');

                    //var mock = document.createElement('extratorrent_page_1');
                    //mock.innerHTML = data1
                    //console.log(data1)
                    //console.log($(data1, null))

                    //var parsed_data = $(data1)
                    var parsed_data1 = $(new DOMParser().parseFromString(data1, 'text/html'));
                    $('head', parsed_data1).append('<base href="' + extratorrent_domain + '">');
                    //console.log(parsed_data)

                    //mock = $.parseHTML(data1);
                    //console.log(mock)
                    TLIs = parsed_data1.find('.tli');
                    //console.log(TLIs)

                    Array.from(TLIs[0].children).forEach(el => {
				    //Array.from(mock.getElementsByClassName("tli")[0].children).forEach(el => {
				        //console.log("mock.getElementsByClassName")
				        if(el.tagName === "A") {

				        	//console.log(el)
				        	url1 = el.href
				        	//url1 = replace_url(el.href)
				        	//console.log(url1)

				        	//url2 = el.href.match(/(chrome-extension:\/\/[a-z]+)\/(.*)/)[2]
				        	//console.log(extratorrent_domain + url2)
				        	
				            $.ajax({
				                url: url1,
				                success: function(data2) {
				                	//console.log("hej igen")

				                    var parsed_data2 = $(new DOMParser().parseFromString(data2, 'text/html'));
				                    $('head', parsed_data2).append('<base href="' + extratorrent_domain + '">');

				                    iframe = document.createElement('iframe')
				                    iframe.name = 'magnet_iframe'
				                    iframe.style = "position:absolute; visibility:hidden;"
				                    document.body.appendChild(iframe)
				                    //<iframe name="mailto_iframe" style="position:absolute; visibility:hidden;"></iframe>
				                    
				                    //<a href="mailto:example@example.com" target="mailto_iframe">Mail!!</a>	

				                	magnet_link = $(data2).find('[title="Magnet link"]')[0]
				                	//magnet_link.target = "_blank"
				                	//magnet_link.taget = 'magnet_iframe'
				                	//console.log(magnet_link)
				                	//magnet_link.click()
				                	new_link = document.createElement('a')
				                	new_link.href = magnet_link.href
				                	new_link.innerHTML = "hej"
				                	new_link.target = 'magnet_iframe'
				                	document.body.appendChild(new_link)
				                	new_link.click()

				                	/*copied_link = document.body.appendChild(magnet_link)
				                	console.log(copied_link)
				                	copied_link.click()*/

				                	//magnet_link.click()
				                	//console.log(magnet_link.click())

				                    //var mock2 = document.createElement('extratorrent_page_2');
				                    //mock2.innerHTML = data2
				                    //mock2.querySelectorAll('[title="Magnet link"]')[0].click()
				                }
				            });

				            return
				        }
				    })
                }
            });

            //torrent_url = "https://kickass.unblocked.red/usearch/" +
            //     + "/?field=seeders&sorder=desc";
            /*chrome.tabs.create({url: torrent_url}, function () {

                chrome.runtime.onMessage.addListener(
                    function(undefined, undefined, sendResponse) {
                        sendResponse("hello");
                    });
                });*/
        });
    });
});
