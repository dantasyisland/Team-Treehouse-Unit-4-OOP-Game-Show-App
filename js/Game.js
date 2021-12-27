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
    const phrases = [{
        phrase: "AND YEAH"
      },
      {
        phrase: "AND YEAH"
      },
      {
        phrase: "AND YEAH"
      },
      {
        phrase: "AND YEAH"
      },
      {
        phrase: "AND YEAH"
      },
    ]
    return phrases;
  }
}