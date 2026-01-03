"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import CartIcons from './CartIcons'

const links = [
    {id:1, title:"Home", url:"/"},
    {id:2, title:"Menu", url:"/menu"},
    {id:3, title:"Working Hours", url:"/working-hours"},
    {id:4, title:"Contact", url:"/contact"},
];
const Menu = () => {
    const [isOpen,setIsOpen]=useState(false);
    const user =false;
  return (
    <div>
      {isOpen ? (
          <MdClose size={24} onClick={() => setIsOpen(false)}/>
      ):(
         <GiHamburgerMenu size={24} onClick={()=> setIsOpen(true)}/>
      )}
     {isOpen && (
     <div className=' bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 text-3xl items-center justify-center w-full z-10'>
        { links.map((link) =>(
          <Link key={link.id} href={link.url} onClick={()=> setIsOpen(false)}>{link.title}</Link>

        )) }
        {user ? (<Link href="/orders" onClick={()=> setIsOpen(false)}>Order Now</Link>) : (<Link href="/login" onClick={()=> setIsOpen(false)}>Login</Link>)}
        <Link href="/cart" onClick={()=> setIsOpen(false)}><CartIcons /></Link>
        
     </div>
     )}
    </div>
  )
}

export default Menu
