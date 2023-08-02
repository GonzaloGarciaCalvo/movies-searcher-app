import { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscoveryList } from '../store/actions'

function DiscoverList() {

  const [loading, setLoading] = useState(true)
  const token = useSelector( state => state.auth.token)
  const favoritesRedux = useSelector( state => state.favs?.favorites)
  const movies = useSelector( (state) => state.mov?.movies)
  const dispatch = useDispatch()
  
  useEffect( () => {
    dispatch(getDiscoveryList(favoritesRedux))
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
