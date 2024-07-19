import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import React from 'react'

function NoteHeader() {
  return (
    <div className='flex justify-between mx-4'>
      <span className='font-bold text-lg w-[87%]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nobis obcaecati! 
      </span>

      <FavoriteBorderOutlinedIcon className='text-slate-400 cursor-pointer'/>
    </div>
  )
}

export default NoteHeader
