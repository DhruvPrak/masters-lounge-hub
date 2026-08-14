import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { useReveal } from "./useReveal";

const slots = [
  { time: "11:00 AM", available: true },
  { time: "12:30 PM", available: true },
  { time: "02:00 PM", available: false },
  { time: "03:30 PM", available: true },
  { time: "05:00 PM", available: true },
  { time: "06:30 PM", available: false },
  { time: "08:00 PM", available: true },
  { time: "09:00 PM", available: true },
];

const fieldClass =
  "w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

export function Booking() {
  const { ref, revealProps } = useReveal<HTMLDivElement>();
  const [slot, setSlot] = useState("05:00 PM");
  const [confirmed, setConfirmed] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <section id="booking" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div ref={ref} {...revealProps}>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Reserve
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Book your table</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Pick a slot and we'll keep the table ready. We'll confirm on your phone number.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Name
                <input required placeholder="Your name" className={fieldClass} />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Phone Number
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  placeholder="10-digit mobile"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Date
                <input required type="date" className={fieldClass} />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Time Slot
                <select
                  className={fieldClass}
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                >
                  {slots
                    .filter((s) => s.available)
                    .map((s) => (
                      <option key={s.time} value={s.time}>
                        {s.time}
                      </option>
                    ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Table Type
                <select className={fieldClass} defaultValue="Snooker">
                  <option>Snooker</option>
                  <option>Pool</option>
                  <option>Gaming Console</option>
                  <option>VR Zone</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Number of Hours
                <input type="number" min={1} max={8} defaultValue={1} className={fieldClass} />
              </label>
            </div>

            <button
              type="submit"
              className="btn-gold mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
            >
              <CalendarCheck className="h-5 w-5" />
              Confirm Booking
            </button>

            {confirmed && (
              <p className="mt-4 flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                Request received for {slot}. Our team will call you shortly to confirm.
              </p>
            )}
          </form>

          <div className="surface-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Today's slots</h3>
            <p className="mt-1 text-sm text-muted-foreground">Live availability, updated hourly.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {slots.map((s) => (
                <button
                  key={s.time}
                  type="button"
                  disabled={!s.available}
                  onClick={() => setSlot(s.time)}
                  className={`rounded-2xl border px-3 py-3 text-sm font-medium transition-all ${
                    !s.available
                      ? "cursor-not-allowed border-border bg-muted text-muted-foreground line-through opacity-60"
                      : slot === s.time
                        ? "border-primary bg-primary/15 text-foreground shadow-[var(--shadow-glow)]"
                        : "border-border bg-background/50 text-foreground hover:border-primary/50"
                  }`}
                >
                  {s.time}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" /> Available
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" /> Booked
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
