"use client"

import React from 'react'
import ProfileUser from './Topbar/ProfileUser'
import SearchBar from './Topbar/SearchBar'
import DarkMode from './Topbar/DarkMode'

function ContentArea() {
  return (
    <div className='w-[80%] bg-slate-100 p-5'>
      <TopBar />
    </div>
  )
}

export default ContentArea

function TopBar() {
    return (
      <div className=' rounded-lg flex justify-between items-center bg-white p-3'>
        <ProfileUser />
        <SearchBar />
        <DarkMode />
      </div>
    )
  }