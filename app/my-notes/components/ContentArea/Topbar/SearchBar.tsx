"use client"

import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useGlobalContext } from '@/ContextApi';

function SearchBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className={` ${darkMode[1].isSelected ? "bg-slate-100" : "bg-slate-100"} relative pl-3 w-[60%] h-[30px] rounded-3xl flex items-center gap-2`}>
      <SearchIcon className='text-primary' sx={{ fontsize: 13 }} />
      <input 
        placeholder='Search a snippet...'
        className={` ${darkMode[1].isSelected ? "bg-slate-100" : "bg-slate-100"} w-[70%] text-sm text-slate-500 outline-none`} 
      />
      <AddSnippetButton />
    </div>
  )

  function AddSnippetButton() {
    return (
      <div 
        className='absolute flex gap-2 px-3 rounded-3xl bg-primary text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none'>
        <div className='font-bold'>+</div>
        <div>Snippet</div>
      </div>
    )
  }
}

export default SearchBar
