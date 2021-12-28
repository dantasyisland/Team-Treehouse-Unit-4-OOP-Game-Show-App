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
        li.innerHTML = `<li class ="space">${letter}</li>`;
      } else {
      li.innerHTML = `<li class ="hide letter ${letter}">${letter}</li>`;
      }
      phraseUL.appendChild(li)
    });
  };
  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    console.log(this.phrase); // WORKS
  };

}