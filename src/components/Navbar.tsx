import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark";

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleDark = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-950 text-sm font-black text-white shadow-sm dark:bg-white dark:text-slate-950">
            PR
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-slate-950 dark:text-white sm:text-base">
              Praveen Rajkumar
            </span>
            <span className="hidden text-xs font-medium text-slate-500 dark:text-slate-400 sm:block">
              SDE-2 Frontend Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="/Assets/Praveen Resume.pdf"
            download="Praveen_Rajkumar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-teal-900/10 transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={toggleDark}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleDark}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 dark:border-white/10 dark:text-white"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl dark:border-white/10 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Assets/Praveen Resume.pdf"
              download="Praveen_Rajkumar_Resume.pdf"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
