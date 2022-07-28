// The file for the dealer class, for each game a new dealer is created

const { generateCombinations } = require("../utils");

class Dealer {
  constructor() {
    // each dealer only has a stack of cards
    this.cards = [];
  }
  // on reset the cards are cleared out
  reset() {
    this.cards = [];
  }
  // a simple function to receive cards
  receiveCards(cards) {
    this.cards.push(...cards);
  }
  // returns the first, which is displayed to the players according to the rules of black jack
  exposeOneCard() {
    return this.cards[0];
  }
  // returns the best score that the dealer has
  bestScore() {
    // considering the fact Ace can be '1' and '11'
    // all possible scores are calculated and the best one is selected
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);

    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));

    // the badSums includes scores that are greater then 21
    let badSums = sums.sort((a, b) => a - b).filter((num) => num > 21);

    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    // in case the dealer has a good score, less then 21 then it is returned
    // else the bad score is returned
    return sums[0] || badSums[0];
  }
}

module.exports = Dealer;
