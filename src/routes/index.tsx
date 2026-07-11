import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const experience = [
  {
    company: "Blue Yonder",
    role: "Lead Software Engineer",
    period: "Jul 2024 — Present",
    bullets: [
      "Lead design and development of a large-scale Transport Optimization SaaS platform used by global enterprises.",
      "Architect multi-tenant microservices handling high-volume transportation and logistics data.",
      "Designed a carrier bid management platform that transforms bids into standardized tariff structures.",
      "Introduced Apache Kafka event-driven processing to improve scalability and reliability.",
      "Mentor a team of 5 engineers through architecture reviews and technical coaching.",
      "Drive CI/CD automation and cloud-native design on Microsoft Azure.",
    ],
  },
  {
    company: "People Tech Group",
    role: "Senior Software Engineer",
    period: "Jan 2023 — Jul 2024",
    bullets: [
      "Led technical design activities and stakeholder discussions.",
      "Built enterprise apps with React, Java, and Spring Boot.",
      "Designed databases, RESTful APIs, and CI/CD pipelines.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Engineer",
    period: "Jul 2021 — Jan 2023",
    bullets: [
      "Developed REST APIs and React/Redux/Next.js applications.",
      "Enhanced CI/CD pipelines and cross-system integration.",
    ],
  },
  {
    company: "BNP Paribas",
    role: "Senior Software Engineer",
    period: "Aug 2020 — Jul 2021",
    bullets: [
      "Feasibility studies, solution design, and Spring Boot + Angular development.",
      "Built monitoring solutions and improved code quality via SonarQube.",
    ],
  },
  {
    company: "Cognizant",
    role: "Software Developer",
    period: "Apr 2018 — Aug 2020",
    bullets: ["Application enhancements, production support, and RCA for critical incidents."],
  },
  {
    company: "Accenture",
    role: "Software Engineer Associate",
    period: "Sep 2014 — Feb 2018",
    bullets: ["Built web applications with HTML/CSS/JS/jQuery and services with Spring MVC + JDBC."],
  },
];

const competencies = [
  "Solution Architecture", "System Design", "Multi-Tenant SaaS", "Distributed Systems",
  "Microservices", "Event-Driven Architecture", "Cloud-Native", "Technical Leadership",
  "Team Mentoring", "CI/CD", "Enterprise Integration", "Agile Delivery",
];

const stack = [
  "Java", "Spring Boot", "React", "Angular", "REST", "Microservices",
  "Apache Kafka", "Azure", "Docker", "Jenkins", "PostgreSQL", "SQL",
];

const projects = [
  {
    n: "01",
    title: "Transport Optimization SaaS",
    context: "Blue Yonder · 2025 - Present",
    tag: "Platform Architecture",
    blurb:
      "Multi-tenant transportation planning platform for global enterprises. Owns architecture across microservices, event pipelines, and Azure cloud services handling high-volume logistics data.",
    stack: ["Java", "Spring Boot", "Kafka", "Azure", "PostgreSQL"],
  },
  {
    n: "02",
    title: "Carrier Bid Management",
    context: "Blue Yonder · 2024 - 2025",
    tag: "Domain Modeling",
    blurb:
      "Designed a system that ingests heterogeneous carrier bids and transforms them into a standardized tariff structure — enabling downstream optimization and procurement analytics.",
    stack: ["Java", "Spring Boot", "REST", "SQL"],
  },
  {
    n: "03",
    title: "User Data Management Services",
    context: "Walmart Global Tech · 2021 - 2023",
    tag: "Full-Stack",
    blurb:
      "Delivered REST APIs and React/Redux/Next.js experiences to enable end users to manage how their data is collected and processed. Contributed in hardening CI/CD pipelines, and resolving integration gaps across upstream systems.",
    stack: ["React", "Next.js", "Redux", "Java", "Jenkins"],
  },
  {
    n: "04",
    title: "Wealth Management Platform",
    context: "BNP Paribas · 2018 - 2021",
    tag: "Finance Domain",
    blurb:
      "Developed a wealth management platform with Spring Boot and Angular. Built monitoring solutions, improved code quality, and contributed to solution design and feasibility studies.",
    stack: ["Spring Boot", "Angular"],
  }
];

function Portfolio() {
  return (
    <main className="min-h-screen text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 hairline-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
          <a href="#top" className="font-display text-lg tracking-tight">
            Manikandan<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-ink-muted">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/manikandan-uthaman-resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground hover:opacity-90 transition"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <p className="text-eyebrow mb-8">01 — Lead Software Engineer · India</p>
            <h1 className="text-hero font-display">
              Architecting<br />
              <em className="italic text-accent">enterprise-scale</em><br />
              SaaS platforms.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pb-6 space-y-6">
            <p className="text-ink-muted max-w-sm text-[15px] leading-relaxed">
              11+ years turning complex business problems into distributed systems, event-driven
              architectures, and multi-tenant products used by global enterprises.
            </p>
            <a
              href="/manikandan-uthaman-resume.pdf"
              download
              className="group inline-flex items-center gap-2 text-sm text-foreground border-b border-accent pb-1 hover:gap-3 transition-all"
            >
              Download résumé (PDF)
              <span className="text-accent">↓</span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline hairline-t hairline-b">
          {[
            { k: "11+", v: "Years shipping" },
            { k: "6", v: "Enterprises served" },
            { k: "15+", v: "Engineers mentored" },
            { k: "24/7", v: "Prod uptime mindset" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-6">
              <div className="font-display text-4xl md:text-5xl text-accent">{s.k}</div>
              <div className="text-eyebrow mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline-b overflow-hidden py-6 bg-surface/40">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-3xl text-ink-dim w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0 items-center">
              {["Walmart Global Tech", "BNP Paribas", "Blue Yonder", "Cognizant", "Accenture", "People Tech"].map((c) => (
                <span key={c} className="flex items-center gap-12">
                  {c}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <p className="col-span-12 md:col-span-3 text-eyebrow">02 — Experience</p>
          <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-6xl tracking-tight">
            A decade of building things<br />
            that <em className="italic text-accent">stay in production.</em>
          </h2>
        </div>

        <div className="space-y-px bg-hairline">
          {experience.map((job, i) => (
            <article key={job.company} className="group bg-background hover:bg-surface transition-colors p-8 md:p-10">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3">
                  <div className="text-eyebrow text-accent">{String(i + 1).padStart(2, "0")}</div>
                  <div className="font-display text-3xl mt-2">{job.company}</div>
                  <div className="text-sm text-ink-muted mt-1">{job.period}</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="text-lg font-medium mb-4">{job.role}</div>
                  <ul className="space-y-2 text-ink-muted">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3">
                        <span className="text-accent mt-2 shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="hairline-t hairline-b bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <p className="col-span-12 md:col-span-3 text-eyebrow">03 — Selected projects</p>
            <h2 className="col-span-12 md:col-span-9 font-display text-5xl md:text-6xl tracking-tight">
              Systems I've owned<br />
              end-to-<em className="italic text-accent">end.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline hairline-t hairline-b">
            {projects.map((p) => (
              <article
                key={p.n}
                className="group bg-background hover:bg-surface-elevated transition-colors p-8 md:p-10 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <div className="text-eyebrow text-accent">{p.n} · {p.tag}</div>
                  {/* <span className="text-ink-dim group-hover:text-accent group-hover:translate-x-1 transition-transform">→</span> */}
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
                  <div className="text-eyebrow mt-2">{p.context}</div>
                </div>
                <p className="text-ink-muted leading-relaxed">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-hairline">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-xs text-ink-muted">
                      {s}
                    </span>
                  )).reduce<React.ReactNode[]>((acc, el, i) => {
                    if (i > 0) acc.push(<span key={`sep-${i}`} className="text-ink-dim">·</span>);
                    acc.push(el);
                    return acc;
                  }, [])}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="hairline-t hairline-b">
        <div className="mx-auto max-w-7xl px-6 py-32 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="text-eyebrow mb-6">04 — Toolkit</p>
            <h2 className="font-display text-5xl">
              Deep in the <em className="italic text-accent">JVM.</em>
            </h2>
            <p className="mt-6 text-ink-muted">
              Backend-heavy full-stack. Comfortable across the stack, sharpest where scale,
              reliability, and architecture matter.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-10">
            <div>
              <div className="text-eyebrow mb-4">Core competencies</div>
              <div className="flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="rounded-full border border-hairline bg-background px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-colors">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-eyebrow mb-4">Technical stack</div>
              <div className="flex flex-wrap gap-2">
                {stack.map((c) => (
                  <span key={c} className="rounded-md bg-background border border-hairline px-4 py-2 text-sm font-mono text-ink-muted">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-3 text-eyebrow">05 — About</p>
          <div className="col-span-12 md:col-span-9 space-y-8">
            <p className="font-display text-3xl md:text-4xl leading-[1.15] tracking-tight">
              I design and lead engineering for products that need to be
              <em className="italic text-accent"> fast, correct, and multi-tenant </em>
              from day one — across supply chain, retail, and banking domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-muted">
              <p>
                At Blue Yonder, I lead architecture for a Transport Optimization SaaS platform used
                by global enterprises — multi-tenant microservices, Kafka-based event pipelines, and
                cloud-native services on Azure.
              </p>
              <p>
                Previously I contributed at Walmart, BNP Paribas, Cognizant, and Accenture — with an
                M.E. from Madras Institute of Technology and a B.E. from MEPCO Schlenk Engineering
                College.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline hairline-t mt-12">
              {[
                ["M.E.", "Madras Institute of Technology, 2014"],
                ["B.E.", "MEPCO Schlenk Eng. College, 2012"],
                ["Domain", "Supply Chain · Retail · Banking"],
                ["Based", "India · Open to relocation"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-6">
                  <div className="font-display text-2xl">{k}</div>
                  <div className="text-xs text-ink-muted mt-2">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="hairline-t bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="text-eyebrow mb-8">06 — Let's talk</p>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="text-hero font-display">
                Building<br />
                something<br />
                <em className="italic text-accent">ambitious?</em>
              </h2>
              <div className="mt-12 space-y-4 text-sm">
                <a href="mailto:manikandan.mit@outlook.com" className="block group">
                  <div className="text-eyebrow">Email</div>
                  <div className="font-display text-xl mt-1 group-hover:text-accent transition-colors">manikandan.mit@outlook.com</div>
                </a>
                <a href="tel:+917502506075" className="block group">
                  <div className="text-eyebrow">Phone</div>
                  <div className="font-display text-xl mt-1 group-hover:text-accent transition-colors">+91 75025 06075</div>
                </a>
                <a href="https://linkedin.com/in/manikandan-uthaman" target="_blank" rel="noreferrer" className="block group">
                  <div className="text-eyebrow">LinkedIn</div>
                  <div className="font-display text-xl mt-1 group-hover:text-accent transition-colors">manikandan-uthaman ↗</div>
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-10 lg:border-l lg:border-hairline">
              <ContactForm />
            </div>
          </div>
        </div>

        <footer className="hairline-t">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-dim">
            <div>© {new Date().getFullYear()} Manikandan Uthaman. All rights reserved.</div>
            <div className="font-mono">Designed & engineered with intent.</div>
          </div>
        </footer>
      </section>
    </main>
  );
}
