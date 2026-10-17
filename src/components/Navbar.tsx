import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || isOpen
          ? "border-b border-charcoal/10 bg-cream/85 text-charcoal shadow-[0_10px_40px_-24px_rgba(10,22,40,0.35)] backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-xl font-bold tracking-display"
          aria-label="Go to home"
        >
          Praveen<span className="text-ember-600">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/0 p-1 md:flex md:border-charcoal/0">
          <div
            className={`flex items-center gap-0.5 rounded-full p-1 ${
              scrolled ? "bg-white/70" : "bg-white/5"
            }`}
          >
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 font-sans text-[0.78rem] font-medium tracking-wide transition ${
                    isActive
                      ? scrolled
                        ? "bg-charcoal text-white"
                        : "bg-white text-charcoal"
                      : scrolled
                        ? "text-charcoal-mute hover:text-charcoal"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <a
            href="/Assets/Praveen Resume.pdf"
            download="Praveen_Rajkumar_Resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ember-600 px-4 py-2.5 font-sans text-[0.75rem] font-semibold tracking-wide text-white shadow-[0_12px_30px_-14px_rgba(225,6,0,0.9)] transition hover:-translate-y-0.5 hover:bg-ember-700"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${
            scrolled || isOpen
              ? "border-charcoal/15 text-charcoal"
              : "border-white/20 text-white"
          }`}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-charcoal/8 bg-cream px-4 py-5 text-charcoal md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 font-sans text-base font-medium hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Assets/Praveen Resume.pdf"
              download="Praveen_Rajkumar_Resume.pdf"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ember-600 px-4 py-3 font-sans text-sm font-semibold text-white"
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
