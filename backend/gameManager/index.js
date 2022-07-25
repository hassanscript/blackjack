const generateDeck = require("./generateDeck");
const Store = require("node-cache");
const Game = require("./Game");
const { generateRandomNumber } = require("../utils");

class GameManager {
  constructor() {
    this.games = new Store({
      stdTTL: 3600,
      checkperiod: 120,
      useClones: false,
    });
    this.deck = generateDeck();
  }

  manage(socket) {
    socket.on("join", (gameCode) => this.joinGame(gameCode, socket));
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
      game = new Game();
      // set the new game in the games store
      this.games.set(gameCode, game);
    }
    // now regarding of gameCode being undefined initially, it now has a value
    // we will now try joining the game
    const joined = game.join(playerId);
    socket.join(`game:${gameCode}`);
    if (joined) {
      // if game started, then share the gameCode with the client
      return socket.emit("gameStarted", gameCode);
    } else {
      // if game failed to start, then let the client know
      return socket.emit("gameStarted", false);
    }
  }
}

module.exports = GameManager;
