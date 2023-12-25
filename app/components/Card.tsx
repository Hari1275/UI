import Image from 'next/image';
import React from 'react';
import { projects } from '../constants';
import Link from 'next/link';
function Card() {
  return (
    <>
      {/* <h5 className='text-2xl font-semibold py-4'>PROJECTS</h5> */}
      <h5 className='text-2xl font-semibold pt-4 pb-2 text-center text-[#42446E]'>
        PROJECTS
      </h5>
      <p className='text-md text-center pb-4 '>Things I have built so far</p>
      {/* <div className='w-full flex justify-center py-4'>
        <p className='bg-[#E9F4FF] text-center rounded-md px-10 py-1 rounded-s-sm'>
          PROJECTS
        </p>
   
      </div> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 h-auto py-4'>
        {projects.map((project, index) => (
          <div className='card card-compact bg-base-100 shadow-xl' key={index}>
            <figure>
              <Image
                src={'/' + project.image}
                alt='code'
                width={500}
                height={500}
                className='transform transition duration-500 hover:scale-110'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{project.name}</h2>
              <p>{project.description}</p>

              <div className='card-actions justify-end'>
                <Link href={project.source_code_link} target='_blank'>
                  <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                      View
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='card card-compact bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='/Frame 202.png'
              alt='code'
              width={500}
              height={500}
              className='transform transition duration-500 hover:scale-110'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card card-compact bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='/image.jpg'
              alt='code'
              width={500}
              height={500}
              className='transform transition duration-500 hover:scale-110'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Card;
