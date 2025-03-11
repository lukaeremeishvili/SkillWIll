import React, { useState } from "react";
import { useFetchAllBeersQuery, usePrefetch } from "../store/beer/beer.api";
import BeerCard from "../components/BeerCard";

const BeersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const prefetch = usePrefetch("fetchBeer");
  const { data, isLoading, isError } = useFetchAllBeersQuery({
    page,
    per_page: perPage,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Something went wrong, please try again.</h1>;

  if (!data || data.length === 0) return <h1>No beers found!</h1>;

  return (
    <div>
      <h1>Beers</h1>

      <div>
        <label htmlFor="page">Page: </label>
        <select
          id="page"
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
        >
          {[1, 2, 3].map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="perPage">Beers per page: </label>
        <select
          id="perPage"
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        >
          {[10, 50, 80].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <div className="beer-container">
        {data?.map((beer) => (
          <button
            className="beer-button"
            onMouseEnter={() => prefetch(beer.id, { ifOlderThan: 60 })}
            key={beer.id}
          >
            <BeerCard beer={beer} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BeersPage;
