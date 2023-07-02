import React from 'react'
import useAutenthication from '../hooks/useAuthentication'
import "./styles/login.css"

const Login = () => {

  const { loginUser } = useAutenthication()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const data = { email, password }
    console.log(data);
    loginUser(data)
  }



  return (
    <div className='login'>

      <h2 className='login_title'>Welcome! Enter your email and password to continue</h2>
      <p className='login_paragraph'>You have to Log In to access to your cart</p>

      <form className='login_form' onSubmit={handleLogin}>
        <div className='login_info-container'>
          <label className='login_label' htmlFor="email">Email</label>
          <input className='login_input' type="email" id='email' />
        </div>
        <div className='login_info-container'>
          <label className='login_label' htmlFor="password">Password</label>
          <input className='login_input' type="password" id="password" />
        </div>
        <button className='login_btn'>Sign In</button>
      </form>
    </div>

  )
}

export default Login