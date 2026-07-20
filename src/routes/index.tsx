import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "about", label: "01 // about" },
  { id: "stack", label: "02 // stack" },
  { id: "projects", label: "03 // projects" },
  { id: "experience", label: "04 // experience" },
  { id: "education", label: "05 // education" },
  { id: "contact", label: "06 // contact" },
];

const PROJECTS = [
  {
    name: "Transport Optimization SaaS",
    org: "Blue Yonder",
    year: "2025 — present",
    tag: "MULTI-TENANT / SAAS",
    desc: "Large-scale, multi-tenant platform optimizing global transportation and logistics workloads. Led architecture across services processing high-volume shipment data.",
    stack: ["Java", "Spring Boot", "Microservices", "Kafka", "Azure", "SQL"],
    status: "LIVE",
  },
  {
    name: "Carrier Bid Management",
    org: "Blue Yonder",
    year: "2024 - 2025",
    tag: "DOMAIN PLATFORM",
    desc: "Designed a bid management platform that normalizes heterogeneous carrier bids into standardized tariff structures, powering downstream rate and lane decisions.",
    stack: ["Java", "Spring Boot", "Microservices", "SQL"],
    status: "LIVE",
  },
  {
    name: "User Data Management Services",
    org: "Walmart GLobal Tech",
    year: "2021 - 2023",
    tag: "Retail",
    desc: "Delivered REST APIs and React/Redux/Next.js experiences to enable end users to manage how their data is collected and processed. Contributed in hardening CI/CD pipelines, and resolving integration gaps across upstream systems.",
    stack: ["Java", "Docker", "React", "Next.js"],
    status: "LIVE",
  },
  {
    name: "Wealth Management Platform",
    org: "BNP Paribas",
    year: "2018 — 2021",
    tag: "Financial Services",
    desc: "Developed a wealth management platform with Spring Boot and Angular. Built monitoring solutions, improved code quality, and contributed to solution design and feasibility studies.",
    stack: ["Spring boot", "Angular"],
    status: "LIVE",
  },
  {
    name: "Banking Solution Design",
    org: "BNP Paribas",
    year: "2020 — 2021",
    tag: "BANKING",
    desc: "Feasibility studies and solution design for banking apps. Built Spring Boot + Angular services with SonarQube quality gates and monitoring dashboards.",
    stack: ["Spring Boot", "Angular", "SonarQube"],
    status: "SHIPPED",
  },
];

