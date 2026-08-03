import {
  Terminal,
  Gamepad2,
  Shield,
  ArrowUpRight,
  ArrowRight,
  Layers,
  Brain,
  Briefcase,
  Code2,
  Wrench,
  Compass,
  ShieldCheck,
  Footprints,
  Mail,
  CircleDot,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- Content (kept separate from markup so copy edits don't touch JSX) ---

const CAPABILITIES = [
  {
    icon: Code2,
    accent: 'indigo',
    title: 'Cloud & DevOps',
    body: 'AWS, Google Cloud (GCP), Microsoft Azure, Terraform, Docker, Azure DevOps, GitHub Actions, Heroku Apps.',
  },
  {
    icon: Shield,
    accent: 'emerald',
    title: 'Backend & Security',
    body: 'Dart, Python, Java, Node.js, TypeScript, Go, IAM, OAuth 2.0, Okta, Auth0, Apigee X.',
  },
  {
    icon: Brain,
    accent: 'amber',
    title: 'Frontend & Data',
    body: 'React, Next.js, Flutter, Tailwind CSS, SQL, PostgreSQL, MongoDB, Firestore.',
  },
] as const;

const PROJECTS = [
  {
    icon: Code2,
    accent: 'emerald',
    status: 'Active Development',
    title: 'Edibubble — Social Network',
    body: 'Cross-platform social networking app built with Flutter and Dart, focused on high-performance mobile and web UI rendering, backed by a Supabase (PostgreSQL) backend handling real-time sync, auth, and relational data.',
    stack: 'Flutter • Supabase • Dart',
    span: false,
    link: undefined as string | undefined, // private repo — add the URL here once it's public
  },
  {
    icon: Gamepad2,
    accent: 'indigo',
    status: 'Concept & Mechanics',
    title: 'Stick-Champ Engine',
    body: '2-player arcade fighting game engine in C# and Unity with deterministic rollback netcode for zero-latency remote multiplayer, plus frame-accurate state syncing and input-buffer prediction.',
    stack: 'Unity (C#) • Network State Sync',
    span: false,
    link: undefined as string | undefined, // private repo — add the URL here once it's public
  },
  {
    icon: Footprints,
    accent: 'rose',
    status: 'Early Prototyping',
    title: 'Untitled Quadruped Physics Game',
    body: 'A QWOP-inspired physical-comedy game for dogs: players drive each leg independently through ragdoll/procedural physics in Unity, trading precise control for the same glorious, chaotic failure states that made the original a classic — reimagined for four legs instead of two.',
    stack: 'Unity (C#) • Ragdoll Physics',
    span: false,
    link: undefined as string | undefined, // private repo — add the URL here once it's public
  },
  {
    icon: Wrench,
    accent: 'amber',
    status: 'Hardware & Making',
    title: 'Hardware & Maker Lab',
    body: 'Physical IoT and hardware security builds, including assembling and soldering a Slim Pwnagotchi for network auditing, plus custom CAD models and 3D-printed structural components for multi-part assemblies.',
    stack: 'Soldering • Assembly • 3D Printing',
    span: false,
    link: undefined as string | undefined,
  },
] as const;

const EXPERIENCE = [
  {
    role: 'Founding Software Engineer',
    org: 'Fletcher Jones Management Group',
    current: false,
    bullets: [
      "Built and led the company's first internal software engineering team, transitioning ownership of a six-year Salesforce platform from external contractors.",
      'Architected CI/CD pipelines via GitHub Actions, automating deployments and giving the executive suite real-time project visibility.',
      'Partnered with the CTO to map the technology landscape and define the roadmap for enterprise-wide stack consolidation.',
    ],
  },
  {
    role: 'Software Engineer I, Customer Identity Team',
    org: 'MGM Resorts International',
    current: false,
    bullets: [
      'Redesigned guest identity experiences, driving a 27% increase in login success and a 25.7% increase in account activation while eliminating major recurring guest-reported errors.',
      'Modernized identity systems to strict OAuth 2.0 compliance, coordinating cross-functional teams through integration changes across a polyglot stack (Java, Node.js, Python, Dart).',
      'Built high-performance Dart-based APIs on Google Firestore for personalized user preferences and targeted marketing offers.',
      'Assisted critical restoration efforts during an enterprise-wide security incident, rebuilding core networking and service environments.',
    ],
  },
  {
    role: 'Webmaster',
    org: 'Largo Consulting Services, LLC',
    current: false,
    bullets: [
      'Owned the full lifecycle — design, security, and optimization — of 11 client websites on WordPress and BigCommerce.',
      'Hardened web systems through proactive threat monitoring and custom IPS rule development, maintaining sub-hour resolution on bugs and vulnerabilities.',
    ],
  },
] as const;

const OFF_SCREEN = [
  { label: 'Physical', body: 'Futball, Calisthenics, Gardening, MMA' },
  { label: 'Acoustics', body: 'Learning Piano, Singing, Music Theory' },
  { label: 'Linguistics', body: 'Learning Spanish, Japanese, ASL' },
  { label: 'Hardware', body: '3D Printing, Circuits, Robotics, Lockpicking' },
] as const;

const ACCENT_STYLES = {
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
} as const;

const BADGE_STYLES = {
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
} as const;

const ICON_COLOR = {
  indigo: 'text-indigo-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
} as const;

const CONTACT_EMAIL = 'jeanluc.williams@proton.me';

const URL_LINKS = {
  github: 'https://github.com/jeanluc-w',
  linkedin: 'https://linkedin.com/in/jlsw',
  credentials: 'https://www.credential.net/profile/jeanlucwilliams49621/wallet',
};

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jean-Luc Williams',
  jobTitle: 'Software Engineer',
  email: `mailto:${CONTACT_EMAIL}`,
  url: 'https://jeanluc-williams.com',
  sameAs: [URL_LINKS.github, URL_LINKS.linkedin, URL_LINKS.credentials],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'New York University' },
    { '@type': 'CollegeOrUniversity', name: 'Rensselaer Polytechnic Institute' },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <main id="main-content" className="min-h-screen px-6 py-12 md:px-20 max-w-5xl mx-auto space-y-24 text-slate-300">
        {/* --- HERO --- */}
        <section className="space-y-6 pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
              Software Engineer | Cloud, Identity & Backend Systems
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono">
              <CircleDot className="w-3 h-3" />
              Open to New Opportunities
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Jean-Luc Williams
            <span className="block text-slate-400 text-2xl md:text-4xl font-normal mt-2">
              Secure Systems Engineering & Cognitive Design
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
            Software engineer with 6+ years building identity, cloud, and enterprise backend
            systems. Backed by a Master&rsquo;s in Cyber Security (NSA CAE-CD) and a background in
            Cognitive Engineering, I focus on turning ambiguous business requirements into secure,
            measurable technical wins.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition shadow-lg shadow-emerald-500/10"
            >
              Explore R&D Lab <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-white font-semibold transition border border-slate-700 hover:border-slate-600"
            >
              View Resume <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={URL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={URL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={URL_LINKS.credentials}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition"
              aria-label="NYU & NSA Cybersecurity Credentials"
            >
              <ShieldCheck className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">NSA & NYU Credentials</span>
            </a>
          </div>
        </section>

        {/* --- BIO --- */}
        <section className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
            <Brain className="w-4 h-4" />
            <span>The Engineering Philosophy</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Engineering for Complexity & Human Logic</h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            My engineering foundation merges technical execution with human-centered design. Rooted
            in early electrical engineering studies and formalized with a B.S. in Information
            Technology & Web Science, concentrating in Human-Computer Interaction/Cognitive
            Engineering from RPI, I approach systems with close attention to how they&rsquo;re used
            today and how they need to scale tomorrow.
          </p>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            Paired with an M.S. in Cyber Security from NYU and years of enterprise backend
            development, I build infrastructure that doesn&rsquo;t just function securely, but
            scales intuitively. Whether responding to an enterprise security incident or designing
            a cloud pipeline, the goal is the same: reliable, data-driven resilience.
          </p>
        </section>

        {/* --- CAPABILITIES --- */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Layers className="text-emerald-400 w-5 h-5" />
              Capabilities Matrix
            </h2>
            <span className="text-xs font-mono text-slate-500">Core Stack</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {CAPABILITIES.map(({ icon: Icon, accent, title, body }) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition space-y-3"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${ACCENT_STYLES[accent]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Terminal className="text-emerald-400 w-5 h-5" />
              Featured Projects & R&D
            </h2>
            <span className="text-xs font-mono text-slate-500">Active Build Lab</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map(({ icon: Icon, accent, status, title, body, stack, span, link }) => {
              const Wrapper = link ? 'a' : 'div';
              const wrapperProps = link
                ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={title}
                  {...wrapperProps}
                  className={`p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition space-y-4 flex flex-col justify-between ${
                    span ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <Icon className={`w-8 h-8 ${ICON_COLOR[accent]}`} />
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${BADGE_STYLES[accent]}`}>
                        {status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                      {title}
                      {link && <ArrowUpRight className="w-4 h-4 text-slate-500" />}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">{body}</p>
                  </div>
                  <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between border-t border-slate-800/60">
                    <span>{stack}</span>
                    {link ? (
                      <span className="text-emerald-400">View Project</span>
                    ) : (
                      <span className="text-slate-600">Not public yet</span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Briefcase className="text-emerald-400 w-5 h-5" />
              Professional Experience
            </h2>
            <span className="text-xs font-mono text-slate-500">6+ Years</span>
          </div>

          <div className="space-y-10 border-l-2 border-slate-800 pl-6 ml-2">
            {EXPERIENCE.map(({ role, org, current, bullets }) => (
              <div key={role} className="relative space-y-2">
                <div
                  className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-4 border-slate-950 ${
                    current ? 'bg-emerald-400' : 'bg-slate-600'
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">{role}</h3>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded w-fit">
                    {org}
                  </span>
                </div>
                <ul className="text-sm text-slate-400 leading-relaxed pt-2 space-y-2 list-disc pl-4 marker:text-slate-600">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- OFF-SCREEN --- */}
        <section className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800/60 space-y-4">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Off-Screen</span>
          </div>
          <h2 className="text-xl font-bold text-white">Continuous Growth</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-xs font-mono text-slate-300">
            {OFF_SCREEN.map(({ label, body }) => (
              <div key={label} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="block text-emerald-400 font-bold mb-0.5">{label}</span>
                {body}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 md:px-20 py-10 border-t border-slate-900 text-sm text-slate-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition"
          >
            <Mail className="w-4 h-4" />
            {CONTACT_EMAIL}
          </a>
          <p className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} Jean-Luc Williams. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}