console.log("extension connected")

let screenshotButton = document.getElementById('screenshotButton');

function takeScreenshot() {
    captureTab = chrome.tabs.captureVisibleTab(function (dataUrl) {
        console.log("success!")
        chrome.storage.local.set({ "captured": dataUrl }, function () {
            console.log('Value is set to ' + dataUrl);
        });
    })
    takeScreenshot.onlclick = captureTab
}


takeScreenshot()