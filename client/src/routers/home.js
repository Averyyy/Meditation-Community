import React from 'react'

export default function Home() {

  return (
    <>
        <a className="absolute z-10 w-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:scale-150
        text-4xl antialiased font-bold transition duration-700 ease-in-out hover:scale-150 animate-pulse"
        href="/medi">
          Meditation makes you calm.
       </a>
       <div className="absolute w-100 top-2/3 right-1/2
       transform translate-x-1/2 translate-y-1/2 md:scale-125 z-10">
       <a href="/medi" class="border-2 w-50 border-blue-500 text-white rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
          Go to Meditation Place
        </a>
        </div>

        <div className="h-screen animated absolute z-0 home"></div>

    </>

  )
}
