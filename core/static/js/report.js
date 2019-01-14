// need to write function that checks and unchecks boxes


function get(id) {
    object = document.getElementById(id)
    return object
}


function fillEmailFields() {
    mayorButton = get('mayorButton')
    mayorButton.addEventListener('click', function() {
        console.log("clicked")
        get('emailAddress').value = "hey buddy"
    })
}


get()
fillEmailFields()