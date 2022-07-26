class Player {
  constructor() {
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
}

module.exports = Player;
