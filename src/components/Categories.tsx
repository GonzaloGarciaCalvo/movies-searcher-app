import { useState } from 'react'
import { Genre } from '../types/genre.type'
import { useFetch } from './hooks/useFetch'
import Item from './Item'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store';
import  Button  from 'react-bootstrap/Button'
import { movieType } from '../types/movie.type'
import { GENRES_URL, MOVIES_BY_GENRE_URL } from '../utilities/constants'
import { moviesByGenreList } from '../features/movByGenre'
import LeftCareft from '../assets/caret-left-fill.svg'
import RightCareft from '../assets/caret-right-fill.svg'
import { useHistory } from 'react-router-dom';

const Categories = () => {

  const params = new URLSearchParams(window.location.search)
  const genreId = Number(params.get('genre'))
  const queryPage = Number(params.get('page')) || 1

  const [loading, setLoading] = useState(true)
  const [genre, setGenre] = useState<number | null >(genreId ?? null)
  /* const token = useSelector( (state:RootState) => state.auth.token) */
  const movies = useSelector( (state:RootState) => state.movByGenre?.movies)
  const dispatch = useAppDispatch()
  
  const [page, setPage] = useState<number>(queryPage)

  const history = useHistory();

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
    dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre+`&page=${page+1}`))
    history.push({
      pathname: window.location.pathname,
      search: `genre=${genre}&page=${page+1}`,
    });
  };
  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1))
    if (page > 1) {
      dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre+`&page=${page-1}`))
      history.push({
        pathname: window.location.pathname,
        search: `genre=${genre}&page=${page-1}`,
      });
    }
  };

  const {loading:genresLoading, error, data} = useFetch(GENRES_URL, '')

  const handleClick = (genre:Genre) => {
    dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre.id+`&page=${page}`))
    setGenre(genre.id)
    /* setPage(1) */
    params.set('category', `${genre.id}`)
    history.push({
      pathname: window.location.pathname,
      search: `genre=${genre.id}&page=${page}`,
    });
  }

  return (
    <>
      <h1 className='title'>Categorías</h1>
      <section className='categories'>
        { data?.genres?.length>0 &&
        data.genres.map((genre:Genre) => (
          <Button 
            key={genre.id} 
            className='categoryElement btn-sm btn-secondary'
            onClick={() => handleClick(genre)}
          >
            {genre.name}
          </Button>
        ))}
      </section>
      <section >
        {movies?.length>0 && (
          <>
            <div className='row listContainer'>
            {movies.map(
              (movie:movieType) => <Item key={movie.id} movie={movie} />
            )}
            </div> 
            <div className='d-flex justify-content-center'>
              <Button className='btn-light btn-sm mb-3 mx-2 d-flex justify-content-center items-center' onClick={prevPage}>
                <img src={LeftCareft} alt="get next movies"  />
              </Button>
              <Button className=' btn-light btn-sm mb-3 mx-2 d-flex justify-content-center items-center' onClick={nextPage}>
                <img src={RightCareft} alt="get previous movies" />
              </Button>
            </div>      
          </>
        )
          }
      </section>
    </>
  )
}

export default Categories