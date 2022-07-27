import { useEffect, useState } from "react";
import { useAppStore, useGameStore } from "../../../Stores";
import { socket } from "../../../utils";
import styles from "./index.module.scss";

export const ActionButtons = () => {
  const [loading, setLoading] = useState(false);
  const app = useAppStore();
  const game = useGameStore();

  const busted = game.myInfo.bust;

  useEffect(() => {
    socket.on("HIT_DONE", (myInfo) => {
      game.updateData("myInfo", myInfo);
      setLoading(false);
    });
    socket.on("GAME_STARTED", (data) => {
      setLoading(false);
    });
    return () => {
      socket.off("GAME_STARTED");
      socket.off("HIT_DONE");
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
  };
  return (
    <div className={styles.actionButtons}>
      <div className={styles.holder}>
        {game.paused && (
          <button
            disabled={loading}
            className={styles.next}
            onClick={onNextRound}
          >
            NEXT ROUND
          </button>
        )}
        {!game.paused && (
          <>
            <button
              onClick={onHit}
              disabled={loading || busted}
              className={styles.hit}
            >
              HIT
            </button>
            <button
              onClick={onStand}
              disabled={loading || busted}
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
