import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  Server,
  Smartphone,
} from "lucide-react";

const skillGroups = [
  {
    title: "Core Frontend",
    icon: Code2,
    summary: "Modern UI delivery with strong React, JavaScript, and TypeScript foundations.",
    skills: [
      {
        name: "React.js",
        level: 96,
        label: "Primary",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        level: 94,
        label: "Primary",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        level: 90,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5 / CSS3",
        level: 92,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
    ],
  },
  {
    title: "UI Frameworks",
    icon: LayoutDashboard,
    summary: "Responsive interfaces, dashboards, admin tools, and reusable visual systems.",
    skills: [
      {
        name: "Tailwind CSS",
        level: 92,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material UI",
        level: 86,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Bootstrap",
        level: 84,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Reactstrap",
        level: 78,
        label: "Hands-on",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    summary: "Cross-platform delivery with practical release, notification, and payment flows.",
    skills: [
      {
        name: "React Native",
        level: 86,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Android / iOS",
        level: 78,
        label: "Hands-on",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
      },
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    summary: "API integration awareness with enough backend range to collaborate deeply.",
    skills: [
      {
        name: "Node.js",
        level: 78,
        label: "Hands-on",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        level: 72,
        label: "Hands-on",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Supabase",
        level: 78,
        label: "Hands-on",
        icon: "https://supabase.com/images/logo-dark.png",
      },
      {
        name: "MySQL / PostgreSQL",
        level: 72,
        label: "Working",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "AI Tooling",
    icon: BrainCircuit,
    summary: "Practical use of AI tools for prototyping, research, presentations, and faster builds.",
    skills: [
      { name: "Cursor", level: 84, label: "Strong", icon: "https://cursor.sh/brand/icon.svg" },
      { name: "Amazon Q", level: 76, label: "Hands-on", icon: "/Assets/amazonq.jpg" },
      { name: "Bolt", level: 82, label: "Hands-on", icon: "/Assets/bolt.jpg" },
      { name: "Gemini", level: 74, label: "Hands-on", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
      { name: "Trae", level: 70, label: "Hands-on", icon: "/Assets/trae.jpg" },
      { name: "Antigravity", level: 70, label: "Hands-on", icon: "/Assets/Antigravity.png" },
    ],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    summary: "Version control, API validation, QA feedback, deployment, and team coordination.",
    skills: [
      {
        name: "Git",
        level: 88,
        label: "Strong",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        level: 86,
        label: "Strong",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "VS Code",
        level: 90,
        label: "Primary",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Freshworks",
        level: 76,
        label: "Hands-on",
        icon: "/Assets/freshworks.jpg",
      },
    ],
  },
];

const quickStrengths = [
  "Responsive layouts",
  "Reusable components",
  "Admin panels",
  "API integration",
  "Payment flows",
  "Production fixes",
  "Manual testing",
  "AI prototyping",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-20 text-slate-950 dark:bg-slate-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Technical Skillset
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {quickStrengths.map((item) => (
              <span
                key={item}
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/60"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex min-h-10 items-center gap-3">
                        <img
                          src={skill.icon}
                          alt=""
                          className="h-8 w-8 shrink-0 rounded-md object-contain"
                          loading="lazy"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="truncate text-sm font-black text-slate-800 dark:text-slate-100">
                              {skill.name}
                            </span>
                            <span className="shrink-0 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-black uppercase text-slate-500 dark:bg-white/10 dark:text-slate-300">
                              {skill.label}
                            </span>
                          </div>
                          <div className="mt-2 h-2 overflow-hidden rounded-md bg-slate-100 dark:bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.08 }}
                              className="h-full rounded-md bg-gradient-to-r from-teal-500 via-sky-500 to-rose-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-teal-200 bg-teal-50 p-5 text-sm font-semibold leading-7 text-teal-950 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-100">
          <Database className="mr-2 inline h-5 w-5 align-[-4px]" />
          Comfortable connecting polished frontends with real product systems:
          API workflows, data-driven dashboards, auth flows, payments,
          notifications, forms, and support-heavy production screens.
        </div>
      </div>
    </section>
  );
}
