// need to write function that checks and unchecks boxes


function get(id) {
    object = document.getElementById(id)
    return object
}


function fillEmailFields() {
    button = get('mayorButton')
    button.addEventListener('click', event => {
        newAddress = get('mayorButton').getAttribute("data-type")
        addressField = get('emailAddress')
        if (addressField.value.includes(newAddress)) {
            console.log('changing address')
            current = addressField.value
            edited = addressField.value.replace(newAddress, '')
            addressField.value = edited
        } else {
            console.log('adding address')
            addressField.value = newAddress
        }
    })
}


// function fillEmailFields2(button) {
//     // for button
//     // if that button has data-type get that
//     // apply it to the email value 
// }


get()
fillEmailFields()