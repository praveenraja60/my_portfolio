import { motion } from "framer-motion";

interface AnimatedSkillsHeaderProps {
  title: string;
}

export function AnimatedSkillsHeader({ title }: AnimatedSkillsHeaderProps) {
  const letters = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const line = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-center mb-16">
      <motion.h2
        className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"
        variants={line}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}
