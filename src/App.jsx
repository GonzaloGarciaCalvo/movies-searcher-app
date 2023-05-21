import { useState } from 'react'
import './styles.css'
import Login from './components/Login'
import Listado from './components/Listado'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Switch, useHistory } from 'react-router-dom'

function App() {
  
  

    
      
  return (
    <>
      <Header />
      <main className='container-fluid'>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/listado'  component={Listado} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
