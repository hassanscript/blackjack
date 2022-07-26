import Footer from "./Footer";
import Header from "./Header";
import AppLoader from "./AppLoader";
import { useAppStore } from "../Stores";

const Main = ({ children }) => {
  const app = useAppStore();
  return (
    <>
      {app.loading && <AppLoader />}
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
