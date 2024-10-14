import { Card, Button } from "react-bootstrap";
import { Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addFavs, removeFavs } from "../features/favs";
import { moviePropType, movieType } from "../types/movie.type";
import ES from '../utilities/dictionary-Es.json'
import EN from '../utilities/dictionary-En.json'
import { useCommonHooks } from "./hooks/useCommonHooks";

function Item({movie}:moviePropType) {

  let baseUrl = `https://image.tmdb.org/t/p/w500/`
  const dispatch = useDispatch()
  const {lang, favoritesRedux:favs} = useCommonHooks()

  const handleAddFav = (movie:movieType) => {
    dispatch(addFavs( movie))
  }
  const handleRemoveFav= ( movie:movieType) => {
    dispatch(removeFavs( movie))
  }
  const movieIsFav = favs?.find(item => item.id === movie.id)? true : false

  return (
    <div className='col-12 col-sm-6 col-lg-3 p-2'>
      <Card className=" myCard" >
        {movie.poster_path? 
        <Card.Img variant="top" src={baseUrl+movie.poster_path} className='itemImg'/> 
        : 
        <Card.Img variant="top" src={'fallback.jpg'} className='itemImg'/>
        }
        { movieIsFav?
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
          <div className="d-flex justify-content-center">
            <Button   className='btn-sm btn-secondary goToItemDetailButton ' >
              <Link to={`/movie?movieId=${movie.id}`} className=' fs-6 p-0' >
                {lang === 'es' ? ES.item.button : EN.item.button}
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item