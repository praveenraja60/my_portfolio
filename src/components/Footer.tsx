import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: -20 }} // Starting above the screen
          animate={{ opacity: 1, y: 0 }} // Moving to its normal position
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com"
            className="text-gray-400 hover:text-gray-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/praveen-rajkumar-59163416b"
            className="text-gray-400 hover:text-gray-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="mailto:praveenraja60@gmail.com"
            className="text-gray-400 hover:text-gray-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }} // Starting below the screen
          animate={{ opacity: 1, y: 0 }} // Moving to its normal position
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Praveen Rajkumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
