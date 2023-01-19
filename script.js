// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

// declaring variables
var beginQuiz = document.querySelector("#start-timer")
var timeLeft = document.querySelector(".time-remain");
var questionArea = document.querySelector(".question-area");
var answerBlock = document.querySelector("#answer-area");
var answer1 = document.querySelector("#answer-button1");
var answer2 = document.querySelector("#answer-button2");
var answer3 = document.querySelector("#answer-button3");
var answer4 = document.querySelector("#answer-button4");
var answerResult = document.querySelector("#answer-result");
var score = 0;

// score and timer variables
var chosenAnswer = "";
var timer;
var timerCount = 60;
var penalty = 5;
var currentQuestionIndx = 0;

// function to start timer and display question and answer on click
beginQuiz.addEventListener("click", startQuiz);

function startQuiz() {
    this.style.display = "none";
    timerCount = 60;
    startTimer();
    showQuestion();
    
}

// the timer function that counts down and reveals the "show results" button when time runs out 
function startTimer() {
  timer = setInterval(function() {
  timeLeft.textContent = "Time Left: " + timerCount;
  timerCount--;
  
  if (timerCount <= 0) {
    clearInterval(timer);
    showResultsButton();
  }
}, 1000);
}

// this function to replace the welcome line with the first question's text
function showQuestion() {
  var questionLine = document.getElementById("question-line");
  console.log(questions);
  var currentQuestion = questions[currentQuestionIndx].title;
  questionLine.textContent = currentQuestion;
  showAnswers();
}

//this function to show hidden answer area when start button clicked, to change visibility to visible
function showAnswers() {
    var answerBlock = document.getElementById("answer-area");
      answerBlock.style.display = "flex";
    answer1.textContent = questions[currentQuestionIndx].choices[0]
    answer2.textContent = questions[currentQuestionIndx].choices[1]
    answer3.textContent = questions[currentQuestionIndx].choices[2]
    answer4.textContent = questions[currentQuestionIndx].choices[3]

    answer1.addEventListener("click", nextQuestion2)
    answer2.addEventListener("click", nextQuestion2)
    answer3.addEventListener("click", nextQuestion2)
    answer4.addEventListener("click", nextQuestion2)
}


function nextQuestion2(event) {
  // compares clicked answer to question object to see if correct, and adds or subtracts score
  
  var clickedChoice = event.target;
  if (clickedChoice.matches(questions[currentQuestionIndx].answer)) {
    score++;
  }
    else {
     timerCount = timerCount - penalty;
     score--;

    }
    currentQuestionIndx++
    setTimeout(showQuestion, 500);
  }

  // when last question is answered, go to showResults()

  function lastQuestion() {
    if (currentQuestionIndx >= questions.length) {

    showResultsButton();
    }
}



  // this function to show results page link button when last question is answered
  function showResultsButton() {
      var resultsDiv = document.getElementById("results-area");
      resultsDiv.style.display = "flex";



  }

