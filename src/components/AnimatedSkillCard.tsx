import { motion } from "framer-motion";

interface AnimatedSkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

export function AnimatedSkillCard({
  category,
  skills,
  index,
}: AnimatedSkillCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.1 * index,
        staggerChildren: 0.05,
        delayChildren: 0.2 + 0.1 * index,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
        {category}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            variants={skillVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              transition: { duration: 0.2 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
