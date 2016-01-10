chrome.runtime.sendMessage("", function(response) {

    if(!response)
        return;

    var first_panel = document.querySelectorAll("tr.odd")[0];
    var seeds = first_panel.getElementsByClassName("green center")[0].firstChild.nodeValue;
    
    if(seeds == 0) {
        alert("No seeds!");
        window.close();
    }

    var icons = first_panel.getElementsByClassName("icon16");
    icons[icons.length - 2].click();

});