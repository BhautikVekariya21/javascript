let randomnumber = parseInt(Math.random() * 100 + 1);
console.log(randomnumber);

const submit = document.querySelector('#sbt');
const userinput = document.querySelector('#gaussfield');
const guessslot = document.querySelector('.gausses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevgausses = [];
let numgauss = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const gauss = parseInt(userinput.value);
    console.log(gauss);
    validateguess(gauss);
  });
}

function validateguess(gauss) {
  if (isNaN(gauss)) {
    alert('please enter a valid number');
  } else if (gauss < 1) {
    alert('please enter a number greater than 1');
  } else if (gauss > 100) {
    alert('please enter a number less than 100');
  } else {
    prevgausses.push(gauss);
    if (numgauss === 11) {
      displaygausses(gauss);
      displaymessage(`Game over. The random number was ${randomnumber}`);
      endgame();
    } else {
      displaygausses(gauss);
      checkgausses(gauss);
    }
  }
}

function checkgausses(guess) {
  if (guess === randomnumber) {
    displaymessage(`Congratulations! You guessed the number ${randomnumber}`);
    endgame();
  } else if (guess < randomnumber) {
    displaymessage(`The number is too low`);
  } else if (guess > randomnumber) {
    displaymessage(`The number is too high`);
  }
}

function displaygausses(guess) {
  userinput.value = '';
  guessslot.innerHTML += `<h2>${guess}</h2>`;
  numgauss++;
  remaining.innerHTML = `${11 - numgauss} `;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newgame'>Start New Game</h2>`;
  p.style.cursor = 'pointer';
  p.style.backgroundColor = 'Azure' 
  p.style.width = '550px'; 
  p.style.border = '2px dashed black';
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function () {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevgausses = [];
    numgauss = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numgauss}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}
