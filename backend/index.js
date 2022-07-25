const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const ConnectionManager = require("./connectionManager");
const GameManager = require("./gameManager");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const gameManager = new GameManager();
const connectionManager = new ConnectionManager(gameManager);

io.on("connection", (socket) => {
  connectionManager.manage(socket);
});

server.listen(3003, () => {
  console.log("Listening on port 3003");
});
