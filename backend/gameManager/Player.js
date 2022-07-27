const { generateCombinations } = require("../utils");

class Player {
  constructor(playerNumber) {
    this.playerNumber = playerNumber;
    this.cards = [];
    this.wins = 0;
    this.looses = 0;
    this.ready = false;
    this.bust = false;
    this.standing = false;
  }
  reset() {
    this.cards = [];
    this.bust = false;
    this.standing = false;
  }
  receiveCards(cards) {
    if (!this.bust && !this.standing) this.cards.push(...cards);
  }
  getPrivateInfo() {
    return this;
  }
  getPublicInfo() {
    const { playerNumber, cards, bust } = this;
    return { playerNumber, cardCount: cards.length, bust };
  }
  isBust() {
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    const bust = sums.length == 0;
    this.bust = bust;
    if (bust) this.looses++;
    return bust;
  }
  getRoundResult() {
    const { cards, playerNumber, wins, looses } = this;
    return {
      cards,
      playerNumber,
      wins,
      looses,
    };
  }
  stand() {
    this.standing = true;
  }
  didWin(score) {
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    if (sums[0] > score) {
      this.wins++;
    } else if (sums[0] < score) {
      this.looses++;
    }
  }
}

module.exports = Player;
