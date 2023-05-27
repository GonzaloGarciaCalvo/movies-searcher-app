import React, { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { API_KEY } from '../../constants'


function Listado({addOrRemoveFavs, favorites}) {

  const [movies, setMovies] = useState([])
  //const [loading, setLoading] = useState(true)
  const token = localStorage.moviesSearcherToken

  console.log("favorites en Listado: ", favorites)
  useEffect( () => {
    async function getmovies(){
       /* fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch((error) =>{
          customSwalAlert()
          console.log("ERROR: ",error)
        })
        .finally(setLoading(false)) */
        try{
          const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
          const data = await response.json()
          const dataMovies = await data.results
          /* const responseNormalized = dataMovies.map(item => {...item, item.isFav=false}) */
          async function checkAndTransformFavs(){
            console.log("EN CHECKANDTRANSFORMFAV")
            console.log("dataMovies.lenght: ", dataMovies.lenght)
            for(let item of dataMovies) { 
              if (favorites.lenght) console.log("favorites en for")
              const checkIfIsInFavs = await favorites.find(fav => fav.id == item.id)// are diferent types
              // cuando se recarga la pagina desde reload del browser falla
              //console.log("item.id: ", item.id)
              console.log("checkIfIsFavs: ", checkIfIsInFavs)
              if (checkIfIsInFavs) {
                item.isFav=true
              } else {
                item.isFav=false
                }
            }
          }
          // en esta parte comparar con los favorites, si esta incuido el item ponerle isFav= true
          const favsInLocalStorage = localStorage.getItem('favs')
          if (favsInLocalStorage !== null) {
            await checkAndTransformFavs()
          }
          setMovies(dataMovies)
          

        } catch(error) {
          console.log("ERROR: ", error.message)
        }
    }
    getmovies()
  }, [])

  console.log("movies: ", movies)

  return (
    <>
      {/* {loading && <SpinnerLoading />} */}
      {!token && <Redirect to="/" />}
      <div className='row listContainer'>
        { 
          movies.map(movie => <Item  key={movie.id} movie={movie} addOrRemoveFavs={addOrRemoveFavs}/>)
        }
      </div>
    </>
  )
}

export default Listado