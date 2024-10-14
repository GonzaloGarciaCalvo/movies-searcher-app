import Item from './Item'
import { Redirect, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { state } from '../types/state.type'
import { RootState } from '../store'
import ES from '../utilities/dictionary-Es.json'
import EN from '../utilities/dictionary-En.json'
import { useEffect } from 'react'
import { useCommonHooks } from './hooks/useCommonHooks'

function Favorites() {

  const {lang, movies, favoritesRedux, history, dispatch} = useCommonHooks()

  useEffect( () => {
    history.push({
      pathname: window.location.pathname,
      search: `lang=${lang}`,
    });
  }, [lang])

  return (
    <section>
      {/* {!token && <Redirect to={'/'} />} */}
      <h1 className='text-center title'>{lang === 'es' ? ES.favorites.title : EN.favorites.title}</h1> 
      <div className='d-flex flex-row flex-wrap favoritesBox '>
        {favoritesRedux.length?
          favoritesRedux.map(item => <Item key={item.id} movie={item} />)
          :
          <p className='w-100 fs-3 text-center'>{lang === 'es' ? ES.favorites.message : EN.favorites.message}</p>
        }
      </div>
    </section>
  )
}

export default Favorites