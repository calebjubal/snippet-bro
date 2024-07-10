
import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className={`w-full h-screen flex justify-center items-center`}>
      <SignUp />
    </div>
  )
}

export default SignUpPage

