import styles from "./Button.module.scss";
import useSound from "use-sound";
import click from "../Assets/Sounds/click.wav";

export const Button = ({ label, onClick, color, size, ...rest }) => {
  const [play] = useSound(click);

  return (
    <button
      {...rest}
      onClick={() => {
        play();
        onClick();
      }}
      className={`${styles.button} ${styles[color]}  ${styles[size]}`}
    >
      {label}
    </button>
  );
};
