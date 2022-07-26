import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useGameStore } from "../../../Stores";

export const PlayerPosition = ({ number }) => {
  const game = useGameStore();
  const [current, setCurrent] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const current = game.myInfo.playerNumber == number;
    setCurrent(current);
  }, []);

  useEffect(() => {
    let cards;
    if (current) {
      cards = game.myInfo.cards;
      setCards(cards);
    }
  }, [current, game.myInfo.cards.length]);

  useEffect(() => {
    let cards;
    if (!current) {
      const player = game.otherPlayersInfo.find(
        ({ playerNumber }) => playerNumber == number
      );
      if (player) {
        cards = Array(player.cardCount).fill(null);
      }
      setCards(cards);
    }
  }, [current, game.otherPlayersInfo]);

  return (
    <div className={styles[`player${number}`]}>
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
