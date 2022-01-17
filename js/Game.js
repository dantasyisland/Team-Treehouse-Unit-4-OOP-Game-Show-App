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
   * Phrases are created by using the phrase contructor
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("A winner is you"),
      new Phrase("Taco Cat"),
      new Phrase("Milk steak boiled over hard"),
      new Phrase("the night that the skeletons came to life"),
      new Phrase("There is no Dana only Zuul"),
    ];
    return phrases;
  }
  /**
   * Selects random phrase from phrases property
   * A random index is generated and passed into the this.phrases array
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * 5); // CHANGE BACK TO 5
    return this.phrases[randomIndex];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   * Calls the getRandomPhrase() method and stores it in a const variable
   * Sets the active phrase for the game to that phrase
   * Calls the addPhraseToDisplay() method on the phrase
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    const phrase = game.getRandomPhrase();
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
  }
  /**
   * Checks for winning move by iterating through each letter in phrase displayed
   * If any are hidden the game is not won and false is returned
   * @return {boolean} True if game has been won, false if game wasn't
   * won */
  checkForWin() {
    const phraseLetters =
      document.getElementById("phrase").firstElementChild.children;
    for (const letter of phraseLetters) {
      if (letter.classList.toString().includes("hide")) return false;
    }
    return true;
  }
  /**
   * If called the missed property is increased and a life is removed from the scoreboard
   * If five lives are missed gameOver() method is called with false as it's parameter indicating
   * the player has lost
   */
  removeLife() {
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
    const heartNodeList = document.querySelectorAll("#scoreboard ol li");
    for (let i = 0; i < this.missed; i++) {
      heartNodeList[i].firstElementChild.setAttribute(
        "src",
        "/images/lostHeart.png"
      );
    }
  }
  /**
   * Displays game over message indicating whether the player has won or lost and also what the phrase was
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    let gameOverHeader = document.querySelector("#game-over-message");
    const overlay = document.getElementById("overlay");
    if (gameWon) {
      gameOverHeader.textContent = `You win! The phrase was ${this.activePhrase.phrase}`;
      overlay.className = "win";
      overlay.style.display = "block";
    } else {
      gameOverHeader.textContent = `Oh noes ya lose! The phrase was ${this.activePhrase.phrase}`;
      overlay.className = "lose";
      overlay.style.display = "block";
    }
  }
  /**
   * Handles onscreen keyboard button clicks.
   * The checkLetter() method is called and pending if the letter is included the letter will display on the screen and the keyboard onscreen will change color
   * or not indicating a hit or miss.
   * @param (HTMLButtonElement)
   */
  handleInteraction(button) {
    if (button.className === "key") {
      if (this.activePhrase.checkLetter(button.innerText)) {
        button.className = "chosen";
        this.activePhrase.showMatchedLetter(button.innerText);
      } else {
        button.className = "wrong";
        this.removeLife();
      }
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin());
      }
    }
  }
}
