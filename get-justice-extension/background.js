chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab({format: "png"}, function (dataUrl) {
        chrome.tabs.create({url: "http://localhost:8000/"}, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code:`
                    let image = document.getElementById('post-form')
                    input.src = '${dataUrl}'
                `
                // need to add post request
            })
        })
    })
})
