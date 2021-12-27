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
      new Phrase ('A winner is you'),
      new Phrase ('Florna is an angel in disguise look into my eye'),
      new Phrase ('Milk steak boiled over hard'),
      new Phrase ('And it was also the night that the skeletons came to life'),
      new Phrase ('There is no Dana only Zuul')
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
}