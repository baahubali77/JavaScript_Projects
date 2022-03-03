const questions = [
  {
    question: "Question-1",
    a: "Option-a",
    b: "Option-b",
    c: "Option-c",
    d: "Option-d",
    correct: "a",
  },
  {
    question: "Question-2",
    a: "Option-a",
    b: "Option-b",
    c: "Option-c",
    d: "Option-d",
    correct: "c",
  },
  {
    question: "Question-3",
    a: "Option-a",
    b: "Option-b",
    c: "Option-c",
    d: "Option-d",
    correct: "d",
  },
  {
    question: "Question-4",
    a: "Option-a",
    b: "Option-b",
    c: "Option-c",
    d: "Option-d",
    correct: "b",
  },
];

let currQues = 0;
let score = 0;

const questionEl = document.getElementById("ques");
const optionEl = document.querySelectorAll(".radio-btn");
const optionA = document.getElementById("a_text");
const optionB = document.getElementById("b_text");
const optionC = document.getElementById("c_text");
const optionD = document.getElementById("d_text");

const quizContainer = document.querySelector(".quiz-container");

const submitBtn = document.getElementById("submitBtn");

function nextQues() {
  deSelected();
  const quesCopy = questions[currQues];

  questionEl.innerText = quesCopy.question;
  optionA.innerText = quesCopy.a;
  optionB.innerText = quesCopy.b;
  optionC.innerText = quesCopy.c;
  optionD.innerText = quesCopy.d;
}

submitBtn.addEventListener("click", () => {
  const quesCopy = questions[currQues];

  let givenAns = selectedOption();

  if (!givenAns) {
    alert("Press any option");
  } else {
    if (givenAns == quesCopy.correct) {
      score++;
      givenAns = undefined;
    }

    currQues += 1;

    if (currQues == questions.length) {
      quizContainer.innerHTML = `<h2>Your Score is ${score}!! Game is Over.</h2><button onClick = "location.reload()">RELOAD</button>`;

      currQues = 0;
    }

    nextQues();
  }
});

function deSelected() {
  optionEl.forEach((option) => {
    option.checked = false;
  });
}

function selectedOption() {
  let ans = undefined;

  optionEl.forEach((option) => {
    if (option.checked) {
      ans = option.id;
    }
  });

  return ans;
}
