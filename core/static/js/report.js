// need to write function that checks and unchecks boxes
// need a function for subjects

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



get()
addRemoveEmailAddress()
addRemoveSubject()
addRemoveHateCrimeAdresses()
addRemovePoliceBrutailityAdresses()
addRemoveCivilRightsAdresses()