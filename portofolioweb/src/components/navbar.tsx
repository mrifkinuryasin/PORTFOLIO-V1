import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-primary w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300`}
        >
          <li><a href="#home" className="block p-2 hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="block p-2 hover:text-gray-300">About</a></li>
          <li><a href="#services" className="block p-2 hover:text-gray-300">Services</a></li>
          <li><a href="#portfolio" className="block p-2 hover:text-gray-300">Portfolio</a></li>
          <li><a href="#contact" className="block p-2 hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;