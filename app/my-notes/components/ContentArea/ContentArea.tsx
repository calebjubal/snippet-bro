"use client"

import React from 'react'
import ProfileUser from './Topbar/ProfileUser'
import SearchBar from './Topbar/SearchBar'
import DarkMode from './Topbar/DarkMode'
import { useGlobalContext } from '@/ContextApi'

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className={`w-[80%] ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} p-5 border-r`}>
      <TopBar />
    </div>
  )
}

export default ContentArea

function TopBar() {
    const {
      darkModeObject: { darkMode },
    } = useGlobalContext();

    return (
      <div className={`${darkMode[1].isSelected ? "bg-slate-700 text-white" : "bg-slate-100"} rounded-lg flex justify-between items-center p-3 border-r`}>
        <ProfileUser />
        <SearchBar />
        <DarkMode />
      </div>
    )
  }