// $(document).ready(function() {
//   $(".timer").hide()
//   $(".correct-text").hide()
//   $(".incorrect-text").hide()

//create interval for timer on key event
//   function timer() {

// function reset(){ ???

//create variables for timer and score, questions and choices; initial values
var timer;
var timerCounter = 10;
var currentQuestion = 0;
var currentChoices = 0;
var correct = 0;
//   var incorrect = 0;
//   var unanswered = 0;

//create a start button that hides after the viewer clicks
// $(".start-button").click(function() {
//   $(this).hide();
//   $(".timer").show();
//   timer();
//   displayTrivia();
// });

// $(this).show()
//     $(".timer").text(timerCounter);
//     timer = setInterval(function() {

//       timerCounter--;
//       $(".timer").text(timerCounter);

//       if (timerCounter <= 0) {
//           alert("Time is UP!!");
//           incorrectChoice++;
//         currentQuestion++;
//         clearInterval(timer);
//         displayTrivia();
//         timer = 10;
//         return;
//       }
//     }, 1000);

// $(".game").html("<h4>" + choices + "<h4>");
// $(".question-text").text(triviaArray[currentQuestion].question);
// console.log(triviaArray[currentChoices]);
// $(".choices-text").text(triviaArray[currentChoices].choices);

//create function to display question and choices
function displayTrivia() {
  timerCounter = 10;
  timer = setInterval(decrement, 1000);
  var question = triviaArray[currentQuestion].question;
  var choices = triviaArray[currentQuestion].choices;

  $(".timer").html("Timer: " + timerCounter);
  $(".game").html(`
        <h4>${question}</h4>
        ${displayChoices(choices)}
        `);
}

function displayChoices(choices) {
  let result = "";
  for (let i = 0; i < choices.length; i++) {
    result += `<div class="btn btn-dark choice" data-answer="${choices[i]}">${choices[i]}</div>`;
  }
  return result;
}
displayTrivia();

//set conditions for correct incorrect answers

//create end page to display correct/incorrect/unanswered? Hide/appear function?
//create a reset game function
// });
