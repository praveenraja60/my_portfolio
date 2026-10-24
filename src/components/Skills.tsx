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
import { Atmosphere } from "./ui/Atmosphere";
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
      card: "border-white/15 bg-black",
      icon: "bg-ember-600 text-white",
      bar: "bg-ember-500",
      tag: "bg-white/10 text-white",
      title: "text-white",
    },
  },
  {
    title: "UI Frameworks",
    icon: LayoutDashboard,
    summary: "Responsive interfaces, dashboards, and reusable visual systems.",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "Reactstrap"],
    tone: {
      card: "border-white/40 bg-white",
      icon: "bg-ember-700 text-white",
      bar: "bg-ember-700",
      tag: "bg-ember-50 text-ember-800",
      title: "text-black",
    },
  },
  {
    title: "Mobile",
    icon: Smartphone,
    summary: "Cross-platform delivery with payments and notifications.",
    skills: ["React Native", "Android / iOS", "Push Notifications", "Razorpay"],
    tone: {
      card: "border-ember-300 bg-ember-50",
      icon: "bg-black text-white",
      bar: "bg-black",
      tag: "bg-ember-100 text-ember-800",
      title: "text-ember-900",
    },
  },
  {
    title: "Backend & Data",
    icon: Server,
    summary: "Full-stack range for APIs, services, and product integrations.",
    skills: ["Node.js", "Express.js", "Supabase", "MySQL / PostgreSQL"],
    tone: {
      card: "border-white/10 bg-ember-900",
      icon: "bg-white text-ember-800",
      bar: "bg-white",
      tag: "bg-white/10 text-white",
      title: "text-white",
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
      card: "border-black/10 bg-white",
      icon: "bg-ember-600 text-white",
      bar: "bg-ember-600",
      tag: "bg-black text-white",
      title: "text-black",
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
      card: "border-white/20 bg-black",
      icon: "bg-ember-500 text-white",
      bar: "bg-ember-400",
      tag: "bg-ember-900 text-ember-100",
      title: "text-white",
    },
  },
  {
    title: "AI Tooling",
    icon: BrainCircuit,
    summary: "Practical AI workflows for faster builds and prototypes.",
    skills: ["Cursor", "Amazon Q", "Bolt", "Gemini"],
    tone: {
      card: "border-ember-200 bg-white",
      icon: "bg-ember-800 text-white",
      bar: "bg-ember-800",
      tag: "bg-ember-50 text-ember-800",
      title: "text-ember-900",
    },
  },
  {
    title: "Workflow",
    icon: GitBranch,
    summary: "Version control, API validation, QA, and deployment habits.",
    skills: ["Git", "Postman", "Swagger", "VS Code", "Freshworks"],
    tone: {
      card: "border-white/15 bg-ember-700",
      icon: "bg-white text-ember-800",
      bar: "bg-white",
      tag: "bg-black/30 text-white",
      title: "text-white",
    },
  },
];

const highlightSkills = [
  { name: "React.js", color: "bg-black text-white border-black" },
  { name: "Node.js", color: "bg-white text-ember-800 border-white" },
  { name: "TypeScript", color: "bg-ember-900 text-white border-ember-700" },
  { name: "React Native", color: "bg-white text-black border-white" },
  { name: "Freshworks", color: "bg-ember-600 text-white border-ember-500" },
  { name: "Analysis", color: "bg-black text-white border-black" },
  { name: "Release Management", color: "bg-white text-ember-900 border-white" },
  { name: "Team Leadership", color: "bg-ember-700 text-white border-ember-600" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-ember-800 py-24 text-white sm:py-32"
    >
      <Atmosphere tone="wine" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Skills"
          title="Technical skillset"
          description="A practical stack spanning frontend, mobile, backend, analysis, leadership, and AI tooling."
          align="split"
          light
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
                    <p className={`mt-2 font-sans text-sm leading-6 opacity-70 ${group.tone.title}`}>
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
