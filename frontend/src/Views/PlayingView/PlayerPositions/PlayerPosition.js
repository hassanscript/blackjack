import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useGameStore } from "../../../Stores";
import { ReactSVG } from "react-svg";
import CardStack from "./CardStack";

export const PlayerPosition = ({ number, setActionDisabled }) => {
  const game = useGameStore();
  const [current, setCurrent] = useState(false);
  const [cards, setCards] = useState([]);
  const [bust, setBust] = useState(false);

  useEffect(() => {
    const current = game.myInfo.playerNumber == number;
    setCurrent(current);
  }, []);

  useEffect(() => {
    if (current) {
      const { cards, bust } = game.myInfo;
      console.log(cards);
      setBust(bust);
      cards.reverse();
      setCards(cards.reverse());
    }
  }, [current, game.myInfo.cards.length, game.myInfo.bust, game.paused]);

  useEffect(() => {
    if (!current) {
      if (game.paused) {
        const player = game.lastRoundCards.players.find(
          ({ playerNumber }) => playerNumber == number
        );
        setCards(player.cards);
      } else {
        const player = game.allPlayersInfo.find(
          ({ playerNumber }) => playerNumber == number
        );
        if (player) {
          let cards = Array(player.cardCount).fill(null);
          const { bust } = player;
          setCards(cards);
          setBust(bust);
        }
      }
    }
  }, [current, game.allPlayersInfo, game.paused]);

  return (
    <div
      className={`${styles[`player${number}`]} ${current && styles.current}`}
    >
      {bust && (
        <div className={styles.bust}>
          <div>BUSTED</div>
        </div>
      )}
      <h3>
        Player {number} {current && "(You)"}
      </h3>
      <CardStack
        current={current}
        cards={cards}
        setActionDisabled={(val) => {
          if (current && setActionDisabled) setActionDisabled(val);
        }}
      />
    </div>
  );
};
