import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'CEO, TechCo',
      comment: 'Amazing work on our website redesign! Highly recommend.',
    },
    {
      name: 'John Smith',
      role: 'Project Manager',
      comment: 'Delivered a robotics solution beyond our expectations.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#add8e6]/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-accent text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
              <p className="text-accent font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;