import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Crafting responsive and high-performance websites using cutting-edge technologies like React and TypeScript to boost your online presence.',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually stunning interfaces that enhance user engagement and drive business conversions.',
    },
    {
      title: 'Tech Consulting',
      description: 'Providing strategic guidance to optimize your tech stack, streamline development, and achieve your project goals efficiently.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary text-center">{service.title}</h3>
              <p className="text-secondary mt-2 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;