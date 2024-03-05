import React, { useId, useState } from 'react'
import LoginHeader from '../../components/LoginHeader'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useUserAccount } from '../../hooks/useUserAccount'
function Login () {
  const emailId = useId()
  const passwordId = useId()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { setUserAccount } = useUserAccount()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user
      setUserAccount(user)
      // if there's a user stored it and redirect to collections
      if (user) {
        localStorage.setItem('userAccount', JSON.stringify(user))
        location.href = '/Collections'
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='p-5'>
      <LoginHeader text='Login' />
      <form onSubmit={handleLogin} className='flex flex-col gap-10'>
        <div className='mt-16 flex flex-col gap-3'>
          <span className='opacity-60 text-white'>Login with google.</span>
          <button className='fa-brands fa-google p-4 bg-secundary/50 border-2 border-secundary rounded-xl'></button>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor={emailId}>Email</label>
          <input
            className='p-4 rounded-xl bg-secundary/50 border-2 border-secundary focus:border-primary outline-none transition-colors duration-300'
            type='email'
            id={emailId}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor={passwordId}>Password</label>
          <input
            className='p-4 rounded-xl bg-secundary/50 border-2 border-secundary focus:border-primary outline-none transition-colors duration-300'
            type='password'
            id={passwordId}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='flex flex-col mt-4 gap-3'>
          <button className='p-4 bg-primary hover:bg-primary/60 rounded-xl font-semibold text-lg'>Login</button>
          <span className='flex gap-2 justify-center text-white'>
            <span className=' opacity-50'>Dont have an account?</span>
            <Link className='hover:underline' to='/SignUp'>Sign Up</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login
