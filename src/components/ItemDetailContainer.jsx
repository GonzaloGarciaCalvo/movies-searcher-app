import { Redirect } from 'react-router-dom'
import { customSwalAlert } from '../utilities/toast'
import { useSelector } from 'react-redux'
import ItemDetail from './ItemDetail'
import SpinnerLoading from './SpinnerLoading'
import { useFetch } from './hooks/useFetch'

// This component is not implemented yet, 
function ItemDateil() {
  const token = useSelector( state => state.auth.token)
  const query = new URLSearchParams(window.location.search)
  const movieId = query.get("movieId")
  console.log("!!  IDC")
  console.log("en IDC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`
  const {loading, error, data} = useFetch(URL)


  return (
    <>
      {loading && <SpinnerLoading />}
      {!token? <Redirect to="/" />:null}
      { data && <ItemDetail movie={data} /> }
    </>
  )
}

export default ItemDateil