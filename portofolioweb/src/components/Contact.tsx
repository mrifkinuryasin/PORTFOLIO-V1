import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-accent text-center mb-12"
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
            <h3 className="text-2xl font-semibold text-accent mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-yellow-300" />
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-accent">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-yellow-300" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-accent">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-yellow-300" />
                <a href="https://instagram.com/yourhandle" className="text-gray-600 hover:text-accent">
                  @yourhandle
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-6 h-6 text-yellow-300" />
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-accent">
                  @yourusername
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
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-300/20 transition"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-300/20 transition"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-300/20 transition h-32"
              />
              <button className="w-full bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
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