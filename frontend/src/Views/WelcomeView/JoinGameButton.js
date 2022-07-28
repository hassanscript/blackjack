import { useEffect, useState } from "react";
import { Button } from "../../Components";
import { useAppStore } from "../../Stores";
import { socket } from "../../utils";
import styles from "./index.module.scss";

const JoinGameButton = () => {
  const [gameCode, setGameCode] = useState("");
  const [error, setError] = useState("");
  const app = useAppStore();

  useEffect(() => {
    socket.on("WRONG_GAMECODE", (error) => {
      app.setLoading(false);
      setError(error);
    });
    return () => {
      socket.off("WRONG_GAMECODE");
    };
  }, []);

  const joinGame = () => {
    // take care of when gamecode is invalid or missing
    if (gameCode) {
      setError("");
      // on join game, the client request to join the game
      socket.emit("JOIN_GAME", gameCode);
      app.setLoading(true);
    }
  };

  return (
    <>
      <input
        placeholder="GAME CODE"
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value.trim())}
      />
      <Button
        disabled={gameCode.length === 0}
        onClick={joinGame}
        label="Join Game"
        size="large"
        color="blue"
      />
      {error && (
        <div className={styles.message} onClick={() => setError("")}>
          <div>
            <b>Error:</b> {error}
          </div>
        </div>
      )}
    </>
  );
};

export default JoinGameButton;
