import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Intro from '@/components/intro';
import About from '@/components/about';
import Work from '@/components/work';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--dark)] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
