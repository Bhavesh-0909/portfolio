import React from 'react';
import Image from 'next/image';
import profile from '@/assets/linkwdinProfile.jpg';

function AboutMe() {
  return (
    <div className='w-screen relative h-[80vh] md:-mt-20 px-10 flex flex-col justify-center mb-52 md:mb-0'>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32 '>
          
          <div className='text-lg text-white/90 font-semibold md:w-3/5 flex-start'>
          <span className='text-xs text-white/70'>ABOUT ME <br/></span>
          Hi, I&apos;m Bhavesh Choudhary, a third-year Computer Science Engineering student at 
          Lokmanya Tilak College of Engineering, Navi Mumbai. I have a deep passion 
          for software development and design, and I&apos;m always eager to learn new technologies.<br/><br/>
          When I&apos;m not coding, you can find me exploring new tech trends, participating in hackathons,
          or collaborating with peers on exciting tech initiatives. I&apos;m always eager to connect with 
          like-minded individuals and explore opportunities that challenge me and help me grow as a developer.
          </div>


          <div className='relative '>
            <div className='absolute -inset-0.5 w-[250px] h-[250px] animate-spin transition-all duration-[5s] rounded-full opacity-75 bg-gradient-to-r from-red-600 to-purple-900 flex items-center justify-center' style={{ filter: 'blur(15px)' }}>
            </div>
            <div className='relative p-1 rounded-full object-cover overflow-hidden'>
              <Image src={profile} alt='profile' width={250} height={250} className="rounded-full" loading="lazy"/>
            </div>
          </div>
        </div>

      </div>
  )
}

export default AboutMe