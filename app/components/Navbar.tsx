import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 sticky top-0 z-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href='/projects'>PROJECTS</Link>
            </li>
            <li>
              <Link href='/experiences'>EXPERIENCE</Link>
            </li>
            <li>
              <Link href='/skills'>SKILLS</Link>
            </li>
          </ul>
        </div>

        <Link href='/'>
          <Image src={'/hari.svg'} alt='hari' width={200} height={200} />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/projects'>PROJECTS</Link>
          </li>
          <li>
            <Link href='/experiences'>EXPERIENCE</Link>
          </li>
          <li>
            <Link href='/skills'>SKILLS</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link className='btn' href='/contacts'>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
