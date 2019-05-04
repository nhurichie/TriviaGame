var gameTimer;
var counter;

function checkPoint() {
    clearInterval(gameTimer);
    var answerOne = document.triviaQuiz.questionOne.value;
    var answerTwo = document.triviaQuiz.questionTwo.value;
    var answerThree = document.triviaQuiz.questionThree.value;
    var answerFour = document.triviaQuiz.questionFour.value;
    var answerFive = document.triviaQuiz.questionFive.value;
    var correctAnswer = 0;

   // console.log($("input[name = 'questionOne']:checked").val());

 

    if (answerOne == "True"){
        correctAnswer++;
    }
    if (answerTwo == "True"){
        correctAnswer++;
    }
    if (answerThree == "False"){
        correctAnswer++;
    }
    if (answerFour == "False"){
        correctAnswer++;
    }
    if (answerFive == "False"){
        correctAnswer++;
    }

    var popMessage = ["Great job! You did so well!", "May need some practice!"];

    var gifWinLose = ["assets/images/youWin.gif", "assets/images/youLost.gif"];

    var scoredQuiz;
        if (correctAnswer <3) {
            scoredQuiz = 1;
        }
        else {
            scoredQuiz = 0;
    }

    document.getElementById("checkAnswers").style.visibility="visible";

    document.getElementById("yayNayMessage").innerHTML = popMessage[scoredQuiz];

    document.getElementById("answerConfirms").innerHTML= "You got it " + correctAnswer + " correct!";

    document.getElementById("gifWinLose").src = gifWinLose[scoredQuiz];

    $("#finButton").attr("disabled", true);
}

function startGame(){
    clearInterval(gameTimer);
    $("#nhuQuiz").show();
    $("#beginButton").attr("disabled", true);
    // document.getElementsByClassName("answerBox").checked = false;
    counter = 20;

    gameTimer = setInterval(timer, 1000);
}

function timer() {
    counter = counter - 1;
    if (counter <= 0) {
        clearInterval(gameTimer);
        alert("TIMES UP!");
        $("#nhuQuiz").hide(); 
        location.reload();
    }

    $("#timer").text(counter);    
} 

$(document).ready(function(){
    $("#nhuQuiz").hide();

});