let button = document.querySelector(".button");
let reset = document.querySelector(".reset");
let hint = document.querySelector(".hint");
let game_text = document.querySelector(".game_text");
let number = Math.floor(100 * Math.random());
let fillAnswer = document.querySelector(".Input");
let guesses = [];

button.addEventListener("click", function () {
  guesses.push(fillAnswer.value);

  if (number == fillAnswer.value) {
    game_text.innerHTML = "You Win!";
    game_text.style.backgroundColor = "red";
  } else if (guesses.length > 5){
    console.log("You Lose");

  } else {
     for (let i = 0; i < guesses.length; i++) {
      let answer = document.querySelector(`.g${i}`);
      answer.innerHTML = guesses[i];
     }
  }
  console.log(number, guesses);
});

reset.addEventListener("click", function () {
  game_text.innerHTML = "Guess a number between 1-100";
  game_text.style.backgroundColor = "white";
  fillAnswer.value = "";
  guesses = []
  number = Math.floor(100 * Math.random());
  for (let i = 0; i < 5; i++) {
    let answer = document.querySelector(`.g${i}`);
    answer.innerHTML = "";
   }

})

hint.addEventListener("click", function () {
  let high = Math.floor(Math.random()*10) + number
  let low = number - Math.floor(Math.random()*10)
  game_text.innerHTML = `the number is between ${low} and ${high}`
})