const SKILLS = [
  { group: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL"] },
  { group: "Frameworks", items: ["Spring Boot", "React", "Angular", "Next.js", "Redux"] },
  { group: "Systems", items: ["Microservices", "Event-Driven", "REST APIs", "Distributed Systems", "Multi-Tenant SaaS"] },
  { group: "Platform", items: ["Microsoft Azure", "Apache Kafka", "Docker", "Jenkins", "PostgreSQL"] },
  { group: "Practice", items: ["Solution Architecture", "System Design", "CI/CD", "Technical Leadership", "Mentoring"] },
];

const EXPERIENCE = [
  {
    company: "Blue Yonder India Pvt Ltd",
    role: "Lead Software Engineer",
    period: "Jul 2024 — Present",
    tag: "SUPPLY CHAIN / SAAS",
    points: [
      "Lead architecture of a large-scale Transport Optimization SaaS used by global enterprises.",
      "Architect multi-tenant microservices handling high-volume transportation and logistics data.",
      "Designed a carrier bid management platform that normalizes bids into standardized tariff structures.",
      "Introduced Apache Kafka event-driven processing to scale reliability and throughput.",
      "Mentor a team of 5 engineers through architecture reviews and technical coaching.",
      "Drive CI/CD automation, architecture governance, and cloud-native design on Azure.",
    ],
  },
  {
    company: "People Tech Group",
    role: "Senior Software Engineer",
    period: "Jan 2023 — Jul 2024",
    tag: "ENTERPRISE",
    points: [
      "Led technical design activities and stakeholder discussions.",
      "Built enterprise applications with React, Java, and Spring Boot.",
      "Designed databases, REST services, and CI/CD pipelines.",
      "Resolved production-critical issues through root-cause analysis.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Engineer",
    period: "Jul 2021 — Jan 2023",
    tag: "RETAIL",
    points: [
      "Developed REST APIs and React / Redux / Next.js applications.",
      "Enhanced CI/CD pipelines and automation.",
      "Resolved integration challenges across enterprise systems.",
    ],
  },
  {
    company: "BNP Paribas",
    role: "Senior Software Engineer",
    period: "Aug 2020 — Jul 2021",
    tag: "BANKING",
    points: [
      "Performed feasibility studies and solution design.",
      "Built Spring Boot and Angular applications.",
      "Delivered monitoring solutions; improved code quality with SonarQube.",
    ],
  },
  {
    company: "Cognizant",
    role: "Software Developer",
    period: "Apr 2018 — Aug 2020",
    tag: "SERVICES",
    points: [
      "Application enhancements and production support.",
      "Root-cause analysis for critical incidents.",
    ],
  },
  {
    company: "Accenture",
    role: "Software Engineer Associate",
    period: "Sep 2014 — Feb 2018",
    tag: "SERVICES",
    points: [
      "Web applications with HTML, CSS, JavaScript, and jQuery.",
      "Backend services using Spring MVC and JDBC.",
    ],
  },
];

const MARQUEE = [
  "Walmart Global Tech",
  "BNP Paribas",
  "Blue Yonder",
  "Cognizant",
  "Accenture",
  "People Tech"
];

function useTypewriter(words: string[], speed = 90, hold = 400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    if (!del && text === current) {
      const t = setTimeout(() => setDel(true), hold);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((n) => n + 1);
      return;
    }
    const t = setTimeout(
      () => setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, hold]);
  return text;
}

function useClock() {
  const [now, setNow] = useState<string>("--:--:--");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")} UTC`,
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

type Theme = "dark" | "light";

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("mu-theme")) as
      | Theme
      | null;
    const initial: Theme = stored ?? "dark";
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      localStorage.setItem("mu-theme", theme);
    } catch {
      /* noop */
    }
  }, [theme]);
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return [theme, toggle];
}

