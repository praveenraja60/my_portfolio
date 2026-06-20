import { motion } from "framer-motion";
import {
  Activity,
  ClipboardList,
  HeartPulse,
  MessageCircle,
  PackageCheck,
  ShoppingBag,
  Smartphone,
  Store,
} from "lucide-react";

const projects = [
  {
    title: "Grozerbeez",
    type: "Mobile Commerce",
    icon: Smartphone,
    summary:
      "React Native grocery experience with order alerts, delivery workflows, and mobile-first customer interactions.",
    stack: ["React Native", "Notifications", "Razorpay", "API Integration"],
    accent: "from-teal-500 to-sky-500",
  },
  {
    title: "EasyDaily",
    type: "Customer Operations",
    icon: ShoppingBag,
    summary:
      "Responsive web flows and admin-facing features built to support daily ordering and service operations.",
    stack: ["React.js", "JavaScript", "Responsive UI", "Admin Panel"],
    accent: "from-sky-500 to-indigo-500",
  },
  {
    title: "AnythingKovai",
    type: "Local Service Platform",
    icon: Store,
    summary:
      "Frontend improvements for a local service product, focused on usability, speed, and cleaner interactions.",
    stack: ["React.js", "Tailwind CSS", "API Workflows", "UX Fixes"],
    accent: "from-rose-500 to-orange-500",
  },
  {
    title: "Hospital Management System",
    type: "Healthcare App",
    icon: HeartPulse,
    summary:
      "Web application screens and modules supporting hospital workflows, records, and operational visibility.",
    stack: ["Web App", "Components", "Forms", "Data Views"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Task Management System",
    type: "Productivity Tool",
    icon: ClipboardList,
    summary:
      "Task-focused interface modules designed to make assignments, tracking, and team updates easier to manage.",
    stack: ["Frontend UI", "Modules", "State Flows", "Testing"],
    accent: "from-cyan-500 to-rose-500",
  },
  {
    title: "SFC Support System",
    type: "Business Software",
    icon: PackageCheck,
    summary:
      "Maintenance, QA support, API validation, and client-facing fixes for a production web software system.",
    stack: ["QA", "Postman", "Swagger", "Support"],
    accent: "from-amber-500 to-rose-500",
  },
];

const deliveryHighlights = [
  { label: "Product surfaces", value: "Admin, mobile, dashboards" },
  { label: "Delivery focus", value: "Clean UI, fast fixes, releases" },
  { label: "Collaboration", value: "Design, backend, QA, support" },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-20 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Selected work drawn from your professional experience across
              commerce, operations, healthcare, productivity, and support-heavy
              business systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {deliveryHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs font-black uppercase text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-black leading-6 text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.accent}`}
                  aria-hidden="true"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:text-white dark:ring-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-md bg-white px-3 py-1.5 text-xs font-black uppercase text-slate-500 ring-1 ring-slate-200 dark:bg-slate-950/60 dark:text-slate-300 dark:ring-white/10">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase text-teal-700 dark:text-teal-300">
                <Activity className="h-4 w-4" />
                Delivery Pattern
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Across these projects, the common thread is practical frontend
                ownership: translating requirements into usable screens,
                integrating real APIs, testing edge cases, and improving the
                release experience.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
            >
              <MessageCircle className="h-4 w-4" />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
