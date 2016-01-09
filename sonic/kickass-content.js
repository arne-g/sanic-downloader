//alert("kickass");

/*
chrome.runtime.onMessage.addListener(
  function(request) {
    alert("Message recieved in kickass");
    //var searchBox = document.getElementById("contentSearch");
  });
*/

chrome.runtime.sendMessage("bork", function(response) {
    //alert(response);

    //document.getElementById("contentSearch").value = response;
    document.getElementById("contentSearch").value = "plan 9 from outer space";

    document.getElementById("searchform").submit();
});