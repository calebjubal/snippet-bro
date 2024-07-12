import Logo from '@/app/components/logos'
import QuickLinks from '@/app/components/quick-links'
import React from 'react'
import Langs from '../../../components/funtions'
function Sidebar() {
  return (
    <div className='w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 border-r'>
      <Logo />
      <QuickLinks />
      <Langs />
    </div>
  )
}

export default Sidebar
