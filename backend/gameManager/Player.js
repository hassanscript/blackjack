// The file for the Player class, new players are created for each class

const { generateCombinations } = require("../utils");

class Player {
  constructor(playerNumber) {
    // each player is assigned a player number
    this.playerNumber = playerNumber;
    this.cards = [];
    this.wins = 0;
    this.loses = 0;
    this.ready = false;
    this.bust = false;
    this.standing = false;
    this.lastResult = null;
  }

  // on reset, all the stats etc of the player are set to default
  reset() {
    this.cards = [];
    this.bust = false;
    this.standing = false;
    this.lastResult = null;
  }

  // the method to receive cards
  receiveCards(cards) {
    // player doesn't receive cards, if they are standing or bust
    if (!this.bust && !this.standing) this.cards.push(...cards);
  }

  // returns all the info of the player
  getPrivateInfo() {
    return this;
  }

  // return the public information of the player, viewable by all
  getPublicInfo() {
    const { playerNumber, cards, bust, standing, lastResult } = this;
    return {
      playerNumber,
      cardCount: cards.length,
      bust,
      standing,
      lastResult,
    };
  }

  // check if the player has bust
  isBust() {
    const values = this.cards.map(({ value }) => value);
    // generates all the array combinations, considering Ace can be '1' or '11'
    const combinations = generateCombinations(...values);
    // get the sums of all the arrays
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    // filters out the sums that are above 21
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    // if there are not sums lesser then 21, it means the player has bust
    const bust = sums.length == 0;
    this.bust = bust;
    if (bust) {
      // the following method makes the player lose the current round
      this.lose();
    }
    return bust;
  }

  // returns the results of the current round
  getRoundResult() {
    const { cards, playerNumber, wins, loses, lastResult } = this;
    return {
      cards,
      playerNumber,
      wins,
      loses,
      lastResult,
    };
  }

  // simple method to stand players
  stand() {
    this.standing = true;
  }

  // check if the player is winning, considering they were standing
  // takes the score of the dealer are the parameter
  didWin(score) {
    const values = this.cards.map(({ value }) => value);
    const combinations = generateCombinations(...values);
    let sums = combinations.map((arr) => arr.reduce((a, b) => a + b, 0));
    sums = sums.sort((a, b) => b - a).filter((num) => num <= 21);
    // the largest score, lesser than 21 is taken from all possible scores
    // if the player score is larger than the score of the deal, they won, else they loose
    if (sums[0] > score) {
      this.win();
    } else if (sums[0] < score) {
      this.lose();
    }
  }

  win() {
    this.wins++;
    this.lastResult = "win";
  }
  lose() {
    this.loses++;
    this.lastResult = "loses";
  }
}

module.exports = Player;
