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
      new Phrase('Taco Cat'),
      new Phrase('Milk steak boiled over hard'),
      new Phrase('the night that the skeletons came to life'),
      new Phrase('There is no Dana only Zuul')
    ]
    return phrases;
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * 5); // CHANGE BACK TO 5
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
   * won */
  checkForWin() {
    const phraseLetters = document.getElementById('phrase').firstElementChild.children;
    for (const letter of phraseLetters) {
      if (letter.classList.toString().includes('hide'))
        return false;
    }
    return true;
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {

    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
    const heartNodeList = document.querySelectorAll('#scoreboard ol li');
    for (let i = 0; i < this.missed; i++) {
      heartNodeList[i].firstElementChild.setAttribute('src', '/images/lostHeart.png')
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    let gameOverHeader = document.querySelector('#game-over-message');
    const overlay = document.getElementById('overlay');
    if (gameWon) {
      gameOverHeader.textContent = "You win!"
      overlay.className = 'win';
      overlay.style.display = 'block';
    } else {
      gameOverHeader.textContent = "Oh noes ya lose!"
      overlay.className = 'lose';
      overlay.style.display = 'block';
    }
  }
  /**
   * Handles onscreen keyboard button cicks
   * @param (HTMLButtonElement)
   */
  handleInteraction(button) {
    if (button.className === 'key') {
      if (this.activePhrase.checkLetter(button.innerText)) {
        button.className = 'chosen'
        this.activePhrase.showMatchedLetter(button.innerText);
      } else {
        button.className = 'wrong';
        this.removeLife()
      }
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin());
      };
    }
  }
}