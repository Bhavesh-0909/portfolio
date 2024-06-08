import React from 'react'
import Grid from '@/components/Grid';
import AboutLanding from '@/components/AboutLanding';
import AboutMe from '@/components/AboutMe';


function page() {
  return (
    <div>
      {/*landing page*/}
     <AboutLanding/>

      {/* about me*/}
      <AboutMe/>

      {/* cool grid */}
      <div className='w-screen h-auto min-h-screen px-10 md:mt-20 mb-10'>
        <Grid/>
      </div>

      {/*Tech stack*/}
      <div>

      </div>
    </div>
  )
}

export default page