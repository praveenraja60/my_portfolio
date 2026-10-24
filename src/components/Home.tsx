import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import portrait from "../assets/portrait.png";
import { easeOut, fadeUp, staggerContainer } from "../lib/motion";
import { Atmosphere } from "./ui/Atmosphere";

const heroStats = [
  { value: "06+", label: "Years" },
  { value: "03", label: "Products" },
  { value: "Lead", label: "Engineer" },
];

export function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-black text-white"
    >
      <Atmosphere />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[88rem] items-end gap-10 px-4 pb-10 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-16 lg:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Lead Software Engineer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(4.2rem,9vw,8.4rem)] font-semibold leading-[0.86] tracking-[-0.055em] text-white"
          >
            Praveen
            <span className="block text-white/80">Rajkumar</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl font-sans text-base font-light leading-8 text-white/60 sm:text-lg"
          >
            Product development across HRMS, ticket systems, and supply
            platforms. Full-stack with React.js and Node.js — cinematic
            interfaces, reliable releases.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              Selected work
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Start a conversation
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + index * 0.07,
                  ease: easeOut,
                }}
              >
                <p className="font-display text-3xl font-semibold tracking-display text-white">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-white/45">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: easeOut }}
          className="relative"
        >
          <div className="frame relative shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]">
            <img
              src={portrait}
              alt="Praveen Rajkumar"
              className="aspect-[4/5] w-full object-cover object-[center_12%] sm:aspect-[5/6]"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 pt-24">
              <p className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-white/60">
                Digylax · Product Development
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-display">
                Available for leadership roles
              </p>
            </div>
          </div>
          <div
            className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full border border-ember-500/40 sm:block"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
