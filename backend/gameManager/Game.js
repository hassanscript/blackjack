const Dealer = require("./Dealer");
const generateDeck = require("./generateDeck");
const Player = require("./Player");

class Game {
  constructor(gameCode, io) {
    this.io = io;
    this.gameCode = gameCode;
    this.deck = null;
    this.players = {};
    this.dealtCards = [];
    this.started = false;
    this.dealer = new Dealer();
  }

  canJoin() {
    return Object.keys(this.players).length < 2;
  }
  isGameReady() {
    if (Object.keys(this.players).length == 2) {
      this.io.to(`game:${this.gameCode}`).emit("GAME_READY", true);
    }
  }
  join(playerId) {
    if (this.canJoin()) {
      const playerNumber = Object.keys(this.players).length + 1;
      const player = new Player(playerNumber);
      this.players[playerId] = player;
      return true;
    } else {
      return false;
    }
  }
  setPlayerReady(playerId) {
    this.players[playerId].ready = true;
  }

  canGameStart(io) {
    const playersNotReady = Object.values(this.players).filter(
      ({ ready }) => !ready
    );
    if (playersNotReady.length == 0) {
      this.startGame();
    }
  }

  pickCards(quantity = 1) {
    const cards = [];
    for (let i = 0; i < quantity; i++) {
      cards.push(this.deck.pop());
    }
    return cards;
  }

  supplyInitialCards() {
    [this.dealer, ...Object.values(this.players)].forEach((receiver) => {
      const cards = this.pickCards(2);
      receiver.receiveCards(cards);
    });
  }

  getPlayersPublicInfo() {
    let playersPublicInfo = Object.values(this.players).map((player) =>
      player.getPublicInfo()
    );
    return playersPublicInfo;
  }

  updateClients() {
    const exposedCard = this.dealer.exposeOneCard();
    const otherPlayersInfo = this.getPlayersPublicInfo();
    Object.keys(this.players).forEach((playerId) => {
      const myInfo = this.players[playerId].getPrivateInfo();
      const data = {
        myInfo,
        dealer: { exposedCard },
        otherPlayersInfo,
      };
      this.io.to(playerId).emit("GAME_STARTED", data);
    });
  }

  startGame() {
    this.deck = generateDeck();
    this.dealer.reset();
    Object.values(this.players).forEach((player) => player.reset());
    this.supplyInitialCards();
    this.updateClients();
  }
  hit(playerId) {
    const card = this.deck.pop();
    const player = this.players[playerId];
    player.receiveCards([card]);
    this.io.to(`game:${this.gameCode}`).emit("UPDATE_GAME", {
      key: "otherPlayersInfo",
      value: this.getPlayersPublicInfo(),
    });
    const myInfo = this.players[playerId].getPrivateInfo();
    this.io.to(playerId).emit("HIT_DONE", myInfo);
    const bust = player.isBust();
    if (bust) {
      this.io.to(`game:${this.gameCode}`).emit("PLAYER_BUST", playerId);
    }
    console.log("Bust: " + bust);
  }
  stand(playerId) {}
}

module.exports = Game;
