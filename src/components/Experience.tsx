import { motion } from "framer-motion";
import { Briefcase, CalendarDays, CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    position: "React.js Developer",
    date: "Aug 2023 - Dec 2025",
    company: "Kambaa Incorporation",
    location: "Coimbatore",
    summary:
      "Led frontend modernization across React.js and React Native projects with a focus on performance, maintainability, and release quality.",
    highlights: [
      "Transformed legacy products into responsive React applications with cleaner UI architecture.",
      "Built admin panel flows for customers and delivery personnel with production-ready interactions.",
      "Delivered React Native work for Android and iOS, including payment and notification experiences.",
      "Explored AI-assisted workflows, prompt-driven builds, and Supabase-backed prototypes.",
    ],
    stack: ["React.js", "React Native", "Tailwind CSS", "Razorpay", "Supabase", "Node.js"],
  },
  {
    position: "Web Application Developer",
    date: "Jan 2023 - May 2023",
    company: "Intuitive Stack Solution Private Limited",
    location: "Hyderabad",
    summary:
      "Implemented frontend features, modules, testing feedback, and design fixes across customer-facing web applications.",
    highlights: [
      "Developed controllers, modules, and services tailored to customer requirements.",
      "Improved product usability through design fixes and careful manual testing.",
      "Worked with the team to clarify project scope and keep delivery moving predictably.",
    ],
    stack: ["JavaScript", "Frontend UI", "Manual Testing", "Project Delivery"],
  },
  {
    position: "Associate Software Engineer",
    date: "Mar 2022 - Nov 2022",
    company: "BambeeQ Solutions Private Limited",
    location: "Chennai",
    summary:
      "Built end-to-end web application features across database-backed systems and user-facing interfaces.",
    highlights: [
      "Created components and modules for hospital, task, and HR management workflows.",
      "Resolved interface issues across active and developing products.",
      "Partnered with the development team to define software scope and improve outcomes.",
    ],
    stack: ["Web Apps", "Components", "HMS", "TMS", "HRA"],
  },
  {
    position: "Project Delegate",
    date: "May 2021 - Dec 2021",
    company: "SRJ Infognana Systems Private Limited",
    location: "Coimbatore",
    summary:
      "Supported responsive client webpages, usability improvements, and ongoing maintenance for company websites.",
    highlights: [
      "Collaborated with design, product, and backend teams to create interactive client pages.",
      "Built customer-focused components and maintained existing websites.",
      "Used GitHub workflows while contributing to Tab Service and Easy Cart projects.",
    ],
    stack: ["Responsive UI", "GitHub", "Tab Service", "Easy Cart"],
  },
  {
    position: "Junior Developer",
    date: "Sep 2020 - Apr 2021",
    company: "Aaludra Technologies",
    location: "Coimbatore",
    summary:
      "Worked across web software support, QA, API validation, bug fixes, and client-facing improvements.",
    highlights: [
      "Performed code reviews, QA checks, and issue resolution for web-based software.",
      "Validated APIs using Postman and Swagger to keep integrations reliable.",
      "Provided technical support and contributed to the SFC project.",
    ],
    stack: ["QA", "Postman", "Swagger", "Client Support", "SFC"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-20 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
              Work
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Professional Journey
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:justify-self-end">
            A practical frontend path across startups, service teams, product
            dashboards, React Native apps, admin systems, and production
            maintenance.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 dark:bg-white/10 md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.date}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="relative grid gap-5 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 md:grid-cols-[12rem_1fr] md:p-6"
              >
                <div className="hidden md:absolute md:left-2 md:top-8 md:grid md:h-5 md:w-5 md:place-items-center md:rounded-md md:border md:border-teal-200 md:bg-white dark:md:border-teal-400/30 dark:md:bg-slate-950">
                  <span className="h-2 w-2 rounded-sm bg-teal-600 dark:bg-teal-300" />
                </div>

                <div className="space-y-3 md:pl-7">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200">
                    <CalendarDays className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                    {exp.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-base font-bold text-slate-600 dark:text-slate-300">
                        <Briefcase className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                    {exp.summary}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {exp.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
