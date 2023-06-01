import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { useHistory} from 'react-router-dom'
import axios from 'axios'
import { Redirect} from 'react-router-dom'
import { AUTH_KEY, emailRegEx, passwordRegEx } from '../../constants'
import { useDispatch } from 'react-redux';
import { userLogin } from './store/actions'


function Login() {
  //const [isLogged, setIsLoged] = useState(false)
  const history = useHistory()
  const token = localStorage.moviesSearcherToken
  //const dispatch = useDispatch()


  const checkUser = (e) => {
    fetch("https://api.themoviedb.org/3/authentication/token/new", {
      headers:{
        Authorization: AUTH_KEY,
        accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const token = data.request_token
      localStorage.setItem("moviesSearcherToken", token)
    })
    .catch(error => console.log("ERROR: ", error.message))
    .finally(() =>history.push('/listado'))

    ////////// CON LA API DE ALKEMY ////////////
    /* const datosLogin = {
      email:"challenge@alkemy.org",
      password:"react"
    }
    console.log("JSON.stringify(datosLogin): ", JSON.stringify(datosLogin))
    fetch("http://challenge-react.alkemy.org/", {
        method:"POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(datosLogin),
    })
    .then(response => response.json())
    .then(data=> console.log(data))
    .catch(error=> console.log(error.message))  */
  
  }


  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    /* if (!email || !password) {
      console.log("ERROR: los campos no pueden estar vacios")
      swal("ERROR: los campos no pueden estar vacios");
      return
    }
    if(emailRegEx.test(email) && passwordRegEx.test(password)){
      checkUser(e)
    } else {
      console.log("password check: ",passwordRegEx.test(password))
      console.log("email check: ",emailRegEx.test(email))
      swal("error en formato de campos");
      console.log("ERROR:  error en formato de campos")
    } */
    checkUser()
  }

  return (
    <>
      {token && <Redirect to="/listado" />}
      <form onSubmit={onSubmit} action="">
        <label htmlFor="">Email <input type="text" name='email' /></label>
        <br />
        <label htmlFor="">Password <input type="text" name='password' /></label>
        <button type='submit'  >Entrar</button>
      </form>
    </>
  )
}

export default Login