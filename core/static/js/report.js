

//*** globals ***/

function get(id) {
    object = document.getElementById(id)
    return object
}

//*** function to remove screenshot ***//
function removeScreenshot() {
    $('#remove-screenshot').on('click', function () {
        $('#new-screenshot').remove()
        $('#no-screenshot').hide()
    });
};


function toggelButtons() {
    buttons = document.querySelectorAll('.form-btn')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                button.classList.remove('active')
            } else {
                button.classList.add('active')
            }

        })

    })
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
                edited = subjectField.value.replace(`${subject}, `, '')
                subjectField.value = edited
                extra = subjectField.value.slice(-2)
                console.log(extra)
                if (extra === ', ') {
                    finalStr = subjectField.value.replace(extra, '')
                    subjectField.value = finalStr
                }
            } else if (subjectField.value.includes(`${subject}`)) {
                edited = subjectField.value.replace(`${subject}`, '')
                subjectField.value = edited
                extra = subjectField.value.slice(-2)
                console.log(extra)
                if (extra === ', ') {
                    finalStr = subjectField.value.replace(extra, '')
                    subjectField.value = finalStr
                }
            } else {
                current = subjectField.value
                subjectField.value = `${subject}, ${current}`
                extra = subjectField.value.slice(-2)
                console.log(extra)
                if (extra === ', '){
                    finalStr = subjectField.value.replace(extra, '')
                    subjectField.value = finalStr
                }
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
            if (addressField.value.includes(`${newAddress},`)) {
                edited = addressField.value.replace(`${newAddress},`, '')
                addressField.value = edited
            } 
            else {
                current = addressField.value
                addressField.value = `${newAddress}, ${current}`
            }
        })
    })
}


//*** called functions ***/
removeScreenshot()
toggelButtons()
get()
addRemoveEmailAddress()
addRemoveSubject()
addRemoveHateCrimeAdresses()
addRemovePoliceBrutailityAdresses()
addRemoveCivilRightsAdresses()
