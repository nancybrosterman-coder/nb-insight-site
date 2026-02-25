import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  FlaskConical,
  Gauge,
  LineChart,
  MessagesSquare,
  Shield,
  Sparkles,
  Users,
  Copy,
  MapPin,
} from "lucide-react";

/**
 * Single-file, production-ready landing site for a solo strategy + consumer insights consultancy.
 * - Tailwind for styling
 * - No external assets required (except optional /public photo)
 * - Replace placeholder copy as needed
 */

const brand = {
  name: "NB-Insight LLC",
  tagline: "From signal to certainty.",
  headline: "From signal to certainty.",
  subhead:
    "I partner directly with brand, product, and insight leaders to translate consumer signals into confident decisions. I surface what matters, interrogate it with consumers, and deliver clarity teams can act on.",
  secondaryCta: "View services",
  email: "nancy@nb-insight.com",
  location: "NYC Metro Area",
};

const nav = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: MessagesSquare,
    title: "Qualitative deep dives (IDIs, groups, triads)",
    bullets: [
      "IDIs with Gen Z and multi-cohort targets (virtual/in-person)",
      "Conversation-led synthesis: tensions, needs, and ‘nuggets’ that change the brief",
      "Co-creation, concept exploration, and experience diagnostics",
    ],
  },
  {
    icon: FlaskConical,
    title: "Product experience & innovation learning",
    bullets: [
      "Unmet needs and friction mapping across the journey",
      "Innovation territory exploration and concept optimization",
      "Category-agnostic: from luxury/beauty to appliances, mobility, and services",
    ],
  },
  {
    icon: Sparkles,
    title: "Communications development",
    bullets: [
      "Message and claim testing grounded in consumer language",
      "Brand voice and narrative refinement from real conversations",
      "Creative implications that are clear, specific, and usable",
    ],
  },
  {
    icon: LineChart,
    title: "Fractional / Interim Insight Lead",
    bullets: [
      "Senior leadership for both qualitative and quantitative workstreams",
      "Own the learning agenda: roadmap, partners, and stakeholder alignment",
      "Step in during leave, transitions, or high-stakes decision windows",
      "Fast ramp, clear synthesis, and decision-ready storytelling",
    ],
  },
];

const proof = [
  { label: "Qualitative Instinct", icon: MessagesSquare },
  { label: "Quantitative Discipline", icon: Gauge },
  { label: "Gen Z IDIs", icon: Users },
  { label: "CPG • Beauty • Luxury", icon: Sparkles },
  { label: "Confidential Handling", icon: Shield },
];

const approachSteps = [
  {
    title: "Define the decision",
    desc: "Start with the business question that matters—then work backward to the minimum evidence needed to decide.",
  },
  {
    title: "Design for learning",
    desc: "Right-sized methods (quant/qual/mixed) with tight measures and clean sampling logic.",
  },
  {
    title: "Synthesize the signal",
    desc: "Translate data into a small set of durable truths—segmented, prioritized, and anchored in proof.",
  },
  {
    title: "Activate",
    desc: "Deliver frameworks, implications, and workshop-ready outputs that plug into creative, comms, and roadmap planning.",
  },
];

const workSamples = [
  {
    title: "Luxury authority & amplification signals",
    tag: "Framework",
    desc: "Built a two-index model to separate true luxury authority from surface-level signaling, clarifying where to invest.",
    outcomes: [
      "Aligned stakeholders on strategic priorities",
      "Translated insight into creative and activation guardrails",
      "Identified high-leverage investment areas",
    ],
  },
  {
    title: "Textured Haircare Market Entry",
    tag: "Mixed methods",
    desc: "Entering the curly/coily (3A–4C) space required more than inclusivity—it required credibility.",
    outcomes: [
      "Surfaced emotional tensions and trust barriers",
      "Defined product, claim, and representation guardrails",
      "Enabled launch decisions grounded in conviction, not assumption",
    ],
  },
  {
    title: "Social-First Campaign Refinement",
    tag: "Qualitative exploration",
    desc: "A social-first campaign introduced a clever construct—but clarity gaps muted persuasion.",
    outcomes: [
      "Diagnosed narrative and product telegraphing breakdowns",
      "Clarified where engagement diverged from conversion",
      "Delivered focused creative refinements to strengthen persuasion",
    ],
  },
];

const faqs = [
  {
    q: "What’s a typical engagement length?",
    a: "Engagements range from focused sprints to multi-step research plans completed in 4–10 weeks. Scope is always structured around the decision and timeline.",
  },
  {
    q: "Can you plug into our existing agency or research partner?",
    a: "Absolutely. I often augment in-house insight teams, creative agencies, or fieldwork partners—tightening the question, elevating synthesis, and sharpening the story.",
  },
  {
    q: "What deliverables do you provide?",
    a: "Common outputs include executive summary decks, growth frameworks, segmentation readouts, journey maps, creative briefs, and workshop facilitation guides—always decision-oriented.",
  },
];

function classNames(...xs: Array<string | undefined | null | false>) {
  return xs.filter(Boolean).join(" ");
}

