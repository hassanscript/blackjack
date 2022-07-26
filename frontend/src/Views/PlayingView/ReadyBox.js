import { useAtom } from "jotai";
import { useEffect } from "react";
import { appState, gameState } from "../../atoms";
import { Button, Loader } from "../../Components";
import { socket } from "../../utils";

export const ReadyBox = () => {
  const [app] = useAtom(appState);
  const [game, setGame] = useAtom(gameState);

  useEffect(() => {
    // socket.on("gameReady", (gameCode) => {
    //   setApp({ connected: true, loading: false, gameCode });
    // });
    // return () => {
    //   socket.off("gameStarted");
    // };
  }, []);

  const onReady = () => {
    const { gameCode } = app;
    socket.emit("PLAYER_READY", gameCode);
    setGame({ ...game, ready: true });
  };

  if (!game.ready) {
    return (
      <div className="game-info-box">
        <div className="text" style={{ paddingBottom: "10px" }}>
          Please click on the button below once you are ready to start
        </div>
        <Button label="READY" onClick={onReady} />
      </div>
    );
  }

  return (
    <div className="game-info-box">
      <Loader size="small" />
      <span className="text md">Waiting for the other player to be ready</span>
    </div>
  );
};
