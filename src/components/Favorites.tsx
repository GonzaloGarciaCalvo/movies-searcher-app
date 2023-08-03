import Item from './Item'
import { Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { state } from '../types/state.type'
import { RootState } from '../store'

function Favorites() {

  const favoritesRedux = useSelector( (state:RootState) => state.favs.favorites)
  const token = useSelector( (state:RootState) => state.auth.token)

  return (
    <section>
      {!token && <Redirect to={'/'} />}
      <h1 className='m-4'>Favoritos</h1> 
      <div className='d-flex flex-row flex-wrap favoritesBox '>
        {favoritesRedux.length?
          favoritesRedux.map(item => <Item key={item.id} movie={item} />)
          :
          <p className='w-100 fs-3 text-center'>No seleccionaste favoritos</p>
        }
      </div>
    </section>
  )
}

export default Favorites