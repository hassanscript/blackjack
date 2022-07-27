import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useGameStore } from "../../../Stores";

export const PlayerPosition = ({ number }) => {
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
      setBust(bust);
      setCards(cards);
    }
  }, [current, game.myInfo.cards.length, game.myInfo.bust]);

  useEffect(() => {
    if (!current) {
      const player = game.otherPlayersInfo.find(
        ({ playerNumber }) => playerNumber == number
      );
      if (player) {
        let cards = Array(player.cardCount).fill(null);
        const { bust } = player;
        setCards(cards);
        setBust(bust);
      }
    }
  }, [current, game.otherPlayersInfo]);

  return (
    <div className={styles[`player${number}`]}>
      {bust && (
        <div className={styles.bust}>
          <div>BUSTED</div>
        </div>
      )}
      <h3>{current ? "You" : `Player ${number}`}</h3>
      <div className={styles.cards}>
        {cards.reverse().map((card, index) => {
          let imgLink = null;
          const style = {
            left: 11 * index + "%",
            zIndex: 1,
          };
          if (card) {
            const { id, suit } = card;
            imgLink = require(`../../../Assets/Cards/${id}_of_${suit}.png`);
          } else {
            imgLink = require(`../../../Assets/Cards/back.png`);
          }
          return (
            <img style={style} key={"dealer-cards-" + index} src={imgLink} />
          );
        })}
      </div>
    </div>
  );
};
