import { Clock, Gamepad2, Star, Target, UtensilsCrossed } from "lucide-react";
import { useReveal } from "./useReveal";

const features = [
  {
    icon: Target,
    title: "Snooker & Pool Tables",
    body: "Tournament-grade tables with fresh cloth, precision cues and proper lighting on every table.",
  },
  {
    icon: Gamepad2,
    title: "PS5 · Xbox · VR",
    body: "Big-screen console bays and immersive VR sessions — solo, duo or with the whole squad.",
  },
  {
    icon: UtensilsCrossed,
    title: "Master's Kitchen",
    body: "Hot snacks, shakes, coffee and comfort food served right to your table while you play.",
  },
  {
    icon: Clock,
    title: "Open Daily till 10 PM",
    body: "Walk in after class or work — we're open every day of the week for casual and serious play.",
  },
];

export function About() {
  const { ref, revealProps } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div ref={ref} {...revealProps}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About the club
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Dehradun's premium cue sports & gaming lounge
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tucked away near Doon University Campus on New Canal Road, Masters Snooker and Gaming
              Club is built for people who love the game. Deep-green tables under focused light,
              relaxed seating, a full console and VR zone, and a kitchen that keeps the evening
              going. Whether you're practising your break, hosting friends, or booking a birthday
              session, there's a table with your name on it.
            </p>
          </div>

          <div className="surface-card p-8 text-center">
            <div className="font-display text-6xl font-bold text-gold">4.8</div>
            <div className="mt-2 flex justify-center" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Rated by <span className="font-semibold text-foreground">95 reviews</span> on Google
            </p>
            <p className="mt-6 border-t border-border pt-6 text-sm text-muted-foreground">
              "Great tables, great vibe, and the staff genuinely care about the game."
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="surface-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
