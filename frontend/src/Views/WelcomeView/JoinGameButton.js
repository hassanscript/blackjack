import { useState } from "react";
import { socket } from "../../utils";

const JoinGameButton = () => {
  const [gameCode, setGameCode] = useState("");

  const joinGame = () => {
    socket.emit("join", gameCode);
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
