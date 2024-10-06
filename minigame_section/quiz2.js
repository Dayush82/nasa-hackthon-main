const quizQuestions = [
    {
        question: "What is NASA's goal with the Exoplanet Exploration Program?",
        choices: [
            "To find out if aliens are visiting us",
            "To discover planets that might support life",
            "To build a spaceship to Mars",
            "To learn about our own solar system"
        ],
        answer: 1
    },
    {
        question: "What type of planets is NASA especially interested in finding?",
        choices: [
            "Super giant planets",
            "Planets made of candy",
            "Earth-sized planets in the right spot to support life",
            "Planets that spin really fast"
        ],
        answer: 2
    },
    {
        question: "What is one fun way scientists find exoplanets?",
        choices: [
            "By asking aliens for help",
            "By watching stars wobble when a planet pulls on them",
            "By sending robots to take pictures",
            "By using super-duper telescopes only"
        ],
        answer: 1
    },
    {
        question: "Why does NASA study all kinds of planets, even the weird ones?",
        choices: [
            "Because they want to find out what makes them different",
            "So they can name them all",
            "To decide which ones are best for vacation",
            "To know how many people live there"
        ],
        answer: 0
    },
    {
        question: "What does \"Gravitational Microlensing\" help scientists do?",
        choices: [
            "Make stars shine brighter for a moment",
            "Find candy in space",
            "Zoom in on distant planets",
            "Measure how far the stars are"
        ],
        answer: 0
    },
    {
        question: "What is a \"Coronagraph\" used for?",
        choices: [
            "To block out light from a star so we can see nearby planets",
            "To take pictures of space cats",
            "To check the weather on other planets",
            "To create maps of the universe"
        ],
        answer: 0
    },
    {
        question: "How many methods do scientists have to find exoplanets?",
        choices: [
            "2",
            "5",
            "7",
            "10"
        ],
        answer: 2
    },
    {
        question: "What can scientists learn by studying other planetary systems?",
        choices: [
            "How to make better video games",
            "How to become astronauts",
            "HHow to build rocket ships",
            "More about how planets are formed and where life can exist"
        ],
        answer: 3
    },
    {
        question: "Why is it important to share discoveries about exoplanets with the public?",
        choices: [
            "To make science fun and exciting for everyone",
            "So people can travel to those planets",
            "To show off NASA's technology",
            "To find out who loves space the most"
        ],
        answer: 3
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
