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
    const loadingUserName = (
        <div className="w-[100px] h-4 font-semibold bg-slate-100"></div>
    );
    const loadingUserEmail = (
        <div className="w-[130px] h-2 text-slate-500 text-[11px] bg-slate-100"></div>
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

        <div className={`flex flex-col text-sm ${!user ? "gap-1" : ""}`}>
            {!user ? (
                loadingUserName
            ) : (
                <span className='font-semibold'>
                    {user?.firstName} {user?.lastName}
                </span>
            )}
            {!user ? (
                loadingUserEmail
            ) : (
                <span className='text-slate-500 text-[11px]'>
                    {user?.emailAddresses[0].emailAddress}
                </span>
            )}
        </div>
    </div>
  )
}

export default ProfileUser
