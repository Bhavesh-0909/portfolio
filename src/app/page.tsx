import { BackgroundBeams } from '@/components/ui/background-beams';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import profile from '@/assets/linkwdinProfile.jpg';
import React from 'react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Image from 'next/image';

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
      <div className='w-screen h-[90vh] px-10 flex flex-col justify-center gap-4'>
        <div className='text-xs text-white/70 '>ABOUT ME</div>
        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-32 '>
          <div className='text-lg text-white/90 font-semibold md:w-3/5 flex-start'>
          Hi, I'm Bhavesh Choudhary, a third-year Computer Science Engineering student at 
          Lokmanya Tilak College of Engineering, Navi Mumbai. I have a deep passion 
          for software development and design, and I'm always eager to learn new technologies.<br/><br/>
          When I'm not coding, you can find me exploring new tech trends, participating in hackathons,
          or collaborating with peers on exciting tech initiatives. I'm always eager to connect with 
          like-minded individuals and explore opportunities that challenge me and help me grow as a developer.
          </div>
          <div className='w-[250px] h-[250px] rounded-full bg-red-500 overflow-hidden object-cover flex items-center justify-center'> 
            <Image src={profile} alt='profile' width={250} height={250}/>
          </div>
        </div>
      </div>

      {/* cool grid */}
      <div></div>

      {/*Tech stack*/}
      <div></div>
    </div>
  )
}

export default page