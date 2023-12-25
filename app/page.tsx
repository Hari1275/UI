import Card from './components/Card';
import Experience from './components/Experience';
import Hero from './components/Hero';
import { Contact } from './components/Contact';
import StarsCanvas from './components/canvas/Stars';
import Footer from './components/Footer';
import Tech from './components/Tech';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='p-4 z-0 md:pt-4 md:pb-4'>
        <Card />
      </div>
      <div className='p-4 z-0 md:pt-4 md:pb-4'>
        <Experience />
      </div>

      <div className='p-4 z-0 md:pt-4 md:pb-4'>
        <Tech />
      </div>
      <div className='z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
