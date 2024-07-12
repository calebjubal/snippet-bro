"use client"

import { UserButton, useAuth, useUser } from '@clerk/nextjs'
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ContentArea from './components/ContentArea/ContentArea'

export default function page() {
  return (
    <div className='flex flex-row rounded'>
      <Sidebar />
      <ContentArea />
    </div>
  )
}

