import { useEffect, useState, useRef, useCallback, type ReactNode } from "react"
import {
  CALENDAR_URL,
  CONTACT_EMAIL,
  DRAFT_AND_DEPLOY_URL,
  MAILTO_URL,
} from "./config"
import logoSymbol from "./assets/second-algorithm-symbol.png"

/* ==========================================================================
   PRECISION SVG ICON LIBRARY (Strictly viewBox normalized, zero alignment shift)
   ========================================================================== */
function IconArrowRight() {
  return (
    <svg
      className="icon-box"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconArrowUpRight() {
  return (
    <svg
      className="icon-box"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCornerDown() {
  return (
    <svg
      className="icon-box"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3V11M8 11L4.5 7.5M8 11L11.5 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg
      className="icon-box"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="3.5"
        width="11"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M2.5 6.5H13.5M5.5 2V4M10.5 2V4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PillarIcon({ type }: { type: string }) {
  const icons: Record<string, ReactNode> = {
    CONTEXT: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="10"
          cy="10"
          r="7.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 2"
        />
        <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      </svg>
    ),
    MEMORY: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="3.5"
          width="13"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M7 3.5V16.5M13 3.5V16.5M3.5 10H16.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    RETRIEVAL: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M13.5 13.5L16.5 16.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    REASONING: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 15V10C5 7.23858 7.23858 5 10 5H15M15 5L12 2M15 5L12 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="5" cy="15" r="2" fill="currentColor" />
      </svg>
    ),
    EVALUATION: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="10"
          cy="10"
          r="7.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M10 5.5V10L13 13"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    "TOOL USE": (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14.5 3.5C13 2 10.5 2 9 3.5L3.5 9C2 10.5 2 13 3.5 14.5C5 16 7.5 16 9 14.5L14.5 9C16 7.5 16 5 14.5 3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
    DEPLOYMENT: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 14.5H14C16 14.5 17.5 13 17.5 11C17.5 9.2 16.2 7.7 14.5 7.5C14.2 5 12.2 3.5 10 3.5C7.8 3.5 6 4.8 5.5 7C3.8 7.3 2.5 8.8 2.5 10.5C2.5 12.7 4.2 14.5 6 14.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
    PRIVACY: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 2.5L3.5 5.5V10C3.5 14 6.5 17 10 18C13.5 17 16.5 14 16.5 10V5.5L10 2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
    RELIABILITY: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 9V6C6 3.79 7.79 2 10 2C12.21 2 14 3.79 14 6V9"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="4"
          y="9"
          width="12"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  }
  return icons[type] || <div className="pillar-icon-wrap" />
}

/* ==========================================================================
   STATIC DATA PRESERVATION
   ========================================================================== */
const loopStages = [
  "RESEARCH",
  "PROTOTYPE",
  "ENGINEER",
  "DEPLOY",
  "MEASURE",
  "LEARN",
]

const pipelineSteps = [
  { idx: "01", name: "INPUT" },
  { idx: "02", name: "CONTEXT" },
  { idx: "03", name: "MODEL" },
  { idx: "04", name: "REASONING" },
  { idx: "05", name: "ACTION" },
  { idx: "06", name: "OUTCOME" },
]

const pillars = [
  { label: "CONTEXT", desc: "Understanding what surrounds the question" },
  { label: "MEMORY", desc: "Retaining what matters across interactions" },
  { label: "RETRIEVAL", desc: "Finding the right knowledge at the right time" },
  { label: "REASONING", desc: "Moving beyond pattern matching to inference" },
  { label: "EVALUATION", desc: "Measuring behavior in real conditions" },
  { label: "TOOL USE", desc: "Connecting intelligence to capability" },
  { label: "DEPLOYMENT", desc: "Running reliably in production environments" },
  { label: "PRIVACY", desc: "Keeping data where it belongs" },
  { label: "RELIABILITY", desc: "Behaving predictably under pressure" },
]

const researchTopics = [
  {
    number: "01",
    tab: "01 / EFFICIENT",
    title: "Efficient intelligence",
    description: "Models and systems with a practical operational footprint.",
    detail:
      "Exploring quantization, distillation, and architectural efficiency to make powerful models viable in resource-constrained environments.",
    specs: [
      { key: "TARGET FOOTPRINT", val: "< 4GB RAM" },
      { key: "TECHNIQUES", val: "AWQ / INT4 / Speculative" },
      { key: "LATENCY TARGET", val: "< 18ms TTFT" },
      { key: "STATUS", val: "ACTIVE / PROD TEST" },
    ],
  },
  {
    number: "02",
    tab: "02 / PRIVATE AI",
    title: "Private AI",
    description:
      "Intelligence designed to stay close to sensitive information.",
    detail:
      "Investigating local inference, federated approaches, and privacy-preserving architectures that keep data where it belongs.",
    specs: [
      { key: "INFERENCE", val: "Zero-Cloud / On-Device" },
      { key: "TELEMETRY", val: "Disabled / Air-gapped" },
      { key: "LOCAL STORAGE", val: "Encrypted SQLite Vector" },
      { key: "STATUS", val: "BENCHMARKING" },
    ],
  },
  {
    number: "03",
    tab: "03 / AGENTIC",
    title: "Agentic systems",
    description:
      "Bounded workflows that can plan, reason, and take useful action.",
    detail:
      "Building frameworks for autonomous AI agents with clear boundaries, tool use, and reliable execution patterns.",
    specs: [
      { key: "EXECUTION", val: "Deterministic State-Machine" },
      { key: "SANDBOX", val: "Wasm / Isolated Subprocess" },
      { key: "HUMAN GATES", val: "Async Confirmation" },
      { key: "STATUS", val: "FRAMEWORK V2.1" },
    ],
  },
]

const archNodes = [
  { num: "01", title: "Context & Ingestion" },
  { num: "02", title: "Retrieval & Indexing" },
  { num: "03", title: "Model & Inference" },
  { num: "04", title: "Reasoning & Routing" },
  { num: "05", title: "Tool & Action" },
  { num: "06", title: "Evaluation & Loop" },
]

const archCategories = [
  "Production Guardrails",
  "Local / Edge Deployment",
  "Human-in-the-Loop",
  "Deterministic Fallbacks",
]

const systems = [
  "Context engines & retrieval architectures",
  "Multi-agent orchestration frameworks",
  "On-device & local inference pipelines",
  "Evaluation suites & behavioral benchmarking",
  "Production guardrails & deterministic fallbacks",
  "Human-in-the-loop operational interfaces",
]

const work = [
  {
    number: "01",
    kind: "AGENTIC OS",
    title: "Autonomous Workflow Engine",
    description:
      "Deterministic task planning, bounded execution, and tool orchestration built for complex enterprise workflows.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    alt: "Autonomous workflow system visualization",
  },
  {
    number: "02",
    kind: "EDGE RUNTIME",
    title: "Private On-Device Core",
    description:
      "Low-latency quantized model runner operating entirely client-side with zero telemetry or data leakage.",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    alt: "Edge runtime system visualization",
  },
  {
    number: "03",
    kind: "CONTEXT ENGINE",
    title: "Dynamic Knowledge Fabric",
    description:
      "Multi-modal retrieval and hybrid graph indexing enabling real-time reasoning across deep repositories.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    alt: "Context engine system visualization",
  },
]

/* ==========================================================================
   ROUTER & NAVIGATION HELPER
   Zero reload SPA navigation with seamless anchor scrolling.
   ========================================================================== */
function RouteLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={(event) => {
        if (href.startsWith("/")) {
          event.preventDefault()
          const [pathPart, hashPart] = href.split("#")
          const targetPath = pathPart || "/"

          if (window.location.pathname !== targetPath) {
            window.history.pushState({}, "", href)
            window.dispatchEvent(new PopStateEvent("popstate"))
            if (hashPart) {
              setTimeout(() => {
                const el = document.getElementById(hashPart)
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" })
                }
              }, 120)
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          } else if (hashPart) {
            window.history.pushState({}, "", href)
            const el = document.getElementById(hashPart)
            if (el) {
              el.scrollIntoView({ behavior: "smooth" })
            }
          } else {
            window.history.pushState({}, "", href)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>{children}</span>
      <IconArrowUpRight />
    </a>
  )
}

/* ==========================================================================
   HEADER COMPONENT
   Strictly aligned header bar with mobile drawer.
   ========================================================================== */
function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}) {
  const close = () => setMenuOpen(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) close()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  })

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="header-wrapper">
      <div className="shell header-inner">
        <RouteLink href="/" className="brand-link" onClick={close}>
          <img
            src={logoSymbol}
            alt="Second Algorithm Symbol"
            className="brand-symbol"
          />
          <span>SECOND ALGORITHM</span>
        </RouteLink>

        <nav className="nav-links" aria-label="Primary navigation">
          <RouteLink href="/#research" className="nav-item">
            Research
          </RouteLink>
          <RouteLink href="/#systems" className="nav-item">
            Systems
          </RouteLink>
          <RouteLink href="/#studio" className="nav-item">
            Studio
          </RouteLink>
          <RouteLink href="/#work" className="nav-item">
            Work
          </RouteLink>
          <RouteLink href="/about" className="nav-item">
            Who we are
          </RouteLink>
          <a
            className="nav-cta"
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Start a conversation</span>
            <IconArrowUpRight />
          </a>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}>
        <RouteLink
          href="/#research"
          className="mobile-nav-item"
          onClick={close}
        >
          Research
        </RouteLink>
        <RouteLink href="/#systems" className="mobile-nav-item" onClick={close}>
          Systems
        </RouteLink>
        <RouteLink href="/#studio" className="mobile-nav-item" onClick={close}>
          Studio
        </RouteLink>
        <RouteLink href="/#work" className="mobile-nav-item" onClick={close}>
          Work
        </RouteLink>
        <RouteLink href="/about" className="mobile-nav-item" onClick={close}>
          Who we are
        </RouteLink>
        <a
          className="nav-cta"
          href={CALENDAR_URL}
          target="_blank"
          rel="noreferrer noopener"
          onClick={close}
        >
          <span>Start a conversation</span>
          <IconArrowUpRight />
        </a>
      </div>
    </header>
  )
}

/* ==========================================================================
   FOOTER COMPONENT
   Structured editorial finish with manifesto card.
   ========================================================================== */
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer-wrapper">
      <div className="shell">
        <div className="footer-top-grid">
          <div>
            <p className="footer-brand-title">SECOND ALGORITHM</p>
            <p className="footer-brand-desc">
              Applied AI research &amp; engineering. Building intelligent
              systems around real-world work.
            </p>
          </div>

          <div className="footer-nav-columns">
            <RouteLink href="/#research" className="footer-link-anchor">
              Research
            </RouteLink>
            <RouteLink href="/#systems" className="footer-link-anchor">
              Systems
            </RouteLink>
            <RouteLink href="/#studio" className="footer-link-anchor">
              Studio
            </RouteLink>
            <RouteLink href="/#work" className="footer-link-anchor">
              Work
            </RouteLink>
            <RouteLink href="/about" className="footer-link-anchor">
              Who we are
            </RouteLink>
            <RouteLink href="/#contact" className="footer-link-anchor">
              Contact
            </RouteLink>
            <RouteLink href="/privacy" className="footer-link-anchor">
              Privacy policy
            </RouteLink>
            <RouteLink href="/terms" className="footer-link-anchor">
              Terms &amp; conditions
            </RouteLink>
            <a
              href={DRAFT_AND_DEPLOY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link-anchor"
            >
              <span>Draft &amp; Deploy</span>
              <IconArrowUpRight />
            </a>
          </div>

          <div className="footer-manifesto-card">
            THE FIRST ALGORITHM
            <br />
            FOLLOWS THE RULES.
            <br />
            <br />
            THE SECOND
            <br />
            CHANGES THEM.
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} SECOND ALGORITHM. ALL RIGHTS RESERVED.
          </div>
          <button type="button" onClick={scrollToTop} className="underlink">
            <span>Back to top</span>
            <IconCornerDown />
          </button>
        </div>
      </div>
    </footer>
  )
}

