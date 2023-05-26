export const addOrRemoveFavs = e => {
  const btn = e.currentTarget;
  const parent = btn.parentElement; //Card
  const imgURL = parent.querySelector('img').getAttribute('src');
  const title = parent .querySelector('#movieTitle').innerText;
  const overview = parent.querySelector ('p').innerText;
  const movieData = {
    imgURL, 
    title, 
    overview,
    id:btn.dataset.movieId
  }
  /* console.log(btn.dataset) */
  console. log("movieData", movieData)

  let movieIsInArray = tempMoviesInFavs.find(oneMovie => oneMovie.id === movieData.id);
    
    if (!movieIsInArray) {
    tempMoviesInFavs.push(movieData) ;
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
    console.log('Se agregó la película');
    
    } else {
    let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id)
    localStorage.setItem('favs', JSON.stringify (moviesLeft));
    console.log('Se eliminó la pelicula');
    }

  }