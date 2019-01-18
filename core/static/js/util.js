// //* tooltip function */

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="tooltip"], .tooltip').tooltip("hide")
    console.log("connected");
    console.log(button);
    buttons = $('button');
    buttons.click( function () {
            console.log("click");
            $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
        });
})
