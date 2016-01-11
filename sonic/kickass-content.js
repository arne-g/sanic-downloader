chrome.runtime.sendMessage("", function(response) {

    if(!response)
        return;

    var confirm_age = document.getElementById("confirm_age");

    if(!confirm_age.getAttribute("style")) {
        confirm_age.getElementsByClassName("piratMan")[0].firstElementChild.firstElementChild.click();
    }

    if (document.title == "Nothing found! - Kickass Torrents") {
        alert("Nothing found!");
        window.close();
    }

    var first_panel = document.querySelectorAll("tr.odd")[0];
    
    if(first_panel.getElementsByClassName("green center")[0].firstChild.nodeValue == 0) {
        alert("No seeds!");
        window.close();
    }

    var icons = first_panel.getElementsByClassName("icon16");
    icons[icons.length - 2].click();

});