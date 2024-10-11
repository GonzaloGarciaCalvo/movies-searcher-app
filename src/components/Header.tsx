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


function Header() {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const favoritesRedux = useSelector((state:RootState) => state.favs.favorites)
  const token =  useSelector((state:RootState) => state.auth.token)
  const handleLogOut = () => {
    dispatch(logout())
    dispatch(resetFavs())
    history.push("./")
  }

  type classNameType = {
    isActive:Boolean
  }

  return (
    <header>
      {/* {
        token? */}
        <div className='d-flex flex-row justify-content-between align-items-center' >
        <Navbar expand="lg" className='navbar-dark d-flex flex-row justify-content-between align-items-center m-0  '>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white'}}/>
            <Navbar.Collapse >
              <Nav.Link 
                as={NavLink} 
                to={'/listado'} 
                className={`rounded-2 ${({ isActive }:classNameType ):string => isActive ? "active" : ""} baseLink
                `}
              >
                Listado
              </Nav.Link>     
              <Nav.Link 
                as={NavLink} 
                to={'/categories'} 
                className={` rounded-2${({ isActive }:classNameType ):string => isActive ? "active" : ""} baseLink
                `}
              >
                Categorias
              </Nav.Link>  
              <Nav.Link 
                as={NavLink} 
                to={'/favoritos'} 
                className={`rounded-2 ${({ isActive }:classNameType ):string => isActive ? "active" : ""} baseLink 
                `}
              >
                <div className='d-flex flex-direction-row justify-content-center '>
                Favoritos
                <p className='favsQuantityIndicator ms-1 my-1'>
                  {favoritesRedux.length}
                </p>
              </div>
              </Nav.Link>  
            </Navbar.Collapse>
        </Navbar>
        {/* <Button onClick={handleLogOut} className='btn-sm logOutBtn' >Logout</Button> */}
        </div>
        {/* :
        <p className='text-center fs-4 mt-3'>Debes logearte para acceder a las películas</p>
      } */}
    </header>
  )
}

export default Header