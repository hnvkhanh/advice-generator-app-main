
document.addEventListener("DOMContentLoaded", getAdvice);

document.querySelector("button").addEventListener("click", getAdvice);

function getAdvice(){
  fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    advice = data.slip.advice;
    id = data.slip.id;
    document.querySelector(".card-title").innerHTML = "ADVICE #" + id;
    document.querySelector(".card-text").innerHTML = '"' +  advice + '"';
  });
}