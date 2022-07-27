import { useEffect, useState } from "react";
import { Loader } from "../../../Components";
import { useAppStore, useGameStore } from "../../../Stores";
import { socket } from "../../../utils";
import styles from "./index.module.scss";

export const ActionButtons = () => {
  const [loading, setLoading] = useState(false);
  const app = useAppStore();
  const game = useGameStore();
  const { standing, bust } = game.myInfo;
  useEffect(() => {
    socket.on("HIT_DONE", (myInfo) => {
      game.updateData("myInfo", myInfo);
      setLoading(false);
    });
    socket.on("STAND_DONE", (myInfo) => {
      game.updateData("myInfo", myInfo);
      setLoading(false);
    });
    return () => {
      socket.off("HIT_DONE");
      socket.off("STAND_DONE");
    };
  }, []);

  const onHit = () => {
    setLoading(true);
    socket.emit("HIT", app.gameCode);
  };
  const onStand = () => {
    socket.emit("STAND", app.gameCode);
  };
  const onNextRound = () => {
    socket.emit("NEXT_ROUND", app.gameCode);
    game.readyForNextRound();
  };

  return (
    <div className={styles.actionButtons}>
      <div className={styles.holder}>
        {game.paused && !game.nextRoundReady && (
          <button
            disabled={loading}
            className={styles.next}
            onClick={onNextRound}
          >
            NEXT ROUND
          </button>
        )}
        {game.paused && game.nextRoundReady && (
          <div className={styles.roundWait}>
            <Loader size="small" />
            <span className="text">
              Waiting for the other player to be ready for next round
            </span>
          </div>
        )}
        {!game.paused && (
          <>
            <button
              onClick={onHit}
              disabled={loading || bust || standing}
              className={styles.hit}
            >
              HIT
            </button>
            <button
              onClick={onStand}
              disabled={loading || bust || standing}
              className={styles.stand}
            >
              STAND
            </button>
          </>
        )}
      </div>
    </div>
  );
};
