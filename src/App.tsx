import { useEffect, useState } from "react";

const researchTopics = [
  ["01", "Efficient Intelligence", "Smaller systems with better performance, cost, and operational fit."],
  ["02", "Private AI", "Intelligence designed to remain close to sensitive information."],
  ["03", "Agentic Systems", "Bounded systems that can plan, reason, and take useful action."],
  ["04", "Multimodal Intelligence", "Understanding across language, vision, audio, and structured data."],
  ["05", "Reliable AI", "Evaluation, calibration, and observable behavior under real conditions."],
  ["06", "On-device Intelligence", "Capable models that run locally, privately, and with low latency."],
];

const selectedWork = [
  {
    number: "01",
    title: "Document Intelligence",
    summary: "A private intelligence layer for knowledge-heavy document workflows.",
    detail: "We designed a retrieval, reasoning, and citation system that turns fragmented document collections into a traceable working resource for specialist teams.",
    services: "RESEARCH / SYSTEM DESIGN / ENGINEERING",
    status: "INDEPENDENT STUDIO BUILD / 2026",
    image: "https://images.unsplash.com/photo-1782856883492-7ba92b80354a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "Repeating monochrome building facade suggesting an ordered document structure",
    credit: "PHOTO / SEBASTIAN SCHUSTER — UNSPLASH",
  },
  {
    number: "02",
    title: "On-device Intelligence",
    summary: "A local AI experience designed around privacy, speed, and continuity.",
    detail: "Our team developed the product architecture and interaction model for an assistant that keeps core inference close to the user and remains useful with limited connectivity.",
    services: "PRODUCT / EDGE AI / PROTOTYPING",
    status: "INDEPENDENT STUDIO BUILD / 2026",
    image: "https://images.unsplash.com/photo-1609603078698-1e58d44e9a35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "Minimal black and white electronic device",
    credit: "PHOTO / TERRY LEE — UNSPLASH",
  },
  {
    number: "03",
    title: "AI Workflow Systems",
    summary: "An operational system connecting model intelligence to real work.",
    detail: "We mapped the decision path, designed human review points, and engineered a measurable orchestration layer for multi-step work across existing tools.",
    services: "WORKFLOW RESEARCH / ORCHESTRATION / EVALUATION",
    status: "INDEPENDENT STUDIO BUILD / 2026",
    image: "https://images.unsplash.com/photo-1738918901587-41f3f3f88afd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "Black and white line of industrial valves",
    credit: "PHOTO / FRANTISEK DURIS — UNSPLASH",
  },
];

const loopStages = ["Research", "Prototype", "Engineer", "Deploy", "Measure", "Learn"];

