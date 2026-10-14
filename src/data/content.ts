export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  bgTone: string;
  featuredQuote: string;
  mockupType: 'desktop-browser' | 'mobile-concierge' | 'split-terminal' | 'workspace-portal';
  previewDetails: {
    status: string;
    branchCount?: string;
    speedScore?: string;
    conversionLift?: string;
  };
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  capabilities: string[];
  tech: string[];
  timeline: string;
  idealFor: string;
  accent: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  deliverables: string[];
  milestone: string;
}

export const STUDIO_DATA = {
  name: "Second Algorithm",
  edition: "Creative Technology Studio",
  tagline: "CODE WITH GRAVITY. INTERFACES WITH PULSE.",
  subtagline: "Creative Technology Studio & Architectural Systems · Bengaluru",
  location: "Bengaluru · Available Worldwide",
  timezone: "Asia/Kolkata (IST)",
  email: "hello@secondalgorithm.space",
  calendly: "https://cal.com/secondalgorithm",
  calLink: "https://cal.com/secondalgorithm",
  website: "https://secondalgorithm.space",
  twitter: "https://x.com/secondalgorithm",
  instagram: "https://instagram.com/secondalgorithm",
  status: "Available for Commissions",
  leadParagraph:
    "Second Algorithm is an independent digital studio based in Bengaluru operating at the intersection of architectural software engineering, expressive art direction, and autonomous workflows. We build digital flagships, web applications, and intelligent systems designed with lasting weight, tactile gravity, and undeniable pulse.",
  stats: [
    { label: "Design System Execution", value: "100%", sub: "Bespoke Code" },
    { label: "Performance Benchmark", value: "<0.4s", sub: "First Contentful Paint" },
    { label: "Operations Automated", value: "85%", sub: "Manual Drag Eliminated" },
    { label: "Client Retainers", value: "100%", sub: "Independent & Direct" }
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "urban-premium-coworks",
    title: "Urban Premium Coworks",
    client: "Urban Premium Coworks Pvt Ltd",
    category: "Digital Platform · Spatial Experience · Member Engine",
    year: "2025 – 2026",
    tagline: "Architectural workspace booking portal & automated member ecosystem.",
    description:
      "Urban Premium Coworks required a digital presence that matched the tactile luxury and spatial intelligence of their physical properties. We conceptualized and engineered an end-to-end digital flagship combining immersive 3D space previews, self-serve desk & conference room booking, and instant automated pass delivery.",
    challenge:
      "Physical coworking sales relied heavily on manual WhatsApp enquiries and physical tour drop-ins. Friction in off-hours booking meant high loss in short-notice meeting room revenue.",
    solution:
      "We architected an ultra-fast headless booking engine with interactive 2D/3D floorplans, live room occupancy indicators, Stripe/Razorpay payment gateway, and WhatsApp automated check-in confirmations.",
    deliverables: [
      "Custom Digital Flagship & Spatial Brand System",
      "Interactive Floorplan & Space Selection Engine",
      "Real-time Desk & Boardroom Reservation Engine",
      "Member Dashboard with Automated Access Passes",
      "Sub-second Edge Deployment on Vercel"
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS Tokens", "Stripe API", "Vercel Edge", "Twilio WhatsApp API"],
    metrics: [
      { label: "Booking Latency", value: "1.2s" },
      { label: "Direct Conversions", value: "+148%" },
      { label: "Lighthouse Score", value: "99/100" }
    ],
    accentColor: "#D97706",
    bgTone: "#1A1713",
    featuredQuote: "Second Algorithm turned our digital presence from a standard static brocure into our highest-converting acquisition engine.",
    mockupType: "workspace-portal",
    previewDetails: {
      status: "Production Live",
      branchCount: "4 Prime Locations",
      speedScore: "99 Performance",
      conversionLift: "+148% Direct Bookings"
    }
  },
  {
    id: "nailashes",
    title: "Nailashes",
    client: "Nailashes Luxury Salons",
    category: "Luxury Beauty Flagship · Stylist Booking · E-Commerce",
    year: "2025",
    tagline: "High-fashion digital flagship & multi-outlet appointment concierge.",
    description:
      "Nailashes is a premier luxury nail, lash, and beauty destination. We redesigned their digital identity and built a bespoke appointment booking system that mirrors the indulgence of an in-salon visit.",
    challenge:
      "Previous website was a generic template with high bounce rates, clunky multi-step forms, and zero mobile responsiveness during peak evening browsing hours.",
    solution:
      "Engineered an editorial beauty experience with rich editorial typography, one-tap stylist availability slots, live service add-ons, and automated calendar sync for customers.",
    deliverables: [
      "Editorial Brand Identity & Visual Art Direction",
      "Fluid Touch-First Mobile Appointment Concierge",
      "Real-time Stylist Availability & Branch Router",
      "Automated SMS/WhatsApp Reminder Pipeline",
      "Luxury Nail Art Lookbook & Gallery System"
    ],
    techStack: ["React", "TypeScript", "Fluid CSS", "Node.js Microservices", "PostgreSQL", "Calendar Sync API"],
    metrics: [
      { label: "Mobile Bounce Rate", value: "-42%" },
      { label: "Appointment Growth", value: "+210%" },
      { label: "Mobile Completion Time", value: "38s" }
    ],
    accentColor: "#E11D48",
    bgTone: "#1C1418",
    featuredQuote: "Our clients love the simplicity of booking. The design immediately communicates our luxury positioning.",
    mockupType: "mobile-concierge",
    previewDetails: {
      status: "Production Live",
      branchCount: "12 Studio Outlets",
      speedScore: "98 Mobile Perf",
      conversionLift: "+210% Appts"
    }
  },
  {
    id: "nsalon",
    title: "NSalon",
    client: "NSalon Hair & Grooming Network",
    category: "Salon Management Suite · Appointment Engine · Brand Overhaul",
    year: "2024 – 2025",
    tagline: "Modernist hair and grooming web app with real-time chair allocation.",
    description:
      "NSalon required an uncompromising, contemporary digital experience for their premium grooming chain. We crafted a high-contrast brutalist-modern aesthetic paired with an ultra-lightweight client scheduling dashboard.",
    challenge:
      "High no-show rates (over 28%) and scheduling chaos during weekend rushes caused stylist idle time and frustrated VIP clientele.",
    solution:
      "Integrated automated deposit confirmations, intelligent SMS/WhatsApp reminder triggers 2 hours prior, and a one-click reschedule mechanism that filled canceled slots instantly.",
    deliverables: [
      "Minimalist Dark-Mode Digital Flagship",
      "Chair Allocation & Stylist Scheduling Core",
      "Client History & Preference Vault",
      "Automated No-Show Reduction Pipeline",
      "Multi-Branch Performance Analytics Dashboard"
    ],
    techStack: ["TypeScript", "Vite", "Vanilla CSS Tokens", "Supabase", "WhatsApp Business Cloud", "Cloudflare Workers"],
    metrics: [
      { label: "No-Show Drop", value: "from 28% to 6%" },
      { label: "Weekend Chair Load", value: "94%" },
      { label: "Page Load Time", value: "280ms" }
    ],
    accentColor: "#2563EB",
    bgTone: "#10141E",
    featuredQuote: "The reduction in no-shows paid for the entire development cost within 60 days.",
    mockupType: "desktop-browser",
    previewDetails: {
      status: "Production Live",
      branchCount: "8 Hubs",
      speedScore: "100 Best Practices",
      conversionLift: "No-show rate cut to 6%"
    }
  },
  {
    id: "second-algo-lab",
    title: "Autonomous Intelligence Lab",
    client: "Second Algorithm Internal R&D",
    category: "Autonomous Systems · Multimodal Agent Workflows · Studio Core",
    year: "2026",
    tagline: "Internal operational intelligence engine running studio pipelines.",
    description:
      "The proprietary engine powering Second Algorithm's own studio operations: autonomous client brief parsing, dynamic scope estimation, brand token generation, and multi-agent code scaffolding.",
    challenge:
      "Traditional studio overhead often slows down execution speed and consumes creative energy with administrative coordination.",
    solution:
      "Developed a suite of connected AI agents running deterministic workflows that automate documentation, asset pipelines, and client telemetry.",
    deliverables: [
      "Autonomous Brief Ingestion & Scope Parser",
      "Design Token Generative Engine",
      "Automated Lighthouse & Performance Guardrails",
      "Real-time Studio Telemetry & System Status"
    ],
    techStack: ["Python", "TypeScript", "FastAPI", "Vector Store", "Vercel AI SDK", "Claude / Gemini APIs"],
    metrics: [
      { label: "Turnaround Acceleration", value: "3.5x" },
      { label: "Admin Drag", value: "-75%" },
      { label: "Deterministic Accuracy", value: "99.4%" }
    ],
    accentColor: "#10B981",
    bgTone: "#0E1815",
    featuredQuote: "We eat our own cooking: our autonomous systems give us the freedom to focus 100% on creative craft.",
    mockupType: "split-terminal",
    previewDetails: {
      status: "Active R&D",
      branchCount: "Core Studio",
      speedScore: "Sub-100ms Inference",
      conversionLift: "3.5x Velocity"
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-engineering",
    num: "01",
    title: "Digital Experiences & Web Engineering",
    subtitle: "Custom websites built to make you look twice.",
    description:
      "We design and engineer bespoke web flagships, interactive editorial websites, and high-performance web applications. Every line of code is written with intentional art direction, fluid typography, smooth micro-interactions, and zero template bloat.",
    deliverables: [
      "Custom Frontend Architecture (Next.js / Vite / TS)",
      "Fluid Editorial Typography & Layout Direction",
      "Subtle Canvas & Micro-interaction Engineering",
      "Sub-second Page Load & Core Web Vitals Mastery",
      "Full Responsive Viewport Calibration (360px – 4K)"
    ],
    capabilities: ["Bespoke Frontend", "Headless CMS", "Micro-Interactions", "Creative Development"],
    tech: ["TypeScript", "React / Next.js", "Vite", "Vanilla CSS", "GSAP / Framer Motion principles"],
    timeline: "3 to 6 weeks",
    idealFor: "Brands, high-growth studios, luxury services, and businesses seeking an unmistakable online presence.",
    accent: "#1648E8"
  },
  {
    id: "ui-ux-product",
    num: "02",
    title: "UI/UX & Digital Product Design",
    subtitle: "Interfaces that reward human curiosity.",
    description:
      "We turn complex user workflows and operational requirements into elegant, tactile digital interfaces. From spatial dashboards to mobile customer concierges, we prioritize clarity, visual hierarchy, and frictionless interaction.",
    deliverables: [
      "End-to-End Product Architecture & Wireframing",
      "High-Fidelity Interactive Prototypes",
      "Comprehensive Multi-theme Design Systems",
      "Usability Benchmarks & Touch-first UX",
      "Developer Handover Specifications & Tokens"
    ],
    capabilities: ["Design Systems", "Product Strategy", "Figma Design", "Rapid Prototyping"],
    tech: ["Figma", "Design Tokens", "Storybook", "Component Libraries", "WCAG 2.1 AA"],
    timeline: "2 to 5 weeks",
    idealFor: "Tech founders, SaaS platforms, and enterprise tools replacing dated legacy interfaces.",
    accent: "#FF5520"
  },
  {
    id: "ai-intelligent-systems",
    num: "03",
    title: "AI & Machine Learning Solutions",
    subtitle: "AI that earns its keep through actual utility.",
    description:
      "We build intelligent assistants, retrieval-augmented knowledge bases, and custom multimodal agent pipelines. We do not generate superficial AI gimmicks; we build practical systems that eliminate hours of manual operational drag.",
    deliverables: [
      "Custom LLM & Agentic Workflow Engineering",
      "Retrieval-Augmented Generation (RAG) Systems",
      "Autonomous Intake & Data Extraction Pipelines",
      "Internal Company Intelligence Dashboards",
      "API Bridges & Secure Data Connectors"
    ],
    capabilities: ["Autonomous Agents", "RAG Systems", "Custom Assistants", "Vector Search"],
    tech: ["Python", "Vercel AI SDK", "FastAPI", "Postgres pgvector", "OpenAI / Claude / Gemini APIs"],
    timeline: "4 to 8 weeks",
    idealFor: "Companies with repetitive customer or internal workflows ready to automate with precision.",
    accent: "#8B5CF6"
  },
  {
    id: "branding-direction",
    num: "04",
    title: "Branding & Creative Direction",
    subtitle: "Visual identities with lasting cultural weight.",
    description:
      "From bespoke typographic pairings and distinctive color palettes to complete visual identity guidelines. We develop brand foundations that feel intentional, expressive, and ready to stand out in crowded digital spaces.",
    deliverables: [
      "Comprehensive Brand Strategy & Positioning",
      "Typographic Direction & Custom Font Pairing",
      "Color Architecture & Contrast Compliance",
      "Brand Guidelines & Digital Asset Toolkits",
      "Motion Identity & Interactive Signatures"
    ],
    capabilities: ["Brand Identity", "Typographic Direction", "Visual Systems", "Editorial Guides"],
    tech: ["Typography Craft", "Vector Systems", "Design Guidelines", "Motion Language"],
    timeline: "2 to 4 weeks",
    idealFor: "New ventures launching or established companies undergoing an overdue, ambitious transformation.",
    accent: "#10B981"
  },
  {
    id: "automation-operations",
    num: "05",
    title: "Business Process Automation",
    subtitle: "Connecting the broken gaps in your tech stack.",
    description:
      "We orchestrate end-to-end automated pipelines across your CRM, communication channels, payment systems, and internal databases. Cut lead response times to under 30 seconds and eliminate manual data entry.",
    deliverables: [
      "CRM & Lead Ingestion Automation",
      "WhatsApp & SMS Real-time Dispatch Engines",
      "Automated Invoicing & Payment Reconciliation",
      "Custom Webhook & API Middleware Services",
      "Audit Logs & Failover Alerting"
    ],
    capabilities: ["Workflow Automation", "CRM Integration", "Webhook Middleware", "Notification Bots"],
    tech: ["Zapier / Make / n8n", "Node.js Workers", "WhatsApp Cloud API", "Stripe Webhooks"],
    timeline: "1 to 3 weeks",
    idealFor: "High-volume service businesses, salons, coworking spaces, clinics, and professional agencies.",
    accent: "#06B6D4"
  },
  {
    id: "growth-marketing",
    num: "06",
    title: "Digital Marketing & Performance Systems",
    subtitle: "High-conversion digital engines that scale.",
    description:
      "We combine conversion-focused landing page architecture with technical SEO, tracking infrastructure, and creative campaigns. Every page is built to capture attention and convert visitors into paying clients.",
    deliverables: [
      "High-Performance Campaign Landing Pages",
      "Technical SEO Architecture & Rich Snippets",
      "Conversion Rate Optimization (CRO) Audits",
      "Server-Side Analytics & Telemetry Setup",
      "Creative Ad Visuals & Social Campaign Assets"
    ],
    capabilities: ["SEO Architecture", "Landing Systems", "Telemetry & CRO", "Campaign Creative"],
    tech: ["Vercel Analytics", "Google Tag Manager", "Structured Data (JSON-LD)", "A/B Testing"],
    timeline: "Ongoing Execution",
    idealFor: "Brands needing immediate sales velocity without burning budget on low-converting pages.",
    accent: "#F59E0B"
  },
  {
    id: "maintenance-evolution",
    num: "07",
    title: "Platform Maintenance & Continuous Evolution",
    subtitle: "Zero downtime, continuous optimization, peace of mind.",
    description:
      "Websites are living systems. We provide dedicated engineering retainers ensuring continuous security patching, lightning-fast edge performance, content updates, and ongoing experimental improvements.",
    deliverables: [
      "24/7 Uptime & Performance Monitoring",
      "Proactive Security Patches & Dependency Audits",
      "Dedicated Engineering Hours for New Features",
      "Monthly Core Web Vitals Health Reports",
      "Staging Environment & Zero-Downtime Deploys"
    ],
    capabilities: ["Edge Monitoring", "SLA Support", "Iterative Features", "Speed Maintenance"],
    tech: ["Vercel Monitoring", "GitHub Actions CI/CD", "Automated Lighthouse CI", "SSL & DNS Mgmt"],
    timeline: "Monthly Retainer",
    idealFor: "Clients who view their digital platform as an ongoing revenue driver.",
    accent: "#64748B"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "The Diagnosis & Scoping",
    duration: "Week 1",
    tagline: "Measure what matters before writing a single line.",
    description:
      "We do not start with generic questionnaires. We analyze your existing digital bottlenecks, evaluate where you are losing customers or burning operational hours, and define the exact leverage point where our work produces tangible ROI.",
    deliverables: [
      "Technical & Brand Audit Document",
      "Defined Creative Scope & Wireframe Outline",
      "Performance & Conversion Benchmarks",
      "Project Roadmap with Concrete Milestones"
    ],
    milestone: "Architectural Blueprint Approved"
  },
  {
    step: "02",
    title: "Art Direction & Interactive Sandbox",
    duration: "Weeks 2 – 3",
    tagline: "Design in the browser, not just static picture boards.",
    description:
      "We establish the typography, color hierarchy, and spatial rhythm. We test actual code prototypes directly in the browser so you can feel the transitions, touch interactions, and fluid typography on your actual phone and laptop.",
    deliverables: [
      "Bespoke Typographic & Color System",
      "Live Interactive Component Sandbox",
      "Key Viewport Layouts (Mobile, Tablet, Desktop)",
      "Motion & Micro-Interaction Signatures"
    ],
    milestone: "Design System & Prototypes Locked"
  },
  {
    step: "03",
    title: "Production Engineering & Intelligence",
    duration: "Weeks 3 – 5",
    tagline: "Semantic code, sub-second latency, zero bloat.",
    description:
      "We build the complete platform using modern, maintainable frontend architecture. We wire up databases, configure payment engines, integrate intelligent AI workflows, and ensure sub-second global edge response.",
    deliverables: [
      "Full Production Web Application (TypeScript)",
      "Database & Automated Workflows Connected",
      "Comprehensive Accessibility (a11y) & WCAG Compliance",
      "Automated WhatsApp / Email Trigger Integrations"
    ],
    milestone: "Staging Release Ready for Review"
  },
  {
    step: "04",
    title: "Calibration, Stress Testing & Launch",
    duration: "Week 6",
    tagline: "Polished to perfection before public release.",
    description:
      "We run rigorous multi-device testing (from 360px smartphones to 4K displays), conduct Lighthouse speed audits, configure rich SEO metadata, and execute a zero-downtime cutover to your production domain.",
    deliverables: [
      "Cross-Browser & Multi-Device Validation",
      "100/100 Core Web Vitals Optimization",
      "Production Vercel Edge Cutover & SSL",
      "Full Codebase & Asset Handover Documentation"
    ],
    milestone: "Live Launch on secondalgorithm.space"
  }
];

export const FAQS = [
  {
    question: "How is Second Algorithm different from a traditional digital agency?",
    answer:
      "Most agencies either build pretty websites that load sluggishly with bloated templates, or build dry technical software with zero visual personality. Second Algorithm unites both: expressive, high-fashion art direction with relentless, sub-second software engineering and intelligent backend automation."
  },
  {
    question: "Do you use WordPress or website builders like Wix?",
    answer:
      "No. We write clean, bespoke code (typically React, Next.js, Vite, and TypeScript with vanilla CSS design systems). This guarantees infinite design flexibility, unbreakable security, zero template bloat, and loading speeds under 400 milliseconds."
  },
  {
    question: "Can you automate our business operations alongside the website?",
    answer:
      "Yes. In fact, that is one of our greatest strengths. We connect your digital presence directly to automated appointment schedulers, WhatsApp customer bots, CRM pipelines, and payment reconciliations so your business operates seamlessly 24/7."
  },
  {
    question: "How long does a typical project take from brief to launch?",
    answer:
      "A focused digital experience or flagship redesign typically takes 3 to 6 weeks. More complex platforms with custom AI pipelines or multi-location booking engines take 6 to 8 weeks. We work in dedicated, focused milestone phases with transparent progress check-ins."
  },
  {
    question: "How do we get started?",
    answer:
      "Book a discovery call directly with us or submit a brief through our inquiry form below. We will analyze your requirements and provide a clear, fixed-scope proposal within 48 hours."
  }
];
