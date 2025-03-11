import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomePage from "../components/Navbar";
import BeersPage from "../pages/BeersPage";
import BeerPage from "../pages/BeerPage";
import RandomBeersPage from "../pages/RandomBeersPage";

const AppRouter = () => (
  <Router>
    <Navigation />

    <Routes>
      <Route path="/beers">
        <Route path="/beers" element={<BeersPage />} />
        <Route path=":id" element={<BeerPage />} />
      </Route>
      <Route path="/random-beers" element={<RandomBeersPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default AppRouter;
