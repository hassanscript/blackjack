import JoinGameButton from "./JoinGameButton";
import CreateGameButton from "./CreateGameButton";
import { Divider } from "../../Components";

const WelcomeView = ({ setLoading }) => {
  return (
    <div id="welcome-view">
      <CreateGameButton />
      <Divider text="OR" />
      <JoinGameButton />
    </div>
  );
};

export default WelcomeView;
