const { generateRandomNumber } = require("../utils");

const joinGame = (socket, code, gameManager) => {
  const playerId = socket.id;
  if (!code) {
    const newCode = generateRandomNumber();
    socket.join(newCode);
    gameManager.createGame(newCode);
    gameManager.joinGame(newCode, playerId);
    const game = gameManager.getGame(newCode);
    console.log(game);
    return socket.emit("gameStarted", newCode);
  } else {
    if (gameManager.isGameJoinable(code, playerId)) {
      socket.join(code);
      gameManager.joinGame(code, playerId);
      const game = gameManager.getGame(code);
      console.log(game);
      return socket.emit("gameStarted", code);
    } else {
      return socket.emit("gameStarted", false);
    }
  }
};

module.exports = joinGame;
