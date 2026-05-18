import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Projects from './components/projects.jsx'
import Experience from './components/experience.jsx'
import Contact from './components/contact.jsx'
import ClickSpark from './components/clickSpark.jsx'
// import Lanyard from './components/lanyard.jsx'
import MagicBento from './components/MagicBento.jsx'
import LogoLoop from './components/LogoLoop.jsx'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function App() {
  return (
      <main className="bg-[#06090f] text-white">
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={20}
          sparkRadius={20}
          sparkCount={10}
          duration={1000}
        >
          <Navbar />
          <Hero />
          <Projects />
          <Experience />

          <section
            aria-label="Technologies and tools"
            style={{
              padding: '64px 0',
              background: 'linear-gradient(180deg, rgba(79,124,255,0.03), transparent)',
            }}
          >
            <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 18px' }}>
              <div style={{ marginBottom: 32 }}>  
                <p
                  style={{
                    color: '#4f7cff',
                    fontSize: 11,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    marginBottom: 12,
                  }}
                >
                  Technologies
                </p>
                <h2
                  style={{
                    color: '#e8eaf0',
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  My&nbsp;
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #4f7cff 0%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Technologies
                  </span>
                </h2>
                <div
                  style={{
                    width: 40,
                    height: 1,
                    background: 'linear-gradient(90deg, #4f7cff, #a78bfa)',
                    margin: '20px 0 0',
                  }}
                />
              </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ width: '100%', maxWidth: 960, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LogoLoop
                    logos={techLogos}
                    speed={90}
                    direction="left"
                    logoHeight={64}
                    gap={56}
                    hoverSpeed={0.16}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#4f7cff"
                    ariaLabel="Technology partners"
                  />
                </div>

                {/* subtle second row to add density on wide screens */}
                <div style={{ width: '100%', maxWidth: 860, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LogoLoop
                    logos={techLogos}
                    speed={70}
                    direction="right"
                    logoHeight={36}
                    gap={36}
                    hoverSpeed={0.1}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#4f7cff"
                    ariaLabel="Technology partners secondary"
                  />
                </div>
              </div>
            </div>
          </section>

          <Contact />
        </ClickSpark>
      </main>
  );
}

export default App;