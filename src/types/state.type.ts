import { movieType } from "./movie.type"
type auth = {
  token:string,
  loading:Boolean,
  error:Boolean
}
type favs = {
  favorites:movieType[],
  loading:Boolean,
  error:Boolean
}
type mov = {
  movies:movieType[],
  loading:Boolean,
  error:Boolean
}
type lang = {
  lang:string,
}
export interface state {
  auth:auth,
  favs: favs,
  mov: mov,
  movByGenre: mov,
  lang: lang
};