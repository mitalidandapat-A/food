import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcons from './CartIcons'
import { FiPhone } from "react-icons/fi"

function Navbar() {
    const user = false;
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:py-40'>
        <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
        </div>
      <div className=' text-lg md:font-bold flex-1 text-center'>
        <Link href="/">Massimo</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
        <div className='md:absolute top-3 r-2 lg:static flex  items-center gap-2 text-red-500  cursor-pointer bg-orange-200 px-2 rounded-md'>
            <FiPhone size={20} />
            <span className='text-sm'>+91 856-123-4567</span>
        </div>
        {!user ? (<Link href="/login">Login</Link>) : (<Link href="/orders">Orders</Link>) }
        <CartIcons />
        </div>
    </div>
  )
}

export default Navbar
