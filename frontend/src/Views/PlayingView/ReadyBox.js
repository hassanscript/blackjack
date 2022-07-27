import { Button, Loader } from "../../Components";
import { useAppStore, useGameStore } from "../../Stores";
import { socket } from "../../utils";

export const ReadyBox = () => {
  const app = useAppStore();
  const game = useGameStore();

  const onReady = () => {
    const { gameCode } = app;
    socket.emit("PLAYER_READY", gameCode);
    game.setReady(true);
  };

  if (!game.ready) {
    return (
      <div className="dataBox">
        <div className="text" style={{ paddingBottom: "10px" }}>
          Please click on the button below once you are ready to start
        </div>
        <Button label="READY" color="blue" onClick={onReady} />
      </div>
    );
  }

  return (
    <div className="dataBox">
      <Loader size="small" />
      <span className="text md">Waiting for the other player to be ready</span>
    </div>
  );
};
