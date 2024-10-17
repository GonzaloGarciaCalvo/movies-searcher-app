import Login from './components/Login'
import DiscoverList from './components/DiscoverList'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDateilContainer from './components/ItemDetailContainer'
import Results from './components/Results'
import Favorites from './components/Favorites'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { useSelector } from 'react-redux';
import {state} from './types/state.type'
/* import { useFetch } from './components/hooks/useFetch'
import { useEffect } from 'react' */
import Categories from './components/Categories'
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'


function App() {

  const favsRedux = useSelector( (state:state) => state.favs?.favorites)
  
  return (
    <div className='appContainter'>
        <Header />
        <main className="container-fluid">
          <AnimatePresence>
            {/* <Switch>
              <Route exact path="/" component={DiscoverList} />
              <Route exact  path="/favoritos" component={ Favorites} />
              <Route exact path="/listado" component={DiscoverList} />
              <Route path="/movie" component={ItemDateilContainer} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/categories" component={Categories} />
            </Switch> */}
            <Outlet />
          </AnimatePresence>
        </main>
        <Footer />
    </div>
	);
}

export default App
