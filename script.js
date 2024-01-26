const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

const body = document.querySelector("body");
const button = document.querySelector("button");

const random = (number) => {
  return Math.floor(Math.random() * number);
};

function changeBackground() {
  button.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(
    255
  )})`;
}

button.addEventListener("click", changeBackground);
