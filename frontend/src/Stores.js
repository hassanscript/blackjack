import create from "zustand";

export const useAppStore = create((set) => ({
  loading: true,
  connected: false,
  gameCode: null,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setConnected: (connected) => set((state) => ({ ...state, connected })),
  setGameCode: (gameCode) => set((state) => ({ ...state, gameCode })),
}));

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
  setInitialData: (data) =>
    set((state) => ({
      ...state,
      nextRoundReady: false,
      paused: false,
      ...data,
    })),
  updateData: (key, value) => set((state) => ({ ...state, [key]: value })),
  handleBust: (playerNumber) =>
    set((state) => {
      const players = JSON.parse(JSON.stringify(state.allPlayersInfo));
      const player = players.find((p) => p.playerNumber == playerNumber);
      player.bust = true;
      const isSelf = playerNumber == state.myInfo.playerNumber;
      if (isSelf) {
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
  handleResult: (result) =>
    set((state) => {
      const { dealerCards, playerInfo, rounds } = result;
      const lastRoundCards = {
        dealer: dealerCards,
        players: playerInfo.map(({ playerNumber, cards }) => ({
          playerNumber,
          cards,
        })),
      };
      const playerResults = playerInfo.map(
        ({ playerNumber, wins, looses, lastResult }) => ({
          playerNumber,
          wins,
          looses,
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
}));
