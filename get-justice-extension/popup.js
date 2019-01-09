// 'use strict';

console.log("extension connected")

let screenshotButton = document.getElementById('screenshotButton');

function takeScreenshot() {
    captureTab = chrome.tabs.captureVisibleTab(function (dataUrl) {
        console.log("success!")

    })
    takeScreenshot.onlclick = captureTab
    
}



takeScreenshot()
// let changeColor = document.getElementById('screenshotButton');

// chrome.storage.sync.get('color', function (data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function (element) {
//     console.log("hello")
//     let color = element.target.value;
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             { code: 'document.body.style.backgroundColor = "' + color + '";' });
//     });
// };