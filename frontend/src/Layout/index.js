import Footer from "./Footer";
import Header from "./Header";
import { useAtom } from "jotai";
import { appState } from "../atoms";
import AppLoader from "./AppLoader";

const Main = ({ children, loading }) => {
  const [app] = useAtom(appState);
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
