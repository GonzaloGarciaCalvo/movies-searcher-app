import { Link, NavLink, useHistory } from 'react-router-dom'
import Searcher from './Searcher'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store'
import { logout } from '../features/auth'
import { resetFavs } from '../features/favs'
import { state } from '../types/state.type'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SelectLang } from './SelectLang'
import ES from '../utilities/dictionary-Es.json'
import EN from '../utilities/dictionary-En.json'
import { useCommonHooks } from './hooks/useCommonHooks'


function Header() {

  const {lang, favoritesRedux} = useCommonHooks()
/*   const handleLogOut = () => {
    dispatch(logout())
    dispatch(resetFavs())
    history.push("./")
  } */

  type classNameType = {
    isActive:Boolean
  }

  return (
    <header className='d-flex flex-row'>
      {/* {
        token? */}
        <div className='d-flex flex-row justify-content-between align-items-center w-100' >
          <Navbar expand="lg" className='navbar-dark d-flex flex-row justify-content-between align-items-center m-0  '>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white'}}/>
              <Navbar.Collapse >
                <Nav.Link 
                  as={NavLink} 
                  to={'/listado'} 
                  className={`rounded-2 ${({ isActive }:classNameType ):string => isActive ? "active" : ""} baseLink
                  `}
                >
                  {lang === 'es' ? ES.navbar.List : EN.navbar.List}
                </Nav.Link>     
                <Nav.Link 
                  as={NavLink} 
                  to={'/categories'} 
                  className={` rounded-2${({ isActive }:classNameType ):string => isActive ? "active" : ""} baseLink
                  `}
                >
                  {lang === 'es' ? ES.navbar.categories : EN.navbar.categories}
                </Nav.Link>  
                <Nav.Link 
                  as={NavLink} 
                  to={'/favoritos'} 
                  className={`rounded-2 ${({ isActive }:classNameType ):string => isActive ? "active" : ""} baseLink 
                  `}
                >
                  <div className='d-flex flex-direction-row justify-content-center align-items-center '>
                  {lang === 'es' ? ES.navbar.favorites : EN.navbar.favorites}
                  <p className='favsQuantityIndicator ms-1 my-1'>
                    {favoritesRedux.length}
                  </p>
                </div>
                </Nav.Link>  
              </Navbar.Collapse>
          </Navbar>
          <SelectLang   />
        {/* <Button onClick={handleLogOut} className='btn-sm logOutBtn' >Logout</Button> */}
        </div>
        {/* :
        <p className='text-center fs-4 mt-3'>Debes logearte para acceder a las películas</p>
      } */}
      
    </header>
  )
}

export default Header