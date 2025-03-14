import React from "react";
import { useNavigate } from "react-router-dom";
import { IGame } from "../interfaces/game.interface";

interface GameItemProps extends IGame {
  author: string;
  reviews: string[]; 
}

const GameItem: React.FC<GameItemProps> = ({
  id,
  platform,
  title,
  author,
  reviews,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/games/${id}`)}
      style={{
        width: "200px",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <h1>{title}</h1>
      <ul>
        {platform.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Reviews:</strong>
      </p>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameItem;
