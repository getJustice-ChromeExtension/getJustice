

//*** globals ***/

function get(id) {
    object = document.getElementById(id)
    return object
}

let subjectHeader = "Report from getJustice: "

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

function changeSubject() {
    buttons = document.querySelectorAll('.subject-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let subject = button.getAttribute("data-type")
            let subjectField = get('subject')
            let subjectArray = []

        })
    })
}



// slice out from 24 and replace the rest
function addRemoveSubject() {
    buttons = document.querySelectorAll('.subject-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let subject = button.getAttribute("data-type")
            let subjectField = get('subject')
            if (subjectField.value.includes(`${subject}, `)) {
                let edited = subjectField.value.replace(`${subject}, `, '')
                subjectField.value = edited
                let extraEnd = subjectField.value.slice(-2)
                let extraFront = subjectField.value.slice(24, 26)
                if (extraEnd === ', ') {
                    let finalStr = subjectField.value.replace(extra, '')
                    subjectField.value = finalStr
                }else if (extraFront === ', ') {
                    let newStr = subjectField.value.replace(extraFront, '')
                    subjectField.value = newStr
                }
            } else if (subjectField.value.includes(`${subject}`)) {
                let edited = subjectField.value.replace(`${subject}`, '')
                subjectField.value = edited
                let extraEnd = subjectField.value.slice(-2)
                let extraFront = subjectField.value.slice(24, 26)
                if (extraEnd === ', ') {
                    let finalStr = subjectField.value.replace(extraEnd, '')
                    subjectField.value = finalStr
                }else if (extraFront === ', '){
                    let newStr = subjectField.value.replace(extraFront, '')
                    subjectField.value = newStr
                }
            } else {
                let current = subjectField.value
                subjectField.value = `${current}, ${subject}`
                let extraEnd = subjectField.value.slice(-2)
                let extraFront = subjectField.value.slice(24, 26)
                if (extraEnd === ', '){
                    let finalStr = subjectField.value.replace(extraEnd, '')
                    subjectField.value = finalStr
                }else if (extraFront === ', ') {
                    let newStr = subjectField.value.replace(extraFront, '')
                    subjectField.value = newStr
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
// changeSubject()
addRemoveHateCrimeAdresses()
addRemovePoliceBrutailityAdresses()
addRemoveCivilRightsAdresses()
