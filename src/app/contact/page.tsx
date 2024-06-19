import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Page() {
  return (
    <div
    className='w-screen max-h-screen h-auto bg-black mt-10  bg-grid-small-white/[0.1] relative flex items-center justify-center'
    >
      <div 
      className='bg-black border border-white/50 rounded-md max-w-[800px] w-full min-h-[80vh] h-full mt-8 flex items-center'
      >
        <div className='min-w-[49%] px-6 py-6 flex flex-col gap-16'>

          <h1 className='text-6xl font-bold'>Contact Me</h1>

          <div className='flex flex-col gap-6 items-center'>
            <div className='flex w-full items-center gap-8'>
              <FaLocationDot className='w-8 h-8'/>
              <div>
                <div className='text-xl font-semibold'>Address</div>
                <div className='text-sm text-white/50 '>Navi Mumbai</div>
              </div>
            </div>

            <div className='flex w-full items-center gap-8'>
              <MdEmail className='w-8 h-8'/>
              <div>
                <div className='text-xl font-semibold'>Email</div>
                <div className='text-xs text-white/50 '>bhaveshchoudhary0909@gmail.com</div>
              </div>
            </div>

            <div className='flex w-full items-center gap-8'>
              <IoIosCall className='w-8 h-8'/>
              <div>
                <div className='text-xl font-semibold'>Contact</div>
                <div className='text-sm text-white/50 '>+91 9867502676</div>
              </div>
            </div>
          </div>

        </div>

        <div
        className='h-full w-[1px] bg-white '
        >
        </div>

        <div className='min-w-[49%] px-6 py-6'>
          email
        </div>

      </div>
    </div>
  )
}

export default Page