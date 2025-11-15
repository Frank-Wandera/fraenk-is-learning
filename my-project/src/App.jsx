import { useState } from 'react'
import Navigation from './components/layout/Navigation'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import HeroShowcase from './components/sections/HeroShowcase'
import Features from './components/sections/Features'
import Gallery from './components/sections/Gallery'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import './App.css'

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Hero />
      <HeroShowcase />
      <Gallery />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
