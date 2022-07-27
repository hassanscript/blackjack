import { useEffect, useState } from "react";
import { Loader } from "../../../Components";
import { useGameStore } from "../../../Stores";
import styles from "./index.module.scss";

const InfoBox = () => {
  const game = useGameStore();
  const [result, setResult] = useState({ state: null, text: null });
  const { myInfo, paused } = game;
  const waiting = !paused && (myInfo.standing || myInfo.bust);
  const { playerNumber } = myInfo;
  useEffect(() => {
    const player = game.gameResults.playerResults.find(
      (p) => p.playerNumber == playerNumber
    );
    if (player) {
      const { lastResult } = player;
      if (lastResult == "win") setResult({ state: "win", text: "YOU WON!" });
      else if (lastResult == "looses")
        setResult({ state: "looses", text: "YOU LOST!" });
      else setResult({ state: "draw", text: "DRAW!" });
    }
  }, [game.paused]);
  let text = "";
  if (myInfo.standing) text = "You are standing";
  if (myInfo.bust) text = "You have been busted";
  return (
    <div className={styles.infoBox}>
      {waiting && (
        <>
          <span className="text md">{text}</span>
          <Loader size="small" />
          <span className="text">
            Please wait while the other player completes the round
          </span>
        </>
      )}
      {paused && (
        <>
          <span className="text">Round Ended</span>
          <span
            className={`text md ${styles.resultText} ${styles[result.state]}`}
          >
            {result.text}
          </span>
        </>
      )}
    </div>
  );
};

export default InfoBox;
