import { IAuthor } from "./author.interface";
import { IGame } from "./game.interface";

export interface IReview {
  id: string;
  content: string;
  rating: number;
  author: IAuthor; 
  game: IGame; 
}