import { useEffect, useState } from 'react'
import { Redirect, useHistory} from 'react-router-dom'
import Item from './Item'
import { customSwalAlert } from '../utilities/toast'
import SpinnerLoading from './SpinnerLoading'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../types/state.type'
import { discoveryList } from '../features/mov'
import { RootState, useAppDispatch } from '../store';
import Searcher from './Searcher'
import { baseUrl } from '../utilities/constants'
import ES from '../utilities/dictionary-Es.json'
import EN from '../utilities/dictionary-En.json'
import { useCommonHooks } from './hooks/useCommonHooks'

function DiscoverList() {

  const [loading, setLoading] = useState(true)
  const {lang, movies, history, dispatch} = useCommonHooks()
  
  useEffect( () => {
    dispatch(discoveryList(lang))
    setLoading(false)    
    history.push({
      pathname: window.location.pathname,
      search: `lang=${lang}`,
    });
    
  }, [lang])
  //console.log("token en discoveliList: ", token)
  //console.log("movies", movies)
  return (
    <>
      {loading && <SpinnerLoading />}
      {/* {!token && <Redirect to="/" />} */}
      <h1 className='title'>{lang === 'es' ? ES.discovery.title : EN.discovery.title}</h1>
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
