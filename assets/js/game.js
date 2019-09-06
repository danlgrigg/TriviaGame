
//create a start button that hides after the viewer clicks
//create object of 10 questions and answers and wrong answers 
var triviaArray = [
	{question:  "In what country could you encounter a wild leopard?",
    answerChoices:  ["Bulgaria", "Australia", "India", "The local zoo"],
    correctChoice:  [2],
    },
    
    {question: "How old is the earliest found fossil of a leopard?",
    answerChoices: ["500 years ago", "5000 years ago","20,000 years ago", "600,000 years ago"],
    correctChoice: [3],
    },

    {question:  "Which feline is the largest?",
    answer: ["Ocelot", "Leopard", "Siberian Snow Cat", "Lion"],
    correctChoice: [4],
    },

    {question:  "The etymology of Leopard derives from: ", 
    answer: ["Old English, leo- 'lion' and pard 'part'", "Old French, leo-'lion' pard-'spotted'", "Yo Mama", "Oxford Dictionary leo-'lion' pard-'party'"],
    correctChoice: [0],

    }];

var timerCounter = 30;
var correctChoice = 0;
var incorrectChoice = 0;
var unanswered = 0;

$("#start-button").click(function(){
    $(this).hide();
    timeCounter = setInterval(timerCounter, 1000); 
    displayTrivia();
    }); 

function timer(){
    timerCounter--;
    if (timerCounter <= 0) {
        clearInterval(timeCounter);
        return;
        
    }

function displayTrivia() {
    $("#question_div").html(triviaArray[0].question);
        question++;
    
        var choicesArr = triviaArray[0].choices;
        var buttonsArr = [];
    
        for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);
        }
    
        } 





//create interval for display clock on key event
//create variables for 
//create score counter for correct incorrect; 1 out of 10
//create random event to pick question from array 
//set conditions for correct incorrect answers
//create end page to display correct/incorrect/unanswered? Hide/appear function?
//create a reset game function