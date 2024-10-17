import swal from 'sweetalert'
import { Navigate} from 'react-router-dom'
import { emailRegEx, passwordRegEx } from '../utilities/constants'
import { useDispatch, useSelector } from 'react-redux';
/* import { userLogin } from '../store/actions' */
import { login } from '../features/auth';
import { Button } from 'react-bootstrap'
import { useEffect } from 'react';
import { state } from '../types/state.type';
import { RootState, useAppDispatch } from '../store';

function Login() {
  const token = useSelector( (state:RootState) => state?.auth?.token)
  const dispatch = useAppDispatch()

  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
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
      dispatch(login())
    } else {
      swal("error en formato de campos");
    }
  }
  useEffect( () => {
    console.log("token del state en login", token)
  },[token])

  return (
    <>
      {token ? <Navigate to="/listado" replace /> : <p>Please log in</p>}
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