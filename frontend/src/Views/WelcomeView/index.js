import JoinGameButton from "./JoinGameButton";
import CreateGameButton from "./CreateGameButton";
import { Divider } from "../../Components";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { appState, gameState } from "../../atoms";
import { socket } from "../../utils";

const WelcomeView = () => {
  const [app, setApp] = useAtom(appState);
  const [game, setGame] = useAtom(gameState);

  useEffect(() => {
    socket.on("GAME_JOINED", (gameCode) => {
      setApp({ connected: true, loading: false, gameCode });
    });
    return () => {
      socket.off("GAME_JOINED");
    };
  }, []);

  return (
    <div id="welcome-view">
      <CreateGameButton />
      <Divider text="OR" />
      <JoinGameButton />
    </div>
  );
};

export default WelcomeView;
