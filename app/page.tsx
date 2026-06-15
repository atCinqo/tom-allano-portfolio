import Nav      from './components/Nav';
import Hero     from './components/Hero';
import Projects from './components/Projects';
import Contact  from './components/Contact';

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
