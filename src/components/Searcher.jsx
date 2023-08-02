import  Button  from 'react-bootstrap/Button'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

function Searcher() {
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.currentTarget.search.value.trim()
    if (inputValue.length === 0 ) {
      swal("El campo no puede estar vacio")
      return
    } else if (inputValue.length <= 3) {
      swal("El campo debe tener mas de 3 caracteres")
      return
    } else{
      history.push(`/results?keyword=${inputValue}`)
      e.currentTarget.search.value= " "
    }
  }

  return (
    <form onSubmit={handleSubmit} className='d-flex d-row  align-items-center mx-2'>
      <input type='text' name="search" placeholder='palabra clave' className='my-0 py-0' />
      <Button  type='submit' size='sm' id='searchButton'>Search</Button>
    </form>
  )
}

export default Searcher