function Pill({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-sm text-white/80">
      <Icon className="h-4 w-4 text-white/70" />
      <span>{label}</span>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center rounded-full border border-zinc-200/10 bg-zinc-900/40 px-3 py-1 text-xs tracking-wide text-white/70">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-medium tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-base text-white/70 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function AnchorButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-white text-zinc-900 hover:bg-zinc-100"
      : "border border-white/15 bg-white/0 text-white hover:bg-white/10";
  return (
    <a href={href} className={classNames(base, styles)}>
      {children}
    </a>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex flex-col leading-tight">
          <span className="text-xs font-medium tracking-[0.18em] text-white">
            NANCY BROSTERMAN
          </span>
          <span className="text-xs text-white/60">{brand.name}</span>
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <AnchorButton href="#contact" variant="secondary">
            Contact
          </AnchorButton>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl"
            >
              {brand.headline}
            </motion.h1>

            <p className="mt-4 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              {brand.subhead}
            </p>

            <p className="mt-4 text-sm italic text-white/60">
              Insight lives in the tension. I stay there.
            </p>

            <p className="mt-6 text-xs tracking-[0.25em] text-white/60">
              Explore · Sharpen · Unlock
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AnchorButton href="#contact" variant="primary">
                Contact <ChevronRight className="h-4 w-4" />
              </AnchorButton>
              <AnchorButton href="#services" variant="secondary">
                {brand.secondaryCta}
              </AnchorButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {proof.map((p) => (
                <Pill key={p.label} icon={p.icon} label={p.label} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-white/70">
                    What you get — working directly with me
                  </div>
                  <div className="mt-1 text-xl font-medium text-white">
                    Senior-level thinking. Hands-on execution.
                  </div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                  <Gauge className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "A short list of decision-driving truths",
                  "Proof bars and clean frameworks",
                  "Implications that connect insight → action",
                  "A deck your stakeholders will actually read",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="text-sm text-white/75">{t}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Users className="h-4 w-4" /> Typical engagement
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Work is structured around the decision—not preset timelines.
                  Direct partnership means fewer handoffs, tighter thinking, and
                  momentum from day one.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Services"
        title="Right-sized research and strategy"
        subtitle="Quantitative discipline combined with a passion for extracting strategic signal from conversation."
      />

      <div className="mt-4 text-center text-sm text-white/60">
        Experience spans CPG, beauty, luxury, services, media, and beyond.
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card key={s.title} className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-white">{s.title}</div>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <s.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-white/70">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <Card className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold text-white">
              Need a specific deliverable?
            </div>
            <div className="mt-1 text-sm text-white/70">
              Executive summary, segmentation, journey map, workshop, creative
              brief—tell me the decision and I’ll propose the leanest path.
            </div>
          </div>
          <AnchorButton href="#contact" variant="secondary">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </AnchorButton>
        </Card>
      </div>
    </div>
  );
}

function Approach() {
  return (
    <div id="approach" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Approach"
        title="From question to decision"
        subtitle="A disciplined process designed to reduce ambiguity and sharpen decision-making."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {approachSteps.map((s, idx) => (
          <Card key={s.title} className="relative">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
              {idx + 1}
            </div>
            <div className="text-lg font-semibold text-white">{s.title}</div>
            <div className="mt-2 text-sm text-white/70">{s.desc}</div>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card>
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Shield className="h-4 w-4" /> Confidential handling
          </div>
          <p className="mt-2 text-sm text-white/70">
            Conservative data hygiene: de-identified inputs when using AI
            tooling, no raw sensitive datasets, and human-reviewed outputs.
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <FlaskConical className="h-4 w-4" /> Methods that fit
          </div>
          <p className="mt-2 text-sm text-white/70">
            Quant, qual, or mixed—selected for learning efficiency. No
            over-designed research when a clean answer is possible.
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Gauge className="h-4 w-4" /> Executive-ready storytelling
          </div>
          <p className="mt-2 text-sm text-white/70">
            Concise narratives, proof bars, and frameworks that drive
            action—designed for stakeholder attention spans.
          </p>
        </Card>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Work"
        title="Sample engagements"
        subtitle="Selected examples of the kinds of strategic problems I help solve."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {workSamples.map((w) => (
          <Card key={w.title} className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  {w.tag}
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {w.title}
                </div>
                <div className="mt-2 text-sm text-white/70">{w.desc}</div>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <LineChart className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="mt-5">
              <div className="text-sm font-medium text-white/80">Outcomes</div>
              <ul className="mt-2 space-y-2">
                {w.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-white/70" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
              >
                Ask about a similar project <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function FractionalSpotlight() {
  return (
    <div className="relative border-y border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">
              Fractional / Interim Leadership
            </div>
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Fractional insight leadership — built for momentum
            </h3>
            <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
              When your insights leader is on leave, between roles, or your team
              needs elevated strategic oversight, I step in as a trusted
              partner—leading both qualitative and quantitative workstreams and
              flexing from senior guidance to hands-on project direction. I own
              the learning agenda, guide partners, ensure analytic discipline,
              and present directly to executive stakeholders—maintaining
              continuity and accelerating decisions.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Immediate embed with minimal ramp time",
                "Executive presence and clear decision framing",
                "Agency + research partner oversight",
                "Qualitative instinct + quantitative discipline",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="text-sm text-white/75">{t}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <AnchorButton href="#contact" variant="primary">
                Discuss fractional support <ArrowRight className="h-4 w-4" />
              </AnchorButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <div className="text-lg font-semibold text-white">
                Typical scenarios
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4" />
                  Parental or extended leave
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4" />
                  Hiring gap between senior leaders
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4" />
                  Need for short-term strategic elevation
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4" />
                  Executive-level research synthesis for critical decisions
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="About"
        title="Insight leadership, grounded in human truth."
        subtitle="Independent, senior-level partnership across qualitative and quantitative research."
      />

      <div className="mt-4 text-center text-sm text-white/60">
        Experience spans CPG, beauty, luxury, services, media, and beyond.
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4 flex justify-center lg:justify-start lg:pt-8">
          {/* Optional: put your photo in /public as nancy-bw.jpg */}
          <img
            src="/nancy-bw.jpg"
            alt="Nancy Brosterman portrait"
            className="w-64 sm:w-72 rounded-2xl border border-white/10 shadow-lg object-cover"
          />
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="text-lg font-semibold text-white">How I work</div>
            <p className="mt-2 text-sm text-white/70">
              I operate as an independent insight partner—working directly with
              senior stakeholders to translate evidence into strategy. I surface
              tensions in conversation, interrogate what matters with consumers,
              and bring quantitative grounding when needed.
            </p>
            <p className="mt-4 text-sm text-white/70">
              You work directly with me. No junior layers. No handoffs. When
              scale is required, I bring in trusted collaborators—while
              retaining strategic ownership and synthesis.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Qualitative depth with quantitative grounding",
              "Research design and measurement discipline",
              "Multi-market and cross-category perspective",
              "Clear, decision-ready storytelling",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="text-sm text-white/75">{t}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-lg font-semibold text-white">
              International collaboration
            </div>
            <p className="mt-2 text-sm text-white/70">
              I serve as a U.S. strategic partner for international research
              agencies—providing cultural translation and senior-level synthesis
              for global teams operating in the American market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="FAQ"
        title="Questions you may have"
        subtitle="If you have a timeline or deliverable question, I’ll answer it clearly up front."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {faqs.map((f) => (
          <Card key={f.q}>
            <div className="text-base font-semibold text-white">{f.q}</div>
            <div className="mt-2 text-sm text-white/70">{f.a}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [copied, setCopied] = useState<"email" | null>(null);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Project inquiry");
    const body = encodeURIComponent(
      "Hi Nancy,\n\nI’d like to discuss a project. Here’s what we’re trying to decide:\n- Decision: \n- Timeline: \n- Markets/targets: \n- What we have: \n\nBest,"
    );
    return `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <div id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s make the decision easier"
        subtitle="Share the decision you’re facing and your timeline. I’ll respond with a lean plan, scope, and next steps."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        {/* QUICK START (refined) */}
        <Card className="lg:col-span-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-white">Quick start</div>
              <p className="mt-2 text-sm text-white/70">
                The fastest way is email. I’ll reply with a lean plan, scope,
                and next steps.
              </p>
            </div>

            {/* small meta (desktop) */}
            <div className="hidden sm:flex flex-col items-end gap-1 text-xs text-white/60">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {brand.location}
              </div>
            </div>
          </div>

          {/* meta (mobile) */}
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70 sm:hidden">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white/70" />
              {brand.location}
            </div>
          </div>

          {/* CTAs (refined alignment) */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={mailto}
              className="group inline-flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              <span>Email {brand.email}</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(brand.email);
                  setCopied("email");
                  setTimeout(() => setCopied(null), 1200);
                } catch {
                  // ignore
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/0 px-4 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <Copy className="h-4 w-4" />
              Copy email {copied === "email" ? "✓" : ""}
            </button>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-zinc-950/40 p-4">
            <div className="text-sm font-medium text-white">What to include</div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {[
                "The decision you need to make",
                "Timeline and key milestones",
                "Markets/targets",
                "Any existing research",
                "Stakeholders and deliverable format",
                "Constraints (budget, legal, etc.)",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 text-white/70" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* AVAILABILITY */}
        <Card className="lg:col-span-5">
          <div className="text-lg font-semibold text-white">Availability</div>
          <p className="mt-2 text-sm text-white/70">
            Engagements are structured to fit the decision—not a preset
            timeline. I work in focused sprints when speed matters, and design
            deeper, multi-phase studies when the stakes require it.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Rapid sprints when timing is critical",
              "Focused studies with clear milestones",
              "Multi-phase work for complex decisions",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-white/10">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="text-sm text-white/75">{t}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-sm font-medium text-white/80">Capacity</div>
            <p className="mt-2 text-sm text-white/70">
              I limit parallel engagements to protect rigor and responsiveness.
              If you are working toward a fixed deadline, flag it early.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Work />
        <FractionalSpotlight />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}