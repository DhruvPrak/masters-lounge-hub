import { MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-snooker.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Snooker table lit by warm lamps inside Masters Snooker and Gaming Club"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/40" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur">
          <MapPin className="h-3.5 w-3.5" /> Dehradun, Uttarakhand
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          Masters Snooker <span className="text-primary">&</span> Gaming Club
        </h1>

        <p className="mt-4 font-display text-xl text-gold sm:text-2xl">
          Where Precision Meets Play
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Premium snooker and pool tables, PS5, Xbox and VR gaming — plus Master's Kitchen for food
          and beverages. Doon's most inviting lounge to play late.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#booking"
            className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
          >
            Book a Table
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-7 py-3.5 text-base font-semibold backdrop-blur transition-colors hover:bg-secondary"
          >
            View Gallery
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3 backdrop-blur">
          <span className="font-display text-2xl font-bold text-gold">4.8</span>
          <span className="flex" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </span>
          <span className="text-sm text-muted-foreground">95 Google reviews</span>
        </div>
      </div>
    </section>
  );
}
