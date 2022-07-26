import { socket } from "../../utils";

const CreateGameButton = () => {
  const createGame = () => socket.emit("JOIN_GAME");

  return <button onClick={createGame}>Create New Game</button>;
};

export default CreateGameButton;
