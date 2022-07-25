import { atom } from "jotai";

export const appState = atom({
  loading: true,
  connected: false,
  gameCode: null,
});
