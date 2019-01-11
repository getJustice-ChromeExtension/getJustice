chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab({format: "png"}, function (dataUrl) {
        chrome.tabs.create({ url: "http://14c39926.ngrok.io/"}, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code:`
                    let input = document.getElementById("new-screenshot")
                    input.src = '${dataUrl}'
                `
                // need to add post request
            })
        })
    })
})
