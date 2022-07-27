import { socket } from "../../utils";
import { useEffect } from "react";
import { WaitingBox } from "./WaitingBox";
import { ReadyBox } from "./ReadyBox";
import PlayerPositions from "./PlayerPositions";
import { ActionButtons } from "./ActionButtons";
import { useAppStore, useGameStore } from "../../Stores";

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

  return (
    <div id="playing-view">
      {game.started && <PlayerPositions />}
      {game.started && <ActionButtons />}
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
