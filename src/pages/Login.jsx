import React from 'react'
import useAutenthication from '../hooks/useAuthentication'

const Login = () => {

const {loginUser} = useAutenthication()

const handleLogin = (e) => {
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value
const data = {email, password}
console.log(data);
loginUser(data)
}



  return (
    <form onSubmit={handleLogin}>
<div>
  <label htmlFor="email">Email</label>
  <input type="email" id='email' />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input type="password"  id="password" />
  </div>
  <button>Sign in</button>
    </form>
  )
}

export default Login