import { Button } from "../../Components";
import { socket } from "../../utils";

const CreateGameButton = () => {
  // on create game, the client request to join the game
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
