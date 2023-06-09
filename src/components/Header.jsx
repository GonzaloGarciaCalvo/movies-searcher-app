import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Searcher from './Searcher'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut, resetFavs } from './store/actions'

function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const favoritesRedux = useSelector(state => state.favs.favorites)

  const handleLogOut = () => {
    dispatch(userLogOut())
    dispatch(resetFavs())
    history.push("./")
  }
  return (
    <header>
      <nav className='d-flex flex-row justify-content-start align-items-center m-3 position-relative '>
        <ul className='d-flex flex-row justify-content-start m-0'>
          <li className='m-2'>
            <NavLink activeStyle={{pointerEvents: 'none'}} to={'/'}>Home</NavLink>
          </li>
          <li className='m-2'>
            <NavLink activeStyle={{pointerEvents: 'none'}} to={'/listado'}>Listado</NavLink>
          </li>
          <li className='m-2'> 
            <Link to={'/favoritos'} className='d-flex flex-row'>
              Favoritos   
            </Link>
          </li>
        </ul>
            <p className='favsQuantityIndicator ms-0 me-2 my-0'>
              {favoritesRedux.length}
            </p>
        <Searcher  />
        <Button onClick={handleLogOut} className='btn-sm logOutBtn me-5' >Logout</Button>
      </nav>
    </header>
  )
}

export default Header