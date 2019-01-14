// need to write function that checks and unchecks boxes


function get(id) {
    object = document.getElementById(id)
    return object
}


function fillmayorEmail() {
    button = get('mayorButton')
    button.addEventListener('click', () => {
        newAddress = get('mayorButton').getAttribute("data-type")
        addressField = get('emailAddress')
        if (addressField.value.includes(`${newAddress},`)) {
            console.log(`removing ${newAddress}`)
            current = addressField.value
            console.log(`${current} current`)
            edited = addressField.value.replace(`${newAddress},`, '')
            console.log(`${edited} edited`)
            addressField.value = edited
        } else {
            current = addressField.value
            addressField.value =`${newAddress}, ${current}`
            console.log(`adding ${newAddress}`)
        }
    })
}


function fillsplcEmail() {
    button = get('spclButton')
    button.addEventListener('click', () => {
        newAddress = get('spclButton').getAttribute("data-type")
        addressField = get('emailAddress')
        if (addressField.value.includes(`${newAddress},`)) {
            console.log('changing address')
            current = addressField.value
            edited = addressField.value.replace(`${newAddress},`, '')
            addressField.value = edited
        } else {
            current = addressField.value
            addressField.value = `${newAddress}, ${current}`
            console.log(`adding ${newAddress}`)
        }
    })
}


// function fillEmailFields2(button) {
//     // for button
//     // if that button has data-type get that
//     // apply it to the email value 
// }


get()
fillmayorEmail()
fillsplcEmail()