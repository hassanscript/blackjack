import { useEffect, useState } from "react";
import { Divider } from "../../../Components";
import { useGameStore } from "../../../Stores";
import styles from "./index.module.scss";
import InfoBox from "./InfoBox";

export const ResultBox = () => {
  const game = useGameStore();
  const [result, setResult] = useState([]);
  useEffect(() => {
    const { playerResults } = game.gameResults;
    if (playerResults.length == 0) {
      const result = game.allPlayersInfo.map(({ playerNumber }) => ({
        playerNumber,
        wins: 0,
        loses: 0,
      }));
      setResult(result);
    } else {
      setResult(playerResults);
    }
  }, [game.gameResults]);

  return (
    <div className={styles.result}>
      <h3>ROUND {game.gameResults.rounds}</h3>
      <table>
        <tbody>
          <tr>
            <th>Player</th>
            <th className={styles.count}>Wins</th>
            <th className={styles.count}>loses</th>
          </tr>
          {result.map(({ playerNumber, wins, loses }, index) => (
            <tr key={"result" + index}>
              <td>Player {playerNumber}</td>
              <td className={`${styles.count} ${styles.wins}`}>{wins}</td>
              <td className={`${styles.count} ${styles.loses}`}>{loses}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Divider />
      <InfoBox />
    </div>
  );
};
