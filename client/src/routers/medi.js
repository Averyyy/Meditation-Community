import React from 'react'
import axios from 'axios';
import Tip from '../components/tip/Tip';


export default function Medi({ environment }) {
  const [tip, setTip] = React.useState(true);
  const [medi, setMedi] = React.useState(false);
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
}, [score,tip]);

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
  function restart() {
    setMedi(true);
    setScore(0);
  }

  if (tip) {
    return (
      <>
      <Tip setTip={setTip} setMedi={setMedi}/>
      <div className="h-screen animated absolute -z-10 home"></div>
      </>
    )}
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
    <div className="absolute w-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125
    text-2xl antialiased font-bold ">
      End of the session. 
    </div>
    <div onClick={restart} className="absolute w-50 top-2/3 right-1/2 transition duration-700 ease-in-out
    transform translate-x-1/2 translate-y-1/2 scale-125 hover:scale-175 animate-pulse 
    font-semibold">Try One more time.</div>
    <a href='/scores' className="absolute w-50 top-3/4 right-1/2 transition duration-700 ease-in-out
    transform translate-x-1/2 translate-y-1/2 scale-125 hover:scale-175 animate-pulse 
    font-semibold">View your score in Scoreboard.</a>
    </>)}

    <div className="h-screen animated absolute -z-10 medi" onMouseMove={(e)=>handleMove(e)}></div>

    </>
  )
}
