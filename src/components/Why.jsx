
const WhyChooseUsSection = () => {
  return (
    <section className="bg-[#0d1b2a] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Text on Left */}
        <div className="md:w-1/2 w-full md:pr-12 mb-8 md:mb-0">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-6">
            Why Choose Us
          </h2>

          {/* Bullet Points */}
          <ul className="flex mx-auto list-disc md:flex-col list-inside text-[0.9rem] md:text-[1rem] mb-6 space-y-4 px-6 py-4 text-justify">
            <li><strong>Expertise:</strong> Our team of seasoned trainers specializes in weight loss and muscle gain programs.</li>
            <li><strong>Diverse Programs:</strong> From strength conditioning to fat loss group classes, we offer a diverse range of programs to cater to every fitness need.</li>
            <li><strong>State-of-the-Art Equipment:</strong> Train with the best – our international fitness equipment ensures a world-class workout experience.</li>
            <li><strong>Personalized Attention:</strong> Our personal trainers provide individualized guidance for a customized fitness journey.</li>
            <li><strong>Exclusive Amenities:</strong> Enjoy the luxury of an executive sitting lounge and lockers for our Gold Members.</li>
          </ul>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Join Us Today
          </a>
        </div>

        {/* Image on Right */}
        <div className="md:w-1/2 w-full">
          <img 
            src="/why.jpg" 
            alt="Gym Facilities" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
