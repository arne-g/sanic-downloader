//alert("kickass");

/*
chrome.runtime.onMessage.addListener(
  function(request) {
    alert("Message recieved in kickass");
    //var searchBox = document.getElementById("contentSearch");
  });
*/

chrome.runtime.sendMessage("bork", function(response) {
    document.getElementById("contentSearch").value = response;
});