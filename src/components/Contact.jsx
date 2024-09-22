import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-[#0d1b2a] py-16">
      <div className="container mx-auto px-20 flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Information */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-4">
            Contact Us
          </h2>
          <p className="text-lg mb-6 text-white">We'd love to hear from you!</p>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <FaPhone className="text-[#ff0032] mr-2" size={24} />
              <span className="text-white">+92 123 456 7890</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#ff0032] mr-2" size={24} />
              <span className="text-white">info@momentumfitness.com</span>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-[#ff0032] mr-2" size={24} />
              <span className="text-white">123 Gym St, Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form className="bg-[#1b2a3a] p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded border border-gray-300"
                rows="4"
                required
              ></textarea>
            </div>
            <button className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
