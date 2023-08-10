import React, { useEffect } from 'react'
// New feature
const Categories = () => {
  console.log("EN CATEGORIES")
  const URL = `https://api.themoviedb.org/3/discover/movie?&api_key=${import.meta.env.VITE_API_KEY}&with_genres=12`
  useEffect (() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => console.log("data por cat",data.results))
      .catch( err => console.log( err))
  },[])
  /* const {loading, error, data} = useFetch(URL, '') */
  return (
    <div style={{color:'white'}}>Categories en construccion</div>
  )
}

export default Categories