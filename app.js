const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".check-button");
const outputBox = document.querySelector(".output-box");

function clickHandler(){
    var dob = dateOfBirth.value;
    var sum = prediction(dob)
}

function prediction(dob){
    var sum = 0;
    dob = dob.replaceAll("-","");
    for(var i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    console.log(sum);
}




checkButton.addEventListener('click', clickHandler);
