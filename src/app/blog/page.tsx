'use client'
import React, { useState } from 'react';
import { blogs } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import Model from '@/components/Model';
import { MenuStore } from '@/state/Menu';

interface ImgValue{
  id: number,
  link: string
}

function Page() {

  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<ImgValue>();
  const {menu , setMenu} = MenuStore();

  function handelonclick(img:ImgValue) {
    setData(img);
    setIsVisible(true);
  }

  return (
    <div className='relative w-screen min-h-screen h-auto flex flex-col items-center gap-6 px-8 py-5 z-0 mt-14' onClick={()=> setMenu(false)}>
      <div
      className={menu ? "bg-black/10 backdrop-blur-sm w-screen h-full absolute inset-0 z-[90] overscroll-none" : "" } 
      >
      </div>
      <Model isVisible={isVisible} data={data} onClose={()=> setIsVisible(false)}/>
      <div
      className='w-full text-5xl text-white/75 font-extrabold'
      >
        Blogs
        <div
        className='w-full mt-4 h-[1px] bg-white/45 rounded-lg'
        >
        </div>
      </div>

      {blogs.map((blog)=>(
        <div
        key={blog.id}
        className='w-full max-w-[600px] h-fill rounded-md border flex flex-col gap-2 px-3 py-3 border-white/50 '
        >
          <h1 className='text-4xl font-semibold uppercase'>
            {blog.title}
          </h1>
          <p className='text-md'>
            {blog.desc.substring(0, 200)}
            <span className='text-blue-500'>
              <Link href={"/"}>
                ...read more
              </Link>
            </span>
          </p>

          <div className='w-full gap-1 h-1/2 grid grid-cols-3 grid-rows-2'>
            {
              blog.image.map((img)=>(
                <div key={img.id}
                className={img.id == 2 || img.id == 3? "col-span-1 row-span-1 object-fill": "col-span-2 row-span-2 object-cover"}
                >
                  <Image 
                  onClick={() => handelonclick(img)}
                  src={img.link} 
                  alt={img.link} 
                  width={700} 
                  height={475} 
                  loading='lazy'
                  className='w-full h-full cursor-pointer'/>
                </div>
              ))
            }
          </div>

          <div className='text-gray-500 font-semibold flex justify-end '>
            {blog.date}
          </div>
          
        </div>
      ))}


    </div>
  )
}

export default Page