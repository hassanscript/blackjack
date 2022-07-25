import Layout from "./Layout";
import WelcomeView from "./Views/WelcomeView";
import PlayingView from "./Views/PlayingView";
import { useEffect } from "react";
import { socket } from "./utils";
import { useAtom } from "jotai";
import { appState } from "./atoms";

function App() {
  const [app, setApp] = useAtom(appState);
  const { gameCode } = app;
  useEffect(() => {
    socket.on("connect", () => {
      setApp({
        ...app,
        loading: false,
        connected: true,
      });
    });
    return () => {
      socket.off("connect");
    };
  }, []);

  return <Layout>{!gameCode ? <WelcomeView /> : <PlayingView />}</Layout>;
}

export default App;
