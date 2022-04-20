import React from 'react'

export default function Home() {

  return (
    <>
        <a className="absolute w-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125
        text-4xl antialiased font-bold transition duration-700 ease-in-out hover:scale-150 "
        href="/medi">
          Meditation makes you calm.
       </a>
       <a href='/medi' className="absolute w-50 top-2/3 right-1/2 
       transform translate-x-1/2 translate-y-1/2 scale-125 animate-pulse hover:scale-175
       font-semibold">Begin!</a>
    </>

  )
}
