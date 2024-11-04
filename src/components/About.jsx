import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-[#0d1b2a] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image on Left */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img 
            src="/About.jpg" 
            alt="Gym Interior" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text on Right */}
        <div className="md:w-1/2 w-full md:pl-12  px-5 md:px-0 ">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-6">
            About Momentum Fitness Lahore
          </h2>

          {/* Paragraph */}
          <p className="text-[1rem] sm:py-5 md:py-0 px-2 md:px-0 md:text-xl mb-6 text-justify">
        Momentum Fitness Lahore is more than a gym—it’s a community where transformation happens. Since opening our doors in 2019, we’ve focused on creating a fitness environment that encourages growth, confidence, and progress. With state-of-the-art equipment, experienced trainers, and a supportive community, we help our members meet and exceed their goals. At Momentum Fitness, we specialize in customized fitness plans tailored to your needs, whether you're aiming for weight loss, muscle gain, or enhanced endurance. Join us today and experience what makes us one of the top fitness centers in Lahore!   </p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="bg-[#ff0032] mt-10 hover:bg-white hover:text-[#ff0032] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
