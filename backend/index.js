const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const GameManager = require("./GameManager");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

const server = http.createServer(app);
const io = new Server(server);

const gameManager = new GameManager(io);

io.on("connection", (socket) => {
  gameManager.manage(socket);
});

const port = process.env.PORT || 3003;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
