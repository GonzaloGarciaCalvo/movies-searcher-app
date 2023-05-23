import React, { useEffect, useState } from 'react'
import {Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SpinnerLoading from './SpinnerLoading'

function ItemDetail({movie}) {
  /* const [error, setError] = useState(false) */
  let baseUrl = `https://image.tmdb.org/t/p/w400/`

  const genresList = movie.genres?.map(item => item.name).join(", ")
  console.log("genresList: ", genresList)
  console.log("movie: ", movie?.success)
  /* useEffect( () => {
    if (!movie?.success) { setError(true)}
    
  }, []) */
  return (
    <>
      {/* {!error?  */}
      <div className=''>
        <img variant="top" src={baseUrl+movie.poster_path} />
        <div>
          <h1 className='py-3'>{movie.title}</h1>
          <h5>{movie.overview}</h5>
          <h6 className='py-3'>Release date: {movie.release_date}</h6>
          <h6>Genres:</h6>
          {genresList}
          <h6>Production:</h6>
          {movie.production_companies?.map( item => <p key={item.id} className='px-5'>{item.name}</p>)}
          <h6>imdb_id:  {movie.imdb_id}</h6>
          <h6>Populatity: {movie.popularity}</h6>
          <Button variant="primary" size='sm' className='p-0'>QQQ
            {/* <Link to={`/movie?movieId=${movie.id}`} className=' fs-6 p-0' >
              Detail { movie.id}
            </Link> */}
          </Button>
          <p style={{fontSize:"24px", color:"yellow"}}>Prueba styles</p>
        </div>
      </div>
      {/* : <SpinnerLoading /> */}
      {/* } */}
    </>
  )
}

export default ItemDetail