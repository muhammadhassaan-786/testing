import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sections from '@/components/Sections';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">
        <Hero />
        <Sections />
        <About />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
