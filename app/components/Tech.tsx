'use client';
import React from 'react';

import BallCanvas from './canvas/Ball';
// import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';

const Tech = () => {
  return (
    <>
      <h5 className='text-2xl font-semibold py-4'>SKILLS</h5>
      <div className='card card-compact bg-base-100 shadow-xl h-auto py-4'>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
