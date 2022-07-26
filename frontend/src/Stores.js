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
  setWaiting: (waiting) => set((state) => ({ ...state, waiting })),
  setStarted: (started) => set((state) => ({ ...state, started })),
  setReady: (ready) => set((state) => ({ ...state, ready })),
  setInitialData: (data) => set((state) => ({ ...state, ...data })),
  updateData: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
