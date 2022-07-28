import create from "zustand";

// the app store
export const useAppStore = create((set) => ({
  loading: true,
  connected: false,
  gameCode: null,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setConnected: (connected) => set((state) => ({ ...state, connected })),
  setGameCode: (gameCode) => set((state) => ({ ...state, gameCode })),
}));

// the game store, managing the entire state of the game
export const useGameStore = create((set) => ({
  waiting: true,
  nextRoundReady: false,
  started: false,
  ready: false,
  myInfo: {},
  allPlayersInfo: {},
  dealer: {},
  paused: false,
  lastRoundCards: {
    dealer: [],
    players: [],
  },
  gameResults: {
    rounds: 1,
    playerResults: [],
  },
  setWaiting: (waiting) => set((state) => ({ ...state, waiting })),
  setStarted: (started) => set((state) => ({ ...state, started })),
  setReady: (ready) => set((state) => ({ ...state, ready })),
  // loads the initial data at the start of the round/game
  setInitialData: (data) =>
    set((state) => ({
      ...state,
      nextRoundReady: false,
      paused: false,
      ...data,
    })),
  updateData: (key, value) => set((state) => ({ ...state, [key]: value })),
  // handles the case when any player is bust
  handleBust: (playerNumber) =>
    set((state) => {
      const players = JSON.parse(JSON.stringify(state.allPlayersInfo));
      const player = players.find((p) => p.playerNumber == playerNumber);
      player.bust = true;
      const isSelf = playerNumber == state.myInfo.playerNumber;
      if (isSelf) {
        // in case the current player if bust
        // their status is updated
        return {
          ...state,
          myInfo: { ...state.myInfo, bust: true },
          allPlayersInfo: players,
        };
      } else {
        return {
          ...state,
          allPlayersInfo: players,
        };
      }
    }),
  // handles when the player receives the result for the round
  handleResult: (result) =>
    set((state) => {
      const { dealerCards, playerInfo, rounds } = result;
      // the last round cards are added to the state, and made visible to all
      const lastRoundCards = {
        dealer: dealerCards,
        players: playerInfo.map(({ playerNumber, cards }) => ({
          playerNumber,
          cards,
        })),
      };
      // the player results are updates
      const playerResults = playerInfo.map(
        ({ playerNumber, wins, loses, lastResult }) => ({
          playerNumber,
          wins,
          loses,
          lastResult,
        })
      );
      const gameResults = {
        rounds,
        playerResults,
      };
      return { ...state, paused: true, gameResults, lastRoundCards };
    }),
  readyForNextRound: () => set((state) => ({ ...state, nextRoundReady: true })),
  // when the game is reset, when thing is revert to default
  reset: () =>
    set(() => ({
      waiting: true,
      nextRoundReady: false,
      started: false,
      ready: false,
      myInfo: {},
      allPlayersInfo: {},
      dealer: {},
      paused: false,
      lastRoundCards: {
        dealer: [],
        players: [],
      },
      gameResults: {
        rounds: 1,
        playerResults: [],
      },
    })),
}));
