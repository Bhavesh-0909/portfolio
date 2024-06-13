import React from 'react'
import Iframe from 'react-iframe'
function page() {
  return (
    <div 
    className='w-screen min-h-screen h-auto flex flex-col items-center justify-center gap-10 px-8 py-5 z-0 mt-8'
    >
        <div
        className='w-full h-[80vh] px-5 py-5 rounded-lg border border-white flex flex-wrap items-center justify-between gap-8 '
        >
            <div className='w-full md:w-[60%] h-full'>
                <Iframe
                url="https://bhavesh-0909.github.io/E-Commerce/" 
                scrolling='no' 
                overflow="hidden" 
                allow='fullscreen'
                display='initial'
                allowFullScreen
                className='w-full h-full border border-white overflow-hidden'
                >
                </Iframe>
            </div>
            <div className='w-full h-full border border-white md:w-[35%]'>hhhhh</div>
        </div>
    </div>
  )
}

export default page