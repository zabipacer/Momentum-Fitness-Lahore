import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Optional: Close button icon

const PricingSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // Manage form visibility

  const pricingPlans = [
    {
      title: 'Monthly Package',
      prices: [
        { duration: 'Monthly', amount: 7000 },
        { duration: 'Registration', amount: 3000 },
        { duration: '6 Months', amount: 27000 },
      ],
    },
    {
      title: 'Gold Package',
      prices: [
        { duration: 'Quarterly Package', amount: 24000 },
        { duration: 'Registration', amount: 3000 },
        
      ],
    },
    {
      title: 'Personal Trainer',
      prices: [{ duration: 'Monthly (Might change depending on the type of training)', amount: 15000 }],
    },
    {
      title: 'Half Yearly Package',
      prices: [{ duration: '6 Months', amount: 36000 },
        { duration: 'Registration', amount: 0 }
      ],
    },
  ];

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <section id="pricing" className="bg-[#0d1b2a] py-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-8">Pricing Plans</h2>
          <p className="text-lg mb-12 text-white">Choose the right plan for you</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-[#1b2a3a] p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-bold text-[#ff0032] mb-4">{plan.title}</h3>
                {plan.prices.map((price, idx) => (
                  <div key={idx} className="mb-6 border-b pb-4">
                    <h4 className="text-2xl text-white">
                      ₨ {price.amount} <span className="text-sm text-gray-400">/{price.duration}</span>
                    </h4>
                    <button 
                      onClick={openForm}
                      className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 my-4"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Pop-up */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-[#1b2a3a] p-6 rounded-lg shadow-lg max-w-sm w-full mx-auto transition-transform transform scale-95 opacity-0 animate-form">
            <button onClick={closeForm} className="absolute top-2 right-2 text-white hover:text-gray-300">
              <FaTimes size="1.5rem" />
            </button>
            <form
              className="w-full p-3"
              action="https://formspree.io/f/mblrvrwk"
              method="POST"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 rounded border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 rounded border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-3 rounded border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 rounded border border-gray-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button  className="bg-[#ff0032] hover:bg-white  hover:text-[#ff0032] text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tailwind animation for form pop-up */}
      <style >{`
        @keyframes form {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-form {
          animation: form 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default PricingSection;
