import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-[#0a1c2a] border-t border-gray-700 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Get in Touch */}
          <div>
            <h4 className="font-bold text-lg mb-2">Get in Touch</h4>
            <p>If you have any questions, feel free to reach out!</p>
            <p>Email: <a href="mailto:info@momentumfitness.com" className="hover:underline">info@momentumfitness.com</a></p>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Momentum Fitness. All rights reserved. | Developed by 
            <a href="https://portfolio-phi-green-65.vercel.app/" className="text-[#ff0032] hover:underline"> Zuhaib Zulfiqar</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer