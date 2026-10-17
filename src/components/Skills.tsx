import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  GitBranch,
  LayoutDashboard,
  Server,
  Smartphone,
  Users,
} from "lucide-react";
import { easeOut } from "../lib/motion";
import { SectionHeader } from "./ui/SectionHeader";

type SkillTone = {
  card: string;
  icon: string;
  bar: string;
  tag: string;
  title: string;
};

const skillGroups: {
  title: string;
  icon: typeof Code2;
  summary: string;
  skills: string[];
  tone: SkillTone;
}[] = [
  {
    title: "Core Frontend",
    icon: Code2,
    summary: "Modern UI delivery with React, JavaScript, and TypeScript.",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5 / CSS3"],
    tone: {
      card: "border-cobalt-200 bg-cobalt-50/70",
      icon: "bg-cobalt-500 text-white",
      bar: "bg-cobalt-500",
      tag: "bg-cobalt-500/10 text-cobalt-700",
      title: "text-cobalt-800",
    },
  },
  {
    title: "UI Frameworks",
    icon: LayoutDashboard,
    summary: "Responsive interfaces, dashboards, and reusable visual systems.",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "Reactstrap"],
    tone: {
      card: "border-violet-200 bg-violet-50/70",
      icon: "bg-violet-500 text-white",
      bar: "bg-violet-500",
      tag: "bg-violet-500/10 text-violet-700",
      title: "text-violet-800",
    },
  },
  {
    title: "Mobile",
    icon: Smartphone,
    summary: "Cross-platform delivery with payments and notifications.",
    skills: ["React Native", "Android / iOS", "Push Notifications", "Razorpay"],
    tone: {
      card: "border-emerald-200 bg-emerald-50/70",
      icon: "bg-emerald-500 text-white",
      bar: "bg-emerald-500",
      tag: "bg-emerald-500/10 text-emerald-700",
      title: "text-emerald-800",
    },
  },
  {
    title: "Backend & Data",
    icon: Server,
    summary: "Full-stack range for APIs, services, and product integrations.",
    skills: ["Node.js", "Express.js", "Supabase", "MySQL / PostgreSQL"],
    tone: {
      card: "border-amber-200 bg-amber-50/70",
      icon: "bg-amber-500 text-white",
      bar: "bg-amber-500",
      tag: "bg-amber-500/10 text-amber-800",
      title: "text-amber-900",
    },
  },
  {
    title: "Analysis",
    icon: BarChart3,
    summary:
      "Freshworks workflows, ticket analysis, QA feedback, and delivery insights.",
    skills: [
      "Freshworks",
      "Ticket Analysis",
      "Manual Testing",
      "Release Notes",
      "Requirement Analysis",
    ],
    tone: {
      card: "border-rose-200 bg-rose-50/70",
      icon: "bg-rose-500 text-white",
      bar: "bg-rose-500",
      tag: "bg-rose-500/10 text-rose-700",
      title: "text-rose-800",
    },
  },
  {
    title: "Leadership",
    icon: Users,
    summary: "Team coordination, client updates, and release ownership.",
    skills: [
      "Team Leadership",
      "Client Communication",
      "Release Management",
      "Project Coordination",
    ],
    tone: {
      card: "border-ember-200 bg-ember-50/70",
      icon: "bg-ember-600 text-white",
      bar: "bg-ember-600",
      tag: "bg-ember-600/10 text-ember-700",
      title: "text-ember-800",
    },
  },
  {
    title: "AI Tooling",
    icon: BrainCircuit,
    summary: "Practical AI workflows for faster builds and prototypes.",
    skills: ["Cursor", "Amazon Q", "Bolt", "Gemini"],
    tone: {
      card: "border-sky-200 bg-sky-50/70",
      icon: "bg-sky-500 text-white",
      bar: "bg-sky-500",
      tag: "bg-sky-500/10 text-sky-700",
      title: "text-sky-800",
    },
  },
  {
    title: "Workflow",
    icon: GitBranch,
    summary: "Version control, API validation, QA, and deployment habits.",
    skills: ["Git", "Postman", "Swagger", "VS Code", "Freshworks"],
    tone: {
      card: "border-teal-200 bg-teal-50/70",
      icon: "bg-teal-500 text-white",
      bar: "bg-teal-500",
      tag: "bg-teal-500/10 text-teal-700",
      title: "text-teal-800",
    },
  },
];

const highlightSkills = [
  { name: "React.js", color: "bg-cobalt-500/10 text-cobalt-700 border-cobalt-200" },
  { name: "Node.js", color: "bg-amber-500/10 text-amber-800 border-amber-200" },
  { name: "TypeScript", color: "bg-violet-500/10 text-violet-700 border-violet-200" },
  { name: "React Native", color: "bg-emerald-500/10 text-emerald-700 border-emerald-200" },
  { name: "Freshworks", color: "bg-rose-500/10 text-rose-700 border-rose-200" },
  { name: "Analysis", color: "bg-rose-500/10 text-rose-700 border-rose-200" },
  { name: "Release Management", color: "bg-ember-600/10 text-ember-700 border-ember-200" },
  { name: "Team Leadership", color: "bg-ember-600/10 text-ember-700 border-ember-200" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-cream-soft py-24 text-charcoal sm:py-32"
    >
      <div
        className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-cobalt-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-ember-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Technical skillset"
          description="A practical stack spanning frontend, mobile, backend, analysis, leadership, and AI tooling — each group with its own color identity."
          align="split"
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {highlightSkills.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-full border px-3.5 py-2 font-sans text-xs font-semibold ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: easeOut,
                }}
                className={`group rounded-2xl border p-6 shadow-[0_18px_40px_-30px_rgba(10,22,40,0.35)] transition duration-400 hover:-translate-y-1 ${group.tone.card}`}
              >
                <div className={`mb-5 h-1.5 w-12 rounded-full ${group.tone.bar}`} />

                <div className="flex items-start gap-3">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${group.tone.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-xl font-bold tracking-display ${group.tone.title}`}
                    >
                      {group.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-6 text-charcoal-mute">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full px-3.5 py-1.5 font-sans text-[0.68rem] font-semibold tracking-wide ${group.tone.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
