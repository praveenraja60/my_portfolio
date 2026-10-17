import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { easeOut } from "../lib/motion";

const projects = [
  {
    title: "Ticket Management System",
    type: "Digylax · Internal Ops",
    summary:
      "Full-stack ticket platform for raising, tracking, and resolving company tickets — status flows, employee time tracking, hours spent, and conversation history.",
    stack: ["React.js", "Node.js", "API Integrations", "Time Tracking"],
    featured: true,
  },
  {
    title: "Supplys Spot",
    type: "Digylax · Product",
    summary:
      "Front-end and back-end components plus integrations for a supply-focused product platform.",
    stack: ["React.js", "Node.js", "Integrations", "Product Dev"],
  },
  {
    title: "HRMS",
    type: "Digylax · Product",
    summary:
      "Ongoing development and enhancement of the Human Resource Management System.",
    stack: ["React.js", "Node.js", "HR Workflows", "Release Mgmt"],
  },
  {
    title: "Grozerbeez",
    type: "Mobile Commerce",
    summary:
      "React Native grocery experience with order alerts, delivery workflows, and mobile-first customer interactions.",
    stack: ["React Native", "Notifications", "Razorpay", "API Integration"],
  },
  {
    title: "EasyDaily",
    type: "Customer Operations",
    summary:
      "Responsive web flows and admin-facing features built to support daily ordering and service operations.",
    stack: ["React.js", "JavaScript", "Responsive UI", "Admin Panel"],
  },
  {
    title: "AnythingKovai",
    type: "Local Service Platform",
    summary:
      "Frontend improvements for a local service product, focused on usability, speed, and cleaner interactions.",
    stack: ["React.js", "Tailwind CSS", "API Workflows", "UX Fixes"],
  },
];

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-charcoal py-24 text-cream sm:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cobalt-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Current Digylax products and earlier shipping work across commerce, operations, and platform UI."
          light
          align="split"
        />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="group mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-charcoal-soft via-charcoal to-[#07101c] p-7 sm:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="rounded-full bg-ember-600/15 px-3 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-section text-ember-300">
              {featured.type}
            </span>
            <ArrowUpRight className="h-5 w-5 text-charcoal-mist transition group-hover:text-ember-400" />
          </div>
          <h3 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-display text-cream sm:text-5xl">
            {featured.title}
          </h3>
          <p className="mt-5 max-w-3xl font-sans text-base font-light leading-8 text-charcoal-mist">
            {featured.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {featured.stack.map((item) => (
              <span key={item} className="tag-pill-dark">
                {item}
              </span>
            ))}
          </div>
        </motion.article>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: easeOut,
              }}
              className="group surface-dark flex h-full flex-col rounded-[1.5rem] p-6 transition duration-400 hover:-translate-y-1.5 hover:border-cobalt-400/40"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-ember-500 to-cobalt-400" />
                <ArrowUpRight className="h-4 w-4 text-charcoal-mist transition group-hover:text-ember-400" />
              </div>
              <p className="mt-6 font-sans text-[0.65rem] font-semibold uppercase tracking-section text-cobalt-300">
                {project.type}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-display text-cream">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 font-sans text-sm font-light leading-7 text-charcoal-mist">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
                {project.stack.map((item) => (
                  <span key={item} className="tag-pill-dark">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
