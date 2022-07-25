import styles from "./Divider.module.scss";

export const Divider = ({ text }) => {
  return <div className={styles.divider}>{text && <span>{text}</span>}</div>;
};
