import React, {useEffect, useState} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import { customSwalAlert } from '../../utilities/toast'
import Item from './Item'
import ItemDetail from './ItemDetail'
import SpinnerLoading from './SpinnerLoading'
import { API_KEY } from '../../constants'


function ItemDateil() {

  const token = localStorage.moviesSearcherToken
  const query = new URLSearchParams(window.location.search)
  const movieId = query.get("movieId")
  const [movieDetail, setMovieDetail] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect( () => {
    const controller = new AbortController()
    const {signal} = controller
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`, {signal})
      .then(res => res.json())
      .then(data => setMovieDetail(data))
      .catch((error) =>{
        if (error.name !== 'AbortError') {
          console.error(error.message)
          customSwalAlert() 
        }
      })
      .finally(setLoading(false))
    return () => controller.abort()
  }, [])

  if (movieDetail) {console.log("movieDetail: ", movieDetail)}
  

  return (
    <>
      {/* {loading && <SpinnerLoading />} */}
      {/* {!token && <Redirect to="/" />} */}
      {!token? <Redirect to="/" />:null}
      <div>
        ItemDateil
      </div>
      { movieDetail && <ItemDetail movie={movieDetail} /> }
    </>
  )
}

export default ItemDateil