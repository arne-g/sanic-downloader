sites = [
    "http://www.realitykings.com/*/*/home.htm",
    "http://www.teamskeet.com/t1/trailer/view/*/*",
    ///"http://new.bangbros.com/videos/*.htm",
    "http://bangbrothers.com/video*/*",
    "http://tour.naughtyamerica.com/scenes/*/*/*",
    "http://www.brazzers.com/scenes/view/id/*/*/",
    "http://www.digitalplayground.com/*/trailer/*/*/",
    "http://ddfnetwork.com/preview/*/*.html",
    "http://pornprosnetwork.com/video/*",
    "http://teenmegaworld.net/tour2/gallery/*",
    "http://nubiles-porn.com/*/watch/*" ];

extratorrent_domain = "http://extratorrent.cc/search/?search="
extratorrent_args = "&s_cat=&pp=&srt=seeds&order=desc"

chrome.runtime.onMessage.addListener(function() {
    sites.forEach(function(site) {
        chrome.tabs.query({active: true, currentWindow: true, url: site}, function(tabs) {
            if (tabs.length === 0)
                return;

            //$

            chrome.tabs.sendMessage(tabs[0].id, "", function(searchTerm) {

                //document.getElementsByClassName("tli")[0]

            	query_escaped = searchTerm.replace(/[:’'!,]/g, '').replace(/\+/g, '%20')
            	torrent_url = extratorrent_domain +
            		query_escaped + extratorrent_args

                //kickassQueryURL = "https://kickass.unblocked.red/usearch/" +
                //     + "/?field=seeders&sorder=desc";
                //chrome.tabs.create({url: kickassQueryURL}, function () {
                chrome.tabs.create({url: torrent_url}, function () {

                    chrome.runtime.onMessage.addListener(
                        function(undefined, undefined, sendResponse) {
                            sendResponse("hello");
                        });
                    });
                });
            });
        });
    });
