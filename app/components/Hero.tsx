import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='hero min-h-[500px] bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello there</h1>
          <p className='py-6'>
            I'm Hariprasad K, Computer Science graduate. I've been working in
            full stack development for three years, mastering both front-end and
            back-end development.
          </p>
          <Link href='/contacts' className='btn btn-primary'>
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
