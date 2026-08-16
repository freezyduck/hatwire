import { createFileRoute } from "@tanstack/react-router";
import { HatwireLogo } from "@/components/HatwireLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HatWire — System Design · Embedded Electronics · Defence" },
      {
        name: "description",
        content:
          "Marcin Kołodziej — Systems Engineer and Technical Lead. 15+ years in embedded systems, system integration and defence technologies.",
      },
      {
        property: "og:title",
        content: "HatWire — System Design · Embedded Electronics · Defence",
      },
      {
        property: "og:description",
        content:
          "Systems Engineer and Technical Lead — embedded systems, system integration and defence technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EXPERTISE = [
  {
    no: "01",
    title: "System Design & Integration",
    desc: "System architecture, requirements engineering, interface definition, system integration and technical leadership of complex engineering projects.",
  },
  {
    no: "02",
    title: "Embedded Electronics & Software",
    desc: "Embedded systems, real-time software, low-level programming, electronics and communication interfaces for demanding industrial and defence applications.",
  },
  {
    no: "03",
    title: "Defence & Mission Systems",
    desc: "UAV systems, C4ISR, tactical networks, sensor systems, communication systems and naval weapon systems.",
  },
  {
    no: "04",
    title: "Technical Leadership",
    desc: "Leading engineering teams, coordinating multidisciplinary projects, working with external partners and supporting system deployment, integration and customer acceptance.",
  },
];

const EXPERIENCE = [
  "Embedded and real-time systems",
  "UAV avionics and mission systems",
  "EO/IR observation systems",
  "C4ISR and tactical networks",
  "System and subsystem integration",
  "Communication and networking systems",
  "Sensor and radar integration",
  "Naval weapon systems",
  "Defence electronics and software",
  "Industrial monitoring systems",
];

const SECTORS = ["Defence", "UAV", "C4ISR", "Industrial"];

const EMAIL_DIRECT = "marcin.kolodziej@hatwire.com.pl";
const EMAIL_GENERAL = "contact@hatwire.com.pl";
const LINKEDIN = "https://www.linkedin.com/in/marcin-kolodziej-hatwire";

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* technical grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
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

      <main className="relative mx-auto w-full max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
        {/* Header */}
        <header className="flex items-center justify-between">
          <HatwireLogo className="h-12 w-auto sm:h-16" />
          <div className="hidden gap-2 sm:flex">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-brand-navy/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand-navy/80"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* Hero */}
        <section className="pt-16 sm:pt-24">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-brand-navy">
            System Design · Embedded Electronics · Defence
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Systems engineer and technical lead for
            <span className="text-brand-navy"> mission-critical</span> electronics.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ink/70 sm:text-lg">
            15+ years of experience in embedded systems, system integration and defence
            technologies — combining embedded electronics, software and system-level engineering
            across the full development lifecycle, from architecture and requirements to
            deployment and customer acceptance.
          </p>
        </section>

        {/* What I do */}
        <section className="pt-16 sm:pt-20">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-ink/50">
            What I do
          </h2>
          <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-brand-navy/15 bg-brand-navy/15 sm:grid-cols-2">
            {EXPERTISE.map((e) => (
              <article key={e.no} className="bg-background/85 p-6 backdrop-blur-sm sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-semibold text-brand-lilac">{e.no}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-navy">
                    {e.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{e.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Selected experience */}
        <section className="pt-16 sm:pt-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr] sm:gap-16">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-ink/50">
                Selected experience
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                Over 15 years of engineering experience across defence, UAV, C4ISR, industrial and
                transportation sectors — collaborating with engineering teams, technology partners
                and end users.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {EXPERIENCE.map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-3 border-b border-brand-navy/10 pb-3 text-sm text-brand-ink/80"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lilac"
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <footer className="mt-20 border-t border-brand-navy/15 pt-8 sm:mt-24">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-ink/50">
            Contact
          </h2>
          <p className="mt-4 text-2xl font-semibold text-brand-ink sm:text-3xl">
            Marcin Kołodziej
          </p>
          <p className="mt-1 text-sm text-brand-ink/60">Systems Engineer · Technical Lead</p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <a
                href={`mailto:${EMAIL_DIRECT}`}
                className="block text-lg font-medium text-brand-navy underline decoration-brand-lilac decoration-2 underline-offset-[6px] transition-colors hover:text-brand-ink"
              >
                {EMAIL_DIRECT}
              </a>
              <a
                href={`mailto:${EMAIL_GENERAL}`}
                className="block text-base text-brand-ink/70 underline decoration-brand-navy/30 underline-offset-[5px] transition-colors hover:text-brand-navy"
              >
                {EMAIL_GENERAL}
                <span className="ml-2 text-xs uppercase tracking-wider text-brand-ink/40">
                  general enquiries
                </span>
              </a>
            </div>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/25 px-5 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy hover:text-background"
            >
              <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="mt-10 text-xs text-brand-ink/40">
            © {new Date().getFullYear()} HatWire. Poland.
          </p>
        </footer>
      </main>
    </div>
  );
}
