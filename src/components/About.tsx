import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import portraitAlt from "../assets/portrait-alt.png";
import { fadeUp, scaleIn, staggerContainer } from "../lib/motion";

const focusAreas = [
  "Product leadership",
  "React.js / Node.js",
  "Client communication",
  "Release management",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 text-charcoal sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cobalt-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-8">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl border border-cobalt-500/25" />
          <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-3xl bg-gradient-to-br from-ember-600 to-cobalt-600 opacity-90" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-charcoal/8 bg-white shadow-[0_40px_90px_-48px_rgba(0,71,171,0.45)]">
            <img
              src={portraitAlt}
              alt="Praveen Rajkumar portrait"
              className="aspect-[4/5] w-full object-cover object-[center_14%]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute bottom-6 left-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/40 bg-charcoal/85 px-3.5 py-2 text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-ember-400" />
            <span className="font-sans text-xs font-semibold">India</span>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="eyebrow">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Building products people actually use.
          </motion.h2>
          <motion.p variants={fadeUp} className="body-copy mt-7 max-w-2xl">
            Currently leading product development at Digylax — owning delivery
            across HRMS, Ticket Management System, and Supplys Spot. I connect
            team leadership, client communication, and hands-on React.js /
            Node.js engineering.
          </motion.p>
          <motion.p variants={fadeUp} className="body-copy mt-5 max-w-2xl">
            Earlier roles sharpened my craft across React Native, admin systems,
            commerce flows, healthcare apps, and production support — always
            with a bias toward clear UI and reliable releases.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 grid gap-3 sm:grid-cols-2"
          >
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cobalt-500/15 bg-white px-4 py-4 font-sans text-sm font-semibold text-charcoal shadow-[0_12px_30px_-24px_rgba(0,71,171,0.35)]"
              >
                <span className="mb-2 block h-1 w-8 rounded-full bg-ember-600" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
