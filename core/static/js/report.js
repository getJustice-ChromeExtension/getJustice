

//*** globals ***/

function get(id) {
    object = document.getElementById(id)
    return object
}


//*** function to keep the buttons pressed down ***//

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


function toggelButtons(){
    buttons = document.querySelectorAll('.form-btn')
    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            if (button.classList.contains('active')) {
                button.classList.remove('active')
            } else {
                button.classList.add('active')
            }

        })
       
    })
}


subjectEmails = [
    {
        subjectButton: 'hate-crime-button',
        emailType: 'hate-crime'
    },
    {
        subjectButton: 'police-brut-button',
        emailType: 'police-brut'
    },
    {
        subjectButton: 'civ-rights-violate-button',
        emailType: 'civ-rights'
    }
]




//*** functions for the buttons ***/


function addRemoveSubjectAdresses(subjectEmails) {
    for (i in subjectEmails) {
        subject = subjectEmails[i].subjectButton
        emailType = subjectEmails[i].emailType
        button = get(subject)
        email = document.querySelectorAll(emailType)
        button.addEventListener('click', () => {
            $("#formcollapseLink").collapse("show")
            buttons = document.querySelectorAll('.subject-button')
            emails = document.querySelectorAll('.email-button')
            emails.forEach(email => {
                if (email.classList.contains(emailType)) {
                    email.classList.add('active')
                    newEmail = email.getAttribute('data-type')
                    addressField = get('email-address')
                    if (addressField.value.includes(`${newEmail}, `)) {
                        email.classList.remove('active')
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
}


function addRemoveHateCrimeAdresses() {
    button = get('hate-crime-button')
    button.addEventListener('click', () => {
        $("#formcollapseLink").collapse("show")
        emails = document.querySelectorAll('.email-button')
        emails.forEach(email => {
            if (email.classList.contains('hate-crime')) {
                email.classList.add('active')
                newEmail = email.getAttribute('data-type')
                addressField = get('email-address')
                if (addressField.value.includes(`${newEmail}, `)) {
                    email.classList.remove('active')
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
                email.classList.add('active')
                newEmail = email.getAttribute('data-type')
                addressField = get('email-address')
                if (addressField.value.includes(`${newEmail}, `)) {
                    email.classList.remove('active')
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
                email.classList.add('active')
                newEmail = email.getAttribute('data-type')
                addressField = get('email-address')
                if (addressField.value.includes(`${newEmail}, `)) {
                    email.classList.remove('active')
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
            subject = button.getAttribute("data-type")
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
            newAddress = button.getAttribute("data-type")
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


//*** called functions ***/

toggelButtons()
// buttonPress()
get()
addRemoveEmailAddress()
addRemoveSubject()
addRemoveSubjectAdresses(subjectEmails)
// addRemoveHateCrimeAdresses()
// addRemovePoliceBrutailityAdresses()
// addRemoveCivilRightsAdresses()