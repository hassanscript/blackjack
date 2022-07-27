const Dealer = require("./Dealer");
const generateDeck = require("./generateDeck");
const Player = require("./Player");

class Game {
  constructor(gameCode, io) {
    this.io = io;
    this.gameCode = gameCode;
    this.roomCode = `game:${this.gameCode}`;
    this.deck = null;
    this.rounds = 1;
    this.players = {};
    this.started = false;
    this.dealer = new Dealer();
    this.paused = false;
    this.continueApproval = [];
    this.maxPlayerCount = 2;
  }

  canJoin = () => Object.keys(this.players).length < this.maxPlayerCount;

  isGameReady = () => {
    if (Object.keys(this.players).length == this.maxPlayerCount) {
      this.io.to(this.roomCode).emit("GAME_READY", true);
    }
  };

  join = (socket) => {
    const playerId = socket.id;
    if (this.canJoin()) {
      const playerNumber = Object.keys(this.players).length + 1;
      const player = new Player(playerNumber);
      this.players[playerId] = player;
      socket.join(this.roomCode);
      socket.rooms.add(this.roomCode);
      socket.emit("GAME_JOINED", this.gameCode);
    } else {
      socket.emit("WRONG_GAMECODE", "Game already has max number of players");
    }
  };

  setPlayerReady = (playerId) => {
    const player = this.players[playerId];
    if (player) this.players[playerId].ready = true;
  };

  tryStartingGame = () => {
    const playersNotReady = Object.values(this.players).filter(
      ({ ready }) => !ready
    );
    if (playersNotReady.length == 0) this.startRound();
  };

  pickCards = (quantity = 1) => {
    const cards = [];
    for (let i = 0; i < quantity; i++) {
      cards.push(this.deck.pop());
    }
    return cards;
  };

  supplyInitialCards = () => {
    [this.dealer, ...Object.values(this.players)].forEach((receiver) => {
      const cards = this.pickCards(2);
      receiver.receiveCards(cards);
    });
  };

  getPlayersPublicInfo = () => {
    return Object.values(this.players).map((player) => player.getPublicInfo());
  };

  startRound = () => {
    this.continueApproval = [];
    this.paused = false;
    this.deck = generateDeck();
    this.dealer.reset();
    Object.values(this.players).forEach((player) => player.reset());
    this.supplyInitialCards();
    const exposedCard = this.dealer.exposeOneCard();
    const allPlayersInfo = this.getPlayersPublicInfo();
    Object.keys(this.players).forEach((playerId) => {
      const myInfo = this.players[playerId].getPrivateInfo();
      const data = {
        myInfo,
        dealer: { exposedCard },
        allPlayersInfo,
      };
      this.io.to(playerId).emit("GAME_STARTED", data);
    });
  };

  hit = (playerId) => {
    if (this.paused) return;
    const player = this.players[playerId];
    if (!player || player.bust || player.standing) return;
    const card = this.deck.pop();
    player.receiveCards([card]);
    this.io.to(this.roomCode).emit("UPDATE_GAME", {
      key: "allPlayersInfo",
      value: this.getPlayersPublicInfo(),
    });
    const myInfo = player.getPrivateInfo();
    this.io.to(playerId).emit("HIT_DONE", myInfo);
    const bust = player.isBust();
    if (bust) {
      this.io.to(this.roomCode).emit("PLAYER_BUSTED", player.playerNumber);
      this.checkAndUpdateIfRoundEnded();
    }
  };

  stand = (playerId) => {
    if (this.paused) return;
    const player = this.players[playerId];
    if (!player || player.bust) return;
    player.stand();
    this.io.to(this.roomCode).emit("UPDATE_GAME", {
      key: "allPlayersInfo",
      value: this.getPlayersPublicInfo(),
    });
    const myInfo = player.getPrivateInfo();
    this.io.to(playerId).emit("STAND_DONE", myInfo);
    this.checkAndUpdateIfRoundEnded();
  };

  shareRoundResult = () => {
    const dealerCards = this.dealer.cards;
    const playerInfo = Object.values(this.players).map((player) =>
      player.getRoundResult()
    );
    const results = {
      rounds: this.rounds,
      dealerCards,
      playerInfo,
    };
    this.io.to(this.roomCode).emit("ROUND_RESULT", results);
  };

  dealerPicks = () => {
    let score = this.dealer.bestScore();
    while (score < 17) {
      const card = this.pickCards();
      this.dealer.receiveCards(card);
      score = this.dealer.bestScore();
    }
    return score;
  };

  calculateResultForStandingPlayers = () => {
    const dealerScore = this.dealerPicks();
    const standingPlayers = Object.values(this.players).filter(
      ({ standing }) => standing
    );
    const dealerLost = dealerScore > 21;
    standingPlayers.forEach((player) => {
      if (dealerLost) {
        player.win();
      } else player.didWin(dealerScore);
    });
  };

  checkAndUpdateIfRoundEnded = () => {
    const busts = Object.values(this.players).filter(({ bust }) => bust).length;
    const stands = Object.values(this.players).filter(
      ({ standing }) => standing
    ).length;
    const playerCount = Object.keys(this.players).length;
    if (busts + stands == playerCount) {
      this.rounds++;
      this.paused = true;
      if (stands) this.calculateResultForStandingPlayers();
      return this.shareRoundResult();
    }
  };

  next = (playerId) => {
    if (!this.continueApproval.find((p) => p == playerId)) {
      this.continueApproval.push(playerId);
    }
    if (this.continueApproval.length == Object.keys(this.players).length) {
      this.startRound();
    }
  };
}

module.exports = Game;
