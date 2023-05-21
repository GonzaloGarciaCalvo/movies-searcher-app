import React, { useState } from 'react'
import swal from 'sweetalert';
import { useHistory} from 'react-router-dom'
import axios from 'axios'
import Header from './Header';


function Login() {
  //const [isLogged, setIsLoged] = useState(false)
  const emailRegEx = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm) ;
  const passwordRegEx = new RegExp( /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
  const history = useHistory()
  const checkUser = (email,password) => {

    axios.get("https://api.themoviedb.org/3/authentication/token/new", {
      headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwNjE0ODQzNjA0MTQ0YTFhNGY0MmZiOTk2ZGZlMiIsInN1YiI6IjY0NjdkYWUxZDE4NTcyMDBlNWEzOGY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCUXd8GVHXLUcQW4JzgK8WVFhI1e15XiVyrN1fAi75k',
        accept: 'application/json'
      }
    })
      /* .then(response => response.json()) */
      /* .then(data => console.log(data)) */
      .then(response => {
        const token = response.data.request_token
        localStorage.setItem("moviesSearcherToken",token)
        
      })
      .catch(error => console.log("ERROR: ", error))
      .finally(() =>history.push('/listado'))
      console.log("LS: ", localStorage?.moviesSearcherToken)
    /* fetch("https://api.themoviedb.org/3/authentication/token/new", {
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwNjE0ODQzNjA0MTQ0YTFhNGY0MmZiOTk2ZGZlMiIsInN1YiI6IjY0NjdkYWUxZDE4NTcyMDBlNWEzOGY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCUXd8GVHXLUcQW4JzgK8WVFhI1e15XiVyrN1fAi75k',
      accept: 'application/json'
    },
    body:{
      email,
      password
    }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("ERROR: ", error)) */
  }

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
      checkUser(email,password)
    } else {
      console.log("password check: ",passwordRegEx.test(password))
      console.log("email check: ",emailRegEx.test(email))
      swal("error en formato de campos");
      console.log("ERROR:  error en formato de campos")
    }
  }




  return (
    <>
      {/* <Header /> */}
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