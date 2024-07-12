'use client'

import React from 'react'
import { useGlobalContext } from '@/ContextApi'

export default function QuickLinks() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useGlobalContext();

  console.log(sideBarMenu);

  function clickedMenu(index: number) {
    const updatedSideBarMenu = sideBarMenu.map((menu, i) => {
      if (i === index) {
        return { ...menu, isSelected: true };
      } else {
        return { ...menu, isSelected: false };
      }
    });

    setSideBarMenu(updatedSideBarMenu);
  }

  return (
    <div className='mt-20 text-sm'>
      <div className='text-slate-400 font-bold'>Quick Links</div>
      <ul className='text-slate-400 mt-4 flex flex-col gap-2'>
        {sideBarMenu.map((menu, index) => (
          <li
            key={index}
            onClick={() => clickedMenu(index)}
            className={`flex items-center gap-1 ${menu.isSelected ? "bg-primary text-white" : "text-slate-400 hover:bg-primary hover:text-white"} p-[7px] px-2 rounded-md cursor-pointer select-none`}
          >
            {menu.icons}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
