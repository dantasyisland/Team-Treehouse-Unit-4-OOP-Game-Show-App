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
    if (this.phrase.includes(letter)) {
      console.log('Hit');
    } else {
      console.log('Miss');
    }

  };
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    // query selector of letter class hide to show
    //<li class="hide letter m">m</li>
    // change to show
    let letterToShow = document.querySelector('ul');
    letterToShow.classList = 'show letter ${letter}';


  };

}