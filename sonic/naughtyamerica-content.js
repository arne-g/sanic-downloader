chrome.runtime.onMessage.addListener(
    function(undefined, undefined, sendResponse) {

        star_regex = /^.*\/scene\/([A-Za-z-]*)-.*/g;
        star_raw = document.URL
        star_match = star_regex.exec(star_raw);
        star_string = star_match[1].replace(/-/g, '+');

        var title_regex = /(^.*?)(, .*)? in (.*) - .*$/g;
        var title_string = document.title
        var title_match = title_regex.exec(title_string);
        //star = title_match[1].replace(/ /g, '+');
        site = title_match[3].replace(/[ ']/g, '');

        query = star_string + "+" + site
        console.log(query)
        sendResponse(query);
    });
