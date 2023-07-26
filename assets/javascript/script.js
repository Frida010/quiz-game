// Questions and answers for quiz game area
const questions = [

    {
        question: "What is the name of Sweden's capital city?",
        answers: [
            { text: "Skellefteå", correct: false },
            { text: "Stockholm", correct: true },
            { text: "Sundsvall", correct: false },
            { text: "Söderköping", correct: false },
        ]
    },
    {
        question: "How much of Sweden's surface is covered by trees?",
        answers: [
            { text: "1/3", correct: false },
            { text: "2/7", correct: false },
            { text: "2/3", correct: true },
            { text: "4/8", correct: false },
        ]
    }
];

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

// Reset answer inside buttons

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Checking for the correct and incorrect answers

