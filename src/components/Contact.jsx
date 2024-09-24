
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-[#0d1b2a] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Information */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] mb-4">
            Contact Us
          </h2>
          <p className="text-lg mb-6 text-white">We'd love to hear from you!</p>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center">
              <FaPhone className="text-[#ff0032] mr-4" size={24} />
              <span className="text-white">+92 302 4123454</span>
            </div>
            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="text-[#ff0032] mr-4" size={24} />
              <span className="text-white">momentumfitnesslhr@gmail.com</span>
            </div>
            {/* Address */}
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff0032] mr-4 " size={24} />
              <p className="text-white w-60 text-sm  text-justify">287H2, Abdul Haque Rd, Opposite Emprioum Mall Johar Town, Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form className="bg-[#1b2a3a] p-6 rounded-lg shadow-lg max-w-sm mx-auto md:max-w-full "  action="https://formspree.io/f/mblrvrwk"
              method="POST">
            <div className="mb-4">
              <input
                id='name'
                type="name"
                name='name'
                placeholder="Name"
                className="w-full p-3 rounded border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
              id='email'
              name='email'
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
              name='phone'
              id='phone'
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
              name='message'
              id='message'
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
