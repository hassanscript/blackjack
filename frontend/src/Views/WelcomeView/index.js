import JoinGameButton from "./JoinGameButton";
import CreateGameButton from "./CreateGameButton";
import { Divider } from "../../Components";
import { useEffect } from "react";
import { socket } from "../../utils";
import { useAppStore } from "../../Stores";

const WelcomeView = () => {
  const app = useAppStore();

  useEffect(() => {
    socket.on("GAME_JOINED", (gameCode) => {
      app.setGameCode(gameCode);
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
