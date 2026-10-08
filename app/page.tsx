import Header from '@/components/Header'; 
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Process />
      <About />
      <Clients />
      <Features />
      <Projects />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
}
