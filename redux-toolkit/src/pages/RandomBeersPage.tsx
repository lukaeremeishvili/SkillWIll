import React, { useState } from "react";
import BeerCard from "../components/BeerCard";
import { IBeer } from "../interfaces/beer.interface";

const RandomBeersPage: React.FC = () => {
  const [randomBeers, setRandomBeers] = useState<IBeer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomBeers = async () => {
    if (isLoading) return;
    setIsLoading(true);

    setRandomBeers([]);

    const fetchedBeers: IBeer[] = [];
    const uniqueBeers = new Set<string>();

    while (fetchedBeers.length < 10) {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/breweries/random?cacheBuster=${new Date().getTime()}`
        );
        const data = await response.json();
        const beer = data[0];

        if (!uniqueBeers.has(beer.id)) {
          fetchedBeers.push(beer);
          uniqueBeers.add(beer.id);
        }
      } catch (error) {
        console.error("Error fetching beer:", error);
      }
    }

    setRandomBeers(fetchedBeers);
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Random Beers</h1>
      <button onClick={fetchRandomBeers} disabled={isLoading}>
        {isLoading ? "Loading..." : "Generate 10 Random Beers"}
      </button>

      <div className="beer-container">
        {randomBeers.map((beer) => (
          <button className="beer-button" key={beer.id}>
            <BeerCard beer={beer} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RandomBeersPage;
