import React from 'react'
import SpinnerLoading from './SpinnerLoading'

function ItemDetail({movie}) {

  let baseUrl = `https://image.tmdb.org/t/p/w400/`

  const genresList = movie.genres?.map(item => item.name).join(", ")
  const companiesList = movie.production_companies?.map( item => item.name).join(", ")


  return (
    <>
      {/* {!error?  */}
      <div className='d-flex flex-row w-100 justify-content-center px-3'>
        <div className='col-5 d-flex flex-row justify-content-center '>
          { movie.poster_path?
              <img className='detailImg' src={baseUrl+movie.poster_path} />
              :
              <img  className='detailImg' src={'fallback.jpg'} />
          }
        </div>
        <div className='col-7'>
          <h1 className='py-3'>{movie.title}</h1>
          <h6>{movie.overview}</h6>
          <h6 className='my-3'>Release date: <span className='mx-1'>{movie.release_date}</span> </h6>
          <h6 className='my-3'>Genres: <span className='m-1'>{genresList}</span></h6>
          <h6 className='my-3' >Production: <span className="mx-1">{companiesList}</span></h6>
          <h6 className='my-3'>imdb_id:  <span className='mx-1'>{movie.imdb_id}</span></h6>
          <h6 className='my-3'>Populatity: <span className='mx-1'>{movie.popularity}</span></h6>
        </div>
      </div>
      {/* : <SpinnerLoading /> */}
      {/* } */}
    </>
  )
}

export default ItemDetail