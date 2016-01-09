chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var re = new RegExp("http://stackoverflow.com/questions/.*/.*$");
        
        if (re.test(tabs[0].url)) {
            document.write("stackoverflow\n");
        }

        document.write("(reached the end)");
    });