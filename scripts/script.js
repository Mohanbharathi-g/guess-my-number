// creating elements
const errormsgEl = document.querySelector('.error-message');
const scoreEl = document.querySelector('.score');
const buttonEl = document.querySelector('.btn-submit');

//creating a random number

const randomNumber = Math.floor(Math.random() * 100) + 1;
// creating  glopal variable
let score = 20;
// creating fuction
function checkMessage(message, color) {
  errormsgEl.style.display = 'block';
  errormsgEl.innerText = message;
  errormsgEl.style.color = color;
}

// getting user input

buttonEl.addEventListener('click', function () {
  const input = Math.ceil(Number(document.querySelector('.user-input').value));

  // validating input
  if (input < 1 || input > 100) {
    checkMessage(`Enter valid input`, `red`);
  } else {
    // validating guesse
    if (score > 1) {
      // validation is right
      if (input === randomNumber) {
        checkMessage(
          `Awesome!!! You winn this game and your score : ${score}`,
          `green`
        );

        errormsgEl.value = randomNumber;
      }
      // if validating goes wrong
      else if (input < randomNumber) {
        checkMessage(`Your value is Lower`, `red`);

        score = score - 1;
        scoreEl.innerText = score;
      } else if (input > randomNumber) {
        checkMessage(`Your value is higher`, `red`);
        score = score - 1;
        scoreEl.innerText = score;
      }

      // guesses cross the limits
    } else {
      checkMessage(`GAME OVER!!!`, `green`);
    }
  }
});
