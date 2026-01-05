import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CountDown from './CountDown';
const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
      <div className='flex-1 flex flex-col gap-8 justify-center items-center p-6 text-center '>
        <h1 className='text-white text-4xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='text-white xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <CountDown />
        <Button className='bg-red-500 text-white hover:bg-red-600 rounded-md py-3 px-6'>Order Now</Button>
      </div>
      <div className="flex-1 w-full relative overflow-hidden flex items-center justify-center ">
        <Image src="/images/offerProduct1.png" alt="offer" width={400}
            height={300}  className='object-contain  ' />
      </div>
    </div>
  )
}

export default Offer
