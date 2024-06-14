import Image from 'next/image'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/bc.png";
import Link from 'next/link';

function Navbar() {
  return (
    <div className='w-screen py-4 px-10 flex justify-between md:space-x-40 items-center bg-black/85 fixed z-[100] top-0'>
        <div className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center'>
          <Link href={'/'}>
            <Image src={logo} alt="logo" className='w-8 h-8' />
          </Link>
        </div>

        <div className='hidden md:block'>
          <div className='flex justify-center items-center space-x-6'>
            <Link href={"/"}><div>About</div></Link>
            <Link href={"/projects"}><div>Projects</div></Link>
            <Link href={"/exprience"}><div>Experience</div></Link>
            <Link href={"/blog"}><div>Blogs</div></Link>
            <Link href={"/contact"}><div>Contact</div></Link>
          </div>
        </div>
        
      <div className='flex justify-between gap-2 items-center'>
        <div>
            <MdDarkMode className='w-7 h-7' width={150} height={150}/>
        </div>

        <div className='md:hidden'>
          <IoMdMenu className='w-8 h-8 text-white' width={150} height={150}/>
        </div>
      </div>
        
    </div>
  )
}

export default Navbar