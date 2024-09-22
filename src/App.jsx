import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import UniqueSection from './components/Unique'
import ProcessSection from './components/Process'
import StatsSection from './components/Stat'
import AboutSection from './components/About'
import WhyChooseUsSection from './components/Why'
import ImageGridSection from './components/Gallery'
import SpecializationSection from './components/Specialized'
import TestimonialSection from './components/Testimonial'
import PricingSection from './components/Pricing'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
  
    <>
<Navbar/>
<HeroSection/>
<UniqueSection/>
<ProcessSection/>
<StatsSection/>
<AboutSection/>
<WhyChooseUsSection/>
<ImageGridSection/>
<SpecializationSection/>
<TestimonialSection/>
<PricingSection/>
<ContactSection/>
<Footer/>
    </>
  )
}

export default App
