/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGame = document.getElementById('btn__reset');
startGame.addEventListener('click', e => {
  console.log('work');
  game = new Game();
  game.startGame();
})