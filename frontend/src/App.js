import Layout from "./Layout";
import WelcomeView from "./Views/WelcomeView";
import PlayingView from "./Views/PlayingView";
import { useEffect } from "react";
import { socket } from "./utils";
import { useAppStore } from "./Stores";

function App() {
  const app = useAppStore();
  const { gameCode } = app;
  useEffect(() => {
    socket.on("connect", () => {
      app.setConnected(true);
      app.setLoading(false);
    });
    return () => {
      socket.off("connect");
    };
  }, []);
  // 'gameCode' having no value means the client is not connected to any game
  return <Layout>{!gameCode ? <WelcomeView /> : <PlayingView />}</Layout>;
}

export default App;
