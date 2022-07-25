const WelcomeView = () => {
  return (
    <div id="welcome-view">
      <button>Create New Game</button>
      <div className="divider">OR</div>
      <input placeholder="GAME CODE" />
      <button>Join Existing Game</button>
    </div>
  );
};

export default WelcomeView;
