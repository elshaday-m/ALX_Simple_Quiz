// Function Declaration
function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Get feedback element
  const feedback = document.getElementById("feedback");

  // Check if an option is selected
  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "#dc3545"; // red for warning
    return;
  }

  const userAnswer = selectedOption.value;

  // Compare user's answer with correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green for success
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red for incorrect
  }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
