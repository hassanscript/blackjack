const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const GameManager = require("./gameManager");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (_, res) => {
  // serve the built react application
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

const server = http.createServer(app);
const io = new Server(server);

// Single game manager to manage all players and games
const gameManager = new GameManager(io);

io.on("connection", (socket) => {
  // hand over the new socket connections to game manager
  gameManager.manage(socket);
});

const port = process.env.PORT || 3005;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
