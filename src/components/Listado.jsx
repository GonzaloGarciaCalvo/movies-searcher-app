import React, { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { useDispatch } from 'react-redux'

//import { API_KEY } from '../../constants'
//import.meta.env.VITE_API_KEY



function Listado({addOrRemoveFavs, favorites=[]}) {

  const [movies, setMovies] = useState([])
  const [dataToRender, setDataToRender] = useState([])
  //const [loading, setLoading] = useState(true)
  const token = localStorage.moviesSearcherToken
  //console.log("VITE_API_KEY: ", import.meta.env.VITE_API_KEY)

  //Prueba de poner el reducer
const dispatch = useDispatch()

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
          const favsInLocalStorage = localStorage.getItem('favs')
          if (favsInLocalStorage === null) {
            for(let item of moviesCompare) { 
                item.isFav=false
              }
          }
          if (favsInLocalStorage !== null) {
            for(let item of moviesCompare) { 
              //console.log("item.id: ", item.id)
              const checkIfIsInFavs = await favorites.find(fav => fav.id == item.id)// are diferent types
              if (checkIfIsInFavs) {
                item.isFav=true
              } else {
                item.isFav=false
                //console.log("en ELSE")
              }
              //console.log("checkIfIsFavs.id: ", checkIfIsInFavs?.id, " ,isFav: ", checkIfIsInFavs?.isFav)
            }
          }
          setDataToRender(moviesCompare) 
        } catch(error) {
          console.log("ERROR: ", error.message)
        }
    }
    const dataProsesed = addIsFavKeyToData()
  }, [movies])
  dataToRender?.length?  console.log("dataToRender: ", dataToRender):null

  
  
/*   console.log("movies: ", movies)
  console.log("dataToRender: ",dataToRender) */

  
  return (
    <>
      {/* {loading && <SpinnerLoading />} */}
      {!token && <Redirect to="/" />}
      <div className='row listContainer'>
        { dataToRender?
          dataToRender.map(movie => <Item  key={movie.id} movie={movie} addOrRemoveFavs={addOrRemoveFavs}/>)
          : null
        }
      </div>
    </>
  )
}

export default Listado


/* fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
 .then(res => res.json())
 .then(data => setMovies(data.results))
 .catch((error) =>{
   customSwalAlert()
   console.log("ERROR: ",error)
 })
 .finally(setLoading(false)) */