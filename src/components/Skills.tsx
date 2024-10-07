'use client';
import React from 'react';
import { skills } from '@/data/skills';
import Image from 'next/image';
import { HeroHighlight } from './ui/hero-highlight';

function Skills() {
  return (
    <div className='w-screen min-h-screen h-auto md:px-10 px-5 py-10 flex flex-col items-center gap-10 mt-10 mb-10'>
      
      <div className='text-5xl font-semibold '>My Tech Stack</div>
      
        <HeroHighlight
        className='grid md:grid-cols-7 grid-cols-5 gap-5 w-full rounded-lg relative z-0 px-4 py-5  overflow-hidden'
        >
            {skills.map((skill) => (
            <div 
            key={skill.id} 
            className='md:w-[100px] md:h-[120px] col-span-1 place-self-center place-items-center'
            title={skill.title}
            >
                <Image 
                    src={skill.svg} 
                    alt={skill.title} 
                    title={skill.title}
                    width={100} 
                    height={100} 
                    className={`w-full h-full  ${skill?.className}`} 
                    loading='lazy'
                />

            </div>
            ))}
        </HeroHighlight>
    </div>
  );
}

export default Skills;
