"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/images/header_img.png"
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/images/header2_img.jpg"             

  },
    {    
    id: 3,                    
    title: "the best your pizza to share with your family",
    image: "/images/header3_img.jpg"
    }
]




const Slider = () => {
    const [currentSlide, setCurrentSlide] =useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
        }, 2000);

        return () => clearInterval(slideInterval);
    }, []);
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] '>
      
      <div className='h-1/2 flex flex-col items-center justify-center gap-8 md:gap-10 text-red-500 font-bold '>
        <h1 className='text-2xl text-center uppercase p-4 md:text-4xl xl:text-6xl'>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white py-3 px-4 '>Order Now</button>
         </div>
      <div className='w-full h-1/2 relative'>
        <Image src={data[currentSlide].image} alt="slider" fill  className='object-cover'/>
         </div>
    </div>
  )
}

export default Slider
