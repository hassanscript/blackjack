import styles from "./Button.module.scss";

export const Button = ({ label, onClick, color, size, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${styles.button} ${styles[color]}  ${styles[size]}`}
    >
      {label}
    </button>
  );
};
