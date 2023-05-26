import React from 'react'
import { Link } from 'react-router-dom'
import Searcher from './Searcher'

function Header({favQuantity}) {
  return (
    <header>
      <nav className='d-flex flex-row justify-content-start'>
        <ul className='d-flex flex-row justify-content-start m-3'>
          <li className='m-2'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='m-2'>
            <Link to={'/listado'}>Listado</Link>
          </li>
          <li className='m-2'> 
            <Link to={'/favoritos'}>Favoritos</Link>
          </li>
        </ul>
        <Searcher />
        <p className='m-2'>Favoritos: {favQuantity}</p>
      </nav>
    </header>
  )
}

export default Header