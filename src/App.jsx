import React from 'react'
import Login from './components/Login'
import DiscoverList from './components/DiscoverList'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDateil from './components/ItemDetailContainer'
import Results from './components/Results'
import Favorites from './components/Favorites'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { useSelector } from 'react-redux';

function App() {

  const favsRedux = useSelector( state => state.favs.favorites)

  return (
    <>
        <Header favQuantity={favsRedux.length} favorites={favsRedux}/>
        <main className="container-fluid">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route 
              exact  path="/favoritos" 
              render={(props) => <Favorites {...props} />}
            />
            <Route
              exact path="/listado"
              render={(props) => <DiscoverList {...props} />}
            />
            <Route path="/movie" component={ItemDateil} />
            <Route
              exact path="/results"
              render={(props) => <Results  {...props} />}
            />
            
          </Switch>
        </main>
        <Footer />
    </>
	);
}

export default App
