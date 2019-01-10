chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab(function (dataUrl) {
        chrome.tabs.create({url: chrome.runtime.getURL("post.html")}, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code:`
                    let image = document.getElementById('new-screenshot')
                    input.src = '${dataUrl}'
                `
            })
        })
    })
})