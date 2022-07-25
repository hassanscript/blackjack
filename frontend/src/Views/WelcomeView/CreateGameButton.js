import { useEffect } from "react";
import { socket } from "../../utils";
import { useAtom } from "jotai";
import { appState } from "../../atoms";

const CreateGameButton = () => {
  const [app, setApp] = useAtom(appState);

  const createGame = () => {
    socket.emit("join");
    socket.on("gameStarted", (gameCode) => {
      setApp({ ...app, gameCode });
    });
    return () => {
      socket.off("gameStarted");
    };
  };

  return <button onClick={createGame}>Create New Game</button>;
};

export default CreateGameButton;
