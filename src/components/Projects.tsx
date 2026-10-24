import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { easeOut } from "../lib/motion";
import { Atmosphere } from "./ui/Atmosphere";

const projects = [
  {
    index: "01",
    title: "Ticket Management System",
    type: "Digylax",
    summary:
      "Full-stack tickets — status, employee time, hours spent, and conversation history.",
    stack: ["React.js", "Node.js", "Time tracking"],
    cover: "from-[#1a1a1a] via-[#5a1822] to-[#8b2332]",
  },
  {
    index: "02",
    title: "Supplys Spot",
    type: "Digylax",
    summary: "Front-end, back-end, and integrations for a supply product.",
    stack: ["React.js", "Node.js", "Integrations"],
    cover: "from-[#000000] via-[#3f1118] to-[#72202c]",
  },
  {
    index: "03",
    title: "HRMS",
    type: "Digylax",
    summary: "Ongoing development of the Human Resource Management System.",
    stack: ["React.js", "Node.js", "HR workflows"],
    cover: "from-[#260a0e] via-[#8b2332] to-[#111111]",
  },
  {
    index: "04",
    title: "Grozerbeez",
    type: "Commerce",
    summary: "React Native grocery flows with alerts, delivery, and Razorpay.",
    stack: ["React Native", "Razorpay"],
    cover: "from-[#111111] via-[#5a1822] to-[#000000]",
  },
  {
    index: "05",
    title: "EasyDaily",
    type: "Operations",
    summary: "Responsive ordering flows and admin-facing service tools.",
    stack: ["React.js", "Admin panel"],
    cover: "from-[#3f1118] via-[#72202c] to-[#0a0a0a]",
  },
  {
    index: "06",
    title: "AnythingKovai",
    type: "Local platform",
    summary:
      "Usability, speed, and cleaner interactions for a local service product.",
    stack: ["React.js", "Tailwind CSS"],
    cover: "from-[#0a0a0a] via-[#8b2332] to-[#1a1a1a]",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-32"
    >
      <Atmosphere />
      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title mt-5">Selected work</h2>
          </div>
          <p className="max-w-sm font-sans text-sm font-light leading-7 text-white/50">
            Cinematic covers for now. Screenshots can replace them later.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.06,
                ease: easeOut,
              }}
              className={`group ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div
                className={`frame relative bg-gradient-to-br ${project.cover} ${
                  index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-30 transition duration-700 group-hover:opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-center justify-between text-white/70">
                    <span className="font-sans text-xs uppercase tracking-[0.2em]">
                      {project.index} · {project.type}
                    </span>
                    <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="max-w-3xl font-display text-4xl font-semibold tracking-display sm:text-5xl">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <p className="max-w-xl font-sans text-sm font-light leading-7 text-white/60">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
