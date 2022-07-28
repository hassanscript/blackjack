import { DealerPosition } from "./DealerPosition";
import { PlayerPosition } from "./PlayerPosition";

const PlayerPositions = ({ setActionDisabled }) => {
  return (
    <>
      <PlayerPosition setActionDisabled={setActionDisabled} number={1} />
      <PlayerPosition setActionDisabled={setActionDisabled} number={2} />
      <DealerPosition />
    </>
  );
};

export default PlayerPositions;
