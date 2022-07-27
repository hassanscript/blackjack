import JoinGameButton from "./JoinGameButton";
import CreateGameButton from "./CreateGameButton";
import { Divider } from "../../Components";
import { useEffect } from "react";
import { socket } from "../../utils";
import { useAppStore } from "../../Stores";
import styles from "./index.module.scss";

const WelcomeView = () => {
  const app = useAppStore();

  useEffect(() => {
    socket.on("GAME_JOINED", (gameCode) => {
      app.setLoading(false);
      app.setGameCode(gameCode);
    });
    return () => {
      socket.off("GAME_JOINED");
    };
  }, []);

  return (
    <div className={styles.welcomeView}>
      <CreateGameButton />
      <Divider space={40} text="OR" />
      <JoinGameButton />
    </div>
  );
};

export default WelcomeView;
