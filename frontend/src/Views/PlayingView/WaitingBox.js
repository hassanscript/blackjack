import { Divider, Loader } from "../../Components";

export const WaitingBox = () => {
  return (
    <div className="dataBox">
      <Loader size="small" />
      <span className="text md">Waiting for the other player 2 to join</span>
      <Divider />
      <span className="text">
        Share the game code with the other player if you haven't already
      </span>
    </div>
  );
};
