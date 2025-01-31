import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
];

const sliderSkills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Freshworks",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA51BMVEVHcExA0euyY8SmZMT4qAtU3vP/qwDAY8ZQ7ff6kQ1Do+ruWSKnZMT4swRZ8vZghNCtY8X/qQD/qABZ8vbuWiTrVybuWiRFpOyhY8TFVJy9Zcz/qAD/vAAEx/wxd7JFpO3UOk1Y8vbvWiOK4FUlwXCbZcNb9PaP4VMawG9c0GL/swAlwmkVxPjrVCj1tg2F4FesZMGU1lAp1vfrgx8+k9g73/bgRTzVRUdJ6PXcwyO1yT8wr/E2npAyh6Q3hsQaxsYbxJ+6ikrLTmBqbrsVxeTJT4xX1F5Qc7Y9qe69b1E2pa6+dVAytHwly6i3AAAAG3RSTlMAWD8l8y/S/uUp6OXdTHqmZIVgxYdVwsOIwYjpSXbWAAABaklEQVQokV3S53aCQBAF4JXYSzS9UMQFREU0hNi7Jqa+//NkZnbAnNyfft6763GFSJI7vyq2OO12u1XMpHRepE8Yps+mue3WuIWUwKhvmuamc5znyTItlukIKpBXt9P1DZ0NKwxA26DTdWY9xBwd0mcx+9sAzI8MwmJaMeEbGzfAzeHM0AEzi7SEhwUumjM3CMvN5seiT1l8BWzDAazqItdM87IEUgZFxHpK1ioxxzdwVRd3TGvLchOD2ygskwFZSz7PcSKDVnWhFjGpObMTKsKisuHOUKswu1Zm/SS9z5gxK+psFt8l2o+zvJoX996BbEW/L9rZdjhgvBCa53mHd8CjH82/bTA54CNLQlQ9ytPEpkwkNnt0pBANZQVlUEzwEv/rKhnjWMowS6vqkZyRFfZclGFMWFLPS0MrvHFRyhhXa8m71BALdBtMOOidDJarqhoSyjhfEn/TwOpYWeVG/I/2+FABuL0+tX4BGUpaBFUGsncAAAAASUVORK5CYII=", // Freshworks logo URL
  },
];

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rotateSliderSkills = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderSkills.length);
    };

    const interval = setInterval(rotateSliderSkills, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Container with two equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* First Column - Skills List with Image Only */}
          <div>
            <motion.h3
              className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Primary Skills
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex flex-col items-center space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12"
                  />
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Second Column - Slider Skills */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <motion.img
                key={sliderSkills[activeIndex].name}
                src={sliderSkills[activeIndex].icon}
                alt={sliderSkills[activeIndex].name}
                className="h-24 w-24"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="absolute bottom-4 text-xl font-bold text-gray-900 dark:text-white">
                {sliderSkills[activeIndex].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
