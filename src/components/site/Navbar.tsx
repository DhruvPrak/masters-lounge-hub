import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("msgc-theme");
    setDark(stored ? stored === "dark" : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("msgc-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-base font-bold text-primary ring-1 ring-primary/40">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold tracking-tight sm:text-base">
              Masters Snooker
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              & Gaming Club
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-secondary/60 text-foreground transition-colors hover:bg-secondary"
          >
            {dark ? <Sun className="h-4 w-4 text-gold" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#booking"
            className="btn-gold hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
          >
            Book a Table
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-secondary/60 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 block rounded-full px-5 py-3 text-center text-sm font-semibold"
          >
            Book a Table
          </a>
        </div>
      )}
    </header>
  );
}
