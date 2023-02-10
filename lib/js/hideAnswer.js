const answer = document.querySelector('[data-js="card__answer"]');
let button = document.querySelector('[data-js="card__button--answer"]');
const buttonLink = document.querySelector('[data-js="card__button--link"]');

button.addEventListener("click", () => {
  answer.classList.toggle("card__p--hidden");
  changeButtonText();
});

function changeButtonText() {
  if (buttonLink.textContent === "Show Answer") {
    buttonLink.textContent = "Hide Answer";
  } else {
    buttonLink.textContent = "Show Answer";
  }
}
