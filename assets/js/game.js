// $(document).ready(function() {
//   $(".timer").hide()
//   $(".correct-text").hide()
//   $(".incorrect-text").hide()

//create variables for timer and score, questions and choices; initial values

var timerCounter = 10;
var currentQuestion = 3;
var currentChoices = 0;
var correct = 0;
var timer;
var incorrect = 0;
//   var unanswered = 0;

function nextQuestion() {
  currentQuestion++;
  displayTrivia();
}
//start a 10 second timer for user to choose an answer
function timeUp() {
  clearInterval(timer);
  nextQuestion();
  incorrect++;
}
function decrement () {
  timerCounter--;
  $(".timer-text").html("Timer: " + timerCounter);
    if (timerCounter === 0) {
      timeUp();
    }
}

//create function to display question and choices
function displayTrivia() {
  timerCounter = 10;
  timer = setInterval(decrement, 1000);
  var question = triviaArray[currentQuestion].question;
  var choices = triviaArray[currentQuestion].choices;

  // $(".timer-text").html("Timer: " + timerCounter);
  $(".game-text").html(`
        <h4>${question}</h4>
        ${displayChoices(choices)}
        `);
}

function displayChoices(choices) {
  let result = "";
  for (let i = 0; i < choices.length; i++) {
    result += `<button class="btn btn-dark choice" data-answer="${choices[i]}">${choices[i]}</button>`;
  }
  return result;
}
displayTrivia();

//set conditions for correct incorrect answers

//create end page to display correct/incorrect/unanswered? Hide/appear function?
//create a reset game function
// });
