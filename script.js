// Html Elements

const questionText = document.getElementById("question-text");
const submitbtn = document.getElementById("submitbtn");
const input = document.querySelector("input");
const scoretext = document.getElementById("score");
submitbtn.addEventListener("click", evaluateAnswer);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitbtn.click();
  }
});

// Global variables

let score = 0;
let answer;

//Global Methods

function generateRRandomeNumbers(min, max) {
  return Math.floor(Math.random() * max) + min;
}
function setText(element, text) {
  element.innerText = text;
}

function generateQuestion() {
  const firstNumber = generateRRandomeNumbers(1, 10);
  const secondNumber = generateRRandomeNumbers(1, 10);
  answer = firstNumber * secondNumber;
  const question = `What is ${firstNumber} * ${secondNumber} ?`;
  setText(questionText, question);
}
function evaluateAnswer() {
  console.log(answer);
  if (input.value == answer) {
    score += 1;
  } else if (score == 0) {
    score = 0;
  } else {
    score -= 1;
  }
  setText(scoretext, score);
  input.value = null;
  generateQuestion();
}

// Calling of Methods

generateQuestion();
