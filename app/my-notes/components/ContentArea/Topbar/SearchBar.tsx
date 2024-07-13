import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className='relative pl-3 w-[60%] h-[30px] bg-slate-100 rounded-3xl flex items-center gap-2'>
      <SearchIcon className='text-purple-500' sx={{ fontsize: 13 }} />
      <input 
        placeholder='Search a snippet...'
        className='w-[70%] bg-slate-100 text-sm text-slate-500 outline-none' 
      />
      <AddSnippetButton />
    </div>
  )

  function AddSnippetButton() {
    return (
      <div 
        className='absolute flex gap-2 px-3 rounded-3xl bg-purple-600 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none'>
        <div className='font-bold'>+</div>
        <div>Snippet</div>
      </div>
    )
  }
}

export default SearchBar
