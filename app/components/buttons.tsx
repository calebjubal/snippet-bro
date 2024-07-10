'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

export default function Buttons() {
  const { userId } = useAuth()

  return (
    <div className='max-sm:w-full'>
      {userId ? (
        <Link href="/my-notes">
          <button
            className={`max-sm:w-full bg-[#FF3366] p-[8px] px-6 text-sm text-white rounded-md`}
          >
            Access To The App
          </button>
        </Link>
      ) : (
        <div className='flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8'>
          <Link href='/sign-in'>
            <button
              className={`max-sm:w-full bg-[#FF3366] p-[8px] px-6 text-sm text-white rounded-md`}
            >
              Sign In
            </button>
          </Link>
          <Link href='/sign-up'>
            <button
              className={`border border-[#FF3366] p-[8px] px-6 text-sm text-[#FF3366] hover:bg-[#ff3366] hover:text-white rounded-md`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}