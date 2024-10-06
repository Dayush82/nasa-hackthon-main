const quizQuestions = [
    {
        question: "What is an exoplanet?",
        choices: [
            "A planet outside our solar system",
            "A star in our galaxy",
            "A moon orbiting another planet",
            "A comet in space"
        ],
        answer: 0
    },
    {
        question: "What do most exoplanets orbit?",
        choices: [
            "Other stars",
            "Our sun",
            "Black holes",
            "Galaxies"
        ],
        answer: 0
    },
    {
        question: "How are other planetary systems different from ours?",
        choices: [
            "They have the same number of planets",
            "They have different numbers of stars and planets",
            "They only have one planet",
            "They don’t have stars"
        ],
        answer: 1
    },
    {
        question: "Why are exoplanets hard to see?",
        choices: [
            "They are very small",
            "They are faint compared to their stars",
            "They are too far away",
            "They are invisible"
        ],
        answer: 1
    },
    {
        question: "How do scientists study exoplanets?",
        choices: [
            "By using spaceships",
            "By observing them with telescopes",
            "By sending astronauts",
            "By drilling into planets"
        ],
        answer: 1
    },
    {
        question: "What is the closest known exoplanet to Earth?",
        choices: [
            "Jupiter",
            "Proxima Centauri b",
            "Alpha Centauri",
            "Kepler-452b"
        ],
        answer: 1
    },
    {
        question: "How many exoplanets have been discovered so far?",
        choices: [
            "Over 500",
            "Over 1,000",
            "Over 5,600",
            "Over 10,000"
        ],
        answer: 2
    },
    {
        question: "What are the main classes of exoplanets?",
        choices: [
            "Gas giants, Neptunians, Super-Earths",
            "Rocky planets, Gas planets, Icy planets",
            "Habitable, Inhabitable, Unknown",
            "Earth-like, Jupiter-like, Neptune-like"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const btnNext = document.getElementById("nextBtn");
const quizCompleteElement = document.getElementById("quiz-complete");

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("btn-choice");
        button.addEventListener("click", () => selectAnswer(index));
        choicesElement.appendChild(button);
    });

    feedbackElement.textContent = "";
    btnNext.style.display = "none"; // Hide the next button initially
    btnNext.disabled = true; // Disable the button initially
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const buttons = choicesElement.querySelectorAll(".btn-choice");

    buttons.forEach((button, index) => {
        if (index === question.answer) {
            button.classList.add("correct-answer"); // Add class for correct answer
            button.style.color = "#28a745"; // Set the text color to green
        } else {
            button.classList.add("wrong-answer"); // Add class for wrong answers
        }
        button.disabled = true; // Disable all buttons after an answer is selected
    });

    // Show feedback based on the selected answer
    if (selectedIndex === question.answer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Wrong! The correct answer was: " + question.choices[question.answer];
    }

    btnNext.style.display = "block"; // Show the next button
    btnNext.disabled = false; // Enable the button when an answer is selected
}

function showResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    feedbackElement.textContent = "";
    quizCompleteElement.textContent = `You answered ${score} out of ${quizQuestions.length} questions correctly!`;
    btnNext.style.display = "none"; // Hide the next button after quiz completion
}

btnNext.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Start the quiz
loadQuestion();
