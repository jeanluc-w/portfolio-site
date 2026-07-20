import {
  Terminal,
  Cpu,
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
  ShieldCheck
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-20 max-w-5xl mx-auto space-y-24 text-slate-300">
      
      {/* --- HERO SECTION --- */}
      <section className="space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Solutions Architect | Cloud, Backend, & Data
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Jean-Luc Williams
          <span className="block text-slate-400 text-2xl md:text-4xl font-normal mt-2">
            Secure Systems Engineering & Cognitive Design
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
          Solutions Architect with 6+ years of experience designing scalable cloud infrastructure, enterprise backend systems, and secure, data-driven architectures. {/*[cite: 3] */} Combining a Master’s in Cyber Security (NSA CAE-CD) with a foundation in Cognitive Engineering, I specialize in aligning complex technical architecture with human-centered business objectives. {/*[cite: 3] */}
        </p>

        {/* Action Links */}
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
            href="https://github.com/jeanluc-w"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/jlsw"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.credential.net/profile/jeanlucwilliams49621/wallet"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition"
            aria-label="NYU & NSA Cybersecurity Credentials"
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">NSA & NYU Credentials</span>
          </a>
        </div>
      </section>

      {/* --- SYSTEMS MINDSET / BIO --- */}
      <section className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
          <Brain className="w-4 h-4" />
          <span>The Engineering Philosophy</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Engineering for Complexity & Human Logic</h2>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
          My engineering foundation merges technical execution with human-centered design. Rooted in early electrical engineering studies and formalized with a Bachelor of Science in Information Technology & Web Science concentrating in Human-Computer Interface/Cognitive Engineering from RPI, I approach systems with great consideration to how they are used by users and how they will scale in the future.
        </p>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
          Coupled with a Master of Science in Cyber Security from NYU and years of enterprise backend development, I build robust infrastructure that doesn't just function securely, but scales intuitively. Whether mitigating enterprise cyber events or designing cloud pipelines, my goal is reliable, data-driven resilience.
        </p>
      </section>

      {/* --- CAPABILITIES MATRIX --- */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Layers className="text-emerald-400 w-5 h-5" />
            Capabilities Matrix
          </h2>
          <span className="text-xs font-mono text-slate-500">Core Stack</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Cloud & DevOps</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AWS, Google Cloud (GCP), Microsoft Azure, Terraform, Docker, Azure DevOps, GitHub Actions, Heroku Apps.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Backend & Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dart, Python, Java, Node.js, TypeScript, Golang, IAM, OAuth 2.0, Okta, Auth0, Apigee X.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Frontend & Data</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              React, Next.js, Flutter, TailwindCSS, SQL, PostgreSQL, MongoDB, Firestore, Redis.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section id="projects" className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Terminal className="text-emerald-400 w-5 h-5" />
            Featured Projects & R&D
          </h2>
          <span className="text-xs font-mono text-slate-500">Active Build Lab</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project 1: Edibubble */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition space-y-4 flex flex-col justify-between md:col-span-2">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <Code2 className="w-8 h-8 text-emerald-400" />
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Active Development
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Edibubble — Social Network</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                Developed a cross-platform social networking application using Flutter and Dart, focused on high-performance mobile and web UI rendering. {/*[cite: 3] */} Designed and integrated a scalable backend utilizing Supabase (PostgreSQL), managing real-time data syncing, user authentication, and robust relational data schemas. {/*[cite: 3] */}
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between border-t border-slate-800/60">
              <span>Flutter • Supabase • Dart</span>
              <span className="text-emerald-400">Mobile & Web App</span>
            </div>
          </div>

          {/* Project 2: Stick-Champ */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <Gamepad2 className="w-8 h-8 text-indigo-400" />
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Concept & Mechanics
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Stick-Champ Engine</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architected a custom 2-player arcade fighting game engine in C# and Unity, implementing deterministic rollback netcode to ensure zero-latency remote multiplayer synchronization. {/*[cite: 3] */} Engineered precise frame data syncing and input buffer prediction mechanisms, optimizing complex network state logic for a target Steam release. {/*[cite: 3] */}
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-800/60">
              Focus: Unity (C#) & Network State Sync
            </div>
          </div>

          {/* Project 3: Physical & 3D Prototyping */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <Wrench className="w-8 h-8 text-amber-400" />
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Hardware & Making
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Hardware & Maker Lab</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Engineered physical IoT and hardware security systems, including the assembly, manual soldering, and configuration of a Slim Pwnagotchi for network auditing and experimenting. {/*[cite: 3] */} Designed custom CAD models for functional structural components, executed precision 3D-printing hardware upgrades, and prototyped complex multi-part physical assemblies. {/*[cite: 3] */}
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-800/60">
              Focus: Soldering, Assembly & 3D Printing
            </div>
          </div>

        </div>
      </section>

      {/* --- EXPERIENCE / RESUME TIMELINE --- */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Briefcase className="text-emerald-400 w-5 h-5" />
            Professional Experience
          </h2>
          <span className="text-xs font-mono text-slate-500">6+ Years</span>
        </div>

        <div className="space-y-10 border-l-2 border-slate-800 pl-6 ml-2">
          
          {/* Role 1: Fletcher Jones */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 border-4 border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg font-bold text-white">Founding Software Engineer</h3>
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded w-fit">
                Fletcher Jones Management Group
              </span>
            </div>
            <ul className="text-sm text-slate-400 leading-relaxed pt-2 space-y-2 list-disc pl-4 marker:text-slate-600">
              <li>Built and led the company's first internal software engineering team, successfully transitioning ownership of a six-year Salesforce platform from external contractors. {/*[cite: 3] */}</li>
              <li>Architected CI/CD pipelines via GitHub Actions, automating deployments across environments and providing the executive suite with transparent, real-time project visibility. {/*[cite: 3] */}</li>
              <li>Strategized with the CTO to map the global technology landscape, defining the roadmap for enterprise-wide stack consolidation and infrastructure optimization. {/*[cite: 3] */}</li>
            </ul>
          </div>

          {/* Role 2: MGM Resorts */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-600 border-4 border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg font-bold text-white">Software Engineer I, Customer Identity Team</h3> {/*[cite: 3] */}
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded w-fit">
                MGM Resorts International
              </span>
            </div>
            <ul className="text-sm text-slate-400 leading-relaxed pt-2 space-y-2 list-disc pl-4 marker:text-slate-600">
              <li>Transformed guest identity experiences, achieving a 27% increase in login success and a 25.7% boost in account activation while eliminating major recurring guest-reported errors. {/*[cite: 3] */}</li>
              <li>Modernized Identity systems to ensure strict OAuth 2.0 compliance, guiding cross-functional teams through complex integration updates in a polyglot environment (Java, Node.js, Python, Dart). {/*[cite: 3] */}</li>
              <li>Developed high-performance Dart-based APIs for Google Firestore, enabling personalized user preference storage and tailored marketing offers. {/*[cite: 3] */}</li>
              <li>Executed critical restoration tasks during an enterprise-wide security event, rebuilding core networking and service environments to facilitate total business recovery. {/*[cite: 3] */}</li>
            </ul>
          </div>

          {/* Role 3: Webmaster / Consultant */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-600 border-4 border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg font-bold text-white">Webmaster</h3>
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded w-fit">
                LARGO Consulting Services, LLC
              </span>
            </div>
            <ul className="text-sm text-slate-400 leading-relaxed pt-2 space-y-2 list-disc pl-4 marker:text-slate-600">
              <li>Spearheaded the full-lifecycle management (design, security, and optimization) of 11 client websites on WordPress and BigCommerce platforms. {/*[cite: 3] */}</li>
              <li>Hardened web systems through proactive threat monitoring and custom IPS rule development, ensuring sub-hour resolution for site bugs and vulnerabilities. {/*[cite: 3] */}</li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- BEYOND THE SCREEN / PERSONAL --- */}
      <section className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800/60 space-y-4">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Off-Screen</span>
        </div>
        <h2 className="text-xl font-bold text-white">Continuous Growth</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-xs font-mono text-slate-300">
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="block text-emerald-400 font-bold mb-0.5">Physical</span>
            Daily Soccer, Calisthenics, Gardening
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="block text-emerald-400 font-bold mb-0.5">Acoustics</span>
            Learning Piano, Singing, Music Theory
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="block text-emerald-400 font-bold mb-0.5">Linguistics</span>
            Learning Spanish, Japanese, ASL
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="block text-emerald-400 font-bold mb-0.5">Hardware</span>
            3D Printing, Circuits, Robotics, Lockpicking
          </div>
        </div>
      </section>

    </main>
  );
}