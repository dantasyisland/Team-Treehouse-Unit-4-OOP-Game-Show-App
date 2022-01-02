/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Displays a phrase on game board by creating an indivdual list element for each letter in the phrase
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
   * Checks for a letter in the phrase by using the includes method. Will return true or false if letter is in the phrase
   * @param (string) letter - Letter to check
   * @return {boolean}
   */
  checkLetter(letter) {
    return this.phrase.includes(letter)
  }
  /**
   * Displays passed letter on screen after a match is found. It will iterate through all li elements and change the class of the letter that matches to .show letter ${letter}
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