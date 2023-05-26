import React, { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { API_KEY } from '../../constants'

/* import Header from './Header'
import Footer from './Footer' */

function Listado({addOrRemoveFavs}) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  /* const history = useHistory() */
  const token = localStorage.moviesSearcherToken
 /*  if (!token) {
    history.push('/')
  } */
  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch((error) =>{
        customSwalAlert()
        console.log("ERROR: ",error)
      })
      .finally(setLoading(false))
  }, [])
  /* if (movies.length > 0) {
    console.log("movies: ", movies)
    console.log("movie[0]: ", movies[0].title)
  } */
  return (
    <>
      {/* {loading && <SpinnerLoading />} */}
      {!token && <Redirect to="/" />}
        <div className='row listContainer'>
         {/*  {
            movies && movies.map(item => <Card movie={item} /> ) 
          } */}
          { 
            movies.map(movie => <Item  key={movie.id} movie={movie} addOrRemoveFavs={addOrRemoveFavs}/>)
          }
        </div>
    </>
  )
}

export default Listado