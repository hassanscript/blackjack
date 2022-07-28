// This file exports the function that manages the deck
// It generates a new deck, shuffles it and returns it

const cards = [
  {
    id: "A",
    value: [1, 11],
  },
  {
    id: "2",
    value: [2],
  },
  {
    id: "3",
    value: [3],
  },
  {
    id: "4",
    value: [4],
  },
  {
    id: "5",
    value: [5],
  },
  {
    id: "6",
    value: [6],
  },
  {
    id: "7",
    value: [7],
  },
  {
    id: "8",
    value: [8],
  },
  {
    id: "9",
    value: [9],
  },
  {
    id: "10",
    value: [10],
  },
  {
    id: "J",
    value: [10],
  },
  {
    id: "Q",
    value: [10],
  },
  {
    id: "K",
    value: [10],
  },
];
const suits = ["diamonds", "hearts", "spades", "clubs"];

const generateDeck = () => {
  const deck = [];

  // using the cards array and suits, it generates an array with 52 cards (a full deck)
  cards.forEach((card) =>
    suits.forEach((suit) => {
      const _card = JSON.parse(JSON.stringify(card));
      _card.suit = suit;
      deck.push(_card);
    })
  );

  // shuffling the deck
  const randomizedDeck = deck
    .map((card) => [Math.random(), card])
    .sort()
    .map(function (n) {
      return n[1];
    });

  return randomizedDeck;
};

module.exports = generateDeck;
