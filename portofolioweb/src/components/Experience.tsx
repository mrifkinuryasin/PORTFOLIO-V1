import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Tech Startup',
      duration: 'Jun 2023 - Aug 2023',
      description: 'Developed responsive websites using React and Tailwind CSS.',
    },
    {
      title: 'Robotics Assistant',
      company: 'UTDI Robotics Club',
      duration: 'Jan 2024 - Present',
      description: 'Assisted in building autonomous robots with Arduino and ROS.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#add8e6]/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-accent text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;