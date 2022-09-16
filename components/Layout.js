import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navbar />

      <div style={{ background:"black" }} className="page-index">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