function TextLink({ href, children, tone = "dark" }: { href: string; children: React.ReactNode; tone?: "dark" | "light" }) {
  const external = href.startsWith("http");
  return (
    <a className={`text-link text-link--${tone}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function Marker({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="marker">
      <span>{number}</span>
      <i />
      <span>{children}</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu}>SECOND ALGORITHM</a>
        <nav className={`navigation ${menuOpen ? "navigation--open" : ""}`} aria-label="Primary navigation">
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#systems" onClick={closeMenu}>Systems</a>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="navigation__cta" href="https://cal.com/secondalgorithm" target="_blank" rel="noreferrer" onClick={closeMenu}>Start a conversation <span>↗</span></a>
        </nav>
        <button
          className={`menu ${menuOpen ? "menu--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="main">
        <section className="hero dark-section" id="top">
          <div className="wrap hero__inner">
            <p className="kicker">APPLIED AI / RESEARCH / ENGINEERING</p>
            <div className="hero__statement">
              <h1>Intelligence<br />built for<br /><em>real work.</em></h1>
              <div className="hero__notation" aria-hidden="true">
                <span>ƒ(x, c) → a</span>
                <span>ITERATION 002</span>
                <span>Δ 0.0184</span>
              </div>
            </div>
            <div className="hero__footer">
              <div className="hero__intro">
                <span className="coordinate">51.5072° N / 0.1276° W</span>
                <p>Second Algorithm researches, engineers, and deploys AI systems designed around real-world work.</p>
              </div>
              <div className="hero__links">
                <TextLink href="#engineering" tone="light">Explore our work</TextLink>
                <TextLink href="https://cal.com/secondalgorithm" tone="light">Book a call</TextLink>
              </div>
            </div>
            <div className="hero__system" aria-hidden="true">
              <div><span>INPUT</span><i /></div>
              <div><span>CONTEXT</span><i /></div>
              <div><span>INFERENCE</span><i /></div>
              <div><span>ACTION</span></div>
              <b />
            </div>
          </div>
        </section>

        <section className="research light-section" id="research">
          <div className="wrap">
            <Marker number="01">Research</Marker>
            <div className="editorial-heading">
              <h2>We research what<br />makes AI <em>useful.</em></h2>
              <p>Not capability in isolation, but intelligence that remains effective when it meets real information, constraints, people, and work.</p>
            </div>
            <div className="research-list">
              {researchTopics.map(([number, title, description]) => (
                <article className="research-item" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="research-item__arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
            <p className="margin-note">RESEARCH AGENDA / REVISION 02</p>
          </div>
        </section>

        <section className="systems dark-section" id="systems">
          <div className="wrap">
            <Marker number="02">Systems</Marker>
            <div className="systems__heading">
              <h2>AI is no longer just<br />a model problem.</h2>
              <p>A model is one component. Outcomes emerge from the complete system around it: context, evaluation, infrastructure, interfaces, and feedback.</p>
            </div>
            <div className="system-diagram" aria-label="Data to product system flow">
              <div className="system-diagram__meta"><span>SYSTEM TOPOLOGY / 002</span><span>STATE: OBSERVABLE</span></div>
              <div className="system-diagram__flow">
                {["Data", "Context", "Model", "Reasoning", "Action", "Product"].map((item, index) => (
                  <div className="system-node" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    {index < 5 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>
              <div className="system-diagram__baseline"><span /></div>
            </div>
            <div className="system-principles">
              <span>GROUNDED IN CONTEXT</span>
              <span>MEASURED IN OPERATION</span>
              <span>BUILT FOR CONSTRAINTS</span>
            </div>
          </div>
        </section>

        <section className="loop-section paper-section" aria-labelledby="loop-title">
          <div className="wrap">
            <div className="loop-title">
              <p>THE SECOND ALGORITHM LOOP</p>
              <h2 id="loop-title">Research should<br /><em>leave the lab.</em></h2>
            </div>
            <div className="iteration-loop">
              {loopStages.map((stage, index) => (
                <div className="iteration-loop__stage" key={stage}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage}</strong>
                  <i aria-hidden="true" />
                </div>
              ))}
              <div className="iteration-loop__return">
                <span>RETURN / REFINE / REPEAT</span>
                <svg viewBox="0 0 620 80" aria-hidden="true">
                  <path d="M610 10v25c0 20-16 36-36 36H47C27 71 11 55 11 35V18" />
                  <path d="m5 25 6-7 7 7" />
                </svg>
              </div>
            </div>
            <div className="loop-copy">
              <p>What we research shapes what we build.</p>
              <p>What we build reveals what needs to be researched next.</p>
            </div>
          </div>
        </section>

        <section className="engineering light-section" id="engineering">
          <div className="wrap">
            <Marker number="03">Engineering</Marker>
            <div className="engineering__heading">
              <h2>Systems built around<br /><em>real problems.</em></h2>
              <p>Selected work</p>
            </div>
            <div className="work-list">
              {selectedWork.map((project) => (
                <article className="work-row" key={project.number}>
                  <div className="work-row__image">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                    <span>{project.credit}</span>
                  </div>
                  <div className="work-row__content">
                    <div className="work-row__index">
                      <span className="work-row__number">{project.number}</span>
                      <span className="work-row__status">{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="work-row__summary">{project.summary}</p>
                    <p className="work-row__detail">{project.detail}</p>
                    <div className="work-row__footer">
                      <span>{project.services}</span>
                      <a href="https://cal.com/secondalgorithm" target="_blank" rel="noreferrer">Discuss a similar system <i aria-hidden="true">↗</i></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="studio paper-section" id="studio">
          <div className="wrap">
            <Marker number="04">Studio</Marker>
            <div className="studio__heading">
              <h2>Intelligence that<br />disappears into<br /><em>the product.</em></h2>
              <div>
                <p>Second Algorithm Studio builds focused AI-native products, particularly where intelligence can run locally, privately, or directly on-device.</p>
                <TextLink href="https://cal.com/secondalgorithm">Discuss a product</TextLink>
              </div>
            </div>
            <div className="studio-object">
              <div className="studio-object__caption">
                <span>LOCAL SYSTEM / CONCEPT 01</span>
                <span>PROCESSING: ON DEVICE</span>
              </div>
              <div className="studio-object__canvas" aria-hidden="true">
                <div className="orbital orbital--one"><span /></div>
                <div className="orbital orbital--two"><span /></div>
                <div className="orbital orbital--three"><span /></div>
                <div className="studio-object__core">LOCAL<br />CONTEXT</div>
                <span className="axis axis--x">PRIVACY →</span>
                <span className="axis axis--y">LATENCY →</span>
              </div>
              <div className="studio-object__footer">
                <span>PRIVATE BY ARCHITECTURE</span>
                <span>LOW-LATENCY INFERENCE</span>
                <span>FOCUSED INTERACTION</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about dark-section" id="about">
          <div className="wrap">
            <Marker number="05">About</Marker>
            <p className="about__intro">Second Algorithm is an independent applied AI research, engineering, and product company.</p>
            <div className="about__terms">
              <span>Research</span>
              <i>×</i>
              <span>Engineering</span>
              <i>×</i>
              <span>Product</span>
            </div>
            <p className="about__copy">We work from first principles, stay close to implementation, and build intelligence for real conditions—not demonstrations.</p>
          </div>
        </section>

        <section className="contact light-section" id="contact">
          <div className="wrap">
            <div className="contact__meta"><span>06 / CONTACT</span><span>ENQUIRIES / OPEN</span></div>
            <h2>Have a problem<br />worth building<br /><em>a system for?</em></h2>
            <div className="contact__layout">
              <div>
                <p>Tell us what you’re trying to solve. We’ll determine whether AI is actually the right answer.</p>
                <a href="mailto:atulyamanikandan@gmail.com">atulyamanikandan@gmail.com ↗</a>
                <a className="book-call" href="https://cal.com/secondalgorithm" target="_blank" rel="noreferrer">Book a call ↗</a>
              </div>
              <form action="mailto:atulyamanikandan@gmail.com" method="post" encType="text/plain">
                <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
                <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
                <label><span>What are you working on?</span><textarea name="project" rows={2} required /></label>
                <button type="submit">Send an email <span>→</span></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <p>SECOND ALGORITHM</p>
          <span>Applied AI research, engineering, and products.</span>
          <div><a href="#research">Research</a><a href="#systems">Systems</a><a href="mailto:atulyamanikandan@gmail.com">Email</a><a href="https://cal.com/secondalgorithm" target="_blank" rel="noreferrer">Book a call ↗</a><a href="#top">Back to top ↑</a></div>
          <small>© 2026 SECOND ALGORITHM</small>
        </div>
      </footer>
    </div>
  );
}
