import React from 'react'
import Hero from './components/hero'
import DataObjectIcon from '@mui/icons-material/DataObject'
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import Buttons from './components/buttons';

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <Hero />
    </div>
  )
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 items-center justify-between max-sm:flex-col ">
      <Logo />
      <Buttons />
    </div>
  )
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
        <div className={`bg-[#FF3366] p-[6px] rounded-md`}>
            <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
            <span className={`font-bold text-[#FF3366]`}>Snippet</span>
            <span className='text-white-600'>Bro</span>
        </div>
    </div>
  )
}
