import { useEffect, useState } from "react";
import useSound from "use-sound";
import styles from "./index.module.scss";
import passSound from "../../../Assets/Sounds/pass.mp3";

const CardStack = ({ cards: _cards, setActionDisabled, current }) => {
  const [cards, setCards] = useState([]);
  const [playPass] = useSound(passSound);

  const importCards = async () => {
    const imports = _cards.map((c) => {
      if (!c) return import(`../../../Assets/Cards/back.png`);
      return import(`../../../Assets/Cards/${c.id}_of_${c.suit}.png`);
    });
    // all the promises are resolved
    const data = await Promise.all(imports);
    // if the number of cards is different then the sound is played
    current && cards.length != data.length && playPass();
    setCards(data);
    // the player is now again able to do an action
    setActionDisabled && setActionDisabled(false);
  };

  useEffect(() => {
    // when the cards are updated, i.e. new card added because of hit
    // the card image is dynamically imported
    // the player is enable to do hit or stand until the image is imported
    setActionDisabled && setActionDisabled(true);
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
