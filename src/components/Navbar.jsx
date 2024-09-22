import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0d1b2a] shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Gym Name */}
        <div className="flex items-center">
          <img src="/public/Logo.jpg" alt="Gym Logo" className="h-12 mr-2 rounded-full" />
          <span className="text-[#ff0032] text-2xl font-bold tracking-wide">Momentum Fitness Lahore</span>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-6 text-white">
          <li><a href="#home" className="hover:text-[#ff0032]">Home</a></li>
          <li><a href="#process" className="hover:text-[#ff0032]">Our Process</a></li>
          <li><a href="#gallery" className="hover:text-[#ff0032]">Gallery</a></li>
          <li><a href="#about" className="hover:text-[#ff0032]">About Us</a></li>
          <li><a href="#facts" className="hover:text-[#ff0032]">Gym Facts</a></li>
          <li><a href="#pricing" className="hover:text-[#ff0032]">Pricing</a></li>
          <li><a href="#contact" className="hover:text-[#ff0032]">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
