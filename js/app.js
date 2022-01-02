/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Variables declared for game
 */
let game;

const startGame = document.getElementById("btn__reset");

const phraseList = document.querySelector("#phrase ul");
const heartList = document.querySelectorAll("#scoreboard ol .tries");

const onScreenKeyboardLetters = document.querySelectorAll("#qwerty button");
const onScreenKeyboard = document.getElementById("qwerty");


/**
 * Event listener to start the game
 * Resets the game board, resets lives, creates a new game via the new Game() constructor and proceeds to call the startGame() method
 */
startGame.addEventListener("click", (e) => {
  onScreenKeyboardLetters.forEach((button) => {
    button.className = "key";
  });
  heartList.forEach((heart) => {
    heart.firstElementChild.setAttribute("src", "images/liveHeart.png");
  });

  const phraseListItems = document.querySelectorAll("#phrase ul li");
  if (phraseListItems.length > 0) {
    for (let i = 0; i < phraseListItems.length; i++) {
      phraseList.removeChild(phraseList.firstElementChild);
    }
  }
  game = new Game();
  game.startGame();
});

/**
 * Event listeners for click events and keyup events to call the handle interaction method so the user can input characters either with mouse or keyboard
 */
onScreenKeyboard.addEventListener("click", (e) => {
  game.handleInteraction(e.target);
});

document.addEventListener("keyup", (e) => {
  const buttonList = document.querySelectorAll("#qwerty button");
  buttonList.forEach((button) => {
    if (button.textContent === e.key) {
      game.handleInteraction(button);
    }
  });
});
