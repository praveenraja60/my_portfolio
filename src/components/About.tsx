import { motion } from "framer-motion";
import portraitAlt from "../assets/portrait-alt.png";
import { fadeUp, scaleIn, staggerContainer } from "../lib/motion";
import { Atmosphere } from "./ui/Atmosphere";

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
      className="relative overflow-hidden bg-white py-24 text-black sm:py-32"
    >
      <Atmosphere tone="light" />
      <div className="relative mx-auto grid max-w-[88rem] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="frame">
            <img
              src={portraitAlt}
              alt="Portrait of Praveen Rajkumar"
              className="aspect-[4/5] w-full object-cover object-[center_12%]"
            />
          </div>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-black/45">
            India · Full-stack product lead
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ember-700"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-black"
          >
            Interfaces with the weight of a product studio.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl font-sans text-base font-light leading-[1.85] text-black/65"
          >
            I lead product development at Digylax — HRMS, Ticket Management
            System, and Supplys Spot. The work sits between team leadership,
            client communication, and hands-on React.js / Node.js engineering.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl font-sans text-base font-light leading-[1.85] text-black/65"
          >
            Earlier years were spent modernizing React and React Native products
            across commerce, healthcare, and operations — always with a bias
            toward clear screens and calm releases.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/10 sm:grid-cols-2"
          >
            {focusAreas.map((item, index) => (
              <div key={item} className="bg-white p-5">
                <p className="font-display text-sm text-ember-600">
                  0{index + 1}
                </p>
                <p className="mt-3 font-sans text-sm font-medium text-black">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
