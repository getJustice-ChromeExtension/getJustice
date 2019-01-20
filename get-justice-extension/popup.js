// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};


// let NewWindowButton = document.getElementById('NewWindowButton');

//  function openNewWindow(url,windowName) {
//     newwindow=window.open("http://127.0.0.1:8000/create-report", windowName,'height=200,width=150');
//     if (window.focus) {newwindow.focus()}
//     return false;
//  }

// openNewWindow()



// need to write function that checks and unchecks boxes
// need a function for subjects
//*** function to keep buttons pressed down  ***//
function buttonPress() {
    $(document).ready(function () {
        $(".form-btn").on({

            click: function () {
                $(this).css("background-color", "black");
                $(this).css("font-size", "18px");
                $(this).css("color", "white");
                $(this).css("font-family", "Opensans, sans-serif");
            }
        });
    });
}
function get(id) {
    object = document.getElementById(id)
    return object
}

// if i click a subject then
// the subject should have a class that is also on
// the email fields
// and should then fill the email fields


function addRemoveHateCrimeAdresses() {
    button = get('hate-crime-button')
    button.addEventListener('click', () => {
        $("#formcollapseLink").collapse("show")
        emails = document.querySelectorAll('.email-button')
        emails.forEach(email => {
            if (email.classList.contains('hate-crime')) {
                newEmail = email.getAttribute('data-type')
                addressField = get('email-address')
                if (addressField.value.includes(`${newEmail}, `)) {
                    current = addressField.value
                    edited = addressField.value.replace(`${newEmail}, `, '')
                    addressField.value = edited
                } else {
                    current = addressField.value
                    addressField.value = `${newEmail}, ${current}`
                }
            }
        })
    })
}


function addRemovePoliceBrutailityAdresses() {
    button = get('police-brut-button')
    button.addEventListener('click', () => {
        $("#formcollapseLink").collapse("show")
        emails = document.querySelectorAll('.email-button')
        emails.forEach(email => {
            if (email.classList.contains('police-brut')) {
                newEmail = email.getAttribute('data-type')
                addressField = get('email-address')
                if (addressField.value.includes(`${newEmail}, `)) {
                    current = addressField.value
                    edited = addressField.value.replace(`${newEmail}, `, '')
                    addressField.value = edited
                } else {
                    current = addressField.value
                    addressField.value = `${newEmail}, ${current}`
                }
            }
        })
    })
}


function addRemoveCivilRightsAdresses() {
    button = get('civ-rights-violate-button')
    button.addEventListener('click', () => {
        $("#formcollapseLink").collapse("show")
        emails = document.querySelectorAll('.email-button')
        emails.forEach(email => {
            if (email.classList.contains('civ-rights')) {
                newEmail = email.getAttribute('data-type')
                addressField = get('email-address')
                if (addressField.value.includes(`${newEmail}, `)) {
                    current = addressField.value
                    edited = addressField.value.replace(`${newEmail}, `, '')
                    addressField.value = edited
                } else {
                    current = addressField.value
                    addressField.value = `${newEmail}, ${current}`
                }
            }
        })
    })
}


function addRemoveSubject() {
    buttons = document.querySelectorAll('.subject-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            subject = event.target.getAttribute("data-type")
            subjectField = get('subject')
            if (subjectField.value.includes(`${subject}, `)) {
                current = subjectField.value
                edited = subjectField.value.replace(`${subject}, `, '')
                subjectField.value = edited
            } else {
                current = subjectField.value
                subjectField.value = `${subject}, ${current}`
            }
        })
    })
}


function addRemoveEmailAddress() {
    buttons = document.querySelectorAll('.email-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            newAddress = event.target.getAttribute("data-type")
            addressField = get('email-address')
            if (addressField.value.includes(`${newAddress}, `)) {
                current = addressField.value
                edited = addressField.value.replace(`${newAddress}, `, '')
                addressField.value = edited
            } else {
                current = addressField.value
                addressField.value = `${newAddress}, ${current}`
            }
        })
    })
}


buttonPress()
get()
addRemoveEmailAddress()
addRemoveSubject()
addRemoveHateCrimeAdresses()
addRemovePoliceBrutailityAdresses()
addRemoveCivilRightsAdresses()