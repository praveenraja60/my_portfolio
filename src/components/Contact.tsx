import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Let's discuss your project
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-3 text-gray-600 dark:text-gray-300">
                  praveenraja60@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-3 text-gray-600 dark:text-gray-300">
                  +91 9566502092
                </span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <a 
                  href="https://linkedin.com/in/praveen-rajkumar-59163416b"
                  className="ml-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}