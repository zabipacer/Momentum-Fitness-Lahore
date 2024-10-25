
const SpecializationSection = () => {
  const specializations = [
    { title: 'Hypertrophy Training', img: 'S11.jpg' },
    { title: 'Crossfit Training', img: '/S2.jpg' },
    { title: 'High Intensity Interval Training', img: '/S3.jpg' },
    { title: 'Strength Conditioning', img: '/8.png' },
    { title: 'Suspension Training', img: '/S6.jpg' },
    { title: 'TRX Training', img: '/S7.jpg' }
  ];

  return (
    <section className="bg-[#0d1b2a] py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff0032] text-center mb-12">
          We Are Specialized In
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-[#1b2a3a] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={spec.img} 
                alt={spec.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg md:text-xl font-bold text-[#ff0032]">
                  {spec.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
