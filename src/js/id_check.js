$(document).ready(function(){
    $('#text').on("propertychange change keyup paste input", function(){
        let newValue = $(this).val();
        let answer = document.querySelector('.an');

        if(newValue.length >= 5 && newValue.length <= 20){
            answer.textContent = "정상";
            answer.style.color = "green";
        }else if(newValue.length == 0){
            answer.textContent = "필수값이다"
            answer.style.color="red";
        }
        else{
            answer.textContent="5이상 20이하를 적어";
            answer.style.color="red";
        }


        console.log(newValue.length);
    });
});
