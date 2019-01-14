// need to write function that checks and unchecks boxes


function get(id) {
    object = document.getElementById(id)
    return object
}


function fillEmailFields() {
    button = get('mayorButton')
    button.addEventListener('click', event => {
        console.log('clicked')
        newAddress = get('mayorButton').getAttribute("data-type")
        addressField = get('emailAddress').value
        console.log(addressField)
        if (addressField.includes(newAddress)) {
            addressField.replace(newAddress, '')
            console.log(`${addressField} adress field `)
        } else {
            addressField = newAddress
            console.log(`${newAddress} new address `)
        }
        // do not store functions in variables
        // fix this in the morning
        // it seems like there's a strange bug going on
    })
}


// function fillEmailFields2(button) {
//     // for button
//     // if that button has data-type get that
//     // apply it to the email value 
// }


get()
fillEmailFields()