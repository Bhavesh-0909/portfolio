'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/bc.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div 
    className='w-screen h-fit py-4 px-10 flex items-center justify-center bg-[#0E0E10]/85 fixed z-[100] top-0'>
      
      <div
      className='max-w-[1080px] mx-auto w-full flex justify-between items-center md:space-x-40 '
      >
        <div className='md:hidden flex items-center justify-center w-10 h-10 right-10 top-5 z-50'>
            {menu ? 
              (<button onClick={()=>setMenu(!menu)} className='h-full w-full font-bold text-lg'>X</button>):
              (<button onClick={()=>setMenu(!menu)} ><IoMdMenu className='w-6 h-6'/></button>)}
        </div>

        <Link href={'/'}>
          <Image src={logo} alt="logo" className='w-8 h-8 rounded-full' />
        </Link>
        
        <div className={`flex md:max-w-[50%] text-center md:h-full md:flex-row md:justify-center mx-auto items-center md:space-x-6  flex-col
              md:static md:z-auto fixed md:bg-transparent bg-black 
              ${menu ? "top-0 left-[50%] right-[50%] z-30 w-[80vw] h-screen" : "-right-[50%]"}
              transition duration-[10000ms] ease-in-out `}>

              <Link href={"/"}>
                <div 
                className={pathname === '/' ? 'px-2 py-1 text-center rounded-md bg-gray-900/95': ""}>
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
          
        <div>
              <MdDarkMode className='w-7 h-7' width={150} height={150}/>
        </div>

      </div>

    </div>
  )
}

export default Navbar