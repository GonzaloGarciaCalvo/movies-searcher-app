import Item from './Item'
import SpinnerLoading from './SpinnerLoading'
import { Redirect } from 'react-router'
import { useFetch } from './hooks/useFetch'
import { movieType } from '../types/movie.type'
import { useState,useRef, useEffect } from 'react'
import Searcher from './Searcher'

function Results() {

  const [search, setSearch] = useState<any>('')
  const searchRef = useRef<string>('')
  const query = new URLSearchParams(window.location.search)
  const keyword = query.get('keyword')!
  const URL = `https://api.themoviedb.org/3/search/movie?&api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&language=en-US&query=${keyword}`
  
  useEffect( () => {
    if (searchRef.current !== keyword){
    }
  },[keyword])
  const {loading, error, data} = useFetch(URL, keyword)

  return (
    <>
      <Searcher />
      <section className='d-flex flex-row flex-wrap '>
        {/* {!keyword && <Redirect to={'/listado'} />} */}
        { loading && <SpinnerLoading />}
        {
          data?.results?.length>0? 
            data?.results?.map((item:movieType) => <Item key={item.id} movie={item}  />)
            :
            <div className='results'>
              <h1>No se encontró películas con esa palabra clave</h1>
            </div>
        }
      
      </section>
    
    </>
  )
}

export default Results