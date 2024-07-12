"use client"

import { UserButton, useAuth, useUser } from '@clerk/nextjs'
import React from 'react'

function ProfileUser() {
    const { user } = useUser();
    const imageUrl = user?.imageUrl;
    console.log(imageUrl);

    const loading = (
        <div className="w-9 h-9 rounded-full mb-[5px] bg-slate-200"></div>
    );
  return (
    <div className='flex items-center gap-3'>
        {!user ? (
            loading
        ) : (
            <img
                src={imageUrl}
                alt={`${user.firstName} ${user.lastName}`}
                className='w-9 h-9 rounded-full mb-[5px]'
            />
        )}

        <div className='flex flex-col text-sm'>
            <span className='font-semibold'>
                {user?.firstName} {user?.lastName}
            </span>
            <span className='text-slate-500 text-[11px]'>
                {user?.emailAddresses[0].emailAddress}
            </span>
        </div>
    </div>
  )
}

export default ProfileUser