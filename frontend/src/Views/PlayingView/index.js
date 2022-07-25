import { appState, gameState } from "../../atoms";
import { useAtom } from "jotai";
import { Divider, Loader } from "../../Components";
import { useEffect } from "react";

const PlayingView = () => {
  const [app] = useAtom(appState);
  const [game, setGame] = useAtom(gameState);

  return (
    <div id="playing-view">
      <div id="table">
        <div id="mat">
          <div id="game-code-box">
            <span>GAME CODE</span>
            <h3>{app.gameCode}</h3>
          </div>
          {game.waiting && (
            <div id="game-waiting-box">
              <Loader size="small" />
              <span className="text md">
                Waiting for the other player 2 to join
              </span>
              <Divider />
              <span className="text">
                Share the game code with the other player if you haven't already
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayingView;
