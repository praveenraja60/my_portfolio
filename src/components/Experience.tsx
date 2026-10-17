import { motion } from "framer-motion";
import { easeOut, fadeUp, staggerContainer } from "../lib/motion";

type ExperienceItem = {
  position: string;
  date: string;
  company: string;
  companyNote?: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    position: "Lead Software Engineer – Product Development",
    date: "Mar 2026 – Present",
    company: "Digylax Private Limited",
    companyNote: "Digylax Private Limited",
    location: "Product Development",
    current: true,
    summary:
      "Leading development and maintenance of three products — HRMS, Ticket Management System, and Supplys Spot — spanning team leadership, client communication, and full-stack delivery.",
    highlights: [
      "Lead the development team, assign priorities, and keep feature delivery on schedule across all three products.",
      "Coordinate sprint planning, task breakdown, and day-to-day engineering execution with clear ownership.",
      "Communicate directly with clients, share progress updates, and align expectations before each release.",
      "Prepare detailed release notes covering features, changes, and fixes scheduled for production deployment.",
      "Independently built the Ticket Management System end-to-end — React.js front-end and Node.js back-end.",
      "Implemented ticket status workflows, employee-wise time tracking, hours spent per ticket, and conversation history.",
      "Contribute front-end and back-end components plus required integrations for the Supplys Spot product.",
      "Actively develop and enhance the HRMS platform for ongoing HR and operational workflows.",
      "Use Git for version control, code collaboration, branching strategy, and production-ready releases.",
      "Own release management and production readiness checks so deployments stay predictable and documented.",
    ],
    stack: [
      "Team Leadership",
      "React.js",
      "Node.js",
      "Git",
      "API Integrations",
      "Release Management",
      "Client Communication",
      "Product Development",
    ],
  },
  {
    position: "React.js Developer",
    date: "Aug 2023 – Dec 2025",
    company: "Kambaa Incorporation",
    location: "Coimbatore",
    summary:
      "Led frontend modernization across React.js and React Native projects with a focus on performance, maintainability, and release quality.",
    highlights: [
      "Transformed legacy product screens into responsive React.js applications with cleaner UI architecture.",
      "Built and refined admin panel flows for customers and delivery personnel with production-ready interactions.",
      "Delivered React Native features for Android and iOS, including payment and notification experiences.",
      "Integrated Razorpay payment flows and validated edge cases across web and mobile surfaces.",
      "Improved performance, reliability, and release polish through focused frontend decisions and bug fixes.",
      "Collaborated with design and backend teams to ship consistent components and reusable UI patterns.",
      "Explored AI-assisted workflows, prompt-driven builds, and Supabase-backed product prototypes.",
      "Maintained Node.js service touchpoints where frontend delivery depended on API contracts and data flows.",
      "Supported production releases with regression checks, UI hardening, and quick turnaround fixes.",
      "Owned frontend delivery across commerce and operations products such as Grozerbeez, EasyDaily, and AnythingKovai.",
    ],
    stack: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "Razorpay",
      "Supabase",
      "Node.js",
      "TypeScript",
      "API Integration",
    ],
  },
  {
    position: "Web Application Developer",
    date: "Jan 2023 – May 2023",
    company: "Intuitive Stack Solution Private Limited",
    location: "Hyderabad",
    summary:
      "Implemented frontend features, modules, testing feedback, and design fixes across customer-facing web applications.",
    highlights: [
      "Developed controllers, modules, and services tailored to customer requirements.",
      "Implemented frontend features for customer-facing web application flows.",
      "Applied design fixes to improve usability, visual consistency, and interaction clarity.",
      "Performed careful manual testing and captured feedback for iterative product improvements.",
      "Partnered with the team to clarify project scope and keep delivery timelines predictable.",
      "Resolved UI defects found during QA cycles and stabilized release candidates.",
      "Translated product requirements into practical screen-level implementation plans.",
      "Supported integration work between frontend modules and backend services.",
      "Documented feature changes and testing notes to improve handoff quality.",
      "Maintained clean JavaScript frontend code with a focus on reliable delivery.",
    ],
    stack: [
      "JavaScript",
      "Frontend UI",
      "Manual Testing",
      "Project Delivery",
      "Web Apps",
      "Modules",
      "QA Feedback",
      "Design Fixes",
    ],
  },
  {
    position: "Associate Software Engineer",
    date: "Mar 2022 – Nov 2022",
    company: "BambeeQ Solutions Private Limited",
    location: "Chennai",
    summary:
      "Built end-to-end web application features across database-backed systems and user-facing interfaces.",
    highlights: [
      "Created components and modules for hospital, task, and HR management workflows.",
      "Built user-facing screens that connected cleanly to database-backed application logic.",
      "Resolved interface issues across active and developing products.",
      "Partnered with the development team to define software scope and improve outcomes.",
      "Implemented forms, data views, and operational screens for Hospital Management System needs.",
      "Delivered task-tracking modules that made assignments and updates easier to manage.",
      "Contributed HR application features supporting day-to-day administrative workflows.",
      "Improved consistency across shared components used in multiple internal products.",
      "Supported testing cycles by reproducing bugs and validating fixes before release.",
      "Collaborated across frontend and backend boundaries to keep features production-ready.",
    ],
    stack: [
      "Web Apps",
      "Components",
      "HMS",
      "TMS",
      "HRA",
      "Forms",
      "Data Views",
      "Bug Fixes",
    ],
  },
  {
    position: "Project Delegate",
    date: "May 2021 – Dec 2021",
    company: "SRJ Infognana Systems Private Limited",
    location: "Coimbatore",
    summary:
      "Supported responsive client webpages, usability improvements, and ongoing maintenance for company websites.",
    highlights: [
      "Collaborated with design, product, and backend teams to create interactive client pages.",
      "Built customer-focused components for company websites and service products.",
      "Maintained existing websites with ongoing content, layout, and usability updates.",
      "Improved responsive behavior across desktop and mobile breakpoints.",
      "Used GitHub workflows for collaboration, reviews, and versioned delivery.",
      "Contributed to Tab Service with interactive UI and practical feature support.",
      "Supported Easy Cart with frontend improvements focused on customer usability.",
      "Fixed layout and interaction issues reported during client review cycles.",
      "Helped translate design feedback into polished, shippable webpage updates.",
      "Kept delivery organized through clear task tracking and team coordination.",
    ],
    stack: [
      "Responsive UI",
      "GitHub",
      "Tab Service",
      "Easy Cart",
      "Client Websites",
      "UI Maintenance",
      "Collaboration",
      "Usability",
    ],
  },
  {
    position: "Junior Developer",
    date: "Sep 2020 – Apr 2021",
    company: "Aaludra Technologies",
    location: "Coimbatore",
    summary:
      "Worked across web software support, QA, API validation, bug fixes, and client-facing improvements.",
    highlights: [
      "Performed code reviews, QA checks, and issue resolution for web-based software.",
      "Validated APIs using Postman and Swagger to keep integrations reliable.",
      "Provided technical support for client-facing issues and production follow-ups.",
      "Contributed bug fixes and incremental improvements to the SFC Support System.",
      "Documented defects clearly so engineering and support teams could act quickly.",
      "Assisted with release verification by confirming fixes against reported tickets.",
      "Supported frontend and backend troubleshooting across active software modules.",
      "Improved confidence in delivery through structured manual testing routines.",
      "Communicated status updates on open issues and resolved tickets.",
      "Built foundational engineering habits around quality, support, and collaboration.",
    ],
    stack: [
      "QA",
      "Postman",
      "Swagger",
      "Client Support",
      "SFC",
      "Bug Fixes",
      "API Validation",
      "Code Review",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-sand-soft py-24 text-charcoal sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Professional journey
          </motion.h2>
          <motion.p variants={fadeUp} className="body-copy mt-5">
            From junior support work to leading product development — detailed
            impact across every company and product surface.
          </motion.p>
        </motion.div>

        <div className="relative mt-16">
          <div
            className="absolute left-[1.35rem] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cobalt-500 via-ember-500/60 to-transparent md:block"
            aria-hidden="true"
          />

          <ol className="space-y-7">
            {experiences.map((exp, index) => (
              <motion.li
                key={`${exp.company}-${exp.date}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.04,
                  ease: easeOut,
                }}
                className="relative md:pl-16"
              >
                <span
                  className={`absolute left-[0.85rem] top-9 hidden h-4 w-4 rounded-full border-4 border-sand-soft md:block ${
                    exp.current
                      ? "bg-ember-600 shadow-[0_0_0_6px_rgba(225,6,0,0.16)]"
                      : "bg-cobalt-500 shadow-[0_0_0_6px_rgba(0,71,171,0.12)]"
                  }`}
                  aria-hidden="true"
                />

                <article
                  className={`surface-card overflow-hidden p-6 transition duration-500 hover:-translate-y-1 sm:p-8 ${
                    exp.current ? "ring-1 ring-ember-500/25" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="rounded-full bg-cobalt-50 px-3 py-1 font-sans text-sm font-semibold text-cobalt-700">
                      {exp.date}
                    </p>
                    {exp.current && (
                      <span className="rounded-full bg-ember-600 px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                        Current
                      </span>
                    )}
                    <span className="font-sans text-xs font-medium uppercase tracking-wider text-charcoal-mist">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold tracking-display text-charcoal sm:text-[1.75rem]">
                    {exp.position}
                  </h3>
                  <p className="mt-2 font-sans text-base font-medium text-charcoal-mute">
                    {exp.company}
                    {exp.companyNote ? (
                      <span className="text-charcoal-mute/70">
                        {" "}
                        ({exp.companyNote})
                      </span>
                    ) : null}
                  </p>

                  <p className="body-copy mt-5 max-w-3xl !text-[0.95rem] !leading-7">
                    {exp.summary}
                  </p>

                  <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                    {exp.highlights.map((item, pointIndex) => (
                      <li
                        key={item}
                        className="rounded-xl border border-charcoal/6 bg-cream/80 p-3.5 font-sans text-sm leading-6 text-charcoal-mute"
                      >
                        <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cobalt-500/10 font-display text-[0.65rem] font-bold text-cobalt-600">
                          {String(pointIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="block">{item}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-charcoal/8 pt-5">
                    {exp.stack.map((skill) => (
                      <span key={skill} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
