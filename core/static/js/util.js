// //* tooltip function */
// $(document).ready(function () {
//     $('[data-toggle="tooltip"], .tooltip').tooltip();
//     $('button').on("hover", function () {
        
//         $('[data-toggle="tooltip"], .tooltip').tooltip("show");
//         $("button").click(function () {
//             $('[data-toggle="tooltip"],.tooltip').tooltip("hide");
//         });
//     });
// });

// // $(function () {
// //     $('[data-toggle="tooltip"]').tooltip()

// // })


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    console.log("connected")
    console.log(button)
    
    $('button').each().on("mouseover", () => {
    $('[data-toggle="tooltip"]').tooltip("show")  
    })
    // buttons.each().click( () => {
    //     console.log("click")
    //     $('[data-toggle="tooltip"], .tooltip').tooltip("hide")
    // })
})