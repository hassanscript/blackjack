import { appState, gameState } from "../../atoms";
import { useAtom } from "jotai";
import { socket } from "../../utils";
import { useEffect } from "react";
import { WaitingBox } from "./WaitingBox";
import { ReadyBox } from "./ReadyBox";

const PlayingView = () => {
  const [app] = useAtom(appState);
  const [game, setGame] = useAtom(gameState);

  useEffect(() => {
    socket.on("gameReady", () => {
      setGame({ ...game, waiting: false });
    });
    return () => {
      socket.off("gameReady");
    };
  }, []);

  return (
    <div id="playing-view">
      <div id="table">
        <div id="mat">
          <div id="game-code-box">
            <span>GAME CODE</span>
            <h3>{app.gameCode}</h3>
          </div>
          {game.waiting && <WaitingBox />}
          {!game.waiting && !game.started && <ReadyBox />}
        </div>
      </div>
    </div>
  );
};

export default PlayingView;
