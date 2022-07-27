import styles from "./Divider.module.scss";

export const Divider = ({ text, space = 20 }) => {
  return (
    <div className={styles.divider} style={{ margin: `${space}px 0px` }}>
      {text && <span>{text}</span>}
    </div>
  );
};
