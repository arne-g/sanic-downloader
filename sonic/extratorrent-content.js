chrome.runtime.sendMessage("", function(timeDiff) {
    Array.from(document.getElementsByClassName("tli")[0].children).forEach(el => {
        if(el.tagName === "A") {
            $.ajax({
                url: el.href,
                success: function(data) {
                    var mock = document.createElement('hej');
                    mock.innerHTML = data
                    mock.querySelectorAll('[title="Magnet link"]')[0].click()
                }
            });

            return
        }
    })
});
