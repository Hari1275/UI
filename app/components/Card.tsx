import Image from 'next/image';
import React from 'react';
import { projects } from '../constants';
import Link from 'next/link';
function Card() {
  return (
    <>
      <h5 className='text-2xl font-semibold py-4'>PROJECTS</h5>

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
                <Link
                  href={project.source_code_link}
                  target='_blank'
                  className='btn btn-primary'
                >
                  Visit Here
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
