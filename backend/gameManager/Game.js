// the file that contains the Game class
// Game object is created from this class
// whenever a player requests a new game

const Dealer = require("./Dealer");
const Player = require("./Player");
const generateDeck = require("./generateDeck");

class Game {
  constructor(gameCode, io, gameManager) {
    this.gameManager = gameManager;
    this.io = io;
    this.gameCode = gameCode;
    this.roomCode = `game:${this.gameCode}`;
    this.deck = null;
    this.rounds = 1;
    this.players = {};
    this.started = false;
    this.dealer = new Dealer();
    this.paused = false;
    // continue approval is used to track player that want to go to the next round
    this.continueApproval = [];
    this.maxPlayerCount = 2;
  }

  playerCount = () => Object.keys(this.players).length;

  // method to check if the game has space for new players
  canJoin = () => this.playerCount() < this.maxPlayerCount;

  // checks if the max number of players have joined the game
  // if they did, then it lets the current players know
  isGameReady = () => {
    if (this.playerCount() == this.maxPlayerCount) {
      this.io.to(this.roomCode).emit("GAME_READY", true);
    }
  };

  // return the available player number, which is assigned to the player
  // starts from 1 to the max number of players
  availablePlayerNumber = () => {
    const takenNumbers = Object.values(this.players).map(
      ({ playerNumber }) => playerNumber
    );
    let start = 1;
    while (true) {
      if (takenNumbers.includes(start)) {
        start++;
      } else {
        break;
      }
    }
    return start;
  };

  // the following methods trys to join the player to the game
  join = (socket) => {
    const playerId = socket.id;
    // checks if the game has room for the player
    if (this.canJoin()) {
      // get a new player number of the player
      const playerNumber = this.availablePlayerNumber();
      const player = new Player(playerNumber);
      this.players[playerId] = player;
      // the player joins the room
      socket.join(this.roomCode);
      // lets the player know they have successfully joined the room
      socket.emit("GAME_JOINED", this.gameCode);
    } else {
      // in case the game had no space, the player is informed
      socket.emit("WRONG_GAMECODE", "Game already has max number of players");
    }
  };

  // sets the player as ready
  setPlayerReady = (playerId) => {
    const player = this.players[playerId];
    if (player) this.players[playerId].ready = true;
  };

  // tries starting the game, first checks if all players are ready
  // if all player ready it starts a round
  tryStartingGame = () => {
    const playersNotReady = Object.values(this.players).filter(
      ({ ready }) => !ready
    );
    if (playersNotReady.length == 0) this.startRound();
  };

  // picks a card from the deck
  // returns an array
  // the deck is treated like a stack
  pickCards = (quantity = 1) => {
    const cards = [];
    for (let i = 0; i < quantity; i++) {
      cards.push(this.deck.pop());
    }
    return cards;
  };

  // supplies the initial 2 cards to the players and the dealer
  supplyInitialCards = () => {
    [this.dealer, ...Object.values(this.players)].forEach((receiver) => {
      const cards = this.pickCards(2);
      receiver.receiveCards(cards);
    });
  };

  // returns the public info of all the players
  getPlayersPublicInfo = () => {
    return Object.values(this.players).map((player) => player.getPublicInfo());
  };

  // starts the round
  startRound = () => {
    this.continueApproval = [];
    this.paused = false;
    // new deck is generate for each new round
    this.deck = generateDeck();
    // the deal is reset
    this.dealer.reset();
    // all the players are reset
    Object.values(this.players).forEach((player) => player.reset());
    // initial cards are supplied
    this.supplyInitialCards();
    // the dealer exposed card is fetched
    const exposedCard = this.dealer.exposeOneCard();
    // the public info of all the players is fetched
    const allPlayersInfo = this.getPlayersPublicInfo();
    Object.keys(this.players).forEach((playerId) => {
      // for each player, they private info is fetched and
      // shared along with the rest of the public info
      // The players are also informed that the rounded has started
      const myInfo = this.players[playerId].getPrivateInfo();
      const data = {
        myInfo,
        dealer: { exposedCard },
        allPlayersInfo,
      };
      this.io.to(playerId).emit("GAME_STARTED", data);
    });
  };

