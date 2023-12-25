'use client';
import React from 'react';
import Image from 'next/image';

import BallCanvas from './canvas/Ball';
// import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';

const Tech = () => {
  return (
    <>
      <h5 className='text-2xl font-semibold pt-4 pb-2 text-center text-[#42446E]'>
        MY TECH STACK
      </h5>
      <p className='text-md text-center pb-4 '>
        Technologies i have been working with recently
      </p>
      <div className='card card-compact bg-base-100 shadow-xl h-auto py-4'>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <Image
                src={'/' + technology.icon}
                width={60}
                height={60}
                quality={75}
                alt={technology.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
