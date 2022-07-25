import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
