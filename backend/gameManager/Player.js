const { generateCombinations } = require("../utils");

class Player {
  constructor(playerNumber) {
    this.playerNumber = playerNumber;
    this.cards = [];
    this.wins = 0;
    this.loses = 0;
    this.ready = false;
    this.bust = false;
  }
  reset() {
    this.cards = [];
    this.bust = false;
  }
  receiveCards(cards) {
    if (!this.bust) this.cards.push(...cards);
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
    if (bust) this.loses++;
    return bust;
  }
  getRoundResult() {
    const { cards, playerNumber, wins, loses } = this;
    return {
      cards,
      playerNumber,
      wins,
      loses,
    };
  }
}

module.exports = Player;
