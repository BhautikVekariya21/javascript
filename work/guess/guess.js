let randomnumber = parseInt(Math.random() * 100 + 1); // Generates a random number between 1 and 100
console.log(randomnumber);

const submit = document.querySelector('#sbt'); // Selects the submit button
const userinput = document.querySelector('#gaussfield'); // Selects the input field for guesses
const guessslot = document.querySelector('.gausses'); // Selects the display area for previous guesses
const remaining = document.querySelector('.lastresult'); // Selects the area displaying remaining guesses
const loworhi = document.querySelector('.loworhi'); // Selects the area for hints about the guess
const startover = document.querySelector('.resultparas'); // Selects the area for the start-over button

const p = document.createElement('p'); // Creates a new paragraph element for the start new game message

let prevgausses = []; // Array to store previous guesses
let numgauss = 1; // Counter for the number of guesses
let playgame = true; // Game state variable

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents form submission
    const gauss = parseInt(userinput.value); // Gets user input and parses it to an integer
    console.log(gauss);
    validateguess(gauss); // Validates the user's guess
  });
}

function validateguess(gauss) {
  if (isNaN(gauss)) {
    alert('please enter a valid number'); // Alert for non-numeric input
  } else if (gauss < 1) {
    alert('please enter a number greater than 1'); // Alert for numbers less than 1
  } else if (gauss > 100) {
    alert('please enter a number less than 100'); // Alert for numbers greater than 100
  } else {
    prevgausses.push(gauss); // Adds the valid guess to the array of previous guesses
    if (numgauss === 11) {
      displaygausses(gauss); // Displays the last guess
      displaymessage(`Game over. The random number was ${randomnumber}`); // Displays game over message
      endgame(); // Ends the game
    } else {
      displaygausses(gauss); // Displays the guess
      checkgausses(gauss); // Checks if the guess is correct
    }
  }
}

function checkgausses(guess) {
  if (guess === randomnumber) {
    displaymessage(`Congratulations! You guessed the number ${randomnumber}`); // Congratulations message for correct guess
    endgame(); // Ends the game
  } else if (guess < randomnumber) {
    displaymessage(`The number is too low`); // Hint for low guess
  } else if (guess > randomnumber) {
    displaymessage(`The number is too high`); // Hint for high guess
  }
}

function displaygausses(guess) {
  userinput.value = ''; // Clears the input field
  guessslot.innerHTML += `<h2>${guess}</h2>`; // Displays the guess
  numgauss++; // Increments the guess counter
  remaining.innerHTML = `${11 - numgauss} `; // Updates remaining guesses
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`; // Displays messages about guesses
}

function endgame() {
  userinput.value = ''; // Clears the input field
  userinput.setAttribute('disabled', ''); // Disables the input field
  p.classList.add('button'); // Adds a class for styling the new game button
  p.innerHTML = `<h2 id='newgame'>Start New Game</h2>`; // Creates new game button text
  p.style.cursor = 'pointer'; // Changes cursor style for button
  p.style.backgroundColor = 'Azure'; // Sets background color
  p.style.width = '550px'; // Sets button width
  p.style.border = '2px dashed black'; // Sets border style
  startover.appendChild(p); // Adds new game button to the DOM
  playgame = false; // Updates game state
  newgame(); // Sets up new game functionality
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame'); // Selects the new game button
  newgamebutton.addEventListener('click', function () {
    randomnumber = parseInt(Math.random() * 100 + 1); // Generates a new random number
    prevgausses = []; // Resets previous guesses
    numgauss = 1; // Resets guess counter
    guessslot.innerHTML = ''; // Clears previous guesses from the display
    remaining.innerHTML = `${11 - numgauss}`; // Resets remaining guesses display
    userinput.removeAttribute('disabled'); // Re-enables the input field
    startover.removeChild(p); // Removes the new game button from the DOM
    playgame = true; // Resets game state
  });
}


// Summary of JavaScript Logic
// Random Number Generation:

// The game generates a random number between 1 and 100 at the start, which the player has to guess.
// Element Selection:

// Various DOM elements are selected using document.querySelector, allowing interaction with the HTML components.
// Game State Management:

// The code manages the state of the game using variables such as playgame, prevgausses, and numgauss.
// Event Listeners:

// An event listener is added to the submit button that triggers when the button is clicked, calling the validateguess function.
// Validation:

// The validateguess function checks if the input is valid and alerts the user if it’s not. If valid, it checks if the user has exceeded the maximum number of guesses.
// Guess Checking:

// The checkgausses function compares the user's guess to the random number and provides feedback on whether the guess is correct, too high, or too low.
// Display Functions:

// Several functions are responsible for updating the display, including showing previous guesses, remaining guesses, and messages to the user.
// Ending the Game:

// When the game ends (either by guessing correctly or running out of guesses), a "Start New Game" button is displayed, allowing the player to restart.
// Starting a New Game:

// Clicking the new game button resets the necessary variables and DOM elements to begin a new round.
// Additional Considerations
// User Experience:

// Consider adding visual feedback, such as changing the background color or adding animations, to enhance user engagement.
// Input Validation:

// Further improve the user experience by providing instant feedback (e.g., changing border color) when the user enters an invalid input.
// Accessibility:

// Ensure that all messages and UI elements are accessible, providing appropriate ARIA labels and roles where necessary.
