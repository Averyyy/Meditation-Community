import React from 'react'

export default function Blogblock({username, content}) {
    const userImage = 'https://pic1.zhimg.com/80/v2-bb99dd5f0546798861a6772a7e32fc93_1440w.jpg?source=1940ef5c';
    return (
        <div className='py-2 block space-x-4 space-y-4 border-8 rounded-sm'>
            <div className='flex place-items-center space-x-4'>
                <img className='w-12 rounded-full' src={userImage} alt='user'/>
                <div className='relative text-base font-bold right-0'>{username}</div>
            </div>
            <div className='text-base'>{content}</div>
        </div>
  )
}

