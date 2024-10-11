import  Button  from 'react-bootstrap/Button'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { state } from '../types/state.type'

function Searcher() {
  const history = useHistory()
  const token =  useSelector((state:state) => state.auth.token)

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    
    const currentTarget = e.currentTarget as typeof e.currentTarget & {
      search: { value: string };
    };
    const inputValue = currentTarget.search.value!.trim()
    if (inputValue.length === 0 ) {
      swal("El campo no puede estar vacio")
      return
    } else if (inputValue.length <= 3) {
      swal("El campo debe tener mas de 3 caracteres")
      return
    } else {
      history.push(`/results?keyword=${inputValue}`)
      currentTarget.search.value= " "
    }
  }

  return (
    <>  
      <form onSubmit={handleSubmit}   className='searcherForm align-items-center mx-2'>
          <input 
            type='text' 
            name="search" 
            placeholder='palabra clave' 
            className='my-0 py-0' />
          <Button className='btn-secondary'  type='submit' size='sm' id='searchButton'>Search</Button>
        </form>
    {/* {
      token?
      <form onSubmit={handleSubmit}   className='d-flex d-row  align-items-center mx-2'>
        <input 
          type='text' 
          name="search" 
          placeholder='palabra clave' 
          className='my-0 py-0' />
        <Button  type='submit' size='sm' id='searchButton'>Search</Button>
      </form>
      :
      null
    } */}
    </>
  )
}

export default Searcher