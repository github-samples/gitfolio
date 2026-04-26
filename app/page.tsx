import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            KADEEJA BAI
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">


        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"ABOUT ME"}
            </h2>

            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />

              <Image
                src={`${basePath}/me.jpg`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
           I’ve spent the last 8+ years deep in the guts of streaming app development, ensuring the pixels you see flow seamlessly across your screen. But while my days are built on logic, my life is fueled by art and exploration.
Whether I’m architecting a high-scale commerce platform or navigating a hidden alleyway in a city I’ve just discovered, I’m looking for the same thing: "Great Design"
              <br />
              <br />
              <strong className="text-fuchsia-400 font-bold">DREAM BIG.</strong>
            </p>
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> JavaScript / TypeScript / HTML5 </li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Lightning / Node.js / Next.js</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Git / GitHub / VS Code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Always learning</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Problem-solving</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Communication</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Commerce Journey Expert</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              LET'S CONNECT
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <a
                href="mailto:kadeejabai@gmail.com"
                className="group flex items-center gap-3 px-6 py-4 bg-[#0a0a1a] border border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
              >
                <MailIcon className="w-5 h-5 text-cyan-500 group-hover:text-cyan-300 transition-colors" />
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors font-mono tracking-wider">kadeejabai@gmail.com</span>
                <ArrowUpRightIcon className="w-4 h-4 text-cyan-700 group-hover:text-cyan-400 transition-colors ml-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/kadeeja-bai-418321128"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-[#0a0a1a] border border-fuchsia-900/30 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)] transition-all duration-300"
              >
                <LinkedInIcon className="w-5 h-5 text-fuchsia-500 group-hover:text-fuchsia-300 transition-colors" />
                <span className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors font-mono tracking-wider">LinkedIn Profile</span>
                <ArrowUpRightIcon className="w-4 h-4 text-fuchsia-700 group-hover:text-fuchsia-400 transition-colors ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Made with ❤️ by Kadeeja Bai</p>
      </footer>
    </div>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
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


function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}