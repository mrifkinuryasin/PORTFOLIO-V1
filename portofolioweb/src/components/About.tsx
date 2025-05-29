import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">About Me</h2>
        <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
          I'm a web developer with a focus on creating user-friendly and visually appealing websites. With expertise in React, TypeScript, and modern frameworks, I bring ideas to life through clean and efficient code.
        </p>
      </div>
    </section>
  );
};

export default About;