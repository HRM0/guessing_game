let button = document.querySelector(".button");

let number = Math.floor(100 * Math.random());
let guesses = [];

button.addEventListener("click", function () {
  let fillAnswer = document.querySelector(".Input");
  if (number == fillAnswer.value) {
    console.log("You Win");
  } else {
    guesses.push(fillAnswer.value);
    /* for (let i = 0; i < guesses.length; i++) {
      let answer = document.querySelector(`g${i}`);
      answer.textContent = guesses[i];
      
    }*/
    console.log(guesses);
  }

  //g1.textContent = fillAnswer.value;
  console.log("check", fillAnswer.value);
});
