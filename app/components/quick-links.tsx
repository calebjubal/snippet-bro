import BorderAllIcon from '@mui/icons-material/BorderAll'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import React from 'react'

export default function QuickLinks() {
  return (
    <div className='mt-20 text-sm'>
      <div className='text-slate-400 font-bold'>Quick Links</div>
      <ul className='text-slate-400 mt-4 flex flex-col gap-2'>
        <li className='flex gap-1 items-center bg-primary text-white p-[7px] px-2 rounded-md w-[60%]'>
            <BorderAllIcon sx={{ fontSize: 18 }} />
            <span>All Snippets</span>
        </li>

        <li className='flex gap-1 items-center hover:bg-primary hover:text-white p-[7px] px-2 rounded-md w-[60%]'>
            <FavoriteBorderIcon sx={{ fontSize: 18 }} />
            <span>Favorites</span>
        </li>

        <li className='flex gap-1 items-center hover:bg-primary hover:text-white p-[7px] px-2 rounded-md w-[60%]'>
            <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }} />
            <span>Trash</span>
        </li>
      </ul>
    </div>
  )
}
