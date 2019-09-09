// $(document).ready(function() {
//   $("timer-text").hide();
//   $("game-text").hide();

  $(".start-text").click(function(){
    $(".start-text").remove();
    $(".timer-text").html(timerCounter);
    displayTrivia();
  })
  //create variables for timer and score, questions and choices; initial values
  var timerCounter = 15;
  var currentQuestion = 0;
  var currentChoices = 0;
  var correct = 0;
  var timer;
  var incorrect = 0;

  //set conditions for next questions to queue, and to stop queue when questions run out
  function nextQuestion() {
    var gameOver = (triviaArray.length - 1) === currentQuestion;
    if (gameOver) {
      // alert("Thanks for playing Leopardy!!");
      displayResult();
    } 
    else {
      currentQuestion++;
      displayTrivia();
    }
  }
  //start a 10 second timer for user to choose an answer, and what happens when timer runs out
  function timeUp() {
    clearInterval(timer);
    nextQuestion();
    incorrect++;
  }
  function countDown() {
    timerCounter--;
    $(".timer-text").html("Timer: " + timerCounter);
    if (timerCounter === 0) {
      timeUp();
    }
  }
  //create function to display question and choices
  function displayTrivia() {
    timerCounter = 15;
    timer = setInterval(countDown, 1000);

    var question = triviaArray[currentQuestion].question;
    var choices = triviaArray[currentQuestion].choices;
    displayRemainingQuestions();

    $(".timer-text").html("Timer: " + timerCounter);
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

  //set conditions for correct incorrect answers, and proceed to next question
  $(document).on("click", ".choice", function() {
    clearInterval(timer);
    var clickedChoice = $(this).attr("data-answer");
    var correctAnswer = triviaArray[currentQuestion].answer;

    if (correctAnswer === clickedChoice) {
      correct++;
      nextQuestion();
    } else {
      incorrect++;
      nextQuestion();
    }
  });

  function displayResult() {
    var result = `
      <button class="btn btn-success">You nailed ${correct} question(s)!!</button>
      <button class="btn btn-danger">You missed ${incorrect} question(s) :( </button>
      <button class="btn btn-secondary">Total Questions ${triviaArray.length}</button>
      <button class="btn btn-primary reset">Reset Game</button>
      `;
    $(".game-text").html(result);
  }
  //create a reset button to restore original values
  $(document).on("click",".reset", function(){
    console.log("test")
    timerCounter = 15;
    currentQuestion = 0;
    currentChoices = 0;
    correct = 0;
    timer = null;
    incorrect = 0;

    displayTrivia();

  })

  function displayRemainingQuestions(){ 
  var remainingQuestions = triviaArray.length - (currentQuestion + 1);
  var totalQuestion = triviaArray.length;

  return `Remaining Question: ${remainingQuestions}/${totalQuestion};
  `}
  
  $(".start-text").click(function(){
    $(".start-text").remove();
    $(".timer-text").html(timerCounter);
    displayTrivia();

});
