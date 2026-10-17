import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import portrait from "../assets/portrait.png";
import { easeOut, fadeUp, staggerContainer } from "../lib/motion";

const heroStats = [
  { value: "6+", label: "Years experience" },
  { value: "3", label: "Products led" },
  { value: "Full-stack", label: "React · Node" },
];

export function Home() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-charcoal text-white"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_18%,rgba(0,71,171,0.5)_0%,transparent_42%),radial-gradient(ellipse_at_88%_78%,rgba(225,6,0,0.28)_0%,transparent_38%),linear-gradient(165deg,#07101c_0%,#0a1628_40%,#12233d_100%)]"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cobalt-500/20 blur-3xl"
        animate={{ y: [0, -24, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-[12%] right-[10%] h-64 w-64 rounded-full bg-ember-600/20 blur-3xl"
        animate={{ y: [0, 18, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-ember-400" />
            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-section text-cobalt-100">
              Lead Software Engineer · Product Development
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-display text-display-xl text-white"
          >
            Praveen
            <span className="mt-2 block bg-gradient-to-r from-ember-400 via-ember-300 to-cobalt-300 bg-clip-text text-transparent">
              Rajkumar
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl font-sans text-base font-light leading-8 text-white/78 sm:text-lg sm:leading-9"
          >
            I lead product development across HRMS, ticket systems, and supply
            platforms — shipping polished full-stack experiences with React.js
            and Node.js.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-xl grid-cols-3 gap-3"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.42 + index * 0.08,
                  ease: easeOut,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold tracking-display text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-sans text-[0.68rem] font-medium text-white/55 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            href="#about"
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-section text-cobalt-200 transition hover:text-white"
          >
            Discover more
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-[460px]">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cobalt-500/35 via-transparent to-ember-600/30 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-charcoal-soft shadow-[0_50px_120px_-48px_rgba(0,0,0,0.95)]">
              <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-cobalt-500 via-white/30 to-ember-500" />
              <img
                src={portrait}
                alt="Praveen Rajkumar"
                className="aspect-[4/5] w-full object-cover object-[center_16%]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent p-6 pt-24">
                <p className="font-display text-xl font-bold text-white">
                  Praveen Rajkumar
                </p>
                <p className="mt-1 font-sans text-sm font-medium text-cobalt-200">
                  Digylax · Lead Software Engineer
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute -right-2 top-8 hidden rounded-2xl border border-white/15 bg-charcoal/80 px-4 py-3 backdrop-blur-md sm:block"
            >
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-charcoal-mist">
                Focus
              </p>
              <p className="mt-1 font-display text-sm font-bold text-white">
                Product Delivery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-4 left-4 hidden rounded-2xl border border-white/15 bg-ember-600 px-4 py-3 text-white shadow-lg sm:block"
            >
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-white/80">
                Available for
              </p>
              <p className="mt-1 font-display text-sm font-bold">
                Leadership roles
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
