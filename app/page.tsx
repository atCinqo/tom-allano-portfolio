import Nav     from './components/Nav';
import Hero    from './components/Hero';
import About   from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-ink">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
