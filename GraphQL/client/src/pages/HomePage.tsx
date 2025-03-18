import React from "react";
import { Link } from "react-router-dom";


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/games">
        <button>Go to Games</button>
      </Link>
    </div>
  );
};

export default HomePage;
