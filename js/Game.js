/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase('A winner is you'),
      new Phrase('Florna is an angel in disguise look into my eye'),
      new Phrase('Milk steak boiled over hard'),
      new Phrase('And it was also the night that the skeletons came to life'),
      new Phrase('There is no Dana only Zuul')
    ]
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * 5);
    return this.phrases[randomIndex];
  };
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    const phrase = game.getRandomPhrase();
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;

  };
  /**
   * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {};
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {}
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {};

}