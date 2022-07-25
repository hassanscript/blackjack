const generateDeck = () => {
  const deck = [
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
  deck.forEach((c) => suits.forEach((s) => (c.suit = s)));
  return deck;
};

module.exports = generateDeck;
