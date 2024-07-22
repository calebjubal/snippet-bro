import React, { useRef, useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import GlobalContextProvider, { useGlobalContext } from '@/ContextApi';

export default function SwiperSelection() {
    const {
        darkModeObject: { darkMode },
    } = useGlobalContext();
    return (
    <div 
        className={`${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"} p-3 rounded-lg flex gap-5`}
    >
        <div className='overflow-x-auto w-[1112px] '>
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-primary p-1 rounded-md text-white w-20'>
                    All
                </SwiperSlide>
                <SwiperSlide className='text-slate-400'>javascript exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
                <SwiperSlide className='text-slate-400'>react exercises</SwiperSlide>
            </Swiper>
        </div>
        <button className='bg-primary p-1 rounded-md px-3 flex gap-1 items-center text-white'>
            <AddOutlinedIcon sx={{ fontSize: 18 }} />
            <span>Tag</span>
        </button>
    </div>
  );
}