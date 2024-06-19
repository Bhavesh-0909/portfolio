import React from 'react'
import Grid from '@/components/Grid';
import AboutLanding from '@/components/AboutLanding';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';


function Page() {
  return (
    <div>
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

export default page