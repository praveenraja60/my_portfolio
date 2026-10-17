import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const links = [
  {
    label: "Email",
    value: "praveenraja60@gmail.com",
    href: "mailto:praveenraja60@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 95665 02092",
    href: "tel:+919566502092",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "praveen-rajkumar",
    href: "https://www.linkedin.com/in/praveen-rajkumar-59163416b/",
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal-soft py-24 text-cream sm:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(0,71,171,0.28)_0%,transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(225,6,0,0.14)_0%,transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p variants={fadeUp} className="eyebrow-light">
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-display-lg text-cream"
            >
              Let&apos;s build the next product.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl font-sans text-base font-light leading-[1.8] text-charcoal-mist sm:text-[1.05rem]"
            >
              Open to conversations around product leadership, full-stack React /
              Node roles, platform builds, and team-driven delivery.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:praveenraja60@gmail.com"
              className="btn-primary mt-8"
            >
              Email Praveen
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <div className="grid gap-3">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    link.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/60 p-5 transition hover:-translate-y-0.5 hover:border-cobalt-400/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-ember-400 transition group-hover:bg-cobalt-500/20 group-hover:text-cobalt-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-[0.65rem] font-semibold uppercase tracking-section text-charcoal-mist">
                      {link.label}
                    </span>
                    <span className="mt-1 block truncate font-sans text-sm font-medium text-cream">
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-charcoal-mist transition group-hover:text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
