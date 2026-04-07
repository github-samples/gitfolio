"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      <nav>
        <Link href="/">GITFOLIO</Link>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div>
          <Link href="#work">PROJECTS</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>
        </div>

        {menuOpen && (
          <div>
            <Link href="#work">PROJECTS</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#contact">CONTACT</Link>
          </div>
        )}
      </nav>

      <main>
        <h1>
          BUILD YOUR <br />
          <span>DEVELOPER PORTFOLIO</span>
        </h1>

        <p>A beginner-friendly portfolio template.</p>

        <Link href="#work">GET STARTED</Link>
      </main>

      <footer>
        Made with ❤️ by GitHub for Beginners
      </footer>

    </div>
  );
}