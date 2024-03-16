import React from 'react'
import { useUserAccount } from '../hooks/useUserAccount'
import { useCollection } from '../hooks/useCollection'

function SignOutBtn () {
  const { userData, setUserAccount } = useUserAccount()
  const { setListCollections } = useCollection()
  const handleSignOut = () => {
    // reset user account
    setUserAccount(null)
    localStorage.removeItem('userAccount')
    localStorage.removeItem('userData')
    setListCollections([])
  }
  return (
    <>
    {userData
      ? <button className='p-3 border rounded-xl' onClick={handleSignOut}>Sign Out</button>
      : <span className='text-red-400'>No account</span>
    }
    </>
  )
}

export default SignOutBtn
