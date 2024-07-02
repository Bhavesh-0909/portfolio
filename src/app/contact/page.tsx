'use client'
import { MenuStore } from '@/state/Menu';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function Page() {
  const {menu, setMenu} = MenuStore()
  return (
    <div
    className='w-screen min-h-screen h-auto bg-black  bg-grid-small-white/[0.19] py-10 relative flex items-center justify-center'
    onClick={()=> setMenu(false)}
    >
      <div
      className={menu ? "bg-black/10 backdrop-blur-sm w-screen h-full absolute inset-0 z-[90] overscroll-none" : "" } 
      ></div>
      

      <div 
      className='bg-black border relative border-white/50 rounded-md md:mt-14 mt-24  flex flex-col md:flex-row md:w-[50%] md:h-[360px] justify-between'
      > 
      <h1 className='text-5xl font-bold absolute -top-12'>Contact Me</h1>
        <div className='w-full px-6 py-6 flex flex-col items-center justify-evenly'>

          
          <div className='flex flex-col gap-6 items-center'>
            <div className='flex w-full items-center gap-6'>
              <FaLocationDot className='w-7 h-7'/>
              <div>
                <div className='text-lg font-semibold'>Address</div>
                <div className='text-xs text-white/50 '>Navi Mumbai</div>
              </div>
            </div>

            <div className='flex w-full items-center gap-6'>
              <MdEmail className='w-7 h-7'/>
              <div>
                <div className='text-lg font-semibold'>Email</div>
                <div className='text-xs text-white/50 '>bhaveshchoudhary0909@gmail.com</div>
              </div>
            </div>

            <div className='flex w-full items-center gap-6'>
              <IoIosCall className='w-7 h-7'/>
              <div>
                <div className='text-lg font-semibold'>Contact</div>
                <div className='text-xs text-white/50 '>+91 9867502676</div>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full px-6 py-6 flex items-center justify-evenly '>
          <div className='w-full h-full flex flex-col items-center justify-evenly'>
            <div className='w-full '>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Bhavesh" type="text" />
            </div>
            
            <div className='w-full '>
              <Label htmlFor="firstname">Your Email</Label>
              <Input id="Name" placeholder="sample@gmail.com" type="text" />
            </div>

            <div className='h-[50%] w-full '>
              <Label htmlFor="firstname">Message</Label>
              <Input className='h-[100px] flex' id="Name" placeholder="Message" type="text" />
            </div>
            <HoverBorderGradient
            containerClassName="rounded-full w-full"
            as="button"
            className=" font-semibold text-black dark:text-white flex items-center gap-1 py-1 px-3"
            >
              Send
            </HoverBorderGradient>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Page