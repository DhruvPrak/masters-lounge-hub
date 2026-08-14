import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useReveal } from "./useReveal";

export function Contact() {
  const { ref, revealProps } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="bg-secondary/30 py-20 sm:py-28">
      <div ref={ref} {...revealProps} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Visit us
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Find the club</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  New Canal Rd, near Bangali Kothi Road, Doon University Campus, Kedarpur,
                  Dehradun, Uttarakhand 248001
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+919760504060"
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  097605 04060
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919760504060"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>

            <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
              Open daily · 11:00 AM – 10:00 PM
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Masters Snooker and Gaming Club location on Google Maps"
              src="https://www.google.com/maps?q=Doon%20University%20Campus%2C%20New%20Canal%20Rd%2C%20Kedarpur%2C%20Dehradun%2C%20Uttarakhand%20248001&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
