chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab({ format: "png" }, function (dataUrl) {
        console.log(dataUrl)
        chrome.tabs.create({ url: "http://127.0.0.1:8000/ext-report/" }, function (tab) {
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
    /* Get the `tab`'s window along with its containing tabs */
    chrome.windows.get(tab.windowId, { populate: true }, function(oldWin) {
        /* Determine which tabs should be moved */
        var tabs = oldWin.tabs;
        var tabsToMove = [];
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].index === tab.index) {
                tabsToMove.push(tabs[i].id);
            }
        }

        /* If there are any tabs to move... */
        if (tabsToMove.length > 0) {
            /* Create a new window with the same
             * location and size as the original */
            chrome.windows.create({
                top: oldWin.top,
                left: oldWin.left,
                width: oldWin.width,
                height: oldWin.height,
                focused: false
            }, function(newWin) {
                /* Remove the new, empty tab created by default */
                chrome.tabs.query({
                    windowId: newWin.id
                }, function(tabsToClose) {
                    /* Update the window's state (e.g. "maximized") */
                    chrome.windows.update(newWin.id, { state: oldWin.state });

                    /* Move the tabs to the newly created window */
                    chrome.tabs.move(tabsToMove, {
                        windowId: newWin.id,
                        index: -1,

                    }, function() {
                        /* Close any tabs that pre-existed (i.e. 1 empty tab)
                         * [Do not do this BEFORE moving the tabs,
                         *  or the window will be empty and will close] */
                        var lastIdx = tabsToClose.length - 1;
                        tabsToClose.forEach(function(t, idx) {
                            chrome.tabs.remove(t.id);
                            if (idx === lastIdx) {
                                chrome.windows.update(oldWin.id, {
                                    top: 150-(oldWin.top),
                                    left: 900 + (oldWin.left) ,
                                    width: 200,
                                    height: (oldWin.height)-105,
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





