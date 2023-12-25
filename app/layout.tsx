import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hariprasad ',
  description: 'I am full stack developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='light'>
      <body className={roboto.className}>
        <main className='max-w-7xl mx-auto min-h-screen relative'>
          <Navbar />
          {/* <div className='divider'></div> */}
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
