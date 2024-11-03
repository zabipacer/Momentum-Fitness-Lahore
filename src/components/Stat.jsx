import React from 'react';
import { FaDumbbell, FaUsers, FaUserTie, FaRulerCombined } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section id='facts' className="bg-[#0d1b2a] py-16 text-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-12">
          Our Gym Stats
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Stat 1 */}
          <div className="bg-[#14233c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaRulerCombined className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-4xl font-bold mb-2">4445</h3>
            <p className="text-xl">SQFT</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#14233c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaDumbbell className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-4xl font-bold mb-2">60+</h3>
            <p className="text-xl">Machines</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#14233c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUserTie className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-4xl font-bold mb-2">7</h3>
            <p className="text-xl">Trainers</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#14233c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-[#ff0032] text-5xl mb-4 mx-auto" />
            <h3 className="text-4xl font-bold mb-2">2000+</h3>
            <p className="text-xl">Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
