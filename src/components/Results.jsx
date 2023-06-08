import React,{ useState, useEffect }from 'react'
import { API_KEY } from '../../constants'
import Item from './Item'
import SpinnerLoading from './SpinnerLoading'
import { Redirect } from 'react-router'
import { useFetch } from './hooks/useFetch'

function Results() {
  const query = new URLSearchParams(window.location.search)
  const keyword = query.get('keyword')
  /* const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const URL = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&include_adult=true&language=en-US&query=${keyword}`
  useEffect( () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch((error) =>{
        customSwalAlert()
        console.log("ERROR: ",error)
      })
      .finally(setLoading(false))
  }, [keyword]) */

  const URL = `https://api.themoviedb.org/3/search/movie?&api_key=${import.meta.env.VITE_API_KEY}&include_adult=true&language=en-US&query=${keyword}`
  const {loading, error, data} = useFetch(URL, keyword)
    
  console.log("data: ", data) // null
  console.log("loading: ", loading)
  console.log("error: ", error)
  /* console.log("movies:",movies) */
  return (
    <section className='d-flex flex-row flex-wrap'>
      {!keyword && <Redirect to={'/listado'} />}
      { loading && <SpinnerLoading />}
      {/* {
        movies.length>0? 
          movies.map(item => <Item key={item.id} movie={item}  />)
          :
          <h1>No se encontró películas con esa palabra clave</h1>
      } */}
      {
        data?.results.length>0? 
          data?.results.map(item => <Item key={item.id} movie={item}  />)
          :
          <h1>No se encontró películas con esa palabra clave</h1>
      }
    
    </section>
  )
}

export default Results