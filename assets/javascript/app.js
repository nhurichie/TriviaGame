function checkPoint() {

var questionOne = document.triviaQuiz.value;
var questionTwo = document.triviaQuiz.value;
var questionThree = document.triviaQuiz.value;
var questionFour = document.triviaQuiz.value;
var correctAnswer = 0;

    if (questionOne == "True"){
        correctAnswer++;
    }
    if (questionTwo == "True"){
        correctAnswer++;
    }
    if (questionThree == "False"){
        correctAnswer++;
    }
    if (questionFour == "False"){
        correctAnswer++;
    }

var popMessage = ["Great job! You did so well!", "May need some practice!"];

var gifsWinLOse = ["assets/images/youWin.gif", "assets/images/youLost.gif"];

//NOT SURE HOW TO SET THIS UP
var scoredQuiz;
    if (correctAnswer <1){
        scoredQuiz = 2;
    }
    if (correctAnswer > 0 && correctAnswer <2){
        scoredQuiz = 0;
}

    document.getElementById("checkAnswers").style.visibility="visible";

    document.getElementById("yayNayMessage").innerHTML = popMessage[scoredQuiz];

    document.getElementById("answerConfirms").innerHTML= "You got it " + correctAnswer + " correct!";

    document.getElementById("gifsWinLose").src = gifsWinLOse[scoredQuiz];
    $("#finButton").attr("disabled", true);

}


var quizTimer;
$(document).ready(function(){
    $(".container").hide();

    $(".beginButton").click(function(){
        clearInterval(gameTimer);
      $(".container").show();
      $("#finButton").attr("disabled", false);
      var counter = 20;
      document.getElementsByClassName("answerBox").checked = false;

      gameTimer = setInterval(timer, 1000);

        function timer() {
            counter=counter-1;
            if (counter <= 0) {
                clearInterval(gameTimer);
                alert("TIMES UP!");
                $(".container").hide();
                location.reload();
            }
            $("#timer").text(counter);    
        }
        

        timer();
    });
});