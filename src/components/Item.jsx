import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
/* import '../styles.css' */

function Item({movie, addOrRemoveFavs}) {

  let baseUrl = `https://image.tmdb.org/t/p/w500/`


  return (
    <div className='col-3 p-2'>
      <Card className=" myCard" >
        {movie.poster_path? 
        <Card.Img variant="top" src={baseUrl+movie.poster_path} /> 
        : 
        <Card.Img variant="top" src={'fallback.jpg'} />
        }
        <Button variant='light' id='favorite-btn' onClick={addOrRemoveFavs} data-movie-id={movie.id}>  
          🖤
          {/* <image src='blackheart.png' alt="no cargo image" />  */}   
        </Button>
        {/* <Card.Img variant="top" src={baseUrl+movie.poster_path} />❤️ */}
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