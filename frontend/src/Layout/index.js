import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import { useAtom } from "jotai";
import { appState } from "../atoms";

const Main = ({ children, loading }) => {
  const [app] = useAtom(appState);
  return (
    <>
      {app.loading && <Loader />}
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
