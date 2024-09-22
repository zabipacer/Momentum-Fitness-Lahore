import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Testimonial.css'; // Ensure to create this CSS file for animations

const testimonials = [
  {
    text: "Momentum Fitness has completely transformed my fitness journey. The trainers are incredibly supportive!",
    name: "Sarah J.",
  },
  {
    text: "I've seen amazing results with the hypertrophy training program. Highly recommend!",
    name: "Michael P.",
  },
  {
    text: "The community here is fantastic! I love coming to workouts and meeting new friends.",
    name: "Jessica L.",
  },
  {
    text: "The facilities are top-notch, and the trainers are always there to guide you.",
    name: "Daniel R.",
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
