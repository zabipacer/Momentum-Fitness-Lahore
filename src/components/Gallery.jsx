import React from 'react';

const ImageGridSection = () => {
  const images = Array.from({ length: 8 }, (_, index) => `/${index + 1}.jpg`);

  return (
    <section id='gallery' className="bg-[#0d1b2a] py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] text-center mb-12">
          Momentum Fitness Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {images.map((src, index) => (
            <div key={index} className="bg-[#1b2a3a] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={src} 
                alt={`Facility ${index + 1}`} 
                className="w-full h-32 sm:h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGridSection;
