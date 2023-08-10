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
  return (
    <header>
      {
        token?
        <div className='d-flex flex-row justify-content-between align-items-center' >
        <Navbar expand="lg" className='navbar-dark d-flex flex-row justify-content-between align-items-center m-3  '>
          {/* <Container fluid> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white'}}/>
            <Navbar.Collapse /* className='d-flex flex-column flex-lg-row justify-content-center align-items-center' */>
              <Nav.Link as={NavLink} className='m-2' /* activeStyle={{pointerEvents: 'none'}} */ to={'/'}>Home</Nav.Link>
              <Nav.Link as={NavLink} /* activeStyle={{pointerEvents: 'none'}} */ to={'/listado'} className='m-2'>Listado</Nav.Link>        
              <Nav.Link as={NavLink} to={'/categories'} className=' m-2'>
                Categorias
              </Nav.Link>    
              <Nav.Link as={NavLink}  to={'/favoritos'} className='m-2 d-flex flex-row flex-align-center'>
                Favoritos
                <p className='favsQuantityIndicator m-1'>
                  {favoritesRedux.length}
                </p>
              </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        <Button onClick={handleLogOut} className='btn-sm logOutBtn' >Logout</Button>
        </div>
        :
        <p className='text-center fs-4 mt-3'>Debes logearte para acceder a las películas</p>
      }
    </header>
  )
}

export default Header