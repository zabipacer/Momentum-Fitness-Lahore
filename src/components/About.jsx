import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-[#0d1b2a] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image on Left */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img 
            src="/public/About.jpg" 
            alt="Gym Interior" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text on Right */}
        <div className="md:w-1/2 w-full md:pl-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-6">
            About
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl mb-6">
            Since 2019, Momentum Fitness Lahore has been a driving force in redefining fitness journeys. We believe in more than just working out; we believe in creating a balanced, powerful, and enduring lifestyle. With world-class trainers, advanced equipment, and a personalized approach, we guide you through every step of your transformation. Momentum Fitness is where passion meets progress—let’s take that first step together!
          </p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
