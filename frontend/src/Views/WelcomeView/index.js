import JoinGameButton from "./JoinGameButton";
import CreateGameButton from "./CreateGameButton";

const WelcomeView = ({ setLoading }) => {
  return (
    <div id="welcome-view">
      <CreateGameButton />
      <div className="divider">OR</div>
      <JoinGameButton />
    </div>
  );
};

export default WelcomeView;
