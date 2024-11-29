import React from "react";
import Book from "./Book";
import LOTM from "../assets/LOTM.webp";
import COI from "../assets/CoI.webp";
import '../App.css';

const books = [
  {
    id: 1,
    title: "Lord of the Mysteries",
    image: LOTM,
    description: "With the rising tide of steam power and machinery, who can come close to being a Beyonder? Shrouded in the fog of history and darkness, who or what is the lurking evil that murmurs into our ears? Like the corresponding tarot card, The Fool, which is numbered 0 — a number of unlimited potential — this is the legend of «The Fool».",
    characters: ["Klein Moretti", "Gehrman Sparrow", "Sherlock Moriarty"],
  },
  {
    id: 2,
    title: "Circle of Inevitability",
    image: COI,
    description: "In 1368, at the end of July. Bloody scarlet will descend from heaven.",
    characters: ["Lumian Lee", "Franca Roland", "The Fool"],
  },
];


function showBookDetails(title, characters) {
    console.log(`Book Title: ${title}`);
    console.log("Characters:");
    characters.forEach((character) => console.log(character));
  }

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          image={book.image}
          description={book.description}
          characters={book.characters}
          action={showBookDetails}
        />
      ))}
    </div>
  );
};

export default BookList;
