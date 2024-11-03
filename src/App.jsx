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
  const whatsappNumber = "923024123454"; // Replace with the actual phone number

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
        It seems the issue might be related to either (1) how the link is opening on the client’s phone or (2) possible formatting issues with the number. To improve the reliability of the WhatsApp button, here are some suggestions:

1. Ensure the Phone Number Format: WhatsApp requires the number to be in international format without spaces or special characters. Check that the number follows the correct format:

const whatsappNumber = "923024123454"; // Example for Pakistan, replace with correct format

For international numbers, 92 is Pakistan's country code, and the 0 should be removed at the start of the local number.


2. Open WhatsApp in a New Tab Using a Proper URL: Try the URL in this format:

href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}

This can sometimes work better on some devices than the wa.me link.


3. Alternative Button Code for Consistent Functionality: Here’s a refined version of the button code with accessibility and compatibility tweaks:

{/* WhatsApp Floating Button */}
<a
  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
>
  <FaWhatsapp aria-hidden="true" className="text-3xl" />
</a>


4. Test with Different Browsers and Devices: Ensure that the button works across different browsers (e.g., Safari on iPhone) and devices. Some devices may restrict external links, so testing on various configurations can confirm compatibility.


5. Consider Browser Console Logs: If the client can check the console logs on their device, any errors related to blocked links or permissions could reveal more information.



This approach should ensure more consistent behavior across different devices and improve the chances of it working on the client’s phone as well.


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
