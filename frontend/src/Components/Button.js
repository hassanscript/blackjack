import styles from "./Button.module.scss";

export const Button = ({ label, onClick, variant }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {label}
    </button>
  );
};
