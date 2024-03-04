import React, { useId, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import LoginHeader from '../../components/LoginHeader'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { useUserAccount } from '../../hooks/useUserAccount'

function SignUp () {
  const { setUserAccount } = useUserAccount()
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password, name)
      .then(userCredentials => {
        if (userCredentials) {
          location.href = '/Collections'
        }
        const user = userCredentials.user
        setUserAccount(user)
        return updateProfile(user, { displayName: name })
      })

      .catch(
        (error) => {
          console.log(error)
        }
      )
  }
  return (
    <div className='p-5'>
      <LoginHeader text='Sign Up' />
      <form onSubmit={handleSignUp} className='flex flex-col gap-10'>
        <div className='mt-16 flex flex-col gap-3'>
          <span className='opacity-60 text-white'>Sign up with google.</span>
          <button className='fa-brands fa-google p-4 bg-secundary/50 border-2 border-secundary rounded-xl'></button>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor={nameId}>Name</label>
          <input
            className='p-4 rounded-xl bg-secundary/50 border-2 border-secundary focus:border-primary outline-none transition-colors duration-300'
            type='text'
            id={nameId}
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor={emailId}>Email</label>
          <input
            className='p-4 rounded-xl bg-secundary/50 border-2 border-secundary focus:border-primary outline-none transition-colors duration-300'
            type='email'
            id={emailId}
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor={passwordId}>Password</label>
          <input
            className='p-4 rounded-xl bg-secundary/50 border-2 border-secundary focus:border-primary outline-none transition-colors duration-300'
            type='password'
            id={passwordId}
            placeholder='Pick a strong password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='flex flex-col mt-4 gap-3'>
          <button
            type='submit'
            className='p-4 bg-primary hover:bg-primary/60 rounded-xl font-semibold text-lg'
          >
            Create account
          </button>
          <span className='flex gap-2 justify-center text-white'>
            <span className=' opacity-50'>Already have an account?</span>
            <Link className='hover:underline' to='/Login'>
              Log In
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SignUp
