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
      <div className={`transition-opacity duration-1000 w-full flex flex-col ${showIntro ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        {/* Full width container, spacing is handled purely by Sections padding */}
        <main className="w-full flex flex-col">
          <Hero />
          <div className="w-full bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
            <About />
          </div>
          <Skills />
          <div className="w-full bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
            <Projects />
          </div>
          <Education />
          <div className="w-full bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)]">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
