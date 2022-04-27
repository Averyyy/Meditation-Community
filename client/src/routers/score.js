import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Score({ environment }) {
  const [score, setScore] = useState([]);
  useEffect(() => {
    axios.get(environment+'/api/scores').then(res => {
      setScore(res.data);
      console.log(res.data);
    });
  }, []);

  return (<>
    <div className='absolute left-12 top-20 font-bold text-4xl'>Scoreboard</div>
    <div className='absolute left-12 top-32 font-thin text-normal'>One person will show up once by his/her highest score</div>
    <table className="absolute left-1/2 top-36 table-auto text-center transform -translate-x-1/2
    my-4 xt-my-auto w-full">
  <thead>
    <tr>
      <th className="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left border border-gray-200">Ranking</th>
      <th className="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left border border-gray-200">Username</th>
      <th className="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left border border-gray-200">Duration</th>

    </tr>
  </thead>
  <tbody>
    {score.map((score,index) => (
      <tr key={index} className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
        <td>{index+1}</td>
        <td>{score[0]}</td>
        <td>{score[1]}</td>
      </tr>
    ))}
  </tbody>
</table>
<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
</>
  )
}
