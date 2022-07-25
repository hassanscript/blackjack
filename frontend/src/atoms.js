import { atom } from "jotai";

export const appState = atom({
  loading: true,
  connected: false,
  gameCode: null,
});

export const gameState = atom({
  waiting: true,
});
