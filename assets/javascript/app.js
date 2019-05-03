function checkPoint() {

var answerOne = document.triviaQuiz.questionOne.value;
var answerTwo = document.triviaQuiz.questionTwo.value;
var answerThree = document.triviaQuiz.questionThree.value;
var answerFour = document.triviaQuiz.questionFour.value;
var answerFour = document.triviaQuiz.questionFive.value;
var correctAnswer = 0;

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

var popMessage = ["Great job! You did so well!", "May need some practice!"];

var gifsWinLose = ["assets/images/youWin.gif", "assets/images/youLost.gif"];

//NOT SURE HOW TO SET THIS UP
var scoredQuiz;
    if (correctAnswer <1){
        scoredQuiz = 1;
    }
    if (correctAnswer > 0 && correctAnswer <2){
        scoredQuiz = 0;
}

    document.getElementById("checkAnswers").style.visibility="visible";

    document.getElementById("yayNayMessage").innerHTML = popMessage[scoredQuiz];

    document.getElementById("answerConfirms").innerHTML= "You got it " + correctAnswer + " correct!";

    document.getElementById("gifsWinLose").src = gifsWinLose[scoredQuiz];
    $("#finButton").attr("disabled", true);

}


var quizTimer;

$(document).ready(function(){
    $("#nhuQuiz").hide();

    $(".beginButton").click(function(){
        clearInterval(quizTimer);
      $("#nhuQuiz").show();
      $("#finButton").attr("disabled", false);
      var counter = 20;
      document.getElementsByClassName("answerBox").checked = false;

      gameTimer = setInterval(timer, 1000);

        function timer() {
            counter=counter-1;
            if (counter <= 0) {
                clearInterval(quizTimer);
                alert("TIMES UP!");
                $("#nhuQuiz").hide();
                location.reload();
            }
            $("#timer").text(counter);    
        }
        
        timer();
    });
});