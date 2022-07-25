const generateDeck = require("./generateDeck");
const Player = require("./Player");

const deck = generateDeck();

class Game {
  constructor() {
    this.deck = deck;
    this.players = {};
    this.dealtCards = [];
  }
  canJoin() {
    return Object.keys(this.players) < 2;
  }
  join(playerId) {
    if (this.canJoin()) {
      const player = new Player();
      this.players[playerId] = player;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Game;
