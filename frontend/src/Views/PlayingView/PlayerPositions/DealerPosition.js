import { useEffect, useState } from "react";
import { useGameStore } from "../../../Stores";
import styles from "./index.module.scss";
import { ReactSVG } from "react-svg";
import CardStack from "./CardStack";

export const DealerPosition = () => {
  const game = useGameStore();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (game.paused) {
      setCards(game.lastRoundCards.dealer);
    } else {
      const { dealer } = game;
      setCards([null, dealer.exposedCard]);
    }
  }, [game.paused]);

  return (
    <div className={styles.dealer}>
      <h3>Dealer</h3>
      <CardStack cards={cards} />
    </div>
  );
};
