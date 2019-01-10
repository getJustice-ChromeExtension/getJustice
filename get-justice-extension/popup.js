// return screen shot 
// attach to email


let screenshotButton = document.getElementById('screenshotButton');


function takeScreenshot() {
    captureTab = function () {
        chrome.tabs.captureVisibleTab(function (dataUrl) {
            chrome.storage.local.set({"captured": dataUrl}, function () {
                console.log('screenshot: ' + dataUrl);
            });
        })
    }
    screenshotButton.addEventListener("click", captureTab)
}


// function downloadScreenshot() {
//     // access bowser local storage
//     // find the screenshot
//     // then prompt user to download
//     screenshot = chrome.storage.local.get({"captured": dataUrl})
//     chrome.downloads.download(saveAs=true, screenshot)
    
// }

// function attachScreenshot() {}

takeScreenshot()
// downloadScreenshot()