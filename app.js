let input = document.querySelector(".container input");

let days = document.querySelector(".countdown-container .days p");
let hours = document.querySelector(".countdown-container .hours p");
let mins = document.querySelector(".countdown-container .mins p");
let secs = document.querySelector(".countdown-container .secs p");

input.value = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${new Date().getDate() + 1}`;

let futureDate = new Date(input.value);
let currentDate;

setInterval(() => {
  currentDate = new Date();

  displayFunction();
}, 1000);

let displayFunction = () => {
  let totalTime = 0;
  totalTime = new Date(futureDate - currentDate);

  days.textContent = Math.floor(totalTime / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor(
    (totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  mins.textContent = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));

  let formatSec = Math.floor((totalTime % (1000 * 60)) / 1000);
  secs.textContent = formatSec < 10 ? "0" + formatSec : formatSec;
};

displayFunction();

let dateChange = (e) => {
  e.preventDefault();
  futureDate = new Date(e.currentTarget.value);
  displayFunction();
};

input.addEventListener("change", (e) => {
  dateChange(e);
});
