import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
/* import '../styles.css' */

function Item({movie}) {

  let baseUrl = `https://image.tmdb.org/t/p/w500/`
  return (
    <div className='col-3 p-2'>
      <Card className=" myCard">
        <Card.Img variant="top" src={baseUrl+movie.poster_path} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.overview}
          </Card.Text>
          <Button variant="primary" size='sm' className='p-0'>
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