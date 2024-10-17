import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import DiscoverList from './DiscoverList';
import Favorites from './Favorites';
import Results from './Results';
import Categories from './Categories';
import ItemDatailContainer from './ItemDetailContainer';
import App from '../App';


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="/" element={<DiscoverList/>} />
      <Route   path="/favoritos" element={< Favorites />} />
      <Route  path="/listado" element={<DiscoverList/>} />
      <Route path="/movie" element={<ItemDatailContainer/>} />
      <Route  path="/results" element={<Results/>} />
      <Route  path="/categories" element={<Categories/>} /> */}
        <Route index element={<DiscoverList />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="listado" element={<DiscoverList />} />
        <Route path="movie" element={<ItemDatailContainer />} />
        <Route path="results" element={<Results />} />
        <Route path="categories" element={<Categories />} />
      
    </Route>
  )
);

export default Router