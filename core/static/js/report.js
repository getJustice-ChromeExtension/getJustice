// need to write function that checks and unchecks boxes
// need a function for subjects

function get(id) {
    object = document.getElementById(id)
    return object
}


function addRemoveEmailAddress(id) {
    buttons = document.querySelectorAll('.email-button')
    console.log(buttons)
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            newAddress = event.target.getAttribute("data-type")
            addressField = get('email-address')
            if (addressField.value.includes(`${newAddress},`)) {
                console.log(`removing ${newAddress}`)
                current = addressField.value
                console.log(`${current} current`)
                edited = addressField.value.replace(`${newAddress},`, '')
                console.log(`${edited} edited`)
                addressField.value = edited
            } else {
                current = addressField.value
                addressField.value = `${newAddress}, ${current}`
                console.log(`adding ${newAddress}`)
            }
        })
    })
}


// // make this function work for all buttons
// function fillmayorEmail() {
//     button = get('mayor-button')
//     button.addEventListener('click', () => {
//         newAddress = get('mayor-button').getAttribute("data-type")
//         addressField = get('email-address')
//         if (addressField.value.includes(`${newAddress},`)) {
//             console.log(`removing ${newAddress}`)
//             current = addressField.value
//             console.log(`${current} current`)
//             edited = addressField.value.replace(`${newAddress},`, '')
//             console.log(`${edited} edited`)
//             addressField.value = edited
//         } else {
//             current = addressField.value
//             addressField.value =`${newAddress}, ${current}`
//             console.log(`adding ${newAddress}`)
//         }
//     })
// }


// function fillsplcEmail() {
//     button = get('spclButton')
//     button.addEventListener('click', () => {
//         newAddress = get('spclButton').getAttribute("data-type")
//         addressField = get('email-address')
//         if (addressField.value.includes(`${newAddress},`)) {
//             console.log('changing address')
//             current = addressField.value
//             edited = addressField.value.replace(`${newAddress},`, '')
//             addressField.value = edited
//         } else {
//             current = addressField.value
//             addressField.value = `${newAddress}, ${current}`
//             console.log(`adding ${newAddress}`)
//         }
//     })
// }


get()
// fillmayorEmail()
// fillsplcEmail()
addRemoveEmailAddress()