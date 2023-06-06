import React, { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { useDispatch, useSelector } from 'react-redux'


function DiscoverList({/* addOrRemoveFavs *//*, favorites=[] */}) {

  const [movies, setMovies] = useState([])
  const [dataToRender, setDataToRender] = useState([])
  //const [loading, setLoading] = useState(true)
  const token = localStorage.moviesSearcherToken
  //console.log("VITE_API_KEY: ", import.meta.env.VITE_API_KEY)
  const favoritesRedux = useSelector( state => state.favs.favorites)


  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
  useEffect( () => {
    async function getmovies(){
      try{
        const response = await fetch(URL)
        const data = await response.json()
        const dataMovies = await data.results
          setMovies(dataMovies)
        } catch(error) {
        console.log("ERROR: ", error.message)
      }
    }
    const dataMovies = getmovies()
  }, [])
  
  
  useEffect( () => {
    async function addIsFavKeyToData() {
        try{
          const moviesCompare = [...movies]
          if (favoritesRedux === null) {
            for(let item of moviesCompare) { 
                item.isFav=false
              }
          }
          if (favoritesRedux !== null) {
            for(let item of moviesCompare) { 
              const checkIfIsInFavs = await favoritesRedux.find(fav => fav.id == item.id)// are diferent types
              if (checkIfIsInFavs) {
                item.isFav=true
              } else {
                item.isFav=false
              }
            }
          }
          setDataToRender(moviesCompare) 
        } catch(error) {
          console.log("ERROR: ", error.message)
        }
    }
    const dataProsesed = addIsFavKeyToData()
  }, [movies])

  
  return (
    <>
      {/* {loading && <SpinnerLoading />} */}
      {!token && <Redirect to="/" />}
      <div className='row listContainer'>
        { dataToRender?
          dataToRender.map(movie => <Item  key={movie.id} movie={movie}/>)
          : null
        }
      </div>
    </>
  )
}

export default DiscoverList


/* fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
 .then(res => res.json())
 .then(data => setMovies(data.results))
 .catch((error) =>{
   customSwalAlert()
   console.log("ERROR: ",error)
 })
 .finally(setLoading(false)) */