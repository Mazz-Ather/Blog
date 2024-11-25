import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between max-w-screen-xl p-9 mx-auto z-[999]'>
      <div className=''>
        <Link href={'/'} className='font-extrabold text-3xl'>
        <h1>MAZZ|<span className='text-primary'>BLOG</span></h1>
        </Link>
      </div>
      <div className='flex gap-20 '>
      <Link href={'/'}>Home</Link> 
      <Link href={'/blog'}>Blog</Link> 
      <Link href={'/contact'}>Contact</Link> 
        <div>
            <ModeToggle/>
        </div>
             </div>
    </div>
  )
}

export default Navbar
