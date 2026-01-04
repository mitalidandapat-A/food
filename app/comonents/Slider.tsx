"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/images/header6_img.jpg"
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/images/header5_img.jpg"

  },
  {
    id: 3,
    title: "the best your pizza to share with your family",
    image: "/images/header3_img.jpg"
  }
]




const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>

      <div className='flex-1 flex flex-col items-center justify-center gap-8 md:gap-10 text-red-500 font-bold lg:h-full lg:w-1/2'>
        <h1 className='text-2xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-6xl'>{data[currentSlide].title}</h1>
        
        <Button variant="destructive">Order Now</Button>
      </div>
      <div className='relative w-full flex-1 overflow-hidden lg:h-full lg:w-1/2'>
        <Image src={data[currentSlide].image} alt="slider" fill className='object-cover 
    object-center 
    transition-transform 
    duration-700 
    ease-in-out'/>
      </div>
    </div>
  )
}

export default Slider
