'use client'
import React from 'react'
import Image from 'next/image';

interface ModelProps {
  isVisible: boolean;
  data: any;
  onClose: () => void;
}


function Model({isVisible, data, onClose}:ModelProps) {
    if (!isVisible) return null;
    function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const target = e.target as HTMLElement;
    if (target.id === 'wrapper') onClose();
    }
  

  return (
    <div 
    id='wrapper'
    onClick={handleClose}
    className='w-screen h-screen p-5 fixed inset-0 z-[102] bg-black/25 backdrop-blur-sm flex justify-center items-center'>
        <div 
        className='md:w-[600px] w-full bg-white'>
            <Image src={data.link} alt={data.link} width={700} height={475}/>
        </div>
    </div>
  )
}

export default Model