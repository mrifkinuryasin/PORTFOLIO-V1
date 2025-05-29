import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-primary">Web Development</h3>
            <p className="text-secondary mt-2">Building responsive and dynamic websites using modern technologies.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-primary">UI/UX Design</h3>
            <p className="text-secondary mt-2">Creating intuitive and visually appealing user interfaces.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-primary">Consulting</h3>
            <p className="text-secondary mt-2">Providing expert advice on tech solutions and project planning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;