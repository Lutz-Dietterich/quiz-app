const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmark--on");
  console.log("sas geht");
});

const bookmark2 = document.querySelector('[data-js="bookmark2"]');

bookmark2.addEventListener("click", () => {
  bookmark2.classList.toggle("card__bookmark--on");
  console.log("sas geht");
});
