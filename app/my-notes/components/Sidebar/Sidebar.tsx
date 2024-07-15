"use client"

import Logo from '@/app/components/logos'
import QuickLinks from '@/app/components/quick-links'
import React from 'react'
import Langs from '../../../components/funtions'
import { useGlobalContext } from '@/ContextApi'
function Sidebar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div 
      className={`w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 ${darkMode[1].isSelected ? "bg-slate-800" : "bg-white"}`}
    >
      <Logo />
      <QuickLinks />
      <Langs />
    </div>
  )
}

export default Sidebar
