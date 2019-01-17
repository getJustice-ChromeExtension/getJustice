// import $ from 'jquery'
// import Popper from 'popper.js'
// import Util from './util'


//* tooltip function */
$(document).ready(function () {
    console.log("tooltip connected")
    $('[data-toggle="tooltip"]').tooltip()
    $('button').on('hover', function () {
        console.log("hovered over")
        
        $('[data-toggle="tooltip"]').tooltip("show")
        $("button").click(function () {
            console.log("clicked!")
            $('[data-toggle="tooltip"]').tooltip("hide")
        })
    })
});
