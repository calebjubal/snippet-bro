import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Sidebar from '../components/Sidebar'

export default function page() {
  return (
    <div>
      <UserButton />
      <Sidebar />
    </div>
  )
}
