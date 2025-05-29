import React from 'react';
import NavBar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;