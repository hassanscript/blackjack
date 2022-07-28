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
    // listens for when the game is joined
    socket.on("GAME_JOINED", (gameCode) => {
      // when the game is joined, the loading is set to false
      // the app state is update with the game code
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
