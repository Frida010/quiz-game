// Questions and answers for quiz game area


// Variables for game area 

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answser-btns");
const nextButton = document.getElementById("next");

// Start quiz function

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}