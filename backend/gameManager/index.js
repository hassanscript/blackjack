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
  }

  // method to join a new game, takes 2 parameters the game code and the player Id
  joinGame(gameCode, socket) {
    // in case the game code is not provided, meaning the player is looking to create a new game
    let game;
    const playerId = socket.id;
    if (!gameCode) {
      // generate a random number
      gameCode = generateRandomNumber();
      // create a new game object
      game = new Game(gameCode, this.io);
      // set the new game in the games store
      this.games.set(gameCode, game);
    } else {
      game = this.games.get(gameCode);
    }
    if (!game) {
      return console.log("No game");
    }
    // now regarding of gameCode being undefined initially, it now has a value
    // we will now try joining the game
    const joined = game.join(playerId);
    socket.join(`game:${gameCode}`);
    if (joined) {
      // if game started, then share the gameCode with the client
      socket.emit("GAME_JOINED", gameCode);
    } else {
      // if game failed to start, then let the client know
      socket.emit("GAME_JOINED", false);
    }
    game.isGameReady();
  }

  setPlayerReady(gameCode, socket) {
    const game = this.games.get(gameCode);
    const playerId = socket.id;

    game.setPlayerReady(playerId);
    game.canGameStart();
  }
}

module.exports = GameManager;
