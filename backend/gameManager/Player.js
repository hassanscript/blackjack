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
    this.lastResult = null;
  }
  reset() {
    this.cards = [];
    this.bust = false;
    this.standing = false;
    this.lastResult = null;
  }
  receiveCards(cards) {
    if (!this.bust && !this.standing) this.cards.push(...cards);
  }
  getPrivateInfo() {
    return this;
  }
  getPublicInfo() {
    const { playerNumber, cards, bust, standing, lastResult } = this;
    return {
      playerNumber,
      cardCount: cards.length,
      bust,
      standing,
      lastResult,
    };
  }
  isBust() {
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    const bust = sums.length == 0;
    this.bust = bust;
    if (bust) {
      this.lose();
    }
    return bust;
  }
  getRoundResult() {
    const { cards, playerNumber, wins, looses, lastResult } = this;
    return {
      cards,
      playerNumber,
      wins,
      looses,
      lastResult,
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
      this.win();
    } else if (sums[0] < score) {
      this.lose();
    }
  }
  win() {
    this.wins++;
    this.lastResult = "win";
  }
  lose() {
    this.looses++;
    this.lastResult = "looses";
  }
}

module.exports = Player;
