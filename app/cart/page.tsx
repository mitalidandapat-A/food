import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react';
export const metadata = {
  title: "Cart Page",
  description: "View and manage your shopping cart. Proceed to checkout to order your favorite pizza online!",
  authors: [
    { name: "mitali" }, 
    { name: "Co-Author" },
  ],
  keywords: ["pizza", "delivery", "food", "order", "online"],
};
function CartPage() {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row '>
      <div className='h-1/2  p-4  flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/images/menu_1.jpg" alt="cart image" width={100} height={100} className=''/>
          <div className=''>
           <h1 className='uppercase font-bold text-xl '>Chicken Pizza</h1>
           <span className=''>Large</span>

          </div>
          <h2 className='font-bold'>$79.99</h2>
          <span className=' cursor-pointer'><X size={24} /></span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/images/menu_2.jpg" alt="cart image" width={100} height={100} className=''/>
          <div className=''>
           <h1 className='uppercase font-bold text-xl '>Chicken Pizza</h1>
           <span className=''>Large</span>

          </div>
          <h2 className='font-bold'>$79.99</h2>
          <span className=' cursor-pointer'><X size={24} /></span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/images/menu_3.jpg" alt="cart image" width={100} height={100} className=''/>
          <div className=''>
           <h1 className='uppercase font-bold text-xl '>Chicken Pizza</h1>
           <span className=''>Large</span>

          </div>
          <h2 className='font-bold'>$79.99</h2>
          <span className=' cursor-pointer'><X size={24} /></span>
        </div>
      </div>
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2'>
        <div className='flex justify-between '>
          <span className=''>Subtotal </span>
          <span className=''>$159.98</span>
        </div>
        <div className='flex justify-between '>
          <span className=''>Service Cost </span>
          <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between '>
          <span className=''>Delivery Cost </span>
          <span className='text-green-700'>FREE!</span>
        </div>
        <hr  className='my-2'/> 
        <div className='flex justify-between '>
          <span className=''>TOTAL(INCL.VAT) </span>
          <span className='font-bold'>$81.70</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end' >CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage;
