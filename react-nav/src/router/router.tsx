import { Routes, Route } from "react-router-dom";
import Layout from "../components/navbar/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Products from "../pages/products";
import Profile from "../pages/profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>

      <Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
