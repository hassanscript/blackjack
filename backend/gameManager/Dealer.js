class Dealer {
  constructor() {
    this.cards = [];
    this.totalScore = 0;
    this.balance = 100000;
  }
  reset() {
    this.cards = [];
    this.totalScore = 0;
  }
  receiveCards(cards) {
    this.cards.push(...cards);
  }
}

module.exports = Dealer;
