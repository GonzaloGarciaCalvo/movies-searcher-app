import React, {useState} from 'react'
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addFavs, removeFavs,addRemoveFavs} from "./store/actions"
/* import '../styles.css' */

function Item({movie}) {
  const [isFav, setIsFav] = useState(movie.isFav)
  let baseUrl = `https://image.tmdb.org/t/p/w500/`
  console.log("movie.isFav: ", movie.isFav)

  const dispatch = useDispatch()

  const handleAddFav = (e) => {
    /* setIsFav( val => !val) */
    dispatch(addFavs(e))
    movie.isFav = true
  }
  const handleRemoveFav= (e) => {
    /* setIsFav( val => !val) */
    dispatch(removeFavs(e))
    movie.isFav = false
  }


  return (
    <div className='col-3 p-2'>
      <Card className=" myCard" >
        {movie.poster_path? 
        <Card.Img variant="top" src={baseUrl+movie.poster_path} /> 
        : 
        <Card.Img variant="top" src={'fallback.jpg'} />
        }
        { /* isFav? */movie.isFav?
          <Button variant='light' id='favorite-btn' onClick={handleRemoveFav} data-movie-id={movie.id}>  
          ❤️ 
          </Button> :
          <Button variant='light' id='favorite-btn' onClick={handleAddFav} data-movie-id={movie.id}>  
            🖤  
          </Button>
        } 
        <Card.Body>
          <Card.Title id='movieTitle'>{movie.title}</Card.Title>
          <Card.Text>
            {movie.overview.substring(0,280)}
          </Card.Text>
          <Button variant="primary" size='sm' className='p-0' >
            <Link to={`/movie?movieId=${movie.id}`} className=' fs-6 p-0' >
              Detail { movie.id}
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item