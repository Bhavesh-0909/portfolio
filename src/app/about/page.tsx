import { BackgroundBeams } from '@/components/ui/background-beams';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import React from 'react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

function page() {
  return (
    <div>
      {/*landing page*/}
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='flex flex-col gap-2'>

          <div className='font-bold text-6xl text-center text-white/90 ' >
          Hi, I'm Bhavesh
          </div>

          <div className='font-bold -mt-3 text-lg text-center text-red-500/70 ' >
          Full Stack Developer
          </div>

          <div className='w-3/4 mx-auto font-bold text-sm text-center text-white/50 '>
            I am a software engineer who builds for the web with a design-oriented approach.
          </div>

          <div className='flex items-center justify-center gap-4 mx-auto'>
            <FaInstagram className='w-4 h-4 text-red-500'/>
            <FaXTwitter className='w-4 h-4 text-white '/>
            <FaGithub className='w-4 h-4 text-white '/>
            <FaLinkedin className='w-4 h-4 text-blue-500 '/>
          </div>

          <div className='flex w-full justify-center items-center gap-3 mt-4'>
            <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black font-semibold bg-white text-black dark:text-white flex items-center gap-1 py-1 px-3"
            >
              Contact
              <IoIosArrowDropright className="w-6 h-6" />
            </HoverBorderGradient>
            <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-blue-400 font-semibold bg-blue-400 text-white dark:text-white flex items-center gap-1 py-1 px-3"
            >
              Resume
              <IoMdDownload className="w-6 h-6 text-black" />
            </HoverBorderGradient>
          </div>
        </div>

        <BackgroundBeams/>
      </div>

      {/* about me*/}
      <div></div>

      {/* cool grid */}
      <div></div>

      {/*Tech stack*/}
      <div></div>
    </div>
  )
}

export default page