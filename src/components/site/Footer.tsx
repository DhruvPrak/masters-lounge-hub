const links = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold">Masters Snooker & Gaming Club</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Snooker, pool, PS5, Xbox and VR gaming with Master's Kitchen — Dehradun's premium play
            lounge.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Quick links
          </h4>
          <ul className="mt-4 grid gap-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted-foreground hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </h4>
          <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
            New Canal Rd, near Bangali Kothi Road, Doon University Campus, Kedarpur, Dehradun,
            Uttarakhand 248001
            <br />
            <a href="tel:+919760504060" className="hover:text-primary">
              097605 04060
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Masters Snooker and Gaming Club. All rights reserved.
      </div>
    </footer>
  );
}
