import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-gray-800 text-white"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Crafting Digital Masterpieces
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I'm <span className="font-semibold">Your Name</span>, a passionate web developer specializing in creating seamless, modern, and impactful digital experiences.
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Let's Collaborate
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;