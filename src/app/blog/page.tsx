import React from 'react';
import { blogs } from '@/data/blogs';
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

function page() {
  return (
    <div className='w-screen min-h-screen h-auto flex flex-col items-center gap-6 px-8 py-5 z-0 mt-14'>

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
        className='w-full max-w-[600px] h-fill rounded-md border border-white/50 '
        >
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>

          <div className='w-full h-1/2 grid grid-cols-2 grid-rows-2'>
            {
              <BentoGrid className="w-full h-full relative">
                {blog.image.map((img)=>(
                  <BentoGridItem 
                  id={img.id}
                  key={img.id}
                  className={img.id === 0 || img.id === 3 ? "md:col-span-2" : ""}
                  img={img.link}
                  >

                  </BentoGridItem>
                ))}
              </BentoGrid>
            }
          </div>
          
        </div>
      ))}


    </div>
  )
}

export default page