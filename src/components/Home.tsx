import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Gauge,
  Layers3,
  Linkedin,
  Mail,
  Phone,
  RefreshCw,
  Smartphone,
  Sparkles,
} from "lucide-react";

const stackLogos = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const heroStats = [
  { value: "5+", label: "Years building production interfaces" },
  { value: "Web + App", label: "React and React Native delivery" },
  { value: "AI-ready", label: "Prompt workflows, Supabase, modern tools" },
];

const strengths = [
  {
    title: "Interface Modernization",
    description:
      "Turning legacy screens into fast, responsive React experiences that feel easier to use.",
    icon: RefreshCw,
    accent: "text-teal-600 bg-teal-50 dark:bg-teal-500/10 dark:text-teal-300",
  },
  {
    title: "Product UI Systems",
    description:
      "Building reusable components, admin panels, dashboards, and design-consistent flows.",
    icon: Layers3,
    accent: "text-sky-600 bg-sky-50 dark:bg-sky-500/10 dark:text-sky-300",
  },
  {
    title: "Mobile-first Delivery",
    description:
      "Shipping React Native features for Android and iOS with practical release awareness.",
    icon: Smartphone,
    accent: "text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-300",
  },
  {
    title: "Performance Mindset",
    description:
      "Improving speed, reliability, and production polish through focused frontend decisions.",
    icon: Gauge,
    accent: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-300",
  },
];

export function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_55%,#eefcf8_100%)] pt-16 text-slate-950 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_55%,#082f36_100%)] dark:text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[length:36px_36px] opacity-35 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white/80 px-3 py-2 text-sm font-bold text-teal-700 shadow-sm dark:border-teal-400/20 dark:bg-white/5 dark:text-teal-200">
            <Sparkles className="h-4 w-4" />
            SDE-2 Frontend Developer
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Praveen
            <span className="block">Rajkumar</span>
          </h1>

          <p className="mt-5 max-w-2xl text-2xl font-bold leading-snug text-slate-800 dark:text-slate-100 sm:text-3xl">
            I build polished, high-performance product interfaces for web and
            mobile teams.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Frontend engineer focused on React.js, TypeScript, React Native,
            Tailwind CSS, Redux, API integration, production fixes, and
            AI-assisted development workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus:ring-white dark:focus:ring-offset-slate-950"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-200 dark:focus:ring-offset-slate-950"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="/Assets/Praveen Resume.pdf"
              download="Praveen_Rajkumar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-200 dark:focus:ring-offset-slate-950"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-sky-500 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:praveenraja60@gmail.com"
              className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-teal-300 dark:hover:text-teal-200"
              aria-label="Email Praveen"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+919566502092"
              className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-rose-500 hover:text-rose-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
              aria-label="Call Praveen"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-950">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                <Code2 className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                frontend.delivery.tsx
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                Production
              </span>
            </div>

            <div className="grid gap-6 p-5 sm:p-6">
              <div className="grid grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="text-lg font-black text-slate-950 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-200 dark:bg-black/40 sm:text-sm">
                <p>
                  <span className="text-sky-300">const</span>{" "}
                  <span className="text-amber-200">focus</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-emerald-300">"frontend systems"</span>;
                </p>
                <p>
                  <span className="text-sky-300">ship</span>
                  <span className="text-slate-500">(</span>
                  <span className="text-rose-300">responsiveUI</span>
                  <span className="text-slate-500">,</span>{" "}
                  <span className="text-rose-300">cleanState</span>
                  <span className="text-slate-500">,</span>{" "}
                  <span className="text-rose-300">fastFeedback</span>
                  <span className="text-slate-500">)</span>;
                </p>
                <p>
                  <span className="text-slate-500">//</span> React, TypeScript,
                  Tailwind, React Native
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  Primary stack
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stackLogos.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex h-24 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-white/10 dark:bg-white/5"
                    >
                      <img
                        src={tool.icon}
                        alt=""
                        className="h-9 w-9 object-contain"
                        loading="lazy"
                      />
                      <span className="mt-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-slate-200/80 bg-white/85 py-14 backdrop-blur dark:border-white/10 dark:bg-slate-950/55">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
                About
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 dark:text-white sm:text-4xl">
                Frontend engineering with product sense.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                I like the part where a messy requirement becomes a clear,
                usable screen. My experience spans admin panels, e-commerce
                flows, hospital and task systems, React Native apps, payment
                integration, and AI-assisted prototypes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-lg ${item.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
