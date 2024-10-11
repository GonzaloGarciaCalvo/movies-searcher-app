import { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../types/state.type'
import { discoveryList } from '../features/mov'
import { RootState, useAppDispatch } from '../store';
import Searcher from './Searcher'
import { baseUrl } from '../utilities/constants'

function DiscoverList() {

  const [loading, setLoading] = useState(true)
  const token = useSelector( (state:RootState) => state.auth.token)
  const movies = useSelector( (state:RootState) => state.mov?.movies)
  const dispatch = useAppDispatch()
  
  useEffect( () => {
    dispatch(discoveryList(`${baseUrl}/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`))
    setLoading(false)    
  }, [])
  //console.log("token en discoveliList: ", token)
  //console.log("movies", movies)
  return (
    <>
      {loading && <SpinnerLoading />}
      {/* {!token && <Redirect to="/" />} */}
      <h1 className='title'>Buscador de películas</h1>
      <Searcher />
      <div className='row listContainer'>
        { movies.length>0?
          movies.map(movie => <Item  key={movie.id} movie={movie}/>)
          : null
        }
      </div>
    </>
  )
}

export default DiscoverList
