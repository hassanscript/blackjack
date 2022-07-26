import { DealerPosition } from "./DealerPosition";
import { PlayerPosition } from "./PlayerPosition";

const PlayerPositions = () => {
  return (
    <>
      <PlayerPosition number={1} />
      <PlayerPosition number={2} />
      <DealerPosition />
    </>
  );
};

export default PlayerPositions;
