/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseUL = document.querySelector('#phrase').firstElementChild;
    const phraseToDisplay = this.phrase;
    const phraseLetterArray = phraseToDisplay.split('');

    phraseLetterArray.forEach(letter => {
      const li = document.createElement('li');
      if (letter === ' ') {
        li.classList = "space"
        li.textContent = `${letter}`;
      } else {
        li.classList = `hide letter ${letter}`;
        li.textContent = `${letter}`;
      }
      phraseUL.appendChild(li)
    });
  };
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {

    return this.phrase.includes(letter)
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    if (this.phrase.includes(letter)) {
      let phraseLetters = document.getElementById('phrase').firstElementChild.children;
      for (let i = 0; i < phraseLetters.length; i++) {
        if (phraseLetters[i].textContent === letter) {
          phraseLetters[i].classList = `show letter ${letter}`;
        }
      }
    } else {}
  };
};