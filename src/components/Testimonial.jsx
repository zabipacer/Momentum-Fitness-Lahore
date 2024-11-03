import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Testimonial.css'; // Ensure to create this CSS file for animations

const testimonials = [
  {
    text: "I recently had the opportunity to experience Momentum Fitness gym and wanted to share my thoughts on the overall experience. The gym undoubtedly boasts an impressive array of equipment, leaving no stone unturned in providing a comprehensive workout environment. The presence of highly trained professionals adds a layer of expertise and guidance that greatly enhances the fitness journey.",
    name: "Rana Kamran",
  },
  {
    text: "Absolutely love Momentum! The atmosphere is incredibly motivating, and the gym is always clean and well-equipped. The instructors are top-notch—especially Suleman bhai, who brings energy and expertise to every activity. His personalized attention and support have really helped me reach my fitness goals. The community is welcoming and encouraging, making every workout a great experience. Highly recommend Momentum to anyone looking to elevate their fitness journey!",
    name: "Naveed Munawar",
  },
  {
    text: "Hands down one of the best gym in the area. While I was visiting Pakistan I got stuck there due to the pandemic and I had a chance to workout in Momentum fitness. It was a pleasant experience for me and I would highly recommend this gym. Mr Jahanzeb and Mr Mohsin have always been so professional with their clients.",
    name: "Haris Shan",
  },
  {
    text: "Best gym in JT⭐ an excellent experience overall including the staff, the owner and definitely the gym👌",
    name: "Hassan Sohail",
  },
  {
    text: "An excellent place to achieve your fitness goals in such an environment where highly experienced and qualified trainers are available.",
    name: "Muhammad Ikhlaq",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#0d1b2a] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-8">
          What Our Members Say
        </h2>
        
        <div className="testimonial-container">
          <div className="testimonial">
            <CSSTransition
              in={true}
              key={currentIndex}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="bg-[#1b2a3a] p-4 rounded-lg shadow-lg">
                <p className="text-lg md:text-xl text-white mb-2">
                `{testimonials[currentIndex].text}`
                </p>
                <p className="text-md font-bold text-[#ff0032]">
                  - {testimonials[currentIndex].name}
                </p>
              </div>
            </CSSTransition>

            <CSSTransition
              in={true}
              key={(currentIndex + 1) % testimonials.length}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="bg-[#1b2a3a] p-4 rounded-lg shadow-lg mt-4">
                <p className="text-lg md:text-xl text-white mb-2">
                  `{testimonials[(currentIndex + 1) % testimonials.length].text}`
                </p>
                <p className="text-md font-bold text-[#ff0032]">
                  - {testimonials[(currentIndex + 1) % testimonials.length].name}
                </p>
              </div>
            </CSSTransition>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button 
            className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
            onClick={prevTestimonial}
          >
             Prev
          </button>
          <button 
            className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
            onClick={nextTestimonial}
          >
            Next 
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
