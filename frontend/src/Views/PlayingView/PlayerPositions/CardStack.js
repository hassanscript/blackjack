import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const CardStack = ({ cards: _cards }) => {
  const [cards, setCards] = useState([]);

  const importCards = async () => {
    const imports = _cards.map((c) => {
      if (!c) return import(`../../../Assets/Cards/back.png`);
      return import(`../../../Assets/Cards/${c.id}_of_${c.suit}.svg`);
    });
    const data = await Promise.all(imports);
    setCards(data);
  };

  useEffect(() => {
    importCards();
  }, [_cards]);

  return (
    <div className={styles.cards}>
      {cards.map((card, index) => {
        const style = {
          left: 11 * index + "%",
          zIndex: 1,
        };
        return (
          <img style={style} key={"cardstack" + index} src={card.default} />
        );
      })}
    </div>
  );
};

export default CardStack;
