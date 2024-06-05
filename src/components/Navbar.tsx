import Image from 'next/image'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import logo from "../assets/bc.png";
import Link from 'next/link';

function Navbar() {
  return (
    <div className='w-full py-4 flex justify-center space-x-40 items-center bg-black/50 fixed z-50'>
        <div className='w-8 h-8 rounded-full object-cover overflow-hidden flex items-center justify-center'>
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={110} height={110} />
          </Link>
        </div>
        <div className='flex justify-center items-center space-x-6'>
          <div>About</div>
          <div>Projects</div>
          <div>Experience</div>
          <div>Blogs</div>
          <div>Contact</div>
        </div>
        <div>
            <MdDarkMode className='w-7 h-7' width={150} height={150}/>
        </div>
    </div>
  )
}

export default Navbar