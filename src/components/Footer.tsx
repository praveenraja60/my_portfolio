import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/45">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-display text-base font-semibold tracking-display text-white">
            Praveen Rajkumar
          </p>
          <p className="mt-1 font-sans text-sm">Lead Software Engineer</p>
        </div>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
