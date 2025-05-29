import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Site',
      description: 'A responsive online store built with React and Tailwind CSS.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Robotics Project',
      description: 'An autonomous robot using Arduino and ROS.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Video Portfolio',
      description: 'Edited video content for a local business promotion.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-accent text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-[#ffcccb]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={project.link}
                  className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400"
                >
                  View Details
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-accent">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;