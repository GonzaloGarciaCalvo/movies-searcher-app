import Login from './components/Login'
import DiscoverList from './components/DiscoverList'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDateilContainer from './components/ItemDetailContainer'
import Results from './components/Results'
import Favorites from './components/Favorites'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { useSelector } from 'react-redux';
import {state} from './types/state.type'


function App() {

  const favsRedux = useSelector( (state:state) => state.favs?.favorites)

  return (
    <>
        <Header /* favQuantity={favsRedux.length} favorites={favsRedux} *//>
        <main className="container-fluid">
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route 
              exact  path="/favoritos" 
              render={(props) => <Favorites {...props} />}  // but don't have props
            /> */}
            <Route exact  path="/favoritos" component={ Favorites} />
            <Route exact path="/listado" component={DiscoverList} />
            <Route path="/movie" component={ItemDateilContainer} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </main>
        <Footer />
    </>
	);
}

export default App
