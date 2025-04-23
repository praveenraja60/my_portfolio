import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin, Mail } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

export function Home() {
  return (
    <section
      id="home"
      className="pt-20 pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <div className="block">
              <AnimatedText text="Hi, I'm Praveen Rajkumar" delay={200} />
            </div>
            <div className="block text-indigo-600 dark:text-indigo-400">
              <AnimatedText text="Frontend Developer" delay={1000} />
            </div>
          </h1>
          <div className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            <AnimatedText
              text="Experienced SDE-2 specializing in JavaScript, TypeScript, and React.js, with a strong focus on modern front-end development. Skilled in state management (Redux) and building scalable, high-performance UI using Tailwind CSS, Styled Components, and Material UI. Passionate about creating responsive, maintainable, and scalable web applications using the latest technologies."
              delay={1800}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#experience"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                View my work
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/praveen-rajkumar-59163416b"
              className="text-gray-400 hover:text-gray-500"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:praveenraja60@gmail.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
