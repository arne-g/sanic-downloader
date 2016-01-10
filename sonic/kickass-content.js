//window.onload = function () { alert("It's loaded!"); }

/*
$(document).ready(function(){
    alert("hej");
});
*/


chrome.runtime.sendMessage("bork", function(response) {

    //alert("hej");

    if(!response)
        return;



    /*    
    document.getElementById("contentSearch").value = response;
    //document.getElementById("contentSearch").value = "plan 9 from outer space";
    document.getElementById("searchform").submit();
    */

    //alert(window.location.href);

    var first_panel = document.querySelectorAll("tr.odd")[0];
    var seeds = first_panel.getElementsByClassName("green center")[0].firstChild.nodeValue;
    
    if(seeds == 0) {
        alert("No seeds!");
        return;
    }

    var icons = first_panel.getElementsByClassName("icon16");

    icons[icons.length - 2].click();

    //window.location.href(magnetlink);
    //magnetWindow = window.open(magnetlink);
    //magnetWindow.close();

    //alert(magnetlink);
    //alert(icons[icons.length - 2][0]);
    //alert(icons[icons.length - 2][0].getAttribute("href"););

    //alert(seeds + " seeds");



});

//chrome.runtime.sendMessage({redirect: "https://kickass.unblocked.li/usearch/?q=plan+9+from+outer+space"});