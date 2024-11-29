import React from "react";
import "../App.css";

const Book = ({ title, image, description, characters, action }) => {
  return (
    <div className="book">
      <h1 className="book-title">{title}</h1>
      <div className="book-image">
        <img src={image} alt={title} />
      </div>
      <p className="book-description">{description}</p>
      <ul className="book-characters">
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button onClick={() => action(title, characters)} className="book-button">
        Show Details
      </button>
    </div>
  );
};

export default Book;