  // handles when a player requests a hit
  hit = (playerId) => {
    // in case the game is paused then nothing happens
    if (this.paused) return;
    const player = this.players[playerId];
    // player is fetched and checked if they are bust or standing
    if (!player || player.bust || player.standing) return;
    // player receives one card
    const cards = this.pickCards();
    player.receiveCards(cards);
    // everyone in the room is informed that the specific player has hit
    this.io.to(this.roomCode).emit("UPDATE_GAME", {
      key: "allPlayersInfo",
      value: this.getPlayersPublicInfo(),
    });
    // the player is updated with their new card
    const myInfo = player.getPrivateInfo();
    this.io.to(playerId).emit("HIT_DONE", myInfo);
    // game checks if the player after receiving the new cards went bust
    const bust = player.isBust();
    if (bust) {
      // if they went bust, every one in the room is informed
      this.io.to(this.roomCode).emit("PLAYER_BUSTED", player.playerNumber);
      // now the game checks if the rounded end
      this.checkAndUpdateIfRoundEnded();
    }
  };

  // handles when a player requests a stand
  stand = (playerId) => {
    // nothing happens if the game is paused or the player is player or already standing
    if (this.paused) return;
    const player = this.players[playerId];
    if (!player || player.bust || player.standing) return;
    // the player stands
    player.stand();
    // all the players in the room are informed that the player is standing
    this.io.to(this.roomCode).emit("UPDATE_GAME", {
      key: "allPlayersInfo",
      value: this.getPlayersPublicInfo(),
    });
    // the player is informed that they are successfully stood
    const myInfo = player.getPrivateInfo();
    this.io.to(playerId).emit("STAND_DONE", myInfo);
    // game checks if the round ended
    this.checkAndUpdateIfRoundEnded();
  };

  // the results of the round are shared when the round ends
  // the cards of the dealer and all players are made visible
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

  // picks the cards for the dealer until the score is above of equal to 17
  dealerPicks = () => {
    let score = this.dealer.bestScore();
    while (score < 17) {
      const card = this.pickCards();
      this.dealer.receiveCards(card);
      score = this.dealer.bestScore();
    }
    return score;
  };

  // checks if the standing players won against the score of the dealer
  calculateResultForStandingPlayers = () => {
    // we get the best score of the pick
    const dealerScore = this.dealerPicks();
    const standingPlayers = Object.values(this.players).filter(
      ({ standing }) => standing
    );
    const dealerLost = dealerScore > 21;
    standingPlayers.forEach((player) => {
      if (dealerLost) {
        // in case the dealer score is above 21, the standing players win
        player.win();
      } else {
        // else for each player, its checked if their score was better
        player.didWin(dealerScore);
      }
    });
  };

  // checks if the rounded ended, all players standing or bust
  // if the round ends, then the game is updated
  checkAndUpdateIfRoundEnded = () => {
    // total number of bust players
    const busts = Object.values(this.players).filter(({ bust }) => bust).length;
    // total number of standing players
    const stands = Object.values(this.players).filter(
      ({ standing }) => standing
    ).length;
    // total count of players
    const playerCount = Object.keys(this.players).length;
    // if the total number of standing and bust players is equal to the total player in a game
    // then round has ended
    if (busts + stands == playerCount) {
      this.rounds++;
      this.paused = true;
      // if there was a standing player then their round result is checked
      if (stands) this.calculateResultForStandingPlayers();
      // the result of the round is shared
      return this.shareRoundResult();
    }
  };

  // handles the request when the player is ready for the next round
  next = (playerId) => {
    // checks if the player has already requested for next round
    // if not, they are added to the approval list
    if (!this.continueApproval.find((p) => p == playerId)) {
      this.continueApproval.push(playerId);
    }
    // game checks if the list of approval is equal to the total number of players
    if (this.continueApproval.length == Object.keys(this.players).length) {
      // if true, it means all players are ready to go to the next round
      this.startRound();
    }
  };

  // handles the request to leave the game
  leave = (socket) => {
    // checks if the client is part of the players
    if (!this.players[socket.id]) return;
    // player is removed from the lsit
    socket.leave(this.roomCode);
    // delete from the players object
    delete this.players[socket.id];
    if (Object.keys(this.players).length == 0) {
      // in case the game is left with 0 players it is deleted by the game manager
      this.gameManager.destroyGame(this.gameCode);
      // the leaving players is informed that the game has been destroyed
      socket.emit("GAME_DESTROYED");
    } else {
      // in case, there are still players in the game
      // the remaining players are reset and informed that one of the player left
      // game is reset to new game
      Object.values(this.players).map((player) => {
        player.reset(true);
        player.setReady();
      });
      this.dealer.reset();
      this.rounds = 1;
      this.io.to(this.roomCode).emit("PLAYER_LEFT");
    }
  };
}

module.exports = Game;
