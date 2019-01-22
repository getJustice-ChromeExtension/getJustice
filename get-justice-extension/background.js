

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab({ format: "png" }, function (dataUrl) {
        console.log(dataUrl)
        chrome.tabs.create({ url: "http://localhost:8000/ext-report/" }, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code: `
                    let input = document.getElementById("new-screenshot")
                    input.src = '${dataUrl}'
                    let imgData = document.getElementById("screenshot-data")
                    imgData.setAttribute("value", "${dataUrl}")
                `
            })
        })
    })
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.get(tab.windowId, { populate: true }, function(oldWin) {
        var tabs = oldWin.tabs;
        var tabsToMove = [];
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].index < -1) {
                tabsToMove.shift(tabs[i].id);
            } else {
                tabsToMove.push(tabs[i].id)
            }
        }
        if (tabsToMove.length > 0) {
            chrome.windows.create({
                type: "popup",
                top: 150-(oldWin.top),
                left: (oldWin.width)-400,
                width: 400,
                height: 700,
                focused: true
            }, function(newWin) {
                chrome.tabs.query({
                    windowId: newWin.id
                }, function(tabsToClose) {
                    chrome.windows.update(newWin.id);
                    chrome.tabs.move(tabsToMove, {
                        windowId: newWin.id,
                        index: 0,
                        focused: false
                    }, function() {
                        var lastIdx = tabsToClose.length - 1;
                        tabsToClose.forEach(function(t, idx) {
                            chrome.tabs.remove(t[0].id);
                            if (idx === lastIdx) {
                                chrome.windows.update(oldWin.id, {
                                    top: 150-(oldWin.top),
                                    left: (oldWin.width)-400,
                                    width: 200,
                                    height: 700,
                                    focused: true
                                });
                            }
                        });
                    });
                });
            });
        }
    });
});

// function removeScreenshot() {
//     $('#remove-screenshot').on('click', function () {
//         $('#new-screenshot').remove()
//         $('#no-screenshot').hide()
//     });
// };




