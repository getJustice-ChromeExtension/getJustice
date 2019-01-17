
'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: "developer.chrome.com"},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});






// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.captureVisibleTab({format: "png"}, function (dataUrl) {
//         console.log(dataUrl)
//         chrome.tabs.create({ url: "http://127.0.0.1:8000/create-report"}, function (tab) {
//             chrome.tabs.executeScript(tab.id, {
//                 code:`
//                     let input = document.getElementById("new-screenshot")
//                     input.src = '${dataUrl}'
//                     let imgData = document.getElementById("screenshot-data")
//                     imgData.setAttribute("value", "${dataUrl}")
//                 `
//             })
//         })
//     })
// })




