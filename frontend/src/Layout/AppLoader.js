import styles from "./AppLoader.module.scss";
import { Loader } from "../Components";

const AppLoader = () => {
  return (
    <div className={styles.appLoader}>
      <Loader />
    </div>
  );
};

export default AppLoader;
