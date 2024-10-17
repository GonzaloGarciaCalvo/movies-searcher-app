import { useEffect, useState } from 'react'
/* import { Redirect, useHistory} from 'react-router-dom' */
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
import {motion} from 'framer-motion'

function DiscoverList() {

  const [loading, setLoading] = useState(true)
  const {lang, movies, navigate, dispatch} = useCommonHooks()
  
  useEffect( () => {
    dispatch(discoveryList(lang))
    setLoading(false)    
    navigate({
      pathname: window.location.pathname,
      search: `lang=${lang}`,
    });
    
  }, [lang])
  //console.log("token en discoveliList: ", token)
  //console.log("movies", movies)
  return (
    <motion.div 
      initial={{ opacity: 0, scale:0.9 }} 
      animate={{ opacity: 1, scale:1 }} 
      exit={{ opacity: 0, scale:0.9 }} 
      transition={{ ease:"easeInOut", duration: 0.5 }}
      className='d-flex flex-column  justify-content-center align-items-center'
      >
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
    </motion.div>
  )
}

export default DiscoverList
