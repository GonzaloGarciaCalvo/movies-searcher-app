import { Redirect } from 'react-router-dom'
import { customSwalAlert } from '../utilities/toast'
import { useSelector } from 'react-redux'
import ItemDetail from './ItemDetail'
import SpinnerLoading from './SpinnerLoading'
import { useFetch } from './hooks/useFetch'
import { state } from '../types/state.type'
import { RootState } from '../store'
import { useCommonHooks } from './hooks/useCommonHooks'


function ItemDateil() {
  const query = new URLSearchParams(window.location.search)
  const movieId = query.get("movieId")
  const {lang} = useCommonHooks()
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=${lang}`
  const {loading, error, data} = useFetch(URL, lang)
  
  return (
    <>
      {loading && <SpinnerLoading />}
      {/* {!token? <Redirect to="/" />:null} */}
      { data && <ItemDetail movie={data} /> }
    </>
  )
}

export default ItemDateil