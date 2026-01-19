'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sections from '@/components/Sections';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sections />
      <About />
      <Contact />
    </main>
  );
}
