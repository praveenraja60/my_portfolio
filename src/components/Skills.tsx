import React from 'react';

const skills = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 90
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 85
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 85
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 80
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    level: 75
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 70
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    level: 85
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: 80
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 75
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="h-12 w-12"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}