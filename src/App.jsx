import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UniqueSection from './components/Unique';
import ProcessSection from './components/Process';
import StatsSection from './components/Stat';
import AboutSection from './components/About';
import WhyChooseUsSection from './components/Why';
import ImageGridSection from './components/Gallery';
import SpecializationSection from './components/Specialized';
import TestimonialSection from './components/Testimonial';
import PricingSection from './components/Pricing';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  const whatsappNumber = "030241234540"; // Replace with the actual phone number

  return (
    <>
      <Navbar />
      <HeroSection />
      <UniqueSection />
      <ProcessSection />
      <StatsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ImageGridSection />
      <SpecializationSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}

export default App;
