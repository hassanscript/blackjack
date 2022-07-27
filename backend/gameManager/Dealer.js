const { generateCombinations } = require("../utils");

class Dealer {
  constructor() {
    this.cards = [];
    this.balance = 100000;
  }
  reset() {
    this.cards = [];
    this.totalScore = 0;
  }
  receiveCards(cards) {
    this.cards.push(...cards);
  }
  exposeOneCard() {
    return this.cards[0];
  }
  bestScore() {
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    let badSums = sums.sort((a, b) => a - b).filter((num) => num > 21);
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    return sums[0] || badSums[0];
  }
}

module.exports = Dealer;
