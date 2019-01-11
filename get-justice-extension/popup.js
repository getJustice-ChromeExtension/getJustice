/****** not currently working ******/
// the popup.js does not currently take screen shots
// that functionality has been passed to the background.js
// popup is being reserved for future app functionality


// let screenshotButton = document.getElementById('screenshotButton');
// let postScreenshotButton = document.getElementById('sendButton')


// function takeScreenshot() {
//     captureTab = function () {
//         chrome.tabs.captureVisibleTab(function (dataUrl) {
//             chrome.storage.local.set({ "captured": dataUrl }, function () {
//                 console.log(dataUrl)

                // chrome.tabs.create({ "url": chrome.runtime.getURL("post.html"), 'active': true }, function (tab) {
                //     chrome.tabs.executeScript(tab.id, {
                //         code: `console.log('hello')`
                //     })
            //     })
            // })
            // open form.html
            // chrome.tabs.create({ "url": 'https://momentumlearn.com'}, function(tab){
            //     alert(tab.id)
            //     chrome.tabs.executeScript(tab.id, {
            //         code: `console.log('hello')`
            //     })

            //     // change image src to data url
            //     let newScreenshot = getElementById("new-screenshot")
            //     let newDiv = document.createElement("h1")
            //     newDiv.innerHTML= "hey"
            //     newScreenshot.appendChild(newDiv)
            // })

            // chrome.tabs.create({ "url": chrome.runtime.getURL("post.html"), 'active': false }, function (tab) {
            //     console.log(tab)
            //     chrome.tabs.executeScript(tab.id, { runAt: 'document_end', code: 'window.alert("hi")' }, function (results) {
            //         console.log(results)
            //     })
            //     chrome.tabs.executeScript(tab.id, { runAt: 'document_end', code: 'console.log("hi")' })
            // })

            


            // submit form
        
//     }
//     screenshotButton.addEventListener("click", captureTab)
// }


// takeScreenshot()



let NewWindowButton = document.getElementById('NewWindowButton');

function openNewWindow(url,windowName) {
    newwindow=window.open('https://fast-chamber-87303.herokuapp.com/', windowName,'height=200,width=150');
    if (window.focus) {newwindow.focus()}
    return false;
  }
  

openNewWindow()