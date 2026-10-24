import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { Atmosphere } from "./ui/Atmosphere";

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
    <section id="contact" className="relative overflow-hidden bg-ember-900 py-24 text-white sm:py-32">
      <Atmosphere tone="wine" />
      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="frame relative overflow-hidden border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(168,77,92,0.35),transparent_42%),#3f1118] p-8 sm:p-14">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            Let’s build the next product.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base font-light leading-8 text-white/60">
            Product leadership, React / Node platforms, and team-driven delivery.
          </p>
          <a href="mailto:praveenraja60@gmail.com" className="btn-primary mt-10">
            Email Praveen
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "LinkedIn" ? "_blank" : undefined}
                  rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-white/30"
                >
                  <span>
                    <span className="flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-white/45">
                      <Icon className="h-3.5 w-3.5" />
                      {link.label}
                    </span>
                    <span className="mt-2 block truncate font-sans text-sm text-white">
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
