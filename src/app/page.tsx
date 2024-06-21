'use client'
import React from 'react'
import Grid from '@/components/Grid';
import AboutLanding from '@/components/AboutLanding';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import { MenuStore } from '@/state/Menu';


function Page() {
  const {menu, setMenu} = MenuStore()


  return (
    <div className={`relative w-screen min-h-screen  ${menu ? "fixed":""}`}
    onClick={()=> setMenu(false)}>
      <div
      className={menu ? "bg-black/10 backdrop-blur-sm w-screen h-full absolute inset-0 z-[90] overscroll-none" : "" } 
      >
      </div>
      
      {/*landing page*/}
     <AboutLanding/>

      {/* about me*/}
      <AboutMe/>

      {/* cool grid */}
      <div className='w-screen h-auto min-h-screen px-10 md:mt-20'>
        <Grid/>
      </div>

      {/*Tech stack*/}
      <Skills/>
    </div>
  )
}

export default Page