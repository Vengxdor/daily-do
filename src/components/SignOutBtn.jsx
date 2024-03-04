import React from 'react'
import { useUserAccount } from '../hooks/useUserAccount'

function SignOutBtn () {
  const { userAccount, setUserAccount } = useUserAccount()
  console.log(userAccount)
  return (
    <>
    {userAccount
      ? <button className='p-3 border rounded-xl' onClick={() => setUserAccount(null)}>Sign Out</button>
      : <span className='text-red-400'>No account</span>
    }
    </>
  )
}

export default SignOutBtn
