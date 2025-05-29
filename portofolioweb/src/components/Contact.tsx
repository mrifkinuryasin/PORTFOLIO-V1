import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Contact Me</h2>
        <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or inquiries!
        </p>
        <div className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="w-full p-3 mb-4 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded border" />
          <textarea placeholder="Message" className="w-full p-3 mb-4 rounded border h-32"></textarea>
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;