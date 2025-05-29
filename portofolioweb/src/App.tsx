import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </motion.div>
    </div>
  );
};

export default App;