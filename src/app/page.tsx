"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Code2, Command, Download, Menu, Radio, X } from "lucide-react";
import { useState } from "react";
import ProjectUniverse from "@/components/ProjectUniverse";
import ResearchLab from "@/components/ResearchLab";
import CareerTimeline from "@/components/CareerTimeline";
import SkillsConstellation from "@/components/SkillsConstellation";
import AskAdvait from "@/components/AskAdvait";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const navItems = ["WORK", "RESEARCH", "EXPERIENCE", "ABOUT", "CONTACT"];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Advait Parab home"><span className="wordmark-mark">AP</span><span>ADVAIT PARAB</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>)}</nav>
        <div className="header-status"><span className="status-dot" /> AVAILABLE FOR SELECT WORK</div>
        <button className="menu-button" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation">{isMenuOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>

      <AnimatePresence>{isMenuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</motion.nav>}</AnimatePresence>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Radio size={13} />
            AI / ML / SOFTWARE ENGINEER
            <span className="eyebrow-rule" />
            BUILDING & RESEARCHING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
          >
            ADVAIT
            <br />
            <em>PARAB</em>
          </motion.h1>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            I build intelligent systems across machine learning, computer
            vision, LLMs, and applied research.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            style={{
              display: "flex",
              gap: "14px",
              marginTop: "32px",
              alignItems: "center",
            }}
          >
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                minWidth: "190px",
                height: "56px",
                padding: "0 18px",
                background: "#f5f5f5",
                color: "#090909",
                textDecoration: "none",
                border: "1px solid #f5f5f5",
                transition: "all 0.3s ease",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "#f5f5f5";
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  opacity: 0.45,
                }}
              >
                01
              </span>

              <span style={{ flex: 1 }}>EXPLORE WORK</span>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                minWidth: "190px",
                height: "56px",
                padding: "0 18px",
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.16)",
                transition: "all 0.3s ease",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  opacity: 0.45,
                }}
              >
                02
              </span>

              <span style={{ flex: 1 }}>VIEW RESUME</span>

              <Download size={15} />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "28px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.42)",
                marginRight: "6px",
              }}
            >
              CONNECT
            </span>

            <span
              style={{
                width: "32px",
                height: "1px",
                background: "rgba(255,255,255,0.16)",
                marginRight: "4px",
              }}
            />

            <a
              href="https://github.com/Acsel28"
              target="_blank"
              rel="noreferrer"
              aria-label="Advait Parab on GitHub"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "8px 11px",
                color: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.025)",
                textDecoration: "none",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Code2 size={14} />
              GITHUB
            </a>

            <a
              href="https://linkedin.com/in/advait-parab-22001b291"
              target="_blank"
              rel="noreferrer"
              aria-label="Advait Parab on LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "8px 11px",
                color: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.025)",
                textDecoration: "none",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <BriefcaseBusiness size={14} />
              LINKEDIN
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-instrument" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.8 }}>
          <div className="instrument-top"><span>FIELD NOTE / 001</span><span>LIVE SYSTEM</span></div>
          <div className="signal-graphic" aria-hidden="true">
            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 280 280" fill="none">
              <path d="M35 175L82 92L140 140L204 61L250 116L216 221L140 140L72 226L35 175Z" stroke="rgba(185,212,193,.32)" strokeWidth="1" />
              <path d="M82 92L216 221M204 61L140 140M72 226L250 116" stroke="rgba(233,232,227,.14)" strokeWidth="1" strokeDasharray="3 6" />
              <motion.path d="M35 175L82 92L140 140L204 61L250 116" stroke="#b9d4c1" strokeWidth="1" strokeDasharray="5 12" animate={{ strokeDashoffset: [0, -68] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
              {[{ x: 35, y: 175 }, { x: 82, y: 92 }, { x: 140, y: 140 }, { x: 204, y: 61 }, { x: 250, y: 116 }, { x: 216, y: 221 }, { x: 72, y: 226 }].map((node, index) => <motion.circle key={`${node.x}-${node.y}`} cx={node.x} cy={node.y} r={index === 2 ? 5 : 3} fill={index === 2 ? "#d5c5a8" : "#b9d4c1"} initial={{ opacity: 0.35 }} animate={{ opacity: [0.35, 1, 0.35], r: index === 2 ? [5, 6.5, 5] : [3, 4, 3] }} transition={{ duration: 2.4, delay: index * 0.18, repeat: Infinity }} />)}
            </svg>
            <motion.div className="signal-core" animate={{ boxShadow: ["0 0 0 rgba(185,212,193,0)", "0 0 24px rgba(185,212,193,.16)", "0 0 0 rgba(185,212,193,0)"] }} transition={{ duration: 3.5, repeat: Infinity }}><span className="font-mono text-[9px] tracking-[.12em]">MODEL / 01</span><span className="mt-1 text-[9px] text-[#b9d4c1]">ONLINE</span></motion.div>
          </div>
          <div className="instrument-bottom"><span>REASONING / CRAFT / IMPACT</span><span>40.7128° N, 74.0060° W</span></div>
        </motion.div>

        <div className="hero-meta"><span>SCROLL TO INVESTIGATE</span><ChevronDown size={14} /><span className="meta-line" /></div>
      </section>

      <section className="manifesto section-wrap"><div className="section-label"><span>00</span><span>ORIENTATION</span></div><p className="manifesto-text">The best models are not the loudest part of a product. They are the quiet, dependable layer that makes everything around them feel possible.</p></section>

      <ProjectUniverse />

      <ResearchLab />

      <CareerTimeline />

      <SkillsConstellation />

      <AskAdvait />

      <AboutSection />

      <ContactSection />

      <footer className="site-footer section-wrap"><span>© 2026 ADVAIT PARAB</span><span className="footer-command"><Command size={12} /> BUILT WITH CURIOSITY</span><a href="#top">BACK TO TOP <ArrowUpRight size={13} /></a></footer>
    </main>
  );
}
