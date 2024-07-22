"use client"

import { useGlobalContext } from '@/ContextApi'
import React from 'react'
import NoteHeader from "@/app/components/note-header"
import NoteDate from "@/app/components/note-date"
import NoteTags from "@/app/components/note-tags"
import CodeBlock from "@/app/components/code-block"
import NoteFooter from "@/app/components/note-footer"
import NoteDescription from "@/app/components/note-description"

function AllNotesSection() {
  return (
    <div className='mt-5 flex flex-wrap gap-4'>
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
    </div>
  )
}

export default AllNotesSection


function SingleNote() {
  const {
      darkModeObject: { darkMode },
      openContentNoteObject: { openContentNote },
  } = useGlobalContext();

  return (
      <div
          className={`${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"} ${openContentNote ? "w-full" : "w-[180px]"} max-sm:w-full rounded-md py-4`}
      >
          <NoteHeader />
          <NoteDate />
          <NoteTags />
          <NoteDescription />
          <CodeBlock language="javascript" />
          <NoteFooter />
      </div>
  )
}
