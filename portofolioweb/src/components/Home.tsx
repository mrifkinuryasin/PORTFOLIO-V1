import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary">Welcome to My Portfolio</h2>
        <p className="text-lg text-secondary mt-4">I'm a passionate developer creating amazing digital experiences.</p>
        <a href="#contact" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded hover:bg-secondary">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Home;