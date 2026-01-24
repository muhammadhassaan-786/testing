import Hero from '@/components/Hero';
import MovementIntro from '@/components/MovementIntro';
import Objectives from '@/components/Objectives';
import Sections from '@/components/Sections';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <MovementIntro />
      <Objectives />
      <Sections />
      <About />
      <Contact />
    </>
  );
}
