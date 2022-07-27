import Layout from "./Layout";
import WelcomeView from "./Views/WelcomeView";
import PlayingView from "./Views/PlayingView";
import { useEffect } from "react";
import { preloadCards, socket } from "./utils";
import { useAppStore, useGameStore } from "./Stores";

function App() {
  const app = useAppStore();
  const game = useGameStore();
  const { gameCode } = app;
  useEffect(() => {
    preloadCards();
    socket.on("connect", () => {
      app.setConnected(true);
      app.setLoading(false);
    });
    socket.on("GAME_DESTROYED", () => {
      app.setGameCode(null);
      game.reset();
    });
    socket.on("PLAYER_LEFT", () => {
      game.reset();
    });
    return () => {
      socket.off("connect");
      socket.off("GAME_DESTROYED");
      socket.off("PLAYER_LEFT");
    };
  }, []);
  // 'gameCode' having no value means the client is not connected to any game
  return <Layout>{!gameCode ? <WelcomeView /> : <PlayingView />}</Layout>;
}

export default App;
