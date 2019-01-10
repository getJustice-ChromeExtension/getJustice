//email modal function
function emailModal() {
    $("#ypolice").on('click', function () {
        $("#email-modal").addClass('is-active')
        console.log("active")
    })
    $(".modal-background,.modal-close, #cancel-button").on('click', function (event) {
        event.preventDefault()
        $("#email-modal").removeClass('is-active')
    })
    $('#email-form').on('submit', function (event) {
        event.preventDefault()
        $("emails").append($("#policeemail").innerText())
        $("subject").append($("#policesubject").innerText())
        $("content").append($("#brutalpolice").innerText())

        $("#email-modal").removeClass('is-active')
    }

    )
}
emailModal()