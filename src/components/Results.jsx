import React,{ useState, useEffect }from 'react'
import { API_KEY } from '../../constants'

function Results() {
  const query = new URLSearchParams(window.location.search)
  const keyword = query.get('keyword')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch((error) =>{
        customSwalAlert()
        console.log("en catch!!!")
        console.log("ERROR: ",error)
      })
      .finally(setLoading(false))
  }, [])
  return (
    <div>Results</div>
  )
}

export default Results