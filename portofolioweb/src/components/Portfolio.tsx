import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Portfolio</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-4 rounded shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold text-primary mt-4">Project 1</h3>
            <p className="text-secondary mt-2">A modern e-commerce website built with React and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 2"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold text-primary mt-4">Project 2</h3>
            <p className="text-secondary mt-2">A portfolio website with smooth animations and responsive design.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 3"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold text-primary mt-4">Project 3</h3>
            <p className="text-secondary mt-2">A dashboard application for data visualization using TypeScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;