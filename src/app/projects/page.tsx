'use client'
import React from 'react'
import {projects} from "@/data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { LinkPreview } from '@/components/ui/link-preview';
import { MenuStore } from '@/state/Menu';

function Page() {
  const {menu, setMenu} = MenuStore();
  return (
    <div 
    className='relative w-screen min-h-screen h-auto flex flex-col items-center justify-center gap-6 px-8 py-5 z-0 mt-14'
    onClick={()=> setMenu(false)}
    >
      <div
      className={menu ? "bg-black/10 backdrop-blur-sm w-screen h-full absolute inset-0 z-[90] overscroll-none" : "" } 
      >
      </div>
      <div
      className='w-full text-5xl text-white/75 font-extrabold'
      >
        Projects
        <div
        className='w-full mt-4 h-[1px] bg-white/45 rounded-lg'
        >
        </div>
      </div>
      
      {
        projects.map((project)=>(
          <div key={project.id}
          className='w-full min-h-[80vh] px-6 py-5 rounded-lg border border-white/85 flex flex-wrap items-center justify-between gap-6 '
          >
            
            <div 
            className='w-full md:w-[62%] h-full rounded-md overflow-hidden'
            >
              <Link href={project.livelink}>
              <Image
              src={project.img}
              alt={project.title}
              width="700"
              height="475"
              className='w-full h-full '
              loading='lazy'
              />
              </Link>
              
            </div>

            <div 
            className='w-full h-full flex flex-col gap-3 md:w-[35%]'
            >
              <h1 className='text-5xl font-bold text-red-600/85'>{project.title}</h1>
              <h3 className='text-xl text-blue-400/85 font-semibold -mt-2'>{project.subtitle}</h3>
              <p className='flex gap-1'>
                {project.techStack.map((tech, i)=>(
                  <span key={i} className='px-2 py-1 rounded-lg border border-gray-500/85'>{tech}</span>
                ))}</p>
              <p className='text-white/50 '>{project.description}</p>
              <div className='flex gap-2 '>
                
                  <LinkPreview url={project.livelink}>
                    <span>
                      <FaExternalLinkAlt className='h-5 w-5'/>
                    </span>
                  </LinkPreview>
                

                
                  <LinkPreview url={project.github}>
                    <span>
                      <FaGithub className='h-5 w-5'/>
                    </span>
                  </LinkPreview>
                
              </div>
            </div>

        </div>        
        ))
      }
        
    </div>
  )
}

export default Page