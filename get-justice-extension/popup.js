// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};


// let NewWindowButton = document.getElementById('NewWindowButton');

//  function openNewWindow(url,windowName) {
//     newwindow=window.open("http://127.0.0.1:8000/create-report", windowName,'height=200,width=150');
//     if (window.focus) {newwindow.focus()}
//     return false;
//  }

// openNewWindow()