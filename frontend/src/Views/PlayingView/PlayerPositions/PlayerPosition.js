import styles from "./index.module.scss";
import { useAtom } from "jotai";
import { gameState } from "../../../atoms";
import { useEffect, useState } from "react";

export const PlayerPosition = ({ number }) => {
  const [game] = useAtom(gameState);
  const [current, setCurrent] = useState(false);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const current = game.myInfo.playerNumber == number;
    setCurrent(current);
    let cards;
    if (current) {
      cards = game.myInfo.cards;
      cards = cards.reverse();
    } else {
      cards = Array(game.otherPlayersInfo[0].cardCount).fill(null);
    }
    setCards(cards);
  }, []);
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
