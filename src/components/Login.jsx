import React from 'react'
import swal from 'sweetalert'
import { useHistory} from 'react-router-dom'
import { Redirect} from 'react-router-dom'
import { emailRegEx, passwordRegEx } from '../../constants'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from './store/actions'
import { Button } from 'react-bootstrap'


function Login() {
  const token = useSelector( state => state.auth.token)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (!email || !password) {
      console.log("ERROR: los campos no pueden estar vacios")
      swal("ERROR: los campos no pueden estar vacios");
      return
    }
    if(emailRegEx.test(email) && passwordRegEx.test(password)){
      dispatch(userLogin(e))
    } else {
      console.log("password check: ",passwordRegEx.test(password))
      console.log("email check: ",emailRegEx.test(email))
      swal("error en formato de campos");
      console.log("ERROR:  error en formato de campos")
    }
  }

  return (
    <>
      {token && <Redirect to="/listado" />}
      <form onSubmit={onSubmit} className='logInForm'>
        <label className='mt-4' htmlFor='email'>Email</label><input type="text" name='email' className='mt-1'/>
        <br />
        <label className='mt-4'>Password </label><input type="text" name='password' className='mt-1'/>
        <Button type='submit' className='d-block btn-sm mt-4'  >Entrar</Button>
      </form>
    </>
  )
}

export default Login