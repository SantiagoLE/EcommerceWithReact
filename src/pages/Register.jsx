import React from 'react'
import { useForm } from 'react-hook-form'
import useAutenthication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'

const Register = () => {

  const {register, handleSubmit, reset} = useForm()

  const {createNewUser} = useAutenthication()

const submit = data => {
  createNewUser(data)
  reset(defaultRegisterValues)
}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Create a new user</h2>
      <div>
        <label htmlFor="">First Name</label>
        <input {...register("firstName")} type="text" id='firstName' />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName")} type="text" id='lastName' />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" id='email' />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" id='password' />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input {...register("phone")} type="number" id='phone' />
      </div>
      <button>Register</button>
    </form>
  )
}

export default Register