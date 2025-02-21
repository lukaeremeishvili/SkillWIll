import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Router;
