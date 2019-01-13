chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab({format: "png"}, function (dataUrl) {
        console.log(dataUrl)
        chrome.tabs.create({ url: "http://127.0.0.1:8000/create_report"}, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code:`
                    let input = document.getElementById("new-screenshot")
                    input.src = '${dataUrl}'
                    console.log('${dataUrl}')
                `
            })
        })
    })
})
