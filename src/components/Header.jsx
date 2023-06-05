import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Searcher from './Searcher'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userLogOut } from './store/actions'

function Header({favQuantity, favorites}) {
  //Headet necesita recibir a favarotes para 
  console.log("favorites: ", favorites)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogOut = () => {
    dispatch(userLogOut())
    history.push("./")
  }
  return (
    <header>
      <nav className='d-flex flex-row justify-content-start'>
        <ul className='d-flex flex-row justify-content-start m-3'>
          <li className='m-2'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='m-2'>
            <NavLink activeStyle={{pointerEvents: 'none'}} to={'/listado'}>Listado</NavLink>
          </li>
          <li className='m-2'> 
            <Link to={'/favoritos'}>Favoritos !!</Link>
          </li>
        </ul>
        <Searcher />
        <p className='m-2'>Favoritos: {favQuantity}</p>
        <p className='m-2'>Favs length: {favorites.length}</p>
        <Button onClick={handleLogOut} size='sm' >Logout</Button>
      </nav>
    </header>
  )
}

export default Header