import { useEffect, useState } from "react";
import { Loader } from "../../../Components";
import { useAppStore, useGameStore } from "../../../Stores";
import { socket } from "../../../utils";
import styles from "./index.module.scss";
import useSound from "use-sound";
import hitSound from "../../../Assets/Sounds/hit.wav";
import clickSound from "../../../Assets/Sounds/click.wav";

export const ActionButtons = ({ actionDisabled }) => {
  const [loading, setLoading] = useState(false);
  const app = useAppStore();
  const game = useGameStore();
  const { standing, bust } = game.myInfo;
  const [playHit] = useSound(hitSound);
  const [playClick] = useSound(clickSound);

  useEffect(() => {
    // when a hit has been successfully registered
    socket.on("HIT_DONE", (myInfo) => {
      game.updateData("myInfo", myInfo);
      setLoading(false);
    });
    // when a stand has been successfully registered
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
    // on hit, play hit sound and emit the event with game code
    playHit();
    setLoading(true);
    socket.emit("HIT", app.gameCode);
  };
  const onStand = () => {
    // on hit, play hit sound and emit the event with game code
    playClick();
    socket.emit("STAND", app.gameCode);
  };
  const onNextRound = () => {
    // on hit, play hit sound and emit the event with game code
    // and also set the game state to ready for next round
    playClick();
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
              disabled={loading || bust || standing || actionDisabled}
              className={styles.hit}
            >
              HIT
            </button>
            <button
              onClick={onStand}
              disabled={loading || bust || standing || actionDisabled}
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
