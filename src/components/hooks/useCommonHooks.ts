import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { useNavigate } from 'react-router'

export function useCommonHooks() {

  const lang = useSelector( (state:RootState) => state.lang.lang)
  const genre = useSelector( (state:RootState) => state.movByGenre?.genre.id)
  const movies = useSelector( (state:RootState) => state.mov?.movies)
  const movByGenre = useSelector( (state:RootState) => state.movByGenre?.movies)
  const favoritesRedux = useSelector((state:RootState) => state.favs.favorites)
  const token =  useSelector((state:RootState) => state.auth.token)
  /* const history = useHistory() */
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    {lang, genre, movies, movByGenre, favoritesRedux, token, navigate, dispatch}
  )
}
