import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design', 'Git'];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="w-full rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-secondary mb-6">
              I'm a dedicated web developer with over 3 years of experience building dynamic and user-centric applications. My passion lies in blending creativity with technology to deliver solutions that not only look great but also drive results. From startups to established businesses, I help bring visions to life through clean code and innovative design.
            </p>
            <h3 className="text-2xl font-semibold text-primary mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;