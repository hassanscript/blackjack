import { socket } from "../../utils";
import { useEffect } from "react";
import { WaitingBox } from "./WaitingBox";
import { ReadyBox } from "./ReadyBox";
import PlayerPositions from "./PlayerPositions";
import { ActionButtons } from "./ActionButtons";
import { useAppStore, useGameStore } from "../../Stores";
import { ResultBox } from "./ResultBox";
import styles from "./index.module.scss";
import { Button } from "../../Components";

const PlayingView = () => {
  const app = useAppStore();
  const game = useGameStore();

  useEffect(() => {
    socket.on("GAME_READY", () => {
      game.setWaiting(false);
    });
    socket.on("GAME_STARTED", (data) => {
      game.setInitialData({ started: true, ...data });
    });
    socket.on("PLAYER_BUSTED", (playerNumber) => {
      game.handleBust(playerNumber);
    });
    socket.on("ROUND_RESULT", (result) => {
      game.handleResult(result);
    });
    socket.on("UPDATE_GAME", ({ key, value }) => {
      game.updateData(key, value);
    });
    return () => {
      socket.off("GAME_READY");
      socket.off("GAME_STARTED");
      socket.off("UPDATE_GAME");
      socket.off("PLAYER_BUSTED");
      socket.off("ROUND_RESULTS");
    };
  }, []);

  const onLeave = () => {
    app.setGameCode(null);
    game.reset();
    socket.emit("LEAVE_GAME", app.gameCode);
  };

  return (
    <div className={styles.playingView}>
      {game.started && <PlayerPositions />}
      <div className={styles.table}>
        {game.started && <ActionButtons />}
        <div className={styles.mat}>
          <div className={styles.leave}>
            <Button label="LEAVE" onClick={onLeave} />
          </div>
          <div className={styles.code}>
            <span>GAME CODE</span>
            <h3>{app.gameCode}</h3>
          </div>
          {game.started && <ResultBox />}
          {game.waiting && <WaitingBox />}
          {!game.waiting && !game.started && <ReadyBox />}
        </div>
      </div>
    </div>
  );
};

export default PlayingView;
