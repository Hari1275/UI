import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
  return (
    <footer className='footer items-center p-4  '>
      <aside className='items-center grid-flow-col'>
        <Link href='/'>
          <Image src={'/HARIPRASAD_K.svg'} alt='hari' width={80} height={80} />
        </Link>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4  md:place-self-center md:justify-self-end'>
        <Link href={'https://github.com/Hari1275'} target='_blank'>
          <Image src='./github-mark.svg' width={40} height={40} alt='github' />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
