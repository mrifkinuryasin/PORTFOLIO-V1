import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md' : 'bg-primary'
      } text-white p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Your Name</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-primary w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-all duration-300`}
        >
          <li><a href="#home" className="block p-2 hover:text-accent transition-colors">Home</a></li>
          <li><a href="#about" className="block p-2 hover:text-accent transition-colors">About</a></li>
          <li><a href="#services" className="block p-2 hover:text-accent transition-colors">Services</a></li>
          <li><a href="#portfolio" className="block p-2 hover:text-accent transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="block p-2 hover:text-accent transition-colors">Contact</a></li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default NavBar;