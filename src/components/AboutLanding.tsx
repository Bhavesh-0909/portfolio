import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoMdDownload } from 'react-icons/io';
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

function AboutLanding() {
  return (
    <div className='w-screen h-screen flex items-center justify-center relative mb-20 md:mb-0'>
    <BackgroundBeams/>

      <div className='flex flex-col gap-2'>

      <div className='font-bold text-6xl text-center text-white/90 tracking- '>
        <h1>Hi, I&apos;m Bhavesh</h1>
      </div>
      <div className='font-bold -mt-3 text-lg text-center text-red-500/70'>
        <h2>Full Stack Developer</h2>
      </div>

        <div className='w-3/4 mx-auto font-bold text-sm text-center text-white/50 '>
          I am a software engineer who builds for the web with a design-oriented approach.
        </div>

        <div className='flex items-center justify-center gap-4 mx-auto'>
        <Link rel="noopener noreferrer" target="_blank" href={"https://www.instagram.com/_bhavesh_7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
          <FaInstagram className='w-4 h-4 text-red-500 cursor-pointer'/>
        </Link>

        <Link rel="noopener noreferrer" target="_blank" href={"https://x.com/Bhavesh_Dev07"}>
          <FaXTwitter className='w-4 h-4 text-white cursor-pointer'/>
        </Link>

        <Link rel="noopener noreferrer" target="_blank" href={"https://github.com/Bhavesh-0909"}>
          <FaGithub className='w-4 h-4 text-white cursor-pointer'/>
        </Link>

        <Link href={"https://www.linkedin.com/in/bhavesh-choudhary-700617285/"}>
          <FaLinkedin className='w-4 h-4 text-blue-500 cursor-pointer'/>
        </Link>

        </div>

        <div className='flex w-full justify-center items-center gap-3 mt-4'>
          <Link href={'/contact'}>
            <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black font-semibold bg-white text-black dark:text-white flex items-center gap-1 py-1 px-3"
            >
              Contact
              <IoIosArrowDropright className="w-6 h-6" />
            </HoverBorderGradient>
          </Link>
          
          <Link rel="noopener noreferrer" target="_blank" href={"https://docs.google.com/document/d/16Mmkfr2xh2wEiR3e1ctAYdJv6gsEReCk_WdLvwGdqPU/edit?usp=sharing"}>
            <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-white font-semibold bg-blue-400 text-black dark:text-black flex items-center gap-1 py-1 px-3"
            >
              Resume
              <IoMdDownload className="w-6 h-6 text-black" />
            </HoverBorderGradient>
          </Link>
          
        </div>
      </div>

    </div>
  )
}

export default AboutLanding