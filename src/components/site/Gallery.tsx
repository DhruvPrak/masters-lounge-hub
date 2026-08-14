import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useReveal } from "./useReveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Snooker balls racked on green felt with a cue", span: "sm:row-span-2" },
  { src: g2, alt: "Console gaming lounge with big screen and neon lighting", span: "" },
  { src: g3, alt: "Player wearing a VR headset in the gaming zone", span: "" },
  { src: g4, alt: "Warmly lit lounge bar seating at Master's Kitchen", span: "" },
  { src: g5, alt: "Row of pool tables glowing under focused lights", span: "sm:row-span-2" },
  { src: g6, alt: "Player chalking a cue before a shot", span: "" },
];

export function Gallery() {
  const { ref, revealProps } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="bg-secondary/30 py-20 sm:py-28">
      <div ref={ref} {...revealProps} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          The album
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Inside the club</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Tables, consoles, VR and the ambience — tap any photo to enlarge.
        </p>

        <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              key={photo.alt}
              type="button"
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-foreground">
                {photo.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-3xl border border-border object-contain shadow-[var(--shadow-glow)]"
          />
        </div>
      )}
    </section>
  );
}
