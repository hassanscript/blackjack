import { socket } from "../../utils";

const CreateGameButton = () => {
  const createGame = () => {
    socket.emit("join", "asdas");
  };

  return <button onClick={createGame}>Create New Game</button>;
};

export default CreateGameButton;
