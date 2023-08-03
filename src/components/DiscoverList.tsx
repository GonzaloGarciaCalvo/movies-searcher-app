import { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { useDispatch, useSelector } from 'react-redux'
/* import { getDiscoveryList } from '../store/actions' */
import { state } from '../types/state.type'
import { discoveryList } from '../features/mov'
import { useAppDispatch } from '../store';

function DiscoverList() {

  const [loading, setLoading] = useState(true)
  const token = useSelector( (state:state) => state.auth.token)
  const favoritesRedux = useSelector( (state:state) => state.favs?.favorites)
  const movies = useSelector( (state:state) => state.mov?.movies)
  const dispatch = useAppDispatch()
  
  useEffect( () => {
    dispatch(discoveryList())
    setLoading(false)    
  }, [])

  return (
    <>
      {loading && <SpinnerLoading />}
      {!token && <Redirect to="/" />}
      <div className='row listContainer'>
        { movies?
          movies.map(movie => <Item  key={movie.id} movie={movie}/>)
          : null
        }
      </div>
    </>
  )
}

export default DiscoverList
