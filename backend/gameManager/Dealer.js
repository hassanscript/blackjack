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
  exposeOneCard() {
    return this.cards[0];
  }
}

module.exports = Dealer;
