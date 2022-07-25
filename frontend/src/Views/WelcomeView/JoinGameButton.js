import { useState } from "react";
import { appState } from "../../atoms";
import { socket } from "../../utils";
import { useAtom } from "jotai";

const JoinGameButton = () => {
  const [app, setApp] = useAtom(appState);
  const [gameCode, setGameCode] = useState("");

  const joinGame = () => {
    // take care of when gamecode is invalid or missing
    if (gameCode) {
      socket.emit("join", gameCode);
    }
    socket.on("gameStarted", (gameCode) => {
      setApp({ ...app, gameCode });
    });
    return () => {
      socket.off("gameStarted");
    };
  };

  return (
    <>
      <input
        placeholder="GAME CODE"
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value)}
      />
      <button onClick={joinGame}>Join Game</button>
    </>
  );
};

export default JoinGameButton;
