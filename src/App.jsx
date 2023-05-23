import { useState } from 'react'
import Login from './components/Login'
import Listado from './components/Listado'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDateil from './components/ItemDetailContainer'
import Results from './components/Results'
import { Route, Switch, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
function App() {
  
      
  return (
    <>
      <Header />
      <main className='container-fluid'>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/listado'  component={Listado} />
          <Route path='/movie' component={ItemDateil} />
          <Route path='/results' component={Results} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
