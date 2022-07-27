import { useEffect, useState } from "react";
import { useGameStore } from "../../../Stores";
import styles from "./index.module.scss";

export const DealerPosition = () => {
  const game = useGameStore();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (game.paused) {
      setCards(game.lastRoundCards.dealer);
    } else {
      const { dealerExposedCard } = game;
      setCards([null, dealerExposedCard]);
    }
  }, [game.paused]);

  return (
    <div className={styles.dealer}>
      <h3>Dealer</h3>
      <div className={styles.cards}>
        {cards.map((card, index) => {
          let imgLink = null;
          const style = {
            left: 11 * index + "%",
            zIndex: index,
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
