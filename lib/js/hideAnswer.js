const answer = document.querySelector('[data-js="card__answer"]');
let button = document.querySelector('[data-js="card__button--answer"]');

button.addEventListener("click", () => {
  answer.classList.toggle("card__p--hidden");
  console.log("button");
});
