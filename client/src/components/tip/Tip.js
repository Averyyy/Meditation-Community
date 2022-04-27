import React from 'react'

export default function Tip({setTip, setMedi}) {
    function handleClick(e){
        e.preventDefault();
        setTip(false);
        setMedi(true);
    }
  return (
      <>
<aside className="profile-card">
  <header>
    {/* <a target="_blank" href="#"> */}
      {/* <img src="http://lorempixel.com/150/150/people/" class="hoverZoomLink"> */}
    {/* </a> */}
    <h1>
            Tips
    </h1>
    <h2 className='text-xl font-semibold'>          
          A tip for Meditation Places
    </h2>
  </header>

  <div className="profile-bio">
    <p>
      There will be instruction on the screen to tell you inhale or exhale.
        <br/>
        Once you moved the mouse, the session of this meditation will end automatically.
        <br/>
        You will be able to see your score on the screen. Also, you can check your score with other users by clicking Scoreboard!
    </p>
    <div className="absolute w-100 right-1/2 bottom-8
       transform translate-x-3/4 translate-y-1/2 md:scale-150 z-10" onClick={handleClick}>
       <div className=" scale-75 border-2 w-50 border-blue-500 text-blue rounded-full font-bold px-2 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
       <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 stroke-current text-blue stroke-2" viewBox="0 0 24 24" fill="none" ><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
    </div>
  </div>


</aside>

     </>
  )
}
