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
  started: false,
  ready: false,
  myInfo: {},
  otherPlayersInfo: {},
  dealer: {},
  paused: false,
  lastRoundCards: {
    dealer: [],
    players: [],
  },
  gameResults: {
    rounds: 0,
    playerResults: [],
  },
  setWaiting: (waiting) => set((state) => ({ ...state, waiting })),
  setStarted: (started) => set((state) => ({ ...state, started })),
  setReady: (ready) => set((state) => ({ ...state, ready })),
  setInitialData: (data) => set((state) => ({ ...state, ...data })),
  updateData: (key, value) => set((state) => ({ ...state, [key]: value })),
  handleBust: (playerNumber) =>
    set((state) => {
      const players = JSON.parse(JSON.stringify(state.otherPlayersInfo));
      const player = players.find((p) => p.playerNumber == playerNumber);
      player.bust = true;
      const isSelf = playerNumber == state.myInfo.playerNumber;
      if (isSelf) {
        return {
          ...state,
          myInfo: { ...state.myInfo, bust: true },
          otherPlayersInfo: players,
        };
      } else {
        return {
          ...state,
          otherPlayersInfo: players,
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
      const playerResults = playerInfo.map(({ playerNumber, wins, loses }) => ({
        playerNumber,
        wins,
        loses,
      }));
      const gameResults = {
        rounds,
        playerResults,
      };
      console.log({ ...state, paused: true, gameResults, lastRoundCards });
      return { ...state, paused: true, gameResults, lastRoundCards };
    }),
}));
