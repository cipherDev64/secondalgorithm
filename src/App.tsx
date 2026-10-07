import { useEffect, useState, type ReactNode } from "react"
import {
  CALENDAR_URL,
  CONTACT_EMAIL,
  DRAFT_AND_DEPLOY_URL,
  MAILTO_URL,
} from "./config"

const researchTopics = [
  [
    "01",
    "Efficient intelligence",
    "Models and systems with a practical operational footprint.",
  ],
  [
    "02",
    "Private AI",
    "Intelligence designed to stay close to sensitive information.",
  ],
  [
    "03",
    "Agentic systems",
    "Bounded workflows that can plan, reason, and take useful action.",
  ],
  [
    "04",
    "Multimodal intelligence",
    "Understanding across language, vision, audio, and structured data.",
  ],
  [
    "05",
    "Reliable AI",
    "Evaluation, calibration, and observable behavior in real conditions.",
  ],
  [
    "06",
    "On-device intelligence",
    "Capable models that run locally, privately, and with low latency.",
  ],
]
const systems = [
  "AI knowledge systems",
  "Agentic workflows",
  "Multimodal systems",
  "Private AI",
  "On-device intelligence",
  "AI product engineering",
]
const work = [
  {
    number: "01",
    title: "Document intelligence",
    kind: "INDEPENDENT STUDIO BUILD / 2026",
    description:
      "A private intelligence layer for knowledge-heavy document workflows.",
    image:
      "https://images.unsplash.com/photo-1782856883492-7ba92b80354a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "Repeating monochrome building facade suggesting an ordered document structure",
  },
  {
    number: "02",
    title: "On-device intelligence",
    kind: "INDEPENDENT STUDIO BUILD / 2026",
    description:
      "A local AI experience designed around privacy, speed, and continuity.",
    image:
      "https://images.unsplash.com/photo-1609603078698-1e58d44e9a35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "Minimal black and white electronic device",
  },
  {
    number: "03",
    title: "AI workflow systems",
    kind: "INDEPENDENT STUDIO BUILD / 2026",
    description:
      "An operational system connecting model intelligence to real work.",
    image:
      "https://images.unsplash.com/photo-1738918901587-41f3f3f88afd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "Black and white line of industrial valves",
  },
]

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
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
      rel="noopener noreferrer"
    >
      {children}
      <Arrow />
    </a>
  )
}
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
          window.history.pushState({}, "", href)
          window.dispatchEvent(new PopStateEvent("popstate"))
        }
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}) {
  const close = () => setMenuOpen(false)
  return (
    <header className="header">
      <RouteLink href="/" className="wordmark" onClick={close}>
        SECOND ALGORITHM
      </RouteLink>
      <nav
        className={menuOpen ? "nav nav--open" : "nav"}
        aria-label="Primary navigation"
      >
        <a href="/#research" onClick={close}>
          Research
        </a>
        <a href="/#systems" onClick={close}>
          Systems
        </a>
        <a href="/#studio" onClick={close}>
          Studio
        </a>
        <a href="/#work" onClick={close}>
          Work
        </a>
        <RouteLink href="/about" onClick={close}>
          Who we are
        </RouteLink>
        <ExternalLink className="nav__cta" href={CALENDAR_URL}>
          Start a conversation
        </ExternalLink>
      </nav>
      <button
        className={menuOpen ? "menu menu--open" : "menu"}
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i />
        <i />
      </button>
    </header>
  )
}
function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <p className="footer__brand">SECOND ALGORITHM</p>
          <p className="footer__line">Applied AI research &amp; engineering.</p>
        </div>
        <div className="footer__links">
          <a href="/#research">Research</a>
          <a href="/#systems">Systems</a>
          <a href="/#studio">Studio</a>
          <a href="/#work">Work</a>
          <RouteLink href="/about">Who we are</RouteLink>
          <a href="/#contact">Contact</a>
          <RouteLink href="/privacy">Privacy policy</RouteLink>
          <RouteLink href="/terms">Terms &amp; conditions</RouteLink>
          <ExternalLink href={DRAFT_AND_DEPLOY_URL}>
            Draft &amp; Deploy
          </ExternalLink>
        </div>
        <div className="footer__manifesto">
          THE FIRST ALGORITHM
          <br />
          FOLLOWS THE RULES.
          <br />
          <br />
          THE SECOND
          <br />
          CHANGES THEM.
        </div>
        <small>© {new Date().getFullYear()} SECOND ALGORITHM</small>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <main id="main">
      <section className="hero" id="top">
        <div className="shell hero__inner">
          <p className="eyebrow">SECOND ALGORITHM / 001</p>
          <div className="hero__grid">
            <h1>
              THE MODEL IS
              <br />
              ONLY THE <em>BEGINNING.</em>
            </h1>
            <p>
              Second Algorithm researches, engineers, and deploys intelligent
              systems built around real-world work.
            </p>
          </div>
          <div className="hero__bottom">
            <div className="hero__tags">
              <span>APPLIED AI</span>
              <span>RESEARCH</span>
              <span>ENGINEERING</span>
              <span>PRODUCTS</span>
            </div>
            <div className="hero__actions">
              <a className="button button--light" href="#systems">
                Explore our systems <Arrow />
              </a>
              <ExternalLink
                className="underlink underlink--light"
                href={CALENDAR_URL}
              >
                Start a conversation
              </ExternalLink>
            </div>
          </div>
          <div
            className="compute"
            aria-label="A model system flow from input to outcome"
          >
            <span>INPUT</span>
            <i>↓</i>
            <span>CONTEXT</span>
            <i>↓</i>
            <span>MODEL</span>
            <i>↓</i>
            <span>REASONING</span>
            <i>↓</i>
            <span>ACTION</span>
            <i>↓</i>
            <strong>OUTCOME</strong>
          </div>
        </div>
      </section>
      <section className="section paper" id="research">
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
          <div className="research-index">
            {researchTopics.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Arrow />
              </article>
            ))}
          </div>
          <div className="terminal">
            <div className="terminal__bar">
              <span>SECOND ALGORITHM / RESEARCH</span>
              <span>INDEX / LIVE</span>
            </div>
            <div className="terminal__body">
              <p>CURRENTLY EXPLORING</p>
              <ol>
                <li>ADAPTIVE RAG</li>
                <li>EFFICIENT INFERENCE</li>
                <li>PRIVATE AI</li>
                <li>AGENT MEMORY</li>
                <li>MULTIMODAL SYSTEMS</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark" id="systems">
        <div className="shell">
          <p className="eyebrow">02 / SYSTEMS</p>
          <div className="split-heading">
            <h2>
              SYSTEMS
              <br />
              WE <em>BUILD.</em>
            </h2>
            <p>
              Models are only one component. Useful intelligence is made from
              context, interfaces, evaluation, infrastructure, and feedback.
            </p>
          </div>
          <div className="systems-list">
            {systems.map((system, index) => (
              <article key={system}>
                <span>0{index + 1}</span>
                <h3>{system}</h3>
                <Arrow />
              </article>
            ))}
          </div>
          <div className="system-note">
            <span>GROUNDED IN CONTEXT</span>
            <span>MEASURED IN OPERATION</span>
            <span>BUILT FOR CONSTRAINTS</span>
          </div>
        </div>
      </section>
      <section className="section loop-section">
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
          <div
            className="loop"
            aria-label="Research, prototype, engineer, deploy, measure, learn, research"
          >
            {[
              "Research",
              "Prototype",
              "Engineer",
              "Deploy",
              "Measure",
              "Learn",
              "Research",
            ].map((stage, index) => (
              <div key={`${stage}-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
                <i>↓</i>
              </div>
            ))}
          </div>
          <p className="loop-section__note">
            RESEARCH → PROTOTYPE → ENGINEER → DEPLOY → MEASURE → LEARN →
            RESEARCH
          </p>
        </div>
      </section>
      <section className="section paper" id="work">
        <div className="shell">
          <p className="eyebrow">03 / SELECTED WORK</p>
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
          <div className="work-list">
            {work.map((item) => (
              <article className="work" key={item.number}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div>
                  <span>
                    {item.number} / {item.kind}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ExternalLink href={CALENDAR_URL} className="underlink">
                    Discuss a similar system
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section studio" id="studio">
        <div className="shell">
          <p className="eyebrow">04 / SECOND ALGORITHM STUDIO</p>
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
          <div className="studio-map">
            <div>
              <span>LOCAL INFERENCE</span>
              <b>
                PRIVATE
                <br />
                CONTEXT
              </b>
              <span>FOCUSED INTERFACE</span>
            </div>
            <p>
              ON-DEVICE
              <br />
              INTELLIGENCE
              <br />/ LOW LATENCY
              <br />/ PRIVACY-CONSCIOUS
            </p>
          </div>
        </div>
      </section>
      <section className="section draft" aria-labelledby="draft-title">
        <div className="shell draft__grid">
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
            <h3>
              FROM ATTENTION
              <br />
              TO ACTION.
            </h3>
            <p>
              Draft &amp; Deploy builds websites, landing pages, digital
              experiences and growth systems for businesses that need to turn
              attention into measurable action.
            </p>
            <ul>
              <li>WEBSITES</li>
              <li>LANDING PAGES</li>
              <li>GOOGLE ADS</li>
              <li>CONVERSION SYSTEMS</li>
              <li>DIGITAL EXPERIENCES</li>
              <li>AI-ENHANCED WORKFLOWS</li>
            </ul>
            <ExternalLink className="button" href={DRAFT_AND_DEPLOY_URL}>
              Visit Draft &amp; Deploy
            </ExternalLink>
          </div>
        </div>
      </section>
      <section className="section contact dark" id="contact">
        <div className="shell">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>
            HAVE A PROBLEM
            <br />
            WORTH BUILDING
            <br />
            <em>A SYSTEM FOR?</em>
          </h2>
          <div className="contact-grid">
            <div>
              <p>
                Tell us what you&apos;re trying to build, improve or automate.
              </p>
              <ExternalLink
                className="button button--light"
                href={CALENDAR_URL}
              >
                Start a conversation
              </ExternalLink>
              <a className="email" href={MAILTO_URL}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <form action={MAILTO_URL} method="post" encType="text/plain">
              <label>
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                What are you working on?
                <textarea name="project" rows={3} required />
              </label>
              <button type="submit">
                Send an email <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="route-page" id="main">
      <div className="shell">
        <p className="eyebrow">WHO WE ARE / 001</p>
        <h1>
          FOUR ENGINEERS.
          <br />
          ONE SYSTEM.
          <br />
          <em>BUILT FROM HOME.</em>
        </h1>
        <div className="route-copy">
          <p>
            Second Algorithm is currently being built by a team of four AI
            engineering students working together from home.
          </p>
          <p>We research. We build. We experiment. We iterate.</p>
          <p>
            We stay close to implementation because the most useful ideas earn
            their place in working systems.
          </p>
          <ExternalLink className="button" href={CALENDAR_URL}>
            Start a conversation
          </ExternalLink>
        </div>
      </div>
    </main>
  )
}

function Legal({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy"
  return (
    <main className="route-page legal" id="main">
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
        <p className="legal__updated">Last updated: October 7, 2026</p>
        <div className="legal__body">
          {privacy ? (
            <>
              <h2>Scope</h2>
              <p>
                This policy describes how Second Algorithm handles information
                submitted through this website. It is not a substitute for a
                project-specific agreement.
              </p>
              <h2>Information collected</h2>
              <p>
                We receive the name, email address, and project information you
                choose to send through your email application. Booking
                information is handled by Cal.com when you choose to schedule a
                call. This site does not operate its own user accounts or
                payment processing.
              </p>
              <h2>How information is used</h2>
              <p>
                We use submitted information to respond to enquiries, discuss
                potential work, and maintain relevant business records. We do
                not sell personal information.
              </p>
              <h2>Cookies and third parties</h2>
              <p>
                The website does not intentionally set first-party analytics or
                advertising cookies. It loads fonts from Google Fonts and links
                to Cal.com, Draft &amp; Deploy, and third-party project imagery.
                Those services have their own privacy practices when you visit
                them.
              </p>
              <h2>Retention, security, and rights</h2>
              <p>
                We retain enquiry information only as long as reasonably needed
                for correspondence and records, and use reasonable safeguards
                appropriate to the information held. You may ask about, correct,
                or request deletion of information we hold by emailing{" "}
                {CONTACT_EMAIL}.
              </p>
              <h2>International transfers, children, and changes</h2>
              <p>
                Third-party providers may process information in other
                countries. This website is not directed to children. We may
                update this policy as the website changes; the date above will
                show the latest revision.
              </p>
              <h2>Contact</h2>
              <p>
                For privacy questions, contact{" "}
                <a href={MAILTO_URL}>{CONTACT_EMAIL}</a>.
              </p>
            </>
          ) : (
            <>
              <h2>Website use</h2>
              <p>
                You may use this website for lawful purposes and must not
                interfere with its operation, attempt unauthorized access, or
                use its content in a misleading way.
              </p>
              <h2>Services and project engagements</h2>
              <p>
                Any services are governed by a separate written agreement.
                Website content, conversations, and introductory discussions do
                not create a client relationship or commitment to provide
                services.
              </p>
              <h2>Intellectual property</h2>
              <p>
                Unless stated otherwise, the website design, writing, and brand
                materials belong to Second Algorithm. You may not reproduce them
                without permission.
              </p>
              <h2>Third-party services and AI</h2>
              <p>
                Third-party websites and services are governed by their own
                terms. AI-generated outputs may be inaccurate, incomplete, or
                unsuitable for a particular purpose and should not automatically
                be treated as professional advice.
              </p>
              <h2>Disclaimers and liability</h2>
              <p>
                The website is provided for general information. To the extent
                permitted by applicable law, Second Algorithm does not guarantee
                uninterrupted access, specific outcomes, or that information
                will always be complete or current.
              </p>
              <h2>Confidentiality and changes</h2>
              <p>
                Do not submit confidential information through the website
                unless a written agreement says otherwise. We may update these
                terms; continued use after an update indicates acceptance of the
                revised terms.
              </p>
              <h2>Governing law</h2>
              <p>[GOVERNING JURISDICTION TO BE CONFIRMED]</p>
              <h2>Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={MAILTO_URL}>{CONTACT_EMAIL}</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])
  const page =
    path === "/about" ? (
      <About />
    ) : path === "/privacy" ? (
      <Legal type="privacy" />
    ) : path === "/terms" ? (
      <Legal type="terms" />
    ) : (
      <Home />
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
