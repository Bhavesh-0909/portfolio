'use client'
import Image from 'next/image'
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/bc.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  return (
    <div className='w-screen py-4 px-10 flex justify-between md:space-x-40 items-center bg-[#0E0E10]/85 fixed z-[100] top-0'>
        <div className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center'>
          <Link href={'/'}>
            <Image src={logo} alt="logo" className='w-8 h-8' />
          </Link>
        </div>

        <div className='hidden md:block'>
          <div className='flex justify-center items-center space-x-6'>

            <Link href={"/"}>
              <div 
              className={pathname === '/' ? 'px-2 py-1 rounded-md bg-gray-900/95': ""}>
                About
              </div>
            </Link>

            <Link href={"/projects"}>
              <div 
              className={pathname === '/projects' ? 'px-2 py-1 rounded-md bg-gray-900/95': ""}>
                Projects
              </div>
            </Link>

            <Link href={"/blog"}>
              <div 
              className={pathname === '/blog' ? 'px-2 py-1 rounded-md bg-gray-900/95': ""}>
                Blogs
              </div>
            </Link>

            <Link href={"/contact"}>
              <div 
              className={pathname === '/contact' ? 'px-2 py-1 rounded-md bg-gray-900/95': ""}>
                Contact
              </div>
            </Link>
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