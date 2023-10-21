import Card from './components/Card';
import Experience from './components/Experience';
import Hero from './components/Hero';
import { Contact } from './components/Contact';
import StarsCanvas from './components/canvas/Stars';
import Footer from './components/Footer';
import Tech from './components/Tech';

export default function Home() {
  return (
    <>
      <Hero />
      <Card />
      <Experience />
      <Tech />
      <div className='z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </>
  );
}
