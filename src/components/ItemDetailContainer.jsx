import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { customSwalAlert } from '../../utilities/toast'
import { useSelector } from 'react-redux'
import ItemDetail from './ItemDetail'
import SpinnerLoading from './SpinnerLoading'
import { useFetch } from './hooks/useFetch'


function ItemDateil() {
  const token = useSelector( state => state.auth.token)
  const query = new URLSearchParams(window.location.search)
  const movieId = query.get("movieId")
  const [movieDetail, setMovieDetail] = useState(null)
  /* const [loading, setLoading] = useState(true) */

 // images loading is slow, try to catch the img from the DiscoverList
/*   useEffect( () => {
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
  }, []) */

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`
  const {loading, error, data} = useFetch(URL)


  return (
    <>
      {loading && <SpinnerLoading />}
      {!token? <Redirect to="/" />:null}
      {/* { movieDetail && <ItemDetail movie={movieDetail} /> } */}
      { data && <ItemDetail movie={data} /> }
    </>
  )
}

export default ItemDateil