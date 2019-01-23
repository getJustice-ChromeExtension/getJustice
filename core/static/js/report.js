

//*** globals ***/

function get(id) {
    object = document.getElementById(id)
    return object
}


let subjectHeader = "Report from getJustice: "


function removeComma(toClean){
    let extraEnd = toClean.value.slice(-2)
    let extraFront = toClean.value.slice(24, 26)
    if (extraEnd === ', ') {
        let newStr = toClean.value.replace(extraEnd, '')
        toClean.value = newStr
        let cleanedStr = toClean.value
        return cleanedStr
    } else if (extraFront === ', ') {
        let newStr = toClean.value.replace(extraFront, '')
        toClean.value = newStr
        let cleanedStr = toClean.value
        return cleanedStr
    }
}


//*** function to remove screenshot ***//

function removeScreenshot() {
    $('#remove-screenshot').on('click', function () {
        $('#new-screenshot').remove()
        $('#no-screenshot').hide()
    });
};


//***  button functions ***/

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
            let subject = button.getAttribute("data-type")
            let subjectField = get('subject')
            if (subjectField.value.includes(`${subject}, `)) {
                let edited = subjectField.value.replace(`${subject}, `, '')
                subjectField.value = edited           
                let toClean = subjectField
                removeComma(toClean)
            } else if (subjectField.value.includes(`${subject}`)) {
                let edited = subjectField.value.replace(`${subject}`, '')
                subjectField.value = edited
                let toClean = subjectField
                removeComma(toClean)
            } else {
                let current = subjectField.value
                subjectField.value = `${current}, ${subject}`
                let toClean = subjectField
                removeComma(toClean)
            }
        })
    })
}


function addRemoveEmailAddress() {
    let buttons = document.querySelectorAll('.email-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let newAddress = button.getAttribute("data-type")
            let addressField = get('email-address')
            if (addressField.value.includes(`${newAddress},`)) {
                let edited = addressField.value.replace(`${newAddress},`, '')
                addressField.value = edited
            } 
            else {
                let current = addressField.value
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
