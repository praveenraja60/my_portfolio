import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
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
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Praveen Rajkumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}