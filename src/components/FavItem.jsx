import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link} from 'react-router-dom';

function FavItem({movie, addOrRemoveFavs}) {


  return (
    <div className='col-3 p-2 FAVITEM'>
      <Card className=" myCard" >
        {movie.imgURL? 
        <Card.Img variant="top" src={movie.imgURL} /> 
        : 
        <Card.Img variant="top" src={'fallback.jpg'} />
        }
        <Button variant='light' id='favorite-btn' onClick={addOrRemoveFavs} data-movie-id={movie.id}>  
          🖤
        </Button>
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

export default FavItem