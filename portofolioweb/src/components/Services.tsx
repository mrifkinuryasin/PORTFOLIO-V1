import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern websites with React, Tailwind CSS, and more to enhance your digital presence.',
      icon: <Code className="w-12 h-12 text-yellow-300" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces using Figma and Adobe XD for seamless user experiences.',
      icon: <Palette className="w-12 h-12 text-yellow-300" />,
    },
    {
      title: 'Video Editing',
      description: 'Producing high-quality video content with Adobe Premiere and DaVinci Resolve for engaging visuals.',
      icon: <Video className="w-12 h-12 text-yellow-300" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#add8e6]/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-accent text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-accent text-center">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;