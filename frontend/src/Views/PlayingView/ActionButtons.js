import { useEffect, useState } from "react";
import { useAppStore, useGameStore } from "../../Stores";
import { socket } from "../../utils";
import styles from "./ActionButtons.module.scss";
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
    socket.on("STAND_DONE", (data) => {
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
    setLoading(true);
    socket.emit("STAND", app.gameCode);
  };
  return (
    <div className={styles.actionButtons}>
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
    </div>
  );
};
