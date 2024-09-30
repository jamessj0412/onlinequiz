// Correct answers
const correctAnswers = {
    q1: 'c', 
    q2: 'b', 
    q3: 'c'  
};

// Submit quiz function
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    let score = 0;

    // Iterate through each question and check if the selected answer is correct
    for (let q in correctAnswers) {
        const answer = form.elements[q].value;
        if (answer === correctAnswers[q]) {
            score++;
        }
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    document.getElementById('score').textContent = `You got ${score} out of 3 correct!`;

    // Hide the form after submission
    form.classList.add('hidden');
}

// Function to restart the quiz
function restartQuiz() {
    const form = document.getElementById('quiz-form');
    form.reset(); // Reset all radio inputs
    form.classList.remove('hidden'); // Show the quiz form
    document.getElementById('result').classList.add('hidden'); // Hide the result
}
