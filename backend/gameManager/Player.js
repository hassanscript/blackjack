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
}

module.exports = Player;
