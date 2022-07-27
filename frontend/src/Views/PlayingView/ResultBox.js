import { useEffect, useState } from "react";
import { Divider } from "../../Components";
import { useGameStore } from "../../Stores";
import styles from "./ResultBox.module.scss";

export const ResultBox = () => {
  const game = useGameStore();
  const [result, setResult] = useState([]);
  useEffect(() => {
    const { playerResults } = game.gameResults;
    if (playerResults.length == 0) {
      const result = game.otherPlayersInfo.map(({ playerNumber }) => ({
        playerNumber,
        wins: 0,
        looses: 0,
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
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Looses</th>
        </tr>
        {result.map(({ playerNumber, wins, looses }) => (
          <tr>
            <td>Player {playerNumber}</td>
            <td>{wins}</td>
            <td>{looses}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
