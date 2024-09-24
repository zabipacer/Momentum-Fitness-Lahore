import { useState } from 'react';
import './Navbar.css'; // Import custom CSS for the animation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0d1b2a] shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Gym Name */}
        <div className="flex items-center">
          <img 
            src="/Logo.jpg" 
            alt="Gym Logo" 
            className="h-12 mr-2 rounded-full" 
          />
          <span className="text-[#ff0032] text-lg sm:text-xl md:text-2xl font-bold tracking-wide">Momentum Fitness Lahore</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul 
          className={`${
            isOpen ? 'menu-open' : 'menu-closed'
          } z-40 md:flex md:space-x-6 text-white absolute md:relative top-16 left-0 w-full bg-[#0d1b2a] md:bg-transparent md:w-auto md:top-auto md:left-auto md:items-center p-4 md:p-0`}
        >
          <li><a href="#home" className="block md:inline hover:text-[#ff0032]">Home</a></li>
          <li><a href="#process" className="block md:inline hover:text-[#ff0032]">Our Process</a></li>
          <li><a href="#gallery" className="block md:inline hover:text-[#ff0032]">Gallery</a></li>
          <li><a href="#about" className="block md:inline hover:text-[#ff0032]">About Us</a></li>
          <li><a href="#facts" className="block md:inline hover:text-[#ff0032]">Gym Facts</a></li>
          <li><a href="#pricing" className="block md:inline hover:text-[#ff0032]">Pricing</a></li>
          <li><a href="#contact" className="block md:inline hover:text-[#ff0032]">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

