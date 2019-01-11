// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.captureVisibleTab({format: "png"}, function (dataUrl) {
//         chrome.tabs.create({url: "create_report.html"}, function (tab) {
//             chrome.tabs.executeScript(tab.id, {
//                 code:`
//                     let image = document.getElementById('post-form')
//                     input.src = '${dataUrl}'
//                 `
//             })
//         })
//     })
// })


/* global chrome */

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.captureVisibleTab({ format: 'png' }, function (dataUrl) {
        chrome.tabs.create({ url: 'http://localhost:8000/create_report.html' }, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code: `
          var image = document.getElementById('image')
          image.src = '${dataUrl}'
        `
            })
        })
    })
})