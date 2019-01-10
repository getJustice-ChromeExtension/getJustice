let screenshotButton = document.getElementById('screenshotButton');
let postScreenshotButton = document.getElementById('sendButton')


function takeScreenshot() {
    captureTab = function () {
        chrome.tabs.captureVisibleTab(function (dataUrl) {
            chrome.storage.local.set({"captured": dataUrl},function () {
                console.log(dataUrl)
            })
            // open form.html
            chrome.tabs.create({ "url": chrome.runtime.getURL("post.html")})
            // change image src to data url
            // submit form
        })
    }
    screenshotButton.addEventListener("click", captureTab)
}


takeScreenshot()