import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <div className="app">
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  )
}

export default App
