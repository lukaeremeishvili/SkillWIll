import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <>
      <Navbar
        links={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
          { label: "Products", path: "/products" },
        ]}
      />
      <Outlet />
    </>
  );
};

export default Layout;
