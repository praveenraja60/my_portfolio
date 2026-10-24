import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="mx-auto flex h-14 max-w-[88rem] items-center justify-between rounded-full border border-white/10 bg-black/75 px-3 pl-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <a href="#home" onClick={closeMenu} className="font-display text-lg font-semibold tracking-display text-white">
          Praveen<span className="text-ember-500">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 font-sans text-[0.78rem] transition ${
                active === item.href
                  ? "bg-white text-charcoal"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/Assets/Praveen Resume.pdf"
          download="Praveen_Rajkumar_Resume.pdf"
          className="hidden rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold text-charcoal transition hover:bg-ember-500 hover:text-white md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-[88rem] rounded-3xl border border-white/10 bg-black/95 p-4 text-white backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-2xl px-3 py-3 font-sans text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Assets/Praveen Resume.pdf"
            download="Praveen_Rajkumar_Resume.pdf"
            className="mt-2 flex justify-center rounded-full bg-white py-3 font-sans text-sm font-semibold text-charcoal"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
