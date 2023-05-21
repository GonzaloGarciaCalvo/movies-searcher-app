import React from 'react'
import { useHistory} from 'react-router-dom'
import { Card } from 'react-bootstrap'
/* import Header from './Header'
import Footer from './Footer' */

function Listado() {
  const history = useHistory()
  const token = localStorage.moviesSearcherToken
  
  if (!token) {
    history.push('/')
  }

  return (
    <div>
      <div className='row'>
        <Card>

        </Card>
      </div>
    </div>
  )
}

export default Listado