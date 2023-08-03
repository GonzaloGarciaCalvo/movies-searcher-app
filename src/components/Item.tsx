import { Card, Button } from "react-bootstrap";
import { Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { addFavs, removeFavs } from "../features/favs";
import { moviePropType, movieType } from "../types/movie.type";
import { state } from "../types/state.type";


function Item({movie}:moviePropType) {

  let baseUrl = `https://image.tmdb.org/t/p/w500/`
  const dispatch = useDispatch()

  const handleAddFav = (movie:movieType) => {
    dispatch(addFavs( movie))
  }
  const handleRemoveFav= ( movie:movieType) => {
    dispatch(removeFavs( movie))
  }
  const favs = useSelector( (state:state) => state.favs.favorites)

  const movieIsFav = favs?.find(item => item.id === movie.id)? true : false

  return (
    <div className='col-3 p-2'>
      <Card className=" myCard" >
        {movie.poster_path? 
        <Card.Img variant="top" src={baseUrl+movie.poster_path} className='itemImg'/> 
        : 
        <Card.Img variant="top" src={'fallback.jpg'} className='itemImg'/>
        }
        { /* movie.isFav? */movieIsFav?
          <Button variant='light' id='favorite-btn' onClick={(e)=>handleRemoveFav( movie)} data-movie-id={movie.id}>  
          ❤️ 
          </Button> :
          <Button variant='light' id='favorite-btn' onClick={(e)=>handleAddFav(movie)} data-movie-id={movie.id}>  
            🖤  
          </Button>
        } 
        <Card.Body className='position-relative'>
          <Card.Title id='movieTitle'>{movie.title}</Card.Title>
          <Card.Text>
            {movie.overview.substring(0,270)}
          </Card.Text>
          <Button variant="primary btn-sm"  className='btn-sm goToItemDetailButton' >
            <Link to={`/movie?movieId=${movie.id}`} className=' fs-6 p-0' >
              Detail
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item