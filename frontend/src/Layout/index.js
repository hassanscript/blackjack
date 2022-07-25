import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

const Main = ({ children, loading }) => {
  return (
    <>
      {loading && <Loader />}
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
