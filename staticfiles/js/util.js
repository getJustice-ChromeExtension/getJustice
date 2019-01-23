// //* tooltip function */

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="tooltip"], .tooltip').tooltip("hide")
    buttons = $('button')
    buttons.click( function () {
            $('[data-toggle="tooltip"], .tooltip').tooltip("hide")
        });
})
