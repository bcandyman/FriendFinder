
for (let quesNum = 1; quesNum <= 10; quesNum++){
    let newOption = $("<Option selected disabled>").text("Select and Option")
    $("#survey-q" + quesNum).append(newOption)
    for (let optionNum = 1; optionNum <= 5; optionNum++){
        let newOption = $("<Option>")

        if (optionNum === 1){
            newOption.text(optionNum + " Strongly Disagree")
        }
        else if(optionNum === 5){
            newOption.text(optionNum + " Strongly Agree")
        }
        else{
            newOption.text(optionNum)
        }
        $("#survey-q" + quesNum).append(newOption)
    }
}