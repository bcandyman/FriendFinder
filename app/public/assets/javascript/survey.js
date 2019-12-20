//append user options for survey and append to SELECT tags
//this adds the options for the user questions
for (let quesNum = 1; quesNum <= 10; quesNum++) {
    const options = []
    const maxVal = 5

    //add defalut value
    options[0] = $("<Option selected>").text("Select and Option").attr("value", -1)
    // options[0].attr("value", -1)

    //add options 1 through 5
    for (let i = 1; i <= maxVal; i++) {
        options[i] = $("<Option>").text(i)
        options[i].attr("value", i)
    }

    //add strongly agree and disagree text
    options[1].text("1 Strongly Disagree")
    options[maxVal].text(maxVal + " Strongly agree")

    $("#survey-q" + quesNum).append(options)
}
console.log("LLL")

//remove is-invalid upon changing input.
//this is if user previously tried to enter data with invalid inputs
$(".form-control").change(function () {
    $(this).removeClass('is-invalid')
});



$("#submit-profile").on("click", function (event) {

    event.preventDefault()
    //this method is used to validate user inputs
    var isInputValid = () => {

        let result = true;

        if (newProfile.name.trim().length === 0) {
            $("#name").addClass('is-invalid')
            result = false
        }
        else {
            $("#name").removeClass('is-invalid')
        }

        if (newProfile.photoAddress.trim().length === 0) {
            $("#image-address").addClass('is-invalid')
            result = false
        }
        else {
            $("#image-address").removeClass('is-invalid')
        }

        newProfile.scores.forEach((val, index) => {
            if (val === -1) {
                $("#survey-q" + (index + 1)).addClass('is-invalid')
                result = false
            }
            else {
                $("#survey-q" + (index + 1)).removeClass('is-invalid')
            }
        })
        return result
    }

    //build object to pass to api
    var newProfile = {
        name: $("#name").val().trim(),
        photoAddress: $("#image-address").val().trim(),
        scores: []
    };

    for (let i = 1; i <= 10; i++) {
        console.log('i: ' + $("#survey-q" + i).val())
        newProfile.scores[i - 1] = parseInt($("#survey-q" + i).val())
    }


    if (!isInputValid()) {
        //send information to api
        console.log(newProfile)
        $.post("/survey", newProfile)
            .then((data) => {
                console.log(data)
                $('#match-name').text(data.name)
                $('#profile-image').attr('src','images/' + data.photoAddress)
                $('#viewFriendModal').modal('show');
            });
    }
    else {
        //do not clear form if form was invalid upon submitting.
        event.preventDefault()
    }
})

