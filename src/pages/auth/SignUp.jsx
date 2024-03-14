import React, { useId, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import LoginHeader from '../../components/LoginHeader'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { useUserAccount } from '../../hooks/useUserAccount'
import { userCollections } from '../../service/dataCollection'
import CreatedDialog from '../../components/CreatedDialog'

function SignUp () {
  const { setUserAccount, isAccountCreated, setAccountCreated } = useUserAccount()
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      )

      const user = userCredentials.user

      // if there's a user stored it and redirect to collections
      if (user) {
        setUserAccount(user)
        setAccountCreated(true)
        setTimeout(() => {
          location.href = '/Collections'
        }, 3000)
      }

      // when the user is created, create a place in the data base
      userCollections(user, name)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div className='w-11/12 m-auto py-5 md:w-8/12 lg:w-6/12 xl:w-4/12'>
        {isAccountCreated && (
          <CreatedDialog>Your account has been created. ✅</CreatedDialog>
        )}
        <LoginHeader text='Sign Up' />
        <form onSubmit={handleSignUp} className='flex flex-col gap-10'>
          <div className='mt-16 flex flex-col gap-3'>
            <button className=' p-4 bg-secundary/50 border-2 border-secundary rounded-xl flex items-center justify-center gap-2 text-lg'>
              <i className='fa-brands fa-google text-xl'></i>
              Create with Google
            </button>
          </div>
          <span className='flex justify-center text-lg text-white text-opacity-70'>
            or
          </span>
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
    </div>
  )
}

export default SignUp
