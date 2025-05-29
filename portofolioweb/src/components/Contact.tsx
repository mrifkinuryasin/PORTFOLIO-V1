import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Let's Collaborate!</h3>
            <p className="text-secondary mb-6">
              Whether you have a project in mind or just want to say hi, I'm all ears (or rather, all code). Reach out, and let's create something amazing together!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-accent">[Email Icon]</span>
                <a href="mailto:your.email@example.com" className="text-secondary hover:text-accent">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">[Phone Icon]</span>
                <a href="tel:+1234567890" className="text-secondary hover:text-accent">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">[Website Icon]</span>
                <a href="https://yourwebsite.com" className="text-secondary hover:text-accent">
                  yourwebsite.com
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 transition h-32"
              ></textarea>
              <button className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;