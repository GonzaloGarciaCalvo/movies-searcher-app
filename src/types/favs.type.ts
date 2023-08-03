import { movieType } from "./movie.type";

export interface initialFavState {
  favorites:movieType[];
  loading:Boolean;
  error:Boolean
}