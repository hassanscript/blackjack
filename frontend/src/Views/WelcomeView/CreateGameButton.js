import { Button } from "../../Components";
import { socket } from "../../utils";

const CreateGameButton = () => {
  const createGame = () => socket.emit("JOIN_GAME");

  return (
    <Button
      onClick={createGame}
      label="Create New Game"
      size="large"
      color="green"
    />
  );
};

export default CreateGameButton;
