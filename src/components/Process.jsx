import React from 'react';
import { FaBullseye, FaDumbbell, FaChartLine, FaMedal } from 'react-icons/fa';

const ProcessSection = () => {
  return (
    <section id='process' className="bg-[#14233c] text-white py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-12">
          Our Process
        </h2>

        {/* Process Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Step 1 */}
          <div className="bg-[#0d1b2a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaBullseye className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Set Your Goals</h3>
            <p>We assess your fitness aspirations and customize a plan that fits your needs.</p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-[#0d1b2a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaDumbbell className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Commit to the Grind</h3>
            <p>Hard work is the only shortcut. Our expert trainers keep you motivated and focused.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0d1b2a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaChartLine className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Evolve Every Day</h3>
            <p>With each session, you’ll see improvement in strength, stamina, and confidence.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#0d1b2a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMedal className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Own Your Success</h3>
            <p>Surpass your goals and embrace the best version of yourself. Your destiny is in your hands.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
