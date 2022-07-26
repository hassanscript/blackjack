import { DealerPosition } from "./DealerPosition";
import { Player1Position } from "./Player1Position";
import { Player2Position } from "./Player2Position";

const PlayerPositions = () => {
  return (
    <>
      <Player1Position />
      <Player2Position />
      <DealerPosition />
    </>
  );
};

export default PlayerPositions;
