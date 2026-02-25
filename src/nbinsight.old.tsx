import { motion } from "framer-motion";
import { Check } from "lucide-react";

function NavBar() {
  return (
    <div className="w-full px-6 py-4 border-b border-white/10 flex justify-between items-center">
      <div className="text-white font-semibold tracking-wide">NB-Insight</div>
      <div className="text-sm text-white/60">Consumer Insight • Brand Strategy • Growth</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="px-6 py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        Insight That Moves Brands Forward
      </motion.h1>

      <p className="mt-6 max-w-2xl mx-auto text-white/70">
        Strategic consumer insight and growth architecture for ambitious brands navigating complexity.
      </p>
    </section>
  );
}

function Services() {
  const items = [
    "Research Design & Execution",
    "Growth Physics Frameworks",
    "Brand Positioning",
    "Executive Storytelling",
  ];

  return (
    <section className="px-6 py-20 bg-white/5">
      <h2 className="text-3xl font-semibold text-white text-center">Services</h2>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-3 text-white/80">
            <Check className="h-5 w-5 text-white" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-semibold text-white text-center">About</h2>
      <p className="mt-6 max-w-3xl mx-auto text-white/70 text-center">
        NB-Insight partners with luxury and growth-focused brands to translate consumer truth into strategic clarity.
        From qualitative immersion to quantitative rigor, engagements are built to drive confident decisions.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="px-6 py-20 bg-white/5 text-center">
      <h2 className="text-3xl font-semibold text-white">Let’s Work Together</h2>

      <p className="mt-4 text-white/70">nancy@nb-insight.com</p>

      <div className="mt-8">
        <a
          href="mailto:nancy@nb-insight.com"
          className="px-6 py-3 bg-white text-black rounded-md font-medium"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <div className="px-6 py-10 border-t border-white/10 text-center text-sm text-white/40">
      © {new Date().getFullYear()} NB-Insight LLC
    </div>
  );
}

