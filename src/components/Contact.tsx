"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Type event as React.ChangeEvent for input/textarea
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Type event as React.FormEvent for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="text-center space-y-10 py-20 px-4 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 animate-[fadeIn_1s_ease-in-out]">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-800 max-w-md mx-auto animate-[fadeIn_1s_ease-in-out]">
        I’d love to hear from you! Fill out the form below or connect with me on social media.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6 p-6 bg-white rounded-xl shadow-md"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
            Enter   Message
            </label>
            
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-y"
              placeholder="Your Message"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Send Message
        </button>
      </form>

      {/* Facet normalizes to 3
      {/* Social Links */}
      <div className="flex justify-center gap-8 text-xl">
        <a
          href="shayanshaikh@gmail.com"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
          aria-label="Email"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
          Email
        </a>
        <a
          href="https://github.com/Abeersk"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
          aria-label="GitHub"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🐙</span>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abeer-shaikh-431087381/"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">💼</span>
          LinkedIn
        </a>
      </div>
    </section>
  );
}