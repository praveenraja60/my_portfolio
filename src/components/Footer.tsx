import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-black text-slate-950 dark:text-white">
            Praveen Rajkumar
          </p>
          <p className="mt-1 text-sm">
            Frontend Developer focused on React, TypeScript, and product UI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:praveenraja60@gmail.com"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-teal-300 dark:hover:text-teal-200"
            aria-label="Email Praveen"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="tel:+919566502092"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-200"
            aria-label="Call Praveen"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-200"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs font-semibold dark:border-white/10">
        Copyright {new Date().getFullYear()} Praveen Rajkumar. All rights
        reserved.
      </div>
    </footer>
  );
}
