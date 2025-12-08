import { motion } from "framer-motion";
import { AnimatedSkillsHeader } from "./AnimatedSkillsHeader";
import "../styles/cube.css";

const skillCategories = {
  coretechnologies: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Freshworks",
      icon: "https://logos-world.net/wp-content/uploads/2021/02/Freshworks-Logo.png",
    },
  ],
  languages: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  frontend: [
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Reactstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { name: "Supabase", icon: "https://supabase.com/images/logo-dark.png" },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    { name: "Trae", icon: "/Assets/trae.jpg" },
    { name: "Antigravity", icon: "/Assets/Antigravity.png" },
  ],
  aitools: [
    {
      name: "Perplexity",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png",
    },
    { name: "Cursor", icon: "https://cursor.sh/brand/icon.svg" },
    { name: "Augment", icon: "https://www.augmentcode.com/favicon.ico" },
    {
      name: "Copilot",
      icon: "https://github.githubassets.com/images/modules/site/copilot/copilot-logo.svg",
    },
    {
      name: "Gemini",
      icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    },
    { name: "Famous AI", icon: "https://famous.ai/famous_tp_black.png" },
    { name: "Bolt", icon: "/Assets/bolt.jpg" },
    {
      name: "Amazon Q",
      icon: "/Assets/amazonq.jpg",
    },
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSkillsHeader title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], idx) => {
            const shouldRotate = ["coretechnologies"].includes(category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize border-b-2 border-indigo-500 pb-2">
                  {category === "frontend"
                    ? "Front-End Development"
                    : category === "backend"
                    ? "Back-End Development"
                    : category === "aitools"
                    ? "AI"
                    : category === "coretechnologies"
                    ? "Core Technologies"
                    : category === "languages"
                    ? "Programming Languages"
                    : category === "tools"
                    ? "Development & Collaboration Tools"
                    : category}
                </h3>
                {category === "coretechnologies" ? (
                  <div className="flex justify-center items-center h-32">
                    <div
                      className="relative w-20 h-20"
                      style={{ perspective: "200px" }}
                    >
                      <div
                        className="absolute inset-0 animate-spin"
                        style={{
                          transformStyle: "preserve-3d",
                          animation: "rotateCube 8s infinite linear",
                        }}
                      >
                        {skills.map((skill, index) => (
                          <div
                            key={index}
                            className="absolute w-20 h-20 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center rounded-lg shadow-md"
                            style={{
                              transform: `rotateY(${
                                index * 90
                              }deg) translateZ(40px)`,
                            }}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="h-8 w-8 mb-1"
                            />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                              {skill.name.split(" ")[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 transition-all"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="h-12 w-12 mb-2"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                Master of Computer Applications (MCA)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                PSG College of Arts and Science, Coimbatore
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                July 2017 - May 2019
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                Bachelor of Computer Science (B.Sc.)
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Kamaraj College, Thoothukudi
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                August 2014 - April 2017
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
