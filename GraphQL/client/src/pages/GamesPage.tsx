import React, { Fragment } from "react";
import { GET_GAMES } from "../graphql/queries/get-games";
import { GET_AUTHORS } from "../graphql/queries/get-authors";
import { GET_REVIEWS } from "../graphql/queries/get-reviews";
import { useQuery } from "@apollo/client";
import { IGame } from "../interfaces/game.interface";
import GamesList from "../components/games/GamesList";
import CreateGame from "../components/games/CreateGame";

const GamesPage: React.FC = () => {
  const {
    loading,
    error,
    data: gamesData,
  } = useQuery<{ games: IGame[] }>(GET_GAMES);
  const { data: authorsData } = useQuery(GET_AUTHORS);
  const { data: reviewsData } = useQuery(GET_REVIEWS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const authors = authorsData?.authors.map(
    (author: { name: string }) => author.name
  );
  const reviews = reviewsData?.reviews.map(
    (review: { content: string }) => review.content
  );

  return (
    <Fragment>
      <GamesList
        games={gamesData?.games}
        authors={authors || []}
        reviews={reviews || []}
      />
      
      <CreateGame />
    </Fragment>
  );
};

export default GamesPage;
