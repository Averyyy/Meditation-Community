import React from 'react'
import axios from 'axios';


export default function Medi({ environment }) {
  // const [MousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [medi, setMedi] = React.useState(true);
  const [inhale, setInhale] = React.useState(true);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
      const timer = setTimeout(() => setInhale(!inhale), 4500);
      return () => clearTimeout(timer);
  }, [inhale]);
  React.useEffect(() => {
    if(medi){
    const timer = setTimeout(() => setScore(score+0.1), 100);
    return () => clearTimeout(timer);
    }
}, [score]);

  function handleMove(event) {
    if (medi) {
      setMedi(false);
      axios.post(environment+'/api/scores', {
        username: localStorage.getItem('username'),
        duration: Math.round(score*100)/100,
      }).then(res => {
        console.log(res.data);
      });
    }
  }
  return (
    <>
      <div className="absolute w-50 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      text-xl">
        Your Meditation time is {Math.round(score*100)/100} seconds.
      </div>
    {medi?(
    <a className="absolute w-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125
    text-4xl antialiased font-bold transition duration-700 ease-in-out "
    href="/medi">
      {inhale ? 'Inhale...' : 'Exhale...' }
    </a>):(
      <>
    <a className="absolute w-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125
    text-2xl antialiased font-bold ">
      End of the session. 
    </a>
    <a href='/medi' className="absolute w-50 top-2/3 right-1/2 transition duration-700 ease-in-out
    transform translate-x-1/2 translate-y-1/2 scale-125 hover:scale-175 animate-pulse 
    font-semibold">Try One more time.</a>
    <a href='/scores' className="absolute w-50 top-3/4 right-1/2 transition duration-700 ease-in-out
    transform translate-x-1/2 translate-y-1/2 scale-125 hover:scale-175 animate-pulse 
    font-semibold">View your score in Scoreboard.</a>
    </>)}

    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 z-0 
    hover:shadow-inner"  onMouseMove={(e)=>handleMove(e)}></div>
    </>
  )
}
