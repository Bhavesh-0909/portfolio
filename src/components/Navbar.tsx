'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/bc.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuStore } from '@/state/Menu';

function Navbar() {
  const pathname = usePathname();
  const {menu, setMenu} = MenuStore();
  
  return (
    <div id="Navbar" className='w-screen h-fit py-4 px-10 flex items-center justify-center bg-[#0E0E10]/85 fixed z-[100] top-0'>
      
      <div className='max-w-[1080px] mx-auto w-full flex justify-between items-center'>
        
        <div className='flex items-center space-x-4 md:space-x-0'>
          <div className='md:hidden flex items-center justify-center w-10 h-10 z-50'>
              {menu ? 
                (<button onClick={() => setMenu(!menu)} className='h-full w-full font-bold text-lg'>X</button>) : 
                (<button onClick={() => setMenu(!menu)}><IoMdMenu className='w-6 h-6 text-white'/></button>)}
          </div>

          <Link href={'/'}>
            <Image src={logo} alt="logo" className='w-10 h-10 rounded-full relative z-[100]' />
          </Link>
        </div>
        
        <div 
        className={`flex flex-col md:flex-row md:items-center justify-center md:space-x-6 space-y-6 md:space-y-0 fixed md:static
         bg-[#0E0E10] md:bg-transparent top-0 left-0 w-[70vw] md:w-auto h-screen md:h-auto 
         transition-transform duration-500 ease-in-out
                        ${menu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          
          <Link href={"/"} passHref>
            <div className={`px-2 py-1 text-center rounded-md md:w-full w-[60%] mx-auto ${pathname === '/' ? 'bg-gray-900/95 text-white' : 'text-gray-300 hover:bg-gray-700/80 hover:text-white'}`}>
              About
            </div>
          </Link>

          <Link href={"/projects"} passHref>
            <div className={`px-2 py-1 text-center rounded-md md:w-full w-[60%] mx-auto ${pathname === '/projects' ? 'bg-gray-900/95 text-white' : 'text-gray-300 hover:bg-gray-700/80 hover:text-white'}`}>
              Projects
            </div>
          </Link>

          <Link href={"/blog"} passHref>
            <div className={`px-2 py-1 text-center rounded-md md:w-full w-[60%] mx-auto ${pathname === '/blog' ? 'bg-gray-900/95 text-white' : 'text-gray-300 hover:bg-gray-700/80 hover:text-white'}`}>
              Blogs
            </div>
          </Link>

          <Link href={"/contact"} passHref>
            <div className={`px-2 py-1 text-center rounded-md md:w-full w-[60%] mx-auto ${pathname === '/contact' ? 'bg-gray-900/95 text-white' : 'text-gray-300 hover:bg-gray-700/80 hover:text-white'}`}>
              Contact
            </div>
          </Link>
        </div>
          
        <div>
          <MdDarkMode className='w-7 h-7 text-white cursor-pointer' />
        </div>

      </div>
    </div>
  )
}

export default Navbar
