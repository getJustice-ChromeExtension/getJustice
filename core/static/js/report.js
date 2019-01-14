// need to write function that checks and unchecks boxes
// need a function for subjects

function get(id) {
    object = document.getElementById(id)
    return object
}


function addRemoveSubject() {
    buttons = document.querySelectorAll('.subject-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            newAddress = event.target.getAttribute("data-type")
            addressField = get('subject')
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