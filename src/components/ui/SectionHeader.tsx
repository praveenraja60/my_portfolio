import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "split";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={
        align === "split"
          ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          : "max-w-2xl"
      }
    >
      <div className="max-w-2xl">
        <motion.p
          variants={fadeUp}
          className={light ? "eyebrow-light" : "eyebrow"}
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className={`mt-4 font-display text-display-lg ${
            light ? "text-cream" : "text-charcoal"
          }`}
        >
          {title}
        </motion.h2>
      </div>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={`max-w-md font-sans text-sm font-light leading-7 md:text-base ${
            light ? "text-charcoal-mist md:text-right" : "text-charcoal-mute"
          }`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
