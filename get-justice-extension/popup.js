console.log("extension connected")

let screenshotButton = document.getElementById('screenshotButton');

function takeScreenshot() {
    captureTab = chrome.tabs.captureVisibleTab(function (dataUrl) {
        console.log("success!")

    })
    takeScreenshot.onlclick = captureTab
    
}


takeScreenshot()