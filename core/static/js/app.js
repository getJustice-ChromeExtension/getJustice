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
        $("#emails").append($("#policeemail").text())
        console.log("hi")
        $("subject").append($("#policesubject").text())
        $("content").append($("#brutalpolice").text())

        $("#email-modal").removeClass('is-active')
    }

    )
}
emailModal()