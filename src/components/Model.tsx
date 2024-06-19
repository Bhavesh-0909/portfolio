'use client'
import React from 'react'
import Image from 'next/image';

function Model({isVisible, data, onClose}) {
    if (!isVisible) return null;
    function handelClose(e){
        if (e.target.id === 'wrapper') onClose();
    }

  return (
    <div 
    id='wrapper'
    onClick={handelClose}
    className='w-screen h-screen p-5 fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center'>
        <div 
        className='md:w-[600px] w-full bg-white'>
            <Image src={data.link} alt={data.link} width={700} height={475}/>
        </div>
    </div>
  )
}

export default Model