// take screenshot, done
// store screenshot, done
// redirect to question.htlm
// return screen shot 
// attach to email


/******* remove console logs dave !!! *******/
console.log("extension connected")

let screenshotButton = document.getElementById('screenshotButton');


function takeScreenshot() {
    captureTab = chrome.tabs.captureVisibleTab(function (dataUrl) {
        console.log("success!")
        chrome.storage.local.set({"captured": dataUrl}, function () {
            console.log('screenshot: ' + dataUrl);
        });
    })
    takeScreenshot.onlclick = captureTab
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
downloadScreenshot()