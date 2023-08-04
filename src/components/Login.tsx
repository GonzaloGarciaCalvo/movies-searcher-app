import swal from 'sweetalert'
import { Redirect} from 'react-router-dom'
import { emailRegEx, passwordRegEx } from '../utilities/constants'
import { useDispatch, useSelector } from 'react-redux';
/* import { userLogin } from '../store/actions' */
import { login } from '../features/auth';
import { Button } from 'react-bootstrap'
import { useEffect } from 'react';
import { state } from '../types/state.type';
import { useAppDispatch } from '../store';

function Login() {
  const token = useSelector( (state:state) => state?.auth?.token)
  const dispatch = useAppDispatch()
  const stateAll = useSelector(state => state)
  console.log("en login")
  console.log("token: ", token)
  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    /* const email = e.target.email.value
    const password = e.target.password.value */
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value 
    const password = target.password.value
    if (!email || !password) {
      swal("ERROR: los campos no pueden estar vacios");
      return
    }
    if(emailRegEx.test(email) && passwordRegEx.test(password)){
      /* dispatch(userLogin(e)) */
      dispatch(login())
    } else {
      swal("error en formato de campos");
    }
  }
  useEffect( () => {
    console.log("token del state en login", token)
  },[token])
  //setTimeout(()=>console.log("token del state en login"),300)
  return (
    <>
      {token && <Redirect to="/listado" />}
      <form onSubmit={onSubmit} className='loginForm'>
        <label className='mt-4' htmlFor='email'>Email</label><input type="text" name='email' className='mt-1'/>
        <br />
        <label className='mt-4'>Password </label><input type="text" name='password' className='mt-1'/>
        <Button type='submit' className='d-block btn-sm mt-4'  >Entrar</Button>
      </form>
    </>
  )
}

export default Login