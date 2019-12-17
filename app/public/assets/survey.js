
//append user options for survey and append to SELECT tags
for (let quesNum = 1; quesNum <= 10; quesNum++) {
    const options = []
    const maxVal = 5

    options[0] = $("<Option selected disabled>").text("Select and Option")

    for (let i = 1; i <= maxVal; i++) {
        options[i] = $("<Option>").text(i)
        options[i].attr("value", i)
    }

    options[1].text("1 Strongly Disagree")
    options[maxVal].text(maxVal + " Strongly agree")

    $("#survey-q" + quesNum).append(options)
}



$("#submit-profile").on("click", function (event) {
    event.preventDefault()
    console.log("clicked submit!")

    var newProfile = {
        name: $("#name").val().trim(),
        photoAddress: $("#image-address").val().trim(),
        scores: []
    };

    for (let i = 1; i <= 10; i++) {
        newProfile.scores[i - 1] = $("#survey-q" + i).val()
    }

    console.log(newProfile)
    $.post("/survey", newProfile)
        .then(function (data) {

        });
})