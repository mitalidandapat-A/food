"use client";
import Countdown from 'react-countdown'
const endingDate = new Date("2026-07-26").getTime();
const CountDown = () => {
  return (
    <div>
     <Countdown className=' font-bold text-yellow-500 text-5xl' date={endingDate} />
    </div>
  )
}

export default CountDown
