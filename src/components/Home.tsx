import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Praveen Rajkumar</span>
            <span className="block text-indigo-600 dark:text-indigo-400">Frontend Developer</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            3+ years of experience in designing and developing web applications using React, Angular, and modern frontend technologies.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get in touch
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#experience" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                View my work
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/praveen-rajkumar-59163416b" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:praveenraja60@gmail.com" className="text-gray-400 hover:text-gray-500">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}