import React from 'react';
import Image from 'next/image';
import profile from '@/assets/linkwdinProfile.jpg';
import {BackgroundGradient} from './ui/background-gradient';

function AboutMe() {
  return (
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
          <div
          className='w-[250px] h-[250px] rounded-full bg-red-500 overflow-hidden object-cover object-center'
          >
          <Image src={profile} alt='profile' width={250} height={250}/>

          </div>

        </div>
      </div>
  )
}

export default AboutMe