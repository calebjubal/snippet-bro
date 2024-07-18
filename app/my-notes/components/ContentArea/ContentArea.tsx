"use client"

import React from 'react'
import ProfileUser from './Topbar/ProfileUser'
import SearchBar from './Topbar/SearchBar'
import DarkMode from './Topbar/DarkMode'
import { useGlobalContext } from '@/ContextApi'
import SideBarMenuIcon from './Topbar/SideBarMenuIcon'

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className={`w-[100%] ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} p-5 border-r`}>
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
      <div className={`${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"} rounded-lg flex justify-between items-center p-3 border-r`}>
        <ProfileUser />
        <SearchBar />
        <div>
          <DarkMode />
          <SideBarMenuIcon />
        </div>
      </div>
    )
  }