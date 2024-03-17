import React from 'react'
import { useUserAccount } from '../hooks/useUserAccount'
import SignOutModal from './SignOutModal'

function SignOutBtn () {
  const { userData } = useUserAccount()
  return (
    <>
    {userData
      ? <SignOutModal />
      : <span className='text-red-400'>No account</span>
    }
    </>
  )
}

export default SignOutBtn