function useScrolled(threshold = 400) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function Index() {
  const typed = useTypewriter([
    "Solution Architecture.",
    "Event-Driven Systems.",
    "Multi-Tenant SaaS Systems.",
    "Cloud-Native Applications.",
    "High Availability Systems.",
  ]);
  const clock = useClock();
  const [theme, toggleTheme] = useTheme();
  const showTop = useScrolled(400);
  const [mx, setMx] = useState({ x: 50, y: 50 });

  return (
    <main
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;
        setMx({ x: (e.clientX / innerWidth) * 100, y: (e.clientY / innerHeight) * 100 });
      }}
    >
      {/* Ambient cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mx.x}% ${mx.y}%, oklch(0.87 0.19 200 / 0.08), transparent 60%)`,
        }}
      />
      {/* Grid */}
      <div aria-hidden className="grid-bg pointer-events-none fixed inset-0 z-0 opacity-40" />
      {/* Scanlines */}
      <div aria-hidden className="scanlines pointer-events-none fixed inset-0 z-0 opacity-60" />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-mono text-xs">
          <a href="#top" className="flex items-center gap-2 text-primary text-glow-cyan">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="tracking-widest">MU//SYS.v11</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden text-muted-foreground md:inline">{clock}</span>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="group relative flex h-8 w-16 items-center border border-border bg-card/60 px-1 tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <span
                className="absolute top-0.5 h-6 w-6 bg-primary transition-all"
                style={{
                  left: theme === "dark" ? "0.125rem" : "calc(100% - 1.625rem)",
                  boxShadow: "0 0 12px oklch(0.87 0.19 200 / 0.6)",
                }}
              />
              <span className="relative z-10 flex w-full justify-between px-1.5 text-[9px]">
                <span className={theme === "dark" ? "text-primary-foreground" : ""}>DK</span>
                <span className={theme === "light" ? "text-primary-foreground" : ""}>LT</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-32">
        <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-widest text-primary">
          <span className="h-px w-10 bg-primary" />
          <span>&gt; INITIALIZING_PROFILE.exe</span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          MANIKANDAN
          <br />
          <span className="text-glow-cyan text-primary">UTHAMAN</span>
          <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-primary" style={{ animation: "blink 1s steps(2) infinite" }} />
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 font-mono text-base text-muted-foreground md:text-lg">
          <span className="text-accent">$</span>
          <span>role --lead-software-engineer --focus=</span>
          <span className="text-primary text-glow-cyan">{typed}</span>
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I architect enterprise-scale SaaS platforms, distributed systems, and cloud-native
          applications. <span className="text-foreground">11+ years</span> designing systems that
          serve global customers across supply chain, retail, and banking.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 border border-primary bg-primary/10 px-6 py-3 tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground box-glow-cyan"
          >
            <span>ESTABLISH_CONNECTION</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/Manikandan_Uthaman_Resume.pdf"
            download
            className="group inline-flex items-center gap-2 border border-border bg-card/40 px-6 py-3 tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span>DOWNLOAD_RESUME.pdf</span>
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 border border-border bg-card/40 px-6 py-3 tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span>./view_experience.sh</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {[
            { k: "11+", v: "YEARS SHIPPING PRODUCTS" },
            { k: "6", v: "Enterprises served" },
            { k: "15+", v: "ENGINEERS MENTORED" },
            { k: "24x7", v: "PROD UPTIME MINDSET" },
          ].map((s) => (
            <div key={s.v} className="bg-card p-6">
              <div className="font-display text-4xl font-bold text-primary text-glow-cyan md:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative z-10 border-y border-border bg-card/40 py-4 overflow-hidden">
        <div
          className="flex whitespace-nowrap font-mono font-bold text-2xl tracking-widest text-muted-foreground"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              <span className="text-primary">◈</span>
              <span>{m}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" index="01" title="ABOUT" subtitle="./whoami">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Lead Software Engineer with{" "}
              <span className="text-foreground">11+ years of experience</span> designing and
              delivering enterprise-scale SaaS products, distributed systems, and cloud-native
              applications.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Proven expertise in solution architecture, system design, microservices, and
              event-driven architectures. I lead engineering teams, mentor developers, and drive
              technical strategy for business-critical platforms.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs">
              {[
                "Solution Architecture",
                "System Design",
                "Multi-Tenant SaaS",
                "Event-Driven",
                "Cloud-Native",
                "Team Leadership",
                "Agile Delivery",
                "Stakeholder Mgmt",
              ].map((t) => (
                <span
                  key={t}
                  className="border border-border bg-card/60 px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  #{t.toLowerCase().replace(/\s+/g, "_")}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="border border-border bg-card/60 p-6 font-mono text-xs backdrop-blur">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <span className="tracking-widest text-primary">STATUS.LOG</span>
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-accent/70" />
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="text-primary">◉</span> location: India</li>
                <li><span className="text-primary">◉</span> role: Lead Software Engineer</li>
                <li><span className="text-primary">◉</span> current: Blue Yonder</li>
                <li><span className="text-primary">◉</span> stack: Java · Springboot · React · Kafka · Azure</li>
                <li><span className="text-primary">◉</span> domain: Supply Chain / Banking / Retail</li>
                <li><span className="text-accent">◉</span> availability: <span className="text-foreground">open to conversations</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* STACK */}
      <Section id="stack" index="02" title="STACK" subtitle="./cat skills.json">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s.group}
              className="group relative border border-border bg-card/40 p-6 transition-all hover:border-primary hover:bg-card/80"
            >
              <div className="absolute right-0 top-0 flex h-8 items-center border-b border-l border-border bg-background/50 px-3 font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-primary">
                {String(SKILLS.indexOf(s) + 1).padStart(2, "0")}
              </div>
              <h3 className="font-mono text-sm tracking-widest text-primary text-glow-cyan">
                {s.group.toUpperCase()}
              </h3>
              <ul className="mt-5 space-y-2 font-mono text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent">▸</span>
                    <span className="transition-colors group-hover:text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" index="03" title="PROJECTS" subtitle="./ls -la ~/projects">
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-primary hover:bg-card/80 md:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 0%, oklch(0.87 0.19 200 / 0.06) 100%)",
                }}
              />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between font-mono text-[10px] tracking-widest">
                  <span className="text-accent">
                    [{String(i + 1).padStart(2, "0")}] {p.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-primary">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary md:text-3xl">
                  {p.name}
                </h3>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  @ {p.org} · {p.year}
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-border bg-background/60 px-2 py-1 tracking-widest text-muted-foreground transition-colors group-hover:border-accent/50 group-hover:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" index="04" title="EXPERIENCE" subtitle="./git log --author=mu">
        <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
          {EXPERIENCE.map((e, idx) => (
            <li key={e.company} className="relative">
              <span
                className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-primary md:-left-[45px]"
                style={{
                  boxShadow: "0 0 0 4px oklch(0.13 0.02 260), 0 0 16px oklch(0.87 0.19 200 / 0.8)",
                }}
              />
              <div className="group border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-primary hover:bg-card/80 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-2 font-mono text-[10px] tracking-widest text-accent">
                      [{String(EXPERIENCE.length - idx).padStart(2, "0")}] {e.tag}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      {e.role}
                    </h3>
                    <div className="mt-1 font-mono text-sm text-primary text-glow-cyan">
                      @ {e.company}
                    </div>
                  </div>
                  <span className="border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* EDUCATION */}
      <Section id="education" index="05" title="EDUCATION" subtitle="./ls -la ~/edu">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              deg: "Master of Engineering (M.E.)",
              school: "Madras Institute of Technology",
              loc: "Chennai, India",
              yrs: "2012 — 2014",
            },
            {
              deg: "Bachelor of Engineering (B.E.)",
              school: "MEPCO Schlenk Engineering College",
              loc: "Sivakasi, India",
              yrs: "2008 — 2012",
            },
          ].map((e) => (
            <div
              key={e.deg}
              className="border border-border bg-card/40 p-6 transition-all hover:border-accent hover:bg-card/80"
            >
              <div className="font-mono text-[10px] tracking-widest text-accent">{e.yrs}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{e.deg}</h3>
              <div className="mt-2 font-mono text-sm text-primary">{e.school}</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{e.loc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" index="06" title="CONTACT" subtitle="./establish_connection.sh">
        <div className="border border-border bg-card/40 p-8 backdrop-blur md:p-12">
          <div className="font-mono text-sm text-muted-foreground">
            <div>
              <span className="text-primary">mu@sys</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted-foreground">$ </span>
              <span>whoami --contact</span>
            </div>
            <div className="mt-2 pl-4 text-foreground">&gt; opening secure channels...</div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "EMAIL",
                value: "manikandan.mit@outlook.com",
                href: "mailto:manikandan.mit@outlook.com",
              },
              {
                label: "LINKEDIN",
                value: "/in/manikandan-uthaman",
                href: "https://linkedin.com/in/manikandan-uthaman",
              },
              {
                label: "GITHUB",
                value: "/manikandan-uthaman",
                href: "https://github.com/manikandan-uthaman",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block border border-border bg-background/50 p-5 transition-all hover:border-primary hover:box-glow-cyan"
              >
                <div className="font-mono text-[10px] tracking-widest text-accent">
                  &gt; {c.label}
                </div>
                <div className="mt-2 truncate font-mono text-sm text-foreground group-hover:text-primary">
                  {c.value}
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-muted-foreground">
                  <span>CONNECT</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span>signal: strong · latency: minimal · encryption: end-to-end</span>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} <span className="text-primary">Manikandan Uthaman</span>.
            all systems operational.
          </div>
          <div className="tracking-widest">BUILT.WITH_&lt;COFFEE/&gt;_&_&lt;CODE/&gt;</div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      {/* <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Move to top"
        className={`group fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-primary bg-background/80 px-4 py-3 font-mono text-xs tracking-widest text-primary backdrop-blur-md transition-all box-glow-cyan hover:bg-primary hover:text-primary-foreground ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
        <span className="hidden sm:inline">TOP</span>
      </button> */}
    </main>
  );
}

function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
            <span>{index}</span>
            <span className="h-px w-10 bg-accent" />
            <span>{subtitle}</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            {title.split("").map((c, i) => (
              <span key={i} className={i % 3 === 0 ? "text-primary text-glow-cyan" : ""}>
                {c}
              </span>
            ))}
          </h2>
        </div>
        <div className="font-mono text-xs tracking-widest text-muted-foreground">
          [ SECTION_{index} ]
        </div>
      </div>
      {children}
    </section>
  );
}
