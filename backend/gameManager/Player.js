const { generateCombinations } = require("../utils");

class Player {
  constructor(playerNumber) {
    this.playerNumber = playerNumber;
    this.cards = [];
    this.totalScore = 0;
    this.bet = 0;
    this.balance = 1000;
    this.ready = false;
  }
  reset() {
    this.cards = [];
    this.totalScore = 0;
    this.bet = 0;
  }
  receiveCards(cards) {
    this.cards.push(...cards);
  }
  getPrivateInfo() {
    return this;
  }
  getPublicInfo() {
    const { balance, playerNumber, cards } = this;
    return { balance, playerNumber, cardCount: cards.length };
  }
  isBust() {
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    return sums.length == 0;
  }
}

module.exports = Player;
