import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-charcoal-mist">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-bold tracking-display text-cream">
            Praveen Rajkumar
          </p>
          <p className="mt-2 font-sans text-sm font-light">
            Lead Software Engineer — Product Development
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:praveenraja60@gmail.com"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream transition hover:border-cobalt-400 hover:text-cobalt-300"
            aria-label="Email Praveen"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="tel:+919566502092"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream transition hover:border-cobalt-400 hover:text-cobalt-300"
            aria-label="Call Praveen"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cream transition hover:border-cobalt-400 hover:text-cobalt-300"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#home"
            className="grid h-11 w-11 place-items-center rounded-full bg-ember-600 text-white transition hover:bg-ember-700"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center font-sans text-xs font-medium tracking-wide">
        Copyright {new Date().getFullYear()} Praveen Rajkumar. Crafted with
        intent.
      </div>
    </footer>
  );
}
