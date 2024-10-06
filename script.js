// script.js
function showQuestions(difficulty) {
    document.getElementById('easy-quiz').style.display = 'none';
    document.getElementById('hard-quiz').style.display = 'none';

    if (difficulty === 'easy') {
        document.getElementById('easy-quiz').style.display = 'block';
    } else if (difficulty === 'hard') {
        document.getElementById('hard-quiz').style.display = 'block';
    }
}

function checkAnswers(difficulty) {
    let form, resultDiv, answers;
    if (difficulty === 'easy') {
        form = document.getElementById('easy-quiz-form');
        resultDiv = document.getElementById('easy-result');
        answers = {
            eq1: 'a',
            eq2: 'a'
        };
    } else if (difficulty === 'hard') {
        form = document.getElementById('hard-quiz-form');
        resultDiv = document.getElementById('hard-result');
        answers = {
            hq1: 'b',
            hq2: 'a',
            hq3: 'a',
            hq4: 'a',
            hq5: 'a'
        };
    }

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}