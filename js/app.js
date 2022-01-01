/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGame = document.getElementById('btn__reset');
const phraseList = document.querySelector('#phrase ul')
const heartList = document.querySelectorAll('#scoreboard ol .tries');


const onScreenKeyboardLetters = document.querySelectorAll('#qwerty button');

startGame.addEventListener('click', e => {

  onScreenKeyboardLetters.forEach(button => {
    button.className = 'key';
  })
  heartList.forEach(heart => {
    heart.firstElementChild.setAttribute('src', 'images/liveHeart.png');
  })


  const phraseListItems = document.querySelectorAll('#phrase ul li')
  if (phraseListItems.length > 0) {
    for (let i = 0; i < phraseListItems.length; i++) {
      phraseList.removeChild(phraseList.firstElementChild)
    }
  }
  game = new Game();
  game.startGame();
})


// Event Listener - Event Delegation
const onScreenKeyboard = document.getElementById('qwerty');
// handleInteraction()

onScreenKeyboard.addEventListener('click', e => {
  game.handleInteraction(e.target);
});

document.addEventListener('keyup', e => {
  const buttonList = document.querySelectorAll('#qwerty button');
  buttonList.forEach(button => {
    if (button.textContent === e.key) {
      game.handleInteraction(button)
    }
  })

})