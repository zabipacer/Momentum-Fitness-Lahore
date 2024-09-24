import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: 'Standard Package',
      prices: [
        { duration: 'Monthly', amount: 6000 },
        { duration: '3 Months', amount: 15000 },
        { duration: '6 Months', amount: 27000 },
      ],
    },
    {
      title: 'Gold Package',
      prices: [
        { duration: 'Monthly', amount: 8000 },
        { duration: '3 Months', amount: 20000 },
        { duration: '6 Months', amount: 40000 },
      ],
    },
    {
      title: 'Personal Trainer',
      prices: [
        { duration: 'Monthly', amount: 25000 },
      ],
    },
    {
      title: 'Gym Bar Charges',
      prices: [
        { duration: 'Monthly', amount: 5000 },
      ],
    },
  ];

  return (
    <section id='pricing' className="bg-[#0d1b2a] py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-8">
          Pricing Plans
        </h2>
        <p className="text-lg mb-12 text-white">Choose the right plan for you</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-[#1b2a3a] p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-[#ff0032] mb-4">
                {plan.title}
              </h3>
              {plan.prices.map((price, idx) => (
                <div key={idx} className="mb-6 border-b pb-4">
                  <h4 className="text-2xl text-white">
                    ₨ {price.amount} <span className="text-sm text-gray-400">/{price.duration}</span>
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {plan.title} {price.amount}/{price.duration}
                  </p>
                  <button formAction='#contact' className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
