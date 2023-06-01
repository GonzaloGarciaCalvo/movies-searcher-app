import React, { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { API_KEY } from '../../constants'



function Listado({addOrRemoveFavs, favorites=[]}) {

  const [movies, setMovies] = useState([])
  const [dataToRender, setDataToRender] = useState([])
  //const [loading, setLoading] = useState(true)
  const token = localStorage.moviesSearcherToken

  //console.log("favorites en Listado: ", favorites)

  // useEffect( () => {
  //   console.log("EN useEffect ***********************")
  //   async function getmovies(){
  //     try{
  //       const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  //       const data = await response.json()
  //       const dataMovies = await data.results
  //       /* const responseNormalized = dataMovies.map(item => {...item, item.isFav=false}) */
  //       async function checkAndTransformFavs(){
  //         const favsInLocalStorage = localStorage.getItem('favs')
  //         console.log("favsInLS: ", favsInLocalStorage)
  //         if (favsInLocalStorage === null) {
  //           /* checkAndTransformFavs() */
  //           for(let item of dataMovies) { 
  //               item.isFav=false
  //             }
  //         }
  //         if (favsInLocalStorage !== null) {
  //           console.log("EN CHECKANDTRANSFORMFAV")
  //           console.log("dataMovies.lenght: ", dataMovies.lenght)
  //           for(let item of dataMovies) { 
  //             if (favorites.lenght) console.log("favorites en for")
  //             const checkIfIsInFavs = await favorites.find(fav => fav.id == item.id)// are diferent types
  //             console.log("checkIfIsFavs: ", checkIfIsInFavs)
  //             if (checkIfIsInFavs) {
  //               item.isFav=true
  //             } else {
  //               item.isFav=false
  //               console.log("en ELSE")
  //             }
  //           }
  //         }
  //         setMovies(dataMovies)
  //       }
  //       // en esta parte comparar con los favorites, si esta incuido el item ponerle isFav= true
  //       const favsInLocalStorage = localStorage.getItem('favs')
  //       /* if (favsInLocalStorage !== null) {
  //         checkAndTransformFavs()
  //       } */
  //       const dataPossesed = await checkAndTransformFavs()
        
  //     } catch(error) {
  //       console.log("ERROR: ", error.message)
  //     }
  //   }
  //   getmovies()
    
  // }, [])
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
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
              console.log("item.id: ", item.id)
              const checkIfIsInFavs = await favorites.find(fav => fav.id == item.id)// are diferent types
              if (checkIfIsInFavs) {
                item.isFav=true
              } else {
                item.isFav=false
                console.log("en ELSE")
              }
              console.log("checkIfIsFavs.id: ", checkIfIsInFavs?.id, " ,isFav: ", checkIfIsInFavs?.isFav)
            }
          }
          setDataToRender(moviesCompare) 
        } catch(error) {
          console.log("ERROR: ", error.message)
        }
        // en esta parte comparar con los favorites, si esta incuido el item ponerle isFav= true
      //const favsInLocalStorage = localStorage.getItem('favs') 
    }
    const dataProsesed = addIsFavKeyToData()
  }, [movies])
  dataToRender?.length?  console.log("dataToRender: ", dataToRender):null

  
  
  console.log("movies: ", movies)
  console.log("dataToRender: ",dataToRender)

  
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