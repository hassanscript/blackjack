import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Created By Hassan / Check on{" "}
      <a target="__blank" href="https://github.com/hassanscript/blackjack">
        Github
      </a>
    </footer>
  );
};

export default Footer;
