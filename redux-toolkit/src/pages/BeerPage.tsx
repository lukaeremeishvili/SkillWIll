import React from "react";
import { useFetchBeerQuery } from "../store/beer/beer.api";
import { useParams } from "react-router-dom";

const BeerPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchBeerQuery(id as string);
  const { name, street, brewery_type, city, country } = data || {};

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="beer-page-container">
      <div className="beer-page">
        <h1>{name}</h1>
        <p>{street}</p>
        <p>{brewery_type}</p>
        <p>{city}</p>
        <p>{country}</p>
      </div>
    </div>
  );
};

export default BeerPage;
