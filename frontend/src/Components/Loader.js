import loadIcon from "../Assets/loadIcon.png";
import styles from "./Loader.module.scss";

export const Loader = ({ size = "large" }) => {
  return (
    <div className={styles.loader + " " + styles[size]}>
      <img src={loadIcon} />
    </div>
  );
};
