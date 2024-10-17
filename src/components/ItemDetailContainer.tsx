
import { customSwalAlert } from '../utilities/toast'
import { useSelector } from 'react-redux'
import ItemDetail from './ItemDetail'
import SpinnerLoading from './SpinnerLoading'
import { useFetch } from './hooks/useFetch'
import { state } from '../types/state.type'
import { RootState } from '../store'
import { useCommonHooks } from './hooks/useCommonHooks'
import {motion} from 'framer-motion'


function ItemDatailContainer() {
  const query = new URLSearchParams(window.location.search)
  const movieId = query.get("movieId")
  const {lang} = useCommonHooks()
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=${lang}`
  const {loading, error, data} = useFetch(URL, lang)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale:0 }} 
      animate={{ opacity: 1, scale:1 }} 
      exit={{ opacity: 0, scale:0 }} 
      transition={{ ease:"easeInOut", duration: 0.8 }}    
    >
      {loading && <SpinnerLoading />}
      {/* {!token? <Redirect to="/" />:null} */}
      { data && <ItemDetail movie={data} /> }
    </motion.div>
  )
}

export default ItemDatailContainer