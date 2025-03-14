import React from "react";
import { useQuery } from "@apollo/client";
import { GET_GAME } from "../graphql/queries/get-game";
import { GET_REVIEWS } from "../graphql/queries/get-reviews";
import { useParams } from "react-router-dom";
import { IGame } from "../interfaces/game.interface";

interface IReview {
  content: string;
  rating: number;
  author: {
    name: string;
    verified: boolean;
  };
}

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    loading: gameLoading,
    error: gameError,
    data: gameData,
  } = useQuery<{ game: IGame & { rating?: number } }>(GET_GAME, {
    variables: { gameId: id },
    skip: !id,
  });

  const { data: reviewsData } = useQuery<{ reviews: IReview[] }>(GET_REVIEWS, {
    variables: { gameId: id },
    skip: !id,
  });

  if (gameLoading) return <h1>Loading...</h1>;
  if (gameError) return <h1>Error: {gameError.message}</h1>;

  const game = gameData?.game;
  if (!game) return <h1>No game found.</h1>;

  const reviews: IReview[] = reviewsData?.reviews || [];

  return (
    <div>
      <h1>{game.title}</h1>
      <ul>
        {game.platform?.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <div>
        <strong>Reviews:</strong>
        <ul>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.author.name}</strong> - Review: {review.content}{" "}
                - Rating: {review.rating}
              </li>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GamePage;
