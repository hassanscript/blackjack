const Store = require("node-cache");
const Game = require("./Game");
const { generateRandomNumber } = require("../utils");

class GameManager {
  constructor(io) {
    this.io = io;
    // the collection of current games stored in cache
    this.games = new Store({
      useClones: false,
    });
  }

  // adds event listeners to the connections
  manage = (socket) => {
    // on disconnection, the socket is removed from the game/games
    socket.on("disconnecting", () => {
      // get all the rooms that the player was part of
      let rooms = Array.from(socket.rooms);
      const games = rooms
        .map((game) => game.split(":")[1])
        .filter((game) => game);

      // remove the player from each game
      // NOTE: current a player can be part of a single game
      //       hence there no real need for a loop, but the loop
      //       has been added just in case the player is part of more games
      games.forEach((id) => {
        const game = this.games.get(id);
        if (game) {
          game.leave(socket);
        }
      });
    });

    // Player requesting to join a game
    socket.on("JOIN_GAME", (gameCode) => this.joinGame(gameCode, socket));

    // Player informing the server that they are ready to start
    socket.on("PLAYER_READY", (gameCode) =>
      this.setPlayerReady(gameCode, socket)
    );

    // Player registering their hit
    socket.on("HIT", (gameCode) => this.playerAction("hit", gameCode, socket));

    // Player registering their stand
    socket.on("STAND", (gameCode) =>
      this.playerAction("stand", gameCode, socket)
    );

    // Player informing the server that they are ready for the next round
    socket.on("NEXT_ROUND", (gameCode) =>
      this.playerAction("next", gameCode, socket)
    );

    socket.on("LEAVE_GAME", (gameCode) => {
      this.playerAction("leave", gameCode, socket);
    });
  };

  // method to handle join request by the player
  joinGame = (gameCode, socket) => {
    let game;
    // If the gameCode is not provided then it is assumed
    // that the player want to create a new game
    if (!gameCode) {
      // a random generated 5 digit number is assigned to the game code
      gameCode = generateRandomNumber();
      game = new Game(gameCode, this.io, this);
      // game is set in the cache for easy access
      this.games.set(gameCode, game);
    } else {
      // in case the game code was provided by the player,
      // meaning they want to join an existing game
      game = this.games.get(gameCode);
    }

    // Game doesn't exist (the case when player request to join a game which doesn't exist)
    if (!game) {
      // The player is informed
      return socket.emit(
        "WRONG_GAMECODE",
        "Game with the provide code doesn't exist"
      );
    }
    // provide the game exists or the player created a new game
    // the player will be now added to the game
    game.join(socket);
    // once add, the following method will check if the game is ready
    // meaning if there the number of player is 2
    game.isGameReady();
  };

  // Setting the player as ready to start the game
  setPlayerReady = (gameCode, socket) => {
    const game = this.games.get(gameCode);
    if (!game) return;
    const playerId = socket.id;
    // following method set the player as ready
    game.setPlayerReady(playerId);
    // the following method checks if all the players are ready
    // if all players are ready then it starts the game
    game.tryStartingGame();
  };

  // handle all the action request by the player
  playerAction = (action, gameCode, socket) => {
    const game = this.games.get(gameCode);
    const playerId = socket.id;
    if (!game) return;
    if (action == "hit") {
      // handling hit request by the player
      game.hit(playerId);
    } else if (action == "stand") {
      // handling stand request by the player
      game.stand(playerId);
    } else if (action == "next") {
      // handling request for the next round by the player
      game.next(playerId);
    } else if (action == "leave") {
      // handling the request to leave the game
      game.leave(socket);
    }
  };

  // Simple method that removes the game from the cache
  destroyGame = (gameCode) => {
    this.games.del(gameCode);
  };
}

module.exports = GameManager;
