import './index.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('hasSeenIntro');
  });
  return (
    <div className="min-h-screen relative bg-[var(--color-bg-primary)] selection:bg-[#818cf8]/20 selection:text-[#818cf8]">
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main className="w-full max-w-3xl mx-auto px-6 flex flex-col items-start gap-32 pt-[140px] pb-32">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
