
const HeroSection = () => {
  
  

  return (
    <div 
      className="relative bg-[#0d1b2a] h-screen flex items-center justify-center"
      
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/9A4636B3FC39EA904F4F7254C7E348A4_video_dashinit.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/*  Logo */}
        <div
         
          className="mx-auto mb-6 rounded-full cursor-pointer transition-all duration-300 shadow-[0_0_30px_5px_rgba(255,0,50,0.6)]"
          style={{ width: '112px', height: '112px' }} 
          
        >
          <img src="/Logo.jpg" alt="Gym Logo" className="h-28 w-28 rounded-full" />
        </div>

        {/* Inspirational Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#ff0032]">
          Unleash the Power Within!
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Train harder, get stronger, and unlock your true potential at Thunder Gym.
        </p>

        {/* Call to Action Button */}
        <a
          href="#pricing"
          className="bg-[#ff0032] hover:bg-white hover:text-[#ff0032] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
        >
          Join the Revolution
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
