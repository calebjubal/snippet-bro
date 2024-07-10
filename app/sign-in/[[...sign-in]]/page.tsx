"use client";

import { SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const SignInPage = () => {
  return (
    <div className={`w-full h-screen flex justify-center items-center`}>
      <SignIn />
    </div>
  )
}

export default SignInPage