"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;
    root.classList.toggle("dark", initialDark);
    setIsDark(initialDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050510] text-slate-900 dark:text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-900 dark:selection:text-fuchsia-200 overflow-x-hidden transition-colors duration-300">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-linear-to-t from-fuchsia-200/40 dark:from-fuchsia-900/20 to-transparent opacity-40 dark:opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050510]/80 backdrop-blur-md border-b border-cyan-500/20 dark:border-cyan-900/30 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-fuchsia-600 dark:from-cyan-400 dark:to-fuchsia-400 hover:to-cyan-500 dark:hover:to-cyan-400 transition-all duration-300"
          >
            GITFOLIO
          </Link>
          <div className="flex items-center gap-6 md:gap-8 text-xs font-bold tracking-widest uppercase text-cyan-800 dark:text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-600 dark:hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all cursor-pointer"
            >
              {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 dark:border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
              READY TO LAUNCH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-600 via-purple-600 to-cyan-600 dark:from-fuchsia-500 dark:via-purple-500 dark:to-cyan-500 animate-gradient-x">DEVELOPER PORTFOLIO</span> <br />
              IN MINUTES
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-fuchsia-500/50 pl-6">
            A beginner-friendly portfolio template that showcases your projects beautifully. Fork it, customize it, deploy it—no design skills required.
          </p>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-cyan-500/10 dark:bg-cyan-950/30 border border-cyan-600/50 dark:border-cyan-500/50 text-cyan-800 dark:text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-500/20 dark:hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-500/20 dark:border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-600 dark:text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.3)] dark:drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // YOUR_PROJECTS
            </h2>
            <span className="text-xs font-mono text-cyan-700">Showcase what you&apos;ve built with style</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard 
              title="PROJECT_ONE"
              description="Your first amazing project goes here. Describe what problem it solves and the tech you used to build it."
              tags={["REACT", "NEXTJS", "TAILWIND"]}
              color="cyan"
              href="#"
            />
            {/* Project 2 */}
            <ProjectCard 
              title="PROJECT_TWO"
              description="Your second project showcase. Tell visitors what makes this project special and what you learned building it."
              tags={["JAVASCRIPT", "API", "CSS"]}
              color="fuchsia"
              href="#"
            />
            {/* Project 3 */}
            <ProjectCard 
              title="PROJECT_THREE"
              description="Another project to highlight your skills. Share the impact or results of this work."
              tags={["TYPESCRIPT", "NODE", "EXPRESS"]}
              color="purple"
              href="#"
            />
            {/* Project 4 */}
            <ProjectCard 
              title="PROJECT_FOUR"
              description="Keep building and adding to your portfolio. Each project tells part of your developer story."
              tags={["PYTHON", "DJANGO", "POSTGRESQL"]}
              color="yellow"
              href="#"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-500/20 dark:border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>
            
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-4/5 border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-100/50 dark:bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(248,250,252,0.6)_100%)] dark:bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-size-[100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/me.png`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-80 dark:opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-slate-600 dark:text-cyan-100/80 leading-relaxed font-light">
            <p>
              Every developer has a unique journey. Share yours here—whether you&apos;re self-taught, a bootcamp grad, or transitioning careers. <strong className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">Your story matters.</strong> Talk about what drives you to code and the impact you want to make.
            </p>
            <div className="p-6 bg-white/80 dark:bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-700 dark:text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-500/30 dark:border-cyan-800 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> JavaScript / Python / TypeScript</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> React / Next.js / Node.js</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Git / GitHub / VS Code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-700 dark:text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-500/30 dark:border-cyan-800 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Always learning</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Ship &gt; Perfect</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Open source contributor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-500/20 dark:border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.2)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              READY TO <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500">LAUNCH?</span>
            </h2>
            <p className="text-slate-600 dark:text-cyan-200/60 text-lg">
              Fork this template on GitHub and make it yours. Update the content, add your projects, and deploy to GitHub Pages in under 30 minutes.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://github.com/ladykerr/gfbs3-portfolio-demo" 
                className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300 clip-path-polygon"
              >
                FORK ON GITHUB
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com" label="GITHUB" />
                <SocialLink href="https://linkedin.com" label="LINKEDIN" />
                <SocialLink href="https://twitter.com" label="TWITTER" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-slate-500 dark:text-cyan-900/50 border-t border-cyan-500/20 dark:border-cyan-900/20">
        <p>Made with ❤️ by <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub for Beginners</a> and <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub Copilot</a></p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-white dark:bg-[#0a0a1a] border border-cyan-500/20 dark:border-cyan-900/30 shadow-sm dark:shadow-none transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-slate-900 dark:text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-slate-600 dark:text-cyan-100/60 leading-relaxed font-light border-l border-cyan-500/30 dark:border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-800 dark:text-cyan-700 bg-cyan-50 dark:bg-cyan-950/30 px-2 py-1 border border-cyan-200 dark:border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-600 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function SunIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
