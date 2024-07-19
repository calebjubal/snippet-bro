"use client"

import { useGlobalContext } from '@/ContextApi'
import React from 'react'

function NoteDescription() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext()

  return (
    <div
        className={`${darkMode[1].isSelected ?"text-slate-300" :""} text-slate-600 text-[13px] mt-4 mx-4 `}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem neque autem ad, necessitatibus sapiente blanditiis repellat ab reprehenderit non laboriosam recusandae at rerum soluta ipsum unde, ullam fugit sunt.
    </div>
  )
}

export default NoteDescription
