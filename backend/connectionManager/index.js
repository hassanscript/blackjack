const joinGame = require("./joinGame");

class ConnectionManager {
  constructor(gameManager) {
    this.gameManager = gameManager;
  }

  manage(socket) {
    socket.on("join", (gameCode) => {
      joinGame(socket, gameCode, this.gameManager);
    });
  }
}

module.exports = ConnectionManager;
