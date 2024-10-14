import { useEffect, useState } from 'react'
import { Genre } from '../types/genre.type'
import { useFetch } from './hooks/useFetch'
import Item from './Item'
import  Button  from 'react-bootstrap/Button'
import { movieType } from '../types/movie.type'
import { GENRES_URL, MOVIES_BY_GENRE_URL } from '../utilities/constants'
import { moviesByGenreList, setGlobalGenre } from '../features/movByGenre'
import LeftCareft from '../assets/caret-left-fill.svg'
import RightCareft from '../assets/caret-right-fill.svg'
import ES from '../utilities/dictionary-Es.json'
import EN from '../utilities/dictionary-En.json'
import { useCommonHooks } from './hooks/useCommonHooks'

const Categories = () => {

  const params = new URLSearchParams(window.location.search)
  const genreId = Number(params.get('genre'))
  const queryPage = Number(params.get('page')) || 1
  const {lang, genre, movByGenre, history, dispatch} = useCommonHooks()
  console.log("lang en Categories: ", lang)
  console.log("genre: ", genre)
  console.log("movByGenre: ", movByGenre)

  const [loading, setLoading] = useState(true)
  /* const [genre, setGenre] = useState<number | null >(genreId ?? null) */
  const [page, setPage] = useState<number>(queryPage)

  useEffect(() => {
    if (genre) {
      dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre+`&language=${lang}&page=${page}`))
      history.push({
        pathname: window.location.pathname,
        search: `lang=${lang}&genre=${genre}&page=${page}`,
      });
    } 
    if (genreId && !genre) {
      dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre+`&language=${lang}&page=${page}`))
      dispatch(setGlobalGenre(genreId))
      history.push({
        pathname: window.location.pathname,
        search: `lang=${lang}&genre=${genre}&page=${page}`,
      });
    } 

  },[lang, genre])

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
    dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre+`&language=${lang}&page=${page+1}`))
    history.push({
      pathname: window.location.pathname,
      search: `lang=${lang}&genre=${genre}&page=${page+1}`,
    });
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1))
    if (page > 1) {
      dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre+`&language=${lang}&page=${page-1}`))
      history.push({
        pathname: window.location.pathname,
        search: `lang=${lang}&genre=${genre}&page=${page-1}`,
      });
    }
  };

  const {loading:genresLoading, error, data} = useFetch(GENRES_URL+`&language=${lang}`, lang)

  const handleClick = (genre:Genre) => {
    dispatch(moviesByGenreList(MOVIES_BY_GENRE_URL+genre.id+`&language=${lang}&page=${page}`))
    dispatch(setGlobalGenre(genre))
    /* setGenre(genre.id) */
    params.set('category', `${genre.id}`)
    history.push({
      pathname: window.location.pathname,
      search: `lang=${lang}&genre=${genre.id}&page=${page}`,
    });
  }

  return (
    <>
      <h1 className='title'>{lang === 'es' ? ES.categories.title : EN.categories.title}</h1>
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
        {movByGenre?.length>0 && (
          <>
            <div className='row listContainer'>
            {movByGenre.map(
              (movie:movieType) => <Item key={movie.id} movie={movie} />
            )}
            </div> 
            <div className='d-flex justify-content-center'>
              <Button className='btn-light btn-sm mb-3 mx-2 d-flex justify-content-center items-center' onClick={prevPage}>
                <img src={LeftCareft} alt="get next movByGenre"  />
              </Button>
              <Button className=' btn-light btn-sm mb-3 mx-2 d-flex justify-content-center items-center' onClick={nextPage}>
                <img src={RightCareft} alt="get previous movByGenre" />
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