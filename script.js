const button = document.querySelector("#calculateBtn");
const message = document.querySelector("#message");

function calculateScore(testOne, testTwo) {
  const total = testOne + testTwo;
  return total;
}

function showResult(name, score) {
  message.textContent = `Hello, ${name}! Your total score is ${score}.`;
}

button.addEventListener("click", function() {
  const studentName = prompt("Enter your name:");
  const firstScore = Number(prompt("Enter the score for Test One:"));
  const secondScore = Number(prompt("Enter the score for Test Two:"));

  const finalScore = calculateScore(firstScore, secondScore);
  showResult(studentName, finalScore);
})