function Approach() {
  const steps = [
    {
      title: "Frame the decision",
      desc: "Start with the decision stakeholders need to make. Define success criteria, trade-offs, and what evidence will change minds.",
    },
    {
      title: "Build the evidence",
      desc: "Right-size the method: qual for depth, quant for confidence, or both for triangulation—always designed to travel across teams.",
    },
    {
      title: "Translate to action",
      desc: "Synthesis that lands: clear implications, prioritization, and a plan for what to do next (not just what we learned).",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Approach</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          A pragmatic process built for speed and rigor—so the output is decision-ready, not just insight-rich.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs uppercase tracking-widest text-white/50">Step {i + 1}</div>
              <div className="mt-2 text-lg font-semibold text-white">{s.title}</div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">How engagements run</div>
            <p className="mt-2 text-sm text-white/70">
              Scope is built around the decision—not a preset template. Typical formats:
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {[
                "Rapid sprints when timing is critical",
                "Focused studies with clear milestones",
                "Multi-phase programs for complex decisions",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">What stakeholders get</div>
            <p className="mt-2 text-sm text-white/70">
              Clean, executive storytelling that aligns teams and drives action:
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {[
                "A tight narrative with proof, not clutter",
                "So-what implications and prioritized actions",
                "Artifacts that travel (slides, exec summary, appendices)",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const items = [
    {
      title: "Equity & authority diagnostics",
      desc: "Quant + qual synthesis that clarifies what builds trust, what erodes it, and where to invest.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Path-to-purchase & touchpoint architecture",
      desc: "What matters, when, and for whom—turning discovery noise into a clear journey system.",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Innovation, claims & messaging",
      desc: "Screening and optimization that ties message to believability, differentiation, and conversion drivers.",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Example work</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Representative engagement types (details adapted to confidentiality).
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                {it.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-white">{it.title}</div>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FractionalSpotlight() {
  const bullets = [
    "Research roadmap + prioritization across stakeholders",
    "Instrument design, vendor guidance, and quality control",
    "Fast synthesis and executive-ready storytelling",
    "Decision support for launches, campaigns, and portfolio moves",
  ];

  return (
    <section className="px-6 py-20 bg-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Fractional insight leadership</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Senior-level consumer insight leadership without a full-time hire—ideal when teams need clarity and momentum.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">Where it fits</div>
            <p className="mt-2 text-sm text-white/70">
              For periods of high strategic load: transformation, innovation pipelines, brand refresh, or multi-market growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Interim coverage", "Roadmap build", "Vendor orchestration", "Storytelling upgrades"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">What you get</div>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {bullets.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do you work with our existing agencies or vendors?",
      a: "Yes. I can lead the thinking, strengthen instruments, and elevate storytelling alongside your partners.",
    },
    {
      q: "Can you support multi-market work (US/FR/CN)?",
      a: "Yes—structures designed for comparability with local nuance where it matters.",
    },
    {
      q: "How quickly can you move?",
      a: "Fast when needed. I often run sprints for immediate decisions and build phased programs for deeper questions.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">FAQ</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold text-white">{f.q}</div>
              <p className="mt-3 text-sm text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      title: "Frame the decision",
      desc: "Start with the decision stakeholders need to make. Define success criteria, trade-offs, and what evidence will change minds.",
    },
    {
      title: "Build the evidence",
      desc: "Right-size the method: qual for depth, quant for confidence, or both for triangulation—always designed to travel across teams.",
    },
    {
      title: "Translate to action",
      desc: "Synthesis that lands: clear implications, prioritization, and a plan for what to do next (not just what we learned).",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Approach</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          A pragmatic process built for speed and rigor—so the output is decision-ready, not just insight-rich.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs uppercase tracking-widest text-white/50">Step {i + 1}</div>
              <div className="mt-2 text-lg font-semibold text-white">{s.title}</div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">How engagements run</div>
            <p className="mt-2 text-sm text-white/70">
              Scope is built around the decision—not a preset template. Typical formats:
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {[
                "Rapid sprints when timing is critical",
                "Focused studies with clear milestones",
                "Multi-phase programs for complex decisions",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">What stakeholders get</div>
            <p className="mt-2 text-sm text-white/70">
              Clean, executive storytelling that aligns teams and drives action:
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {[
                "A tight narrative with proof, not clutter",
                "So-what implications and prioritized actions",
                "Artifacts that travel (slides, exec summary, appendices)",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const items = [
    {
      title: "Equity & authority diagnostics",
      desc: "Quant + qual synthesis that clarifies what builds trust, what erodes it, and where to invest.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Path-to-purchase & touchpoint architecture",
      desc: "What matters, when, and for whom—turning discovery noise into a clear journey system.",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Innovation, claims & messaging",
      desc: "Screening and optimization that ties message to believability, differentiation, and conversion drivers.",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Example work</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Representative engagement types (details adapted to confidentiality).
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                {it.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-white">{it.title}</div>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FractionalSpotlight() {
  const bullets = [
    "Research roadmap + prioritization across stakeholders",
    "Instrument design, vendor guidance, and quality control",
    "Fast synthesis and executive-ready storytelling",
    "Decision support for launches, campaigns, and portfolio moves",
  ];

  return (
    <section className="px-6 py-20 bg-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Fractional insight leadership</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Senior-level consumer insight leadership without a full-time hire—ideal when teams need clarity and momentum.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">Where it fits</div>
            <p className="mt-2 text-sm text-white/70">
              For periods of high strategic load: transformation, innovation pipelines, brand refresh, or multi-market growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Interim coverage", "Roadmap build", "Vendor orchestration", "Storytelling upgrades"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-lg font-semibold text-white">What you get</div>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              {bullets.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do you work with our existing agencies or vendors?",
      a: "Yes. I can lead the thinking, strengthen instruments, and elevate storytelling alongside your partners.",
    },
    {
      q: "Can you support multi-market work (US/FR/CN)?",
      a: "Yes—structures designed for comparability with local nuance where it matters.",
    },
    {
      q: "How quickly can you move?",
      a: "Fast when needed. I often run sprints for immediate decisions and build phased programs for deeper questions.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">FAQ</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold text-white">{f.q}</div>
              <p className="mt-3 text-sm text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NBInsight() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Work />
        <FractionalSpotlight />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}