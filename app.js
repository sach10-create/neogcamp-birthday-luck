const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".check-button");
const outputBox = document.querySelector(".output-box");

function clickHandler() {
    var dob = dateOfBirth.value;
    var sum = prediction(dob);
    var number = luckyNumber.value;
    if (sum && number) {
        logic(sum, number);
    } else {
        outputBox.innerText = "Please enter both the fields";
    }
}

function logic(sum, number) {
    var temp = sum % number;
    if (temp == 0) {
        displayMsg("WOAHH!! Your Birthday is LUKCY");
    } else {
        displayMsg("Unlucky!!");
    }
}

function prediction(dob) {
    var sum = 0;
    dob = dob.replaceAll("-", "");
    for (var i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function displayMsg(message) {
    outputBox.innerText = message;
}




checkButton.addEventListener('click', clickHandler);