"use client"

import React from 'react'
import ProfileUser from './Topbar/ProfileUser'
import SearchBar from './Topbar/SearchBar'
import DarkMode from './Topbar/DarkMode'
import { useGlobalContext } from '@/ContextApi'
import SideBarMenuIcon from './Topbar/SideBarMenuIcon'
import SwiperSelection from './NotesArea/SwipperSection'
import AllNotesSection from './NotesArea/AllNotesSection'
import ContentNote from '../ContentNote/ContentNote'

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className={`w-[100%] ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} p-5 border-r`}>
      <TopBar />
      <NotesArea />
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
      <div className='flex gap-4 items-center'>
        <DarkMode />
        <SideBarMenuIcon />
      </div>
    </div>
  )
}

function NotesArea() {
  const {
    openContentNoteObject: { openContentNote }
  } = useGlobalContext();

  return (
    <div className="flex gap-2 mt-5  border">
      <div className={`${openContentNote ? "w-[50%]" : "w-full"}`}>
        <SwiperSelection />
        <AllNotesSection />        
      </div>
      <ContentNote />
    </div>
  )
}

