import { Pizzas } from '@/app/data';

import Link from "next/link";
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: "Category Page",
  description: "Browse pizzas by category and order your favorite online! Fast delivery and delicious taste.",
  authors: [
    { name: "mitali" }, 
    { name: "Co-Author" },
  ],
  keywords: ["pizza", "delivery", "food", "order", "online"],
};

const Categorypage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {Pizzas.map((item) => (
        <Link 
          key={item.id}
          className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between even:bg-fuchsia-50' 
          href={`/products/${item.id}`}
        >
          {item.img && (
            <div className='relative h-[80%]'>
              <Image 
                src={item.img} 
                alt={item.titel} 
                width={200} 
                height={200}  
                className='object-contain object-center w-full h-full  '
              />
            </div>
          )}
          <div className='flex items-center justify-between font-bold gap-2 group'>
            <h1 className='font-bold text-2xl uppercase p-2'>{item.titel}</h1>
            <h2 className='text-lg group-hover:hidden'>${item.price}</h2>
            <button className='bg-red-500 hidden group-hover:block text-white px-3 py-1 rounded hover:bg-red-600'>
              Add to Cart
            </button>
          </div>  
        </Link>
      ))}
    </div>
  );
}

export default Categorypage;