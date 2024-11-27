import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white">Praveen Rajkumar</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
            <button onClick={toggleDark} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              {isDark ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
            <a href="#experience" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a>
            <a href="#skills" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}