'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <div
      className='flex flex-row items-start items-center  justify-start pt-10 pb-10 px-6 w-full'
      style={{
        backgroundImage: `url('./BG.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className='d-flex flex-col justify-center items-center w-full'>
        {/* <div className='pt-4'>
          <h1 className='text-lg font-bold text-[#000]'>Hello there</h1>
        </div> */}
        {/* <div className='flex flex-row text-7xl text-[#134064]'>...</div> */}

        <div className='pb-4 md:pl-8'>
          <div className='pt-2 pb-2'>
            <p className='text-[#134064] font-bold text-4xl'>
              I m Hariprasad K,
            </p>
          </div>
          <div>
            <p className='text-[#134064] font-bold text-4xl'>
              Computer Science
            </p>
          </div>
          <div>
            <p className='text-[#134064] font-bold text-4xl'>graduated</p>
          </div>
        </div>

        <div className='pt-4 md:pl-8'>
          <p className='text-[#000]'>
            I have been working in full stack development for three years,
          </p>
        </div>
        <div className='pb-2 md:pl-8'>
          <p className='text-[#000]'>
            mastering both front-end and back-end development.
          </p>
        </div>
        <div className='pt-4 pb-6 md:pl-8 md:pt-5'>
          <Link href={'/contacts'}>
            <button
              type='button'
              className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            >
              Get in touch
            </button>
          </Link>
        </div>
      </div>
      <div className='w-full hidden md:block '>
        <Image
          src='/image 1.png'
          width={500}
          height={600}
          quality={75}
          alt='hero'
          className='w-full h-[600px]  bg-center flex items-center justify-center '
        />
      </div>

      {/* <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello there</h1>
          <p className='py-6'>
            I m Hariprasad K, Computer Science graduate. I have been working in
            full stack development for three years, mastering both front-end and
            back-end development.
          </p>
          <Link href='/contacts' className='btn btn-primary'>
            Get in touch
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
