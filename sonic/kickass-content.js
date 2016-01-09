chrome.runtime.sendMessage("bork", function(response) {

    document.getElementById("contentSearch").value = response;

    //document.getElementById("contentSearch").value = "plan 9 from outer space";
    //document.getElementById("searchform").submit();
});