import { motion } from "framer-motion";
import { Award, ExternalLink, FileBadge2, GraduationCap } from "lucide-react";

const education = [
  {
    title: "Master of Computer Applications",
    detail: "PSG College of Arts and Science, Coimbatore",
    date: "Jul 2017 - May 2019",
  },
  {
    title: "Bachelor of Computer Science",
    detail: "Kamaraj College, Thoothukudi",
    date: "Aug 2014 - Apr 2017",
  },
];

const certifications = [
  {
    title: "EMC Academic Associate",
    issuer: "DELL Technologies",
    description: "Cloud Infrastructure and Services",
    verification: "E7YZ7VW61 FFQ2CSD",
    link: "https://www.certmetrics.com/emc/public/verification.aspx",
  },
  {
    title: "Mobile Computing",
    issuer: "NPTEL Online Certification",
    description: "Funded by Ministry of HRD, Govt. of India",
  },
];

const awards = [
  {
    title: "Certificate of Appreciation",
    issuer: "Aaludra Technologies",
    detail: "Awarded for exemplary diligence",
    year: "2021",
  },
  {
    title: "Service Certificate",
    issuer: "National Service Scheme",
    detail: "Recognized for two years of dedicated service",
    year: "2014 - 2016",
  },
];

export function Certifications() {
  return (
    <section
      id="credentials"
      className="bg-slate-50 py-20 text-slate-950 dark:bg-slate-900 dark:text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
              Proof
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Education & Credentials
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:justify-self-end">
            Academic foundation, professional certifications, and recognition
            that support a practical, delivery-focused engineering profile.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/60"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-black">Education</h3>
            </div>
            <div className="mt-6 grid gap-5">
              {education.map((item) => (
                <div key={item.title} className="border-l-2 border-sky-200 pl-4 dark:border-sky-400/30">
                  <p className="text-base font-black text-slate-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/60"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-200">
                <FileBadge2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-black">Certifications</h3>
            </div>
            <div className="mt-6 grid gap-5">
              {certifications.map((cert) => (
                <div key={cert.title} className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-base font-black text-slate-950 dark:text-white">
                    {cert.title}
                  </p>
                  <p className="mt-1 text-sm font-bold text-teal-700 dark:text-teal-300">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {cert.description}
                  </p>
                  {cert.verification && (
                    <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                      Verification: {cert.verification}
                    </p>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-teal-700 transition hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-100"
                    >
                      Verify Certificate
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/60"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-black">Awards</h3>
            </div>
            <div className="mt-6 grid gap-5">
              {awards.map((award) => (
                <div key={award.title} className="border-l-2 border-rose-200 pl-4 dark:border-rose-400/30">
                  <p className="text-base font-black text-slate-950 dark:text-white">
                    {award.title}
                  </p>
                  <p className="mt-1 text-sm font-bold text-rose-700 dark:text-rose-300">
                    {award.issuer}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {award.detail}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                    {award.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