/* ==========================================================================
   HOMEPAGE COMPONENT
   Complete content preserved, zero alignment flaws.
   ========================================================================== */
function Home() {
  // Loop cycle timer
  const [activeLoopIdx, setActiveLoopIdx] = useState(0)
  const [highlightedPipelineNode, setHighlightedPipelineNode] = useState(0)
  const [activeResearchTab, setActiveResearchTab] = useState(0)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  // Cycle loop animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLoopIdx((prev) => (prev + 1) % loopStages.length)
      setHighlightedPipelineNode((prev) => (prev + 1) % pipelineSteps.length)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Normal mailto submission handling with visual acknowledgment
    setContactSubmitted(true)
  }

  return (
    <main id="main">
      {/* ====================================================================
          HERO SECTION
          ==================================================================== */}
      <section className="hero-section" id="top">
        <div className="shell">
          <div className="hero-header-meta">
            <div className="eyebrow">SECOND ALGORITHM / 001</div>
            <div className="hero-status-pill">
              <span className="pulse-dot" />
              <span>LAB TELEMETRY: ACTIVE</span>
            </div>
          </div>

          <div className="hero-main-grid">
            <div>
              <h1>
                THE MODEL IS
                <br />
                ONLY THE <em>BEGINNING.</em>
              </h1>
            </div>
            <div>
              <p className="hero-lead-text">
                Second Algorithm researches, engineers, and deploys intelligent
                systems built around real-world work.
              </p>
            </div>
          </div>

          <div className="hero-controls">
            <div className="hero-tags-group">
              <span className="hero-tag">APPLIED AI</span>
              <span className="hero-tag">RESEARCH</span>
              <span className="hero-tag">ENGINEERING</span>
              <span className="hero-tag">PRODUCTS</span>
            </div>
            <div className="hero-actions-group">
              <a className="btn btn-primary" href="#systems">
                <span>Explore our systems</span>
                <IconArrowRight />
              </a>
              <ExternalLink className="underlink" href={CALENDAR_URL}>
                Start a conversation
              </ExternalLink>
            </div>
          </div>

          {/* Interactive Pipeline Architecture Flow */}
          <div
            className="pipeline-container"
            aria-label="A model system flow from input to outcome"
          >
            <div className="pipeline-header">
              <span className="pipeline-title">
                COMPUTE PIPELINE ARCHITECTURE
              </span>
              <span className="pipeline-sub">LIVE FLOW SEQUENCER</span>
            </div>
            <div className="pipeline-track">
              {pipelineSteps.map((step, idx) => (
                <div
                  key={step.idx}
                  className={`pipeline-node ${
                    highlightedPipelineNode === idx ? "is-highlighted" : ""
                  }`}
                  onClick={() => setHighlightedPipelineNode(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="pipeline-step-idx">{step.idx}</span>
                  <span className="pipeline-step-name">{step.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          THE SECOND ALGORITHM (THE LOOP)
          ==================================================================== */}
      <section className="section-pad">
        <div className="shell">
          <div className="split-heading">
            <div>
              <p className="eyebrow">THE SECOND ALGORITHM</p>
              <h2>
                THE WORK
                <br />
                SHOULD <em>TEACH US.</em>
              </h2>
            </div>
            <p>Research only matters when it changes what gets built next.</p>
          </div>

          <div className="loop-wrapper">
            <div className="loop-grid">
              {loopStages.map((stage, index) => {
                const isActive = activeLoopIdx === index
                return (
                  <div
                    key={stage}
                    className={`loop-card ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveLoopIdx(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="loop-card-top">
                      <span className="loop-card-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="loop-card-arrow">
                        <IconCornerDown />
                      </span>
                    </div>
                    <strong className="loop-card-label">{stage}</strong>
                  </div>
                )
              })}
            </div>

            <div className="loop-ribbon">
              RESEARCH → PROTOTYPE → ENGINEER → DEPLOY → MEASURE → LEARN →
              RESEARCH
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          THE PROBLEM (INTRO & 9 PILLARS)
          ==================================================================== */}
      <section className="section-pad" style={{ background: "#0e120f" }}>
        <div className="shell">
          <p className="eyebrow">THE PROBLEM</p>
          <div className="split-heading">
            <h2>
              AI IS MOVING FROM
              <br />A MODEL PROBLEM
              <br />
              TO A <em>SYSTEMS PROBLEM.</em>
            </h2>
            <p>
              Foundation models are a commodity. Useful systems demand deep
              architectural engineering across data, latency, reliability, and
              human constraints.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div className="pillar-card" key={pillar.label}>
                <div className="pillar-card-header">
                  <span className="pillar-badge">{pillar.label}</span>
                  <div className="pillar-icon-wrap">
                    <PillarIcon type={pillar.label} />
                  </div>
                </div>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          01 / RESEARCH SECTION (PAPER THEME + INTERACTIVE LAB TERMINAL)
          ==================================================================== */}
      <section className="section-pad light-section" id="research">
        <div className="shell">
          <p className="eyebrow">01 / RESEARCH</p>
          <div className="split-heading">
            <h2>
              RESEARCHING WHAT MAKES
              <br />
              AI ACTUALLY <em>USEFUL.</em>
            </h2>
            <p>
              We focus on the gap between a promising model and a system people
              can depend on.
            </p>
          </div>

          {/* 3 Research Cards */}
          <div className="research-cards-grid">
            {researchTopics.map((topic, idx) => (
              <article
                key={topic.number}
                className="research-card"
                onClick={() => setActiveResearchTab(idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="research-card-num">{topic.number} / TOPIC</div>
                <h3 className="research-card-title">{topic.title}</h3>
                <p className="research-card-desc">{topic.description}</p>
                <div className="research-card-footer">
                  <span className="research-card-action">
                    Inspect telemetry
                    <IconArrowRight />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Research Terminal Inspector */}
          <div className="lab-terminal">
            <div className="lab-terminal-chrome">
              <div className="terminal-dots">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
              </div>
              <span className="terminal-identity">
                SECOND ALGORITHM / RESEARCH BENCHMARK
              </span>
              <span className="terminal-live-badge">INDEX / LIVE</span>
            </div>

            <div className="lab-terminal-body">
              <div className="terminal-tabs">
                {researchTopics.map((t, idx) => (
                  <button
                    key={t.tab}
                    type="button"
                    className={`terminal-tab-btn ${
                      activeResearchTab === idx ? "is-active" : ""
                    }`}
                    onClick={() => setActiveResearchTab(idx)}
                  >
                    {t.tab}
                  </button>
                ))}
              </div>

              <div className="terminal-content-view">
                <div>
                  <h4 style={{ fontSize: 18, marginBottom: 12 }}>
                    {researchTopics[activeResearchTab].title}
                  </h4>
                  <p className="terminal-detail-lead">
                    {researchTopics[activeResearchTab].detail}
                  </p>
                </div>
                <div className="terminal-specs-box">
                  {researchTopics[activeResearchTab].specs.map((s) => (
                    <div className="terminal-spec-row" key={s.key}>
                      <span className="spec-key">{s.key}:</span>
                      <span className="spec-val">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SYSTEM ARCHITECTURE SECTION
          ==================================================================== */}
      <section className="section-pad" aria-labelledby="arch-title">
        <div className="shell">
          <p className="eyebrow">SYSTEM ARCHITECTURE</p>
          <div className="split-heading">
            <h2 id="arch-title">
              HOW WE THINK
              <br />
              ABOUT <em>AI SYSTEMS.</em>
            </h2>
            <p>
              Every system we build follows a progression from raw data to
              useful product.
            </p>
          </div>

          <div className="arch-flow-grid">
            {archNodes.map(({ num, title }) => (
              <div className="arch-node-card" key={num}>
                <div className="arch-node-top">
                  <span className="arch-node-num">{num}</span>
                  <IconArrowRight />
                </div>
                <h3 className="arch-node-title">{title}</h3>
              </div>
            ))}
          </div>

          <div className="arch-categories-list">
            {archCategories.map((cat) => (
              <div className="arch-cat-pill" key={cat}>
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          02 / SYSTEMS SECTION
          ==================================================================== */}
      <section
        className="section-pad"
        id="systems"
        style={{ background: "#0c0f0d" }}
      >
        <div className="shell">
          <p className="eyebrow">02 / SYSTEMS</p>
          <div className="split-heading">
            <h2>
              INTELLIGENCE SHOULD
              <br />
              WORK INSIDE <em>THE SYSTEM.</em>
            </h2>
            <p>
              Models are only one component. Useful intelligence is made from
              context, interfaces, evaluation, infrastructure, and feedback.
            </p>
          </div>

          <div className="systems-grid">
            {systems.map((system, index) => (
              <article key={system} className="system-card">
                <div className="system-card-top">
                  <span className="system-card-idx">0{index + 1}</span>
                  <span className="system-card-arrow">
                    <IconArrowUpRight />
                  </span>
                </div>
                <h3 className="system-card-title">{system}</h3>
              </article>
            ))}
          </div>

          <div className="systems-principles-strip">
            <span className="principle-item">GROUNDED IN CONTEXT</span>
            <span className="principle-item">MEASURED IN OPERATION</span>
            <span className="principle-item">BUILT FOR CONSTRAINTS</span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          03 / STUDIO SECTION
          ==================================================================== */}
      <section className="section-pad" id="studio">
        <div className="shell">
          <p className="eyebrow">03 / SECOND ALGORITHM STUDIO</p>
          <div className="split-heading">
            <h2>
              INTELLIGENCE THAT
              <br />
              DISAPPEARS INTO
              <br />
              <em>THE PRODUCT.</em>
            </h2>
            <p>
              We explore AI-native and on-device products where intelligence
              remains private, useful, and close to the person using it.
            </p>
          </div>

          <div className="studio-diagram-box">
            <div className="studio-grid-content">
              <div className="studio-nodes-assembly">
                <div className="studio-node-pill">
                  <span>LOCAL INFERENCE</span>
                  <span style={{ color: "var(--sage-bright)" }}>01</span>
                </div>
                <div className="studio-node-pill is-centerpiece">
                  <span>PRIVATE CONTEXT CORE</span>
                  <span style={{ color: "var(--sage-bright)" }}>SECURE</span>
                </div>
                <div className="studio-node-pill">
                  <span>FOCUSED INTERFACE</span>
                  <span style={{ color: "var(--sage-bright)" }}>02</span>
                </div>
              </div>

              <div className="studio-specs-summary">
                <p>● ON-DEVICE INTELLIGENCE</p>
                <p>● LOW LATENCY CLIENT ENGINE</p>
                <p>● ZERO-RETENTION PRIVACY CONSCIOUS</p>
                <div style={{ marginTop: 12 }}>
                  <ExternalLink href={CALENDAR_URL} className="underlink">
                    Explore studio deployments
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          04 / SELECTED WORK (LIGHT THEME)
          ==================================================================== */}
      <section className="section-pad light-section" id="work">
        <div className="shell">
          <p className="eyebrow">04 / SELECTED WORK</p>
          <div className="split-heading">
            <h2>
              BUILT FOR
              <br />
              <em>REAL WORK.</em>
            </h2>
            <p>
              Independent studio builds used to explore practical patterns in
              applied AI.
            </p>
          </div>

          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.number}>
                <div className="work-media-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="work-media-img"
                    loading="lazy"
                  />
                </div>
                <div className="work-details">
                  <div className="work-header-meta">
                    <span className="work-kind-tag">
                      {item.number} / {item.kind}
                    </span>
                  </div>
                  <h3 className="work-card-title">{item.title}</h3>
                  <p className="work-card-desc">{item.description}</p>
                  <div>
                    <ExternalLink href={CALENDAR_URL} className="underlink">
                      Discuss a similar system
                    </ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          DRAFT & DEPLOY SECTION
          ==================================================================== */}
      <section
        className="section-pad draft-section"
        aria-labelledby="draft-title"
      >
        <div className="shell">
          <div className="draft-bento-grid">
            <div>
              <p className="eyebrow">
                A DIGITAL EXECUTION STUDIO BY SECOND ALGORITHM
              </p>
              <h2 id="draft-title">
                DRAFT &amp;
                <br />
                <em>DEPLOY.</em>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: 24, marginBottom: 14 }}>
                FROM ATTENTION TO ACTION.
              </h3>
              <p
                style={{
                  color: "var(--text-dark-secondary)",
                  fontSize: 16,
                  lineHeight: 1.6,
                }}
              >
                Draft &amp; Deploy builds websites, landing pages, digital
                experiences and growth systems for businesses that need to turn
                attention into measurable action.
              </p>

              <div className="draft-services-list">
                {[
                  "WEBSITES",
                  "LANDING PAGES",
                  "GOOGLE ADS",
                  "CONVERSION SYSTEMS",
                  "DIGITAL EXPERIENCES",
                  "AI-ENHANCED WORKFLOWS",
                ].map((service) => (
                  <div className="draft-service-badge" key={service}>
                    {service}
                  </div>
                ))}
              </div>

              <div>
                <a
                  className="btn btn-primary"
                  href={DRAFT_AND_DEPLOY_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>Visit Draft &amp; Deploy</span>
                  <IconArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHO WE ARE (TEAM SECTION)
          ==================================================================== */}
      <section className="section-pad" id="about">
        <div className="shell">
          <p className="eyebrow">WHO WE ARE</p>
          <div className="split-heading">
            <h2>
              FOUR ENGINEERS.
              <br />
              ONE SYSTEM.
              <br />
              <em>BUILT FROM HOME.</em>
            </h2>
            <p>
              We stay close to implementation because the most useful ideas earn
              their place in working systems.
            </p>
          </div>

          <div className="team-story-grid">
            <div className="team-narrative-copy">
              <p>
                Second Algorithm is currently being built by a team of four AI
                engineering students working together from home. We research,
                build, experiment, and iterate.
              </p>
              <p>
                We believe applied AI should be transparent, efficient, and
                grounded in real production realities. Small team. Serious
                engineering.
              </p>
              <div style={{ marginTop: 12 }}>
                <RouteLink href="/about" className="btn btn-secondary">
                  <span>Read our story</span>
                  <IconArrowRight />
                </RouteLink>
              </div>
            </div>

            <div className="team-values-column">
              {[
                ["RESEARCH", "Learning by exploring"],
                ["ENGINEERING", "Learning by building"],
                ["EXPERIMENTATION", "Learning by testing"],
                ["ITERATION", "Learning by shipping"],
              ].map(([label, desc]) => (
                <div className="team-value-item" key={label}>
                  <span className="team-value-label">{label}</span>
                  <span className="team-value-desc">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          05 / CONTACT SECTION
          ==================================================================== */}
      <section
        className="section-pad"
        id="contact"
        style={{ background: "#0a0d0b" }}
      >
        <div className="shell">
          <p className="eyebrow">05 / CONTACT</p>
          <div className="split-heading">
            <h2>
              HAVE A PROBLEM
              <br />
              WORTH BUILDING
              <br />
              <em>A SYSTEM FOR?</em>
            </h2>
            <p>
              Tell us what you&apos;re trying to build, improve or automate.
            </p>
          </div>

          <div className="contact-grid-layout">
            <div className="contact-meta-pane">
              <p className="contact-meta-copy">
                We partner with engineering teams, founders, and enterprises to
                design, build, and deploy custom intelligence systems.
              </p>

              <div>
                <a
                  className="btn btn-primary"
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconCalendar />
                  <span>Start a conversation</span>
                  <IconArrowUpRight />
                </a>
              </div>

              <div>
                <p className="form-label-text" style={{ marginBottom: 6 }}>
                  DIRECT INBOX
                </p>
                <a className="contact-email-link" href={MAILTO_URL}>
                  <span>{CONTACT_EMAIL}</span>
                  <IconArrowUpRight />
                </a>
              </div>
            </div>

            <form
              className="contact-form-box"
              action={MAILTO_URL}
              method="post"
              encType="text/plain"
              onSubmit={handleContactSubmit}
            >
              {contactSubmitted && (
                <div
                  style={{
                    padding: 12,
                    background: "rgba(126, 231, 135, 0.1)",
                    border: "1px solid rgba(126, 231, 135, 0.3)",
                    borderRadius: 4,
                    color: "#7ee787",
                    fontFamily: "Geist Mono",
                    fontSize: 12,
                  }}
                >
                  Opening your email client...
                </div>
              )}
              <div className="form-field-group">
                <label className="form-label-text" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  className="form-input-element"
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="form-label-text" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input-element"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="form-label-text" htmlFor="contact-project">
                  What are you working on?
                </label>
                <textarea
                  id="contact-project"
                  className="form-textarea-element"
                  name="project"
                  rows={4}
                  placeholder="Briefly describe the challenge, constraints, or system goals..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start", marginTop: 8 }}
              >
                <span>Send an email</span>
                <IconArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ==========================================================================
   ABOUT PAGE (/about)
   ========================================================================== */
function About() {
  return (
    <main className="subpage-container" id="main">
      <div className="shell">
        <p className="eyebrow">WHO WE ARE / 001</p>
        <h1 style={{ marginBottom: 32 }}>
          FOUR ENGINEERS.
          <br />
          ONE SYSTEM.
          <br />
          <em>BUILT FROM HOME.</em>
        </h1>

        <div className="legal-article-body">
          <p>
            Second Algorithm is currently being built by a team of four AI
            engineering students working together from home.
          </p>
          <p>We research. We build. We experiment. We iterate.</p>
          <p>
            We stay close to implementation because the most useful ideas earn
            their place in working systems. Small team. Serious engineering.
          </p>

          <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
            <a
              className="btn btn-primary"
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Start a conversation</span>
              <IconArrowUpRight />
            </a>
            <RouteLink href="/" className="btn btn-secondary">
              <span>Back to home</span>
              <IconArrowRight />
            </RouteLink>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ==========================================================================
   LEGAL PAGES (/privacy and /terms)
   ========================================================================== */
function Legal({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy"
  return (
    <main className="subpage-container" id="main">
      <div className="shell">
        <p className="eyebrow">
          {privacy ? "PRIVACY POLICY" : "TERMS & CONDITIONS"}
        </p>
        <h1>
          {privacy ? (
            <>
              YOUR INFORMATION,
              <br />
              <em>EXPLAINED CLEARLY.</em>
            </>
          ) : (
            <>
              THE TERMS OF
              <br />
              <em>WORKING TOGETHER.</em>
            </>
          )}
        </h1>
        <p
          style={{
            marginTop: 14,
            color: "var(--text-dark-muted)",
            fontFamily: "Geist Mono",
            fontSize: 12,
          }}
        >
          Last updated: October 8, 2026
        </p>

        <div className="legal-article-body">
          {privacy ? (
            <>
              <div>
                <h2>Scope</h2>
                <p>
                  This policy describes how Second Algorithm handles information
                  submitted through this website. It is not a substitute for a
                  project-specific agreement.
                </p>
              </div>
              <div>
                <h2>Information collected</h2>
                <p>
                  We receive the name, email address, and project information
                  you choose to send through your email application. Booking
                  information is handled by Cal.com when you choose to schedule
                  a call. This site does not operate its own user accounts or
                  payment processing.
                </p>
              </div>
              <div>
                <h2>How information is used</h2>
                <p>
                  We use submitted information to respond to enquiries, discuss
                  potential work, and maintain relevant business records. We do
                  not sell personal information.
                </p>
              </div>
              <div>
                <h2>Cookies and third parties</h2>
                <p>
                  The website does not intentionally set first-party analytics
                  or advertising cookies. It loads fonts from Google Fonts and
                  links to Cal.com, Draft &amp; Deploy, and third-party project
                  imagery. Those services have their own privacy practices when
                  you visit them.
                </p>
              </div>
              <div>
                <h2>Retention, security, and rights</h2>
                <p>
                  We retain enquiry information only as long as reasonably
                  needed for correspondence and records, and use reasonable
                  safeguards appropriate to the information held. You may ask
                  about, correct, or request deletion of information we hold by
                  emailing {CONTACT_EMAIL}.
                </p>
              </div>
              <div>
                <h2>International transfers, children, and changes</h2>
                <p>
                  Third-party providers may process information in other
                  countries. This website is not directed to children. We may
                  update this policy as the website changes; the date above will
                  show the latest revision.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2>Using this website</h2>
                <p>
                  This website is provided for informational purposes about
                  Second Algorithm and to allow you to get in touch. You may use
                  it only for lawful purposes.
                </p>
              </div>
              <div>
                <h2>Intellectual property</h2>
                <p>
                  Unless otherwise stated, all text, architecture notes, and
                  branding on this website belong to Second Algorithm.
                  Third-party imagery remains the property of its respective
                  creators and is used under relevant license terms.
                </p>
              </div>
              <div>
                <h2>No warranty</h2>
                <p>
                  This website and its contents are provided on an &quot;as
                  is&quot; basis without warranties of any kind, whether express
                  or implied. Research concepts and notes described do not
                  constitute a guarantee of specific outcomes.
                </p>
              </div>
              <div>
                <h2>External links</h2>
                <p>
                  This site links to external services including Cal.com and
                  Draft &amp; Deploy. We are not responsible for the content,
                  availability, or policies of third-party websites.
                </p>
              </div>
              <div>
                <h2>Contact and governing terms</h2>
                <p>
                  Project engagements are governed by separate, written
                  agreements. If you have questions about these terms, contact
                  us at {CONTACT_EMAIL}.
                </p>
              </div>
            </>
          )}

          <div style={{ marginTop: 24 }}>
            <RouteLink href="/" className="btn btn-secondary">
              <span>Back to home</span>
              <IconArrowRight />
            </RouteLink>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ==========================================================================
   404 NOT FOUND PAGE
   ========================================================================== */
function NotFound() {
  return (
    <main className="subpage-container not-found-layout" id="main">
      <div className="shell">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-msg">
          This node does not exist in our system graph.
        </p>
        <RouteLink href="/" className="btn btn-primary">
          <span>Return to home</span>
          <IconArrowRight />
        </RouteLink>
      </div>
    </main>
  )
}

/* ==========================================================================
   ROOT APP SHELL
   ========================================================================== */
export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      setPath(window.location.pathname)
      setMenuOpen(false)
    }
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  useEffect(() => {
    if (path === "/" && window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 120)
      }
    }
  }, [path])

  const page =
    path === "/about" ? (
      <About />
    ) : path === "/privacy" ? (
      <Legal type="privacy" />
    ) : path === "/terms" ? (
      <Legal type="terms" />
    ) : path === "/" ? (
      <Home />
    ) : (
      <NotFound />
    )

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {page}
      <Footer />
    </>
  )
}
