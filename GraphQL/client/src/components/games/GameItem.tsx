import React from "react";
import { useNavigate } from "react-router-dom";
import { IGame } from "../../interfaces/game.interface";
import { DELETE_GAME } from "../../graphql/mutations/delete-game";
import { Reference, useMutation } from "@apollo/client";

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
  const [DelGame, { loading, error }] = useMutation(DELETE_GAME, {
    update(cache) {
      cache.modify({
        fields: {
          games(cache = [], { readField }) {
            return cache.filter(
              (ref: Reference) => id !== readField("id", ref)
            );
          },
        },
      });
    },
  });
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    DelGame({
      variables: { deleteGameId: id },
    });
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  return (
    <div
      onClick={() => navigate(`/games/${id}`)}
      style={{
        width: "200px",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <button
        onClick={handleDelete}
        style={{
          color: "crimson",
          position: "absolute",
          top: "8px",
          right: "8px",
          cursor: "pointer",
        }}
      >
        X
      </button>
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
