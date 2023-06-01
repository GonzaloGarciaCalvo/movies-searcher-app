export function getMoviesInFavsfromLS(){
  const favMovies = localStorage.getItem('favs')
  let tempMoviesInFavs
  if (favMovies === null) {
    tempMoviesInFavs = []
  } else {
    tempMoviesInFavs = JSON.parse(favMovies)
  }
  return tempMoviesInFavs
}