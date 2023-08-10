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

function DiscoverList() {

  const [loading, setLoading] = useState(true)
  const token = useSelector( (state:RootState) => state.auth.token)
  const movies = useSelector( (state:RootState) => state.mov?.movies)
  const dispatch = useAppDispatch()
  
  useEffect( () => {
    dispatch(discoveryList())
    setLoading(false)    
  }, [])
  //console.log("token en discoveliList: ", token)
  //console.log("movies", movies)
  return (
    <>
      {loading && <SpinnerLoading />}
      {!token && <Redirect to="/" />}
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
