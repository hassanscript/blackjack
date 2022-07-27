const generateDeck = require("./generateDeck");
const Store = require("node-cache");
const Game = require("./Game");
const { generateRandomNumber } = require("../utils");

class GameManager {
  constructor(io) {
    this.io = io;
    this.games = new Store({
      stdTTL: 3600,
      checkperiod: 120,
      useClones: false,
    });
    this.deck = generateDeck();
  }

  manage(socket) {
    socket.on("JOIN_GAME", (gameCode) => this.joinGame(gameCode, socket));
    socket.on("PLAYER_READY", (gameCode) =>
      this.setPlayerReady(gameCode, socket)
    );
    socket.on("HIT", (gameCode) => this.playerAction("hit", gameCode, socket));
    socket.on("STAND", (gameCode) =>
      this.playerAction("stand", gameCode, socket)
    );
    socket.on("NEXT_ROUND", (gameCode) =>
      this.playerAction("next", gameCode, socket)
    );
  }

  joinGame(gameCode, socket) {
    let game;

    if (!gameCode) {
      gameCode = generateRandomNumber();
      game = new Game(gameCode, this.io);
      this.games.set(gameCode, game);
    } else {
      game = this.games.get(gameCode);
    }

    if (!game) {
      return socket.emit(
        "WRONG_GAMECODE",
        "Game with the provide code doesn't exist"
      );
    }
    game.join(socket);
    game.isGameReady();
  }

  setPlayerReady(gameCode, socket) {
    const game = this.games.get(gameCode);
    const playerId = socket.id;

    game.setPlayerReady(playerId);
    game.canGameStart();
  }

  playerAction(action, gameCode, socket) {
    const game = this.games.get(gameCode);
    const playerId = socket.id;
    if (!game) return;
    if (action == "hit") {
      game.hit(playerId);
    } else if (action == "stand") {
      game.stand(playerId);
    } else if (action == "next") {
      game.next(playerId);
    }
  }
}

module.exports = GameManager;
