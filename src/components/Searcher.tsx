import  Button  from 'react-bootstrap/Button'
import swal from 'sweetalert'
//import { useHistory } from 'react-router-dom'
import ES from '../utilities/dictionary-Es.json'
import EN from '../utilities/dictionary-En.json'
import { useCommonHooks } from './hooks/useCommonHooks'

function Searcher() {

  const {lang, navigate} = useCommonHooks()
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
      navigate({
        pathname: '/results',
        search: `?keyword=${inputValue}`,
      });
      /* navigate(`/results?keyword=${inputValue}`) */
      currentTarget.search.value= " "
    }
  }

  return (
    <>  
      <form onSubmit={handleSubmit}   className='searcherForm align-items-center mx-2'>
          <input 
            type='text' 
            name="search" 
            placeholder={ lang === "es" ? ES.searcher.placeholder : EN.searcher.placeholder} 
            className='my-0 py-0' />
          <Button className='btn-secondary'  type='submit' size='sm' id='searchButton'>
            { lang === "es" ? ES.searcher.button : EN.searcher.button}
          </Button>
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