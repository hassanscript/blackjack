import Layout from "./Layout";
import WelcomeView from "./Views/WelcomeView";
import PlayingView from "./Views/PlayingView";
import { useEffect } from "react";
import { socket } from "./utils";
import { useAppStore, useGameStore } from "./Stores";

function App() {
  const app = useAppStore();
  const game = useGameStore();
  const { gameCode } = app;

  useEffect(() => {
    // on connection the app is set to connected and loading is set to false
    socket.on("connect", () => {
      app.setConnected(true);
      app.setLoading(false);
    });

    // when the game is destroy the game state is reset
    socket.on("GAME_DESTROYED", () => {
      app.setGameCode(null);
      game.reset();
    });

    // when any player leaves the game is reset
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
