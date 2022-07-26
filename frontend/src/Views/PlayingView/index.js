import { appState, gameState } from "../../atoms";
import { useAtom } from "jotai";
import { socket } from "../../utils";
import { useEffect } from "react";
import { WaitingBox } from "./WaitingBox";
import { ReadyBox } from "./ReadyBox";
import PlayerPositions from "./PlayerPositions";

const PlayingView = () => {
  const [app] = useAtom(appState);
  const [game, setGame] = useAtom(gameState);

  useEffect(() => {
    socket.on("GAME_READY", () => {
      setGame({ ...game, waiting: false });
    });
    socket.on("GAME_STARTED", (data) => {
      setGame({ ...game, waiting: false, ready: true, started: true, ...data });
    });
    return () => {
      socket.off("GAME_READY");
      socket.off("GAME_STARTED");
    };
  }, []);

  return (
    <div id="playing-view">
      {game.started && <PlayerPositions />}
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
