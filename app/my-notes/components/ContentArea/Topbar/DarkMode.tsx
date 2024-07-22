"use client";

import React from 'react';
import { useGlobalContext } from '@/ContextApi';

function DarkMode() {
    const { 
        darkModeObject: { darkMode, setDarkMode }, 
    } = useGlobalContext();

    function handleClickedDarkMode(index: number) {
        const updateDarkModeObject = darkMode.map((item, i) => {
            if (i === index) {
                return { ...item, isSelected: true };
            } else {
                return { ...item, isSelected: false };
            }
        });
        setDarkMode(updateDarkModeObject); 
    }

    return (
        <div className='bg-slate-100 h-[40px] w-[80px] rounded-3xl flex items-center gap-2 p-[5px] shadow-md'>
            {darkMode.map((item, index) => {
                return (
                    <div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer select-none transition-colors duration-300 ${item.isSelected ? "bg-primary text-white shadow-lg" : "bg-slate-100 text-primary hover:bg-primary hover:text-white"}`}
                        key={index}
                        onClick={() => handleClickedDarkMode(index)}
                    >
                        {item.icon}
                    </div>
                );
            })}
        </div>
    );
}

export default DarkMode;
