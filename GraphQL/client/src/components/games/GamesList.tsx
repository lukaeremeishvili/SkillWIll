import React from "react";
import { IGame } from "../../interfaces/game.interface";
import GameItem from "./GameItem";

interface GamesListProps {
  games: IGame[] | undefined;
  authors: string[];
  reviews: string[];
}

const GamesList: React.FC<GamesListProps> = ({ games, authors, reviews }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {games?.map(({ id, platform, title }) => (
        <GameItem
          key={id}
          title={title}
          platform={platform}
          id={id}
          author={authors[0]} 
          reviews={reviews}  
        />
      ))}
    </div>
  );
};

export default GamesList;
