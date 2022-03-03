const addButton = document.getElementById("add-btn");

const inputText = document.getElementById("list-input");

const text = document.querySelector(".phara");

const workContainer = document.querySelector(".main-list");

const crossButton = document.getElementsByClassName("cross-btn");
const tickButton = document.getElementsByClassName("tick-btn");

const localItem = JSON.parse(localStorage.getItem("todo"));

if (localItem) {
  localItem.forEach((item) => {
    addingItem(item);
  });
}

function addWork() {
  let text = undefined;

  text = inputText.value;

  return text;
}

function addingItem(item) {
  if (item) {
    const inputEl = document.createElement("li");

    inputEl.setAttribute("class", "work-container");

    // const textEl = document.createElement("p");
    // textEl.setAttribute("class", "phara");
    // textEl.innerHTML = input;
    // console.log(textEl);
    // inputEl.innerHTML = textEl;
    inputEl.innerHTML = `<p class="phara">${item.text}</p><button class="tick-btn">&#10003;</button><button class="cross-btn"><i class="fa fa-close"></i></button>
                   `;
    workContainer.appendChild(inputEl);
  }
}

addButton.addEventListener("click", (e) => {
  let input = addWork();
  if (input) {
    const inputEl = document.createElement("li");

    inputEl.setAttribute("class", "work-container");

    // const textEl = document.createElement("p");
    // textEl.setAttribute("class", "phara");
    // textEl.innerHTML = input;
    // console.log(textEl);
    // inputEl.innerHTML = textEl;
    inputEl.innerHTML = `<p class="phara">${input}</p><button class="tick-btn">&#10003;</button><button class="cross-btn"><i class="fa fa-close"></i></button>
                   `;
    workContainer.appendChild(inputEl);
    inputText.value = "";
    // done();
    update();
  } else {
    alert("add something");
  }
});
// crossButton.addEventListener("click", () => {
//   alert("v");
// });

// tickButton.forEach((item) => {
//   item.addEventListener("click", () => {
//     const pharaEl = item.previousElementSibling;
//     pharaEl.style.backgroundColor = "green";

//     alert("a");
//   });
// });

function update() {
  const listEl = document.querySelectorAll("p");

  const todo = [];

  listEl.forEach((listEl) => {
    console.log(listEl.innerText);
    todo.push({
      text: listEl.innerText,
    });
  });

  localStorage.setItem("todo", JSON.stringify(todo));
}

console.log(addButton);
console.log(tickButton);
