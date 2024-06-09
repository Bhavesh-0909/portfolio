'use client';
import React from 'react';
import { skills } from '@/data/skills';
import Image from 'next/image';
import { HeroHighlight } from './ui/hero-highlight';

function Skills() {
  return (
    <div className='w-screen h-screen md:px-10 px-5 py-10 flex flex-col items-center gap-10 mt-10 mb-20'>
      <div className='text-5xl font-semibold '>My Tech Stack</div>
      <div className='w-full bg-slate-700 rounded-lg relative z-0 gap-5'>
        <HeroHighlight
        className='grid grid-cols-7 gap-5 w-full h-full relative z-0 px-4 py-5'
        >
            {skills.map((skill) => (
            <div 
            key={skill.id} 
            className='w-[100px] h-[150px] col-span-1'
            title={skill.title}
            >
                <Image 
                    src={skill.svg} 
                    alt={skill.title} 
                    title={skill.title}
                    width={100} 
                    height={100} 
                    className={`w-full h-full object-contain ${skill?.className}`} 
                />

            </div>
            ))}
        </HeroHighlight>
        
      </div>
    </div>
  );
}

export default Skills;
