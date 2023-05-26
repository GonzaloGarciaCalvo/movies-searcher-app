import React, {useState, useEffect} from 'react'
import FavItem from './FavItem'

function Favorites({addOrRemoveFavs, favorites}) {
  
  /* const [favorites, setFavorites] = useState([])
  useEffect( ()=>{
    const favsInLocalStorage = localStorage.getItem('favs')
    if(favsInLocalStorage != null) {
      const favsArr = JSON.parse(favsInLocalStorage)
      setFavorites(favsArr)
    }
  }, []) */
console.log("fAVORITES")

  return (
    <section>
     <h1>Favoritos</h1> 
    <div className='d-flex flex-row flex-wrap '>
      {favorites.length?
        favorites.map(item => <FavItem key={item.id} movie={item}addOrRemoveFavs={addOrRemoveFavs} />)
        :
        null
      }
    </div>
    </section>
  )
}

export default Favorites