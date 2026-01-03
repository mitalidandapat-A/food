import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CartIcons = () => {
  return (
    <div>
      <Link href="/cart" className='flex items-center gap-3 '>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image className='grayscale' src="/images/bag_icon.png" alt="Cart" fill sizes="32px"  />
      </div>
      <span>Cart (3)</span>
      </Link>
    </div>
  )
}

export default CartIcons
