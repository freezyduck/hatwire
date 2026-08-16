import { createFileRoute } from "@tanstack/react-router";
import { HatwireLogo } from "@/components/HatwireLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HatWire — Defence Electronics & System Design" },
      {
        name: "description",
        content:
          "HatWire designs and engineers electronics and systems for the defence sector: embedded hardware, RF, power and full system architecture.",
      },
      { property: "og:title", content: "HatWire — Defence Electronics & System Design" },
      {
        property: "og:description",
        content:
          "Electronics and system design for defence: embedded hardware, RF, power and system architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CAPABILITIES = [
  {
    title: "Defence electronics",
    desc: "Rugged embedded hardware, sensor interfaces and mission electronics built for harsh environments.",
  },
  {
    title: "System design",
    desc: "Architecture, requirements and integration — from concept and trade studies to a verified system.",
  },
  {
    title: "RF, power & signals",
    desc: "Analog and RF front-ends, power conversion and signal chains designed for EMC-critical platforms.",
  },
];

const EMAIL = "kontakt@hatwire.com.pl";
const LINKEDIN = "https://www.linkedin.com/company/hatwire";

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* technical grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--brand-navy) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--brand-navy) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-[-10rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-violet) 55%, transparent), transparent 70%)",
        }}
      />

      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between px-6 py-14 sm:px-10 sm:py-20">
        <header>
          <HatwireLogo className="h-14 w-auto sm:h-20" />
        </header>

        <section className="py-16 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-brand-navy">
            Defence electronics · System design
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Electronics and systems engineered for
            <span className="text-brand-navy"> mission-critical</span> use.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ink/70 sm:text-lg">
            HatWire is an engineering studio working with defence and industrial partners on
            hardware, signal chains and complete system architecture — from first concept to
            qualified design.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink/50">
            Elektronika i projektowanie systemów dla sektora obronnego.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-brand-navy/15 bg-brand-navy/15 sm:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="bg-background/80 p-6 backdrop-blur-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-navy">
                  {c.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{c.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-brand-navy/15 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-ink/50">Contact</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 inline-block text-lg font-medium text-brand-navy underline decoration-brand-lilac decoration-2 underline-offset-[6px] transition-colors hover:text-brand-ink sm:text-2xl"
              >
                {EMAIL}
              </a>
            </div>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/25 px-5 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy hover:text-background"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-xs text-brand-ink/40">
            © {new Date().getFullYear()} HatWire. Poland.
          </p>
        </footer>
      </main>
    </div>
  );
}
