/* make the API call */
// FB.api(
//     "/me/feed",
//     // {
//     //     "with": "location"
//     // },
//     function (response) {
//         if (response && !response.error) {
//             $('#userfeed').append("/me/feed")

//         }
//     }
// );
FB.api(
    "/615658225554344/feed",
    "POST",
    {
        "message": "This is a test message"
    },
    function (response) {
        if (response && !response.error) {
            $('#userfeed').append("/615658225554344/feed")
        }
    }
);