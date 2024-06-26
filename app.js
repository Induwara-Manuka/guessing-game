let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

let min = 1;
let max = 10;

function guessNumber() {
  let guess = document.getElementById("guessing").value;
  let lblOutput = document.getElementById("output");
  guess = Number(guess);

  if (guess == randomNumber) {
    lblOutput.innerHTML=('Congratulations! You guessing successful.');
  } else if (guess > randomNumber){
    lblOutput.innerHTML=('Wrong number. Try again. It is less than');
  } else if (guess < randomNumber){
    lblOutput.innerHTML=('Wrong number. Try again. It is more than');
  }
}

